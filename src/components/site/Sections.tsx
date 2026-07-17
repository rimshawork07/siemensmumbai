import {
  Wrench, Sparkles, WashingMachine, Layers, ShieldCheck, Clock, BadgeCheck,
  IndianRupee, Users, ThumbsUp, Award, Phone, Star, MapPin, CheckCircle2, Quote,
} from "lucide-react";
import { SITE, AREA_GROUPS } from "@/lib/site";
import { CallButton, WhatsAppButton, BookButton } from "./ContactButtons";
import { BookingForm } from "./BookingForm";

/* ---------------- HERO ---------------- */

const HERO_BADGES: Array<[string, any]> = [
  ["4.9 Rated Service", Star],
  ["Same-Day Service Across Mumbai", Clock],
  ["Genuine Spare Parts", BadgeCheck],
  ["Experienced Technicians", Award],
];

export function Hero({ heading, subheading }: { heading?: string; subheading?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/60 via-white to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:py-10 sm:py-14">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Independent Siemens Repair Specialists
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl md:text-5xl">
            {heading ?? "Siemens Washing Machine Repair Service in Mumbai"}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subheading ?? "Trusted, professional washing machine repair across Mumbai — carried out by experienced, background-verified technicians."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallButton />
            <WhatsAppButton />
            <BookButton />
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {HERO_BADGES.map(([label, Icon]) => (
              <li key={label} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-border">
                <Icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-3xl bg-primary/10" />
          <div className="relative flex h-full flex-col justify-center rounded-3xl border border-primary/20 bg-white p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <WashingMachine className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Book in 60 seconds</p>
                <p className="text-lg font-bold text-secondary">Talk to a technician today</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <MiniStat n="2400+" label="Customers Served" />
              <MiniStat n="5400+" label="Service Requests" />
              <MiniStat n="5+" label="Years in Business" />
              <MiniStat n="4.9★" label="Rated Service" />
            </div>
            <a href={`tel:${SITE.phone}`} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-primary-foreground shadow">
              <Phone className="h-5 w-5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl bg-accent/50 p-3">
      <p className="text-xl font-extrabold text-primary">{n}</p>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

/* ---------------- STATS ---------------- */

export function Stats() {
  const items = [
    { n: "5+", label: "Years in Business", Icon: Award },
    { n: "2400+", label: "Customers Served Across Mumbai", Icon: ThumbsUp },
    { n: "5400+", label: "Service Requests Completed", Icon: BadgeCheck },
    { n: "Mumbai-Wide", label: "Trained & Experienced Technicians", Icon: Users },
  ];
  const badges = [
    "Same-Day Service Across Mumbai",
    "1+ Year Warranty on Installed Parts*",
    "Genuine Spare Parts",
    "Transparent Pricing",
  ];
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-10 sm:py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Trusted by thousands across Mumbai</h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Providing reliable washing machine repair services across Mumbai for over 5 years.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map(({ n, label, Icon }) => (
            <div key={label} className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10 backdrop-blur">
              <Icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">{n}</p>
              <p className="mt-1 text-xs leading-snug text-white/80 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <li key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" /> {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-white/60">
          *Warranty period may vary depending on the type of spare part installed.
        </p>
      </div>
    </section>
  );
}

/* ---------------- INTRO ---------------- */

export function IntroBlurb() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center">
      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
        We are an established, independent washing machine repair company serving customers across Mumbai. Our experienced technicians specialize in Siemens front-load, top-load, and fully automatic washing machines — and repair all major brands. Fast response, transparent pricing, and warranty-backed parts.
      </p>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  { title: "Washing Machine Repair", desc: "Diagnosis and repair for all washing machine issues.", Icon: Wrench },
  { title: "Washing Machine Service", desc: "Preventive maintenance, deep cleaning, and tune-up service.", Icon: Sparkles },
  { title: "Front Load Repair", desc: "Specialized repair for front-load machines including drum, bearing, and motor.", Icon: WashingMachine },
  { title: "Top Load Repair", desc: "Complete repair solutions for top-load machines.", Icon: Layers },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10 sm:py-10">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">Our Washing Machine Services</h2>
        <p className="mt-2 text-muted-foreground">Siemens specialists — also servicing all major washing machine brands.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, desc, Icon }) => (
          <article key={title} className="group flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-secondary">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            <a href={`tel:${SITE.phone}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-white p-4 text-center text-sm text-muted-foreground shadow-sm">
        We specialize in Siemens washing machine repairs and also provide repair services for all major washing machine brands.
      </p>
    </section>
  );
}

/* ---------------- WARRANTY ---------------- */

export function WarrantySection() {
  const points = [
    { t: "1+ Year Warranty on Installed Parts", d: "Every spare part installed by our technicians is covered by a warranty of one year or more." },
    { t: "Genuine, Compatible Spare Parts", d: "We source only genuine and compatible parts to ensure your machine performs like new." },
    { t: "Free Revisits Under Warranty", d: "If the same issue reoccurs within the warranty period, we return and fix it at no additional charge." },
    { t: "Transparent Warranty Terms", d: "The warranty period is communicated upfront and printed on your service invoice." },
  ];
  return (
    <section id="warranty" className="bg-gradient-to-b from-white to-accent/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-10 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Warranty You Can Trust
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
            1+ Year Warranty on Every Spare Part We Install
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We stand behind every repair. Any spare part fitted by our technicians is covered under a warranty of at least one year, giving you complete peace of mind. If a covered part fails within the warranty period, we replace it — no questions asked, no extra charge.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            *Warranty period may vary depending on the type of spare part installed. Full terms shared on your service invoice.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallButton label="Talk to Us" />
            <WhatsAppButton />
          </div>
        </div>
        <ul className="grid gap-3">
          {points.map(({ t, d }) => (
            <li key={t} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-secondary">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */

const WHY = [
  { title: "Washing Machine Specialists", Icon: WashingMachine, desc: "We repair only washing machines — deep expertise, not generalists." },
  { title: "Same-Day Service", Icon: Clock, desc: "Book today and get your washing machine running again with same-day service across Mumbai." },
  { title: "Genuine Spare Parts", Icon: BadgeCheck, desc: "Only genuine, compatible parts used for lasting repairs." },
  { title: "1+ Year Parts Warranty", Icon: ShieldCheck, desc: "Every spare part installed by us is warranty-backed for one year or more." },
  { title: "Experienced Technicians", Icon: Award, desc: "Professionally trained technicians with years of Siemens repair experience." },
  { title: "Transparent Pricing", Icon: IndianRupee, desc: "Upfront quote before any work begins. No hidden charges." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">Why Choose Us</h2>
          <p className="mt-2 text-muted-foreground">Trusted independent Siemens washing machine repair in Mumbai.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold text-secondary">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    name: "Ritika S.",
    area: "Bandra",
    text: "Booked in the morning and the technician arrived by afternoon. Fixed our Siemens front-load quickly and explained everything. Very professional.",
  },
  {
    name: "Arjun M.",
    area: "Andheri",
    text: "Transparent pricing and genuine parts. The machine has been running perfectly since the repair. Highly recommended for Siemens owners.",
  },
  {
    name: "Neha K.",
    area: "Dadar",
    text: "Great same-day service. The technician was courteous and knew exactly what was wrong. Appreciated the 1-year warranty on the part they installed.",
  },
  {
    name: "Faisal R.",
    area: "Mahim",
    text: "Called them for a drum bearing issue. They diagnosed it correctly on the first visit and completed the repair the same day. Excellent experience.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-10 sm:py-10">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">What our customers say</h2>
        <p className="mt-2 text-muted-foreground">Real feedback from customers across Mumbai.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="relative rounded-2xl border border-border bg-white p-6 shadow-sm">
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
            <div className="flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-bold text-primary">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-secondary">{t.name}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {t.area}, Mumbai</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICE AREA ---------------- */

const AREA_HIGHLIGHTS = [
  { name: "Bandra", slug: "bandra" },
  { name: "Mahim", slug: "mahim" },
  { name: "Dadar", slug: "dadar" },
  { name: "Andheri", slug: "andheri" },
  { name: "Powai", slug: "powai" },
  { name: "Mulund", slug: "mulund" },
];

export function ServiceArea() {
  return (
    <section id="areas" className="bg-accent/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MapPin className="h-3.5 w-3.5" /> Service Coverage
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">Serving All Areas Across Mumbai</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            We provide washing machine repair services throughout Mumbai city and its suburbs, with professionally trained technicians available across major localities.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {AREA_GROUPS.map(({ zone, localities }) => (
            <div key={zone} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-secondary">{zone}</h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {localities.map((l) => (
                  <li key={l} className="rounded-full bg-accent/60 px-2.5 py-1 text-xs font-medium text-secondary">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-primary/20 bg-white p-4 text-center text-sm font-medium text-secondary shadow-sm">
          Our professionally trained technicians are available across major localities throughout Mumbai, helping us provide fast and reliable washing machine repair services.
        </p>

        <div className="mt-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Popular localities</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {AREA_HIGHLIGHTS.map((a) => (
              <a key={a.slug} href={`/areas/${a.slug}`} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-secondary shadow-sm transition hover:border-primary hover:text-primary">
                {a.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- FAQ ---------------- */

const FAQS = [
  { q: "How quickly can you repair my washing machine?", a: "We offer same-day service across most areas of Mumbai. Book by phone or WhatsApp and our technician typically arrives within a few hours." },
  { q: "Do you provide warranty on repairs?", a: "Yes. We provide a warranty of one year or more on every spare part installed by us. The exact period depends on the type of part and is confirmed on your service invoice." },
  { q: "Do you repair front-load and top-load washing machines?", a: "Yes, we specialize in front-load, top-load, semi and fully automatic Siemens washing machines and also service all other major brands." },
  { q: "Do you use genuine spare parts?", a: "Yes. We only use genuine and compatible spare parts to ensure lasting repairs." },
  { q: "Which areas of Mumbai do you cover?", a: "We serve South Mumbai, Central Mumbai, Western Mumbai, and Eastern Mumbai (Powai, Bhandup, Mulund) — including Colaba, Worli, Lower Parel, Dadar, Mahim, Matunga, Chembur, Kurla, Ghatkopar, Bandra, Andheri, Goregaon, Powai and more." },
  { q: "How much does a washing machine repair cost?", a: "The final price depends on the issue and any parts required. Our technician provides an upfront, transparent quote before any work begins — you approve the price before we proceed." },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-10 sm:py-10">
      <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">Frequently Asked Questions</h2>
      <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-secondary">
              {q}
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

export function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center">
      <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">About Us</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We are an independent washing machine repair company in Mumbai with over five years of on-ground experience. We specialize in Siemens washing machines and provide repair, maintenance, and spare-part replacement services for all major brands across Mumbai and its suburbs.
      </p>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */

export function BookingSection({ areaHint }: { areaHint?: string }) {
  return (
    <section id="book" className="bg-gradient-to-b from-white to-accent/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-10 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Calendar className="h-3.5 w-3.5" /> Book Online
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">Book Your Washing Machine Service</h2>
          <p className="mt-3 text-muted-foreground">
            Fill the form and our team will call you back to confirm a same-day slot{areaHint ? ` in ${areaHint}` : ""}.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-secondary">
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Same-day service across Mumbai</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1+ year warranty on installed parts*</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Upfront transparent pricing</p>
            <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Experienced technicians</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

// Small local Calendar icon proxy to avoid another lucide import at top
import { Calendar } from "lucide-react";
