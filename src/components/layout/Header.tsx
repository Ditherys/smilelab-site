"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header({ variant = "overlay" }: { variant?: "overlay" | "solid" }) {
  const [scrolled, setScrolled] = useState(variant === "solid");

  useEffect(() => {
    if (variant === "solid") return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 48);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isLight = variant === "overlay" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[var(--ease-editorial)]",
        isLight
          ? "bg-transparent py-5"
          : "bg-cream-50/95 py-3 shadow-[0_1px_0_rgba(10,20,35,0.06)] backdrop-blur-sm"
      )}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link href="/" aria-label={`${SITE.name} — home`}>
          <Logo tone={isLight ? "cream" : "navy"} className="scale-90 sm:scale-100" />
        </Link>

        <DesktopNav light={isLight} />

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className={cn(
              "hidden items-center gap-1.5 text-sm font-medium md:flex",
              isLight ? "text-cream-50/90 hover:text-cream-50" : "text-navy-800 hover:text-navy-950"
            )}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <Button href="/contact" size="md" variant={isLight ? "champagne" : "primary"} className="hidden sm:inline-flex">
            Book an Appointment
          </Button>
          <MobileNav light={isLight} />
        </div>
      </div>
    </header>
  );
}
