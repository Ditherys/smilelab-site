"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS, TESTIMONIALS_DISCLAIMER } from "@/content/testimonials";

export function TestimonialSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container>
        <SectionHeading kicker="Patient voices" title="What it feels like to be a patient here" align="center" className="mb-14" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex h-full flex-col rounded-[var(--radius-md)] bg-cream-50 p-7 shadow-[var(--shadow-card)]"
            >
              <Quote className="h-6 w-6 text-blush-300" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-800">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-navy-900">{t.name}</span>
                <span className="text-slate-500"> &middot; {t.context}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500/70">{TESTIMONIALS_DISCLAIMER}</p>
      </Container>
    </section>
  );
}
