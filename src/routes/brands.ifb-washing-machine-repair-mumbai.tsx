import { createFileRoute } from "@tanstack/react-router";
import { BrandPage, brandHead } from "@/components/site/BrandPage";
import { BRAND_PAGES } from "@/lib/site";

const brand = BRAND_PAGES.find((b) => b.slug === "ifb-washing-machine-repair-mumbai")!;

export const Route = createFileRoute("/brands/ifb-washing-machine-repair-mumbai")({
  head: () => brandHead(brand),
  component: () => <BrandPage brand={brand} />,
});
