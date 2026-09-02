"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Frown, AlignCenter, Droplet, Zap, AlertCircle, HeartPulse, RefreshCw, Smile, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROBLEMS } from "@/content/problems";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  gap: Frown,
  crooked: AlignCenter,
  stain: Droplet,
  chip: Zap,
  pain: AlertCircle,
  gum: HeartPulse,
  denture: RefreshCw,
  confidence: Smile,
};

export function ProblemPicker() {
  const [active, setActive] = useState(0);
  const current = PROBLEMS[active];
  const Icon = ICONS[current.icon] ?? Smile;

  return (
    <div>
      {/* Pill selector — every concern, always in the DOM for SEO/no-JS */}
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Dental concerns">
        {PROBLEMS.map((problem, i) => (
          <button
            key={problem.title}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-[var(--radius-pill)] border px-4 py-2 text-sm font-medium transition-colors",
              i === active
                ? "border-navy-900 bg-navy-900 text-cream-50"
                : "border-navy-900/15 bg-cream-50 text-navy-800 hover:border-navy-900/40"
            )}
          >
            {problem.title}
          </button>
        ))}
      </div>

      {/* Active concern detail */}
      <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-navy-900/10 bg-cream-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:p-10"
          >
            <Icon className="h-10 w-10 shrink-0 text-blush-500" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="font-display text-xl font-medium text-navy-900 sm:text-2xl">{current.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">{current.description}</p>
            </div>
            <Link
              href={`/services/${current.serviceSlug}`}
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-[var(--radius-sm)] bg-navy-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-navy-800 sm:self-center"
            >
              See how we help
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* All descriptions remain reachable without JS/interaction, visually hidden once JS is active */}
      <noscript>
        <div className="mt-8 grid grid-cols-1 gap-x-12 lg:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <div key={problem.title} className="border-t border-navy-900/10 py-8">
              <h3 className="font-display text-xl font-medium text-navy-900">{problem.title}</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500">{problem.description}</p>
            </div>
          ))}
        </div>
      </noscript>
    </div>
  );
}
