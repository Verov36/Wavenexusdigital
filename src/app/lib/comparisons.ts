// Nexus Field vs. <competitor> comparison pages.
//
// One entry per competitor; Compare.tsx renders whichever slug is in the URL.
// Every competitor number on these pages must be either (a) published by the
// competitor, or (b) clearly labelled as a public estimate / third-party
// report with its source linked (`estimate: true` renders an asterisk and the
// competitor's `estimateNote`). Nexus Field's numbers come from NEXUS_FIELD
// below and nowhere else, so a price change is a one-line edit.
//
// The cost calculator is deliberately honest in both directions: when a
// competitor is cheaper at a given crew size, the page says so.

export const NEXUS_FIELD = {
  perTechMonthly: 75,
  perTechLabel: "$75",
  officeUsers: "Free — dispatch and office staff aren't techs, so they aren't billed",
  contract: "None. Month to month.",
  setup: "Minimal — scoped to the size of your data migration and quoted on the discovery call",
  priceHold: "Held for two years, then renegotiated together",
  platforms: "Mobile and desktop included",
  inventory: "Parts inventory included in every plan",
  demoUrl: "https://wavenexusos.polsia.app/intake",
  contactUrl: "/contact?interest=nexusfield",
};

export type CompareRow = {
  label: string;
  them: string;
  us: string;
  /** true when `them` comes from public estimates / third-party reports rather than the vendor */
  estimate?: boolean;
};

export type CostLine = { label: string; amount: number | null; note?: string };

export type CostBreakdown = {
  lines: CostLine[];
  /** recurring monthly total for the competitor at this crew size */
  monthly: number;
  /** one-time fees (implementation etc.) */
  oneTime: number;
  /** short caption under the total, e.g. "Year one, month-to-month" */
  caption: string;
  /** things the competitor's number does not include — shown under their card */
  notIncluded: string[];
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
  /** Three at-a-glance tiles */
  glance: { label: string; them: string; us: string; estimate?: boolean }[];
  rows: CompareRow[];
  /** Explains what the asterisk means on this page */
  estimateNote: string;
  /** Competitor cost at a given crew size. Be generous to them: cheapest plan that fits. */
  cost: (techs: number, office: number) => CostBreakdown;
  /** Where the competitor is genuinely the better choice. Keep this honest — it's what makes the rest believable. */
  theyWin: { title: string; body: string }[];
  /** When Nexus Field is the better fit */
  weWin: string[];
  sourceNote: string;
  sources: { label: string; url: string }[];
};

// Pick the cheapest plan whose included seats cover `users`, adding per-seat
// overage where the vendor allows it.
function cheapestPlan(
  users: number,
  plans: { name: string; price: number; users: number }[],
  extraSeat: number
) {
  let best: { name: string; price: number; users: number; extra: number; total: number } | null = null;
  for (const p of plans) {
    const extra = Math.max(0, users - p.users);
    const total = p.price + extra * extraSeat;
    if (!best || total < best.total) best = { ...p, extra, total };
  }
  return best!;
}

