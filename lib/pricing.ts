// Pricing is published in full and in public — it's a deliberate
// differentiator, so nothing here is hidden behind a "request a quote".
//
// Structure: everyone buys The Website once (one-off, at one of two fixed
// prices) unless their existing site stands up, then chooses one of three
// monthly packages that sit on top of it. Each package includes everything in
// the tier below it.
//
// 25 Sep 2026: Brad widened the ladder on the offer-design advice (the
// £100 steps read as one product with more bullets; the top tier's job is to
// make the middle one look sensible). Basic held at £395 as the known entry
// figure; Standard £595 is the target tier; Premium £895 carries the named
// bonuses. Tiers are ORDERED Premium → Standard → Basic so the page anchors
// high. Look tiers up by id, never by index.
//
// Figures marked BRAD TO CONFIRM are business decisions set here as
// defensible defaults. Change them here and everything follows — except
// public/llms.txt, which is a static file and must be edited by hand.

export interface Tier {
  id: "basic" | "standard" | "premium";
  name: string;
  tagline: string;
  monthly: string;
  minimumMonths: number;
  best: string;
  includesBelow?: string;
  featured?: boolean; // Standard is the featured tier
  features: string[];
  /** Named extras that come with the tier. Bonuses replace discounts. */
  bonuses?: string[];
  /** One extra line under the price, e.g. the annual option. */
  note?: string;
}

/**
 * The website build, sold as two fixed-price options rather than an open
 * "from" figure. Two named options let a practice place itself without
 * asking, and the figure they see is the figure they pay.
 */
export interface WebsiteOption {
  id: "practice" | "multi-sector";
  name: string;
  price: string;
  /** Pages included. Beyond this is agreed and quoted before the build. */
  pages: number;
  /** Who this one is for, so the buyer self-selects. */
  best: string;
}

export const websiteOptions: WebsiteOption[] = [
  {
    id: "practice",
    name: "Practice site",
    price: "£1,200",
    pages: 10,
    best: "One discipline and one core set of services — most architectural, structural and interior design practices. Up to ten pages.",
  },
  {
    id: "multi-sector",
    name: "Multi-sector site",
    price: "£1,500",
    pages: 14,
    best: "Several disciplines or sectors needing their own pages — MEP consultancies, multi-service firms and contractors. Up to fourteen pages.",
  },
];

/** The one-off website build. Sold separately from the monthly packages. */
export const websiteProduct = {
  name: "The Website",
  /** The entry figure, for sentences like "websites start at X". */
  from: websiteOptions[0].price,
  terms: "Fixed price, not an estimate · one-off · 50% deposit, 50% on launch",
  tagline: "The foundation everything else sits on",
  commitment: "No monthly commitment",
  features: [
    "Mobile-first site built around your projects, not just to look tidy",
    "Up to four project case studies, drafted by us from a twenty-minute call each and approved by you",
    "Structured data for services, sectors and credentials, and question-led page structure, in the build",
    "Domain registered in your name; hosting and SSL for the first year",
    "A launch date in writing, backed by the guarantee",
    "Already have a sound site? Send the URL — if it stands up, there's no website fee",
  ],
};

/**
 * The annual option on Standard. Cash up front, and the practice site comes
 * with it rather than a discount coming off it — a bonus, not a price cut.
 */
export const annual = {
  tierId: "standard" as const,
  price: "£7,140",
  months: 12,
  includes: `${websiteOptions[0].name} (${websiteOptions[0].price}) included`,
  body: `Twelve months of Standard paid up front, and the ${websiteOptions[0].name} build is included. Need the multi-sector site instead? Pay the £300 difference.`,
  // BRAD TO CONFIRM — the early-exit rule.
  exit: "If you leave before the twelve months are up, unused whole months are refunded less the website's list price.",
};

