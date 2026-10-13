import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import LocalCheckForm from "@/components/LocalCheckForm";

// The free first step on the Local Practice programme. The Referral Check
// (/audit) is the first step on the Referral-Ready Practice programme.

export const metadata: Metadata = {
  ...routeMeta("/local-search-check/"),
  title: "Free Local Search Check for Practices Serving Homeowners",
  description:
    "A free check of what a homeowner in your town sees when they search for your service: the map results, the reviews, your listing and two competitors. A five-page report, no card, no obligation.",
};

const whatYouGet = [
  {
    number: "01",
    title: "The searches a homeowner runs",
    body: "We search for your service in your town the way a homeowner does, on a phone, signed out, and record what comes back: the map results, the organic results and any ads.",
  },
  {
    number: "02",
    title: "You against two competitors",
    body: "Your Google Business Profile, your reviews and your site scored beside the two practices that come up most often for that search. You see what they have that you don't.",
  },
  {
    number: "03",
    title: "A five-page report",
    body: "What a homeowner sees, where you stand, and a prioritised list of what to fix first. Yours to keep whether you work with us or not.",
  },
];

const reportContents = [
  "Screenshots of the actual search and map results for your service in your town",
  "Whether you appear in the map results, and why or why not",
  "Your reviews, count and recency, against the two practices that appear most",
  "Whether your site has a page for that service, and what it says",
  "Which directories and trade bodies list you, and whether the details match",
  "A prioritised list of what to address first",
];

export default function LocalSearchCheckPage() {
  return (
    <>
      <PageHero
        patternId="local-check-grid"
        eyebrow="Free Local Search Check"
        title={
          <>
            What does a homeowner in your town see when they{" "}
            <span className="text-gradient">search for you?</span>
          </>
        }
        sub="For architects, structural engineers, surveyors, planning consultants and design-and-build firms whose clients are homeowners. We run the search they run, score you against two competitors, and send a five-page report. Free, no card details, no obligation."
      >
        <div className="flex flex-wrap gap-3 mt-8">
          {["Completely free", "No card details", "Back within days", "Yours to keep"].map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium"
            >
              <svg className="w-3.5 h-3.5 text-[#8b93ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {p}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What&apos;s included</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Three things, and they&apos;re all yours to keep
            </h2>
            <p className="text-[#565c6b] text-lg mb-14 max-w-2xl leading-relaxed">
              Whether you work with us afterwards or not. If the report says you&apos;re already
              the practice a homeowner finds first, we&apos;ll tell you that and you&apos;ve lost
              nothing. Is your client a developer or a contractor rather than a homeowner? Then the{" "}
              <Link href="/audit" className="text-[#3d4cf5] font-semibold hover:underline">
                Referral Check
              </Link>{" "}
              is the one for you.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <FadeIn key={item.number} delay={i * 0.08}>
                <div className="h-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl p-7">
                  <div className="text-4xl font-extrabold text-gradient mb-4">{item.number}</div>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionLabel>In the report</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-6">
                  Five pages, no filler
                </h2>
                <ul className="space-y-3.5 mb-8">
                  {reportContents.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[#565c6b]">
                      <svg className="w-5 h-5 text-[#3d4cf5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white border border-[#e6e8f2] rounded-xl p-5 mb-4">
                  <h3 className="text-[#171a26] font-bold text-sm mb-2">What the check shows, honestly</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">
                    One set of searches, on one day, from one place. Google&apos;s results move with
                    the searcher&apos;s location and change over time, so treat it as a snapshot of
                    what a homeowner sees now, not a ranking that will read the same next month.
                  </p>
                </div>

                <div className="bg-white border border-[#e6e8f2] rounded-xl p-5">
                  <h3 className="text-[#171a26] font-bold text-sm mb-2">What happens next</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">
                    The report within a few working days, then one follow-up to ask if you&apos;d
                    like to talk it through. If you say no, that&apos;s the end of it. The{" "}
                    <Link href="/pricing" className="text-[#3d4cf5] font-semibold hover:underline">
                      Local Practice programme
                    </Link>{" "}
                    is what we&apos;d propose if the check finds work to do.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white border border-[#e6e8f2] rounded-2xl p-8 shadow-[0_4px_24px_rgba(23,26,38,0.06)]">
                  <SectionLabel>Request your check</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#171a26] mb-6">Tell us what and where</h2>
                  <LocalCheckForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
