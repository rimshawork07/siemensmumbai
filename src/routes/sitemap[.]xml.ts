import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

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
          { path: "/areas/bandra", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/mahim", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/andheri", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/dadar", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/powai", changefreq: "monthly", priority: "0.8" },
          { path: "/areas/mulund", changefreq: "monthly", priority: "0.8" },

          {
            path: "/guides/siemens-washing-machine-error-codes",
            changefreq: "monthly",
            priority: "0.7",
          },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
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
