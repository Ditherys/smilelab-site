import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-navy-950 pt-32 pb-16">
      {image && (
        <>
          <Image src={image} alt={imageAlt ?? ""} fill sizes="100vw" className="object-cover opacity-40" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        </>
      )}
      {!image && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blush-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-champagne-400/10 blur-3xl" />
        </div>
      )}
      <Container className="relative">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-champagne-300">{kicker}</p>
        <h1 className={cn("font-display max-w-3xl text-balance text-[2.5rem] font-medium leading-[1.08] text-cream-50 sm:text-[3.25rem]")}>
          {title}
        </h1>
        {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/70 sm:text-lg">{description}</p>}
      </Container>
    </section>
  );
}
