import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProblemPicker } from "@/components/sections/ProblemPicker";
import { ServiceFeature } from "@/components/sections/ServiceFeature";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME_FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Problems We Treat",
  description: "Find the SmileLab Dental Center treatment for what's actually bothering you — organized by concern, not clinical term.",
  alternates: { canonical: "/problems-we-treat" },
};

export default function ProblemsWeTreatPage() {
  return (
    <>
      <PageHero
        kicker="Problems We Treat"
        title="If something feels wrong, that's reason enough to ask"
        description="You don't need the clinical term for what's bothering you — just tell us what you're noticing. Here's how we typically help."
        image="/images/clinic/reception-interior.jpg"
        imageAlt="Inside SmileLab Dental Center, Quezon City"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="Tell us what's bothering you"
            title="Dental concerns we help with"
            scriptWord="concerns"
            description="Tap a concern to see how we typically approach it — then explore the treatment behind it whenever you're ready."
            className="mb-12"
          />
          <ProblemPicker />
        </Container>
      </section>

      <ServiceFeature
        kicker="What to expect"
        title="A calm, unhurried experience from start to finish"
        scriptWord="unhurried"
        description="We know dental visits can feel stressful, especially if you've had a difficult experience before. We take our time, answer your questions, and build a plan around your comfort — not just the clinical fix."
        points={[
          "Every step explained before we do it",
          "No pressure to decide on the spot",
          "A plan paced to your comfort, not a rush to treat",
        ]}
        image="/images/team/dentist-portrait.jpg"
        imageAlt="A SmileLab Dental Center clinician"
        href="/new-patients"
        ctaLabel="See what your first visit looks like"
        tone="navy"
      />

      <FAQ items={HOME_FAQS} kicker="Still unsure?" title="Your questions, answered" />
      <ContactCTA
        title="Not sure what to call it? Just tell us."
        scriptWord="us"
        description="Describe what's bothering you and we'll help you figure out the right next step."
      />
    </>
  );
}