export const competitors: Competitor[] = [
  // ── ServiceTitan ─────────────────────────────────────────────────────────
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    checked: "September 2026",
    metaTitle: "Nexus Field vs ServiceTitan — Pricing, Contract & Setup Fees Compared (2026)",
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
    estimateNote: "Public estimate — ServiceTitan doesn't publish this. Sources at the bottom of the page.",
    cost: (techs) => ({
      lines: [
        { label: `$245 × ${techs} techs × 12`, amount: 245 * techs * 12, note: "lowest reported per-tech price" },
        { label: "Implementation (low end)", amount: 5000 },
      ],
      monthly: 245 * techs,
      oneTime: 5000,
      caption: "Year one, best case",
      notIncluded: ["Office seats (vary by quote)", "Pro add-on modules", "Any price change at renewal"],
    }),
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

  // ── Housecall Pro ────────────────────────────────────────────────────────
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    checked: "September 2026",
    metaTitle: "Nexus Field vs Housecall Pro — Pricing, Add-Ons & Per-User Fees Compared (2026)",
    metaDescription:
      "An honest Housecall Pro alternative comparison: Basic $79, Essentials $189, Max $329 a month plus $35 per extra user and a long list of paid add-ons, vs. Nexus Field at $75 per tech with office users free, parts inventory included, no contract, and your price held for two years.",
    headline: "The low sticker price. Then the add-on invoice.",
    intro:
      "Housecall Pro is a solid self-serve platform, and for a one- or two-person shop it's cheaper than we are. This page is for the shops that grew into the Max plan, watched the per-user fees and add-ons stack up, and still can't get it to match how they actually work.",
    glance: [
      { label: "Monthly price", them: "$79 – $329 + $35/user", us: "$75 / tech" },
      { label: "Contract", them: "Month to month", us: "None" },
      { label: "Parts inventory", them: "Not on the pricing page", us: "Included" },
    ],
    rows: [
      { label: "Published pricing", them: "Yes", us: "Yes — $75 per tech per month" },
      { label: "Plans", them: "Basic $79 (1 user) · Essentials $189 (5 users) · Max $329 (8 users). Annual billing: $59 / $149 / $299", us: "One plan. Everything's in it." },
      { label: "Additional users", them: "$35 per user per month on Max", us: "Techs are $75. Office and dispatch users are free." },
      { label: "Contract length", them: "None — month to month. The lower annual prices need a year paid up front.", us: "None — month to month, and that is the price." },
      { label: "Setup fee", them: "None listed", us: "Minimal — scoped to your data migration, quoted on the discovery call" },
      { label: "Price after year one", them: "Whatever the price list says at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Not on the pricing page or the plan feature lists", us: "Warehouse and per-truck inventory, parts-per-job, included" },
      { label: "Paid add-ons", them: "Sales Proposal Tool, CSR AI, Pipeline, Payroll, Accounting, Business Coaching, Voice, Campaigns, Vehicle GPS / Dashcams, Websites", us: "None. If it's in the app, it's in your price." },
      { label: "Customization", them: "Settings and templates. Limited customization and no custom fields are among the most common complaints in public reviews", us: "Configured around your job types, terminology, and parts catalog before go-live", estimate: true },
      { label: "Onboarding", them: "Dedicated onboarding specialist on Max only", us: "Everyone. We set it up and train your team." },
      { label: "Built for", them: "Solo operators and small home-service shops that want to self-serve", us: "Owner-operated HVAC, plumbing, electrical, and contracting shops that carry parts and want the tool to fit them" },
    ],
    estimateNote: "From public reviews and third-party analyses, not Housecall Pro's own page or our testing. Sources at the bottom of the page.",
    cost: (techs, office) => {
      const users = techs + office;
      const p = cheapestPlan(
        users,
        [
          { name: "Basic", price: 79, users: 1 },
          { name: "Essentials", price: 189, users: 5 },
          { name: "Max", price: 329, users: 8 },
        ],
        35
      );
      const lines: CostLine[] = [{ label: `${p.name} plan × 12 (${p.users} users)`, amount: p.price * 12 }];
      if (p.extra > 0) lines.push({ label: `$35 × ${p.extra} extra users × 12`, amount: p.extra * 35 * 12 });
      return {
        lines,
        monthly: p.total,
        oneTime: 0,
        caption: "Year one, month-to-month",
        notIncluded: ["Every paid add-on (proposals, GPS, voice, campaigns, and more)", "A parts inventory system, since there isn't one on the plan", "Custom fields or configuration to your workflow", "Any change to the price list at renewal"],
      };
    },
    theyWin: [
      { title: "You're a one- or two-person shop", body: "Basic at $79 or Essentials at $189 beats $75 a tech until you're past two or three people. At that size, they're the cheaper tool." },
      { title: "You want financing, campaigns, and a phone system from one vendor", body: "Consumer financing, Campaigns, Voice, CSR AI — they're all real products. They cost extra, but they exist. We don't sell those." },
      { title: "You want to sign up this afternoon with no call", body: "14-day free trial, no credit card, no conversation. We start with a discovery call, on purpose." },
    ],
    weWin: [
      "You have 4 to 40 techs and your Max bill keeps growing by $35 a head",
      "You carry parts on trucks and need to know where they went, not a workaround",
      "You're tired of the add-on invoice — you want one number that includes the whole app",
      "Your office and dispatch staff shouldn't cost the same as a tech in the field",
      "You want the software set up around how your shop already works, by someone who'll pick up the phone",
    ],
    sourceNote:
      "Housecall Pro plan prices, included users, per-user pricing, add-on list, and contract terms are from Housecall Pro's own pricing page as of September 2026, quoted at month-to-month rates (annual billing is lower). The customization complaint marked with an asterisk comes from public reviews and third-party analyses, not our own testing. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "Housecall Pro pricing page (plans, users, add-ons, contract terms)", url: "https://www.housecallpro.com/pricing/" },
      { label: "Tooled Up Pro — Housecall Pro pricing and the add-on trap (2026)", url: "https://tooleduppro.com/guides/housecall-pro-pricing/" },
      { label: "Projul — Housecall Pro pricing breakdown 2026", url: "https://projul.com/blog/housecall-pro-pricing-analysis-2026/" },
    ],
  },

  // ── Jobber ───────────────────────────────────────────────────────────────
  {
    slug: "jobber",
    name: "Jobber",
    checked: "September 2026",
    metaTitle: "Nexus Field vs Jobber — Pricing, Per-User Fees & Parts Inventory Compared (2026)",
    metaDescription:
      "An honest Jobber alternative comparison: Core $49, Connect $139, Grow $199, Plus $499 a month plus $29 per extra user, with the advertised discounts requiring a year's commitment, vs. Nexus Field at $75 per tech with office users free, parts inventory included, no contract, and your price held for two years.",
    headline: "Cheaper on paper. Built for a different job.",
    intro:
      "Jobber is a good product. If you run lawn care, cleaning, or a small crew with no parts on the truck, it may be the right pick, and it's the cheaper one. This page is for HVAC, plumbing, and electrical shops that carry inventory, have grown past five users, and are tired of climbing the tier ladder.",
    glance: [
      { label: "Monthly price", them: "$49 – $499 + $29/user", us: "$75 / tech" },
      { label: "Contract", them: "None at full price; discounts need a year", us: "None" },
      { label: "Parts inventory", them: "Not on the feature list", us: "Included" },
    ],
    rows: [
      { label: "Published pricing", them: "Yes", us: "Yes — $75 per tech per month" },
      { label: "Plans", them: "Core $49 (1 user) · Connect $139 (5) · Grow $199 (10) · Plus $499 (15), month to month", us: "One plan. Everything's in it." },
      { label: "Additional users", them: "$29 per user per month", us: "Techs are $75. Office and dispatch users are free." },
      { label: "Contract length", them: "None at the month-to-month price. The advertised lower prices require a 1-year commitment ($39 / $119 / $169 / $439) or a year prepaid ($29 / $99 / $149 / $399).", us: "None — month to month, and that is the price." },
      { label: "Setup fee", them: "None listed", us: "Minimal — scoped to your data migration, quoted on the discovery call" },
      { label: "Price after year one", them: "Whatever the price list says at renewal", us: "Held for two years, then renegotiated together" },
      { label: "Parts inventory", them: "Not on the plan feature list", us: "Warehouse and per-truck inventory, parts-per-job, included" },
      { label: "Features by tier", them: "Job costing, GPS, and QuickBooks sync start at Connect. Two-way SMS starts at Grow.", us: "No tiers. Every feature, every customer." },
      { label: "Paid add-ons", them: "Marketing Suite $99/mo · AI Receptionist $29/mo · Pipeline $49/mo", us: "None. If it's in the app, it's in your price." },
      { label: "Customization", them: "Settings and templates", us: "Configured around your job types, terminology, and parts catalog before go-live" },
      { label: "Built for", them: "Home-service crews across lawn, cleaning, and light trades that want a polished self-serve tool", us: "Owner-operated HVAC, plumbing, electrical, and contracting shops that carry parts and want the tool to fit them" },
    ],
    estimateNote: "From public reviews and third-party analyses, not Jobber's own page or our testing. Sources at the bottom of the page.",
    cost: (techs, office) => {
      const users = techs + office;
      const p = cheapestPlan(
        users,
        [
          { name: "Core", price: 49, users: 1 },
          { name: "Connect", price: 139, users: 5 },
          { name: "Grow", price: 199, users: 10 },
          { name: "Plus", price: 499, users: 15 },
        ],
        29
      );
      const lines: CostLine[] = [{ label: `${p.name} plan × 12 (${p.users} users)`, amount: p.price * 12 }];
      if (p.extra > 0) lines.push({ label: `$29 × ${p.extra} extra users × 12`, amount: p.extra * 29 * 12 });
      return {
        lines,
        monthly: p.total,
        oneTime: 0,
        caption: "Year one, month-to-month",
        notIncluded: ["Marketing Suite, AI Receptionist, Pipeline add-ons", "A parts inventory system, since there isn't one on the plan", "Features gated to a higher tier than the one your seat count lands you on", "Any change to the price list at renewal"],
      };
    },
    theyWin: [
      { title: "You don't carry parts", body: "Lawn care, cleaning, window washing, light handyman — if nothing rides on the truck, our biggest feature does nothing for you and Jobber is cheaper." },
      { title: "You're solo or a crew of five", body: "Core at $49 or Connect at $139 is less than $75 a tech until you're past a handful of people. At that size, they're the cheaper tool." },
      { title: "You want the marketing and receptionist bolt-ons", body: "Marketing Suite and the AI Receptionist are real, polished products. They cost extra, but they exist. We don't sell those." },
    ],
    weWin: [
      "You're HVAC, plumbing, or electrical and parts on trucks are money you can't account for",
      "You're past five users and every new hire is another $29 a month plus the next tier",
      "You'd rather pay one flat price at month-to-month than commit to a year to get the number on the billboard",
      "Your office and dispatch staff shouldn't cost the same as a tech in the field",
      "You want the software set up around how your shop already works, by someone who'll pick up the phone",
    ],
    sourceNote:
      "Jobber plan prices, included users, per-user pricing, tier features, add-on prices, and commitment terms are from Jobber's own pricing page as of September 2026, quoted at the month-to-month (no commitment) rate. Included-user counts per plan are as listed on Jobber's page and in the third-party breakdowns below. We'll correct anything here that's out of date: email us.",
    sources: [
      { label: "Jobber pricing page (plans, users, add-ons, commitment terms)", url: "https://www.getjobber.com/pricing/" },
      { label: "TradePicked — Jobber pricing by crew size (2026)", url: "https://tradepicked.com/reviews/jobber-pricing" },
      { label: "Capterra — Jobber pricing 2026", url: "https://www.capterra.com/p/127994/Jobber/pricing/" },
    ],
  },
];

export function getCompetitor(slug: string | undefined) {
  return competitors.find((c) => c.slug === slug);
}
