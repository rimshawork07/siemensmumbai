import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { CallButton, WhatsAppButton } from "./ContactButtons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1.5 text-xs sm:text-sm">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 font-semibold">
            <Phone className="h-3.5 w-3.5" /> Call Now: {SITE.phoneDisplay}
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5" /> Same-Day Service Across Mumbai
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground font-black">S</span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold leading-tight sm:text-base">Siemens Washing Machine Repair</span>
            <span className="block truncate text-[11px] text-muted-foreground sm:text-xs">Independent Repair Specialists · Mumbai</span>
          </span>
        </Link>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <CallButton className="!px-4 !py-2 text-sm" />
          <WhatsAppButton className="!px-4 !py-2 text-sm" />
        </div>
      </div>
    </header>
  );
}
