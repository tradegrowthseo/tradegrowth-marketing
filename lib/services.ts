// The six core services. Rendered as a preview grid on the home page and in
// full on /services. There are deliberately no per-service sub-pages — the
// brief calls for one detailed Services page, so `detail` and `deliverables`
// are consumed there rather than by a [slug] route.

export interface Service {
  slug: string;
  label: string;
  short: string; // one-line summary — nav dropdown + home card
  tagline: string; // eyebrow above the section heading
  title: string; // section heading on /services
  intro: string; // lead paragraph
  headline?: boolean; // SEO + AEO is the headline service
  features: string[]; // bullets on the home preview card
  detail: string[]; // paragraphs on /services
  deliverables: { title: string; body: string }[];
}

export const services: Service[] = [
  {
    slug: "website-design",
    label: "Website Design",
    short: "Fast, mobile-first sites built to book jobs",
    tagline: "The foundation",
    title: "Websites That Turn Visitors Into Booked Jobs",
    intro:
      "Fast, mobile-first websites designed around one goal: turning the people who find you into phone calls, quote requests and booked work — and built AEO-ready from day one.",
    features: [
      "10 pages, mobile-first, under two seconds",
      "Schema, FAQ structure and llms.txt from day one",
      "Domain registered in your name",
      "Hosting and SSL included for the first year",
    ],
    detail: [
      "Your website is the hardest-working member of your team — it sells for you 24/7, including at 9pm when a homeowner has just found water coming through a ceiling, or on a Sunday when someone is booking next week's clean. We build fast, clean, mobile-first sites that load in under two seconds and are designed to turn visitors into enquiries, not just to look tidy.",
      "Every build is structured for local search and for AI answers at the same time. Service and location pages, review blocks, work galleries and click-to-call buttons are baked in — and so is the schema markup, question-led FAQ structure and llms.txt file that AI assistants read when deciding who to recommend.",
      "The domain is registered in your name and the site is yours. No rented platform, and no hostage situation if you ever decide to leave.",
    ],
    deliverables: [
      { title: "Conversion-first design", body: "Click-to-call, quote forms and clear calls-to-action on every page." },
      { title: "AEO-ready build", body: "JSON-LD schema, FAQ structure and llms.txt shipped with the site, not sold back to you later." },
      { title: "Yours to keep", body: "Domain in your name, no rented platforms, hosting and SSL covered for year one." },
    ],
  },
  {
    slug: "seo-aeo",
    label: "SEO + AEO",
    short: "Rank on Google and get named by the AI",
    tagline: "Headline service",
    title: "SEO + AEO — Get Found on Google, Get Named by the AI",
    intro:
      "Traditional SEO gets you into the blue links. AEO gets you named inside the answer. We do both, because customers now search in both places — and the ones asking AI have already skipped past your competitors.",
    headline: true,
    features: [
      "Local SEO and Google Business Profile management",
      "Cited in ChatGPT, Perplexity, Gemini, Claude and AI Overviews",
      "Schema, AI-ready FAQ content and llms.txt",
      "Monthly AI visibility tracking you can actually read",
    ],
    detail: [
      "Search engine optimisation is still the highest-ROI marketing a local business can do — the customer is already searching for exactly what you offer. We optimise your site, your Google Business Profile and your local citations so you show up in the map pack and the organic results for the searches that turn into work.",
      "But a growing share of those customers never see those results. They ask ChatGPT, Perplexity, Gemini or Google's AI Overview \"who's the best electrician near me\" — or the best mobile mechanic, or the most reliable cleaner — and get back three names and a reason. Answer Engine Optimisation is the work of making sure one of those names is yours.",
      "The two disciplines share most of their foundations, which is exactly why we sell them as one service rather than charging you twice for the same schema markup.",
    ],
    deliverables: [
      { title: "Local SEO", body: "Keyword strategy, on-page work, Google Business Profile and citation building." },
      { title: "Answer Engine Optimisation", body: "Structured data, question-led content and the trusted citations AI models learn from." },
      { title: "Visibility tracking", body: "A monthly report showing where you appear across each AI assistant — and where you don't yet." },
    ],
  },
  {
    slug: "google-meta-ads",
    label: "Google & Meta Ads",
    short: "Google-led paid ads for higher-intent leads",
    tagline: "Paid acquisition",
    title: "Google & Meta Ads — Google-Led, Because Intent Wins",
    intro:
      "SEO and AEO build over months. Ads bring work this week. We lead with Google because someone typing \"emergency electrician near me\" — or \"end of tenancy clean this weekend\" — is a very different prospect to someone who paused on a video.",
    features: [
      "Google-led: search where the intent already exists",
      "Meta for retargeting and local awareness",
      "Proper call and form conversion tracking",
      "You keep full ownership of your ad accounts",
    ],
    detail: [
      "Most agencies lead with Meta because the creative is fun to make and the cost-per-lead number looks better in a report. We lead with Google because the leads convert. Someone searching for your service in your town has a problem right now, and that intent is worth paying more per click for.",
      "Meta still earns its place: it retargets the people who visited your site and didn't call, it builds local recognition, and for some businesses — salons and gyms especially — it genuinely outperforms. It just isn't where we start.",
      "Management is a flat fee inside your monthly package — we don't take a percentage of your ad spend and we don't hide margin in it. Ad spend is paid by you directly to Google and Meta, so you can see every penny of it.",
    ],
    deliverables: [
      { title: "High-intent search campaigns", body: "Built around the searches that turn into quoted, booked jobs." },
      { title: "Retargeting and creative", body: "Meta prospecting and retargeting, with a regular creative refresh." },
      { title: "Honest tracking", body: "Call and form tracking, so you know your true cost per booked job — not per click." },
    ],
  },
  {
    slug: "trade-crm",
    label: "Industry-Specific CRM",
    short: "A white-labelled CRM configured for your industry",
    tagline: "Run the business",
    title: "A CRM Configured for Your Industry, Not Just Any Business",
    intro:
      "A white-labelled CRM, powered by GoHighLevel and configured around how your business actually runs. For a trade that means EICR and gas safety records, VAT splits and van stock. For a cleaner, salon or personal trainer it means recurring bookings, deposits and repeat-customer reminders.",
    features: [
      "Compliance records generated straight from a job",
      "Materials / labour split for VAT",
      "Job costing and true margin per job",
      "Recurring bookings and repeat-customer reminders",
    ],
    detail: [
      "The difference between a busy local business and a quiet one is usually follow-up. The difference between a profitable one and a merely busy one is usually knowing which work actually made money. An off-the-shelf setup handles the first and leaves you to work out the second on the back of an invoice.",
      "Yours is built on GoHighLevel — a serious, well-supported platform we white-label and run for you — so the fundamentals are solid from day one. Every lead from every source lands in one inbox, gets a reply the moment it arrives, and triggers an automatic text back when you miss a call because you were up a ladder, under a car or with a client.",
      "Then we configure the half that's specific to you. For a trade that's issuing EICR and gas safety records straight from a completed job, splitting materials and labour so your VAT return isn't a Sunday evening, and tracking van stock and certificate expiry dates before they lapse. For a service business it's recurring bookings, deposits, no-show chasing and reminders that bring last month's customer back this month. That configuration is the work most agencies never do.",
    ],
    deliverables: [
      { title: "One inbox", body: "Calls, texts, email, WhatsApp and Facebook messages in a single place, on your phone." },
      { title: "Built for your sector", body: "Trades get EICR and gas safety record generation with certificate expiry tracking; service businesses get recurring bookings, deposits and rebooking reminders." },
      { title: "Job costing", body: "Materials and labour split for VAT, and true margin on every job." },
    ],
  },
  {
    slug: "done-for-you-sales",
    label: "Done-For-You Sales",
    short: "AI voice agent + human appointment setter",
    tagline: "The differentiator",
    title: "Done-For-You Sales — We Answer and Chase, You Turn Up and Quote",
    intro:
      "Everyone helps you get leads. Almost nobody helps you win the jobs. An AI voice agent answers your missed calls within three rings, and a human appointment setter chases every quote until you get a yes or a no.",
    features: [
      "AI voice agent answers within three rings, 24/7",
      "Qualifies the job and books it into your calendar",
      "Human setter chases quotes at 48h, 5d, 10d, 20d, 30d",
      "You only speak to people worth speaking to",
    ],
    detail: [
      "A missed call is a lost job — usually to whoever picks up next. Our AI voice agent answers within three rings, day or night, and doesn't sound like a phone tree. It asks what the work is, where it is and how urgent it is, then books it straight into your calendar or flags it as an emergency.",
      "The second half is the one nobody talks about: quote follow-up. Most trades and service businesses send a quote and then wait. We put a human appointment setter — a person, not an automation — onto every outstanding quote, chasing at 48 hours, 5 days, 10 days, 20 days and 30 days until you get a decision either way.",
      "Quotes that would have gone quiet turn into work. And the ones that were never going to convert stop taking up space in your head.",
    ],
    deliverables: [
      { title: "AI voice agent", body: "Answers, qualifies and books 24/7 — within three rings, every time." },
      { title: "Human quote chasing", body: "A real appointment setter on a 48h / 5d / 10d / 20d / 30d cadence." },
      { title: "A pre-qualified diary", body: "Jobs land in your calendar with the detail already gathered." },
    ],
  },
  {
    slug: "trades-network",
    label: "The Trades Network",
    short: "A closed referral network between our clients",
    tagline: "The unfair advantage",
    title: "The Trades Network — Our Clients Feed Each Other Work",
    intro:
      "A closed referral network between every business we work with, trades and local service businesses alike. One client per trade or service, per area — so referring work to each other is never referring work to a competitor.",
    features: [
      "One-click \"refer this customer\" from your CRM",
      "£25–50 finder's fee on every referral you send",
      "One client per trade or service, per area — no conflicts",
      "Quarterly meetups with the other members",
    ],
    detail: [
      "The electrician meets a homeowner who needs a boiler moved. The plumber is standing in a kitchen that needs rewiring. The builder finishing an extension is asked who does a decent end-of-build clean. Right now that work goes to whoever they half-remember from a job two years ago, if it goes anywhere at all.",
      "The Trades Network turns those moments into a one-click referral from inside your CRM. The lead lands with the right member, and whoever sent it gets a £25–50 finder's fee. No awkward invoicing, no chasing.",
      "It only works because of the exclusivity rule: we take one client per trade or service, per area. You are never referring a customer to someone who'll be bidding against you next month, and nobody in the network is competing with you for the same postcodes.",
      "We also run quarterly meetups, so the network is made of people who have actually met each other rather than usernames in a group chat.",
    ],
    deliverables: [
      { title: "One-click referrals", body: "Send a customer to another member straight from your CRM." },
      { title: "Finder's fees", body: "£25–50 per referral sent, paid without the paperwork." },
      { title: "Protected territory", body: "One client per trade or service, per area — enforced, not aspirational." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
