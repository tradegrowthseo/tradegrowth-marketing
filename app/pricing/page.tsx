import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import PricingCard from "@/components/ui/PricingCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import {
  tiers,
  tracks,
  websiteProduct,
  websiteOptions,
  guarantees,
  capacity,
  commercials,
  minimumLabel,
  tierById,
  annual,
} from "@/lib/pricing";
import { pricingFaqs } from "@/lib/faqs";

// Built from lib/pricing.ts rather than retyped, so the SERP description can't
// quote a price the page no longer charges.
const basic = tierById("basic");
const standard = tierById("standard");
const premium = tierById("premium");

export const metadata: Metadata = {
  ...routeMeta("/pricing/"),
  title: "Pricing",
  description:
    `Every price published in full. A website you own outright at ` +
    `${websiteOptions[0].price} or ${websiteOptions[1].price}, then ${basic.name} ` +
    `${basic.monthly}/mo, ${standard.name} ${standard.monthly}/mo or ${premium.name} ` +
    `${premium.monthly}/mo on top — with five guarantees in writing and a full comparison.`,
};

const Tick = () => (
  <svg
    className="w-5 h-5 text-[#3d4cf5] flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

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
        sub="No &ldquo;book a call for a bespoke quote&rdquo;. You scope a fee proposal before you send it, and you'd think twice about a client who wouldn't discuss a budget. Same principle, applied to us — and the guarantees are in writing too."
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
              And if the site you have is sound, there&apos;s no website fee.
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
                  <div className="space-y-3 mb-5">
                    {websiteOptions.map((option) => (
                      <div
                        key={option.id}
                        className="rounded-xl bg-white/10 border border-white/20 px-4 py-3"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-white font-semibold text-sm">{option.name}</span>
                          <span className="text-white text-2xl font-extrabold tracking-tight">
                            {option.price}
                          </span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed mt-1.5">{option.best}</p>
                      </div>
                    ))}
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
                        <Tick />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/audit"
                    className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
                  >
                    Start with the free audit
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
                Each tier includes everything in the one below it. Every tier includes content,
                because nothing moves without it. Start where the work you want needs you to,
                and move up or down as the project pipeline changes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.id} delay={i * 0.1} className="h-full">
                <PricingCard
                  eyebrow={tier.tagline}
                  name={tier.name}
                  price={tier.monthly}
                  priceSuffix="/ month"
                  meta={`+ website fee · ${minimumLabel(tier)}`}
                  note={tier.note}
                  best={tier.best}
                  includesHeading={tier.includesBelow}
                  features={tier.features}
                  bonuses={tier.bonuses}
                  featured={tier.featured}
                  badge={tier.featured ? "Recommended" : undefined}
                />
              </FadeIn>
            ))}
          </div>

          {/* ─── TRACKS ────────────────────────────────────────────────── */}
          <FadeIn delay={0.2}>
            <div className="mt-16">
              <SectionLabel>Standard and Premium, by who you sell to</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-3">
                Two tracks, because the levers aren&apos;t the same
              </h3>
              <p className="text-[#565c6b] text-base mb-8 max-w-2xl leading-relaxed">
                A studio taking homeowner work has local search intent to capture. A consultancy
                tendering nationally has almost none — and the published evidence says what
                moves AI visibility for it is other people mentioning it. Basic is the same
                for everyone; Standard and Premium follow your track.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {tracks.map((track) => (
                  <div key={track.id} className="bg-white border border-[#e6e8f2] rounded-xl p-7">
                    <h4 className="text-[#171a26] font-bold text-lg mb-1.5">{track.name}</h4>
                    <p className="text-[#8a90a0] text-sm leading-relaxed mb-5 pb-5 border-b border-[#e6e8f2]">
                      {track.who}
                    </p>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2.5">
                      On {standard.name}
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {track.standard.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2.5">
                      Added on {premium.name}
                    </p>
                    <ul className="space-y-2.5">
                      {track.premium.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── GUARANTEES ───────────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[560px] h-[380px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light>Guarantees</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl leading-snug">
              Five things we put in writing
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl leading-relaxed">
              Nobody controls what Google ranks or what an assistant says, so none of these
              promises either. Each one is something we do control, and can be held to.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <FadeIn key={g.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="block text-3xl font-extrabold text-white/10 mb-3 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold text-base mb-2">{g.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{g.body}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.24} className="h-full">
              <div className="h-full rounded-xl bg-gradient-brand-static p-6 text-white flex flex-col justify-center">
                <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-2">
                  Capacity
                </span>
                <p className="text-3xl font-extrabold mb-2">
                  {capacity.perQuarter} practices a quarter
                </p>
                <p className="text-white/80 text-sm leading-relaxed">{capacity.body}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── COMMERCIALS ──────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-16 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {commercials.map((note) => (
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

          {/* direction="none" keeps a transform off this wrapper, which stops the
              table's scroll container leaking overflow to document.body. It is not
              on its own enough to stop the page going wide at 375px — the fix for
              that is `contain-content` on the scroller inside ComparisonTable. */}
          <FadeIn delay={0.08} direction="none">
            <ComparisonTable />
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10 rounded-xl border border-[#e6e8f2] bg-[#f6f7fc] p-6 md:p-7">
              <h3 className="text-[#171a26] font-bold text-base mb-2">
                What sits outside the monthly fee
              </h3>
              <p className="text-[#565c6b] text-sm leading-relaxed mb-4 max-w-3xl">
                The fee covers the scope listed above for your tier and track — there is no
                separate setup fee. Domain renewal from year two, ad spend, pages beyond those in
                the build, photography and video are itemised and agreed before anything is
                started.
              </p>
              <Link
                href="/services#scope-and-costs"
                className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
              >
                Full scope and costs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
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
        sub="Get the free AI-search audit first. It costs nothing, it shows how your practice is described in AI answers today, and if you're already in good shape it says so — that's the third guarantee."
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
