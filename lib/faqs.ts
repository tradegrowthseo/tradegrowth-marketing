// FAQ content, grouped by the page that renders it. These are written
// question-led and answer-first on purpose: the same structure that makes them
// useful to a reader is what makes them quotable by an answer engine.
//
// Claims discipline: nothing here promises a ranking, a citation or an AI
// recommendation. Where a question invites that promise, the answer says no.

import { addOns, capacity, foundations, retainer } from "./pricing";

export interface Faq {
  q: string;
  a: string;
}

export const aeoFaqs: Faq[] = [
  {
    q: "What is Answer Engine Optimisation (AEO)?",
    a: "AEO is the work of making a business and its expertise easy for AI assistants to find, read and represent accurately — the assistants people now use to research and shortlist consultants. Traditional SEO competes for a position in a list of links. AEO is concerned with how you are described when the answer is written as prose instead.",
  },
  {
    q: "How is AEO different from SEO?",
    a: "They share most of their foundations: a fast, well-structured site, clear service and project information, and consistent details wherever your business appears. AEO adds machine-readable structured data, content written the way buyers actually ask questions, and a deliberate effort to get your practice mentioned on other people's sites — partner credits, trade bodies, trade press — because the published evidence says mentions matter more to AI answers than links do. We do them together, because separating them means paying twice for the same groundwork.",
  },
  {
    q: "Do clients really use AI assistants to find consultants?",
    a: "It is a growing part of how professional research starts, particularly at the early stage where someone is working out who to approach rather than who to appoint. A client sizing up a refurbishment, a developer drawing up a consultant list, a homeowner working out whether their extension needs a structural engineer — all of that increasingly begins with a question to an assistant rather than a page of links. It sits alongside conventional search rather than replacing it, which is why we work on both.",
  },
  {
    q: "Can you get my practice named by ChatGPT?",
    a: "Not as a promise, and you should be wary of anyone who says otherwise. Nobody controls what an AI assistant says, the models change, and so do the sources they draw on. What we can do is the groundwork that makes it possible: structured data describing your services, sectors and credentials; question-led content; consistent business information across the sources these systems use; and mentions of your practice elsewhere. Then we track what each assistant actually says about you, month by month, and tell you honestly what has moved.",
  },
  {
    q: "How long does this take to show anything?",
    a: "Foundations go live in the first month. Any visible change in how assistants describe you typically takes longer — think in terms of months rather than weeks — because these systems need to encounter your business across enough sources for it to register. For context, the published data on conventional search says fewer than two in a hundred new pages reach Google's first page within a year, and the average top result is around five years old. We'd rather you heard that from us on day one.",
  },
  {
    q: "Can you guarantee I'll be recommended?",
    a: "No, and nobody else can either. No agency controls what a particular assistant says on a particular day — the models change and so do the sources behind them. Our guarantees cover the things we do control: what ships in month one, when a new site launches, and what the reports quote. What we can tell you is what the work involves, what we have observed for other clients, and what your own audit shows about where you stand today.",
  },
  {
    q: "What is llms.txt?",
    a: "A plain-text file at the root of a website giving large language models a summary of who you are, what you do and where you work. It costs almost nothing to add, so we add it. It is not a route into AI answers — a study of 137,000 domains found that 97% of these files were never requested in a month — and we don't list it as a deliverable or charge for it.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "Why do you publish your prices when nobody else does?",
    a: "Because hiding them wastes everybody's time. You scope a fee proposal before you send it, and you would think twice about a client who wouldn't discuss a budget. Every price we charge is on this page, and so is what sits outside it.",
  },
  {
    q: "Do I need a new website?",
    a: `Not necessarily. ${foundations.name} comes in two versions. If your site is sound underneath — fast, mobile-friendly, on a platform you control — we do the work to it at ${foundations.options[0].price}. If it can't carry the work, we build one as part of ${foundations.name} at ${foundations.options[1].price}. Send us the URL with the audit request and we'll tell you honestly which one applies.`,
  },
  {
    q: "Is there a long contract?",
    a: `${foundations.name} is ninety days at a fixed price, paid in three monthly instalments. After that the ${retainer.name} retainer is month to month on thirty days' notice, and there is no minimum term. You can finish ${foundations.name} and stop.`,
  },
  {
    q: "What am I committing to up front?",
    a: `The ${foundations.name} price for the version you choose, paid in three instalments. There is nothing else: no setup fee, no percentage of your ad spend, no charge for the audit, and no retainer you have to take afterwards.`,
  },
  {
    q: "What do the guarantees actually cover?",
    a: "The things we control: what ships in the first thirty days, when a new site launches after you sign off the content, what the reports quote, and what you keep when you leave. They deliberately do not cover rankings, AI mentions or enquiry numbers, because nobody controls those and any guarantee that claims to is a marketing device.",
  },
  {
    q: "Why do you only take on a few practices a quarter?",
    a: `Because one person does the work. ${capacity.body.replace("TradeGrowth is one person doing the work rather than a team selling it, so we", "We")}`,
  },
  {
    q: "Who pays for the ad spend?",
    a: `You do, directly to Google and Meta. Ads are an add-on at ${addOns[0].price} for residential-facing practices, where the intent exists. We never take a percentage of spend or route it through us, and you can see every penny in your own ad accounts.`,
  },
  {
    q: "Is VAT included?",
    a: "Prices are not subject to VAT. TradeGrowth Marketing is not VAT registered, so the figure you see is the figure you pay.",
  },
  {
    q: "What if I want to leave?",
    a: `After ${foundations.name}, give us thirty days' notice — or simply don't take the retainer. The domain is already in your name and the website, the reports and the research are yours. We'd rather you left cleanly than stayed reluctantly.`,
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "Who do you work with?",
    a: "Construction, engineering and design businesses. Architects, MEP and building services engineers, structural engineers and interior designers are the four we work with most, and alongside them civil engineering consultancies, building and quantity surveyors, planning consultants, energy and sustainability consultants, landscape architects, project management and construction consultancies, specialist electrical and EV infrastructure design consultancies, and main contractors, design-and-build firms and specialist construction contractors.",
  },
  {
    q: "Who actually handles the enquiries?",
    a: "You do. We make the practice findable and credible, and we report on what arrived where we can see it. Your team assesses whether a project suits you, prepares the proposals and has the conversations. An enquiry-management system for this sector is in pilot with one client; it isn't sold yet, and when it is, it still won't chase your proposals for you.",
  },
  {
    q: "Do you work with both residential and commercial practices?",
    a: "Yes, and the work is genuinely different. A practice attracting homeowners needs to be findable locally and to explain the process to people commissioning something like this for the first time. A consultancy attracting developers, contractors, architects and estates teams needs to demonstrate relevant sector experience to people who will compare it against a shortlist — and needs other people in the industry to mention it. The retainer has a track for each, because the levers aren't the same.",
  },
  {
    q: "How quickly can we start?",
    a: `The free AI-search audit comes back within a few working days. ${foundations.name} starts at the next open slot — we take on ${capacity.perQuarter} new practices a quarter — and a new site typically goes live three to four weeks after you sign off the content.`,
  },
  {
    q: "Where are you based?",
    a: "We work with construction, engineering and design businesses across the UK. Everything runs remotely — calls, dashboards and reporting — so where you are makes no difference to how well we can do the work.",
  },
];
