import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfterShowcase() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-end justify-between gap-6 sm:flex">
          <SectionHeading
            kicker="Real results"
            title="See a smile transformation"
            scriptWord="transformation"
            description="Drag the slider — these are real, documented SmileLab patient cases, shown as recorded."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <BeforeAfterSlider
              before="/images/clinical/case1-before.jpg"
              after="/images/clinical/case1-after.jpg"
              alt="Front tooth restoration case"
            />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
              Single central incisor restoration — implant site healed and restored with a custom crown matched to the
              adjacent teeth. Individual results vary by case.
            </p>
          </div>

          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lift)] lg:aspect-[4/5]">
              <Image
                src="/images/clinical/before-after-implant-timeline.jpg"
                alt="Documented implant healing timeline, 4 to 8 weeks post-op — SmileLab patient case"
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-top"
              />
              <span className="pointer-events-none absolute left-3 top-3 rounded-[var(--radius-xs)] bg-navy-950/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
                Documented timeline
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              A real healing timeline from implant placement through the 8-week restoration — clinical documentation
              from an actual SmileLab case.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
