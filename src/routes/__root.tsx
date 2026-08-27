import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { initGA, trackPageView } from "../lib/analytics";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BASE_URL, DEFAULT_OG_IMAGE, BRANDS } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Siemens Washing Machine Repair Specialists in Mumbai",
  description:
    "Independent Siemens washing machine repair and service in Mumbai. Same-day service, genuine spare parts, experienced technicians, 1-year warranty.",
  url: BASE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "+919833875771",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    addressCountry: "IN",
  },
  // Reflects the booking form's actual time-slot range (9 AM – 9 PM, every day).
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  areaServed: [
    { "@type": "City", name: "Mumbai" },
    { "@type": "AdministrativeArea", name: "Western Line, Mumbai Suburban Railway" },
    { "@type": "AdministrativeArea", name: "Central Line, Mumbai Suburban Railway" },
    { "@type": "AdministrativeArea", name: "Harbour Line, Mumbai Suburban Railway" },
  ],
  // Brands serviced, in addition to the Siemens specialism — supports
  // "<Brand> washing machine repair" search intent alongside the Siemens focus.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Washing Machine Repair Services",
    itemListElement: BRANDS.filter((b) => b !== "Other").map((b) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${b} Washing Machine Repair`,
        serviceType: "Washing Machine Repair",
        brand: { "@type": "Brand", name: b },
      },
    })),
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Siemens Washing Machine Repair Mumbai",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#business` },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#2f9e5f" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Siemens Washing Machine Repair Mumbai" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Initialize GA4 once
  useEffect(() => {
    initGA();
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  // Track page views on client‑side navigation
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      trackPageView(window.location.pathname + window.location.search);
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
