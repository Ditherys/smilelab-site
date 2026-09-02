"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ServiceFeature({
  kicker,
  title,
  scriptWord,
  description,
  points,
  image,
  imageAlt,
  href,
  ctaLabel = "Learn more",
  reverse = false,
  tone = "cream",
}: {
  kicker: string;
  title: string;
  scriptWord?: string;
  description: string;
  points?: string[];
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel?: string;
  reverse?: boolean;
  tone?: "cream" | "navy";
}) {
  const isNavy = tone === "navy";
  return (
    <section className={cn("py-20 sm:py-28", isNavy ? "bg-navy-950" : "bg-cream-50")}>
      <Container>
        <div className={cn("grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20", reverse && "lg:[&>*:first-child]:order-2")}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]"
          >
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 40rem, 100vw" className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading kicker={kicker} title={title} scriptWord={scriptWord} description={description} tone={isNavy ? "cream" : "navy"} />
            {points && points.length > 0 && (
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className={cn("flex items-start gap-3 text-sm", isNavy ? "text-cream-100/80" : "text-slate-700")}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blush-400" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            <Button href={href} variant={isNavy ? "champagne" : "primary"} className="mt-8">
              {ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
