"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/content/services";
import { Sparkles, Syringe, Stethoscope, AlignCenter, Baby, Scissors } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  implant: Syringe,
  sparkle: Sparkles,
  tooth: Stethoscope,
  braces: AlignCenter,
  surgery: Scissors,
  child: Baby,
};

export function MegaMenu({ id, onNavigate }: { id: string; onNavigate?: () => void }) {
  return (
    <div
      id={id}
      role="menu"
      aria-label="Services menu"
      className="absolute left-1/2 top-full z-40 w-[min(90vw,68rem)] -translate-x-1/2 pt-3"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] overflow-hidden rounded-[var(--radius-lg)] border border-navy-900/10 bg-cream-50 shadow-[var(--shadow-lift)]">
        {/* Media panel */}
        <div className="relative hidden min-h-[24rem] flex-col justify-end bg-navy-950 p-8 md:flex">
          <Image
            src="/images/clinical/implant-product-macro.jpg"
            alt=""
            fill
            sizes="320px"
            className="object-cover opacity-70"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
          <div className="relative">
            <p className="font-script text-3xl text-champagne-300">Built to last.</p>
            <p className="mt-1 max-w-[16rem] text-sm text-cream-100/80">
              Every treatment at SmileLab starts with understanding your whole bite — not just the tooth in front of you.
            </p>
            <Link
              href="/services"
              onClick={onNavigate}
              className="mt-5 inline-block text-sm font-medium text-champagne-300 underline underline-offset-4 hover:text-champagne-200"
              role="menuitem"
            >
              View all services
            </Link>
          </div>
        </div>

        {/* Category columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-7 p-8">
          {SERVICE_CATEGORIES.map((category) => {
            const Icon = ICONS[category.icon] ?? Stethoscope;
            return (
              <div key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  onClick={onNavigate}
                  role="menuitem"
                  className="group mb-2.5 flex items-center gap-2 text-[0.95rem] font-semibold text-navy-900 hover:text-blush-500"
                >
                  <Icon className="h-4 w-4 text-blush-400 shrink-0" aria-hidden="true" />
                  {category.name}
                </Link>
                <ul className="space-y-1.5">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${category.slug}#${item.slug}`}
                        onClick={onNavigate}
                        role="menuitem"
                        className="text-sm text-slate-500 transition-colors hover:text-navy-800"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
