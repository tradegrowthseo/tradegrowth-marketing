// The disciplines TradeGrowth works with, one page each at /sectors/[slug]/.
//
// WHY THESE EXIST, AND THE RULE THAT KEEPS THEM HONEST. Until 2 Oct 2026 the
// site deliberately had no sector pages: lib/audiences.ts said one strong page
// beats eight shallow ones. Brad asked for a page per discipline, and the
// demand gate supports it where it did not support town pages: "marketing for
// architects" and "marketing for structural engineers" are different searches
// by different buyers, each its own topic, not one page with a word swapped.
//
// The rule: a sector only gets a page if everything below is written for that
// discipline — who appoints it, what that buyer checks, which professional
// bodies matter, what a project page must show, the questions its clients
// ask. If a new entry would mostly repeat another, it does not get added.
// Nothing here promises a ranking, an AI mention or a number of enquiries.
//
// Proof is stated honestly. Three sectors have a live client site; the other
// thirteen say plainly that there is none yet and point at the nearest work.
//
// Professional-body URLs were checked on 2 Oct 2026.

import type { Faq } from "./faqs";

export type SectorGroup = "Design" | "Engineering" | "Surveying & consultancy" | "Construction";
export type SectorTrack = "residential" | "national" | "both";

export interface Sector {
  slug: string;
  /** Plural, as it appears in headings: "Architects". */
  name: string;
  /** With article, for running text: "an architect". */
  singular: string;
  group: SectorGroup;
  /** One line, for the index page and cards. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroSub: string;
  /** Answer first. Two paragraphs. */
  answer: string[];
  takeaways: string[];
  /** Who appoints this discipline, and how the appointment is actually won. */
  winsWork: string[];
  /** What that buyer looks for before making contact. */
  buyerChecks: string[];
  /** What the website and its project pages have to show for this discipline. */
  siteShows: string[];
  track: SectorTrack;
  trackNote: string;
  /** The kind of question this discipline's clients type or ask an assistant. Examples, not measured queries. */
  questions: string[];
  bodies: { name: string; url: string }[];
  /** Slug in lib/websites.ts where we have built a site for this discipline. */
  proofSlug?: string;
  faqs: Faq[];
  related: string[];
}

