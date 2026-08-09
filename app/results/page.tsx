import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import ScreenshotGallery from "@/components/ui/ScreenshotGallery";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Results",
  description:
    "EV Design ranks #1 on Google in Burnley, gets named in Google's AI Overview across the North West, and is recommended by ChatGPT. Here's what that looks like.",
};

// EV Design — real, live search results. The screenshots in
// public/images/case-studies are unedited captures; don't add figures here that
// aren't visible in them.
const evDesignShots = [
  {
    src: "/images/case-studies/ev-design-google-burnley.png",
    width: 2320,
    height: 1309,
    caption: "#1 on Google — local Burnley search",
    alt: "Google results for “ev design burnley”, with EV Design's website ranked first ahead of competing EV charging installers, and its Google Business Profile shown in the side panel.",
  },
  {
    src: "/images/case-studies/ev-design-google-northwest.png",
    width: 2521,
    height: 1093,
    caption: "Ranking across the North West",
    alt: "Google results for “ev design north west”, where the AI Overview names EV Design as a specialist EV charging infrastructure provider and its website is the top organic result.",
  },
  {
    src: "/images/case-studies/ev-design-google-search-top.png",
    width: 2211,
    height: 540,
    caption: "Top of Google search results",
    alt: "Google results for “ev design”, with EV Design's website ev-design.co.uk as the top organic result, titled “EV Design | EV Charging Infrastructure & Site Design”.",
  },
  {
    src: "/images/case-studies/ev-design-chatgpt.png",
    width: 2532,
    height: 1464,
    caption: "Recommended in ChatGPT",
    alt: "A ChatGPT conversation answering “EV Design Burnley” by identifying EV Design as a Burnley, Lancashire electrical design consultancy for EV charging infrastructure, followed by its contact details.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        patternId="results-grid"
        eyebrow="Results"
        title={
          <>
            From invisible to <span className="text-gradient">first in the answer</span>
          </>
        }
        sub="Where a client ends up when the work is done: first on Google in their own town, named in Google's AI Overview, and recommended by ChatGPT."
      />

      {/* ─── EV DESIGN CASE STUDY ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Case study</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-5 max-w-3xl">
              EV Design — <span className="text-gradient">#1 on Google in Burnley</span> &amp;
              recommended by AI
            </h2>
            <p className="text-[#565c6b] text-lg leading-relaxed mb-12 max-w-3xl">
              EV Design is an electrical design consultancy in Burnley, Lancashire, specialising
              in EV charging infrastructure. Search for them locally and their site comes back
              first, ahead of national installers. Search wider and Google&apos;s AI Overview
              names them as a North West specialist. Ask ChatGPT who they are and it answers with
              the business, the location and the phone number. Same business, three different
              places people now look — screenshots taken straight from live searches.
            </p>
          </FadeIn>

          <ScreenshotGallery shots={evDesignShots} />

          {/* ─── EV Design testimonial ──────────────────────────────────
              Client-approved wording. Do not paraphrase or trim it. */}
          <FadeIn delay={0.15}>
            <figure className="mt-10 rounded-2xl bg-gradient-brand-static p-8 md:p-10 text-white shadow-[0_16px_50px_rgba(61,76,245,0.28)]">
              <svg
                className="w-10 h-10 text-white/30 mb-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.5 4C6 4 3 7 3 10.5S6 17 9.5 17c.3 0 .6 0 .9-.1C9.6 18.7 8 20 6 20v2c4.4 0 8-3.6 8-8v-3.5C14 7 12.5 4 9.5 4z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-semibold leading-snug mb-6 max-w-3xl">
                &ldquo;Since working with TradeGrowth Marketing, my business comes up first on
                Google when people in Burnley search for what I do — and I&apos;m even showing up
                in ChatGPT now. Brad clearly knows his stuff and actually delivers the results he
                promises. Can&apos;t recommend him enough.&rdquo;
              </blockquote>
              <figcaption className="text-white/70 text-sm">
                <span className="block font-semibold text-white">Jonathan</span>
                EV Design · EV charging infrastructure &amp; site design · Burnley, Lancashire
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 text-center">
              <p className="text-[#565c6b] mb-5">
                Want to know where you&apos;d be starting from?
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-[0_8px_30px_rgba(61,76,245,0.3)]"
              >
                Get your free AEO audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading="Your area might still be free"
        sub="We take one client per trade or service, per area. If your postcode isn't taken yet, the free AEO audit is the fastest way to find out what we'd be working with."
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
