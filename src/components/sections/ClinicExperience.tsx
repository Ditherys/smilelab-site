"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = [
  { icon: ShieldCheck, title: "Modern, hygienic standards", description: "Sterilization and infection control protocols observed at every step." },
  { icon: Sparkles, title: "Thoughtfully designed space", description: "A calm, natural-light interior built to feel nothing like a typical clinic." },
  { icon: HeartHandshake, title: "Unhurried appointments", description: "Time is built into every visit — questions are always welcome." },
];

export function ClinicExperience() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]"
        >
          <Image
            src="/images/clinic/reception-interior.jpg"
            alt="The SmileLab Dental Center reception, Quezon City"
            fill
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <SectionHeading kicker="The clinic experience" title="A clinic built around comfort" scriptWord="comfort" tone="cream" />
          <div className="mt-9 space-y-7">
            {POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <point.icon className="mt-0.5 h-5 w-5 shrink-0 text-champagne-300" aria-hidden="true" />
                <div>
                  <h3 className="font-medium text-cream-50">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream-100/60">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
