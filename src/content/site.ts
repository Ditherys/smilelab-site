// Core site-wide facts. Everything here traces to real SmileLab materials
// (logo, posters, clinic signage) found in the project's source folder,
// EXCEPT items explicitly marked PLACEHOLDER — those need confirmation
// from the client before this goes live. See README "Remaining placeholders".

export const SITE = {
  name: "SmileLab Dental Center",
  shortName: "SmileLab",
  location: "Quezon City",
  locationLong: "Quezon City, Metro Manila",
  tagline: ["Your smile.", "Our expertise.", "Your confidence."],
  taglineScriptWord: "expertise", // the word rendered in script/display accent
  subline: "Modern dentistry. Personalized care. Healthy smiles, every day.",
  metaDescription:
    "SmileLab Dental Center is a modern dental clinic in Quezon City offering general, cosmetic, implant, orthodontic, oral surgery, and pediatric dentistry.",

  // Real, from clinic signage / posters
  phoneDisplay: "0956 125 6097",
  phoneHref: "tel:+639561256097",

  // PLACEHOLDER — SmileLab's posters route booking through Facebook Messenger
  // without exposing the Page URL. Replace with the real Facebook Page link.
  facebookUrl: "#",
  facebookLabel: "Message us on Facebook",

  // PLACEHOLDER — no confirmed street address in source materials.
  // Do not present as exact; general area only until confirmed.
  addressDisclosed: false,
  areaLabel: "Quezon City, Metro Manila",

  // PLACEHOLDER — hours not present in source materials.
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursDisclaimer: "Hours shown are indicative — please confirm via Facebook Messenger before visiting.",

  brandCopy: {
    implantsHeadline: "Missing a tooth?",
    implantsSub: "Get a smile that feels like yours again.",
    implantsWhy: "More than just replacing a tooth.",
    journeyTitle: "The Implant Journey",
    journeySteps: ["Consult", "Place", "Heal", "Restore"],
    implantTagline: "Built to last. Made for you.",
    implantEducation: "Strong root. Natural look. Lasting confidence.",
    orthoHeadline: "Ready for a smile transformation?",
    orthoSub: "Straighter teeth, better confidence.",
    orthoBenefits: ["Improve teeth alignment", "Correct bite problems", "Create a more balanced smile"],
    trustLine: "Quality care you can trust. A smile you'll love.",
  },
} as const;

export type SiteConfig = typeof SITE;
