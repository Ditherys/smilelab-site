import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ShieldCheck, Clock3, Smile as SmileIcon, Heart, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { TreatmentJourney } from "@/components/sections/TreatmentJourney";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICE_CATEGORIES, findServiceCategory } from "@/content/services";
import { HOME_FAQS } from "@/content/faqs";

const CATEGORY_IMAGE: Record<string, string> = {
  "dental-implants": "/images/clinical/implant-product-macro.jpg",
  "general-dentistry": "/images/clinic/reception-interior.jpg",
  "cosmetic-dentistry": "/images/clinical/case1-after.jpg",
  orthodontics: "/images/clinical/braces-macro.jpg",
  "oral-surgery": "/images/clinical/implant-parts-diagram.jpg",
  "pediatric-dentistry": "/images/team/dentist-portrait.jpg",
};

const GENERAL_CARE_POINTS = [
  { icon: ShieldCheck, title: "Cleanings & checkups", description: "Routine visits that catch small issues before they become expensive ones." },
  { icon: Clock3, title: "Same-visit answers", description: "X-rays and diagnosis happen in-house, so you leave with a clear plan, not a referral." },
  { icon: Heart, title: "Repair built to last", description: "Fillings, restorations, and root canal work done with your long-term bite in mind." },
];

const ORAL_SURGERY_STEPS = [
  { step: "01", label: "Consult", description: "We review your x-rays and explain exactly what the procedure will involve." },
  { step: "02", label: "Plan", description: "Sedation and timing options are discussed so you know what to expect going in." },
  { step: "03", label: "Procedure", description: "The extraction or surgery is performed with your comfort checked throughout." },
  { step: "04", label: "Recovery", description: "Clear aftercare instructions and a follow-up plan so healing stays on track." },
];

const PEDIATRIC_POINTS = [
  { icon: SmileIcon, title: "Kid-friendly explanations", description: "We describe what's happening in simple terms before we do anything." },
  { icon: Heart, title: "Gentle pacing", description: "Visits are paced to your child's comfort — no rushing, no forcing." },
  { icon: MessageCircle, title: "Parents welcome", description: "You're in the room for the whole visit, every time." },
];

