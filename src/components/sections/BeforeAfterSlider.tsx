"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  before,
  after,
  alt,
  className,
}: {
  before: string;
  after: string;
  alt: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[16/9] w-full touch-none select-none overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lift)]",
        className
      )}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image src={after} alt={`${alt} — after treatment`} fill sizes="(min-width: 1024px) 48rem, 100vw" className="object-cover" />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={`${alt} — before treatment`} fill sizes="(min-width: 1024px) 48rem, 100vw" className="object-cover" />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-[var(--radius-xs)] bg-navy-950/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-[var(--radius-xs)] bg-champagne-400/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
        After
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-cream-50"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
          }}
          className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-cream-50 text-navy-900 shadow-[var(--shadow-soft)]"
        >
          <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