export const sectors: Sector[] = [
  // ─── DESIGN ─────────────────────────────────────────────────────────
  {
    slug: "architects",
    name: "Architects",
    singular: "an architect",
    group: "Design",
    summary: "Practices working on residential, commercial or mixed-use schemes",
    metaTitle: "Marketing for Architects: Websites, SEO & AI Search",
    metaDescription:
      "Websites, SEO and AI-search visibility for architecture practices. Project-led sites, local search for residential work and credibility for commercial clients. Prices published.",
    heroSub:
      "For an architecture practice the website is the portfolio a prospective client studies before the first call. We build it around the projects, then make it findable for the work and the places you want.",
    answer: [
      "Marketing for architects means showing the right projects to the right client at the moment they are choosing who to approach. We build architecture practices a fast, project-led website, make it visible in search and in AI-assisted search for the kind of work the practice wants, and keep it current each month.",
      "For a practice taking homeowner work that is mostly local: extensions, new builds and conversions in the towns you serve. For a practice working for developers, schools or healthcare clients it is about credibility on lookup, because that work arrives by referral, framework or competition and the site has to confirm the recommendation.",
    ],
    takeaways: [
      "Homeowners search locally for an architect and compare three or four practices on their projects before calling.",
      "Commercial clients arrive by referral and check the site for schemes like theirs, at their scale.",
      "ARB registration and RIBA Chartered status belong where a buyer sees them, not only in the footer.",
    ],
    winsWork: [
      "Residential clients are usually commissioning an architect for the first time. They ask friends, search for an architect in their town, and then look hard at photographs and at whether the practice has done a project like theirs: a rear extension to a 1930s semi, a barn conversion, a replacement dwelling in the Green Belt. Planning record in their own local authority matters to them more than awards.",
      "Developers, contractors and estates teams appoint through relationships, frameworks and competitive fee bids. The name comes first; the website is where they check sector experience, the size of scheme the practice has delivered and who the directors are. A practice with strong work and a thin site loses that check quietly.",
    ],
    buyerChecks: [
      "Completed projects of the same type and scale as theirs, with the brief and the constraints explained",
      "Planning approvals in their local authority, or in comparable settings such as conservation areas",
      "ARB registration, RIBA Chartered Practice status and who will actually run the job",
      "How the process and the fees work, stage by stage, for someone who has not done this before",
    ],
    siteShows: [
      "A project page per scheme: brief, constraints, what the practice did, planning outcome, photographs",
      "Project-type pages a client can recognise themselves in: extensions, new homes, conversions, commercial",
      "The areas the practice takes work in, each backed by projects completed there",
      "The people, their registration and the RIBA work stages in plain English",
    ],
    track: "both",
    trackNote:
      "Most practices sit on the residential track, where local search demand is real. Practices working mainly for developers, education or healthcare clients sit on the national track, where case studies and mentions do the work.",
    questions: [
      "Do I need an architect for a rear extension?",
      "How much does an architect charge for a house extension?",
      "Which architects near me have experience with listed buildings?",
      "What does an architect do at each RIBA stage?",
    ],
    bodies: [
      { name: "RIBA Find an Architect", url: "https://www.architecture.com/find-an-architect" },
      { name: "Architects Registration Board", url: "https://arb.org.uk/" },
    ],
    proofSlug: "lnd-architecture-design",
    faqs: [
      {
        q: "What should an architect's website include?",
        a: "Project pages that explain the brief, the constraints and the outcome rather than showing photographs alone; pages for each type of project you want more of; the areas you work in; and the people, with ARB registration and RIBA status visible. A clear route to an enquiry on every page matters as much as the design.",
      },
      {
        q: "Does SEO work for architects?",
        a: "For residential work, yes: people search for an architect in their town and for specific project types, and a well-structured site with real project pages can be found for them. For commercial work, search volume is low and the site's job is to confirm a referral. In both cases results take months, and nobody can promise a position.",
      },
      {
        q: "How do architects get more of the projects they want?",
        a: "By showing those projects. A practice that wants more new-build homes and fewer small extensions needs new-build case studies at the front of the site and written up in detail. Search engines and AI assistants describe a practice by what its site shows, and so do referred clients.",
      },
    ],
    related: ["interior-designers", "structural-engineers", "planning-consultants", "landscape-architects"],
  },
  {
    slug: "interior-designers",
    name: "Interior Designers",
    singular: "an interior designer",
    group: "Design",
    summary: "Interior design and interior architecture studios, residential and commercial",
    metaTitle: "Marketing for Interior Designers: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for interior design studios. Portfolios that show scope and budget as well as style, for residential and commercial clients.",
    heroSub:
      "An interior design studio is judged on images first and on fit second. We build the site so the photographs do their job and the words tell a client whether their brief and budget suit the way you work.",
    answer: [
      "Marketing for interior designers means getting the right brief through the door, not just more enquiries. We build interior design and interior architecture studios a fast, image-led website that also states scope, sector and budget level plainly, then make it visible in search and AI-assisted search for the work the studio wants.",
      "Residential studios are found locally and on visual platforms, then judged on the site. Commercial studios working on workplace, hospitality or developer show homes are appointed by referral and by architects and agents, and the site has to show comparable schemes with the client named where permitted.",
    ],
    takeaways: [
      "Beautiful photographs attract every kind of enquiry; stated scope and budget attract the right kind.",
      "Commercial work needs its own pages, because a developer does not recognise themselves in a residential portfolio.",
      "BIID membership and named designers answer the question a client is too polite to ask.",
    ],
    winsWork: [
      "A homeowner planning a renovation looks at Instagram, Houzz and Google, shortlists on style, and then visits the websites to see whether the studio takes projects of their size. If the site shows only finished rooms with no word on what the studio did, how long it took or what kind of budget it involved, the wrong clients call and the right ones hesitate.",
      "Developers, hotel operators and workplace clients appoint through architects, agents and previous projects. They look for sector experience, delivery at scale and whether the studio handles FF&E procurement and site coordination as well as concept design. That detail is rarely on a studio's site even when it is the studio's strength.",
    ],
    buyerChecks: [
      "Projects in their sector: residential, hospitality, workplace, retail or developer show homes",
      "What the studio actually delivers: concept only, full design, FF&E procurement, site coordination",
      "An honest signal of the budget level and size of project the studio takes on",
      "BIID membership, the named designers and how the studio works with architects and contractors",
    ],
    siteShows: [
      "Project pages that give the brief, the scope and the studio's role alongside the photographs",
      "Separate residential and commercial sections, each with its own service description",
      "The process from first meeting to installation, with realistic timescales",
      "Images prepared for the web so a portfolio page loads quickly on a phone",
    ],
    track: "both",
    trackNote:
      "Residential studios sit on the residential track, with local search and a Google Business Profile. Studios selling to developers, operators and workplace clients sit on the national track.",
    questions: [
      "How much does an interior designer cost for a whole house?",
      "What is the difference between an interior designer and an interior architect?",
      "Which interior designers near me work on commercial offices?",
      "Do I need an interior designer or an architect for a renovation?",
    ],
    bodies: [{ name: "British Institute of Interior Design", url: "https://biid.org.uk/" }],
    faqs: [
      {
        q: "What should an interior designer's website show besides photographs?",
        a: "The scope of each project and the studio's role in it, the sectors and size of project the studio takes on, the process, and who the designers are. Photographs win attention; the words decide whether the person enquiring is a fit.",
      },
      {
        q: "How do interior designers attract commercial clients online?",
        a: "By giving commercial work its own pages. Developers, operators and workplace clients need to see schemes like theirs described in their terms: sector, size, programme and the studio's part in delivery. A residential portfolio with one office project in it does not do that.",
      },
      {
        q: "Is Instagram enough for an interior design studio?",
        a: "It is good for being discovered and poor for being chosen. A client who likes the images still visits the website to check what the studio does, where it works and whether it takes projects like theirs. Search engines and AI assistants also read the website, not the feed.",
      },
    ],
    related: ["architects", "specialist-contractors", "landscape-architects"],
  },
  {
    slug: "landscape-architects",
    name: "Landscape Architects",
    singular: "a landscape architect",
    group: "Design",
    summary: "Landscape architecture, public realm and urban design practices",
    metaTitle: "Marketing for Landscape Architects: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for landscape architecture practices: public realm, development landscapes, LVIA and private gardens, shown as written case studies.",
    heroSub:
      "Landscape practices do work that photographs well years after the appointment ended. We build the site so each scheme is written up, dated and findable, for the planners, architects and developers who appoint you.",
    answer: [
      "Marketing for landscape architects means making completed schemes and technical services visible to the people who commission them. We build landscape architecture practices a project-led website, write up the schemes as proper case studies, and make the practice findable in search and AI-assisted search for its specialisms.",
      "Most landscape work is appointed by architects, developers, planning consultants and local authorities, often to satisfy a planning requirement. A smaller share is private garden design commissioned by homeowners. The two audiences need different pages, and the technical services such as landscape and visual impact assessment need explaining in the terms a developer searches for.",
    ],
    takeaways: [
      "Development landscape work is won through architects and planning consultants, so the site must speak to them.",
      "Technical services such as LVIA and landscape strategies for planning deserve their own pages.",
      "Awards and completed public-realm schemes belong on project pages, not buried in a news feed.",
    ],
    winsWork: [
      "On development schemes the landscape architect is usually brought in by the architect or the planning consultant, or directly by a developer who needs a landscape strategy, a planting plan or a visual impact assessment to support an application. They choose a practice they have used before or one a colleague names, then check its experience of similar sites and of the local planning authority.",
      "Public-realm and education work comes through frameworks, tenders and competitions, where the practice's track record is scored. Private garden clients behave like any residential buyer: they search locally, look at images and want to know the process and the cost.",
    ],
    buyerChecks: [
      "Completed schemes of the same type: housing, public realm, schools, healthcare or private gardens",
      "Planning-stage services: landscape and visual impact assessment, landscape strategies, biodiversity net gain input",
      "Chartered status with the Landscape Institute and who leads each project",
      "Experience with the local planning authority and with schemes that reached completion",
    ],
    siteShows: [
      "Case studies with the client, the brief, the constraints, the date and what was built",
      "A page for each technical service, explaining when a planning application needs it",
      "Sector pages for development, public realm and education work",
      "Private garden design kept distinct, with its own process and enquiry route",
    ],
    track: "both",
    trackNote:
      "Practices working for developers, architects and authorities sit on the national track. Garden design for private clients sits on the residential track.",
    questions: [
      "When does a planning application need a landscape and visual impact assessment?",
      "What does a landscape architect do on a housing development?",
      "Which landscape architects have designed public squares?",
      "How much does a garden designer charge?",
    ],
    bodies: [{ name: "Landscape Institute", url: "https://www.landscapeinstitute.org/" }],
    faqs: [
      {
        q: "How do landscape architects get appointed on development projects?",
        a: "Mostly through the architect or planning consultant on the scheme, or directly by a developer who needs landscape input for planning. That makes the practice's reputation with those professionals the main channel, and the website the place they confirm its experience before putting the name forward.",
      },
      {
        q: "Should a landscape practice have separate pages for LVIA and planning services?",
        a: "Yes. A developer or planning consultant looking for a landscape and visual impact assessment is asking a different question from a client who wants a public square designed. A page that explains the service, when it is required and what the practice has delivered answers that question directly.",
      },
      {
        q: "Does a landscape architect need to rank on Google?",
        a: "For private garden work, local visibility helps. For development and public-sector work the search volume is small, and the more useful aim is to be credible when looked up and to be described accurately when someone asks an AI assistant who does this work in the region.",
      },
    ],
    related: ["architects", "planning-consultants", "civil-engineers"],
  },

  // ─── ENGINEERING ────────────────────────────────────────────────────
  {
    slug: "mep-engineers",
    name: "MEP & Building Services Engineers",
    singular: "an MEP consultant",
    group: "Engineering",
    summary: "Mechanical, electrical and public health design consultancies",
    metaTitle: "Marketing for MEP & Building Services Engineers",
    metaDescription:
      "Websites, SEO and AI-search visibility for MEP and building services consultancies. Sector case studies and chartered credentials set out for the architects and contractors who appoint you.",
    heroSub:
      "An M&E consultancy is appointed by other professionals who compare it against a shortlist. We set out your sectors, your projects and your chartered engineers so that comparison goes your way.",
    answer: [
      "Marketing for MEP and building services engineers means making technical capability legible to the architects, contractors and developers who appoint you. We build building services consultancies a website organised around sectors and projects, put the chartered credentials where a professional buyer looks, and make the practice findable in search and AI-assisted search.",
      "This is a referral-led discipline with little search volume. The work is credibility on lookup: when an architect names you to a client, or a contractor needs an M&E designer for a design-and-build bid, the site has to show relevant sector experience quickly and in writing.",
    ],
    takeaways: [
      "Appointments come from architects, contractors and estates teams, not from the public.",
      "Sector experience, such as schools, healthcare or residential towers, is what gets a consultancy shortlisted.",
      "Case studies listed as bare titles are the most common gap on building services websites.",
    ],
    winsWork: [
      "A building services consultant is usually appointed by the architect or project manager assembling a design team, by a contractor pricing a design-and-build scheme, or by an estates team with a framework. They start with firms they know, then widen the list by asking colleagues. The decision turns on whether the consultancy has designed that building type before, at that scale, under that procurement route.",
      "Because the buyer is technical, they read the site differently from a consumer. They look for named chartered engineers, CIBSE membership, software and BIM capability, and specific projects with the client, the value and the consultancy's scope. A homepage that says only that the firm provides mechanical and electrical design gives them nothing to work with.",
    ],
    buyerChecks: [
      "Projects in their sector with the client, the scale and the consultancy's scope stated",
      "Named engineers with CEng and CIBSE or IET membership",
      "Capability in the areas now asked for: Part L compliance, low-carbon heating, overheating, whole-life carbon",
      "BIM and Revit delivery, professional indemnity cover and experience of design-and-build",
    ],
    siteShows: [
      "A sector page for each building type the consultancy wants, backed by written case studies",
      "Case studies that state the brief, the constraint and the engineering decision, not just the project name",
      "A team page with credentials, because a referred buyer looks for the chartered engineer",
      "Service pages for specialisms such as energy strategy or condition surveys, in the client's language",
    ],
    track: "national",
    trackNote:
      "The national track: case studies, mentions from architects and contractors, and no ads, because there is almost no search demand to buy.",
    questions: [
      "Which M&E consultants have experience of school refurbishments?",
      "What does a building services engineer do on a residential scheme?",
      "Who can produce a Part L energy strategy for planning?",
      "Which MEP consultancies work on design-and-build contracts?",
    ],
    bodies: [
      { name: "CIBSE", url: "https://www.cibse.org/" },
      { name: "Engineering Council", url: "https://www.engc.org.uk/" },
    ],
    proofSlug: "jbse-consulting-engineers",
    faqs: [
      {
        q: "How do building services consultancies win new clients?",
        a: "By being named by an architect, contractor or project manager, and then by passing a check of their sector experience. Marketing cannot replace the relationship, but it decides whether the referral survives that check, and whether the consultancy is described accurately when someone asks an AI assistant who does this work.",
      },
      {
        q: "Is SEO worth it for an MEP consultancy?",
        a: "Not in the sense of chasing traffic; very few people search for an M&E consultant. It is worth having a technically sound, well-structured site with written case studies, because that is what a referred buyer reads and what search engines and AI assistants draw on when the firm is looked up by name or by specialism.",
      },
      {
        q: "What makes a good case study for an M&E project?",
        a: "The building type and scale, the client and the procurement route where they can be named, the constraint that made it interesting, the engineering decision taken and the outcome. We draft these from a short call with the engineer and they are approved before publishing; no figure or standard is changed without the engineer's word.",
      },
    ],
    related: ["ev-electrical-design-consultants", "structural-engineers", "energy-sustainability-consultants", "fire-engineers"],
  },
  {
    slug: "structural-engineers",
    name: "Structural Engineers",
    singular: "a structural engineer",
    group: "Engineering",
    summary: "From domestic alterations to full frame design",
    metaTitle: "Marketing for Structural Engineers: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for structural engineering consultancies: findable locally for homeowner work, credible on lookup for architects and contractors.",
    heroSub:
      "Structural engineers serve two buyers at once: a homeowner who needs calculations for a wall, and an architect who needs a frame designed. We build one site that speaks to both without confusing either.",
    answer: [
      "Marketing for structural engineers means being findable by homeowners and builders who need calculations now, and credible to architects and contractors choosing an engineer for a larger scheme. We build structural engineering practices a website that separates those two audiences, shows completed projects with the engineer named, and is visible in search and AI-assisted search.",
      "Domestic work has real local search demand: people look for a structural engineer in their town when a builder or building control asks for calculations. Commercial and development work is appointed by architects and contractors on reputation, and the site's job there is to show project experience and chartered status.",
    ],
    takeaways: [
      "Homeowners search locally and want to know turnaround, cost and whether a site visit is included.",
      "Architects and contractors check for chartered engineers and projects like theirs.",
      "Naming the engineer and their IStructE or ICE membership is the simplest trust signal and is often missing.",
    ],
    winsWork: [
      "A homeowner removing a load-bearing wall, converting a loft or building an extension is told they need a structural engineer by their builder, architect or building control. They search for one nearby, compare a few and call the practice that makes clear what it does, how quickly and roughly what it costs. Reviews and a visible local presence carry weight because they have no way to judge the engineering.",
      "On larger schemes the engineer is appointed by the architect, the contractor or a developer who has worked with the practice before. New relationships start with a recommendation and a look at the website for comparable structures: steel and concrete frames, basements, timber, refurbishment of existing buildings. A projects page with three entries and no descriptions undersells decades of work.",
    ],
    buyerChecks: [
      "For domestic work: what is included, how long it takes and whether the engineer visits",
      "Chartered status: CEng with MIStructE or MICE, and the engineer's name",
      "Projects of the same type, with the structure and the constraint described",
      "The areas covered, and for commercial work the sectors and scale delivered",
    ],
    siteShows: [
      "Clear service pages for the common domestic jobs: wall removal, loft conversions, extensions, structural surveys",
      "A separate commercial and development section with written project pages",
      "The engineers by name with their qualifications and professional membership",
      "The towns the practice actually works in, each supported by completed jobs",
    ],
    track: "both",
    trackNote:
      "Practices with a strong domestic workload sit on the residential track, where a Google Business Profile and reviews matter. Practices working mainly for architects and contractors sit on the national track.",
    questions: [
      "Do I need a structural engineer to remove a load-bearing wall?",
      "How much do structural calculations for a loft conversion cost?",
      "Which structural engineers near me can do a site visit this week?",
      "Who designs steel frames for commercial buildings in my area?",
    ],
    bodies: [
      { name: "Institution of Structural Engineers", url: "https://www.istructe.org/" },
      { name: "Institution of Civil Engineers", url: "https://www.ice.org.uk/" },
    ],
    faqs: [
      {
        q: "How do homeowners find a structural engineer?",
        a: "Usually by searching for one in their town after a builder, architect or building control tells them calculations are needed. They compare a handful and choose the one that explains the service clearly, shows reviews and looks local. A Google Business Profile and plain service pages do most of the work.",
      },
      {
        q: "Should a structural engineer's website target homeowners or architects?",
        a: "Both, on separate pages. A homeowner wants a plain answer about a wall or a loft; an architect wants evidence of frame design and comparable schemes. One page written for both ends up serving neither, so the site is organised into a domestic route and a professional route.",
      },
      {
        q: "What proof should a structural engineering practice publish?",
        a: "Completed projects with the structural problem and the solution described, the engineers' names and chartered membership, and for domestic work, reviews from past clients. A claim such as thousands of projects completed is far weaker than a dozen that are actually shown.",
      },
    ],
    related: ["civil-engineers", "architects", "mep-engineers", "building-surveyors"],
  },
  {
    slug: "civil-engineers",
    name: "Civil Engineers",
    singular: "a civil engineer",
    group: "Engineering",
    summary: "Drainage, highways, flood risk and infrastructure design consultancies",
    metaTitle: "Marketing for Civil Engineering Consultancies",
    metaDescription:
      "Websites, SEO and AI-search visibility for civil engineering consultancies: drainage strategies, flood risk assessments and highways design explained for the developers who need them.",
    heroSub:
      "Civil engineering consultancies are appointed to unlock a site: drainage, flood risk, access. We set out those services in the terms a developer or planning consultant searches for, with the schemes that prove them.",
    answer: [
      "Marketing for civil engineering consultancies means explaining technical services in the language of the people who need them and showing the sites those services unlocked. We build civil engineering practices a website with a page for each service, written case studies, and visibility in search and AI-assisted search.",
      "Unlike most engineering disciplines, civil engineering has services that people do search for by name, because a planning authority has asked for them: a flood risk assessment, a drainage strategy, a transport statement. Each of those is a question with a real answer, and a consultancy that answers it clearly can be found for it.",
    ],
    takeaways: [
      "Planning-driven services such as flood risk assessments and drainage strategies have genuine search demand.",
      "Developers and planning consultants appoint on turnaround, local authority experience and approvals achieved.",
      "Each service needs its own page that says when it is required and what the consultancy delivers.",
    ],
    winsWork: [
      "A developer, housebuilder or planning consultant needs a civil engineer when an application or a site purchase depends on drainage, flood risk or access. They often have a regular consultant; when they do not, or when the regular one is busy, they ask around and search for the specific report they have been told to provide. Speed of response and familiarity with the lead local flood authority and the highway authority decide the appointment.",
      "Larger infrastructure and adoption work, such as agreements with the highway authority or the water company, is won on track record and relationships with contractors and developers. Here the site needs written examples of schemes taken through technical approval, because that is the risk the client is trying to manage.",
    ],
    buyerChecks: [
      "The specific service they have been asked for, explained with what it includes and how long it takes",
      "Experience with their local planning, highway and flood authorities",
      "Schemes of similar size taken through to approval or adoption",
      "Chartered engineers by name, with ICE membership",
    ],
    siteShows: [
      "A page per service: flood risk assessments, drainage and SuDS design, highways and access, levels and earthworks",
      "For each, when a planning application needs it and what the client receives",
      "Case studies that name the constraint and the approval obtained",
      "The engineers and the authorities the practice regularly works with",
    ],
    track: "national",
    trackNote:
      "The national track, with service pages written around the reports planning authorities ask for. That question-led content is where civil engineering differs from other consultancies.",
    questions: [
      "When is a flood risk assessment required for planning?",
      "What is a SuDS drainage strategy and who can produce one?",
      "Who designs highway access for a new housing development?",
      "How long does a drainage strategy take?",
    ],
    bodies: [{ name: "Institution of Civil Engineers", url: "https://www.ice.org.uk/" }],
    faqs: [
      {
        q: "Can a civil engineering consultancy win work through search?",
        a: "More than most consultancies can, because developers and agents search for the specific reports a planning authority has requested. A page that explains a flood risk assessment or drainage strategy clearly, and shows examples, answers that search. It still takes months to be found, and no position is promised.",
      },
      {
        q: "What should a flood risk assessment page say?",
        a: "When one is required, what it contains, how long it takes, what information the client needs to provide, and examples of sites where the consultancy's assessment supported an approval. Written answer-first, it serves a worried developer and is also the kind of page an AI assistant quotes.",
      },
      {
        q: "Do civil engineers need case studies if the work is mostly reports?",
        a: "Yes. The client is buying a route through an approval process, so the evidence is the site, the constraint and the outcome: a flood zone site that gained consent, an access that the highway authority accepted. Those are short to write and far more persuasive than a list of services.",
      },
    ],
    related: ["structural-engineers", "planning-consultants", "landscape-architects", "main-contractors"],
  },
  {
    slug: "ev-electrical-design-consultants",
    name: "Electrical & EV Infrastructure Design Consultants",
    singular: "an electrical design consultant",
    group: "Engineering",
    summary: "Specialist electrical design and EV charging infrastructure consultancies",
    metaTitle: "Marketing for Electrical & EV Charging Design Consultants",
    metaDescription:
      "Websites, SEO and AI-search visibility for electrical and EV infrastructure design consultancies. Built from our work with EV Design: project pages, credentials and technical articles.",
    heroSub:
      "Specialist electrical and EV charging design is a small, technical market sold on credibility. This is the sector where we have the most to show, because we built the site and the search presence for one.",
    answer: [
      "Marketing for electrical and EV infrastructure design consultants means being credible to developers, fleet operators and local authorities choosing a designer for a high-value scheme, and being the name an AI assistant gives when asked who does this work. We build these consultancies a site around individual project pages, the engineer's credentials and technical articles in the engineer's own words.",
      "The market is national and small. There are a handful of searches with commercial intent, almost none tied to a town, and long sales cycles. The realistic aim is to be found for the searches that exist, to be described accurately by AI assistants, and to give a referred buyer evidence. We say that at the start rather than promising traffic.",
    ],
    takeaways: [
      "EV charging design is bought by developers, fleet operators, local authorities and charge-point operators, usually by referral.",
      "Individual project pages and technical articles by a chartered engineer are the strongest material in this niche.",
      "We built and optimise the site for an EV charging design consultancy, and its results are published.",
    ],
    winsWork: [
      "A developer, fleet operator or local authority planning charging infrastructure needs an independent designer for the electrical design, the grid connection and the site layout. They find one through contractors, charge-point operators and other consultants, and then look the practice up. What they need to see is that the consultancy is a designer rather than an installer, that the engineer is chartered, and that it has delivered schemes of their type and power level.",
      "Because the subject is technical and still new to many clients, explanatory content carries unusual weight. An article that sets out a real engineering problem and how it was resolved does the job of a brochure and is also the material AI assistants draw on when someone asks a technical question.",
    ],
    buyerChecks: [
      "Independence: design consultancy, not an installer or equipment supplier",
      "The engineer's chartered status and professional memberships",
      "Completed schemes by type: commercial, fleet, public sector, high-power and eHGV charging",
      "Evidence of handling grid connection and planning questions, not only layouts",
    ],
    siteShows: [
      "A page per project: the constraint, the engineering decision and the outcome",
      "A service page for each kind of scheme, written for the client who commissions it",
      "Technical insight articles under the engineer's name and credentials",
      "Structured data describing the consultancy, its services and the engineer",
    ],
    track: "national",
    trackNote:
      "The national track. There is no town-level demand in this niche, so no area pages and no ads; the levers are project pages, technical articles and mentions from partners.",
    questions: [
      "Who designs EV charging infrastructure for a commercial depot?",
      "What does an EV charging consultant do?",
      "Do I need an independent designer or can the installer design the scheme?",
      "Who can design high-power charging for electric HGVs?",
    ],
    bodies: [
      { name: "Institution of Engineering and Technology", url: "https://www.theiet.org/" },
      { name: "CIBSE", url: "https://www.cibse.org/" },
    ],
    proofSlug: "ev-design",
    faqs: [
      {
        q: "Is there enough search demand to market an EV charging design consultancy?",
        a: "Very little, and we say so. There are a few commercial searches nationally and none worth chasing by town. The work is to own those few, to be cited by AI assistants on technical questions, and to be convincing when a referred client looks the consultancy up. That is a different job from generating traffic.",
      },
      {
        q: "What content works for a technical engineering consultancy?",
        a: "Individual project pages and articles written from the engineer's real experience: the problem, the standard that applied, the decision and the result. We restructure and present that material; we never change a figure or a technical claim without the engineer's word.",
      },
      {
        q: "What results have you had for an EV design consultancy?",
        a: "For EV Design in Burnley, live searches show the site first on Google locally, the business named in Google's AI Overview as a North West specialist, and described accurately by ChatGPT. Those are visibility results, shown as screenshots on our results page. They are not enquiry or revenue figures.",
      },
    ],
    related: ["mep-engineers", "energy-sustainability-consultants", "civil-engineers"],
  },
  {
    slug: "fire-engineers",
    name: "Fire Engineers",
    singular: "a fire engineer",
    group: "Engineering",
    summary: "Fire engineering and fire safety consultancies",
    metaTitle: "Marketing for Fire Engineers & Fire Safety Consultants",
    metaDescription:
      "Websites, SEO and AI-search visibility for fire engineering consultancies: fire strategies, Building Safety Act work and competence set out for architects, developers and building owners.",
    heroSub:
      "Since the Building Safety Act, more clients need a fire engineer and fewer know how to choose one. We set out your competence, your services and your schemes so that the choice is easier to make.",
    answer: [
      "Marketing for fire engineers means demonstrating competence to architects, developers and building owners at a time when they are under real pressure to appoint the right consultant. We build fire engineering consultancies a website that explains each service plainly, shows completed schemes and names the engineers and their qualifications, and we make it visible in search and AI-assisted search.",
      "Demand has grown and so has scrutiny. A client needs to know what a fire strategy covers, when a higher-risk building requires more, and whether the consultancy has done it before. Clear, accurate explanation is both the marketing and a mark of the competence the client is looking for.",
    ],
    takeaways: [
      "Clients are architects, developers, contractors and building owners, many dealing with new duties for the first time.",
      "Competence and named, qualified engineers matter more here than in almost any other discipline.",
      "Plain explanations of fire strategies and higher-risk building requirements answer questions clients are actively asking.",
    ],
    winsWork: [
      "On new schemes the fire engineer is appointed by the architect, developer or design-and-build contractor, increasingly early, because the fire strategy shapes the design and the regulatory submissions. They look for a consultancy with experience of the building type and height, and for engineers whose qualifications they can state to a regulator.",
      "For existing buildings the client is an owner, managing agent or housing provider who needs an assessment or remediation advice. They are often unfamiliar with the discipline and are searching for explanation as much as for a supplier. A consultancy that explains what is required, without overstating, earns that enquiry.",
    ],
    buyerChecks: [
      "The engineers' qualifications and membership of the Institution of Fire Engineers",
      "Experience of their building type: residential towers, healthcare, education, commercial, heritage",
      "Clear scope for each service: fire strategies, external wall assessments, design review, regulatory submissions",
      "Professional indemnity cover and independence from product suppliers",
    ],
    siteShows: [
      "A page per service, stating what it covers and when a project needs it",
      "Named engineers with qualifications and professional membership",
      "Case studies by building type, describing the problem and the approach taken",
      "Explanatory articles on the current regulatory requirements, dated and kept up to date",
    ],
    track: "national",
    trackNote:
      "The national track. The buyers are professionals and building owners across the country, and the lever is explanatory content and case studies rather than local search.",
    questions: [
      "When does a building need a fire strategy?",
      "What is a higher-risk building under the Building Safety Act?",
      "Who can carry out an external wall fire assessment?",
      "What does a fire engineer do on a residential scheme?",
    ],
    bodies: [
      { name: "Institution of Fire Engineers", url: "https://www.ife.org.uk/" },
      { name: "Approved Documents (GOV.UK)", url: "https://www.gov.uk/government/collections/approved-documents" },
    ],
    faqs: [
      {
        q: "How do fire engineering consultancies attract clients?",
        a: "Through architects, developers and contractors who have worked with them, and increasingly through clients searching for explanation of what they now have to do. A site that sets out the services accurately and names qualified engineers serves both routes.",
      },
      {
        q: "What should a fire engineer's website avoid?",
        a: "Vague reassurance and anything that reads as a guarantee of compliance. The client and, later, a regulator may read it. We keep the language precise, restructure the consultancy's own technical content rather than rewriting it, and change no standard or figure without the engineer's word.",
      },
      {
        q: "Why does explanatory content matter so much in fire engineering?",
        a: "Because the buyers are often meeting their duties for the first time and are searching for answers. A dated, accurate article on when a fire strategy is required is useful to them, is the kind of page AI assistants quote, and shows the consultancy understands the subject.",
      },
    ],
    related: ["mep-engineers", "building-surveyors", "architects", "acoustic-consultants"],
  },

  // ─── SURVEYING & CONSULTANCY ────────────────────────────────────────
  {
    slug: "building-surveyors",
    name: "Building Surveyors",
    singular: "a building surveyor",
    group: "Surveying & consultancy",
    summary: "Chartered building surveyors and building consultancies",
    metaTitle: "Marketing for Building Surveyors: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for chartered building surveyors: local search for home surveys and party wall work, credibility for commercial and project instructions.",
    heroSub:
      "Building surveyors have two very different customers: a home buyer who needs a survey this month, and a property professional instructing on dilapidations or a refurbishment. We build for both.",
    answer: [
      "Marketing for building surveyors means being found by home buyers and owners searching locally, and being credible to the agents, solicitors and property managers who instruct on commercial work. We build chartered building surveying practices a website with clear service pages, worked examples and visible RICS status, and make it findable in search and AI-assisted search.",
      "Residential surveying has strong local search demand and a short decision time: someone buying a house searches, compares fees and turnaround, and books. Commercial and project work, such as dilapidations, contract administration and defect diagnosis, is won by referral and repeat instruction, and the site has to show experience by building type.",
    ],
    takeaways: [
      "Home survey and party wall work is found through local search, where reviews and clear fees decide.",
      "Commercial instructions come from agents, solicitors and property managers who check sector experience.",
      "Most surveying sites list services well and show almost no worked examples.",
    ],
    winsWork: [
      "A home buyer told to get a survey searches for a surveyor in the area, usually on a phone, and wants to know which level of survey they need, what it costs and how soon it can be done. A neighbour served with a party wall notice does the same. The practice that explains the options plainly and shows it is local, regulated and well reviewed gets the call.",
      "On the commercial side, landlords, tenants, managing agents and solicitors instruct a surveyor for dilapidations, pre-acquisition surveys, defect analysis and project management of refurbishments. They choose on reputation and prior instructions, then check that the practice has handled their building type and that the surveyor is chartered.",
    ],
    buyerChecks: [
      "RICS regulation and the chartered surveyors by name",
      "For home surveys: the levels explained, indicative fees and turnaround",
      "For commercial work: experience by building type and by instruction, such as dilapidations or contract administration",
      "The area covered, and reviews from past clients",
    ],
    siteShows: [
      "A page per service a buyer searches for: home surveys by level, party wall, defect diagnosis, dilapidations",
      "Worked examples: the building, the problem found and what it meant for the client",
      "The surveyors, their RICS status and specialisms",
      "A Google Business Profile and consistent details in the directories that matter, including the RICS firm listing",
    ],
    track: "both",
    trackNote:
      "Practices with home survey and party wall work sit on the residential track. Practices working mainly on commercial instructions and projects sit on the national track.",
    questions: [
      "What is the difference between a Level 2 and a Level 3 survey?",
      "How much does a building survey cost?",
      "Do I need a party wall surveyor for a loft conversion?",
      "Who can act for a tenant on a dilapidations claim?",
    ],
    bodies: [{ name: "RICS", url: "https://www.rics.org/" }],
    faqs: [
      {
        q: "How do building surveyors get residential enquiries?",
        a: "Almost entirely through local search and recommendation at the point someone is buying or building. A complete Google Business Profile, reviews, and service pages that explain the survey levels and fees clearly are what turn that search into a booking.",
      },
      {
        q: "What should a chartered surveyor's website show for commercial work?",
        a: "Experience by instruction type and building type, with short worked examples: the property, the issue and the outcome for the client. A property manager or solicitor reading the site is checking that the practice has done this before, not reading about what a dilapidations survey is.",
      },
      {
        q: "Do directory listings still matter for surveyors?",
        a: "The ones a client or search engine trusts do: the RICS firm listing and a Google Business Profile first. What matters is that the name, address format and phone number are identical everywhere, because inconsistent details make a business harder for search engines and AI assistants to identify.",
      },
    ],
    related: ["quantity-surveyors", "structural-engineers", "project-managers", "fire-engineers"],
  },
  {
    slug: "quantity-surveyors",
    name: "Quantity Surveyors",
    singular: "a quantity surveyor",
    group: "Surveying & consultancy",
    summary: "Independent quantity surveying and cost consultancy practices",
    metaTitle: "Marketing for Quantity Surveyors & Cost Consultants",
    metaDescription:
      "Websites, SEO and AI-search visibility for quantity surveyors and cost consultants: services explained for developers and self-builders, with schemes and outcomes shown.",
    heroSub:
      "A quantity surveyor is hired to control risk and cost on someone else's money. We set out what you do at each stage and the schemes you have done it on, for the developers and clients who appoint you.",
    answer: [
      "Marketing for quantity surveyors means explaining cost consultancy to clients who know they need it but not always what to ask for, and showing the schemes where it made a difference. We build quantity surveying and cost consultancy practices a website with a page for each service, written project examples, and visibility in search and AI-assisted search.",
      "Clients range from developers and housing associations to contractors and self-builders. Most appointments follow a recommendation, but there is real search for specific services: cost plans, bills of quantities, employer's agent and bank monitoring. A practice that explains those well can be found for them.",
    ],
    takeaways: [
      "Developers and funders appoint on track record at their scheme size; self-builders search for help with costs.",
      "Each service, from cost planning to employer's agent, is a separate question a client asks.",
      "Portfolios with placeholder images and one-line descriptions are common and undersell the practice.",
    ],
    winsWork: [
      "A developer or housing provider appoints a quantity surveyor at feasibility or tender stage, usually one they have used or one recommended by their architect, lender or project manager. They look for experience of schemes at their value and of their procurement route, and for a named chartered surveyor who will run the commission.",
      "Smaller clients, such as self-builders and small developers, often come to the discipline cold. They search for what a quantity surveyor does, what a cost plan costs and whether they need one, and choose a practice that explains it without jargon. Contractors, meanwhile, buy quantity surveying support for tenders and final accounts on a different basis again.",
    ],
    buyerChecks: [
      "RICS regulation and the chartered surveyors who will do the work",
      "Schemes of similar value and type, with the service provided and the outcome",
      "Clear descriptions of each service and the stage at which it is used",
      "For lenders and funders: monitoring experience and independence",
    ],
    siteShows: [
      "A page per service: cost planning, bills of quantities, tendering, contract administration, employer's agent, monitoring",
      "Project examples with the scheme, the value band, the service and what it achieved",
      "Separate routes for developers, contractors and private clients",
      "The surveyors, their RICS status and the sectors they work in",
    ],
    track: "national",
    trackNote:
      "The national track, with question-led service pages. A practice with a meaningful self-build workload can add local visibility for that audience.",
    questions: [
      "What does a quantity surveyor do on a residential development?",
      "How much does a cost plan cost?",
      "Do I need a quantity surveyor for a self-build?",
      "What is an employer's agent?",
    ],
    bodies: [{ name: "RICS", url: "https://www.rics.org/" }],
    faqs: [
      {
        q: "How do quantity surveying practices win new clients?",
        a: "Mainly by recommendation from architects, project managers, lenders and past clients, with the website checked before first contact. A smaller but real share comes from clients searching for a specific service, which is why each service needs a page that answers the question directly.",
      },
      {
        q: "What makes a good project example for a cost consultancy?",
        a: "The type and value band of the scheme, the service provided, the risk or cost problem and what the practice did about it. Client names help where permitted; where they are not, the page says so rather than inventing detail.",
      },
      {
        q: "Is content marketing worth it for a quantity surveyor?",
        a: "A small amount of the right content is. Clear explanations of what each service is and when it is needed answer real questions and are what AI assistants quote. A steady stream of general construction-industry posts is not, and dilutes a site that should be about cost consultancy.",
      },
    ],
    related: ["building-surveyors", "project-managers", "main-contractors"],
  },
  {
    slug: "planning-consultants",
    name: "Planning Consultants",
    singular: "a planning consultant",
    group: "Surveying & consultancy",
    summary: "Chartered town planning consultancies",
    metaTitle: "Marketing for Planning Consultants: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for town planning consultancies: approvals shown as case studies, services explained for homeowners, landowners and developers.",
    heroSub:
      "A planning consultancy's record is public but scattered across council websites. We bring it onto your own site as case studies, and explain your services to the three very different clients who need them.",
    answer: [
      "Marketing for planning consultants means putting approvals and appeal successes where a prospective client can see them, and explaining planning in terms each kind of client understands. We build town planning consultancies a website with written case studies, service pages by client type, and visibility in search and AI-assisted search.",
      "Planning is one of the few consultancy disciplines people actively search for, often at a moment of difficulty: a refusal, an enforcement notice, a site that needs promoting. Homeowners, landowners and developers ask different questions, and a consultancy that answers each clearly, with examples from the relevant local authority, is well placed to be found.",
    ],
    takeaways: [
      "People search for planning help when something has gone wrong or a site needs unlocking.",
      "Approvals in the client's own local authority are the most persuasive evidence a consultancy has.",
      "Homeowners, landowners and developers need separate pages; they are not the same buyer.",
    ],
    winsWork: [
      "A homeowner refused permission, a farmer wanting to convert a barn, a landowner hoping to promote a site: each goes looking for a planning consultant, often after being told to by an architect or solicitor. They search with the name of their council or the type of application, and they want to know whether the consultancy has succeeded with a case like theirs in that authority.",
      "Developers and housebuilders appoint on relationships and track record, particularly with strategic land and appeals. They check the consultancy's experience of the local plan process, of similar schemes and of inquiry work, and they notice whether the case studies are recent.",
    ],
    buyerChecks: [
      "Approvals and appeal successes for cases like theirs, ideally in their local authority",
      "RTPI chartered status and the planners by name",
      "The services relevant to them: applications, appeals, enforcement, land promotion, certificates of lawfulness",
      "How fees work and what the first conversation costs",
    ],
    siteShows: [
      "Case studies with the site, the planning problem, the authority and the decision, dated",
      "Service pages for each client type: householder, landowner and rural, developer and strategic land",
      "Pages for the difficult situations people search for: refusals, appeals, enforcement, Green Belt",
      "The planners, their RTPI membership and the authorities they know well",
    ],
    track: "both",
    trackNote:
      "Consultancies with householder and rural clients sit on the residential track, where local search demand is real. Consultancies working for developers and land promoters sit on the national track.",
    questions: [
      "What can I do if my planning application is refused?",
      "Do I need a planning consultant for a barn conversion?",
      "How do I get planning permission in the Green Belt?",
      "Which planning consultants handle appeals in my area?",
    ],
    bodies: [{ name: "Royal Town Planning Institute", url: "https://www.rtpi.org.uk/" }],
    faqs: [
      {
        q: "How do planning consultants get found online?",
        a: "By answering the questions people ask when they need planning help, on pages written around those situations, and by showing approvals in the relevant local authorities. Planning has more genuine search demand than most consultancy work, but it still takes months for a page to be found and no ranking is promised.",
      },
      {
        q: "Should case studies name the local authority?",
        a: "Yes, wherever the client allows the site to be identified. Planning decisions are public, and a prospective client's first question is whether you have succeeded with their council. A case study that names the authority, the issue and the outcome answers it.",
      },
      {
        q: "What is the most common weakness on planning consultancy websites?",
        a: "Case studies that are out of date or missing. A consultancy can have years of recent approvals and a website whose projects section stopped being updated long ago. Bringing that record onto the site is usually the first job.",
      },
    ],
    related: ["architects", "civil-engineers", "landscape-architects", "acoustic-consultants"],
  },
  {
    slug: "energy-sustainability-consultants",
    name: "Energy & Sustainability Consultants",
    singular: "an energy consultant",
    group: "Surveying & consultancy",
    summary: "SAP, SBEM, Part L, overheating and sustainability assessment consultancies",
    metaTitle: "Marketing for Energy & Sustainability Consultants",
    metaDescription:
      "Websites, SEO and AI-search visibility for energy and sustainability consultancies: SAP, SBEM, Part L and BREEAM services explained, with the schemes behind them shown.",
    heroSub:
      "Energy assessors are found by people searching for an acronym they have just been told they need. We give each service a page that answers the question, and show the schemes behind it.",
    answer: [
      "Marketing for energy and sustainability consultants means being the clear answer when an architect, developer or builder searches for the assessment their project needs. We build energy consultancies a website with a page for each assessment, case studies showing the developments they supported, and visibility in search and AI-assisted search.",
      "This discipline has unusually direct search demand. Building regulations and planning conditions require named assessments, and clients search for them by name. The consultancies that explain each one plainly, state turnaround and show real projects are the ones that get the enquiry.",
    ],
    takeaways: [
      "Clients search for assessments by name: SAP calculations, SBEM, overheating, air tightness, BREEAM.",
      "Architects and housebuilders become repeat clients, so the first enquiry matters more than its fee.",
      "Many energy consultancy sites name housebuilder clients but show no project at all.",
    ],
    winsWork: [
      "An architect, developer or builder needs an energy assessment at design stage and again at completion. Regular clients email their usual assessor. New clients search for the specific calculation or test, compare a few consultancies on price, turnaround and clarity, and pick one. If the first job goes well they come back for every scheme, which makes these searches valuable.",
      "Larger developments and commercial schemes need broader advice: energy strategies for planning, overheating analysis, sustainability statements and environmental assessment methods. Those appointments come from architects, planning consultants and M&E engineers, who look for accreditation and for evidence the consultancy has supported schemes through planning.",
    ],
    buyerChecks: [
      "The assessment they need, explained: what it is, when it is required and what they must provide",
      "Accreditation with a recognised scheme and the assessors' qualifications",
      "Turnaround and how pricing works",
      "Developments the consultancy has supported, by type and size",
    ],
    siteShows: [
      "A page per assessment, written answer-first for someone who has just been asked for it",
      "Case studies naming the scheme, the developer where permitted, and the services provided",
      "Accreditations and the team, by name",
      "Separate routes for housebuilders, architects and commercial clients",
    ],
    track: "national",
    trackNote:
      "The national track, built around question-led service pages. This is the sector where clear explanatory pages earn the most.",
    questions: [
      "What is a SAP calculation and when do I need one?",
      "Do I need an overheating assessment for a new house?",
      "What is the difference between SAP and SBEM?",
      "Who can do an air tightness test near me?",
    ],
    bodies: [
      { name: "CIBSE", url: "https://www.cibse.org/" },
      { name: "Elmhurst Energy", url: "https://www.elmhurstenergy.co.uk/" },
    ],
    faqs: [
      {
        q: "How do energy assessors get new clients?",
        a: "New clients mostly arrive by searching for a specific assessment and comparing a few providers. A page that explains the assessment plainly, says what is needed and shows the consultancy is accredited converts that search. Repeat business then follows from doing the first job well.",
      },
      {
        q: "What should an energy consultancy put on each service page?",
        a: "What the assessment is, when regulations or planning require it, what the client has to supply, how long it takes and what they receive. Written in that order, it answers the person searching and is also the structure AI assistants lift answers from.",
      },
      {
        q: "Do case studies matter when the service is a calculation?",
        a: "Yes. A developer wants to know the consultancy has supported schemes like theirs through building control and planning. A short case study naming the development, its size and the assessments provided is quick to produce and is missing from most sites in this sector.",
      },
    ],
    related: ["mep-engineers", "ev-electrical-design-consultants", "acoustic-consultants", "architects"],
  },
  {
    slug: "acoustic-consultants",
    name: "Acoustic Consultants",
    singular: "an acoustic consultant",
    group: "Surveying & consultancy",
    summary: "Noise assessment, sound insulation testing and acoustic design consultancies",
    metaTitle: "Marketing for Acoustic Consultants: Websites & SEO",
    metaDescription:
      "Websites, SEO and AI-search visibility for acoustic consultancies: noise assessments for planning, sound insulation testing and acoustic design explained for the clients who need them.",
    heroSub:
      "Most clients meet acoustics for the first time when a planning officer or building control asks for a report. We make your consultancy the clear answer to that request.",
    answer: [
      "Marketing for acoustic consultants means being found and trusted by developers, architects and planning consultants who have been asked for a noise assessment or a sound test. We build acoustic consultancies a website with a page for each service, examples of the schemes they supported, and visibility in search and AI-assisted search.",
      "Like civil engineering and energy assessment, acoustics has services people search for by name because a regulator has required them. A consultancy that explains a noise impact assessment or pre-completion sound testing clearly, states turnaround and shows it is properly accredited is well placed to win that enquiry.",
    ],
    takeaways: [
      "Planning-driven noise assessments and completion sound testing are searched for by name.",
      "Clients choose on turnaround, accreditation and experience with their type of site.",
      "Architectural acoustic design is a separate service with a separate buyer and needs its own pages.",
    ],
    winsWork: [
      "A developer or planning consultant needs a noise assessment to support an application near a road, railway or commercial use, or a contractor needs sound insulation testing before completion. They use a consultancy they know, or they search for the service and compare. Because the report is a means to an end, they value a clear scope, a firm date and confidence that the planning authority or building control will accept it.",
      "Acoustic design work, for schools, offices, residential schemes and venues, is appointed by architects and M&E engineers as part of the design team. It is won on reputation and sector experience, and the site needs to show the consultancy's design work as distinct from its testing and assessment work.",
    ],
    buyerChecks: [
      "The specific report or test they have been asked for, with what it involves and how long it takes",
      "Membership of the Institute of Acoustics and the Association of Noise Consultants, and testing accreditation",
      "Experience with their kind of site and with the local planning authority",
      "For design work: completed buildings in their sector",
    ],
    siteShows: [
      "A page per service: noise impact assessments for planning, sound insulation testing, environmental noise, acoustic design",
      "For each, when it is required and what the client receives",
      "Case studies naming the type of site, the constraint and the outcome",
      "The consultants by name with their professional membership",
    ],
    track: "national",
    trackNote:
      "The national track with question-led service pages. Sound testing can also be found locally, so the areas covered should be stated.",
    questions: [
      "When is a noise impact assessment required for planning?",
      "What is pre-completion sound insulation testing?",
      "Who can carry out a noise survey for a development next to a railway?",
      "Do I need an acoustic consultant for a school design?",
    ],
    bodies: [
      { name: "Institute of Acoustics", url: "https://www.ioa.org.uk/" },
      { name: "Association of Noise Consultants", url: "https://www.theanc.co.uk/" },
    ],
    faqs: [
      {
        q: "Can an acoustic consultancy be found through search?",
        a: "Yes, for the planning and building-control services clients are told they need, because they search for them by name. Design consultancy work is referral-led. A site with a clear page for each service addresses the first and supports the second.",
      },
      {
        q: "What should a noise assessment page include?",
        a: "When a planning authority is likely to ask for one, what the survey and report involve, how long it takes, what the client must provide and examples of sites where the assessment supported consent. Dated and accurate, it answers the client and is the kind of page AI assistants quote.",
      },
      {
        q: "Why separate testing from acoustic design on the website?",
        a: "Because the buyers differ. A contractor booking a sound test wants price, date and accreditation. An architect appointing an acoustic designer wants sector experience and design thinking. One page for both makes the consultancy look like a testing house to the architect and overcomplicated to the contractor.",
      },
    ],
    related: ["energy-sustainability-consultants", "planning-consultants", "mep-engineers", "fire-engineers"],
  },
  {
    slug: "project-managers",
    name: "Project Managers & Construction Consultancies",
    singular: "a construction project manager",
    group: "Surveying & consultancy",
    summary: "Client-side project management, employer's agent and construction consultancy",
    metaTitle: "Marketing for Construction Project Managers & Consultancies",
    metaDescription:
      "Websites, SEO and AI-search visibility for construction project management consultancies: case studies and sector experience set out for the clients and funders who appoint you.",
    heroSub:
      "A project management consultancy sells judgement, and judgement is hard to photograph. We show it through the schemes you have delivered, the problems you solved on them and the clients who came back.",
    answer: [
      "Marketing for construction project managers means evidencing delivery to clients who are about to trust you with their capital project. We build project management and construction consultancies a website organised around sectors and case studies, with the people and their accreditations visible, and make it findable in search and AI-assisted search.",
      "Appointments come from clients with a building programme: developers, housing providers, schools and trusts, healthcare estates, and businesses fitting out or relocating. Most arrive by referral or framework. The site has to convince a board-level reader, quickly, that the consultancy has delivered schemes like theirs on time and on budget.",
    ],
    takeaways: [
      "Clients are organisations with capital projects, appointing on track record in their sector.",
      "Dated case studies with programme and budget outcomes are the evidence a board reads.",
      "The people matter: clients appoint a named project manager as much as a firm.",
    ],
    winsWork: [
      "A client with a project to deliver appoints a project manager or employer's agent early, usually from firms it has used, firms on a framework or firms recommended by its architect, cost consultant or funder. The shortlist is compared on sector experience, the individuals proposed and evidence that previous schemes were delivered to programme and budget.",
      "Because the service is advisory, the evidence is the projects. A reader wants to know the sector, the value, the procurement route, what went wrong and how it was handled. Consultancies that publish that plainly stand apart from those whose sites describe project management in general terms.",
    ],
    buyerChecks: [
      "Delivered schemes in their sector, with value, programme and the consultancy's role",
      "The named project managers and their accreditation with the APM, RICS or CIOB",
      "Services offered: project management, employer's agent, contract administration, principal designer",
      "Repeat clients and frameworks, which signal that past work held up",
    ],
    siteShows: [
      "Sector pages for each client type, each backed by written, dated case studies",
      "Case studies that state the challenge and how it was managed, not only the outcome",
      "The team, with roles, accreditations and the projects each has led",
      "Clear descriptions of each service and when a client needs it",
    ],
    track: "national",
    trackNote:
      "The national track: case studies and mentions from the architects, cost consultants and clients the consultancy works alongside.",
    questions: [
      "What does an employer's agent do on a design-and-build contract?",
      "Do I need a project manager for a school building project?",
      "Which project management consultancies work with housing associations?",
      "What is the difference between a project manager and a contract administrator?",
    ],
    bodies: [
      { name: "Association for Project Management", url: "https://www.apm.org.uk/" },
      { name: "Chartered Institute of Building", url: "https://www.ciob.org/" },
    ],
    faqs: [
      {
        q: "How do project management consultancies win appointments?",
        a: "Through frameworks, repeat clients and recommendation from the other consultants on a scheme. The website is read at shortlist stage, often by a board or a funder, and its job is to show delivery in the relevant sector with real examples.",
      },
      {
        q: "What should a project management case study include?",
        a: "The client and sector where they can be named, the value and programme, the procurement route, the main difficulty and what the consultancy did about it, and the result. A dated case study with those facts is worth more than any description of the firm's approach.",
      },
      {
        q: "Is search engine visibility relevant to a project management consultancy?",
        a: "Modestly. Few clients search for one cold, but they do look the firm up, and they increasingly ask AI assistants who works in their sector and region. A well-structured site with clear sector pages is what makes the consultancy legible in both cases.",
      },
    ],
    related: ["quantity-surveyors", "building-surveyors", "main-contractors"],
  },

  // ─── CONSTRUCTION ───────────────────────────────────────────────────
  {
    slug: "main-contractors",
    name: "Main Contractors & Design-and-Build Firms",
    singular: "a main contractor",
    group: "Construction",
    summary: "Regional main contractors and design-and-build businesses",
    metaTitle: "Marketing for Main Contractors & Design-and-Build Firms",
    metaDescription:
      "Websites, SEO and AI-search visibility for main contractors and design-and-build firms: completed projects, accreditations and sector experience set out for clients and tender panels.",
    heroSub:
      "A contractor's website is read by clients, consultants and tender panels deciding whether you make the list. We make sure it shows the projects, the accreditations and the people they are looking for.",
    answer: [
      "Marketing for main contractors and design-and-build firms means making it easy for a client, an architect or a framework assessor to see what you have built and how you are accredited. We build contractors a website organised around completed projects and sectors, with accreditations and key people visible, and make it findable in search and AI-assisted search.",
      "Contracting work is won by tender, negotiation and framework, and the website is checked at pre-qualification and before a client invites a bid. Local and regional visibility also matters, because private clients and smaller developers do search for a contractor for a commercial build, an industrial unit or a refurbishment in their area.",
    ],
    takeaways: [
      "The site is read at pre-qualification: projects, accreditations, health and safety, financial standing.",
      "Private clients and small developers search regionally for contractors by building type.",
      "A projects page with photographs and no words is the most common missed opportunity.",
    ],
    winsWork: [
      "Public-sector and larger private work comes through frameworks and tenders where experience is scored. Before that, an architect, project manager or client decides who to invite, and they check each contractor's site for comparable projects, sector experience and accreditations. A contractor that is good and invisible is not on the list.",
      "Negotiated and design-and-build work for private clients starts with a recommendation or a search for a contractor who builds their kind of project locally. Those clients are less expert and want reassurance: completed buildings, named people, and evidence that the firm manages cost, programme and safety.",
    ],
    buyerChecks: [
      "Completed projects in their sector and at their value, with client and consultant team named",
      "Accreditations such as Constructionline and the firm's health and safety record",
      "Whether the firm offers design-and-build and has an established design team",
      "The directors and contracts managers, and how long the business has traded",
    ],
    siteShows: [
      "Project pages with the client, value band, programme, procurement route and what was built",
      "Sector pages for the building types the firm wants more of",
      "Accreditations, policies and frameworks in one place for pre-qualification",
      "The regions the firm works in, each backed by completed projects",
    ],
    track: "both",
    trackNote:
      "Regional contractors with private clients benefit from the residential track's local visibility; contractors working mainly through tenders and frameworks sit on the national track.",
    questions: [
      "Which contractors build industrial units in my region?",
      "What is a design-and-build contract?",
      "How do I choose a main contractor for a commercial refurbishment?",
      "Which contractors are on local authority frameworks?",
    ],
    bodies: [
      { name: "Chartered Institute of Building", url: "https://www.ciob.org/" },
      { name: "Constructionline", url: "https://www.constructionline.co.uk/" },
    ],
    faqs: [
      {
        q: "Does a main contractor need marketing if work comes through tenders?",
        a: "It needs a website that passes the check made before the tender list is drawn up. Clients and consultants look for comparable projects and accreditations, and a thin site can keep a capable contractor off the list. Beyond that, private clients do search regionally for contractors by project type.",
      },
      {
        q: "What should a contractor's project page contain?",
        a: "The client and design team where they can be named, the sector, value band, programme and procurement route, a description of what was built and any difficulty overcome, and photographs. That is the information a pre-qualification assessor and a private client both look for.",
      },
      {
        q: "Should a contractor publish its accreditations and policies?",
        a: "Yes, in one easy-to-find place. They are checked at pre-qualification and their absence reads as a gap even when the firm holds them. Stating them accurately, with the certifying bodies named, also helps search engines and AI assistants describe the business correctly.",
      },
    ],
    related: ["specialist-contractors", "project-managers", "quantity-surveyors", "civil-engineers"],
  },
  {
    slug: "specialist-contractors",
    name: "Specialist Contractors",
    singular: "a specialist contractor",
    group: "Construction",
    summary: "Fit-out, façade, steel, joinery and other specialist construction contractors",
    metaTitle: "Marketing for Specialist Construction Contractors",
    metaDescription:
      "Websites, SEO and AI-search visibility for specialist contractors: fit-out, façades, steelwork and more, with projects and accreditations shown for main contractors and direct clients.",
    heroSub:
      "A specialist contractor sells to two buyers: the main contractor's commercial team and the end client. We show each the projects and accreditations they look for, in the specialism you want to be known for.",
    answer: [
      "Marketing for specialist contractors means being known for the specialism, with the projects to prove it. We build specialist contractors, such as fit-out, façade, steelwork and joinery firms, a website organised around that specialism and its completed projects, with accreditations visible, and make it findable in search and AI-assisted search.",
      "Specialists win work from main contractors on price, capacity and track record, and directly from clients and designers who want that particular expertise. Direct work is where search helps most: an office occupier looking for a fit-out contractor, or an architect looking for a firm that can deliver a difficult detail, searches for the specialism and the region.",
    ],
    takeaways: [
      "Direct clients search for the specialism and the region; main contractors check capacity and track record.",
      "Being specific about what the firm does best is worth more than listing everything it can do.",
      "Project pages naming the main contractor and architect make the firm findable through their names too.",
    ],
    winsWork: [
      "Main contractors keep a supply chain and add to it when a subcontractor is unavailable or a project needs something unusual. Their commercial teams look for comparable projects, accreditation, insurances and evidence the firm can resource the job. A recommendation from a site manager or a designer usually opens the door.",
      "End clients and designers go direct when the specialism is the project: an office fit-out, a shopfront, a feature staircase, a recladding scheme. They search, compare portfolios and want to see design capability as well as installation. Design-led specialists who show their designers and their process win a better class of enquiry.",
    ],
    buyerChecks: [
      "Projects in the same specialism, with the main contractor, architect and client named where permitted",
      "Accreditations and trade-body membership relevant to the specialism",
      "Design capability and in-house resources, not only installation",
      "Capacity: the size of project the firm takes on and the regions it covers",
    ],
    siteShows: [
      "The specialism stated plainly on the homepage, with the sectors served",
      "Project pages giving scope, value band, programme and the team the firm worked with",
      "The people, with roles, so a buyer can see who designs and who delivers",
      "Accreditations and a clear enquiry route for both contractors and direct clients",
    ],
    track: "both",
    trackNote:
      "Specialists selling direct to occupiers and private clients benefit from the residential track's regional visibility and, on Premium, Google Ads. Those working mainly for main contractors sit on the national track.",
    questions: [
      "Which fit-out contractors work on offices in my region?",
      "Who installs rainscreen cladding on residential buildings?",
      "What does a design-and-build fit-out include?",
      "Which steelwork contractors can fabricate and erect a small frame?",
    ],
    bodies: [
      { name: "Finishes and Interiors Sector", url: "https://www.fis.org.uk/" },
      { name: "Constructionline", url: "https://www.constructionline.co.uk/" },
    ],
    faqs: [
      {
        q: "How do specialist contractors get direct clients rather than subcontract work?",
        a: "By being visible for the specialism in the regions they serve and by showing the design side of the business. Occupiers and designers search for the specialism, compare portfolios and choose a firm that looks like a specialist rather than a general subcontractor.",
      },
      {
        q: "Should a specialist contractor name the main contractors it has worked for?",
        a: "Where it is permitted, yes. It is evidence of being trusted on real projects, and it means the firm can be found by people searching for those projects. Where a client cannot be named, the page should say so rather than leave the project vague.",
      },
      {
        q: "Are paid ads worth it for a specialist contractor?",
        a: "Sometimes, where clients search directly for the service, such as office fit-out in a city. We only run ads where that demand exists and say so plainly when it does not; spend is paid by you direct to the platform and we take no percentage of it.",
      },
    ],
    related: ["main-contractors", "interior-designers", "project-managers"],
  },
];

export const sectorGroups: SectorGroup[] = ["Design", "Engineering", "Surveying & consultancy", "Construction"];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);

/** The four disciplines the home page leads with, mapped to their sector pages. */
export const primarySectorByAudience: Record<string, string> = {
  architects: "architects",
  mep: "mep-engineers",
  structural: "structural-engineers",
  "interior-design": "interior-designers",
};
