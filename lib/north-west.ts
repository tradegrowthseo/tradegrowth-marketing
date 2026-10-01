// Content for /north-west/ — the one regional page on the site.
//
// WHY THERE IS EXACTLY ONE. TradeGrowth is in specialist mode on the demand
// gate (seo-site-playbook §0): national, low-volume, referral-sold. That rules
// out town pages, which would be doorway pages targeting searches nobody
// performs. A single regional page is different, because it carries content
// that exists nowhere else on the site: the Preston base, the three live sites
// built for Lancashire practices, and EV Design's North West result. If a
// second regional page is ever proposed, it needs the same test: unique local
// proof, or it does not get built.
//
// Its realistic job is the click → enquiry gate: a practice that has had a
// message from Brad, or been given his name, looks him up and needs to see
// that he works with firms like theirs, nearby. Discovery for "marketing for
// architects North West" is a bonus, not the plan; that SERP is held by
// generalist agencies with years of age on their pages.
//
// Nothing here promises leads, rankings or AI mentions. Prices and guarantees
// are imported from lib/pricing.ts in the page, never retyped here.

import type { Faq } from "./faqs";
import { capacity, tierById, websiteOptions } from "./pricing";

/** The five counties, in the order the page lists them. No per-county claims:
 *  the only local facts we hold are the ones stated in `base` and the three
 *  client sites, and inventing a line for each county would be the doorway
 *  pattern in miniature. */
export const counties: string[] = [
  "Lancashire",
  "Greater Manchester",
  "Merseyside",
  "Cheshire",
  "Cumbria",
];

export const base = {
  town: "Preston",
  county: "Lancashire",
};

export const northWestTakeaways: string[] = [
  "TradeGrowth Marketing is based in Preston and works only with architecture, engineering and construction businesses.",
  "Three websites we built for North West practices are live: an EV charging design consultancy and an M&E consultancy in Burnley, and an architecture practice in Lancashire.",
  `Prices are fixed and published: a website at ${websiteOptions[0].price} or ${websiteOptions[1].price}, then monthly packages from ${tierById("basic").monthly}.`,
  "We do not promise rankings, AI mentions or a number of enquiries. We guarantee what we control, in writing.",
];

/** How work is actually won by a North West practice, and where it is lost.
 *  The two statistics are Hinge Research Institute's, cited on the page. */
export const howWorkIsWon: { title: string; body: string }[] = [
  {
    title: "Most work arrives by referral",
    body: "A developer asks an architect who they use for structures. An architect asks a contractor for an M&E consultant. A homeowner asks a neighbour who designed their extension. In this sector the name usually comes from someone else before a search is ever typed.",
  },
  {
    title: "Then the referral checks you out",
    body: "Before they call, they look you up: your website, a Google search of your name, and increasingly a question to ChatGPT or Google's AI answer. What they find in that minute decides whether the referral turns into an enquiry.",
  },
  {
    title: "That is where enquiries are lost",
    body: "A site that lists services in three lines and shows no finished projects gives a referred buyer nothing to confirm the recommendation with. The work is good; the evidence is in project folders rather than on the page.",
  },
];

export const northWestFaqs: Faq[] = [
  {
    q: "Do you only work with practices in the North West?",
    a: `No. We work with architecture, engineering and construction businesses across the UK, and everything runs remotely. The North West is where we are based, in ${base.town}, and where the websites we have built so far are, which is why it has its own page.`,
  },
  {
    q: "Which parts of the North West do you cover?",
    a: `All of it: ${counties.slice(0, -1).join(", ")} and ${counties[counties.length - 1]}. Because the work is remote, where your office is makes no difference to us. Where it matters is in the marketing itself: a practice taking homeowner work is targeted at the towns it actually takes work in, not at the whole region.`,
  },
  {
    q: "Can you guarantee more enquiries for my practice?",
    a: "No, and you should be wary of anyone who does. Nobody controls what Google ranks or what an AI assistant says, and enquiries follow from those. What we guarantee is what we control: the first month's work live within thirty days or that month is free, a launch date in writing for a new site, and reports that quote Search Console totals rather than estimates.",
  },
  {
    q: "How is marketing a North West practice different from a national campaign?",
    a: "It depends on who you sell to. An architect, structural engineer or interior designer taking homeowner and small-developer work has local search demand to capture, so the work goes into a Google Business Profile, reviews and pages for the areas you want. A consultancy selling to developers, contractors and estates teams across the country has almost no local search volume, so the work goes into case studies and getting the practice mentioned by partners and trade press instead.",
  },
  {
    q: "What does it cost?",
    a: `A website is ${websiteOptions[0].price} for a practice site of up to ${websiteOptions[0].pages} pages or ${websiteOptions[1].price} for a multi-sector site of up to ${websiteOptions[1].pages}, fixed, and there is no website fee if the site you have is sound. Monthly packages are ${tierById("basic").monthly}, ${tierById("standard").monthly} and ${tierById("premium").monthly}, each with a ${tierById("basic").minimumMonths}-month minimum. Every figure is on the pricing page.`,
  },
  {
    q: "How quickly could we start?",
    a: `The free AI-search audit comes back within a few working days and costs nothing. One person does the work, so we take on ${capacity.perQuarter} new practices a quarter; if a quarter is full you are offered the next start date. A new site typically goes live three to four weeks after you sign off the content.`,
  },
];
