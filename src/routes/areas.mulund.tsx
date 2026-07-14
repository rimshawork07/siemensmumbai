import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/mulund")({
  head: () => areaHead("Mulund", "mulund"),
  component: () => (
    <AreaPage
      area="Mulund"
      localCopy="Trusted Siemens washing machine repair across Mulund — including Mulund West, Mulund East, Nahur, and surrounding residential neighbourhoods. Our experienced technicians offer same-day service, transparent pricing, and warranty-backed parts."
    />
  ),
});
