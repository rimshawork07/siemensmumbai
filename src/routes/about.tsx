import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";
import { SITE, BASE_URL, DEFAULT_OG_IMAGE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Siemens Washing Machine Repair Mumbai" },
      {
        name: "description",
        content:
          "About our independent Siemens washing machine repair service in Mumbai — who we are, what we do, and where we operate.",
      },
      { property: "og:title", content: "About Us" },
      { property: "og:url", content: `${BASE_URL}/about` },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose-sm">
        <h1 className="text-3xl font-extrabold">About {SITE.brand}</h1>
        <p className="mt-4 text-muted-foreground">
          Independent appliance repair specialists, serving Mumbai since 2021.
        </p>

        <h2 className="mt-8 text-xl font-bold">Who we are</h2>
        <p className="mt-2 text-muted-foreground">
          We are an independently owned and operated washing machine repair company based in Mumbai,
          Maharashtra. We have been repairing washing machines for Mumbai households since 2021,
          with a focus on Siemens and Bosch front-load and top-load machines. We are not a
          manufacturer, distributor, or retailer — we are a local service business that visits
          customers&rsquo; homes to diagnose and repair their existing washing machines.
        </p>

        <h2 className="mt-6 text-xl font-bold">What we do</h2>
        <p className="mt-2 text-muted-foreground">
          We offer the following services, delivered in person at the customer&rsquo;s home or
          premises:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Diagnosis and repair of washing machine faults (drum, motor, bearing, PCB, drainage,
            heating element and similar issues)
          </li>
          <li>Preventive maintenance and deep-cleaning service visits</li>
          <li>Replacement of spare parts using genuine or OEM-compatible components</li>
          <li>Installation and demo assistance for newly purchased machines</li>
          <li>Post-repair testing and a minimum one-year warranty on parts we install</li>
        </ul>

        <h2 className="mt-6 text-xl font-bold">What we are not</h2>
        <p className="mt-2 text-muted-foreground">
          We are an{" "}
          <strong className="text-foreground">independent, third-party repair provider</strong>. We
          are not affiliated with, authorized by, endorsed by, sponsored by, or an official service
          partner of Siemens, BSH Hausgeräte, or any washing machine manufacturer whose products we
          service. &ldquo;Siemens&rdquo; and other brand names appearing on this site refer solely
          to the products we repair and are the trademarks of their respective owners.
        </p>

        <h2 className="mt-6 text-xl font-bold">Where we operate</h2>
        <p className="mt-2 text-muted-foreground">
          We serve customers across South, Central, Western and Eastern Mumbai, including Colaba,
          Bandra, Andheri, Dadar, Powai and Mulund. Our technicians are based in Mumbai and travel
          to the customer&rsquo;s location for every service visit — we do not offer remote or
          over-the-phone technical support.
        </p>

        <h2 className="mt-6 text-xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          Phone / WhatsApp:{" "}
          <a href={`tel:${SITE.phone}`} className="text-primary hover:underline">
            {SITE.phoneDisplay}
          </a>
          <br />
          Email:{" "}
          <a href={`mailto:${SITE.publicContactEmail}`} className="text-primary hover:underline">
            {SITE.publicContactEmail}
          </a>
        </p>
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
