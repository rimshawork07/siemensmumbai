import { Link } from "@tanstack/react-router";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { Phone, Mail, MessageCircle } from "lucide-react";

const AREA_LINKS: Record<string, string> = {
  Bandra: "/areas/bandra",
  Mahim: "/areas/mahim",
  Andheri: "/areas/andheri",
  Dadar: "/areas/dadar",
  Borivali: "/areas/borivali",
  "Navi Mumbai": "/areas/navi-mumbai",
};

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/50 pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div>
          <h3 className="text-base font-extrabold">{SITE.brand}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Independent Siemens washing machine repair specialists serving Mumbai with same-day service and 1-year parts warranty.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 font-semibold text-primary">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold text-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp Chat
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Areas We Serve</h4>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm sm:grid-cols-3">
            {SERVICE_AREAS.map((a) => {
              const href = AREA_LINKS[a];
              return (
                <li key={a}>
                  {href ? (
                    <Link to={href} className="hover:text-primary">{a}</Link>
                  ) : (
                    <span className="text-muted-foreground">{a}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Legal</h4>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4">
        <p className="rounded-lg border border-border bg-white p-4 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> We are an independent Siemens washing machine repair service provider and are not affiliated with, authorized by, endorsed by, or an official service center of Siemens. All trademarks and brand names belong to their respective owners and are used solely for identification purposes.
        </p>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
