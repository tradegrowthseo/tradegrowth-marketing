// Pricing is published in full and in public — it's a deliberate
// differentiator, so nothing here is hidden behind a "request a quote".
//
// Structure: everyone buys The Website once (one-off, from £500 — the final
// figure depends on the build), then chooses one of three monthly packages that
// sit on top of it. Each package includes everything in the tier below it.

export interface Tier {
  id: "basic" | "standard" | "premium";
  name: string;
  tagline: string;
  monthly: string;
  setup: string;
  minimum: string;
  best: string;
  includesBelow?: string;
  featured?: boolean; // Standard is the "most popular" tier
  features: string[];
}

/** The one-off website build. Sold separately from the monthly packages. */
export const websiteProduct = {
  name: "The Website",
  price: "From £500",
  terms: "Starting price — final cost depends on the build · one-off · 50% deposit, 50% on launch",
  tagline: "The foundation everything else sits on",
  commitment: "No monthly commitment",
  features: [
    "Mobile-first website",
    "AEO-ready from day one — schema, FAQ structure, llms.txt",
    "Domain registered in your name",
    "Hosting and SSL included for the first year",
    "Built to convert, not just to look tidy",
    "No monthly commitment required",
  ],
};

export const tiers: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Get found",
    monthly: "£200",
    setup: "£150 setup",
    minimum: "3 month minimum",
    best: "Trades who need to be findable — on Google and in AI answers",
    features: [
      "Google Business Profile management",
      "AEO foundations active",
      "AI visibility tracking",
      "Local SEO reports",
      "5 directory citations",
      "Speed-to-lead + missed-call text-back",
      "Review automation",
      "Basic CRM",
      "The Trades Network",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Get booked",
    monthly: "£400",
    setup: "£300 setup",
    minimum: "3 month minimum",
    best: "Trades who want a steady, predictable flow of quoted work",
    includesBelow: "Everything in Basic, plus:",
    featured: true,
    features: [
      "Google & Meta ads management",
      "Ad creative refresh",
      "1 AEO page + 1 SEO post every month",
      "Industry-specific CRM templates",
      "Lead nurture + quote follow-up",
      "Monthly strategy call",
      "15+ directory citations",
      "Full reporting dashboard",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Win the jobs",
    monthly: "£500",
    setup: "£500 setup",
    minimum: "6 month minimum",
    best: "Established trades ready to stop answering the phone themselves",
    includesBelow: "Everything in Standard, plus:",
    features: [
      "AI voice agent — answers within 3 rings, 24/7",
      "Human appointment setting",
      "Pre-qualified leads + automatic quotes",
      "Social posting, 3 posts per week",
      "Monthly video + email/SMS campaigns",
      "Compliance certificate generation",
      "Job costing dashboard",
      "Bi-weekly check-ins + quarterly reviews",
    ],
  },
];

// ─── Full feature comparison ──────────────────────────────────────────
// `true` renders a tick, `false` renders a dash, a string renders as-is.
// The Website column is the one-off build; a dash there means "that's part of
// a monthly package, not the build" — and vice versa.

export type Cell = boolean | string;

export interface ComparisonRow {
  label: string;
  website: Cell;
  basic: Cell;
  standard: Cell;
  premium: Cell;
}

export interface ComparisonGroup {
  group: string;
  rows: ComparisonRow[];
}

export const comparison: ComparisonGroup[] = [
  {
    group: "The website",
    rows: [
      { label: "10-page, mobile-first website", website: true, basic: false, standard: false, premium: false },
      { label: "AEO-ready build (schema, FAQ structure, llms.txt)", website: true, basic: false, standard: false, premium: false },
      { label: "Domain registered in your name", website: true, basic: false, standard: false, premium: false },
      { label: "Hosting + SSL, first year", website: true, basic: false, standard: false, premium: false },
    ],
  },
  {
    group: "Get found",
    rows: [
      { label: "Google Business Profile management", website: false, basic: true, standard: true, premium: true },
      { label: "AEO foundations active", website: false, basic: true, standard: true, premium: true },
      { label: "AI visibility tracking", website: false, basic: true, standard: true, premium: true },
      { label: "Local SEO reports", website: false, basic: true, standard: true, premium: true },
      { label: "Directory citations", website: false, basic: "5", standard: "15+", premium: "15+" },
      { label: "New AEO page + SEO post each month", website: false, basic: false, standard: "1 + 1", premium: "1 + 1" },
    ],
  },
  {
    group: "Get booked",
    rows: [
      { label: "Speed-to-lead + missed-call text-back", website: false, basic: true, standard: true, premium: true },
      { label: "Review automation", website: false, basic: true, standard: true, premium: true },
      { label: "CRM", website: false, basic: "Basic", standard: "Industry-specific", premium: "Industry-specific" },
      { label: "Lead nurture + quote follow-up", website: false, basic: false, standard: true, premium: true },
      { label: "AI voice agent — answers within 3 rings", website: false, basic: false, standard: false, premium: true },
      { label: "Human appointment setting", website: false, basic: false, standard: false, premium: true },
      { label: "Pre-qualified leads + automatic quotes", website: false, basic: false, standard: false, premium: true },
    ],
  },
  {
    group: "Paid ads & content",
    rows: [
      { label: "Google & Meta ads management", website: false, basic: false, standard: true, premium: true },
      { label: "Ad creative refresh", website: false, basic: false, standard: true, premium: true },
      { label: "Social posting", website: false, basic: false, standard: false, premium: "3 / week" },
      { label: "Monthly video + email/SMS campaigns", website: false, basic: false, standard: false, premium: true },
    ],
  },
  {
    group: "Running the business",
    rows: [
      { label: "Compliance certificate generation", website: false, basic: false, standard: false, premium: true },
      { label: "Job costing dashboard", website: false, basic: false, standard: false, premium: true },
      { label: "The Trades Network", website: false, basic: true, standard: true, premium: true },
    ],
  },
  {
    group: "Reporting & support",
    rows: [
      { label: "Full reporting dashboard", website: false, basic: false, standard: true, premium: true },
      { label: "Monthly strategy call", website: false, basic: false, standard: true, premium: true },
      { label: "Bi-weekly check-ins + quarterly reviews", website: false, basic: false, standard: false, premium: true },
    ],
  },
  {
    group: "The commercials",
    rows: [
      { label: "Price", website: "From £500 one-off", basic: "£200 / mo", standard: "£400 / mo", premium: "£500 / mo" },
      { label: "Setup fee", website: "50% deposit", basic: "£150", standard: "£300", premium: "£500" },
      { label: "Minimum term", website: "None", basic: "3 months", standard: "3 months", premium: "6 months" },
    ],
  },
];
