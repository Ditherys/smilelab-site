import Image from "next/image";
import { Container } from "@/components/ui/Container";

const AREAS_OF_FOCUS = ["General & Restorative Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics"];

const CARE_PRINCIPLES = [
  "Every visit opens with questions, not a pre-written plan.",
  "Options are explained in plain language before any treatment begins.",
  "Your whole bite is considered, not just the tooth in front of us.",
];

export function DentistProfileDetailed() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lift)]">
              <Image
                src="/images/team/dentist-portrait.jpg"
                alt="A SmileLab Dental Center dentist at the Quezon City clinic"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blush-500">Meet the team</p>
            <h2 className="font-display text-[2.25rem] font-medium leading-[1.1] text-navy-900 sm:text-[2.75rem]">
              Care led by someone who takes the time
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
              Our clinician&apos;s approach centers on clear communication and unhurried appointments — walking
              patients through diagnosis, options, and realistic outcomes before recommending a path forward. Every
              case starts with the same question: what actually matters to you about your smile?
            </p>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
              <div className="bg-cream-50 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-navy-900/60">Areas of focus</p>
                <ul className="flex flex-wrap gap-2">
                  {AREAS_OF_FOCUS.map((area) => (
                    <li
                      key={area}
                      className="rounded-[var(--radius-pill)] border border-navy-900/15 px-3.5 py-1.5 text-sm text-navy-800"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream-50 p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-navy-900/60">
                  How care works here
                </p>
                <ul className="space-y-2">
                  {CARE_PRINCIPLES.map((principle) => (
                    <li key={principle} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blush-400" aria-hidden="true" />
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream-50 p-6 sm:col-span-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-navy-900/60">
                  Education &amp; credentials
                </p>
                <p className="text-sm leading-relaxed text-slate-500">
                  Full credentials, certifications, and professional memberships are being finalized and will be
                  published here once confirmed by SmileLab Dental Center — this mockup intentionally omits
                  unverified claims rather than guessing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
