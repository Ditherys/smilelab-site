// PLACEHOLDER CONTENT — representative patient feedback, not real
// submitted reviews. SmileLab is newly opened (see "Soft Opening"
// materials); real testimonials should replace these before launch.
// Attribution is deliberately generic (first name + area) rather than
// full identities, consistent with the mockup content policy.

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I'd been putting off a missing tooth for two years out of fear. The team walked me through every step before doing it — the implant journey felt easy to understand.",
    name: "Patient",
    context: "Quezon City — Dental Implant",
  },
  {
    quote:
      "My braces consultation was the first time a dentist actually explained why my bite felt off, not just that it did. Straightforward and reassuring.",
    name: "Patient",
    context: "Quezon City — Orthodontics",
  },
  {
    quote:
      "Clean, modern clinic, and I never felt rushed. They took time on the whitening consult to set realistic expectations, which I appreciated.",
    name: "Patient",
    context: "Quezon City — Cosmetic Dentistry",
  },
];

export const TESTIMONIALS_DISCLAIMER =
  "Representative patient feedback for this mockup — final testimonials to be supplied by SmileLab Dental Center.";
