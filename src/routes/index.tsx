import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar, FloatingWhatsApp } from "@/components/site/ContactButtons";
import {
  Hero, IntroBlurb, Stats, Services, WhyChooseUs, WarrantySection,
  Testimonials, ServiceArea, FAQ, About, BookingSection,
} from "@/components/site/Sections";

const title = "Siemens Washing Machine Repair Mumbai | Same-Day";
const description = "Same-day Siemens washing machine repair across Mumbai. Genuine spare parts, experienced technicians, 1+ year warranty. Call +91 98338 75771.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "Siemens Washing Machine Repair Mumbai, Washing Machine Repair Mumbai, Same Day Washing Machine Repair Mumbai, Front Load Washing Machine Repair Mumbai, Top Load Washing Machine Repair Mumbai, Fully Automatic Washing Machine Repair Mumbai, Washing Machine Service Near Me, Bosch Washing Machine Repair Mumbai" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://siemensmumbai.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://siemensmumbai.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          heading="Siemens Washing Machine Repair Specialists in Mumbai"
          subheading="Trusted, professional washing machine repair across Mumbai — carried out by experienced, background-verified technicians with same-day service and genuine spare parts."
        />
        <Stats />
        <IntroBlurb />
        <Services />
        <BookingSection />
        <WarrantySection />
        <WhyChooseUs />
        <Testimonials />
        <ServiceArea />
        <About />
        <FAQ />
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <FloatingWhatsApp />
    </>
  );
}
