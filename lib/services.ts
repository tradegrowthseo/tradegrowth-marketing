// The services. Three are sold; the fourth, enquiry management, is in pilot and
// rendered as such rather than hidden — it has been on the site since launch
// and the honest thing is to say where it actually is.
//
// Rendered as a preview grid on the home page (sold services only) and in full
// on /services. There are deliberately no per-service sub-pages — the brief
// calls for one detailed Services page, so `detail` and `deliverables` are
// consumed there rather than by a [slug] route.
//
// Slugs are unchanged from the original build on purpose: they are the anchor
// targets in the header dropdown, the footer and every /services#… link that
// already exists. Labels and copy move; the URLs don't.
//
// Claims discipline: AI-search work is described as work we do, never as a
// ranking, citation or recommendation we can promise.

export interface Service {
  slug: string;
  label: string;
  short: string; // one-line summary — nav dropdown + home card
  tagline: string; // eyebrow above the section heading
  title: string; // section heading on /services
  intro: string; // lead paragraph
  headline?: boolean; // SEO + AEO is the headline service
  /** In pilot: shown on /services with a badge, excluded from pricing and the home grid. */
  status?: "pilot";
  features: string[]; // bullets on the home preview card
  detail: string[]; // paragraphs on /services
  deliverables: { title: string; body: string }[];
}

