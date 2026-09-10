// Who the business is positioned around.
//
// Four primary disciplines lead and get their own cards, each with a specific
// reason that discipline would want this work done. The related professions sit
// beneath them in a single list rather than being repeated across the site —
// and deliberately do not get their own thin sector pages, because one strong
// page beats eight shallow ones for both readers and search.
//
// Umbrella phrase throughout the site: "construction, engineering and design
// businesses". "Built environment" is used sparingly, where it reads naturally.

export interface PrimaryAudience {
  id: string;
  name: string;
  /** Who this is, in one line. */
  summary: string;
  /** What the marketing actually does for this discipline. */
  benefit: string;
}

export const primaryAudiences: PrimaryAudience[] = [
  {
    id: "architects",
    name: "Architects",
    summary: "Practices working on residential, commercial or mixed-use schemes",
    benefit:
      "Communicate design expertise through the work itself, so the right residential and commercial project enquiries arrive already understanding what you do.",
  },
  {
    id: "mep",
    name: "MEP & building services engineers",
    summary: "Mechanical, electrical and public health consultancies",
    benefit:
      "Set out your technical services and relevant sector experience clearly, so architects, contractors and developers can see you have done work like theirs before.",
  },
  {
    id: "structural",
    name: "Structural engineers",
    summary: "From domestic alterations to full frame design",
    benefit:
      "Make your services and project experience easy to understand for both homeowners and professional buyers, without writing the same page twice.",
  },
  {
    id: "interior-design",
    name: "Interior designers",
    summary: "Interior design and interior architecture studios",
    benefit:
      "Showcase style, project scope and finish quality, so enquiries arrive from clients whose brief and budget actually suit the way you work.",
  },
];

// Grouped beneath the primary cards. One list, shown once, rather than a long
// list repeated on every page.
export const relatedAudiences: string[] = [
  "Civil engineering consultancies",
  "Building & quantity surveyors",
  "Planning consultants",
  "Energy & sustainability consultants",
  "Landscape architects",
  "Project management & construction consultancies",
  "Specialist electrical & EV infrastructure design consultancies",
  "Main contractors & design-and-build firms",
  "Specialist construction contractors",
];
