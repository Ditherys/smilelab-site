export const WHY_CHOOSE = [
  {
    title: "One clinic, every stage of care",
    description:
      "From a routine cleaning to a full implant journey, your care stays with one team who already knows your history.",
  },
  {
    title: "Plans you understand before you agree to them",
    description:
      "We explain what's wrong, why, and what the realistic options are — in plain language, before any treatment begins.",
  },
  {
    title: "Modern equipment, unhurried appointments",
    description:
      "A newly built clinic designed around comfort, with time built into every visit so nothing feels rushed.",
  },
  {
    title: "Treatment built around your bite, not just one tooth",
    description:
      "Even a single-tooth concern is planned with your whole bite in mind, so today's fix holds up long-term.",
  },
] as const;

export const IMPLANT_JOURNEY = [
  { step: "01", label: "Consult", description: "We evaluate your bite, bone, and goals, and walk you through options." },
  { step: "02", label: "Place", description: "The titanium implant post is placed to act as your new tooth root." },
  { step: "03", label: "Heal", description: "The implant integrates with your jawbone over a healing period." },
  { step: "04", label: "Restore", description: "A custom crown is attached, completing a natural-looking, functional tooth." },
] as const;
