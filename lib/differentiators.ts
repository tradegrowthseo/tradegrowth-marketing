// The four differentiators — collectively "The AI Trades Engine". Shown on the
// home page and referenced from /about and /services.

export interface Differentiator {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  points: string[];
}

export const differentiators: Differentiator[] = [
  {
    id: "aeo",
    number: "01",
    label: "AEO",
    title: "Get recommended by the AI, not just ranked by Google",
    body: "Homeowners increasingly ask ChatGPT, Perplexity, Gemini or Google's AI Overview who to hire — and get back a shortlist of names. Answer Engine Optimisation is the work of making sure one of those names is yours.",
    points: [
      "Cited inside ChatGPT, Perplexity, Gemini and Claude",
      "Named in Google AI Overviews",
      "Schema, AI-ready content and trusted citations",
      "Tracked monthly so you can see it working",
    ],
  },
  {
    id: "crm",
    number: "02",
    label: "Trade-specific CRM",
    title: "A CRM that knows what an EICR is",
    body: "A white-labelled CRM, powered by GoHighLevel and configured specifically for your trade. It issues compliance records, splits materials from labour for your VAT return, costs each job properly and keeps track of what's in the van.",
    points: [
      "EICR and gas safety record generation",
      "Materials / labour split for VAT",
      "Job costing and true margin per job",
      "Van stock and compliance certificate tracking",
    ],
  },
  {
    id: "sales",
    number: "03",
    label: "Done-for-you sales",
    title: "We answer the phone and chase the quotes",
    body: "An AI voice agent picks up within three rings, day or night, qualifies the job and books it. Then a human appointment setter chases every outstanding quote until you get an answer either way.",
    points: [
      "AI voice agent answers 24/7, within 3 rings",
      "Qualifies and books straight into your calendar",
      "Human setter chases at 48h, 5d, 10d, 20d, 30d",
      "Quotes that would have gone quiet turn into work",
    ],
  },
  {
    id: "network",
    number: "04",
    label: "The Trades Network",
    title: "Our clients feed each other work",
    body: "A closed referral network between every business we work with. One client per trade, per area — so passing work to each other is never passing work to a competitor.",
    points: [
      "One-click \"refer this customer\" from your CRM",
      "£25–50 finder's fee on referrals you send",
      "One client per trade, per area",
      "Quarterly meetups with the other members",
    ],
  },
];

// ─── Honest comparison vs a typical trades agency ─────────────────────
// Used on the home page under "Everyone helps you get leads."

export interface ComparisonPoint {
  area: string;
  typical: string;
  us: string;
}

export const agencyComparison: ComparisonPoint[] = [
  {
    area: "Where you get found",
    typical: "Google blue links only",
    us: "Google AND ChatGPT, Perplexity, Gemini and AI Overviews",
  },
  {
    area: "The website",
    typical: "A website, then AEO sold as an upsell later",
    us: "Website and AEO foundations built together from day one",
  },
  {
    area: "Paid ads",
    typical: "Meta-led, because the cost-per-lead looks better",
    us: "Google-led, because higher intent means more booked jobs",
  },
  {
    area: "The CRM",
    typical: "An off-the-shelf setup, identical for every industry they serve",
    us: "Configured for your trade: EICRs, VAT splits, job costing, van stock",
  },
  {
    area: "What happens to the lead",
    typical: "It lands in your inbox and the rest is up to you",
    us: "AI voice agent answers it, a human chases the quote",
  },
  {
    area: "Referrals",
    typical: "None",
    us: "A closed network of non-competing trades passing work over",
  },
  {
    area: "Pricing",
    typical: "\"Book a call for a bespoke quote\"",
    us: "Published in full, on this website, right now",
  },
];

// ─── Trades we work with ──────────────────────────────────────────────

export const trades: string[] = [
  "Electricians",
  "Plumbers & heating engineers",
  "Gas engineers",
  "Roofers",
  "Builders",
  "Joiners & carpenters",
  "Plasterers",
  "Landscapers",
  "Kitchen & bathroom fitters",
  "Painters & decorators",
  "Driveway & paving specialists",
  "EV charger installers",
];
