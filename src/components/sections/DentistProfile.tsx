import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const AREAS_OF_FOCUS = ["General & Restorative Dentistry", "Cosmetic Dentistry", "Dental Implants"];

export function DentistProfile() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lift)]">
          <Image
            src="/images/team/dentist-portrait.jpg"
            alt="A SmileLab Dental Center dentist at the Quezon City clinic"
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blush-500">Meet the team</p>
          <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] text-navy-900 sm:text-[2.75rem]">
            Care led by someone who explains, not just treats
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            Our clinicians take the time to walk you through what&apos;s happening in your mouth and why — so every
            recommendation makes sense before you agree to it. That approach shapes every visit at SmileLab, from a
            routine cleaning to a full smile transformation.
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-navy-900/60">Areas of focus</p>
            <ul className="flex flex-wrap gap-2">
              {AREAS_OF_FOCUS.map((area) => (
                <li
                  key={area}
                  className="rounded-[var(--radius-pill)] border border-navy-900/15 px-4 py-1.5 text-sm text-navy-800"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-xl text-xs text-slate-500/80">
            Credential details are being finalized and will be published once confirmed by SmileLab Dental Center.
          </p>

          <Button href="/about" variant="secondary" className="mt-8">
            More about our approach
          </Button>
        </div>
      </Container>
    </section>
  );
}
