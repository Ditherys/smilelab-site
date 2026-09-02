import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/content/site";
import { PRIMARY_NAV } from "@/content/nav";
import { SERVICE_CATEGORIES } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-cream-100/80">
      <Container>
        <div className="grid grid-cols-1 gap-12 border-b border-cream-50/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="cream" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/60">{SITE.brandCopy.trustLine}</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-champagne-300">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-cream-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-champagne-300">Services</p>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="hover:text-cream-50">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-champagne-300">Visit</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blush-400" aria-hidden="true" />
                {SITE.areaLabel}
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 hover:text-cream-50">
                  <Phone className="h-4 w-4 shrink-0 text-blush-400" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.facebookUrl} className="flex items-center gap-2.5 hover:text-cream-50">
                  <MessageCircle className="h-4 w-4 shrink-0 text-blush-400" aria-hidden="true" />
                  {SITE.facebookLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-cream-100/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.location} — Dental Clinic Mockup</p>
        </div>
      </Container>
    </footer>
  );
}
