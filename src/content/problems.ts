// Patient-facing "problems, not procedures" framing — original SmileLab
// copy, organized the way a worried patient searches rather than by
// clinical term. Each concern points to the SmileLab service category
// that actually addresses it.

export type Problem = {
  title: string;
  description: string;
  serviceSlug: string;
  icon: "gap" | "crooked" | "stain" | "chip" | "pain" | "gum" | "denture" | "confidence";
};

export const PROBLEMS: Problem[] = [
  {
    title: "A missing tooth",
    description:
      "A gap changes more than your smile — it can shift how you bite and how neighboring teeth sit over time. A dental implant replaces the root, not just the crown, so the rest of your bite stays supported.",
    serviceSlug: "dental-implants",
    icon: "gap",
  },
  {
    title: "Several missing teeth",
    description:
      "When more than one tooth is gone, single replacements aren't always the most stable answer. Implant-supported bridges or dentures can restore a full, even bite in fewer visits.",
    serviceSlug: "dental-implants",
    icon: "gap",
  },
  {
    title: "Crooked or crowded teeth",
    description:
      "Misaligned teeth are harder to keep clean and can wear unevenly. Braces and guided alignment treatment move teeth gradually into a straighter, easier-to-maintain position.",
    serviceSlug: "orthodontics",
    icon: "crooked",
  },
  {
    title: "A bite that doesn't feel right",
    description:
      "Jaw tension, uneven wear, or teeth that don't quite meet can point to a bite problem. Correcting it early prevents bigger issues with individual teeth down the line.",
    serviceSlug: "orthodontics",
    icon: "crooked",
  },
  {
    title: "Stained or discolored teeth",
    description:
      "Coffee, tea, and time all leave their mark. Professional laser whitening lifts stains safely and predictably — well beyond what over-the-counter kits can do.",
    serviceSlug: "cosmetic-dentistry",
    icon: "stain",
  },
  {
    title: "A chipped or worn tooth",
    description:
      "A small chip rarely stays small. Bonding, veneers, or a crown can restore the tooth's shape and protect it from further wear or breakage.",
    serviceSlug: "cosmetic-dentistry",
    icon: "chip",
  },
  {
    title: "A cracked or broken tooth",
    description:
      "A fracture can expose sensitive layers underneath. Depending on severity, a restoration, crown, or root canal treatment can save the tooth and stop the pain.",
    serviceSlug: "general-dentistry",
    icon: "chip",
  },
  {
    title: "A painful or sensitive tooth",
    description:
      "Pain is your tooth asking for attention — decay, infection, or a cracked filling are common causes. We diagnose the source first, then treat it, rather than just masking the symptom.",
    serviceSlug: "general-dentistry",
    icon: "pain",
  },
  {
    title: "Gum concerns",
    description:
      "Bleeding, swollen, or receding gums are often the earliest sign of gum disease — and the most treatable stage. Cleanings and periodontal care protect the foundation your teeth depend on.",
    serviceSlug: "general-dentistry",
    icon: "gum",
  },
  {
    title: "Uncomfortable or loose dentures",
    description:
      "Dentures that slip or rub shouldn't be something you just get used to. Implant-supported dentures anchor securely, restoring confidence in eating and speaking.",
    serviceSlug: "dental-implants",
    icon: "denture",
  },
  {
    title: "Old or failing dental work",
    description:
      "Fillings and crowns don't last forever. If old work is cracked, discolored, or coming loose, we can replace it with a longer-lasting, better-fitting restoration.",
    serviceSlug: "general-dentistry",
    icon: "denture",
  },
  {
    title: "Not wanting to smile in photos",
    description:
      "Sometimes it's not one specific problem — it's the cumulative effect of several small ones. A smile consultation looks at the whole picture and maps a realistic path forward.",
    serviceSlug: "cosmetic-dentistry",
    icon: "confidence",
  },
];
