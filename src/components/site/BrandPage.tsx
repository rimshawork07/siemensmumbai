/* eslint-disable react-refresh/only-export-components */

import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyMobileBar, FloatingWhatsApp } from "./ContactButtons";
import { BASE_URL, DEFAULT_OG_IMAGE, type BrandInfo } from "@/lib/site";
import {
  Hero,
  Services,
  WhyChooseUs,
  WarrantySection,
  Testimonials,
  ServiceArea,
  BookingSection,
  Stats,
} from "./Sections";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function BrandPage({ brand }: { brand: BrandInfo }) {
  const heading = `${brand.name} Washing Machine Repair in Mumbai`;
  const sub = `Independent, experienced repair for ${brand.tagline}. Same-day service across Mumbai, genuine spare parts, and a 1+ year warranty on installed parts.`;
  const faqs = [
    {
      q: `Are you an authorized ${brand.name} service centre?`,
      a: `No. We are an independent, third-party repair service. We are not affiliated with, authorized by, or an official service centre of ${brand.name}. We repair ${brand.name} washing machines using genuine or OEM-compatible spare parts.`,
    },
    {
      q: `What ${brand.name} washing machine problems do you fix?`,
      a: `Common issues we repair include: ${brand.issues.join("; ")}.`,
    },
    {
      q: `Do you provide warranty on ${brand.name} repairs?`,
      a: "Yes. Every spare part we install is covered by a warranty of one year or more, confirmed on your service invoice.",
    },
    {
      q: `How fast can I get my ${brand.name} washing machine repaired?`,
      a: "We offer same-day service across most areas of Mumbai. Book by phone or WhatsApp and a technician typically arrives within a few hours.",
    },
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <SiteHeader />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-6xl px-4 pt-4 text-xs text-muted-foreground"
        >
          <ol className="flex gap-1.5">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Brands</li>
            <li>/</li>
            <li aria-current="page" className="font-semibold text-foreground">
              {brand.name}
            </li>
          </ol>
        </nav>
        <Hero heading={heading} subheading={sub} />
        <div className="mx-auto max-w-3xl px-4">
          <div className="mx-auto -mt-px flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-xs leading-relaxed text-secondary sm:text-sm">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{brand.note}</span>
          </div>
        </div>
        <Stats />
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
            Common {brand.name} Washing Machine Issues We Repair
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our technicians regularly diagnose and repair {brand.tagline.toLowerCase()}. Frequently
            reported issues include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {brand.issues.map((issue) => (
              <li
                key={issue}
                className="flex items-start gap-2 rounded-lg bg-white px-3 py-2 text-sm text-secondary shadow-sm ring-1 ring-border"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {issue}
              </li>
            ))}
          </ul>
        </section>
        <Services />
        <BookingSection />
        <WarrantySection />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <section id="faq" className="mx-auto max-w-3xl px-4 py-10 sm:py-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
            {brand.name} Repair — Frequently Asked Questions
          </h2>
          <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-secondary">
                  {q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition group-open:rotate-45">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </section>
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}

export function brandHead(brand: BrandInfo) {
  const title = `${brand.name} Washing Machine Repair in Mumbai | Same-Day Service`;
  const desc = `Independent ${brand.name} washing machine repair across Mumbai. Genuine spare parts, experienced technicians, 1+ year warranty on installed parts. Call +91 98338 75771.`;
  const path = `/brands/${brand.slug}`;
  const url = `${BASE_URL}${path}`;
  const bcJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: brand.name, item: url },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${brand.name} Washing Machine Repair`,
    name: `${brand.name} Washing Machine Repair in Mumbai`,
    description: desc,
    brand: { "@type": "Brand", name: brand.name },
    provider: {
      "@type": "LocalBusiness",
      name: "Siemens Washing Machine Repair Specialists in Mumbai",
      telephone: "+919833875771",
    },
    areaServed: { "@type": "City", name: "Mumbai" },
    url,
  };
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(bcJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  };
}
