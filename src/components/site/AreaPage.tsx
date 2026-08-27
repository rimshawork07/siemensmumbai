/* eslint-disable react-refresh/only-export-components */

import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyMobileBar, FloatingWhatsApp } from "./ContactButtons";
import { BASE_URL, DEFAULT_OG_IMAGE, type RailLine } from "@/lib/site";
import {
  Hero,
  IndependenceBanner,
  Services,
  WhyChooseUs,
  WarrantySection,
  Testimonials,
  ServiceArea,
  FAQ,
  BookingSection,
  Stats,
  BrandsWeRepair,
} from "./Sections";

export function AreaPage({
  area,
  line,
  landmark,
  blurb,
  localCopy,
}: {
  area: string;
  line?: RailLine;
  landmark?: string;
  blurb?: string;
  localCopy?: string;
}) {
  const lineNote = line ? ` on Mumbai's ${line}` : "";
  const heading = `Siemens Washing Machine Repair in ${area}`;
  const sub =
    blurb ??
    `Looking for a trusted Siemens washing machine repair service in ${area}${lineNote}? Our experienced technicians provide same-day washing machine repair across ${area} and nearby localities — with genuine spare parts and a 1+ year warranty on installed parts.`;
  const local =
    localCopy ??
    `We serve homes and apartments across ${area}${lineNote} with fast, reliable Siemens washing machine repair. ${landmark ?? ""} From drum, bearing, and motor issues to drainage, spin, and electronic-board faults, our technicians diagnose and fix problems on the spot using genuine spare parts. Every repair carried out in ${area} is backed by a 1+ year warranty on installed parts.`;
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
            <li>Areas</li>
            <li>/</li>
            <li aria-current="page" className="font-semibold text-foreground">
              {area}
            </li>
          </ol>
        </nav>
        <Hero heading={heading} subheading={sub} />
        <IndependenceBanner />
        <Stats />
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl">
            Trusted Siemens Washing Machine Technicians in {area}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{local}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We repair front-load, top-load, semi and fully automatic Siemens washing machines — and
            service all other major brands. Book online, call, or WhatsApp us to arrange a same-day
            technician visit in {area}.
          </p>
        </section>
        <Services />
        <BrandsWeRepair />
        <BookingSection areaHint={area} />
        <WarrantySection />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <FAQ />
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}

export function areaHead(area: string, slug: string, line?: RailLine) {
  const title = `Siemens Washing Machine Repair in ${area}, Mumbai | Same-Day Service`;
  const desc = `Same-day Siemens washing machine repair in ${area}, Mumbai. Genuine spare parts, experienced technicians, 1+ year warranty on installed parts. Call +91 98338 75771.`;
  const path = `/areas/${slug}`;
  const url = `${BASE_URL}${path}`;
  const bcJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Areas", item: `${BASE_URL}/#areas` },
      { "@type": "ListItem", position: 3, name: area, item: url },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Washing Machine Repair",
    name: `Siemens Washing Machine Repair in ${area}, Mumbai`,
    description: desc,
    provider: {
      "@type": "LocalBusiness",
      name: "Siemens Washing Machine Repair Specialists in Mumbai",
      telephone: "+919833875771",
    },
    areaServed: {
      "@type": "Place",
      name: line ? `${area}, Mumbai (${line})` : `${area}, Mumbai`,
    },
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
