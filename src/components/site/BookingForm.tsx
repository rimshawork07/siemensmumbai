import { useState } from "react";
import { AREAS, SITE } from "@/lib/site";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", area: "", problem: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Send via WhatsApp as a fallback lead capture — replace with backend later.
    const msg = `New Booking Request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AArea: ${form.area}%0AIssue: ${form.problem}`;
    // Fire and forget — open WhatsApp with details prefilled.
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank", "noopener");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border-2 border-primary/30 bg-accent p-6 text-center">
        <h3 className="text-lg font-bold text-accent-foreground">Thank you.</h3>
        <p className="mt-2 text-sm text-accent-foreground">Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-xl border border-border bg-white p-5 shadow-sm sm:p-6">
      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Phone Number</label>
        <input
          required type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="+91"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Locality / Area in Mumbai</label>
        <select
          required value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        >
          <option value="">Select area</option>
          {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold">Problem Description</label>
        <textarea
          required rows={4} value={form.problem} onChange={(e) => setForm({ ...form, problem: e.target.value })}
          className="mt-1 w-full rounded-lg border border-border px-3 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="Describe the issue with your washing machine."
        />
      </div>
      <button type="submit" className="mt-1 rounded-lg bg-primary px-5 py-3 text-base font-bold text-primary-foreground shadow hover:bg-primary-dark">
        Book Service
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Prefer to talk? <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">Call {SITE.phoneDisplay}</a>
      </p>
    </form>
  );
}
