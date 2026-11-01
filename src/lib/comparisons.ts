// Nexus Field vs. <competitor> comparison pages.
//
// One entry per competitor; Compare.tsx renders whichever slug is in the URL.
// Every competitor number on these pages must be either (a) published by the
// competitor, or (b) clearly labelled as a public estimate with its source
// linked (`estimate: true` renders an asterisk and the entry's `estimateNote`).
// Nexus Field's numbers come from NEXUS_FIELD below and nowhere else, so a
// price change is a one-line edit.
//
// The cost calculator is deliberately honest in both directions: where a
// competitor comes out cheaper at a given crew size, the page says so.

export const NEXUS_FIELD = {
  perTechMonthly: 59,
  perTechLabel: "$59",
  /** Nothing above this per month, however many techs. */
  capMonthly: 800,
  capLabel: "$800",
  /** Launch offer: held rate for the first 10 shops. Remove once the spots are gone. */
  foundingMonthly: 49,
  foundingLabel: "$49",
  foundingSpots: 10,
  foundingHold: "two years",
  officeUsers: "Free — dispatch and office staff aren't techs, so they aren't billed",
  contract: "None. Month to month.",
  setup: "Minimal — scoped to the size of your data migration and quoted on the discovery call",
  priceHold: "Held for two years, then renegotiated together",
  platforms: "Mobile and desktop included",
  inventory: "Parts inventory included in every plan",
  demoUrl: "/audit?type=demo",
  contactUrl: "/contact?interest=nexusfield",
};

/** Per-tech, never more than the monthly cap. */
export function nexusMonthly(techs: number, rate: number = NEXUS_FIELD.perTechMonthly) {
  return Math.min(rate * techs, NEXUS_FIELD.capMonthly);
}

/** Lowest tech count at which the cap starts saving money. */
export const CAP_BINDS_AT = Math.floor(NEXUS_FIELD.capMonthly / NEXUS_FIELD.perTechMonthly) + 1;

export type CompareRow = {
  label: string;
  them: string;
  us: string;
  /** true when `them` is a public estimate rather than a published figure */
  estimate?: boolean;
};

export type CostLine = { label: string; amount: number | null; note?: string };

export type CostBreakdown = {
  lines: CostLine[];
  monthly: number;
  oneTime: number;
  caption: string;
  notIncluded: string[];
};

/**
 * A published plan. `extraSeat` is set only where the vendor actually publishes
 * a per-seat overage price; plans without one cannot cover more users than they
 * include, and are skipped rather than quietly extrapolated.
 */
export type Plan = { name: string; price: number; users: number; extraSeat?: number };

/**
 * A competitor's published pricing, as plain data so it can cross the
 * server/client boundary. Either a per-tech rate (vendors who publish no
 * plans) or the published plan and seat tiers.
 */
export type Pricing = {
  perTech?: number;
  perTechNote?: string;
  plans?: Plan[];
  oneTime?: number;
  oneTimeLabel?: string;
  caption: string;
  notIncluded: string[];
};

function cheapestPlan(users: number, plans: Plan[]) {
  let best: (Plan & { extra: number; total: number }) | null = null;
  for (const p of plans) {
    const extra = Math.max(0, users - p.users);
    if (extra > 0 && !p.extraSeat) continue;
    const total = p.price + extra * (p.extraSeat ?? 0);
    if (!best || total < best.total) best = { ...p, extra, total };
  }
  return best!;
}

export type Competitor = {
  slug: string;
  name: string;
  checked: string;
  headline: string;
  intro: string;
  glance: { label: string; them: string; us: string; estimate?: boolean }[];
  rows: CompareRow[];
  estimateNote: string;
  pricing: Pricing;
  theyWin: { title: string; body: string }[];
  weWin: string[];
  sourceNote: string;
  sources: { label: string; url: string }[];
};

