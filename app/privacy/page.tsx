import type { Metadata } from "next";
import Link from "next/link";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  ...routeMeta("/privacy/"),
  title: "Privacy Policy",
  description:
    "What TradeGrowth Marketing collects when you enquire, who processes it, how long it is kept, and your rights under UK GDPR.",
};

/**
 * Describes what this site actually does, not a generic template.
 *
 * Two things it is deliberately careful about:
 *
 * 1. WhatsApp. Meta is an INDEPENDENT CONTROLLER of a WhatsApp conversation,
 *    not a processor acting on our instructions. Listing it beside the hosting
 *    and form providers would misdescribe the relationship, so it has its own
 *    section.
 * 2. Analytics. GA4 is gated behind consent (components/Analytics.tsx), so this
 *    page can honestly say nothing is set until a visitor agrees. Remove that
 *    gating and this page becomes untrue — keep the two together.
 *
 * Not legal advice. No ICO registration number is claimed because none has
 * been verified. Have it reviewed before relying on it.
 */

const LAST_REVIEWED = "12 September 2026";

const LINK = "text-[#3d4cf5] font-semibold hover:underline";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who we are",
    body: (
      <>
        <p>
          TradeGrowth Marketing provides marketing services to construction, engineering and
          design businesses across the UK. We are the data controller for the information
          described on this page.
        </p>
        <p>
          For anything to do with your data, email{" "}
          <a href="mailto:contact@tradegrowthseo.com" className={LINK}>
            contact@tradegrowthseo.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "What we collect when you enquire",
    body: (
      <>
        <p>
          Our contact form asks for your name, business name, email address, phone number, your
          discipline and your message. The free audit form also asks for the area you cover, your
          website address and, optionally, a competitor to benchmark against.
        </p>
        <p>
          Only the fields marked required are needed. The rest are there because they make our
          reply more useful, and you can leave them blank.
        </p>
        <p>
          <strong className="text-[#171a26]">Why we can use it:</strong> legitimate interests — you
          have asked us to get in touch about a service we provide, and we use your details for
          that and nothing else. No newsletter, no list, and we don&apos;t sell it on.
        </p>
      </>
    ),
  },
  {
    heading: "Who processes it",
    body: (
      <>
        <p>Two providers handle data on our behalf, under our instructions:</p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <strong className="text-[#171a26]">Web3Forms</strong> — delivers form submissions to
            our email. Your submission passes through their service to reach us.
          </li>
          <li>
            <strong className="text-[#171a26]">Cloudflare</strong> — hosts this website and serves
            it to your browser, which involves processing your IP address and request data to
            deliver the page and protect the site.
          </li>
        </ul>
        <p>
          Email we receive is held in our own business email account. We don&apos;t pass your
          details to anyone else, and we don&apos;t use them to train anything.
        </p>
      </>
    ),
  },
  {
    heading: "Analytics, and your choice",
    body: (
      <>
        <p>
          We use Google Analytics 4 to understand which pages are useful and how people reach the
          site. It is optional and off by default.
        </p>
        <p>
          <strong className="text-[#171a26]">Nothing is set until you accept.</strong> The
          analytics script does not load, and no Google cookie is placed, unless you choose
          &ldquo;Accept analytics&rdquo; on the banner. Decline it — or ignore it — and no
          analytics cookie is set. The site works exactly the same either way.
        </p>
        <p>
          Your choice is remembered in your browser&apos;s local storage so we don&apos;t ask
          again. To change it, clear this site&apos;s data in your browser settings and the banner
          reappears.
        </p>
        <p>
          When analytics is on, Google processes that data as our processor and may transfer it
          outside the UK under its own safeguards.
        </p>
      </>
    ),
  },
  {
    heading: "If you message us on WhatsApp",
    body: (
      <>
        <p>
          Our WhatsApp button opens a chat in WhatsApp itself, and it is worth being precise about
          what that means: in that conversation{" "}
          <strong className="text-[#171a26]">
            Meta is an independent controller of your data, not a processor acting on our
            instructions
          </strong>
          . Meta decides how it handles your phone number, profile and message metadata under its
          own privacy policy, and we have no control over that.
        </p>
        <p>
          We are the controller only of the conversation content as it sits in our own account. If
          you would rather not involve Meta at all, email or phone us instead — both reach the
          same place.
        </p>
      </>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <>
        <p>
          Enquiries that don&apos;t become work are kept for up to 12 months, so we have context
          if you come back to us, then deleted.
        </p>
        <p>
          Where you become a client, we keep what we need for the engagement and for the periods
          UK tax and accounting rules require afterwards.
        </p>
        <p>Analytics data is retained by Google for 14 months.</p>
      </>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <>
        <p>
          Under UK GDPR you can ask us for a copy of what we hold about you, ask us to correct or
          delete it, ask us to restrict how we use it, or object to our using it at all. Email us
          and we will deal with it within one month.
        </p>
        <p>
          If you are not satisfied with how we have handled something, you can complain to the
          Information Commissioner&apos;s Office at{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            ico.org.uk
          </a>
          . We would rather you told us first so we can put it right.
        </p>
      </>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If what we collect or who processes it changes, we update this page and the review date
        with it.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        patternId="privacy-grid"
        eyebrow="Privacy"
        title={
          <>
            What we collect, and{" "}
            <span className="text-gradient">what we don&apos;t</span>
          </>
        }
        sub="Plain English, specific to this website. If anything here is unclear, email us and we'll explain it properly."
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
