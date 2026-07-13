import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/mahim")({
  head: () => areaHead("Mahim", "mahim"),
  component: () => <AreaPage area="Mahim" />,
});
