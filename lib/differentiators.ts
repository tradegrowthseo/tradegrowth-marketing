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
    body: "Clients increasingly open ChatGPT, Perplexity, Gemini or Google's AI Overview to shortlist consultants for a project. Those tools answer from whatever they can read and trust about a practice, so the work is making your services, sectors and credentials legible to them.",
    points: [
      "Structured data describing services, sectors and credentials",
      "Question-led content answering what buyers actually ask",
      "Consistent business information across trusted sources",
      "Monthly reporting on what can actually be observed",
    ],
  },
  {
    id: "crm",
    number: "02",
    label: "Enquiry management & follow-up",
    title: "Every enquiry in one place, and a nudge when one is due a reply",
    body: "A practical CRM pipeline configured around your enquiry process: contact and company records, a project-enquiry pipeline, capture from the website forms we connect, and internal tasks so follow-up lands with someone by name. Where your tier includes them, agreed workflows handle acknowledgements and reminders.",
    points: [
      "A clear project-enquiry pipeline",
      "Enquiry capture from connected forms",
      "Internal tasks and follow-up reminders",
      "Your team runs the conversations, not us",
    ],
  },
  {
    id: "pricing",
    number: "03",
    label: "Published pricing",
    title: "Every price is on the website",
    body: "The packages, what each one includes and what sits outside them are all published here. You scope a fee proposal before you send it — we think the same courtesy runs the other way, so there is nothing behind a \"book a call for a quote\".",
    points: [
      "Three packages, priced in public",
      "A full feature comparison, line by line",
      "Costs that sit outside the fee, stated",
      "No setup fee, and no cut of your ad spend",
    ],
  },
];
