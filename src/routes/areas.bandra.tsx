import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/bandra")({
  head: () => areaHead("Bandra", "bandra"),
  component: () => <AreaPage area="Bandra" />,
});
