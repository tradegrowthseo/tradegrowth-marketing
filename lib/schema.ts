import type { Graph, Person, ProfessionalService, WebSite } from "schema-dts";

/**
 * Site-wide structured data, emitted once in the root layout as a single
 * @graph so the business and the website are one connected entity rather than
 * two unrelated blobs.
 *
 * ── Service-area rule: DO NOT ADD streetAddress ──────────────────────────
 * TradeGrowth works remotely across the UK; clients are never seen at a
 * business address. Google's guidance is explicit: "If you don't serve
 * customers at your business address, remove your address from your Business
 * Profile." Publishing one here would put a home address into the knowledge
 * graph and into every scraper that reads this file.
 *
 * `schema-dts` type-checks the vocabulary, not the policy — it will happily
 * accept a streetAddress. Nothing else in this project will catch it either,
 * so this comment is the guard. Emit locality, region and country only.
 *
 * Everything below is a verified fact from the live site. Do not add awards,
 * founding dates, review counts or aggregate ratings that aren't substantiated.
 */

const SITE_URL = "https://tradegrowthseo.com";

const ORGANISATION_ID = `${SITE_URL}/#organisation`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

const organisation: ProfessionalService = {
  "@type": "ProfessionalService",
  "@id": ORGANISATION_ID,
  name: "TradeGrowth Marketing",
  url: SITE_URL,
  description:
    "Marketing for UK construction, engineering and design businesses — websites, SEO, AI-search visibility, targeted advertising and enquiry management.",
  logo: `${SITE_URL}/images/tradegrowth-marketing-logo.png`,
  image: `${SITE_URL}/images/tradegrowth-marketing-logo.png`,
  email: "contact@tradegrowthseo.com",
  telephone: "+447985185604",
  // Locality only — see the service-area note above.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Preston",
    addressRegion: "Lancashire",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  // sameAs disambiguates the entity. Only profiles that actually exist.
  sameAs: ["https://www.linkedin.com/company/138514390/"],
  founder: { "@id": FOUNDER_ID },
  knowsAbout: [
    "Marketing for architects",
    "SEO for engineering consultancies",
    "AI-search visibility",
    "Website design for construction businesses",
  ],
};

/**
 * The founder as a distinct entity. Only verified facts — a name, a role and a
 * profile that exists. No invented credentials, qualifications or dates: this
 * is exactly the markup that gets a site into trouble when it is embellished.
 */
const founder: Person = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Bradley Redfern",
  jobTitle: "Founder",
  worksFor: { "@id": ORGANISATION_ID },
  url: `${SITE_URL}/about/`,
  sameAs: ["https://www.linkedin.com/in/bradley-redfern/"],
};

const website: WebSite = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "TradeGrowth Marketing",
  publisher: { "@id": ORGANISATION_ID },
  inLanguage: "en-GB",
};

export const siteSchema: Graph = {
  "@context": "https://schema.org",
  "@graph": [organisation, founder, website],
};
