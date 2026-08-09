import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import PricingCard from "@/components/ui/PricingCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { tiers, websiteProduct } from "@/lib/pricing";
import { pricingFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Every price published in full. A website from £500 that you own outright, then Basic £200/mo, Standard £400/mo or Premium £500/mo — with a complete feature comparison and a double-your-money guarantee.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        patternId="pricing-grid"
        eyebrow="Pricing"
        title={
          <>
            Every price we charge, <span className="text-gradient">published</span>
          </>
        }
        sub="No &ldquo;book a call for a bespoke quote&rdquo;. You know what a job costs before you quote it, and you'd be wary of a customer who wouldn't tell you their budget. Same principle, applied to us."
      />

      {/* ─── THE WEBSITE ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Step one</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              Start with the website
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              It&apos;s the foundation everything else sits on, and it&apos;s a one-off. You can
              buy it and stop there — there&apos;s no monthly commitment attached to it at all.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-[#e6e8f2] overflow-hidden">
              <div className="grid md:grid-cols-[1fr_1.2fr]">
                <div className="bg-gradient-brand-static p-8 md:p-10 text-white flex flex-col justify-center">
                  <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3">
                    {websiteProduct.tagline}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-4">{websiteProduct.name}</h3>
                  <div className="text-5xl font-extrabold tracking-tight mb-2">
                    {websiteProduct.price}
                  </div>
                  <p className="text-white/75 text-sm mb-6">{websiteProduct.terms}</p>
                  <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-xs font-semibold w-fit">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {websiteProduct.commitment}
                  </span>
                </div>

                <div className="p-8 md:p-10 bg-white">
                  <ul className="space-y-3.5 mb-8">
                    {websiteProduct.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[#565c6b]">
                        <svg
                          className="w-5 h-5 text-[#3d4cf5] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
                  >
                    Start with the website
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MONTHLY PACKAGES ─────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <SectionLabel center>Step two</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold text-[#171a26] mb-4">
                Then pick one package on top
              </h2>
              <p className="text-[#565c6b] text-lg max-w-2xl mx-auto leading-relaxed">
                Each tier includes everything in the one below it. Most clients start on Standard
                and move up once the diary is consistently full.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.id} delay={i * 0.1} className="h-full">
                <PricingCard tier={tier} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.25}>
            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                {
                  title: "Minimum terms",
                  body: "3 months on Basic and Standard, 6 months on Premium. Month-to-month after that.",
                },
                {
                  title: "Ad spend",
                  body: "Paid by you directly to Google and Meta. We never take a cut of it or route it through us.",
                },
                {
                  title: "Exclusivity",
                  body: "One client per trade or service, per area. If we work with you, we turn down your competitors.",
                },
              ].map((note) => (
                <div key={note.title} className="bg-white border border-[#e6e8f2] rounded-xl p-5">
                  <h3 className="text-[#171a26] font-bold text-sm mb-2">{note.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{note.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FULL COMPARISON TABLE ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Line by line</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              The full feature comparison
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              Everything in all four tiers, side by side. The Website is a one-off build; Basic,
              Standard and Premium are monthly packages that sit on top of it.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ComparisonTable />
          </FadeIn>
        </div>
      </section>

      {/* ─── GUARANTEE ────────────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[440px] bg-[#5b1cf0] opacity-[0.18] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8b93ff]" />
              <span className="text-white/80 text-xs font-medium tracking-wide">
                The double-your-money guarantee
              </span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Double your money back — or we work for free
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              If the work we do doesn&apos;t return at least double what you&apos;ve paid us, we
              keep going at no charge until it does. We can offer that because we only take one
              client per trade or service, per area — we don&apos;t need to sign everybody, so we
              can afford to be picky about who we say yes to.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-[0_8px_30px_rgba(61,76,245,0.4)]"
            >
              Check if your area is free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-t border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              The awkward questions, answered
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={pricingFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading="Still weighing it up?"
        sub="Get the free AEO audit first. It costs nothing, it tells you where you actually stand in AI answers today, and it'll make the pricing decision a lot easier either way."
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
