import type { Metadata } from "next";
import Image from "next/image";
import { Ear, BookOpen, LayoutGrid } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { DentistProfileDetailed } from "@/components/sections/DentistProfileDetailed";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "The story, philosophy, and people behind SmileLab Dental Center in Quezon City.",
  alternates: { canonical: "/about" },
};

const APPROACH = [
  {
    icon: Ear,
    title: "Understand before we treat",
    description:
      "Every visit starts with listening — what's bothering you, what you're hoping for, and what's realistic. Treatment plans come after that conversation, not before it.",
  },
  {
    icon: BookOpen,
    title: "Explain in plain language",
    description:
      "No jargon left unexplained. If a term matters to your decision, we'll walk through what it means and why it's relevant to your case.",
  },
  {
    icon: LayoutGrid,
    title: "Plan for the whole bite",
    description:
      "Even a single-tooth concern is considered in the context of your full bite, so today's fix supports — rather than complicates — tomorrow's dental health.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About SmileLab"
        title="A dental home built on explaining, not just treating"
        description="SmileLab Dental Center opened in Quezon City with one goal: make quality dental care feel calm, clear, and genuinely personal."
        image="/images/clinic/reception-interior.jpg"
        imageAlt="Inside SmileLab Dental Center, Quezon City"
      />

      {/* Story */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading kicker="Our story" title="Why SmileLab exists" scriptWord="exists" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600">
            <p>
              SmileLab was built around a simple frustration many patients share: dental visits that feel rushed,
              plans that aren&apos;t explained, and treatment that&apos;s recommended without context. We wanted a
              clinic that did the opposite.
            </p>
            <p>
              From general and restorative dentistry to dental implants, cosmetic work, orthodontics, oral surgery,
              and pediatric care, every service at SmileLab is delivered the same way — with time taken to explain
              what&apos;s happening and why, before anything is decided.
            </p>
            <p>
              The clinic itself was designed with that same intention: a calm, modern space in Quezon City that
              doesn&apos;t feel clinical in the cold sense of the word — comfortable enough that a routine visit
              doesn&apos;t feel like a chore, and reassuring enough that a bigger procedure feels manageable.
            </p>
          </div>
        </Container>
      </section>

      <DentistProfileDetailed />

      {/* Approach */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Our approach" title="How we practice dentistry" scriptWord="practice" tone="cream" align="center" className="mb-16" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {APPROACH.map((item, i) => (
              <div key={item.title} className="border-t border-champagne-400/40 pt-6">
                <item.icon className="h-6 w-6 text-champagne-300" aria-hidden="true" />
                <span className="mt-4 block font-display text-lg text-champagne-300">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-medium text-cream-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/60">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialSection />

      {/* Clinic photography */}
      <section className="bg-cream-50 py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="The clinic" title="Take a look inside" scriptWord="inside" align="center" className="mb-14" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] sm:col-span-2 sm:aspect-[16/8]">
              <Image
                src="/images/clinic/reception-interior.jpg"
                alt="SmileLab Dental Center reception, Quezon City"
                fill
                sizes="(min-width: 1024px) 60rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-navy-950 shadow-[var(--shadow-card)]">
              <Image
                src="/images/clinical/implant-parts-diagram.jpg"
                alt="Implant, abutment, and crown — precision restorative components used at SmileLab"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-navy-950 shadow-[var(--shadow-card)]">
              <Image
                src="/images/clinical/implant-product-macro.jpg"
                alt="Precision implant and crown detail at SmileLab Dental Center"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg">
              Book an Appointment
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA
        title="Come see the clinic for yourself."
        scriptWord="yourself"
        description="A short consultation is the easiest way to know if SmileLab feels right for you."
      />
    </>
  );
}
