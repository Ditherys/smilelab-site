"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FAQ as FAQItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

function FAQRow({ item, defaultOpen }: { item: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-navy-900/10 py-5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-lg font-medium text-navy-900">{item.question}</span>
        <Plus className={cn("h-5 w-5 shrink-0 text-blush-500 transition-transform duration-300", open && "rotate-45")} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className={cn("grid transition-all duration-300 ease-[var(--ease-editorial)]", open ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0")}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-1 text-sm leading-relaxed text-slate-500">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ({ items, title = "Frequently asked questions", kicker = "FAQ" }: { items: FAQItem[]; title?: string; kicker?: string }) {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading kicker={kicker} title={title} align="left" className="mb-10" />
        <div>
          {items.map((item, i) => (
            <FAQRow key={item.question} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
