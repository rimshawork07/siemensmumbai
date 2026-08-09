import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | Siemens Washing Machine Repair Mumbai" },
      {
        name: "description",
        content:
          "Refund and cancellation policy for our independent Siemens washing machine repair service in Mumbai.",
      },
      { property: "og:title", content: "Refund & Cancellation Policy" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose-sm">
        <h1 className="text-3xl font-extrabold">Refund &amp; Cancellation Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Applicable to all service bookings made through this website, phone or WhatsApp.
        </p>

        <h2 className="mt-8 text-xl font-bold">Booking &amp; visit charges</h2>
        <p className="mt-2 text-muted-foreground">
          A technician visit may carry a nominal inspection/visiting charge, which will be
          communicated at the time of booking. This charge is separate from any repair or spare-part
          cost, which is always quoted and approved by the customer before work begins.
        </p>

        <h2 className="mt-6 text-xl font-bold">Cancellations</h2>
        <p className="mt-2 text-muted-foreground">
          You may cancel or reschedule your service request any time before the technician is
          dispatched, at no charge, by calling or messaging us on{" "}
          <a href={`tel:${SITE.phone}`} className="text-primary hover:underline">
            {SITE.phoneDisplay}
          </a>
          . If the technician has already been dispatched or has arrived at your location, the
          visiting charge (if applicable) is non-refundable.
        </p>

        <h2 className="mt-6 text-xl font-bold">Refunds on completed repairs</h2>
        <p className="mt-2 text-muted-foreground">
          Once a repair is completed, tested, and approved by the customer at the time of service,
          the service charge is non-refundable. If a spare part installed by us fails within the
          warranty period due to a manufacturing or installation defect, we will repair or replace
          it at no additional cost — see our warranty terms on the{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms &amp; Conditions
          </a>{" "}
          page.
        </p>

        <h2 className="mt-6 text-xl font-bold">Warranty-related returns</h2>
        <p className="mt-2 text-muted-foreground">
          Spare parts installed by our technicians carry a minimum one-year warranty. Warranty
          covers part failure under normal use; it does not cover physical damage, water damage,
          electrical surges, or issues caused by repairs performed by a third party after our
          service. To claim warranty service, contact us with your service invoice number.
        </p>

        <h2 className="mt-6 text-xl font-bold">How to request a cancellation or refund</h2>
        <p className="mt-2 text-muted-foreground">
          Call or WhatsApp{" "}
          <a href={`tel:${SITE.phone}`} className="text-primary hover:underline">
            {SITE.phoneDisplay}
          </a>
          , or email{" "}
          <a href={`mailto:${SITE.publicContactEmail}`} className="text-primary hover:underline">
            {SITE.publicContactEmail}
          </a>{" "}
          with your name, phone number and booking details. We aim to resolve all requests within
          2–3 business days.
        </p>
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
