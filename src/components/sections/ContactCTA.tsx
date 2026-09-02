import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

export function ContactCTA({
  title = "Ready when you are.",
  scriptWord = "you",
  description = "Tell us what's on your mind — a routine visit or something you've been putting off. We'll take it from there.",
}: {
  title?: string;
  scriptWord?: string;
  description?: string;
}) {
  const parts = title.split(new RegExp(`(${scriptWord})`, "i"));
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-500/8 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-balance text-[2.5rem] font-medium leading-[1.1] text-cream-50 sm:text-[3.25rem]">
          {parts.map((part, i) =>
            part.toLowerCase() === scriptWord.toLowerCase() ? (
              <span key={i} className="font-script text-[1.3em] font-normal text-blush-400">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-100/70">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" variant="champagne">
            Book an Appointment
          </Button>
          <Button href={SITE.phoneHref} size="lg" variant="secondary" className="border-cream-50/25 text-cream-50 hover:border-cream-50">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </Button>
        </div>
        <a href={SITE.facebookUrl} className="mt-6 inline-flex items-center gap-2 text-sm text-cream-100/60 hover:text-cream-50">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {SITE.facebookLabel}
        </a>
      </Container>
    </section>
  );
}
