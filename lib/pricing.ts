// Pricing is published in full and in public — it's a deliberate
// differentiator, so nothing here is hidden behind a "request a quote".
//
// Structure (13 Sep 2026): one fixed-price 90-day project, Foundations, in two
// versions depending on whether the practice keeps its site; then one
// month-to-month retainer, Visibility, whose contents depend on who the
// practice sells to. Ads and extra pages are priced add-ons. Enquiry
// management is in pilot and not sold.
//
// This replaced the Website + Basic/Standard/Premium ladder. That ladder priced
// each step at £100 while the labour roughly doubled at each step, sold a CRM
// that had not been built, and carried local-services levers (GBP for national
// consultancies, citation counts, social posting) that the evidence base does
// not support for this audience. The offer audit of 13 Sep 2026 in the vault
// has the detail.
//
// Every figure marked BRAD TO CONFIRM is a business decision set here as a
// defensible default, not a verified one. Change it here and everything on the
// site follows — except public/llms.txt, which is a static file and must be
// edited by hand.

// ─── Foundations — the 90-day project ─────────────────────────────────

export interface FoundationsOption {
  id: "existing-site" | "new-site";
  name: string;
  price: string;
  /** Who this one is for, so the buyer self-selects. */
  best: string;
  /** What this version adds beyond the work every Foundations includes. */
  adds: string[];
  featured?: boolean;
}

export const foundations = {
  name: "Foundations",
  tagline: "Ninety days, fixed price",
  duration: "90 days",
  terms: "Fixed price, not an estimate · three equal monthly instalments · no retainer required afterwards",
  /** Work every Foundations includes, whichever site option is chosen. */
  included: [
    "Technical baseline measured on day one and day ninety — page weight, canonicals, sitemap, structured data, what Google has actually indexed",
    "Structured data describing your services, sectors and credentials",
    "Up to four project case studies, drafted by us from a twenty-minute call each and approved by you before anything is published",
    "Service and sector pages rebuilt around the questions buyers actually ask, answer first",
    "Business details made consistent across the trade bodies and sources that matter for your discipline",
    "Google Business Profile set up or repaired where local intent exists for your work",
    "Search and AI-visibility baseline in month one, repeated at day ninety, on Search Console totals",
    "Three monthly reports and a day-ninety review with a written plan for what comes next",
  ],
  options: [
    {
      id: "existing-site",
      name: "Foundations on your site",
      price: "£2,950", // BRAD TO CONFIRM
      best: "Practices with a site that's sound underneath and needs the work above done to it. Send us the URL and we'll say honestly which version you need.",
      adds: [
        "Technical fixes made directly to your existing site",
        "Content restructured in place — nothing rebuilt for the sake of it",
      ],
    },
    {
      id: "new-site",
      name: "Foundations with a new site",
      price: "£4,750", // BRAD TO CONFIRM
      best: "Practices whose site can't carry the work — slow, not mobile, no project pages, or on a platform you don't control.",
      adds: [
        "Mobile-first site of up to ten pages, built around your projects",
        "Domain registered in your name, hosting and SSL for the first year",
        "A launch date in writing, backed by the guarantee below",
      ],
      featured: true,
    },
  ] as FoundationsOption[],
};

// ─── Visibility — the month-to-month retainer ─────────────────────────

export interface RetainerTrack {
  id: "residential" | "national";
  name: string;
  who: string;
  features: string[];
}

