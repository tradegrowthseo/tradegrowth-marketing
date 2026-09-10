// Pricing is published in full and in public — it's a deliberate
// differentiator, so nothing here is hidden behind a "request a quote".
//
// Structure: everyone buys The Website once (one-off, from £500 — animations
// and larger builds cost more), then chooses one of three monthly packages that
// sit on top of it. Each package includes everything in the tier below it.

export interface Tier {
  id: "basic" | "standard" | "premium";
  name: string;
  tagline: string;
  monthly: string;
  minimumMonths: number;
  best: string;
  includesBelow?: string;
  featured?: boolean; // Standard is the "most popular" tier
  features: string[];
}

/**
 * The starting price for a website build. The final figure depends on the size
 * of the build — animations and larger sites cost more — which is why it is
 * shown with a "+" everywhere rather than as a flat price.
 *
 * Declared once and reused below so the headline price and the terms line
 * underneath it can never quote different numbers.
 */
const WEBSITE_FROM = "£500";

/** The one-off website build. Sold separately from the monthly packages. */
export const websiteProduct = {
  name: "The Website",
  /** The starting figure on its own, for sentences like "websites start at X". */
  from: WEBSITE_FROM,
  price: `${WEBSITE_FROM}+`,
  terms: `Websites start at ${WEBSITE_FROM} — animations and larger builds cost more · one-off · 50% deposit, 50% on launch`,
  tagline: "The foundation everything else sits on",
  commitment: "No monthly commitment",
  features: [
    "Mobile-first website",
    "AEO-ready from day one — schema, FAQ structure, llms.txt",
    "Domain registered in your name",
    "Hosting and SSL included for the first year",
    "Built around your projects, not just to look tidy",
    "No monthly commitment required",
  ],
};

export const tiers: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Get found",
    monthly: "£395",
    minimumMonths: 3,
    best: "Practices and consultancies that need to be findable — in search and in AI-assisted search",
    features: [
      "Google Business Profile management",
      "AEO foundations active",
      "AI visibility tracking",
      "Local SEO reports",
      "5 directory citations",
      "CRM workspace with client access",
      "Contact records + one project-enquiry pipeline",
      "One website enquiry form connected",
      "Internal notification of new enquiries",
      "One handover session",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Get chosen",
    monthly: "£495",
    minimumMonths: 3,
    best: "Firms that want a steadier flow of relevant project enquiries, and the follow-up to support it",
    includesBelow: "Everything in Basic, plus:",
    featured: true,
    features: [
      "Google & Meta ads management",
      "Ad creative refresh",
      "1 AEO page + 1 SEO post every month",
      "One consultation-booking calendar connected",
      "Up to 3 agreed standard workflows",
      "Simple pipeline-stage tailoring",
      "Source + outcome reporting, where captured",
      "Monthly strategy call",
      "15+ directory citations",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Keep improving it",
    monthly: "£595",
    minimumMonths: 6,
    best: "Established practices that want the enquiry pipeline reviewed and refined month by month",
    includesBelow: "Everything in Standard, plus:",
    features: [
      "Monthly review of recorded enquiry + proposal activity",
      "Reporting on recorded sources, stages and outcomes",
      "One minor workflow adjustment per month — copy, timing or a condition",
      "Social posting, 3 posts per week",
      "Monthly video + email/SMS campaigns",
      "Bi-weekly check-ins + quarterly reviews",
    ],
  },
];

// ─── Display formatting ───────────────────────────────────────────────
// Every price and term shown anywhere on the site is formatted here, from the
// data above. Nothing downstream should hardcode a figure: the pricing cards,
// the comparison table, its column headers and the /pricing meta description
// all read through these.
//
// The ONE copy that can't derive from this file is public/llms.txt, which is a
// static file rather than a build artifact. If you change a price, change it
// there too — it is the only place that won't follow automatically.

