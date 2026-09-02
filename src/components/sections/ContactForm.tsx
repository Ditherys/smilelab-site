"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/content/services";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-[var(--radius-sm)] border border-navy-900/15 bg-cream-50 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:border-navy-800 focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-[var(--radius-lg)] border border-navy-900/10 bg-cream-100 px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-blush-500" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-medium text-navy-900">Thanks — message received</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          This is a mockup form, so nothing was sent yet. Once connected, we&apos;ll reply during clinic hours — or
          message us directly on Facebook for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-800">
          What can we help with?
        </label>
        <select id="service" name="service" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select a service (optional)
          </option>
          {SERVICE_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} placeholder="Tell us what's on your mind" />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
