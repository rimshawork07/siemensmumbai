import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";

export const Route = createFileRoute("/areas/powai")({
  head: () => areaHead("Powai", "powai"),
  component: () => (
    <AreaPage
      area="Powai"
      localCopy="We provide same-day Siemens washing machine repair across Powai — including Hiranandani Gardens, Chandivali, IIT Powai, and Lake Homes. Our technicians handle front-load, top-load, and fully automatic Siemens machines with genuine spare parts and a 1+ year warranty on installed parts."
    />
  ),
});
