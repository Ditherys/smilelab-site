import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function MediaSection({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  height = "60svh",
  className,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title?: string;
  children?: React.ReactNode;
  height?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative flex items-end overflow-hidden bg-navy-950", className)} style={{ minHeight: height }}>
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      <Container className="relative py-14">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-champagne-300">{eyebrow}</p>}
        {title && <h2 className="font-display max-w-2xl text-balance text-[2rem] font-medium leading-tight text-cream-50 sm:text-[2.5rem]">{title}</h2>}
        {children}
      </Container>
    </section>
  );
}