export const competitors: Competitor[] = [
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    checked: "November 2026",
    headline: "The bill that grows every year, or the one that doesn't.",
    intro:
      "ServiceTitan is the biggest name in field service software, and for a large multi-location operation it can be the right call. But a lot of smaller shops are paying for far more platform than they use, and they find out at renewal. This page puts the two side by side with real numbers, including the ones ServiceTitan doesn't publish.",
    glance: [
      { label: "Per tech, per month", them: "~$245–$500", us: NEXUS_FIELD.perTechLabel, estimate: true },
      { label: "Contract", them: "12 months", us: "None", estimate: true },
      { label: "Setup / implementation", them: "~$5,000–$50,000", us: "Minimal, scoped to your migration", estimate: true },
    ],
    rows: [
      { label: "Published pricing", them: 'No - "Request Pricing" on all three plans', us: `Yes — ${NEXUS_FIELD.perTechLabel} per tech per month` },
      { label: "Plans", them: "Starter, Essentials, The Works", us: "One plan. Everything's in it." },
      { label: "Office & dispatch users", them: "Priced per technician; office seats vary by quote", us: "Free", estimate: true },
      { label: "Monthly ceiling", them: "None — the bill scales with your headcount", us: `${NEXUS_FIELD.capLabel} a month, however many techs you run` },
      { label: "Contract length", them: "12-month minimum", us: "None — month to month", estimate: true },
      { label: "Implementation fee", them: "~$5,000–$50,000, quoted case by case", us: "Minimal — scoped to your data migration, quoted on the discovery call", estimate: true },
      { label: "Price after year one", them: "Set at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Available", us: "Included in every plan" },
      { label: "Add-on modules", them: "Marketing Pro, Pricebook Pro, Dispatch Pro, Fleet Pro, Scheduling Pro, Field Pro, Contact Center Pro — sold separately", us: "None. If it's in the app, it's in your price." },
      { label: "Mobile + desktop", them: "Included", us: "Included" },
      { label: "Setup & training", them: "Implementation team; scope depends on package", us: "We configure it around your job types, terminology, and parts, and train your team before go-live" },
      { label: "Built for", them: "Larger residential and commercial contractors, multi-location, private-equity-backed groups", us: "Owner-operated HVAC, plumbing, electrical, and contracting shops that want the tool to fit them, not the other way around" },
    ],
    estimateNote: "Public estimate — ServiceTitan doesn't publish this. Sources at the bottom of the page.",
    pricing: {
      perTech: 245,
      perTechNote: "lowest reported per-tech price",
      oneTime: 5000,
      oneTimeLabel: "Implementation (low end)",
      caption: "Year one, best case",
      notIncluded: ["Office seats, which vary by quote", "Pro add-on modules", "Any price change at renewal"],
    },
    theyWin: [
      { title: "You run a large, multi-location operation", body: "ServiceTitan is built to run 50-, 100-, 500-tech companies across regions. That's their core customer, and the product reflects it." },
      { title: "You want marketing, call center, and financing inside one vendor", body: "Marketing Pro, Contact Center Pro, and their financing partners are real products. They cost extra, but they exist. We don't sell those." },
      { title: "You need a deep third-party integration marketplace", body: "ServiceTitan has years of integrations with accounting, fleet, and marketing tools. We integrate where our customers need it, not everywhere." },
    ],
    weWin: [
      "You have somewhere between 2 and 40 techs and the renewal quote made you wince",
      `You'd rather pay ${NEXUS_FIELD.perTechLabel} a tech than budget $5,000+ before the app has done anything for you`,
      "You want the software configured around how your shop already works, not a six-week implementation to learn theirs",
      "Parts walking off trucks is a bigger problem for you than marketing automation",
      "You want to be able to leave. Not because you plan to — because it keeps your vendor honest",
    ],
    sourceNote:
      "ServiceTitan does not publish prices. The figures marked with an asterisk are aggregated public estimates from user reports and review sites, not an official ServiceTitan quote — your quote may differ. Plan names, per-technician pricing structure and the Pro add-on lineup are from ServiceTitan's own pricing page, re-checked November 2026. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "ServiceTitan pricing page (plans, per-technician structure, Pro add-ons)", url: "https://www.servicetitan.com/pricing" },
      { label: "FSM Advisor — ServiceTitan pricing estimates", url: "https://www.fsmadvisor.com/pricing/servicetitan" },
      { label: "Projul — ServiceTitan pricing analysis 2026", url: "https://projul.com/blog/servicetitan-pricing-analysis-2026/" },
    ],
  },
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    checked: "November 2026",
    headline: "The low sticker price. Then the add-on invoice.",
    intro:
      "Housecall Pro is a capable self-serve platform, and for a one- or two-person shop it is cheaper than we are. This page is for the shops that grew into the Max plan, watched the per-user fees and add-ons stack up, and still can't get it to match how they actually work.",
    glance: [
      { label: "Monthly price", them: "$79–$329 + $35/user", us: `${NEXUS_FIELD.perTechLabel} / tech` },
      { label: "Monthly ceiling", them: "None", us: NEXUS_FIELD.capLabel },
      { label: "Parts inventory", them: "Not on the pricing page", us: "Included" },
    ],
    rows: [
      { label: "Published pricing", them: "Yes", us: `Yes — ${NEXUS_FIELD.perTechLabel} per tech per month` },
      { label: "Plans", them: "Basic $79 (1 user), Essentials $189 (5 users), Max $329 (8 users), month to month. Annual billing: $59 / $149 / $299.", us: "One plan. Everything's in it." },
      { label: "Additional users", them: "$35 per user per month, published on the Max plan", us: `Techs are ${NEXUS_FIELD.perTechLabel}. Office and dispatch users are free.` },
      { label: "Monthly ceiling", them: "None — every extra seat adds $35 for good", us: `${NEXUS_FIELD.capLabel} a month, however many techs you run` },
      { label: "Contract length", them: "No long-term contract, month to month. The lower annual prices need a year paid up front.", us: "None — month to month, and that is the price." },
      { label: "Setup fee", them: "None listed", us: "Minimal — scoped to your data migration, quoted on the discovery call" },
      { label: "Price after year one", them: "Whatever the price list says at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Not on the pricing page or the plan feature lists", us: "Warehouse and per-truck inventory, parts-per-job, included" },
      { label: "Paid add-ons", them: "Sales Proposal Tool, CSR AI, Pipeline, Payroll, Accounting, Business Coaching, Voice, Campaigns, Vehicle GPS / Dashcams, Tap to Pay, Websites", us: "None. If it's in the app, it's in your price." },
      { label: "Customization", them: "Settings and templates. Limited customization and no custom fields are among the most common complaints in public reviews.", us: "Configured around your job types, terminology and parts catalog before go-live", estimate: true },
      { label: "Onboarding", them: "Dedicated onboarding specialist on Max only", us: "Everyone. We set it up and train your team." },
      { label: "Built for", them: "Solo operators and small home-service shops that want to self-serve", us: "Owner-operated HVAC, plumbing, electrical and contracting shops that carry parts and want the tool to fit them" },
    ],
    estimateNote: "From public reviews and third-party analyses, not Housecall Pro's own page or our testing. Sources at the bottom of the page.",
    pricing: {
      plans: [
        { name: "Basic", price: 79, users: 1 },
        { name: "Essentials", price: 189, users: 5 },
        { name: "Max", price: 329, users: 8, extraSeat: 35 },
      ],
      caption: "Year one, month-to-month",
      notIncluded: [
        "Every paid add-on (proposals, GPS, voice, campaigns and more)",
        "A parts inventory system, since there isn't one on the plan",
        "Custom fields or configuration to your workflow",
        "Any change to the price list at renewal",
      ],
    },
    theyWin: [
      { title: "You're a one- or two-person shop", body: "Basic at $79 or Essentials at $189 beats a per-tech price until you're past a couple of people. At that size, they're the cheaper tool." },
      { title: "You want financing, campaigns and a phone system from one vendor", body: "Consumer financing, Campaigns, Voice, CSR AI - they're all real products. They cost extra, but they exist. We don't sell those." },
      { title: "You want to sign up this afternoon with no call", body: "14-day free trial, no credit card, no conversation. We start with a discovery call, on purpose." },
    ],
    weWin: [
      "You carry parts on trucks and need to know where they went, not a workaround",
      "You're tired of the add-on invoice — you want one number that includes the whole app",
      "Your office and dispatch staff shouldn't cost the same as a tech in the field",
      `You're past ${CAP_BINDS_AT} techs, where our bill stops growing and theirs doesn't`,
      "You want the software set up around how your shop already works, by someone who'll pick up the phone",
    ],
    sourceNote:
      "Housecall Pro plan prices, included users, per-user pricing, add-on list and contract terms are from Housecall Pro's own pricing page, re-checked November 2026, quoted at month-to-month rates (annual billing is lower). Housecall Pro publishes the $35 per-user price on the Max plan only, so this page never adds extra seats to Basic or Essentials — those plans are skipped once your team outgrows them. The customization complaint marked with an asterisk comes from public reviews and third-party analyses, not our own testing. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "Housecall Pro pricing page (plans, users, add-ons, contract terms)", url: "https://www.housecallpro.com/pricing/" },
      { label: "Tooled Up Pro — Housecall Pro pricing and the add-on trap (2026)", url: "https://tooleduppro.com/guides/housecall-pro-pricing/" },
      { label: "Projul — Housecall Pro pricing breakdown 2026", url: "https://projul.com/blog/housecall-pro-pricing-analysis-2026/" },
    ],
  },
  {
    slug: "jobber",
    name: "Jobber",
    checked: "November 2026",
    headline: "Cheaper on paper. Built for a different job.",
    intro:
      "Jobber is a good product. If you run lawn care, cleaning, or a small crew with no parts on the truck, it may be the right pick, and on seat price it is the cheaper one. This page is for HVAC, plumbing and electrical shops that carry inventory, have grown past a handful of users, and are tired of climbing the tier ladder.",
    glance: [
      { label: "Monthly price", them: "$49–$699 + $29/user", us: `${NEXUS_FIELD.perTechLabel} / tech` },
      { label: "Monthly ceiling", them: "None", us: NEXUS_FIELD.capLabel },
      { label: "Parts inventory", them: "Not on the feature list", us: "Included" },
    ],
    rows: [
      { label: "Published pricing", them: "Yes", us: `Yes — ${NEXUS_FIELD.perTechLabel} per tech per month` },
      { label: "Plans", them: "Priced by plan and seat tier, month to month. Core $49 (1 user). Connect $139 / $199 / $299 / $399 for 1 / 5 / 10 / 15 users. Grow $199 / $299 / $399 / $499 for the same tiers. Plus $499 / $599 / $699 for 5 / 10 / 15. 16+ users: Contact Sales.", us: "One plan. Everything's in it." },
      { label: "Additional users", them: "$29 per user per month, listed on every plan card", us: `Techs are ${NEXUS_FIELD.perTechLabel}. Office and dispatch users are free.` },
      { label: "Monthly ceiling", them: "None — the next seat tier is always waiting", us: `${NEXUS_FIELD.capLabel} a month, however many techs you run` },
      { label: "Contract length", them: "None at the month-to-month price. The advertised lower prices require a 1-year commitment or a year prepaid — Connect for 10 users drops from $299 to $259, or $229 prepaid.", us: "None — month to month, and that is the price." },
      { label: "Setup fee", them: "None listed", us: "Minimal — scoped to your data migration, quoted on the discovery call" },
      { label: "Price after year one", them: "Whatever the price list says at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Not on the plan feature list", us: "Warehouse and per-truck inventory, parts-per-job, included" },
      { label: "Features by tier", them: "QuickBooks Online sync starts at Connect. Job costing and two-way SMS start at Grow.", us: "No tiers. Every feature, every customer." },
      { label: "Paid add-ons", them: "Marketing Suite $99/mo, AI Receptionist $29/mo, Pipeline $49/mo", us: "None. If it's in the app, it's in your price." },
      { label: "Customization", them: "Settings and templates", us: "Configured around your job types, terminology and parts catalog before go-live" },
      { label: "Built for", them: "Home-service crews across lawn, cleaning and light trades that want a polished self-serve tool", us: "Owner-operated HVAC, plumbing, electrical and contracting shops that carry parts and want the tool to fit them" },
    ],
    estimateNote: "From public reviews and third-party analyses, not Jobber's own page or our testing. Sources at the bottom of the page.",
    pricing: {
      plans: [
        { name: "Core", price: 49, users: 1, extraSeat: 29 },
        { name: "Connect", price: 139, users: 1, extraSeat: 29 },
        { name: "Connect", price: 199, users: 5, extraSeat: 29 },
        { name: "Connect", price: 299, users: 10, extraSeat: 29 },
        { name: "Connect", price: 399, users: 15, extraSeat: 29 },
        { name: "Grow", price: 199, users: 1, extraSeat: 29 },
        { name: "Grow", price: 299, users: 5, extraSeat: 29 },
        { name: "Grow", price: 399, users: 10, extraSeat: 29 },
        { name: "Grow", price: 499, users: 15, extraSeat: 29 },
        { name: "Plus", price: 499, users: 5, extraSeat: 29 },
        { name: "Plus", price: 599, users: 10, extraSeat: 29 },
        { name: "Plus", price: 699, users: 15, extraSeat: 29 },
      ],
      caption: "Year one, month-to-month",
      notIncluded: [
        "Marketing Suite, AI Receptionist and Pipeline add-ons",
        "A parts inventory system, since there isn't one on the plan",
        "Features gated to a higher tier than the one your seat count lands you on",
        "Jobber publishes seat tiers up to 15 users and sends larger teams to Contact Sales, so above that this is our estimate at their published $29 a seat",
        "Any change to the price list at renewal",
      ],
    },
    theyWin: [
      { title: "You don't carry parts", body: "Lawn care, cleaning, window washing, light handyman — if nothing rides on the truck, our biggest feature does nothing for you and Jobber is cheaper." },
      { title: "Seat price is the only line you're comparing", body: "Core starts at $49 for one user, and on raw seat price Jobber stays under a per-tech rate at almost every crew size. The calculator above says so plainly. They win that line." },
      { title: "You want the marketing and receptionist bolt-ons", body: "Marketing Suite and the AI Receptionist are real, polished products. They cost extra, but they exist. We don't sell those." },
    ],
    weWin: [
      "You're HVAC, plumbing or electrical and parts on trucks are money you can't account for",
      "Every new hire is another $29 a month plus, eventually, the next seat tier",
      "You'd rather pay one flat month-to-month price than commit to a year to get the advertised number",
      "Your office and dispatch staff shouldn't cost the same as a tech in the field",
      "You want the software set up around how your shop already works, by someone who'll pick up the phone",
    ],
    sourceNote:
      "Jobber plan prices, seat tiers, per-user pricing, tier features, add-on prices and commitment terms are from Jobber's own pricing page, re-checked November 2026, quoted at the month-to-month (no commitment) rate. Jobber restructured its plans into per-seat tiers after our September check and this page reflects the current ones. We don't state which tier includes GPS tracking, because Jobber's page doesn't make that clear. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "Jobber pricing page (plans, seat tiers, add-ons, commitment terms)", url: "https://www.getjobber.com/pricing/" },
      { label: "TradePicked — Jobber pricing by crew size (2026)", url: "https://tradepicked.com/reviews/jobber-pricing" },
      { label: "Capterra — Jobber pricing 2026", url: "https://www.capterra.com/p/127994/Jobber/pricing/" },
    ],
  },
];

