# SmileLab Dental Center — Website Mockup

A high-fidelity Next.js mockup for SmileLab Dental Center (Quezon City), built with the App Router, TypeScript, and Tailwind CSS v4. Structural/UX patterns are inspired by Vivid Dental (vividdental.ca); all brand identity, copy, colors, and media are SmileLab's own.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static export of all 10 routes)
npm run lint
```

## Structure

- `src/app/` — routes: home, about, problems-we-treat, new-patients, contact, services (hub + `[category]` dynamic route)
- `src/components/layout/` — Header, DesktopNav, MegaMenu, MobileNav, Footer, Logo
- `src/components/sections/` — Hero, PageHero, ServiceFeature/Grid, DentistProfile, BeforeAfterSlider, TreatmentJourney, TestimonialSection, FAQ, ContactCTA, MediaSection, etc.
- `src/content/` — typed data: `site.ts`, `services.ts`, `nav.ts`, `problems.ts`, `faqs.ts`, `testimonials.ts`, `why-choose.ts`
- `public/images/manifest.json` — provenance record for every image asset used (real vs. excluded, and why)

## Real SmileLab assets used

Logo (both lockups), real clinic interior photography (cropped from posters), the real dentist portrait (cropped to remove a competing clinic's signage), real clinical before/after documentation, real implant product photography, and real orthodontic macro photography. Brand taglines and service copy are lifted directly from SmileLab's own posters where available. Full provenance is in `public/images/manifest.json`.

Two stock-style photos found in SmileLab's own Facebook ad graphics were deliberately **not** reused (unclear stock licensing for redistribution) — see `manifest.json` → `notUsed`.

## Remaining placeholders (need real SmileLab input before launch)

- **Facebook Page URL** — CTA buttons link to `#`; source materials only show "Message us on FB" without exposing the Page URL (`src/content/site.ts` → `facebookUrl`).
- **Exact clinic address** — only "Quezon City" is confirmed; the contact page intentionally shows an area label + a labeled map placeholder rather than a fabricated address.
- **Business hours** — shown with a visible disclaimer that they're indicative, not confirmed.
- **Dentist name/credentials** — the About/home dentist sections intentionally omit invented years of experience, certifications, or memberships; a disclosure note says these are pending confirmation.
- **Testimonials** — clearly labeled as representative/placeholder, not real submitted reviews.
- **Contact form** — client-side only (shows a success state on submit); needs a real backend/email integration before launch.

## Manual review suggested

- Swap the placeholder Facebook URL and confirm hours/address, then remove the corresponding disclaimers.
- Consider commissioning real photography for the About/New Patients hero and a proper clinic exterior shot for Contact — the current build deliberately avoids stretching low-resolution cropped assets to full-bleed hero size.
- Confirm the dentist's name and real credentials before publishing the About page bio.
