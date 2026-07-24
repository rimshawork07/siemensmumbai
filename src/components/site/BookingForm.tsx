import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { AREAS, BRANDS, TIME_SLOTS, SITE } from "@/lib/site";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  customer_name: z.string().trim().min(2, "Please enter your name").max(100),
  phone_number: z.string().trim().min(7, "Enter a valid phone number").max(20),
  locality: z.string().min(1, "Please select your locality"),
  address_landmark: z.string().trim().max(200).optional().or(z.literal("")),
  washing_machine_brand: z.string().min(1, "Please select the brand"),
  problem_description: z.string().trim().min(1, "Please describe the problem").max(1000),
  preferred_service_date: z.string().optional().or(z.literal("")),
  preferred_time_slot: z.string().optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  customer_name: "",
  phone_number: "",
  locality: "",
  address_landmark: "",
  washing_machine_brand: "",
  problem_description: "",
  preferred_service_date: "",
  preferred_time_slot: "",
};

// End hour (24h, local time) for each configured slot.
const SLOT_END_HOUR: Record<string, number> = {
  "9 AM – 12 PM": 12,
  "12 PM – 3 PM": 15,
  "3 PM – 6 PM": 18,
  "6 PM – 9 PM": 21,
};

function todayLocalISO(now: Date) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

async function notifyBookingSubmitted(payload: {
  customer_name: string;
  phone_number: string;
  locality: string;
  address_landmark: string | null;
  washing_machine_brand: string;
  problem_description: string;
  preferred_service_date: string | null;
  preferred_time_slot: string | null;
}) {
  const response = await fetch("/api/booking-notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Notification request failed with status ${response.status}`);
  }
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const todayStr = useMemo(() => todayLocalISO(now), [now]);
  const isToday = form.preferred_service_date === todayStr;
  const currentHourFloat = now.getHours() + now.getMinutes() / 60;

  function isSlotDisabled(slot: string) {
    if (!isToday) return false;
    const end = SLOT_END_HOUR[slot];
    return end !== undefined && currentHourFloat >= end;
  }

  // If the currently selected slot becomes disabled (e.g. time ticked past it), clear it.
  useEffect(() => {
    if (form.preferred_time_slot && isSlotDisabled(form.preferred_time_slot)) {
      setForm((f) => ({ ...f, preferred_time_slot: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now, form.preferred_service_date]);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    // Date/time validation
    if (parsed.data.preferred_service_date) {
      if (parsed.data.preferred_service_date < todayStr) {
        setError("Please select an available date and time slot.");
        return;
      }
      if (
        parsed.data.preferred_service_date === todayStr &&
        parsed.data.preferred_time_slot &&
        isSlotDisabled(parsed.data.preferred_time_slot)
      ) {
        setError("Please select an available date and time slot.");
        return;
      }
    }
    setSubmitting(true);
    try {
      const payload = {
        customer_name: parsed.data.customer_name,
        phone_number: parsed.data.phone_number,
        locality: parsed.data.locality,
        address_landmark: parsed.data.address_landmark || null,
        washing_machine_brand: parsed.data.washing_machine_brand,
        problem_description: parsed.data.problem_description,
        preferred_service_date: parsed.data.preferred_service_date || null,
        preferred_time_slot: parsed.data.preferred_time_slot || null,
        status: "New",
        lead_source: "website",
        service_type: "washing_machine_repair",
      };
      const { error: dbError } = await supabase.from("service_bookings").insert(payload);
      if (dbError) throw dbError;

      try {
        await notifyBookingSubmitted(payload);
      } catch (notificationError) {
        console.error("Booking notification failed", notificationError);
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Booking submission failed", err);
      setError("We couldn't submit your request. Please call or WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-primary/30 bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-8 w-8"
          >
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-extrabold sm:text-2xl">
          Thank you for booking your washing machine service.
        </h3>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Our team will contact you shortly to confirm your request.
        </p>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          If you would like to know more about your booking or need to adjust the preferred date or
          time, please call us directly at{" "}
          <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-dark"
          >
            <span aria-hidden>📞</span> Call Now
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <span aria-hidden>💬</span> WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  const inputCls =
    "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6"
    >
      <div>
        <label htmlFor="bf-customer-name" className="block text-sm font-semibold">
          Customer Name<span className="text-primary">*</span>
        </label>
        <input
          id="bf-customer-name"
          required
          value={form.customer_name}
          onChange={(e) => update("customer_name", e.target.value)}
          className={inputCls}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="bf-phone-number" className="block text-sm font-semibold">
          Phone Number<span className="text-primary">*</span>
        </label>
        <input
          id="bf-phone-number"
          required
          type="tel"
          inputMode="tel"
          value={form.phone_number}
          onChange={(e) => update("phone_number", e.target.value)}
          className={inputCls}
          placeholder="+91"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-locality" className="block text-sm font-semibold">
            Locality<span className="text-primary">*</span>
          </label>
          <select
            id="bf-locality"
            required
            value={form.locality}
            onChange={(e) => update("locality", e.target.value)}
            className={inputCls}
          >
            <option value="">Select locality</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bf-brand" className="block text-sm font-semibold">
            Washing Machine Brand<span className="text-primary">*</span>
          </label>
          <select
            id="bf-brand"
            required
            value={form.washing_machine_brand}
            onChange={(e) => update("washing_machine_brand", e.target.value)}
            className={inputCls}
          >
            <option value="">Select brand</option>
            {BRANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="bf-landmark" className="block text-sm font-semibold">
          Address / Landmark
        </label>
        <input
          id="bf-landmark"
          value={form.address_landmark}
          onChange={(e) => update("address_landmark", e.target.value)}
          className={inputCls}
          placeholder="Building, street, landmark (optional)"
        />
      </div>
      <div>
        <label htmlFor="bf-problem" className="block text-sm font-semibold">
          Problem Description<span className="text-primary">*</span>
        </label>
        <textarea
          id="bf-problem"
          required
          rows={3}
          value={form.problem_description}
          onChange={(e) => update("problem_description", e.target.value)}
          className={inputCls}
          placeholder="Describe the issue with your washing machine."
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-date" className="block text-sm font-semibold">
            Preferred Service Date (optional)
          </label>
          <input
            id="bf-date"
            type="date"
            min={todayStr}
            value={form.preferred_service_date}
            onChange={(e) => {
              const v = e.target.value;
              if (v && v < todayStr) return;
              update("preferred_service_date", v);
            }}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="bf-time" className="block text-sm font-semibold">
            Preferred Time Slot (optional)
          </label>
          <select
            id="bf-time"
            value={form.preferred_time_slot}
            onChange={(e) => update("preferred_time_slot", e.target.value)}
            className={inputCls}
          >
            <option value="">Any time</option>
            {TIME_SLOTS.map((s) => {
              const disabled = isSlotDisabled(s);
              return (
                <option key={s} value={s} disabled={disabled}>
                  {s}
                  {disabled ? " (unavailable)" : ""}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {error && (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 rounded-lg bg-primary px-5 py-3 text-base font-bold text-primary-foreground shadow transition hover:bg-primary-dark disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Book Service"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Prefer to talk?{" "}
        <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">
          Call {SITE.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