export const services: Service[] = [
  {
    slug: "website-design",
    label: "Website Design",
    short: "Present your expertise clearly and make it easier for prospective clients to enquire.",
    tagline: "The foundation",
    title: "Websites That Show the Work, Not Just the Services",
    intro:
      "For a practice or consultancy, the website is where a prospective client decides whether you have handled work like theirs before. We build fast, mobile-first sites organised around projects, specialisms and the people doing the work — or fix the one you have, if it's sound underneath.",
    features: [
      "Service and sector pages",
      "Project case studies, drafted from a call with you",
      "Mobile-friendly enquiry journeys",
      "Domain in your name, a launch date in writing",
    ],
    detail: [
      "Most enquiries begin with someone checking whether you are a credible fit. A developer looking for an MEP consultant, an architect looking for a structural engineer, a homeowner looking for someone to design an extension — all of them are doing the same thing: scanning for evidence that you have handled a project like theirs. A list of services does not answer that. A portfolio does.",
      "So the site is built around the work. Projects with the brief, the constraints and your part in it — drafted by us from a twenty-minute call, because nobody in a busy practice has time to write them. Case studies that name the sector and the scale. Specialism pages that say plainly what you take on and what you don't. Team profiles carrying the chartered status, accreditations and professional memberships a professional buyer looks for before picking up the phone.",
      "The practical side matters just as much. Pages load quickly and work properly on a phone, because a good share of your visitors are reading on site or between meetings. The enquiry route is short and obvious from every page. And the domain is registered in your name — the site is yours, on no rented platform, whatever happens later. If your existing site is sound, we say so and do the work to it instead of replacing it.",
    ],
    deliverables: [
      { title: "Portfolio-first structure", body: "Projects, sectors and specialisms organised so a prospective client can find work like their own." },
      { title: "Credibility in the right places", body: "Chartered status, accreditations, memberships and team experience where buyers look for them." },
      { title: "A straightforward enquiry journey", body: "Short, clear routes to an enquiry on every page — and a site that works properly on a phone." },
    ],
  },
  {
    slug: "seo-aeo",
    label: "SEO & AI-Search Visibility",
    short: "Improve how prospective clients discover and understand your business.",
    tagline: "Headline service",
    title: "SEO and AI-Search Visibility — Findable in Both Places",
    intro:
      "Search still brings the enquiries. But a growing share of the research now happens through AI assistants, which read and summarise rather than list. We work on both, because they share most of the same foundations.",
    headline: true,
    features: [
      "Search strategy aligned with your services and coverage",
      "Technical and on-page SEO",
      "Case studies, question-led pages and third-party mentions",
      "Monthly reporting on Search Console totals and sampled AI visibility",
    ],
    detail: [
      "Search optimisation for a consultancy is not the same as for a shop. The valuable searches are specific — a service plus a project type, or a service plus a place: cladding remediation, listed building consent, EV charging infrastructure design, an MEP consultant for a school refurbishment. We work out which of those actually matter for the work you want, then make sure your site properly answers them.",
      "How wide we go depends on your market rather than a template. A studio taking residential work within an hour of the office needs local visibility and a strong Google Business Profile. A consultancy tendering nationally on framework work needs something else entirely — mostly, other people mentioning it. We set the targeting to the market you sell into, not the largest one we could plausibly claim.",
      "AI-assisted search sits alongside that. When someone asks an assistant to shortlist consultants for a project, it works from whatever it can read and trust about you — so we make your expertise legible: structured data describing your services, sectors and credentials; content that answers the questions buyers actually ask; consistent details across the sources these systems draw on; and mentions of your practice on other people's sites, which the published evidence says matter more than links. None of that is a lever that makes an assistant name you, and anyone who tells you otherwise is guessing. It is the groundwork that makes it possible, and we report monthly on what can actually be observed.",
    ],
    deliverables: [
      { title: "Search visibility", body: "Keyword and content strategy around your services, project types and locations, with the on-page work to support it." },
      { title: "AI-search groundwork", body: "Structured data, question-led content, consistent business information and third-party mentions, so your expertise is legible to AI-assisted search." },
      { title: "Reporting you can read", body: "A monthly view of where you appear across search and AI assistants — on Search Console totals, including where you don't yet appear." },
    ],
  },
  {
    slug: "google-meta-ads",
    label: "Google & Meta Ads",
    short: "An add-on for residential-facing practices, where the search intent actually exists.",
    tagline: "Paid acquisition — add-on",
    title: "Google & Meta Ads — Only Where There's Something to Buy",
    intro:
      "Search and AI visibility build over months. Ads reach people looking now — but only where people are looking. We offer this as an add-on to residential-facing practices, and we'll say so plainly if your market doesn't have the intent to make it worth running.",
    features: [
      "Google Search led, Meta where the work is visual",
      "Relevant landing pages and campaign management",
      "Call and enquiry tracking, agreed in advance",
      "You keep full ownership of your ad accounts",
    ],
    detail: [
      "Google Search is where someone types the thing they need — a structural engineer for a loft conversion, an architect for a rear extension, an interior designer for a hotel refurbishment. The intent is already there and already specific, which is why we usually start here. Campaigns are built around the services and project types you want more of, rather than broad terms that spend the budget on enquiries you would turn down.",
      "Meta earns its place when the work photographs well and the audience can be reached visually — completed interiors, finished schemes, before-and-after refurbishments. It also handles follow-up: reaching people who looked at your projects and didn't get in touch. Where a practice's work is largely technical rather than visual, we will say so rather than sell you campaigns that won't land.",
      "For a consultancy selling to developers, contractors and estates teams nationally, there is almost nothing to buy: a handful of searches a month, most of them from people who already know who they want. We don't offer ads to that market, because we'd be charging you to manage a budget that can't be spent well.",
      "Management is a flat monthly add-on to the Visibility retainer. We don't take a percentage of ad spend and we don't route it through us — you pay Google and Meta directly and can see every penny in your own accounts. Tracking covers calls and enquiry forms, so you can see what an enquiry actually costs rather than what a click costs.",
    ],
    deliverables: [
      { title: "Search campaigns", body: "Built around the services and project types you want more of, not the broadest terms available." },
      { title: "Visual campaigns and follow-up", body: "Meta prospecting and retargeting where the work suits it, with a regular creative refresh." },
      { title: "Honest tracking", body: "Call and enquiry tracking, so you see the real cost of an enquiry rather than a cost per click." },
    ],
  },
  {
    slug: "trade-crm",
    label: "Enquiry Management & Follow-up",
    short: "In pilot with one client. Not yet sold — it will be priced when it works.",
    tagline: "In pilot",
    title: "Enquiry Management & Follow-up",
    status: "pilot",
    intro:
      "A pipeline for project enquiries, proposals and follow-up, built for this sector. It is being piloted with one client now. It is not on the price list and won't be until the pilot shows it works in a real practice.",
    features: [
      "Contact records and a project-enquiry pipeline",
      "Enquiries by source, joined to search visibility",
      "Follow-up reminders that stop the moment someone replies",
      "Not sold until the pilot is done",
    ],
    detail: [
      "Enquiries arrive from everywhere — the website form, a call taken during a site visit, an email forwarded by a former client. The ones that go missing are rarely the ones you decided against. They are the ones that landed while you were somewhere else and never made it onto a list.",
      "What we are building is a front-of-house system for practices that win work by referral: contact and company records, a project-enquiry pipeline with stages you recognise, follow-up reminders with a hard rule that any reply from the enquirer stops every automated nudge, and reporting that shows where your work actually comes from. In a referral market, source is the only metric that matters and nobody measures it.",
      "It is in pilot with one client. We would rather publish that than list it as a feature and hope. When it has run for a few months in a real practice and the principal is actually using it, it goes on the price list — with its scope and its exclusions stated the same way as everything else on this site.",
      "It is not, and won't become, project management, invoicing or marketing automation. It does not replace your design or analysis software, your project management tools or your accounting package.",
    ],
    deliverables: [
      { title: "What it will do", body: "Keep every project enquiry in one place, remind someone by name when a proposal has sat too long, and show which sources produced won work." },
      { title: "What it won't do", body: "Chase your proposals for you, qualify opportunities, close sales, send SMS, or run campaigns. Your team runs the conversations." },
      { title: "When it's sold", body: "After the pilot, priced here first. If you'd like to be told when that is, say so on the audit form." },
    ],
  },
];

