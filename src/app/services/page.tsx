import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore general, cosmetic, implant, orthodontic, oral surgery, and pediatric dentistry at SmileLab Dental Center, Quezon City.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Every stage of your smile, one clinic"
        description="From a routine cleaning to a full implant journey — explore what we treat, organized the way you'd actually think about it."
      />
      <section className="bg-cream-50 py-20 sm:py-28">
        <Container>
          <ServiceGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