export const tiers: Tier[] = [
  {
    id: "premium",
    name: "Premium",
    tagline: "Keep improving it",
    monthly: "£895",
    minimumMonths: 3,
    best: "Established practices that want more of the work compounding each month, with the extras that make the site easier to keep current",
    includesBelow: "Everything in Standard, plus:",
    features: [
      "A second content piece each month — a case study and a question-led page",
      "Residential: Google Ads management, with the spend paid by you direct to Google",
      "National: mention outreach every month rather than every quarter",
      "Half-yearly review of the whole site against the day-one baseline",
    ],
    bonuses: [
      "Credentials Audit — every accreditation and membership you hold, checked against what the site actually shows",
      "The Ask Script — how to ask a finished project's client for a review and a partner credit, in your words",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Get chosen",
    monthly: "£595",
    minimumMonths: 3,
    best: "Firms that want the work aimed at the people who actually commission projects, with a call each month to steer it",
    includesBelow: "Everything in Basic, plus:",
    featured: true,
    features: [
      "Your track — residential or national — with the work that suits it (see below)",
      "Small site changes within the month: copy, credentials, team, projects",
      "Monthly strategy call",
      "Residential: Google Business Profile posts, a reviews approach, local-intent pages",
      "National: mention outreach each quarter — partner credits, LinkedIn tags, one trade-press pitch",
    ],
    bonuses: [
      "The Rule-Out Checklist — the ten things a referral's contact checks before calling, scored on your site",
    ],
    note: `Or ${annual.price} for the year, paid up front, with the ${websiteOptions[0].name} included`,
  },
  {
    id: "basic",
    name: "Basic",
    tagline: "Get found",
    monthly: "£395",
    minimumMonths: 3,
    best: "Practices and consultancies that need to be findable — in search and in AI-assisted search — and want that measured honestly",
    features: [
      "Technical baseline measured in month one and again at month three",
      "Structured data kept current — services, sectors, credentials",
      "Business details consistent across the trade bodies and sources for your discipline",
      "Google Business Profile set up or repaired, where local intent exists",
      "One case study or question-led page a month, drafted from a call — when there's a real question to answer",
      "Monthly report on Search Console totals, with sampled AI-assistant visibility",
      "Quarterly review with a written plan",
    ],
  },
];

/** Look a tier up by id. Never index `tiers` — the array is ordered for display. */
export const tierById = (id: Tier["id"]): Tier => {
  const tier = tiers.find((t) => t.id === id);
  if (!tier) throw new Error(`Unknown tier: ${id}`);
  return tier;
};

// ─── The two tracks ───────────────────────────────────────────────────
// Standard and Premium contain different work depending on who the practice
// sells to, because the levers are different. A studio taking homeowner work
// has local intent to capture; a consultancy tendering nationally has almost
// none, and the published evidence points at third-party mentions instead.
// Basic is the same for everyone.

export interface Track {
  id: "residential" | "national";
  name: string;
  who: string;
  standard: string[];
  premium: string[];
}

export const tracks: Track[] = [
  {
    id: "residential",
    name: "Residential-facing practices",
    who: "Architects, structural engineers and interior designers taking homeowner and small-developer work within a region",
    standard: [
      "Google Business Profile kept current, with a reviews approach that fits a practice",
      "Local-intent pages for the work and the area you actually want",
    ],
    premium: [
      "Google Ads management — search campaigns around the project types you want more of, spend paid direct to Google",
    ],
  },
  {
    id: "national",
    name: "National consultancies",
    who: "MEP, structural, civil and specialist consultancies selling to developers, contractors, architects and estates teams",
    standard: [
      "Mention outreach each quarter — partner credits, LinkedIn tags, one trade-press pitch",
      "No Google Business Profile emphasis and no ads, because the intent isn't there",
    ],
    premium: ["Mention outreach every month, with a trade-press pitch each quarter"],
  },
];

// ─── Guarantees — inputs and speed, never rankings ────────────────────
// Nobody controls what Google ranks or what an assistant says, so nothing
// here promises either. Each one is something we control and can be held to.
//
// A sixth, Premium-only guarantee (named-query accuracy across four AI
// assistants within 90 days, or we keep working free) is designed in the
// vault offer note and deliberately NOT published until it has been tested
// against EV Design and this site. Do not add it here before that test.

export interface Guarantee {
  title: string;
  body: string;
}

export const guarantees: Guarantee[] = [
  {
    title: "Month one, or it's free",
    body: "Every package item scheduled for the first thirty days is live within thirty days of us receiving access, or the first month's package fee is refunded.",
  },
  {
    title: "A launch date in writing",
    body: "The website goes live within twenty-eight days of your content sign-off, or the balance due on launch is waived.",
  },
  {
    title: "An honest no",
    body: "If the free audit shows you're already described well, we say so and stop. There is no pitch when the answer is that you don't need us.",
  },
  {
    title: "Leave with everything",
    body: "After the three-month minimum, a month's notice. Domain, site, reports and research are yours whenever you go.",
  },
  {
    title: "Numbers you can check",
    body: "Reports quote Search Console totals, never a sum of query rows. Anything that can't be measured is marked as such rather than estimated.",
  },
];

// ─── Capacity and commercials ─────────────────────────────────────────

/** One person does the work, so the intake is small and it is stated. */
export const capacity = {
  perQuarter: 3, // BRAD TO CONFIRM
  body: "TradeGrowth is one person doing the work rather than a team selling it, so we take on three new practices a quarter. When a quarter is full, the audit still runs and you're offered the next start date.",
};

export const commercials = [
  {
    title: "VAT",
    body: "Prices are not subject to VAT. TradeGrowth Marketing is not VAT registered.", // BRAD TO CONFIRM
  },
  {
    title: "Paying for the website",
    body: "Half on deposit, half on launch. The monthly package is billed monthly in advance from the month the site goes live — or from month one if you already have a sound site.",
  },
  {
    title: "Hosting after year one",
    body: "Domain renewal, hosting and SSL from year two are passed on at cost and itemised — typically under £100 a year. Or move the site anywhere; it's yours.",
  },
  {
    title: "Ad spend",
    body: "Paid by you directly to Google. We never take a cut of it or route it through us.",
  },
];

// ─── What is included, and what is charged separately ─────────────────
// Rendered on /pricing and /services. The point of these is that the fee
// covers the listed scope — not every third-party cost. Anything metered or
// licensed is agreed before it is switched on, never assumed.

export const scopeNotes: { title: string; body: string }[] = [
  {
    title: "What the monthly fee covers",
    body: "The scope listed for your tier and track, each month. That is the work, and it is the whole of the work — there is no separate setup fee.",
  },
  {
    title: "Costs that sit outside it",
    body: "Domain renewal from year two, ad spend, and any paid tool you ask us to run on your behalf are itemised and agreed with you before anything is activated.",
  },
  {
    title: "Work that is scoped separately",
    body: "Pages beyond those included in the build, photography, video, and anything not on the published lists are agreed and quoted before they start. The packages are a defined scope, not unlimited bespoke work.",
  },
  {
    title: "What a case study needs from you",
    body: "Twenty minutes on a call and a yes or no on the draft. We write it; you correct it. Where a client can't be named, we say so on the page rather than invent detail.",
  },
  {
    title: "What reporting depends on",
    body: "Reports are built from what can be measured: Search Console totals, sampled AI answers, and enquiries you tell us about. A call to an untracked number cannot be attributed to search, and we won't report it as though it can.",
  },
  {
    title: "Enquiry management",
    body: "In pilot with one client and not sold. When it is, it will be priced here first. Nothing on the site is a commitment to a system that isn't finished.",
  },
];

// ─── Full feature comparison ──────────────────────────────────────────
// `true` renders a tick, `false` renders a dash, a string renders as-is.
// The Website column is the one-off build; a dash there means "that's part of
// a monthly package, not the build" — and vice versa. Columns follow the
// display order of `tiers` (Premium first), so the table anchors high too.

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

/** A tier's monthly price, formatted for display. */
export const monthlyLabel = (tier: Tier) => `${tier.monthly} / mo`;

/** The minimum term, phrased for the pricing cards. */
export const minimumLabel = (tier: Tier) => `${tier.minimumMonths} month minimum`;

/** The minimum term, phrased for the comparison table. */
export const termLabel = (tier: Tier) => `${tier.minimumMonths} months`;

/** The website build price, formatted for display. Names both options. */
export const websitePriceLabel = websiteOptions.map((o) => o.price).join(" or ");

export const comparisonColumns: {
  key: Exclude<keyof ComparisonRow, "label">;
  label: string;
  price: string;
  featured?: boolean;
}[] = [
  { key: "website", label: websiteProduct.name, price: websitePriceLabel },
  ...tiers.map((tier) => ({
    key: tier.id as Exclude<keyof ComparisonRow, "label">,
    label: tier.name,
    price: monthlyLabel(tier),
    featured: tier.featured,
  })),
];

export const comparison: ComparisonGroup[] = [
  {
    group: "The website",
    rows: [
      { label: "Mobile-first site — up to 10 pages (practice) or 14 (multi-sector)", website: true, basic: false, standard: false, premium: false },
      { label: "Structured data and question-led page structure", website: true, basic: "Maintained", standard: "Maintained", premium: "Maintained" },
      { label: "Domain registered in your name", website: true, basic: false, standard: false, premium: false },
      { label: "Hosting + SSL, first year", website: true, basic: false, standard: false, premium: false },
      { label: "Launch date in writing", website: true, basic: false, standard: false, premium: false },
    ],
  },
  {
    group: "Content, drafted from a call with you",
    rows: [
      { label: "Project case studies", website: "Up to 4", basic: "1 / month", standard: "1 / month", premium: "2 / month" },
      { label: "Question-led pages, where a real question exists", website: false, basic: "Within the 1", standard: "Within the 1", premium: "Within the 2" },
      { label: "Small site changes within the month", website: false, basic: false, standard: true, premium: true },
    ],
  },
  {
    group: "Get found",
    rows: [
      { label: "Technical baseline, measured month one and month three", website: false, basic: true, standard: true, premium: true },
      { label: "Business details consistent across trade bodies", website: false, basic: true, standard: true, premium: true },
      { label: "Google Business Profile, where local intent exists", website: false, basic: true, standard: true, premium: true },
      { label: "Monthly report on Search Console totals + sampled AI visibility", website: false, basic: true, standard: true, premium: true },
      { label: "Review with a written plan", website: false, basic: "Quarterly", standard: "Quarterly", premium: "Quarterly + half-yearly site review" },
      { label: "Monthly strategy call", website: false, basic: false, standard: true, premium: true },
    ],
  },
  {
    group: "Get chosen — by track",
    rows: [
      { label: "Residential: GBP posts, reviews approach, local-intent pages", website: false, basic: false, standard: true, premium: true },
      { label: "Residential: Google Ads management (spend paid direct)", website: false, basic: false, standard: false, premium: true },
      { label: "National: mention outreach — partner credits, LinkedIn tags, trade press", website: false, basic: false, standard: "Quarterly", premium: "Monthly" },
    ],
  },
  {
    group: "Included extras",
    rows: [
      { label: "The Rule-Out Checklist — what a referral's contact checks, scored on your site", website: false, basic: false, standard: true, premium: true },
      { label: "Credentials Audit — accreditations held versus shown", website: false, basic: false, standard: false, premium: true },
      { label: "The Ask Script — reviews and partner credits, in your words", website: false, basic: false, standard: false, premium: true },
    ],
  },
  {
    group: "Not on the price list",
    rows: [
      { label: "Enquiry management & follow-up", website: "In pilot", basic: "Not yet sold", standard: "Not yet sold", premium: "Not yet sold" },
      { label: "Social posting, video, SMS campaigns", website: false, basic: false, standard: false, premium: false },
    ],
  },
  {
    group: "The commercials",
    rows: [
      {
        label: "Price",
        website: websitePriceLabel,
        basic: `${monthlyLabel(tierById("basic"))} + website`,
        standard: `${monthlyLabel(tierById("standard"))} + website`,
        premium: `${monthlyLabel(tierById("premium"))} + website`,
      },
      {
        label: "Annual option, paid up front",
        website: false,
        basic: false,
        standard: `${annual.price} · ${annual.includes}`,
        premium: false,
      },
      {
        label: "Minimum term",
        website: "None",
        basic: termLabel(tierById("basic")),
        standard: termLabel(tierById("standard")),
        premium: termLabel(tierById("premium")),
      },
      { label: "Payment", website: "50% deposit, 50% on launch", basic: "Monthly in advance", standard: "Monthly in advance", premium: "Monthly in advance" },
      { label: "VAT", website: "Not charged", basic: "Not charged", standard: "Not charged", premium: "Not charged" },
    ],
  },
];
