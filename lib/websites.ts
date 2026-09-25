// The websites we have built, shown on /websites. Every fact here is verified
// against the live site or its source: the URL from the browser bar in the
// screenshot, the routes from the project's app/ directory, the schema types
// from its structured-data component, the location from its own business
// data. Do not add outcomes (rankings, enquiries) to this file — those live on
// /results with their caveats, and only for EV Design.
//
// Screenshots are graphics (text, hard edges), converted to WebP at 1200px
// per image-weight-optimisation: q95 beat lossless three to one, and a 1:1
// crop comparison showed no visible difference. Masters are in
// design-assets/websites/ and do not deploy.

import type { Faq } from "./faqs";
import { websiteOptions } from "./pricing";

export interface BuiltWebsite {
  slug: string;
  name: string;
  url: string;
  /** Host without protocol, for display. */
  host: string;
  /** Who the practice is, in one line. Their words where possible. */
  who: string;
  location: string;
  /** What was built. Structure and facts only, no outcome claims. */
  built: string;
  /** How the site is optimised for search and AI-assisted search. Facts only. */
  seo: string;
  image: { src: string; width: number; height: number; alt: string };
  /** Where on this site the story continues, if anywhere. */
  more?: { label: string; href: string };
}

export const builtWebsites: BuiltWebsite[] = [
  {
    slug: "ev-design",
    name: "EV Design",
    url: "https://ev-design.co.uk/",
    host: "ev-design.co.uk",
    who: "EV Design is an independent electrical design consultancy for EV charging infrastructure, based in Burnley, Lancashire and working on commercial, fleet, public-sector and high-power charging schemes across the UK.",
    location: "Burnley, Lancashire",
    built:
      "We built a mobile-first site organised around the work rather than a list of services: a page for each kind of charging scheme, seven individual project pages, technical insight articles written by the chartered engineer, and a WhatsApp enquiry route alongside the form.",
    seo:
      "Structured data describes the consultancy, its services and the engineer's credentials, with article markup on each insight so the expertise is legible to search engines and AI assistants. Every image was converted to WebP with sized variants, which cut first-paint weight from 4 MB to 0.6 MB. The sitemap carries real change dates from version history rather than the build time, analytics runs only after consent, and visibility is reported monthly on Search Console totals.",
    image: {
      src: "/images/websites/ev-design-website.webp",
      width: 1200,
      height: 688,
      alt: "Homepage of ev-design.co.uk: dark navy header with the EV Design logo, a headline reading Specialist Electrical Design for EV Charging Infrastructure, and a photograph of a white car at a row of rapid chargers.",
    },
    more: { label: "Read the EV Design case study", href: "/results" },
  },
  {
    slug: "jbse-consulting-engineers",
    name: "JBSE Consulting Engineers",
    url: "https://www.jbseconsulting.co.uk/",
    host: "www.jbseconsulting.co.uk",
    who: "JBSE Consulting Engineers are mechanical and electrical design consultants in Burnley, providing building-services engineering for commercial, industrial and residential projects across the UK. EV Design is the practice's specialist EV brand.",
    location: "Burnley, Lancashire",
    built:
      "A focused five-page site for the architects, contractors and developers who appoint an M&E consultant: services and sectors set out plainly, the chartered credentials placed where a professional buyer looks for them, a contact form with consent, and the statutory company details in the footer.",
    seo:
      "Organisation structured data identifies the company and its location for search engines and AI assistants, every page has its own title, description and canonical, and an XML sitemap and robots file are in place so the whole site is crawlable. Images are served as WebP so the pages load quickly on a phone, which is where much of this audience reads.",
    image: {
      src: "/images/websites/jbse-consulting-website.webp",
      width: 1200,
      height: 694,
      alt: "Homepage of jbseconsulting.co.uk: the JBSE Consulting Engineers logo, a headline reading Mechanical & Electrical Design Consultants, and an aerial photograph of the Manchester skyline.",
    },
  },
  {
    slug: "lnd-architecture-design",
    name: "LND Architecture + Design",
    url: "https://lndarchitecture.co.uk/",
    host: "lndarchitecture.co.uk",
    who: "LND Architecture + Design is an architecture and design practice in Lancashire working on private homes and commercial schemes, with completed projects across East Lancashire and the Ribble Valley.",
    location: "Lancashire",
    built:
      "A projects-led site for a residential-facing practice: a projects page with the completed homes and interiors, a page for each service, and about and contact. The photography and short films were prepared for the web so the work loads quickly on a phone.",
    seo:
      "Local-business structured data describes the practice, its services and the area it serves, so it can appear for the local searches a homeowner makes. Each service has its own page owning its own term, images are WebP, social preview images are set so a shared link shows the work, and the sitemap carries real change dates from version history so search engines can trust when a page last moved.",
    image: {
      src: "/images/websites/lnd-architecture-design-website.webp",
      width: 1200,
      height: 702,
      alt: "Homepage of lndarchitecture.co.uk: a full-screen evening photograph of two new stone houses with slate roofs and a timber balcony, overlaid with the headline Architecture shaped by site, brief and the people who'll use it.",
    },
  },
];

/** Lines a buyer or an assistant can lift, shown under the intro. */
export const websitesTakeaways: string[] = [
  "Three live websites, all for construction, engineering and design businesses in Lancashire working across the UK.",
  "Every site is mobile-first, statically rendered and ships with structured data describing the practice.",
  `Fixed price: ${websiteOptions[0].price} for a practice site or ${websiteOptions[1].price} for a multi-sector site. Domain in the client's name.`,
  "Project pages and case studies are drafted by us from a call with the practice, then approved before publishing.",
];

export const websitesFaqs: Faq[] = [
  {
    q: "What does a website like these cost?",
    a: `${websiteOptions[0].price} for a practice site of up to ${websiteOptions[0].pages} pages, or ${websiteOptions[1].price} for a multi-sector site of up to ${websiteOptions[1].pages} pages. Fixed prices, not estimates, paid half on deposit and half on launch. Every figure is on the pricing page.`,
  },
  {
    q: "How long does a website build take?",
    a: "Typically three to four weeks from the point you sign off the content. The launch date goes in writing, and if the site isn't live within twenty-eight days of your sign-off, the balance due on launch is waived.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. The domain is registered in your name from the start, hosting and SSL are included for the first year, and the site is yours to move anywhere afterwards. There is no platform you're locked into and no monthly commitment attached to the build.",
  },
  {
    q: "What if my current website is already fine?",
    a: "Send us the URL with the free audit request and we'll say so honestly. If your site is sound underneath — fast, mobile-friendly, on a platform you control — there is no website fee and the work goes into the site you have.",
  },
  {
    q: "Are these sites built for AI search as well as Google?",
    a: "Yes, and the same groundwork serves both: structured data describing the practice, pages written around the questions buyers actually ask, project case studies with real detail, and consistent business information. None of it guarantees an AI assistant will name you, and we don't claim it does; it is the work that makes it possible.",
  },
  {
    q: "Who writes the content?",
    a: "We do. Each project write-up is drafted from a twenty-minute call with you, in your words, and you correct it before anything is published. Nobody in a busy practice has time to write case studies, so we don't ask you to.",
  },
];
