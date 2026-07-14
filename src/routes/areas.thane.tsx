import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/thane")({
  head: () => areaHead("Thane", "thane"),
  component: () => (
    <AreaPage
      area="Thane"
      localCopy="Fast, reliable Siemens washing machine repair across Thane — including Thane West, Ghodbunder Road, Manpada, Vartak Nagar, and nearby societies. Same-day service, genuine spare parts, and a 1+ year warranty on installed parts."
    />
  ),
});
