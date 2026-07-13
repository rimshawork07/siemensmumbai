import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar } from "@/components/site/ContactButtons";
import {
  Hero, IntroBlurb, Stats, Services, WhyChooseUs, FAQ, About, BookingSection,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siemens Washing Machine Repair Service in Mumbai | Same Day Service" },
      {
        name: "description",
        content:
          "Expert independent Siemens washing machine repair service in Mumbai. Same-day service, genuine spare parts, experienced technicians and 1-year parts warranty. Call now.",
      },
      { name: "keywords", content: "Siemens Washing Machine Repair Mumbai, Siemens Washing Machine Service Mumbai, Front Load Washing Machine Repair Mumbai, Top Load Washing Machine Repair Mumbai, Fully Automatic Washing Machine Repair Mumbai, Washing Machine Repair Near Me, Siemens Service Center Mumbai" },
      { property: "og:title", content: "Siemens Washing Machine Repair Service in Mumbai | Same Day Service" },
      { property: "og:description", content: "Expert independent Siemens washing machine repair service in Mumbai. Same-day service, genuine spare parts, experienced technicians and 1-year parts warranty. Call now." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Siemens Washing Machine Repair Service in Mumbai | Same Day Service" },
      { name: "twitter:description", content: "Expert independent Siemens washing machine repair service in Mumbai. Same-day service, genuine spare parts, experienced technicians and 1-year parts warranty. Call now." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          heading="Independent Siemens Washing Machine Repair Specialists in Mumbai"
          subheading="We provide professional repair and servicing for Siemens washing machines across Mumbai. Our experienced technicians specialize in front-load, top-load, and fully automatic Siemens washing machines with same-day service and a 1-year warranty on installed parts."
        />
        <IntroBlurb />
        <Stats />
        <Services />
        <BookingSection />
        <WhyChooseUs />
        <About />
        <FAQ />
      </main>
      <SiteFooter />
      <StickyMobileBar />
    </>
  );
}
