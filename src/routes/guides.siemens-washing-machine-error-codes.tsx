import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar, FloatingWhatsApp } from "@/components/site/ContactButtons";
import { BookingSection } from "@/components/site/Sections";
import { SITE } from "@/lib/site";

const title = "Siemens Washing Machine Error Codes | Mumbai Repair Guide";
const description =
  "Common Siemens washing machine error codes (E18, F16, F21, F23, F43 and more) — what each code means and when to call a technician.";
const path = "/guides/siemens-washing-machine-error-codes";
const url = `https://siemensmumbai.lovable.app${path}`;

const CODES: { code: string; meaning: string; action: string }[] = [
  {
    code: "E18 / F18",
    meaning: "Drainage problem — the machine cannot pump out water within the expected time.",
    action:
      "Check the drain filter and drain hose for blockages. If clear, the drain pump likely needs service.",
  },
  {
    code: "F16",
    meaning: "Door not closed / locked correctly.",
    action:
      "Re-open and firmly close the door. If it persists, the door lock (interlock) may be faulty.",
  },
  {
    code: "F17",
    meaning: "Water inlet timeout — machine is not receiving water in time.",
    action:
      "Check the tap is open and inlet hose/filter isn't clogged. Low water pressure can also trigger this.",
  },
  {
    code: "F21",
    meaning: "Motor / drive fault — the drum isn't spinning correctly.",
    action: "Usually needs a technician: worn carbon brushes, tacho sensor or control module.",
  },
  {
    code: "F23",
    meaning: "Aquastop activated — water leak detected in the base tray.",
    action:
      "Turn off the tap and unplug the machine. A technician needs to locate the leak before further use.",
  },
  {
    code: "F25",
    meaning: "Aquasensor / turbidity sensor fault — the machine can't judge rinse water clarity.",
    action: "The sensor typically needs cleaning or replacement by a technician.",
  },
  {
    code: "F27",
    meaning: "Pressure sensor fault — incorrect water-level readings.",
    action: "Requires diagnosis of the pressure switch and its hose.",
  },
  {
    code: "F29",
    meaning: "No water flow detected during fill.",
    action:
      "Check the tap and inlet filter first; otherwise the flowmeter or inlet valve needs service.",
  },
  {
    code: "F34",
    meaning: "Door lock did not engage.",
    action: "The door interlock assembly usually needs replacement.",
  },
  {
    code: "F36 / F37 / F38",
    meaning: "Door lock circuit fault.",
    action: "Technician replacement of the door lock module.",
  },
  {
    code: "F43",
    meaning: "Motor is not turning as expected.",
    action:
      "May indicate a jammed drum, foreign object, or motor/tacho fault — stop use and call a technician.",
  },
  {
    code: "F57 / F59 / F61 / F63",
    meaning: "Electronic control / communication faults.",
    action: "Control board diagnosis required.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CODES.map((c) => ({
    "@type": "Question",
    name: `What does Siemens washing machine error ${c.code} mean?`,
    acceptedAnswer: { "@type": "Answer", text: `${c.meaning} ${c.action}` },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://siemensmumbai.lovable.app/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: "https://siemensmumbai.lovable.app/guides",
    },
    { "@type": "ListItem", position: 3, name: "Siemens error codes", item: url },
  ],
};

export const Route = createFileRoute("/guides/siemens-washing-machine-error-codes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-3xl px-4 pt-4 text-xs text-muted-foreground"
        >
          <ol className="flex gap-1.5">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Guides</li>
            <li>/</li>
            <li aria-current="page" className="font-semibold text-foreground">
              Siemens error codes
            </li>
          </ol>
        </nav>
        <article className="mx-auto max-w-3xl px-4 py-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
            Siemens Washing Machine Error Codes — What They Mean
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A blinking error code on your Siemens washing machine usually points to a specific fault
            — drainage, door lock, water inlet, motor or electronics. This guide lists the most
            common Siemens front-load and fully-automatic error codes seen in Mumbai homes, what
            each code means, and whether it's something you can safely check yourself before calling
            a technician.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            If you're unsure, don't force a wash cycle — unplug the machine and call us on{" "}
            <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">
              {SITE.phoneDisplay}
            </a>
            .
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/40 text-secondary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Code</th>
                  <th className="px-4 py-3 font-semibold">What it means</th>
                  <th className="px-4 py-3 font-semibold">What to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {CODES.map((c) => (
                  <tr key={c.code} className="align-top">
                    <td className="px-4 py-3 font-mono font-semibold text-secondary">{c.code}</td>
                    <td className="px-4 py-3 text-foreground">{c.meaning}</td>
                    <td className="px-4 py-3 text-muted-foreground">{c.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-2xl font-extrabold text-secondary">
            When to call a technician
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Drainage (E18/F18) and inlet (F17/F29) errors are often solved by clearing filters and
            checking hoses. Door-lock, motor, aquastop and control-board errors (F21, F23, F34, F43,
            F57+) need a trained technician with genuine Siemens spare parts — attempting these
            repairs yourself risks voiding your warranty and further damage.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Our Mumbai technicians carry diagnostic tools and genuine spare parts, and every
            installed part is covered by a 1+ year warranty.
          </p>
        </article>
        <BookingSection />
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}
