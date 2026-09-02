import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "champagne";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-[var(--duration-fast)] ease-[var(--ease-editorial)] rounded-[var(--radius-sm)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-cream-50 hover:bg-navy-800 shadow-[var(--shadow-soft)]",
  secondary:
    "bg-transparent text-navy-900 border border-navy-900/25 hover:border-navy-900 hover:bg-navy-900/[0.03]",
  ghost: "bg-transparent text-current hover:opacity-70",
  champagne:
    "bg-champagne-400 text-navy-950 hover:bg-champagne-300 shadow-[var(--shadow-soft)]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
