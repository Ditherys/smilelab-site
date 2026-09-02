"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { PRIMARY_NAV } from "@/content/nav";
import { SERVICE_CATEGORIES } from "@/content/services";
import { SITE } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav({ light }: { light: boolean }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
        className={cn("p-2", light ? "text-cream-50" : "text-navy-900")}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-navy-950/50"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={panelRef}
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[61] flex w-[88vw] max-w-sm flex-col overflow-y-auto bg-cream-50 shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-5">
                <Logo />
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 text-navy-900">
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile primary" className="flex-1 px-6 py-4">
                <ul className="space-y-1">
                  {PRIMARY_NAV.map((item) => {
                    if (item.hasMegaMenu) {
                      return (
                        <li key={item.href} className="border-b border-navy-900/8 py-1">
                          <button
                            type="button"
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen((s) => !s)}
                            className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-navy-900"
                          >
                            {item.label}
                            <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} aria-hidden="true" />
                          </button>
                          <AnimatePresence initial={false}>
                            {servicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <ul className="space-y-3 pb-4 pl-1">
                                  {SERVICE_CATEGORIES.map((cat) => (
                                    <li key={cat.slug}>
                                      <Link
                                        href={`/services/${cat.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="text-sm font-medium text-navy-800"
                                      >
                                        {cat.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    }
                    return (
                      <li key={item.href} className="border-b border-navy-900/8">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 text-base font-medium text-navy-900"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-navy-900/10 px-6 py-6">
                <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-medium text-navy-800">
                  <Phone className="h-4 w-4 text-blush-500" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
                <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Book an Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
