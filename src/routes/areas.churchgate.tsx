import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";
import { AREA_PAGES } from "@/lib/site";

const area = AREA_PAGES.find((a) => a.slug === "churchgate")!;

export const Route = createFileRoute("/areas/churchgate")({
  head: () => areaHead(area.name, area.slug, area.line),
  component: () => <AreaPage area={area.name} line={area.line} landmark={area.landmark} />,
});
