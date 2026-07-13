import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/borivali")({
  head: () => areaHead("Borivali", "borivali"),
  component: () => <AreaPage area="Borivali" />,
});
