// The four services. Rendered as a preview grid on the home page and in full on
// /services. There are deliberately no per-service sub-pages — the brief calls
// for one detailed Services page, so `detail` and `deliverables` are consumed
// there rather than by a [slug] route.
//
// Slugs are unchanged from the original build on purpose: they are the anchor
// targets in the header dropdown, the footer and every /services#… link that
// already exists. Labels and copy move to the new audience; the URLs don't.
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
      "For a practice or consultancy, the website is where a prospective client decides whether you have handled work like theirs before. We build fast, mobile-first sites organised around projects, specialisms and the people doing the work.",
    features: [
      "Service and sector pages",
      "Project portfolios and case studies",
      "Mobile-friendly enquiry journeys",
      "Domain registered in your name, hosting and SSL for year one",
    ],
    detail: [
      "Most enquiries begin with someone checking whether you are a credible fit. A developer looking for an MEP consultant, an architect looking for a structural engineer, a homeowner looking for someone to design an extension — all of them are doing the same thing: scanning for evidence that you have handled a project like theirs. A list of services does not answer that. A portfolio does.",
      "So the site is built around the work. Projects with the brief, the constraints and your part in it. Case studies that name the sector and the scale. Specialism pages that say plainly what you take on and what you don't. Team profiles carrying the chartered status, accreditations and professional memberships a professional buyer looks for before picking up the phone.",
      "The practical side matters just as much. Pages load quickly and work properly on a phone, because a good share of your visitors are reading on site or between meetings. The enquiry route is short and obvious from every page. And the domain is registered in your name — the site is yours, on no rented platform, whatever happens later.",
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
      "Expert-led content and sampled AI-visibility reporting",
      "Local, regional or national targeting to match your market",
    ],
    detail: [
      "Search optimisation for a consultancy is not the same as for a shop. The valuable searches are specific — a service plus a project type, or a service plus a place: cladding remediation, listed building consent, EV charging infrastructure design, an MEP consultant for a school refurbishment. We work out which of those actually matter for the work you want, then make sure your site properly answers them.",
      "How wide we go depends on your market rather than a template. A studio taking residential work within an hour of the office needs local visibility and a strong Google Business Profile. A consultancy tendering nationally on framework work needs something else entirely. We set the targeting to the market you sell into, not the largest one we could plausibly claim.",
      "AI-assisted search sits alongside that. When someone asks an assistant to shortlist consultants for a project, it works from whatever it can read and trust about you — so we make your expertise legible: structured data describing your services, sectors and credentials; content that answers the questions buyers actually ask; consistent details across the sources these systems draw on; and an llms.txt summary of the practice. None of that is a lever that makes an assistant name you, and anyone who tells you otherwise is guessing. It is the groundwork that makes it possible, and we report monthly on what can actually be observed.",
    ],
    deliverables: [
      { title: "Search visibility", body: "Keyword and content strategy around your services, project types and locations, with the on-page work to support it." },
      { title: "AI-search groundwork", body: "Structured data, question-led content and consistent business information, so your expertise is legible to AI-assisted search." },
      { title: "Reporting you can read", body: "A monthly view of where you appear across search and AI assistants — including where you don't yet." },
    ],
  },
  {
    slug: "google-meta-ads",
    label: "Google & Meta Ads",
    short: "Reach relevant audiences with campaigns built around your services and goals.",
    tagline: "Paid acquisition",
    title: "Google & Meta Ads — Different Platforms, Different Jobs",
    intro:
      "Search and AI visibility build over months. Ads reach people looking now. We lead with Google Search because it captures demand that already exists, and use Meta where the work is visual enough to be worth showing.",
    features: [
      "Channel selection based on audience and demand",
      "Relevant landing pages and campaign management",
      "Agreed conversion tracking and performance reporting",
      "You keep full ownership of your ad accounts",
    ],
    detail: [
      "Google Search is where someone types the thing they need — a structural engineer for a loft conversion, an EV charging design consultant, an interior designer for a hotel refurbishment. The intent is already there and already specific, which is why we usually start here. Campaigns are built around the services and project types you want more of, rather than broad terms that spend the budget on enquiries you would turn down.",
      "Meta earns its place when the work photographs well and the audience can be reached visually — completed interiors, finished schemes, before-and-after refurbishments. It also handles follow-up: reaching people who looked at your projects and didn't get in touch. Where a practice's work is largely technical rather than visual, we will say so rather than sell you campaigns that won't land.",
      "Management is a flat fee inside your monthly package. We don't take a percentage of ad spend and we don't route it through us — you pay Google and Meta directly and can see every penny in your own accounts. Tracking covers calls and enquiry forms, so you can see what an enquiry actually costs rather than what a click costs.",
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
    short: "Keep project enquiries organised and give your team a clear next step.",
    tagline: "Run the pipeline",
    title: "Enquiry Management & Follow-up",
    intro:
      "Keep project enquiries organised and make follow-up easier. We configure a practical CRM pipeline to capture enquiries from agreed sources, track consultations and proposals, and remind your team when action is due.",
    features: [
      "Contact records and opportunity pipelines",
      "Connected enquiry forms and notifications",
      "Agreed booking and follow-up workflows",
      "Internal tasks and follow-up reminders",
    ],
    detail: [
      "Enquiries arrive from everywhere — the website form, a call taken during a site visit, an email forwarded by a former client. The ones that go missing are rarely the ones you decided against. They are the ones that landed while you were somewhere else and never made it onto a list.",
      "The CRM is the software underneath this, not the service itself. What we do is configure it around your enquiry process: contact and company records, a project-enquiry pipeline with stages you recognise, enquiry capture from the website forms we connect, consultation booking where that is set up, and internal tasks and reminders so follow-up lands with someone by name rather than in general.",
      "Where a tier includes them, we build agreed workflows on top — an acknowledgement when an enquiry arrives, consultation reminders, an internal task when a proposal has been sitting too long. Reporting is then built from what the system records: which sources produced enquiries, which stage things reached, and what the outcome was.",
      "It is a front-of-house system, and worth being clear about what it is not. It does not replace your design or analysis software, your project management tools or your accounting package, and we would not propose connecting it to any of them as part of this.",
    ],
    deliverables: [
      { title: "TradeGrowth configures and maintains", body: "We set up and look after the agreed system: pipeline, records, connected forms, tasks, reminders and the workflows in your tier." },
      { title: "Your team runs the conversations", body: "You assess whether a project suits you, prepare the proposals, handle the sales conversations and record progress. We don't sit between you and your clients." },
      { title: "Reporting from what's recorded", body: "Sources, stages and outcomes — built from connected sources and the results your team logs, so the report reflects reality rather than guesswork." },
    ],
  },
];

