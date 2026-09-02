// Service taxonomy. Category set (6) matches SmileLab's own icon row on
// their real posters exactly: General, Cosmetic, Implants, Orthodontics,
// Oral Surgery, Pediatric. Sub-items are drawn from SmileLab's own poster
// copy where available; a small number of standard, non-brand-specific
// sub-items (e.g. "Implant-Supported Bridge") fill out categories the
// posters only named at the top level, per the site brief's suggested
// taxonomy — none contradict the source materials.

export type ServiceItem = {
  name: string;
  slug: string;
  blurb?: string;
};

export type ServiceCategory = {
  name: string;
  slug: string;
  icon: "implant" | "sparkle" | "tooth" | "braces" | "surgery" | "child";
  description: string;
  items: ServiceItem[];
  featured?: boolean;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Dental Implants",
    slug: "dental-implants",
    icon: "implant",
    description: "A fixed, natural-looking solution for missing teeth — built to last.",
    featured: true,
    items: [
      { name: "Single Tooth Implant", slug: "single-tooth-implant" },
      { name: "Multiple Tooth Implants", slug: "multiple-tooth-implants" },
      { name: "Implant-Supported Bridge", slug: "implant-supported-bridge" },
      { name: "Implant-Supported Dentures", slug: "implant-supported-dentures" },
      { name: "Full-Arch Implant Treatment", slug: "full-arch-implant-treatment" },
    ],
  },
  {
    name: "General & Restorative Dentistry",
    slug: "general-dentistry",
    icon: "tooth",
    description: "Everyday care and repair to keep your smile healthy and comfortable.",
    items: [
      { name: "Dental Cleaning & Checkup", slug: "dental-cleaning-checkup" },
      { name: "Root Canal Treatment", slug: "root-canal-treatment" },
      { name: "Tooth Restoration", slug: "tooth-restoration" },
      { name: "Dentures & Smile Restoration", slug: "dentures-smile-restoration" },
      { name: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation" },
    ],
  },
  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    icon: "sparkle",
    description: "Refine and brighten your smile with treatments made for you.",
    items: [
      { name: "Veneers & Crowns", slug: "veneers-crowns" },
      { name: "Smile Makeover", slug: "smile-makeover" },
      { name: "Laser Teeth Whitening", slug: "laser-teeth-whitening" },
      { name: "Cosmetic Restorations", slug: "cosmetic-restorations" },
    ],
  },
  {
    name: "Orthodontics",
    slug: "orthodontics",
    icon: "braces",
    description: "Straighter teeth and a more balanced bite, at a pace that fits your life.",
    featured: true,
    items: [
      { name: "Dental Braces", slug: "dental-braces" },
      { name: "Alignment Treatment", slug: "alignment-treatment" },
      { name: "Bite Correction", slug: "bite-correction" },
    ],
  },
  {
    name: "Oral Surgery",
    slug: "oral-surgery",
    icon: "surgery",
    description: "Careful, well-planned surgical care when it's needed most.",
    items: [
      { name: "Wisdom Tooth Removal", slug: "wisdom-tooth-removal" },
      { name: "Dental Extractions", slug: "dental-extractions" },
      { name: "Oral Surgery Consultation", slug: "oral-surgery-consultation" },
    ],
  },
  {
    name: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    icon: "child",
    description: "Gentle, encouraging dental care for your child's growing smile.",
    items: [{ name: "Children's Dental Care", slug: "childrens-dental-care" }],
  },
];

export function findServiceCategory(slug: string) {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}
