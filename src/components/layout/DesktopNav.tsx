"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PRIMARY_NAV } from "@/content/nav";
import { MegaMenu } from "./MegaMenu";
import { cn } from "@/lib/utils";

export function DesktopNav({ light }: { light: boolean }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  // Close on outside click and Escape — click/focus only ever *open* the
  // menu (hover already handles opening on desktop), so a real click can
  // never race a hover-triggered open into an immediate close.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const linkColor = light ? "text-cream-50/90 hover:text-cream-50" : "text-navy-800 hover:text-navy-950";

  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {PRIMARY_NAV.map((item) => {
        if (item.hasMegaMenu) {
          return (
            <div
              key={item.href}
              ref={wrapperRef}
              className="relative"
              onMouseEnter={() => {
                clearTimer();
                setOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls="services-mega-menu"
                onClick={() => setOpen(true)}
                onFocus={() => setOpen(true)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                  linkColor
                )}
              >
                {item.label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden="true" />
              </button>
              {open && <MegaMenu id="services-mega-menu" onNavigate={() => setOpen(false)} />}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("px-4 py-2 text-sm font-medium tracking-wide transition-colors", linkColor)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
