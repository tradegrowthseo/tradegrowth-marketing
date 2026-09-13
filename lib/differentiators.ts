// The three things that separate this from a general marketing retainer. Shown
// on the home page and referenced from /about and /services.
//
// Audience note: construction, engineering and design businesses — architects,
// MEP and building services engineers, structural engineers and interior
// designers first, with related built-environment consultancies and contractors
// alongside them. Examples should be concrete and drawn from real project work;
// avoid anything that reads as a domestic call-out.
//
// Claims discipline: describe AI-search work as work we do, never as a
// recommendation, citation or ranking we can promise.

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
    label: "AI-assisted search",
    title: "Findable when the research starts with an AI assistant",
    body: "Clients increasingly open ChatGPT, Perplexity, Gemini or Google's AI Overview to shortlist consultants for a project. Those tools answer from whatever they can read and trust about a practice, so the work is making your services, sectors and credentials legible to them — and making sure other people mention you, which the evidence says matters more than links.",
    points: [
      "Structured data describing services, sectors and credentials",
      "Question-led content answering what buyers actually ask",
      "Third-party mentions: partner credits, trade bodies, trade press",
      "Monthly reporting on what can actually be observed",
    ],
  },
  {
    id: "case-studies",
    number: "02",
    label: "Case studies, written for you",
    title: "The project pages get written, because we write them",
    body: "The material that makes a practice credible is in your head and your project folders, not on your website — and nobody in a busy practice has time to write it up. So we don't ask you to. Each case study is drafted from a twenty-minute call, in your words, and you correct it before it goes anywhere.",
    points: [
      "Up to four in the website build, then one a month on every package",
      "The constraint, the engineering decision, the outcome",
      "Approved by you before it's published — never invented",
      "Fresh, specific pages are what assistants actually quote",
    ],
  },
  {
    id: "pricing",
    number: "03",
    label: "Published pricing",
    title: "Every price is on the website, and so are the guarantees",
    body: "The website, the three packages, what each one contains for your kind of practice, and what sits outside the fee — all published here. You scope a fee proposal before you send it; we think the same courtesy runs the other way, so there is nothing behind a \"book a call for a quote\".",
    points: [
      "Three packages, priced in public, content in every one",
      "Five guarantees on the things we control, in writing",
      "Costs that sit outside the fee, stated",
      "No setup fee, and no cut of your ad spend",
    ],
  },
];
