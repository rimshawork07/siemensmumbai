import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { AREA_PAGES, BRAND_PAGES } from "@/lib/site";

const BASE_URL = import.meta.env.VITE_BASE_URL ?? "https://siemensmumbai.in";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          ...AREA_PAGES.map(
            (a): SitemapEntry => ({
              path: `/areas/${a.slug}`,
              changefreq: "monthly",
              priority: "0.8",
            }),
          ),
          ...BRAND_PAGES.map(
            (b): SitemapEntry => ({
              path: `/brands/${b.slug}`,
              changefreq: "monthly",
              priority: "0.8",
            }),
          ),
          {
            path: "/guides/siemens-washing-machine-error-codes",
            changefreq: "monthly",
            priority: "0.7",
          },
          { path: "/about", changefreq: "monthly", priority: "0.5" },
          // Privacy, Terms and Refund Policy are set to noindex (boilerplate legal
          // pages) and intentionally excluded from the sitemap.
        ];
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
