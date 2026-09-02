"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Syringe, Stethoscope, AlignCenter, Baby, Scissors, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/content/services";

const ICONS: Record<string, LucideIcon> = {
  implant: Syringe,
  sparkle: Sparkles,
  tooth: Stethoscope,
  braces: AlignCenter,
  surgery: Scissors,
  child: Baby,
};

const FEATURED_IMAGES: Record<string, { src: string; alt: string }> = {
  "dental-implants": {
    src: "/images/clinical/implant-product-macro.jpg",
    alt: "Dental implant, abutment, and crown — SmileLab Dental Center",
  },
  orthodontics: {
    src: "/images/clinical/braces-macro.jpg",
    alt: "Orthodontic braces case at SmileLab Dental Center",
  },
};

export function ServiceGrid() {
  const featured = SERVICE_CATEGORIES.filter((c) => c.featured);
  const standard = SERVICE_CATEGORIES.filter((c) => !c.featured);

  return (
    <div className="space-y-px">
      {/* Featured tiles — real clinical photography */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-t-[var(--radius-lg)] border border-b-0 border-navy-900/8 bg-navy-900/8 sm:grid-cols-2">
        {featured.map((category, i) => {
          const img = FEATURED_IMAGES[category.slug];
          return (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${category.slug}`}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-navy-950 p-7 sm:p-8"
              >
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-75 transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
                <div className="relative">
                  <span className="mb-2 inline-block rounded-full bg-champagne-400/90 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-navy-950">
                    Featured
                  </span>
                  <h3 className="font-display text-2xl font-medium text-cream-50">{category.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream-100/75">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-300 group-hover:text-champagne-200">
                    Explore treatments
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Standard tiles */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-b-[var(--radius-lg)] border border-navy-900/8 bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-4">
        {standard.map((category, i) => {
          const Icon = ICONS[category.icon] ?? Stethoscope;
          return (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${category.slug}`}
                className="group flex h-full flex-col bg-cream-50 p-7 transition-colors hover:bg-cream-100"
              >
                <Icon className="h-6 w-6 text-blush-500" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-medium text-navy-900">{category.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 group-hover:text-blush-500">
                  Explore treatments
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
