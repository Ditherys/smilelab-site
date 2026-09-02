import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  scriptWord,
  description,
  align = "left",
  tone = "navy",
  className,
  titleClassName,
}: {
  kicker?: string;
  title: string;
  scriptWord?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "navy" | "cream";
  className?: string;
  titleClassName?: string;
}) {
  const titleColor = tone === "navy" ? "text-navy-900" : "text-cream-50";
  const kickerColor = tone === "navy" ? "text-blush-500" : "text-champagne-300";
  const descColor = tone === "navy" ? "text-slate-500" : "text-cream-100/70";

  const parts = scriptWord ? title.split(new RegExp(`(${scriptWord})`, "i")) : [title];

  return (
    <div className={cn(align === "center" && "text-center mx-auto", className)}>
      {kicker && (
        <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.3em]", kickerColor)}>
          {kicker}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-balance text-[2.25rem] leading-[1.08] font-medium sm:text-[2.75rem] lg:text-[3.25rem]",
          titleColor,
          titleClassName
        )}
      >
        {parts.map((part, i) =>
          scriptWord && part.toLowerCase() === scriptWord.toLowerCase() ? (
            <span key={i} className="font-script text-[1.3em] font-normal text-blush-500 pr-1">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-xl text-base leading-relaxed sm:text-lg", descColor, align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
