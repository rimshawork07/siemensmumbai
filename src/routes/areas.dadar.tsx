import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/dadar")({
  head: () => areaHead("Dadar", "dadar"),
  component: () => <AreaPage area="Dadar" />,
});
