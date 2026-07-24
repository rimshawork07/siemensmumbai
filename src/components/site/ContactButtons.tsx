import { SITE } from "@/lib/site";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export function CallButton({
  className = "",
  label = "Call Now",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${SITE.phone}`}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-dark ${className}`}
    >
      <Phone className="h-5 w-5" aria-hidden />
      {label}
    </a>
  );
}

export function WhatsAppButton({
  className = "",
  label = "WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-95 ${className}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      {label}
    </a>
  );
}

export function BookButton({
  className = "",
  label = "Book Service",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#book"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-5 py-3 text-base font-semibold text-primary transition hover:bg-accent ${className}`}
    >
      <Calendar className="h-5 w-5" aria-hidden />
      {label}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl ring-4 ring-white/60 transition hover:scale-105 bottom-20 md:bottom-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px border-t border-border bg-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`tel:${SITE.phone}`}
        className="flex flex-col items-center justify-center gap-0.5 bg-primary py-2.5 text-primary-foreground"
      >
        <Phone className="h-5 w-5" aria-hidden />
        <span className="text-xs font-semibold">Call Now</span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 bg-whatsapp py-2.5 text-white"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>
      <a
        href="#book"
        className="flex flex-col items-center justify-center gap-0.5 bg-white py-2.5 text-primary"
      >
        <Calendar className="h-5 w-5" aria-hidden />
        <span className="text-xs font-semibold">Book</span>
      </a>
    </div>
  );
}
