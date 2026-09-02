import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, MessageSquareText, CalendarCheck, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

const NEXT_STEPS = [
  { icon: MessageSquareText, title: "You reach out", description: "Message us on Facebook, call, or use the form — tell us briefly what's going on." },
  { icon: CalendarCheck, title: "We confirm a time", description: "We reply during clinic hours to lock in a visit that works for your schedule." },
  { icon: Stethoscope, title: "You're seen and heard", description: "Your first visit starts with listening, not a pre-written treatment plan." },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an appointment at SmileLab Dental Center in Quezon City — call, message us on Facebook, or send a message below.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's get your visit booked"
        description="Reach out however's easiest — Facebook Messenger, a call or SMS, or the form below."
        image="/images/team/dentist-portrait.jpg"
        imageAlt="A SmileLab Dental Center clinician"
      />

      <section className="bg-cream-50 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-2xl font-medium text-navy-900">Get in touch</h2>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Call or SMS</p>
                  <a href={SITE.phoneHref} className="text-sm text-slate-600 hover:text-navy-900">
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Facebook Messenger</p>
                  <a href={SITE.facebookUrl} className="text-sm text-slate-600 hover:text-navy-900">
                    {SITE.facebookLabel}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Area</p>
                  <p className="text-sm text-slate-600">{SITE.areaLabel}</p>
                  <p className="mt-0.5 text-xs text-slate-400">Exact clinic address to be confirmed by SmileLab.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-cream-50">
                  <Clock className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Hours</p>
                  <ul className="text-sm text-slate-600">
                    {SITE.hours.map((h) => (
                      <li key={h.days}>
                        {h.days}: {h.time}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1 text-xs text-slate-400">{SITE.hoursDisclaimer}</p>
                </div>
              </li>
            </ul>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
              <Image
                src="/images/clinic/reception-interior.jpg"
                alt="SmileLab Dental Center reception, Quezon City"
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="rounded-[var(--radius-lg)] border border-navy-900/10 bg-cream-100 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium text-navy-900">Send a message</h2>
              <p className="mt-2 text-sm text-slate-500">We typically respond fastest via Facebook Messenger.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-dashed border-navy-900/20 bg-cream-50 px-6 py-8 text-center">
              <p className="text-sm text-slate-400">
                Map placeholder — an embedded map will go here once SmileLab confirms the clinic&apos;s exact address.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <SectionHeading
            kicker="After you reach out"
            title="What happens next"
            scriptWord="next"
            tone="cream"
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {NEXT_STEPS.map((step, i) => (
              <div key={step.title} className="border-t border-champagne-400/40 pt-6 text-center sm:text-left">
                <step.icon className="mx-auto h-6 w-6 text-champagne-300 sm:mx-0" aria-hidden="true" />
                <span className="mt-4 block font-display text-lg text-champagne-300">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-medium text-cream-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/60">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/new-patients" variant="champagne" size="lg">
              See the full first-visit guide
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
