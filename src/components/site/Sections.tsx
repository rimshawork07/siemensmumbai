import {
  Wrench, Sparkles, WashingMachine, Layers, Cog, ShieldCheck, Clock, BadgeCheck,
  IndianRupee, Users, ThumbsUp, Award, Phone,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { CallButton, WhatsAppButton, BookButton } from "./ContactButtons";

export function Hero({ heading, subheading }: { heading?: string; subheading?: string }) {
  return (
    <section className="bg-gradient-to-b from-accent/60 to-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Independent Siemens Repair Specialists
          </span>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {heading ?? "Siemens Washing Machine Repair Service in Mumbai"}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subheading ?? "Expert repair and servicing for Siemens washing machines with same-day service, genuine spare parts, and a 1-year warranty on installed parts."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallButton />
            <WhatsAppButton />
            <BookButton />
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
            {[
              ["Same Day Service", Clock],
              ["1 Year Parts Warranty", ShieldCheck],
              ["Genuine Spare Parts", BadgeCheck],
              ["Experienced Technicians", Award],
            ].map(([label, Icon]: any) => (
              <li key={label} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-border">
                <Icon className="h-4 w-4 text-primary" />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 rounded-3xl bg-primary/10" />
          <div className="relative flex h-full flex-col justify-center rounded-3xl border border-primary/20 bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <WashingMachine className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Book in 60 seconds</p>
                <p className="text-lg font-bold">Talk to a technician today</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <Stat n="2400+" label="Happy Clients" />
              <Stat n="5400+" label="Jobs Completed" />
              <Stat n="5+" label="Years in Business" />
              <Stat n="5+" label="Skilled Technicians" />
            </div>
            <a href={`tel:${SITE.phone}`} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-primary-foreground">
              <Phone className="h-5 w-5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl bg-accent/50 p-3">
      <p className="text-xl font-extrabold text-primary">{n}</p>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export function IntroBlurb() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center">
      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
        We provide professional Siemens washing machine repair services throughout Mumbai. Our technicians specialize only in washing machines and are trained to repair front-load, top-load, and fully automatic models. Quick response, affordable pricing, and a one-year warranty on parts installed by us.
      </p>
    </section>
  );
}

export function Stats() {
  const items = [
    { n: "5+", label: "Years in Business", Icon: Award },
    { n: "2400+", label: "Happy Clients", Icon: ThumbsUp },
    { n: "5400+", label: "Jobs Completed", Icon: BadgeCheck },
    { n: "5+", label: "Skilled Technicians", Icon: Users },
  ];
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:py-10">
        {items.map(({ n, label, Icon }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto h-6 w-6 opacity-80" />
            <p className="mt-2 text-2xl font-extrabold sm:text-3xl">{n}</p>
            <p className="text-xs opacity-90 sm:text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  { title: "Washing Machine Repair", desc: "Diagnosis and repair for all Siemens washing machine issues.", Icon: Wrench },
  { title: "Washing Machine Service", desc: "Regular maintenance, deep cleaning and tune-up service.", Icon: Sparkles },
  { title: "Front Load Repair", desc: "Specialized repair for Siemens front-load machines.", Icon: WashingMachine },
  { title: "Top Load Repair", desc: "Complete repair solutions for top-load machines.", Icon: Layers },
  { title: "Fully Automatic Repair", desc: "Repair and servicing for fully automatic models.", Icon: Cog },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Our Siemens Washing Machine Services</h2>
        <p className="mt-2 text-muted-foreground">Specialists in Siemens washing machines only — nothing else.</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, desc, Icon }) => (
          <article key={title} className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            <a href={`tel:${SITE.phone}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-primary">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const WHY = [
  { title: "Washing Machine Specialists", Icon: WashingMachine, desc: "We repair only washing machines — deep expertise, not generalists." },
  { title: "Same-Day Service", Icon: Clock, desc: "Book today, get your machine running the same day across most of Mumbai." },
  { title: "Genuine Spare Parts", Icon: BadgeCheck, desc: "Only genuine, compatible parts used for lasting repairs." },
  { title: "1-Year Warranty", Icon: ShieldCheck, desc: "One-year warranty on all spare parts installed by us." },
  { title: "Experienced Technicians", Icon: Award, desc: "Trained technicians with years of Siemens repair experience." },
  { title: "Transparent Pricing", Icon: IndianRupee, desc: "Upfront quote before any work begins. No hidden charges." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Why Choose Us</h2>
          <p className="mt-2 text-muted-foreground">Trusted independent Siemens washing machine repair in Mumbai.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ title, desc, Icon }) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-base font-bold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How quickly can you repair my washing machine?", a: "We offer same-day service across most areas of Mumbai. Book by phone or WhatsApp and our technician typically arrives within a few hours." },
  { q: "Do you provide warranty?", a: "Yes. We provide a 1-year warranty on all spare parts installed by us." },
  { q: "Do you repair front-load and top-load washing machines?", a: "Yes, we specialize in front-load, top-load, semi and fully automatic Siemens washing machines." },
  { q: "Do you use genuine spare parts?", a: "Yes. We only use genuine and compatible spare parts to ensure lasting repairs." },
  { q: "Do you provide service across Mumbai?", a: "Yes. We serve all major areas including Bandra, Andheri, Dadar, Borivali, Powai, Thane, Navi Mumbai and more." },
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
    <section id="faq" className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Frequently Asked Questions</h2>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-white">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group p-5">
            <summary className="cursor-pointer list-none text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {q}
                <span className="text-primary transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

export function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-2xl font-extrabold sm:text-3xl">About Us</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        We are an independent washing machine repair company in Mumbai specializing in Siemens washing machines. We provide repair, maintenance, and spare part replacement services across Mumbai.
      </p>
    </section>
  );
}

export function BookingSection({ areaHint }: { areaHint?: string }) {
  return (
    <section id="book" className="bg-accent/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Book Siemens Washing Machine Service</h2>
          <p className="mt-3 text-muted-foreground">
            Fill the form and our team will call you back to confirm a same-day slot{areaHint ? ` in ${areaHint}` : ""}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
        {/* Booking form is a client island */}
        <BookingFormClient />
      </div>
    </section>
  );
}

import { BookingForm } from "./BookingForm";
function BookingFormClient() {
  return <BookingForm />;
}
