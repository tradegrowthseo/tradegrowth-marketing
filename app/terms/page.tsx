import type { Metadata } from "next";
import Link from "next/link";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";
import { annual, capacity, guarantees, tierById, websiteOptions } from "@/lib/pricing";

export const metadata: Metadata = {
  ...routeMeta("/terms/"),
  title: "Terms of Service",
  description:
    "The terms on which TradeGrowth Marketing provides its website, its free audit and its services: what you pay, what you own, what is guaranteed, and how either side can leave.",
};

/**
 * Terms for the website and for the services, in plain English and derived
 * from the same data the pricing page renders. Every figure here comes from
 * lib/pricing.ts, so the terms can never quote a price the site no longer
 * charges.
 *
 * Why this page exists now: Google Cloud's OAuth brand verification, which
 * gates Google Ads API access, fetches a terms-of-service URL on the domain
 * behind the consent screen. It also belongs here on its own merits — a site
 * that publishes every price should publish the terms those prices come with.
 *
 * Not legal advice. The legal entity behind the trading name and the
 * liability cap in "Our liability" are BRAD TO CONFIRM. Have the page
 * reviewed before relying on it in a dispute.
 */

const LAST_REVIEWED = "27 September 2026";

const LINK = "text-[#3d4cf5] font-semibold hover:underline";

