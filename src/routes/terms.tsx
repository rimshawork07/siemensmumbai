import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Siemens Washing Machine Repair Mumbai" },
      {
        name: "description",
        content:
          "Terms and conditions for our independent Siemens washing machine repair service in Mumbai.",
      },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-extrabold">Terms &amp; Conditions</h1>
        <p className="mt-4 text-muted-foreground">
          By booking a service with us you agree to the terms below.
        </p>
        <h2 className="mt-8 text-xl font-bold">Service</h2>
        <p className="mt-2 text-muted-foreground">
          We provide independent repair and servicing for Siemens washing machines in Mumbai. We are
          not affiliated with or an official service center of Siemens.
        </p>
        <h2 className="mt-6 text-xl font-bold">Warranty</h2>
        <p className="mt-2 text-muted-foreground">
          We offer a 1-year warranty on spare parts installed by us. Warranty does not cover
          physical damage, water damage or repairs performed by third parties after our service.
        </p>
        <h2 className="mt-6 text-xl font-bold">Payment</h2>
        <p className="mt-2 text-muted-foreground">
          Charges are shared upfront before any repair work begins. Payment is due on completion.
        </p>
        <h2 className="mt-6 text-xl font-bold">Trademarks</h2>
        <p className="mt-2 text-muted-foreground">
          "Siemens" and related marks are the property of their respective owners and are used only
          for identification of the appliances we service.
        </p>
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