/** The services that appear on the price list and the home page. */
export const soldServices = services.filter((s) => !s.status);

// ─── Illustrative enquiry pipeline ────────────────────────────────────
// Shown on /services as an example of what is being piloted, not a fixed
// process. Stages and timings are agreed with each client — a studio taking
// residential work and a consultancy tendering on frameworks do not want the
// same pipeline.
//
// Won / Lost / On hold are OUTCOMES, deliberately kept separate from the stages
// below: an enquiry can reach any of them from anywhere, and nothing has to
// walk the whole line.

export const enquiryPipeline: string[] = [
  "New enquiry",
  "Discovery meeting",
  "Brief received",
  "Proposal sent",
  "Follow-up",
];

export const pipelineOutcomes: string[] = ["Won", "Lost", "On hold"];

/** Who does what, stated plainly so the split of responsibility is never implied. */
export const responsibilities = {
  ours: "TradeGrowth configures and maintains the agreed system.",
  yours:
    "Your team assesses project suitability, prepares proposals, handles sales conversations and records progress.",
};

// ─── How an enquiry can be attributed, and what can't be ──────────────
// Deliberately conservative. This applies to every report we produce, not
// only to the pilot: a click on a phone or email link is a contact action,
// not a confirmed enquiry. Keeping these four apart is what stops a report
// overstating itself.

export const attributionNotes: { term: string; body: string }[] = [
  {
    term: "Contact method",
    body: "How someone got in touch — a website form, a phone call, an email, a message. Form submissions can be tracked; calls and emails are known only if your team tells us.",
  },
  {
    term: "Discovery source",
    body: "How they found you, which is a separate question and usually one only the enquirer can answer. It is recorded when it's known, not inferred.",
  },
  {
    term: "Evidence behind an attribution",
    body: "What actually supports linking an enquiry to a channel — a tracked click, a campaign parameter, or the enquirer telling you. A direct email or a call to an untracked number cannot be attributed to SEO, and we won't report it as though it can.",
  },
  {
    term: "Outcome",
    body: "Whether the enquiry became work. This depends on you telling us; an enquiry nobody reports on stays an enquiry.",
  },
];

/** Stated plainly so nobody reads a click count as an enquiry count. */
export const trackingCaveats: string[] = [
  "Clicks on a phone number or email link are contact actions, not confirmed enquiries.",
  "Paid tracking numbers and call recording are not included by default; they are scoped separately if wanted.",
  "Reporting reflects what is recorded. If a source or an outcome is never logged, it cannot appear in a report.",
  "Most AI-assistant visibility never shows up in analytics at all — only around a quarter of AI mentions carry a link. We sample the answers directly instead.",
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
