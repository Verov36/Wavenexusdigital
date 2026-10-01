// Nexus Field vs. <competitor> comparison pages.
//
// One entry per competitor; Compare.tsx renders whichever slug is in the URL.
// Every competitor number on these pages must be either (a) published by the
// competitor, or (b) clearly labelled as a public estimate with its source
// linked. Nexus Field's numbers come from NEXUS_FIELD below and nowhere else,
// so a price change is a one-line edit.

export const NEXUS_FIELD = {
  perTechMonthly: 75,
  perTechLabel: "$75",
  officeUsers: "Free — dispatch and office staff aren't techs, so they aren't billed",
  contract: "None. Month to month.",
  setup: "Minimal — scoped to the size of your data migration and quoted on the discovery call",
  priceHold: "Held for two years, then renegotiated together",
  platforms: "Mobile and desktop included",
  inventory: "Parts inventory included in every plan",
  demoUrl: "/audit?type=demo",
  contactUrl: "/contact?interest=nexusfield",
};

export type CompareRow = {
  label: string;
  them: string;
  us: string;
  /** true when `them` is a public estimate rather than a published figure */
  estimate?: boolean;
};

export type Competitor = {
  slug: string;
  name: string;
  /** e.g. "September 2026" — shown on the page so readers know how fresh it is */
  checked: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  /** Three at-a-glance tiles: per-tech price, contract, setup */
  glance: { label: string; them: string; us: string; estimate?: boolean }[];
  rows: CompareRow[];
  /** Low end of the competitor's publicly reported per-tech monthly price, used by the cost example */
  theirLowPerTech: number;
  theirLowSetup: number;
  /** Where the competitor is genuinely the better choice. Keep this honest — it's what makes the rest believable. */
  theyWin: { title: string; body: string }[];
  /** When Nexus Field is the better fit */
  weWin: string[];
  sourceNote: string;
  sources: { label: string; url: string }[];
};

export const competitors: Competitor[] = [
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    checked: "September 2026",
    metaTitle: "Nexus Field vs ServiceTitan: Pricing, Contract & Setup Fees (2026) | WaveNexus",
    metaDescription:
      "An honest ServiceTitan alternative comparison: reported ServiceTitan pricing of ~$245–$500 per tech per month, a 12-month contract, and $5K–$50K implementation vs. Nexus Field at $75 per tech, no contract, and a setup fee scoped to your migration.",
    headline: "The bill that grows every year, or the one that doesn't.",
    intro:
      "ServiceTitan is the biggest name in field service software, and for a large multi-location operation it can be the right call. But the shops that call us have usually just opened a renewal notice. This page puts the two side by side with real numbers, including the ones ServiceTitan doesn't publish.",
    glance: [
      { label: "Per tech, per month", them: "~$245–$500", us: "$75", estimate: true },
      { label: "Contract", them: "12 months", us: "None", estimate: true },
      { label: "Setup / implementation", them: "~$5,000–$50,000", us: "Minimal, scoped to your migration", estimate: true },
    ],
    rows: [
      { label: "Published pricing", them: "No — \"Request Pricing\" on all three plans", us: "Yes — $75 per tech per month" },
      { label: "Plans", them: "Starter, Essentials, The Works", us: "One plan. Everything's in it." },
      { label: "Office & dispatch users", them: "Priced per technician; office seats vary by quote", us: "Free", estimate: true },
      { label: "Contract length", them: "12-month minimum", us: "None — month to month", estimate: true },
      { label: "Implementation fee", them: "~$5,000–$50,000, quoted case by case", us: "Minimal — scoped to your data migration, quoted on the discovery call", estimate: true },
      { label: "Price after year one", them: "Set at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Available", us: "Included in every plan" },
      { label: "Add-on modules", them: "Marketing Pro, Pricebook Pro, Dispatch Pro, Fleet Pro, Scheduling Pro, Field Pro, Contact Center Pro — sold separately", us: "None. If it's in the app, it's in your price." },
      { label: "Mobile + desktop", them: "Included", us: "Included" },
      { label: "Setup & training", them: "Implementation team; scope depends on package", us: "We configure it around your job types, terminology, and parts, and train your team before go-live" },
      { label: "Built for", them: "Larger residential and commercial contractors, multi-location, private-equity-backed groups", us: "Owner-operated HVAC, plumbing, electrical, and contracting shops that want the tool to fit them, not the other way around" },
    ],
    theirLowPerTech: 245,
    theirLowSetup: 5000,
    theyWin: [
      { title: "You run a large, multi-location operation", body: "ServiceTitan is built to run 50-, 100-, 500-tech companies across regions. That's their core customer, and the product reflects it." },
      { title: "You want marketing, call center, and financing inside one vendor", body: "Marketing Pro, Contact Center Pro, and their financing partners are real products. They cost extra, but they exist. We don't sell those." },
      { title: "You need a deep third-party integration marketplace", body: "ServiceTitan has years of integrations with accounting, fleet, and marketing tools. We integrate where our customers need it, not everywhere." },
    ],
    weWin: [
      "You have somewhere between 2 and 40 techs and the renewal quote made you wince",
      "You'd rather pay $75 a tech than budget $5,000+ before the app has done anything for you",
      "You want the software configured around how your shop already works, not a six-week implementation to learn theirs",
      "Parts walking off trucks is a bigger problem for you than marketing automation",
      "You want to be able to leave. Not because you plan to — because it keeps your vendor honest",
    ],
    sourceNote:
      "ServiceTitan does not publish prices. The figures marked with an asterisk are aggregated public estimates from user reports and review sites, not an official ServiceTitan quote — your quote may differ. Plan names, per-technician pricing structure, and the Pro add-on lineup are from ServiceTitan's own pricing page. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "ServiceTitan pricing page (plans, per-technician structure, Pro add-ons)", url: "https://www.servicetitan.com/pricing" },
      { label: "FSM Advisor — ServiceTitan pricing estimates, re-checked July 2026", url: "https://www.fsmadvisor.com/pricing/servicetitan" },
      { label: "Projul — ServiceTitan pricing analysis 2026", url: "https://projul.com/blog/servicetitan-pricing-analysis-2026/" },
    ],
  },
];

export function getCompetitor(slug: string | undefined) {
  return competitors.find((c) => c.slug === slug);
}
