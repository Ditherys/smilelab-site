"use client";

import { motion } from "framer-motion";
import { IMPLANT_JOURNEY } from "@/content/why-choose";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TreatmentJourney() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          kicker="What to expect"
          title="The Implant Journey"
          description="Four clear stages, from first consultation to a finished, natural-looking tooth."
          tone="cream"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-cream-50/15 lg:block" aria-hidden="true" />
          {IMPLANT_JOURNEY.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-champagne-400/50 bg-navy-950 font-display text-lg text-champagne-300">
                {stage.step}
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-cream-50">{stage.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/60">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
