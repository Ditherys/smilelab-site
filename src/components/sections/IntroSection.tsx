"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

export function IntroSection() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blush-500">SmileLab Dental Center</p>
          <h2 className="font-display text-balance text-[2.25rem] font-medium leading-[1.12] text-navy-900 sm:text-[2.75rem]">
            A newly built dental home for {SITE.location}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
            SmileLab was built around a simple idea: dental care should feel unhurried, clearly explained, and genuinely
            comfortable. From general checkups to full smile transformations, every visit happens in a calm, modern
            space designed for exactly that.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Whether you&apos;re here for a routine cleaning, a tooth that&apos;s been bothering you, or a bigger change
            you&apos;ve been thinking about for a while, we start the same way — by listening.
          </p>
          <Button href="/about" variant="secondary" className="mt-8">
            Our story &amp; approach
          </Button>
        </motion.div>

        {/* Overlapping image collage — real clinic + real clinical photography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto aspect-[5/4] w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 right-[14%] top-[6%] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/clinic/reception-interior.jpg"
              alt="Inside SmileLab Dental Center's Quezon City clinic"
              fill
              sizes="(min-width: 1024px) 30rem, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-6%] left-[8%] right-0 top-[38%] overflow-hidden rounded-[var(--radius-lg)] border-4 border-cream-50 shadow-[var(--shadow-lift)]">
            <Image
              src="/images/clinical/implant-product-macro.jpg"
              alt="Precision implant and crown work at SmileLab Dental Center"
              fill
              sizes="(min-width: 1024px) 22rem, 60vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
