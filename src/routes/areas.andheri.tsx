import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/andheri")({
  head: () => areaHead("Andheri", "andheri"),
  component: () => <AreaPage area="Andheri" />,
});