const byId = (id: Tier["id"]): Tier => {
  const tier = tiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Unknown tier: ${id}`);
  return tier;
};

/** A tier's monthly price, formatted for display. */
export const monthlyLabel = (tier: Tier) => `${tier.monthly} / mo`;

/** The minimum term, phrased for the pricing cards. */
export const minimumLabel = (tier: Tier) => `${tier.minimumMonths} month minimum`;

/** The minimum term, phrased for the comparison table. */
export const termLabel = (tier: Tier) => `${tier.minimumMonths} months`;

/** The website build price, formatted for display. */
export const websitePriceLabel = `${websiteProduct.price} one-off`;

// ─── What is included, and what is charged separately ─────────────────
// Rendered on /pricing and /services. The point of these is that the package
// price covers configuration and management of the listed scope — not every
// third-party cost a system can incur. Anything metered or licensed is agreed
// before it is switched on, never assumed.

export const scopeNotes: { title: string; body: string }[] = [
  {
    title: "What the monthly fee covers",
    body: "Configuration and ongoing management of the scope listed for your tier. That is the work, and it is the whole of the work — there is no separate setup fee.",
  },
  {
    title: "Costs that sit outside it",
    body: "Software licences, messaging, telephone and third-party integration or usage charges are itemised and agreed with you before anything is activated. We don't include unlimited messaging and we don't pretend every software cost is absorbed.",
  },
  {
    title: "Work that is scoped separately",
    body: "Data migrations, custom integrations, additional pipelines and substantial workflow builds are quoted on their own. The packages are a defined standard scope, not unlimited bespoke development.",
  },
  {
    title: "What counts as a minor adjustment",
    body: "On Premium, the monthly workflow adjustment means changing copy, timing or an existing condition on a workflow you already have. A new integration or custom development is a separate piece of work, scoped and quoted on its own.",
  },
  {
    title: "If you already have a CRM",
    body: "We assess what you're running before suggesting anything replaces it. Plenty of practices already have a system that works, and moving off it is often the wrong call.",
  },
  {
    title: "What reporting depends on",
    body: "Reports are built from what the system actually records. That means connected sources and your team logging outcomes — if an enquiry arrives by a route we aren't connected to, or a result never gets recorded, it won't appear.",
  },
  {
    title: "Access and leaving",
    body: "CRM access, who carries the ongoing software costs, and how your data is exported if you cancel are all agreed during onboarding. The underlying software is licensed, not owned — your data is yours, the platform isn't.",
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
    group: "Enquiry management & follow-up",
    rows: [
      { label: "Scope at this tier", website: false, basic: "Enquiry tracking foundations", standard: "Enquiry management and follow-up", premium: "Ongoing pipeline improvement" },
      { label: "CRM workspace with client access", website: false, basic: true, standard: true, premium: true },
      { label: "Contact and company records", website: false, basic: true, standard: true, premium: true },
      { label: "Project-enquiry pipeline", website: false, basic: "1", standard: "1, stage-tailored", premium: "1, stage-tailored" },
      { label: "Website enquiry forms connected", website: false, basic: "1", standard: "1", premium: "1" },
      { label: "Internal notification of new enquiries", website: false, basic: true, standard: true, premium: true },
      { label: "Handover session", website: false, basic: "1", standard: "1", premium: "1" },
      { label: "Consultation-booking calendar connected", website: false, basic: false, standard: "1", premium: "1" },
      { label: "Agreed standard workflows", website: false, basic: false, standard: "Up to 3", premium: "Up to 3" },
      { label: "Automated proposal-follow-up sequence", website: false, basic: false, standard: "Within agreed workflows", premium: "Within agreed workflows" },
      { label: "Source and outcome reporting, where captured", website: false, basic: false, standard: "Basic", premium: true },
      { label: "Monthly review of recorded activity", website: false, basic: false, standard: false, premium: true },
      { label: "Minor adjustment to an existing workflow — copy, timing or an existing condition", website: false, basic: false, standard: false, premium: "1 / month" },
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
    group: "Reporting & support",
    rows: [
      { label: "Monthly strategy call", website: false, basic: false, standard: true, premium: true },
      { label: "Bi-weekly check-ins + quarterly reviews", website: false, basic: false, standard: false, premium: true },
    ],
  },
  {
    group: "The commercials",
    rows: [
      {
        label: "Price",
        website: websitePriceLabel,
        basic: `${monthlyLabel(byId("basic"))} + website`,
        standard: `${monthlyLabel(byId("standard"))} + website`,
        premium: `${monthlyLabel(byId("premium"))} + website`,
      },
      {
        label: "Minimum term",
        website: "None",
        basic: termLabel(byId("basic")),
        standard: termLabel(byId("standard")),
        premium: termLabel(byId("premium")),
      },
    ],
  },
];
