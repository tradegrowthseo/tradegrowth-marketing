// FAQ content, grouped by the page that renders it. These are written
// question-led and answer-first on purpose: the same structure that makes them
// useful to a reader is what makes them quotable by an answer engine.
//
// Claims discipline: nothing here promises a ranking, a citation or an AI
// recommendation. Where a question invites that promise, the answer says no.

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
    a: "They share most of their foundations: a fast, well-structured site, clear service and project information, and consistent details wherever your business appears. AEO adds machine-readable structured data, content written the way buyers actually ask questions, and an llms.txt summary of the practice. We do them together, because separating them means paying twice for the same groundwork.",
  },
  {
    q: "Do clients really use AI assistants to find consultants?",
    a: "It is a growing part of how professional research starts, particularly at the early stage where someone is working out who to approach rather than who to appoint. A client sizing up a refurbishment, a developer drawing up a consultant list, a homeowner working out whether their extension needs a structural engineer — all of that increasingly begins with a question to an assistant rather than a page of links. It sits alongside conventional search rather than replacing it, which is why we work on both.",
  },
  {
    q: "Can you get my practice named by ChatGPT?",
    a: "Not as a promise, and you should be wary of anyone who says otherwise. Nobody controls what an AI assistant says, the models change, and so do the sources they draw on. What we can do is the groundwork that makes it possible: structured data describing your services, sectors and credentials; question-led content; consistent business information across the sources these systems use; and an llms.txt file. Then we track what each assistant actually says about you, month by month, and tell you honestly what has moved.",
  },
  {
    q: "How long does this take to show anything?",
    a: "Foundations go live in the first month. Any visible change in how assistants describe you typically takes longer — think in terms of months rather than weeks — because these systems need to encounter your business across enough sources for it to register. It is slower than paid ads and broadly comparable with conventional SEO, which is why we usually run them together.",
  },
  {
    q: "Can you guarantee I'll be recommended?",
    a: "No, and nobody else can either. No agency controls what a particular assistant says on a particular day — the models change and so do the sources behind them. What we can tell you is what the work involves, what we have observed for other clients, and what your own audit shows about where you stand today.",
  },
  {
    q: "What is llms.txt?",
    a: "A plain-text file at the root of a website giving large language models a clear summary of who you are, what you do and where you work. It is cheap to add and still rare on UK consultancy websites, so it is worth having. It is not a route into AI answers on its own, and we don't present it as one — it is one small part of making a business legible, alongside the structured data, the content and the consistency of your information elsewhere.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "Why do you publish your prices when nobody else does?",
    a: "Because hiding them wastes everybody's time. You scope a fee proposal before you send it, and you would think twice about a client who wouldn't discuss a budget. Every price we charge is on this page.",
  },
  {
    q: "Do I have to buy the website to take a monthly package?",
    a: "The monthly packages are built on top of a site structured for search and AI-assisted search, so in practice yes — unless you already have a fast, modern site we can work with. If you do, send us the URL and we'll tell you honestly whether it needs replacing or just improving.",
  },
  {
    q: "Is there a long contract?",
    a: "Basic and Standard have a 3-month minimum, Premium has 6 months. After the minimum you're month-to-month. The website itself has no monthly commitment at all.",
  },
  {
    q: "Who pays for the ad spend?",
    a: "You do, directly to Google and Meta. We never take a percentage of it or route it through us — our management fee is the flat amount in your package, and you can see every penny you spend in your own ad accounts.",
  },
  {
    q: "What am I committing to up front?",
    a: "The one-off website fee, and then the minimum term on whichever package you choose — 3 months on Basic and Standard, 6 months on Premium. There is nothing else: no setup fee, no percentage of your ad spend, and no charge for the audit.",
  },
  {
    q: "What if I want to leave?",
    a: "After your minimum term, give us a month's notice. The domain is already in your name and the website is yours — you take it with you. We'd rather you left cleanly than stayed reluctantly.",
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "Who do you work with?",
    a: "Construction, engineering and design businesses. Architects, MEP and building services engineers, structural engineers and interior designers are the four we work with most, and alongside them civil engineering consultancies, building and quantity surveyors, planning consultants, energy and sustainability consultants, landscape architects, project management and construction consultancies, specialist electrical and EV infrastructure design consultancies, and main contractors, design-and-build firms and specialist construction contractors.",
  },
  {
    q: "Who actually handles the enquiries?",
    a: "You do. We configure and maintain the system — the pipeline, the connected forms, the tasks and reminders, and the workflows included in your tier. Your team assesses whether a project suits you, prepares the proposals, has the conversations and records what happened. We don't sit between you and your prospective clients, and we don't chase your proposals for you.",
  },
  {
    q: "Do you work with both residential and commercial practices?",
    a: "Yes, and the work is genuinely different. A practice attracting homeowners needs to be findable locally and to explain the process to people commissioning something like this for the first time. A consultancy attracting developers, contractors, architects and estates teams needs to demonstrate relevant sector experience to people who will compare it against a shortlist. Plenty of firms do both, in which case the site needs to serve each without confusing either.",
  },
  {
    q: "How quickly can we start?",
    a: "The free AI-search audit comes back within a few working days. If you go ahead, the website build typically runs 3–4 weeks from deposit, and the monthly package foundations go live alongside it.",
  },
  {
    q: "Where are you based?",
    a: "We work with construction, engineering and design businesses across the UK. Everything runs remotely — calls, dashboards and reporting — so where you are makes no difference to how well we can do the work.",
  },
];