export const retainer = {
  name: "Visibility",
  tagline: "Month to month",
  monthly: "£695", // BRAD TO CONFIRM
  term: "No minimum term · 30 days' notice · billed monthly in advance",
  best: "Practices that have finished Foundations and want the visibility kept current and built on, without a long contract.",
  /** Included whichever track applies. */
  common: [
    "Monthly report on Search Console totals, with sampled AI-assistant visibility",
    "One new case study or question-led page a month when there's a real question to answer — and none when there isn't",
    "Small site changes within the month: copy, credentials, team, projects",
    "Quarterly review call with a written plan",
  ],
  /**
   * The retainer's contents depend on who the practice sells to, because the
   * levers are different. A studio taking homeowner work has local intent to
   * capture; a consultancy tendering nationally has almost none, and the
   * evidence points at third-party mentions instead.
   */
  tracks: [
    {
      id: "residential",
      name: "Residential-facing practices",
      who: "Architects, structural engineers and interior designers taking homeowner and small-developer work within a region",
      features: [
        "Google Business Profile kept current, with a reviews approach that fits a practice",
        "Local-intent pages for the work and the area you actually want",
        "Google Ads available as an add-on, because intent exists here",
      ],
    },
    {
      id: "national",
      name: "National consultancies",
      who: "MEP, structural, civil and specialist consultancies selling to developers, contractors, architects and estates teams",
      features: [
        "Mention outreach each quarter — partner credits, LinkedIn tags, one trade-press pitch",
        "Sector case studies that cover the questions around your specialism",
        "No Google Business Profile emphasis and no ads, because the intent isn't there",
      ],
    },
  ] as RetainerTrack[],
};

// ─── Add-ons — priced, published, taken only where they fit ───────────

export interface AddOn {
  id: string;
  name: string;
  price: string;
  who: string;
  body: string;
  /** Rendered as "not yet sold" rather than with a price. */
  status?: "pilot";
}

export const addOns: AddOn[] = [
  {
    id: "ads",
    name: "Google Ads management",
    price: "£350 / month + your ad spend", // BRAD TO CONFIRM
    who: "Residential-facing practices on the Visibility retainer",
    body: "Search campaigns around the project types you want more of. Meta where the work is visual. You pay the platforms directly; we never take a percentage. Not offered to national consultancies, where there is almost nothing to buy.",
  },
  {
    id: "pages",
    name: "Additional site pages",
    price: "£150 per page", // BRAD TO CONFIRM
    who: "Foundations with a new site, beyond the ten included",
    body: "Extra sector or service pages, agreed and priced before the build starts. A multi-discipline consultancy usually needs three or four.",
  },
  {
    id: "crm",
    name: "Enquiry management & follow-up",
    price: "Not yet sold",
    who: "In pilot with one client",
    body: "A pipeline for project enquiries, proposals and follow-up, built for this sector. It will be priced when it works — not before.",
    status: "pilot",
  },
];

// ─── Guarantees — inputs and speed, never rankings ────────────────────
// Nobody controls what Google ranks or what an assistant says, so nothing
// here promises either. Each one is something we control and can be held to.

export interface Guarantee {
  title: string;
  body: string;
}

export const guarantees: Guarantee[] = [
  {
    title: "Month one, or it's free",
    body: "Every Foundations item scheduled for the first thirty days is live within thirty days of us receiving access, or the first instalment is refunded.",
  },
  {
    title: "A launch date in writing",
    body: "On a new site, the site goes live within twenty-eight days of your content sign-off, or the final instalment is waived.",
  },
  {
    title: "An honest no",
    body: "If the free audit shows you're already described well, we say so and stop. There is no pitch when the answer is that you don't need us.",
  },
  {
    title: "Leave with everything",
    body: "The retainer is month to month on thirty days' notice. Domain, site, reports and research are yours whenever you go.",
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
    title: "Paying for Foundations",
    body: "Three equal monthly instalments: on start, at day thirty and at day sixty. No deposit beyond the first instalment.",
  },
  {
    title: "Hosting after year one",
    body: "£95 a year from year two, covering domain renewal, hosting and SSL. Or move the site anywhere — it's yours.", // BRAD TO CONFIRM
  },
  {
    title: "Ad spend",
    body: "Paid by you directly to Google and Meta. We never take a cut of it or route it through us.",
  },
];

// ─── What is included, and what is charged separately ─────────────────
// Rendered on /pricing and /services. The point of these is that the fee
// covers the listed scope — not every third-party cost. Anything metered or
// licensed is agreed before it is switched on, never assumed.

