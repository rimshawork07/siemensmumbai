import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";

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
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
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
        <h2 className="mt-6 text-xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          For any privacy concern, email us at test@example.com.
        </p>
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
