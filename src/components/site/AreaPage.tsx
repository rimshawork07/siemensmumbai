/* eslint-disable react-refresh/only-export-components */

import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyMobileBar, FloatingWhatsApp } from "./ContactButtons";
import {
  Hero,
  Services,
  WhyChooseUs,
  WarrantySection,
  Testimonials,
  ServiceArea,
  FAQ,
  BookingSection,
  Stats,
} from "./Sections";

export function AreaPage({
  area,
  blurb,
  localCopy,
}: {
  area: string;
  blurb?: string;
  localCopy?: string;
}) {
  const heading = `Siemens Washing Machine Repair in ${area}`;
  const sub =
    blurb ??
    `Looking for a trusted Siemens washing machine repair service in ${area}? Our experienced technicians provide same-day washing machine repair across ${area} and nearby localities — with genuine spare parts and a 1+ year warranty on installed parts.`;
  const local =
    localCopy ??
    `We serve homes and apartments across ${area} with fast, reliable Siemens washing machine repair. From drum, bearing, and motor issues to drainage, spin, and electronic-board faults, our technicians diagnose and fix problems on the spot using genuine spare parts. Every repair carried out in ${area} is backed by a 1+ year warranty on installed parts.`;
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

export function areaHead(area: string, slug: string) {
  const title = `Siemens Washing Machine Repair in ${area}, Mumbai | Same-Day Service`;
  const desc = `Same-day Siemens washing machine repair in ${area}, Mumbai. Genuine spare parts, experienced technicians, 1+ year warranty on installed parts. Call +91 98338 75771.`;
  const path = `/areas/${slug}`;
  const bcJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: area, item: path },
    ],
  };
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(bcJsonLd) }],
  };
}
