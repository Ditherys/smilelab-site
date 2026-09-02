"use client";

import { motion } from "framer-motion";
import { Building2, UserRound, Wrench, ClipboardCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const POINTS = [
  { icon: Building2, label: "Newly Built Clinic" },
  { icon: UserRound, label: "One Dentist, Full Continuity" },
  { icon: Wrench, label: "Modern Equipment" },
  { icon: ClipboardCheck, label: "Personalized Treatment Plans" },
];

export function TrustStrip() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 divide-x divide-y divide-navy-900/8 overflow-hidden rounded-[var(--radius-lg)] border border-navy-900/8 bg-cream-50 shadow-[var(--shadow-lift)] sm:grid-cols-4 sm:divide-y-0"
        >
          {POINTS.map((point) => (
            <div key={point.label} className="flex flex-col items-center gap-2.5 px-4 py-6 text-center sm:px-3">
              <point.icon className="h-5 w-5 text-blush-500" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-navy-900 sm:text-[0.8rem]">
                {point.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}
