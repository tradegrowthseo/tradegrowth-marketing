// FAQ content, grouped by the page that renders it. These are written
// question-led and answer-first on purpose: the same structure that makes them
// useful to a homeowner is what makes them quotable by an answer engine.

export interface Faq {
  q: string;
  a: string;
}

export const aeoFaqs: Faq[] = [
  {
    q: "What is Answer Engine Optimisation (AEO)?",
    a: "AEO is the practice of getting your business named and recommended inside AI-generated answers — the ones ChatGPT, Perplexity, Gemini, Claude and Google's AI Overviews give when someone asks who to hire. Traditional SEO competes for a position in a list of links. AEO competes to be the answer itself.",
  },
  {
    q: "How is AEO different from SEO?",
    a: "SEO earns you a ranking; AEO earns you a mention. They share foundations — a fast, well-structured site and a strong local presence help both — but AEO adds machine-readable schema, question-led content written the way people actually ask, citations on sources the models trust, and an llms.txt file that tells AI crawlers what your business does. We do both together, because doing one without the other leaves half the searches on the table.",
  },
  {
    q: "Do homeowners really use AI to find tradespeople?",
    a: "Increasingly, yes — and the behaviour skews towards bigger jobs. Someone with a dripping tap searches Google. Someone planning a full rewire, a new boiler or an extension asks an assistant to compare their options and explain the trade-offs. Those are exactly the jobs worth winning, and the homeowner never sees a page of blue links.",
  },
  {
    q: "How do you get my business mentioned by ChatGPT?",
    a: "Five levers, applied together: JSON-LD schema so machines can read your services, areas and credentials; AI-ready FAQ content that answers real questions directly; trusted citations across the directories and sources these models learn from; an llms.txt file that gives AI crawlers a clean summary of your business; and monthly visibility tracking so we can see which assistants name you and push on the ones that don't yet.",
  },
  {
    q: "How long does AEO take to work?",
    a: "Foundations go live in the first month. Visible movement in AI answers typically starts around weeks 6–12, because the models need to encounter your business across enough trusted sources to start repeating it. It's slower than paid ads and faster than traditional SEO — which is why we usually run all three together.",
  },
  {
    q: "Can you guarantee I'll be recommended?",
    a: "Nobody can guarantee a specific AI will name you on a specific day — the models change and so do their sources. What we do guarantee is our double-your-money guarantee: if the work we do doesn't double what you spend with us, we keep working for free until it does.",
  },
  {
    q: "What is llms.txt?",
    a: "It's a plain-text file in the root of your website — the AI-era equivalent of robots.txt — that gives large language models a clear, structured summary of who you are, what you do and where you work. It costs nothing to add and almost no trades website in the UK has one yet. Every site we build ships with it.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "Why do you publish your prices when nobody else does?",
    a: "Because hiding them wastes everybody's time. You know what a job costs before you quote it, and you'd be suspicious of a customer who wouldn't tell you their budget. Every price we charge is on this page.",
  },
  {
    q: "Do I have to buy the website to get a monthly package?",
    a: "The monthly packages are built on top of a site that's structured for AEO, so in practice yes — unless you already have a fast, modern site we can work with. If you do, send us the URL and we'll tell you honestly whether it needs replacing.",
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
    q: "What's the double-your-money guarantee?",
    a: "If the work we do doesn't return at least double what you've paid us, we keep working for free until it does. We can offer that because we only take one client per trade, per area — we don't need to sign everyone.",
  },
  {
    q: "What if I want to leave?",
    a: "After your minimum term, give us a month's notice. The domain is already in your name and the website is yours — you take it with you. We'd rather you left cleanly than stayed resentfully.",
  },
];

export const generalFaqs: Faq[] = [
  {
    q: "Do you only work with trades?",
    a: "Yes. Electricians, plumbers, gas engineers, roofers, builders, joiners, plasterers, landscapers, fitters and decorators. Specialising is the only way we can build things like trade-specific compliance records and a referral network that actually makes sense.",
  },
  {
    q: "What does one client per trade, per area mean?",
    a: "If we work with an electrician in your town, we won't take on another one. It keeps our incentives honest, it makes the referral network possible, and it means the work we do for you isn't being done for the business quoting against you.",
  },
  {
    q: "How quickly can we start?",
    a: "The free AEO audit comes back within a few working days. If you go ahead, the website build typically runs 3–4 weeks from deposit, and the monthly package foundations go live alongside it.",
  },
  {
    q: "Where are you based?",
    a: "We work with trades across the UK. Everything runs remotely — calls, dashboards and reporting — so where you are makes no difference to how well we can do the work.",
  },
];