// ─── Illustrative enquiry pipeline ────────────────────────────────────
// Shown on /services as an example, not a fixed process. Stages and timings are
// agreed with each client — a studio taking residential work and a consultancy
// tendering on frameworks do not want the same pipeline.
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

// ─── How an enquiry reaches the pipeline, and what can be attributed ──
// Deliberately conservative. Enquiries arrive through agreed integrations or by
// someone typing them in — there is no automatic capture from every channel,
// and a click on a phone or email link is a contact action, not a confirmed
// enquiry. Keeping these four apart is what stops a report overstating itself.

export const attributionNotes: { term: string; body: string }[] = [
  {
    term: "Contact method",
    body: "How someone got in touch — a website form, a phone call, an email, a message. Form submissions arrive through the integrations we connect; calls and emails are added by your team unless a specific integration is agreed.",
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
    term: "Pipeline stage and outcome",
    body: "Where the enquiry got to and how it ended. This depends on your team updating the record; an enquiry nobody moves stays where it was.",
  },
];

/** Stated plainly so nobody reads a click count as an enquiry count. */
export const trackingCaveats: string[] = [
  "Clicks on a phone number or email link are contact actions, not confirmed enquiries.",
  "Enquiries enter the pipeline through agreed integrations or by manual entry — there is no automatic capture from every channel.",
  "Advanced call tracking is scoped separately. Paid tracking numbers and call recording are not included by default.",
  "Reporting reflects what is recorded. If a source or an outcome is never logged, it cannot appear in a report.",
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
