"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE } from "@/content/why-choose";

export function WhyChooseSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading kicker="Why SmileLab" title="Why patients choose us" scriptWord="choose" />

        <div className="divide-y divide-navy-900/10 border-t border-navy-900/10">
          {WHY_CHOOSE.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-[3rem_1fr] gap-6 py-7 sm:grid-cols-[4rem_1fr]"
            >
              <span className="font-display text-2xl text-champagne-500">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-navy-900">{reason.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-500">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