/** Their cheapest published way to cover this crew. Generous to them on purpose. */
export function computeCost(p: Pricing, techs: number, office: number): CostBreakdown {
  const lines: CostLine[] = [];
  let monthly = 0;

  if (p.perTech != null) {
    monthly = p.perTech * techs;
    lines.push({
      label: "$" + p.perTech + " × " + techs + " techs × 12",
      amount: p.perTech * techs * 12,
      note: p.perTechNote,
    });
  } else if (p.plans) {
    const best = cheapestPlan(techs + office, p.plans);
    monthly = best.total;
    const seats = best.users + (best.users === 1 ? " user" : " users");
    lines.push({ label: best.name + " × 12 (" + seats + ")", amount: best.price * 12 });
    if (best.extra > 0 && best.extraSeat) {
      lines.push({
        label: "$" + best.extraSeat + " × " + best.extra + " extra users × 12",
        amount: best.extra * best.extraSeat * 12,
      });
    }
  }

  const oneTime = p.oneTime ?? 0;
  if (oneTime > 0) lines.push({ label: p.oneTimeLabel ?? "One-time fee", amount: oneTime });

  return { lines, monthly, oneTime, caption: p.caption, notIncluded: p.notIncluded };
}

export function getCompetitor(slug: string | undefined) {
  return competitors.find((c) => c.slug === slug);
}
