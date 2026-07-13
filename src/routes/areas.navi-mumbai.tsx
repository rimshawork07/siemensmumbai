import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/navi-mumbai")({
  head: () => areaHead("Navi Mumbai", "navi-mumbai"),
  component: () => <AreaPage area="Navi Mumbai" />,
});
