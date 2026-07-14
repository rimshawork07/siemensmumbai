import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./Header";
import { SiteFooter } from "./Footer";
import { StickyMobileBar, FloatingWhatsApp } from "./ContactButtons";
import { Hero, Services, WhyChooseUs, FAQ, BookingSection, Stats } from "./Sections";

export function AreaPage({ area, blurb }: { area: string; blurb?: string }) {
  const heading = `Siemens Washing Machine Repair in ${area}`;
  const sub = blurb ??
    `Looking for Siemens washing machine repair in ${area}? Our experienced technicians provide same-day washing machine repair services in ${area} and nearby areas of Mumbai — with genuine spare parts and a 1-year warranty.`;
  return (
    <>
      <SiteHeader />
      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-4 text-xs text-muted-foreground">
          <ol className="flex gap-1.5">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li>Areas</li>
            <li>/</li>
            <li aria-current="page" className="font-semibold text-foreground">{area}</li>
          </ol>
        </nav>
        <Hero heading={heading} subheading={sub} />
        <Stats />
        <section className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Trusted Siemens Washing Machine Technicians in {area}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We serve homes and apartments across {area} with fast, reliable Siemens washing machine repair. From drum and motor issues to drainage, spin and electronic board faults, our technicians diagnose and fix problems on the spot using genuine spare parts. Every repair carried out in {area} comes with a 1-year warranty on parts installed by us.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We repair front-load, top-load, semi and fully automatic Siemens washing machines. Book online, call, or WhatsApp us to arrange a same-day technician visit in {area}.
          </p>
        </section>
        <Services />
        <BookingSection areaHint={area} />
        <WhyChooseUs />
        <FAQ />
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}

export function areaHead(area: string, slug: string) {
  const title = `Siemens Washing Machine Repair in ${area}, Mumbai | Same Day Service`;
  const desc = `Same-day Siemens washing machine repair in ${area}, Mumbai. Genuine spare parts, experienced technicians, 1-year warranty. Call now.`;
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
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(bcJsonLd) }],
  };
}
