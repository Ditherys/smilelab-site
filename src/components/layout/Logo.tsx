import { cn } from "@/lib/utils";

/**
 * Recreated inline wordmark — matches SmileLab's real logo composition
 * (navy "SmileLab" with a blush heart-tooth accent over the "i", a navy
 * smile-curve underline, "DENTAL CENTER" + "QUEZON CITY" subtext) but as
 * crisp vector/text instead of a raster crop, so it stays sharp on any
 * background and at any size. Colors are sampled from the real logo file.
 */
export function Logo({
  className,
  tone = "navy",
  showSubtext = true,
}: {
  className?: string;
  tone?: "navy" | "cream";
  showSubtext?: boolean;
}) {
  const textColor = tone === "navy" ? "text-navy-900" : "text-cream-50";
  const subColor = tone === "navy" ? "text-navy-700/70" : "text-cream-100/75";

  return (
    <span className={cn("inline-flex flex-col select-none leading-none", className)}>
      <span className={cn("relative inline-flex items-center font-display text-2xl font-semibold tracking-tight", textColor)}>
        Sm
        <span className="relative mx-[0.02em] inline-block">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[0.42em] w-[0.42em] -translate-x-1/2 -translate-y-[0.62em]"
          >
            <path
              d="M12 21s-7.5-4.6-10-9.3C0.3 8.1 2 4 6 4c2.3 0 3.7 1.4 4.5 2.6C11.3 5.4 12.7 4 15 4c4 0 5.7 4.1 4 7.7C19.5 16.4 12 21 12 21z"
              fill="var(--color-blush-400)"
            />
          </svg>
          i
        </span>
        leLab
      </span>
      <svg viewBox="0 0 120 22" className="mt-0.5 h-[0.5em] w-[3.6em]" aria-hidden="true">
        <path
          d="M4 3c4 9 12 14 20 14s16-5 20-14"
          fill="none"
          stroke={tone === "navy" ? "var(--color-navy-900)" : "var(--color-cream-50)"}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M60 3c4 9 12 14 20 14s16-5 20-14"
          fill="none"
          stroke={tone === "navy" ? "var(--color-navy-900)" : "var(--color-cream-50)"}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
      {showSubtext && (
        <span className={cn("mt-1 flex items-center gap-1.5 text-[0.55rem] font-medium uppercase tracking-[0.25em]", subColor)}>
          Dental Center
          <span aria-hidden="true">·</span>
          Quezon City
        </span>
      )}
    </span>
  );
}