export const scopeNotes: { title: string; body: string }[] = [
  {
    title: "What the fee covers",
    body: "Foundations covers the listed work over ninety days. The retainer covers the listed scope each month. That is the work, and it is the whole of the work — there is no separate setup fee.",
  },
  {
    title: "Costs that sit outside it",
    body: "Domain renewal from year two, any paid tool a client asks us to run on their behalf, and ad spend are itemised and agreed with you before anything is activated.",
  },
  {
    title: "Work that is scoped separately",
    body: "Pages beyond the ten in a new site, photography, video, and anything that isn't on the lists above is quoted on its own. The packages are a defined scope, not unlimited bespoke work.",
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

// ─── Full comparison ──────────────────────────────────────────────────
// `true` renders a tick, `false` renders a dash, a string renders as-is.

export type Cell = boolean | string;

export interface ComparisonRow {
  label: string;
  existing: Cell;
  newSite: Cell;
  retainer: Cell;
}

export interface ComparisonGroup {
  group: string;
  rows: ComparisonRow[];
}

export const comparisonColumns: {
  key: Exclude<keyof ComparisonRow, "label">;
  label: string;
  price: string;
  featured?: boolean;
}[] = [
  { key: "existing", label: foundations.options[0].name, price: `${foundations.options[0].price} · 90 days` },
  { key: "newSite", label: foundations.options[1].name, price: `${foundations.options[1].price} · 90 days`, featured: true },
  { key: "retainer", label: `${retainer.name} retainer`, price: `${retainer.monthly} / mo` },
];

export const comparison: ComparisonGroup[] = [
  {
    group: "The site",
    rows: [
      { label: "Mobile-first site, up to ten pages", existing: false, newSite: true, retainer: false },
      { label: "Domain registered in your name", existing: false, newSite: true, retainer: false },
      { label: "Hosting and SSL, first year", existing: false, newSite: true, retainer: false },
      { label: "Technical fixes to your existing site", existing: true, newSite: false, retainer: "Small changes" },
    ],
  },
  {
    group: "Foundations work",
    rows: [
      { label: "Technical baseline, measured day one and day ninety", existing: true, newSite: true, retainer: false },
      { label: "Structured data — services, sectors, credentials", existing: true, newSite: true, retainer: "Maintained" },
      { label: "Case studies drafted from a call", existing: "Up to 4", newSite: "Up to 4", retainer: "1 / month where warranted" },
      { label: "Question-led service and sector pages", existing: true, newSite: true, retainer: "When there's a real question" },
      { label: "Business details consistent across trade bodies", existing: true, newSite: true, retainer: "Maintained" },
      { label: "Google Business Profile, where local intent exists", existing: true, newSite: true, retainer: "Residential track" },
      { label: "Search and AI-visibility baseline", existing: "Day 1 and day 90", newSite: "Day 1 and day 90", retainer: false },
    ],
  },
  {
    group: "Ongoing",
    rows: [
      { label: "Monthly report on Search Console totals", existing: "3", newSite: "3", retainer: true },
      { label: "Review call with a written plan", existing: "Day 90", newSite: "Day 90", retainer: "Quarterly" },
      { label: "Mention outreach — partner credits, LinkedIn tags, trade press", existing: false, newSite: false, retainer: "National track" },
      { label: "Local-intent pages and reviews approach", existing: false, newSite: false, retainer: "Residential track" },
    ],
  },
  {
    group: "Add-ons",
    rows: [
      { label: "Google Ads management", existing: false, newSite: false, retainer: addOns[0].price },
      { label: "Additional site pages", existing: false, newSite: addOns[1].price, retainer: addOns[1].price },
      { label: "Enquiry management & follow-up", existing: "Not yet sold", newSite: "Not yet sold", retainer: "Not yet sold" },
    ],
  },
  {
    group: "The commercials",
    rows: [
      { label: "Price", existing: foundations.options[0].price, newSite: foundations.options[1].price, retainer: `${retainer.monthly} / mo` },
      { label: "Term", existing: "90 days", newSite: "90 days", retainer: "None · 30 days' notice" },
      { label: "Payment", existing: "3 instalments", newSite: "3 instalments", retainer: "Monthly in advance" },
      { label: "VAT", existing: "Not charged", newSite: "Not charged", retainer: "Not charged" },
    ],
  },
];

// ─── Display helpers ──────────────────────────────────────────────────

/** "£2,950 or £4,750" — for sentences that name both Foundations prices. */
export const foundationsPriceLabel = foundations.options.map((o) => o.price).join(" or ");

/** "£695 / mo" */
export const retainerMonthlyLabel = `${retainer.monthly} / mo`;
