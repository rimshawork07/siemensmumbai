import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";
import { SITE, BASE_URL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Siemens Washing Machine Repair Mumbai" },
      {
        name: "description",
        content:
          "Privacy policy for our independent Siemens washing machine repair service in Mumbai.",
      },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:url", content: `${BASE_URL}/privacy` },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 prose-sm">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          We respect your privacy. Any contact details you share with us — name, phone number,
          address and problem description — are used solely to schedule and provide your Siemens
          washing machine repair service.
        </p>
        <h2 className="mt-8 text-xl font-bold">Information we collect</h2>
        <p className="mt-2 text-muted-foreground">
          Name, phone, email, area/address and the issue you describe when booking or contacting us.
        </p>
        <h2 className="mt-6 text-xl font-bold">How we use it</h2>
        <p className="mt-2 text-muted-foreground">
          To respond to service requests, dispatch technicians, share quotes and provide warranty
          follow-up. We do not sell your data.
        </p>
        <h2 className="mt-6 text-xl font-bold">Cookies &amp; advertising</h2>
        <p className="mt-2 text-muted-foreground">
          This website may use cookies and similar technologies, including Google Ads and Google
          Analytics, to measure how visitors use the site and to understand which advertising led to
          a booking. These tools may collect information such as your approximate location, device
          type and pages visited. You can control cookies through your browser settings.
        </p>
        <h2 className="mt-6 text-xl font-bold">Data retention</h2>
        <p className="mt-2 text-muted-foreground">
          We retain booking information for as long as needed to provide the service and honour any
          applicable warranty period, after which it may be deleted or anonymised.
        </p>
        <h2 className="mt-6 text-xl font-bold">Your rights</h2>
        <p className="mt-2 text-muted-foreground">
          You may request access to, correction of, or deletion of your personal information at any
          time by contacting us using the details below.
        </p>
        <h2 className="mt-6 text-xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          For any privacy concern, email us at{" "}
          <a href={`mailto:${SITE.publicContactEmail}`} className="text-primary hover:underline">
            {SITE.publicContactEmail}
          </a>{" "}
          or call{" "}
          <a href={`tel:${SITE.phone}`} className="text-primary hover:underline">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
