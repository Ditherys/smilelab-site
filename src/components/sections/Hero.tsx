"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-16">
      {/* Full-bleed clinic photography — real SmileLab reception interior */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/clinic/reception-interior.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-navy-950/50" />
      </div>

      {/* Ambient brand accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-blush-500/10 blur-3xl" />
        <div className="absolute -bottom-56 -left-32 h-[32rem] w-[32rem] rounded-full bg-champagne-400/10 blur-3xl" />
      </div>

      <Container className="relative grid grid-cols-1 items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-champagne-300"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {SITE.name} &middot; {SITE.location}
          </motion.p>

          <h1 className="font-display text-[3rem] leading-[1.05] font-medium text-cream-50 sm:text-[3.75rem] lg:text-[4.5rem]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {SITE.tagline[0]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="block font-script text-[1.2em] font-normal text-blush-400"
            >
              {SITE.tagline[1]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.31, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {SITE.tagline[2]}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 max-w-md text-base leading-relaxed text-cream-100/70 sm:text-lg"
          >
            {SITE.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" size="lg" variant="champagne">
              Book an Appointment
            </Button>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-cream-50/90 hover:text-cream-50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/25">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {SITE.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden justify-self-end rounded-[var(--radius-md)] border border-cream-50/15 bg-navy-950/40 px-5 py-4 backdrop-blur-md sm:block"
        >
          <p className="text-sm font-semibold text-cream-50">Newly built, {SITE.location}</p>
          <p className="mt-0.5 text-xs text-cream-100/60">A calmer kind of dental visit.</p>
        </motion.div>
      </Container>
    </section>
  );
}
