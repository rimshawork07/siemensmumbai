import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { StickyMobileBar, FloatingWhatsApp } from "@/components/site/ContactButtons";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import {
  Hero,
  IndependenceBanner,
  IntroBlurb,
  Stats,
  Services,
  WhyChooseUs,
  WarrantySection,
  Testimonials,
  ServiceArea,
  FAQ,
  About,
  BookingSection,
  RepairProcess,
  CustomerTrust,
  BrandsWeRepair,
} from "@/components/site/Sections";

const title = "SIEMENS Service Centre in Mumbai- Siemens Mumbai";
const description =
  "Same-day Siemens washing machine repair across Mumbai. Genuine spare parts, experienced technicians, 1+ year warranty. Call +91 98338 75771.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Siemens Washing Machine Repair Mumbai, Washing Machine Repair Mumbai, Washing Machine Repair Services Mumbai, Same Day Washing Machine Repair Mumbai, Front Load Washing Machine Repair Mumbai, Top Load Washing Machine Repair Mumbai, Fully Automatic Washing Machine Repair Mumbai, Washing Machine Service Near Me, Bosch Washing Machine Repair Mumbai, Samsung Washing Machine Repair Mumbai, LG Washing Machine Repair Mumbai, IFB Washing Machine Repair Mumbai, Whirlpool Washing Machine Repair Mumbai, Washing Machine Repair Western Line Mumbai, Washing Machine Repair Central Line Mumbai, Washing Machine Repair Harbour Line Mumbai",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://siemensmumbai.in/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://siemensmumbai.in/" }],
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
        <IndependenceBanner />
        <Stats />
        <IntroBlurb />
        <Services />
        <BrandsWeRepair />
        <RepairProcess />
        <BookingSection />
        <WarrantySection />
        <WhyChooseUs />
        <CustomerTrust />
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
