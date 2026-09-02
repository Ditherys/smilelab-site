import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardList, Stethoscope, FileText, CreditCard, MessageCircle, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceFeature } from "@/components/sections/ServiceFeature";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NEW_PATIENT_FAQS } from "@/content/faqs";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "New Patients",
  description: "What to expect at your first SmileLab Dental Center visit in Quezon City — a reassuring, no-pressure start.",
  alternates: { canonical: "/new-patients" },
};

const STEPS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageCircle,
    title: "Message us to book",
    description: "Reach out on Facebook Messenger or call/SMS. Tell us briefly what brings you in — no formal referral needed.",
  },
  {
    icon: ClipboardList,
    title: "Share your history",
    description: "A short intake covering your dental and medical history helps us prepare for your visit before you arrive.",
  },
  {
    icon: Stethoscope,
    title: "First evaluation",
    description: "A full evaluation of your teeth, gums, and bite, plus a conversation about what's bothering you and your goals.",
  },
  {
    icon: FileText,
    title: "A plan you understand",
    description: "We walk through what we found and the realistic options — in plain language, with room for questions.",
  },
  {
    icon: CreditCard,
    title: "Payment options discussed",
    description: "For larger treatments, we'll walk through flexible payment arrangements before you commit to anything.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        kicker="New Patients"
        title="A reassuring first visit — no pressure, no jargon"
        description="Whether it's been years since your last checkup or you're switching clinics, here's exactly what to expect."
        image="/images/clinic/reception-interior.jpg"
        imageAlt="SmileLab Dental Center reception, Quezon City"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="What to expect" title="Your first visit, step by step" scriptWord="step" align="center" className="mb-16" />

          <div className="mx-auto max-w-2xl space-y-10">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {i < STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-navy-900/15" aria-hidden="true" />}
                </div>
                <div className="pb-2">
                  <h2 className="font-display text-lg font-medium text-navy-900">{step.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ServiceFeature
        kicker="First-time nerves?"
        title="Totally normal — and nothing you need to manage alone"
        scriptWord="alone"
        description="A lot of the patients we see haven't been to a dentist in a while, or had a rough experience somewhere else. You don't need to explain or apologize for that — just tell us, and we'll adjust the pace of the visit around it."
        points={[
          "You can pause or ask questions at any point",
          "Nothing happens without you understanding why first",
          "No judgment for time between visits — we start from today",
        ]}
        image="/images/team/dentist-portrait.jpg"
        imageAlt="A SmileLab Dental Center clinician"
        href="/contact"
        ctaLabel="Message us your concerns first"
        tone="navy"
        reverse
      />

      {/* Ready to get started — compact mid-page CTA */}
      <section className="bg-cream-100 py-14">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-medium text-navy-900">Ready to get started?</h2>
            <p className="mt-1.5 text-sm text-slate-500">Message us and we&apos;ll take it from there — no forms to fill out in advance.</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button href="/contact" size="md">
              Book an Appointment
            </Button>
            <Button href={SITE.phoneHref} size="md" variant="secondary">
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <FileText className="h-6 w-6 text-champagne-300" aria-hidden="true" />
            <SectionHeading kicker="Documentation" title="What to bring" scriptWord="bring" tone="cream" className="mt-4" />
            <ul className="mt-6 space-y-3 text-sm text-cream-100/75">
              <li>&bull; A valid government-issued ID</li>
              <li>&bull; Previous dental records or x-rays, if you have them (not required)</li>
              <li>&bull; A list of any medications you&apos;re currently taking</li>
            </ul>
          </div>
          <div>
            <CreditCard className="h-6 w-6 text-champagne-300" aria-hidden="true" />
            <SectionHeading kicker="Payment" title="Payment options" scriptWord="options" tone="cream" className="mt-4" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/75">
              We accept standard payment methods on-site, and offer flexible arrangements for larger treatments like
              implants or orthodontics. Exact options are confirmed during your consultation.
            </p>
          </div>
          <div>
            <HeartHandshake className="h-6 w-6 text-champagne-300" aria-hidden="true" />
            <SectionHeading kicker="New here?" title="Nervous is okay" scriptWord="okay" tone="cream" className="mt-4" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/75">
              Let us know when you message us. We&apos;ll plan extra time and explain each step before it happens —
              no rush, no pressure to decide on the spot.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="The clinic" title="What the space feels like" scriptWord="feels" align="center" className="mb-14" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/clinic/reception-interior.jpg"
                alt="SmileLab Dental Center reception, Quezon City"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-navy-950 shadow-[var(--shadow-card)]">
              <Image
                src="/images/clinical/implant-parts-diagram.jpg"
                alt="Modern implant and restorative components used at SmileLab"
                fill
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <FAQ items={NEW_PATIENT_FAQS} kicker="New patient FAQ" title="Questions before you book" />

      <ContactCTA
        title="Let's get your first visit booked."
        scriptWord="booked"
        description={`Message us on Facebook or call/SMS ${SITE.phoneDisplay} — we'll take it from there.`}
      />
    </>
  );
}