const CATEGORY_INTRO: Record<string, string> = {
  "dental-implants":
    "A dental implant replaces the tooth root, not just the visible crown — giving you a fixed, natural-feeling result that supports the rest of your bite.",
  "general-dentistry":
    "The everyday care that keeps small issues from becoming big ones — cleanings, checkups, and repair work built to last.",
  "cosmetic-dentistry":
    "Refinements aimed at looking natural on you, not a one-size template — from whitening to a full smile makeover.",
  orthodontics:
    "Straighter teeth and a corrected bite, planned at a pace that fits your life — not just a cosmetic fix, but a functional one.",
  "oral-surgery":
    "Careful, well-explained surgical care for wisdom teeth and extractions, with recovery guidance built into the plan.",
  "pediatric-dentistry":
    "Gentle, encouraging dental visits designed to build a lifetime of comfort around dental care, starting young.",
};

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = findServiceCategory(category);
  if (!cat) return {};
  return {
    title: cat.name,
    description: `${cat.name} at SmileLab Dental Center, Quezon City — ${cat.description}`,
    alternates: { canonical: `/services/${cat.slug}` },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = findServiceCategory(category);
  if (!cat) notFound();

  const image = CATEGORY_IMAGE[cat.slug] ?? "/images/clinic/reception-interior.jpg";
  const intro = CATEGORY_INTRO[cat.slug] ?? cat.description;

  return (
    <>
      <PageHero kicker="Services" title={cat.name} description={cat.description} image={image} imageAlt={cat.name} />

      <section className="bg-cream-50 py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
            <Image src={image} alt={cat.name} fill sizes="(min-width: 1024px) 40rem, 100vw" className="object-cover" />
          </div>

          <div>
            <SectionHeading kicker="Overview" title={cat.name} />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{intro}</p>

            <ul className="mt-8 space-y-3">
              {cat.items.map((item) => (
                <li key={item.slug} id={item.slug} className="scroll-mt-28 flex items-start gap-3 border-b border-navy-900/8 pb-3 text-sm text-navy-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blush-400" aria-hidden="true" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {cat.slug === "dental-implants" && (
        <>
          <TreatmentJourney />
          <section className="bg-cream-50 py-20 sm:py-28">
            <Container>
              <SectionHeading kicker="Real results" title="A real SmileLab case" scriptWord="real" className="mb-10" />
              <BeforeAfterSlider before="/images/clinical/case1-before.jpg" after="/images/clinical/case1-after.jpg" alt="Implant restoration case" />
            </Container>
          </section>
        </>
      )}

      {cat.slug === "orthodontics" && (
        <section className="bg-navy-950 py-20 sm:py-28">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
              <Image src="/images/clinical/braces-macro.jpg" alt="Real orthodontic braces case at SmileLab" fill sizes="(min-width: 1024px) 36rem, 100vw" className="object-cover" />
            </div>
            <div>
              <SectionHeading kicker="Why straighten" title="More than just straighter teeth" scriptWord="straighter" tone="cream" />
              <ul className="mt-6 space-y-3 text-sm text-cream-100/80">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
                  Improve teeth alignment
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
                  Correct bite problems
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-300" aria-hidden="true" />
                  Create a more balanced smile
                </li>
              </ul>
            </div>
          </Container>
        </section>
      )}

      {cat.slug === "general-dentistry" && (
        <section className="bg-navy-950 py-20 sm:py-28">
          <Container>
            <SectionHeading kicker="What a visit covers" title="Everyday care, done properly" scriptWord="properly" tone="cream" align="center" className="mb-14" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {GENERAL_CARE_POINTS.map((point) => (
                <div key={point.title} className="border-t border-champagne-400/40 pt-6">
                  <point.icon className="h-6 w-6 text-champagne-300" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-medium text-cream-50">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/60">{point.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {cat.slug === "cosmetic-dentistry" && (
        <section className="bg-cream-50 py-20 sm:py-28">
          <Container>
            <SectionHeading kicker="Real results" title="See a real SmileLab case" scriptWord="real" className="mb-10" />
            <BeforeAfterSlider before="/images/clinical/case1-before.jpg" after="/images/clinical/case1-after.jpg" alt="Cosmetic restoration case" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
              Single central incisor restoration — a custom crown matched to the adjacent teeth. Individual results vary by case.
            </p>
          </Container>
        </section>
      )}

      {cat.slug === "oral-surgery" && (
        <section className="bg-cream-100 py-20 sm:py-28">
          <Container>
            <SectionHeading kicker="What to expect" title="How a surgical visit is planned" scriptWord="planned" align="center" className="mb-16" />
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
              {ORAL_SURGERY_STEPS.map((s) => (
                <div key={s.label} className="flex gap-5">
                  <span className="font-display text-2xl text-champagne-500">{s.step}</span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-navy-900">{s.label}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {cat.slug === "pediatric-dentistry" && (
        <section className="bg-cream-50 py-20 sm:py-28">
          <Container>
            <SectionHeading kicker="Our approach" title="Built to feel like less of a big deal" scriptWord="deal" align="center" className="mb-14" />
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {PEDIATRIC_POINTS.map((point) => (
                <div key={point.title} className="rounded-[var(--radius-lg)] border border-navy-900/10 bg-cream-100 p-7">
                  <point.icon className="h-6 w-6 text-blush-500" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-medium text-navy-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FAQ items={HOME_FAQS.slice(0, 4)} kicker="Good to know" title={`${cat.name} — common questions`} />
      <ContactCTA title={`Ready to talk about ${cat.name.toLowerCase()}?`} scriptWord={cat.name.toLowerCase().split(" ")[0]} />
    </>
  );
}