const basic = tierById("basic");
const standard = tierById("standard");
const premium = tierById("premium");

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are, and what these terms cover",
    body: (
      <>
        <p>
          TradeGrowth Marketing (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides marketing services
          to construction, engineering and design businesses across the United Kingdom. We work
          remotely from Preston, Lancashire. For anything about these terms, email{" "}
          <a href="mailto:contact@tradegrowthseo.com" className={LINK}>
            contact@tradegrowthseo.com
          </a>
          .
        </p>
        <p>
          These terms cover two things: your use of this website, and the services we sell
          through it. If we agree something different with you in writing for a specific piece
          of work, that written agreement takes priority over the service terms below.
        </p>
      </>
    ),
  },
  {
    heading: "Using this website",
    body: (
      <>
        <p>
          The content on this site is general information about what we do and how we work. It
          is not advice tailored to your business, and you should not rely on it as such without
          talking to us first.
        </p>
        <p>
          We do not promise rankings, AI-assistant mentions or enquiry numbers anywhere on this
          site, and nothing here should be read as a promise of any of them. Where a page shows
          an example of an AI answer or a search result, it is labelled as illustrative or as a
          screenshot of a specific live search on a specific day.
        </p>
        <p>
          We try to keep the site accurate and available, but we don&apos;t guarantee that it
          will be error-free or uninterrupted. We can change or remove content at any time.
        </p>
      </>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <>
        <p>
          The text, design and images on this site belong to TradeGrowth Marketing unless
          stated otherwise. You may read, print and share pages for your own reference. You may
          not copy the site or its content for commercial use without our written permission.
        </p>
        <p>
          Screenshots of client websites shown on our{" "}
          <Link href="/websites/" className={LINK}>
            websites page
          </Link>{" "}
          and{" "}
          <Link href="/results/" className={LINK}>
            results page
          </Link>{" "}
          are shown with those clients&apos; knowledge. The names and logos of those businesses,
          and of Google, Meta, OpenAI, Anthropic, Perplexity and any other third party we
          mention, belong to their owners.
        </p>
      </>
    ),
  },
  {
    heading: "Links to other websites",
    body: (
      <p>
        This site links to client websites, to third-party services and to published research.
        We are not responsible for the content or the privacy practices of any site we link to.
        A link is not an endorsement of everything on the page it points at.
      </p>
    ),
  },
  {
    heading: "The free AI-search audit",
    body: (
      <>
        <p>
          The audit is free, needs no card details and creates no obligation on either side. It
          is a snapshot: a set of selected prompts put to a set of AI assistants at one point in
          time, plus a look at your site. Assistants word things differently from one run to the
          next and change as their sources change, so the report shows how you are described
          today, not a score that will read the same next week.
        </p>
        <p>
          After we send the report we will follow up once to ask whether you would like to talk
          it through. If you say no, that is the end of it. If the report shows your practice is
          already described well, we will say so rather than sell you something.
        </p>
      </>
    ),
  },
  {
    heading: "What we sell, and what it costs",
    body: (
      <>
        <p>
          Every price is published on our{" "}
          <Link href="/pricing/" className={LINK}>
            pricing page
          </Link>
          , and the price you see there when you agree to go ahead is the price you pay. There is
          no setup fee and no percentage of your ad spend.
        </p>
        <p>
          <strong className="text-[#171a26]">The website</strong> is a one-off build at a fixed
          price: {websiteOptions[0].price} for a {websiteOptions[0].name.toLowerCase()} of up to{" "}
          {websiteOptions[0].pages} pages, or {websiteOptions[1].price} for a{" "}
          {websiteOptions[1].name.toLowerCase()} of up to {websiteOptions[1].pages} pages. Half is
          due on deposit and half on launch. Pages beyond those included are agreed and quoted
          before the build starts. If your existing site is sound, there is no website fee.
        </p>
        <p>
          <strong className="text-[#171a26]">The monthly packages</strong> are {basic.name} at{" "}
          {basic.monthly} a month, {standard.name} at {standard.monthly} a month and{" "}
          {premium.name} at {premium.monthly} a month, each billed monthly in advance, each with a{" "}
          {basic.minimumMonths}-month minimum term and a month&apos;s notice after that. What each
          package contains is listed on the pricing page and forms part of these terms.
        </p>
        <p>
          <strong className="text-[#171a26]">The annual option</strong> on {standard.name} is{" "}
          {annual.price} for {annual.months} months paid up front, with the{" "}
          {websiteOptions[0].name.toLowerCase()} included. {annual.exit}
        </p>
        <p>
          Prices are not subject to VAT because TradeGrowth Marketing is not VAT registered. If
          that changes, prices agreed before the change are honoured for their current term.
        </p>
      </>
    ),
  },
  {
    heading: "Costs that sit outside the fee",
    body: (
      <p>
        Domain renewal from year two, ad spend, and any paid tool you ask us to run on your
        behalf are itemised and agreed with you before anything is activated. Ad spend is paid by
        you directly to Google or Meta; we never take a cut of it or route it through us. Domain
        renewal, hosting and SSL from year two are passed on at cost, typically under £100 a
        year.
      </p>
    ),
  },
  {
    heading: "Our guarantees, and what they don't cover",
    body: (
      <>
        <p>We put {guarantees.length} things in writing:</p>
        <ul className="list-disc pl-5 space-y-2">
          {guarantees.map((g) => (
            <li key={g.title}>
              <strong className="text-[#171a26]">{g.title}.</strong> {g.body}
            </li>
          ))}
        </ul>
        <p>
          Each one covers something we control. None of them covers rankings, AI-assistant
          mentions, enquiry numbers or revenue, because nobody controls those. A guarantee is
          claimed by emailing us within thirty days of the event it covers.
        </p>
      </>
    ),
  },
  {
    heading: "What you own",
    body: (
      <>
        <p>
          The domain is registered in your name from the start. The website we build is yours
          once the launch balance is paid, and you can move it to any host at any time. Reports,
          research and the content we write for you are yours to keep, whether or not you stay
          with us.
        </p>
        <p>
          We keep the right to describe the work we did for you, in general terms, and to show a
          screenshot of your site on this website. Tell us in writing if you would rather we did
          not, and we will remove it.
        </p>
      </>
    ),
  },
  {
    heading: "Content, approvals and accuracy",
    body: (
      <>
        <p>
          Case studies and other content are drafted by us from a call with you and published
          only after you have approved them. You are responsible for confirming that what you
          tell us about a project is true and that you are allowed to share it, including whether
          a client or a partner can be named. Where you cannot confirm something, we leave it out
          rather than guess.
        </p>
        <p>
          For regulated and chartered clients we restructure and present your technical content;
          we do not change a figure, a standard or a claim without your word.
        </p>
      </>
    ),
  },
  {
    heading: "What we need from you",
    body: (
      <p>
        Access to the accounts the work needs (your domain, Google Search Console, Google
        Business Profile and analytics where they exist), twenty minutes on a call for each case
        study, and a yes or no on drafts within a reasonable time. Where the month-one guarantee
        depends on access we have asked for and not received, the thirty days run from the day
        we receive it.
      </p>
    ),
  },
  {
    heading: "Capacity and start dates",
    body: (
      <p>
        One person does the work, so we take on {capacity.perQuarter} new practices a quarter.
        When a quarter is full, the free audit still runs and you are offered the next start
        date. A start date is agreed in writing before any fee is due.
      </p>
    ),
  },
  {
    heading: "Ending the arrangement",
    body: (
      <>
        <p>
          After the minimum term on a package, either side can end it with a month&apos;s
          written notice. The website build has no ongoing commitment once the launch balance is
          paid.
        </p>
        <p>
          We can end an arrangement immediately if an invoice is more than thirty days overdue
          after a reminder, or if you ask us to publish something we reasonably believe is
          untrue or unlawful. You keep everything you have paid for.
        </p>
      </>
    ),
  },
  {
    heading: "Our liability",
    body: (
      <>
        <p>
          We will carry out the work with reasonable care and skill. We are not liable for loss
          of profit, loss of business or any indirect loss, or for the results of decisions taken
          by Google, Meta or any AI-assistant provider. Our total liability to you for any claim
          connected with our services is limited to the fees you paid us in the three months
          before the claim arose.
        </p>
        <p>
          Nothing in these terms limits liability for death or personal injury caused by
          negligence, for fraud, or for anything else that cannot be limited by law.
        </p>
      </>
    ),
  },
  {
    heading: "Privacy",
    body: (
      <p>
        How we handle personal information, including what the enquiry form and the free audit
        collect, is set out in our{" "}
        <Link href="/privacy/" className={LINK}>
          privacy policy
        </Link>
        .
      </p>
    ),
  },
  {
    heading: "Governing law, and changes to these terms",
    body: (
      <>
        <p>
          These terms are governed by the law of England and Wales, and the courts of England
          and Wales have exclusive jurisdiction over any dispute about them.
        </p>
        <p>
          We may update these terms. The date at the top of this page shows when they were last
          reviewed. Changes apply to new arrangements from that date; work already agreed stays on
          the terms it was agreed under.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        patternId="terms-grid"
        eyebrow="Terms"
        title={
          <>
            The terms behind{" "}
            <span className="text-gradient">every published price</span>
          </>
        }
        sub="Plain English, specific to this business. What you pay, what you own, what is guaranteed, and how either side can leave. If anything here is unclear, email us and we'll explain it properly."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[820px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#8a90a0] text-sm mb-12">Last reviewed: {LAST_REVIEWED}</p>
          </FadeIn>

          {sections.map((section, i) => (
            <FadeIn key={section.heading} delay={Math.min(i, 4) * 0.05}>
              <div className="mb-11">
                <h2 className="text-[#171a26] text-xl md:text-2xl font-bold mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-[#565c6b] leading-relaxed">{section.body}</div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-[#e6e8f2] bg-[#f6f7fc] p-6">
              <p className="text-[#565c6b] text-sm leading-relaxed">
                Questions about any of this?{" "}
                <Link href="/contact/" className={LINK}>
                  Get in touch
                </Link>{" "}
                and we&apos;ll answer directly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
