import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { DentistProfile } from "@/components/sections/DentistProfile";
import { BeforeAfterShowcase } from "@/components/sections/BeforeAfterShowcase";
import { ServiceFeature } from "@/components/sections/ServiceFeature";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TreatmentJourney } from "@/components/sections/TreatmentJourney";
import { ClinicExperience } from "@/components/sections/ClinicExperience";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOME_FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />

      <section className="bg-cream-100 py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Services" title="Care for every stage of your smile" scriptWord="smile" align="center" className="mb-14" />
          <ServiceGrid />
        </Container>
      </section>

      <DentistProfile />
      <BeforeAfterShowcase />

      <ServiceFeature
        kicker="Dental Implants"
        title="Missing a tooth? Get a smile that feels like yours again."
        scriptWord="yours"
        description="A dental implant replaces the root, not just the crown — restoring how your bite feels and functions, not only how it looks."
        points={["Fixed & stable — no daily removal", "Natural-looking, custom-matched crown", "Helps preserve the supporting bone"]}
        image="/images/clinical/implant-product-macro.jpg"
        imageAlt="Dental implant, abutment, and crown — SmileLab Dental Center"
        href="/services/dental-implants"
      />

      <ServiceFeature
        kicker="Orthodontics"
        title="Ready for a smile transformation?"
        scriptWord="transformation"
        description="Straighter teeth do more than look better — a corrected bite is easier to clean, more comfortable, and more stable long-term."
        points={["Improve teeth alignment", "Correct bite problems", "Create a more balanced smile"]}
        image="/images/clinical/braces-macro.jpg"
        imageAlt="Orthodontic braces case at SmileLab Dental Center"
        href="/services/orthodontics"
        reverse
        tone="navy"
      />

      <ServiceFeature
        kicker="Cosmetic Dentistry"
        title="Small refinements, real confidence"
        scriptWord="confidence"
        description="From whitening to a full smile makeover, cosmetic treatment at SmileLab starts with what will look natural on you — not a one-size template."
        points={["Laser teeth whitening", "Veneers & crowns", "Full smile makeover planning"]}
        image="/images/clinical/case1-after.jpg"
        imageAlt="A restored, natural-looking smile — SmileLab Dental Center"
        href="/services/cosmetic-dentistry"
      />

      <WhyChooseSection />
      <TreatmentJourney />
      <ClinicExperience />
      <TestimonialSection />
      <FAQ items={HOME_FAQS} kicker="Good to know" title="Frequently asked questions" />
      <ContactCTA />
    </>
  );
}
