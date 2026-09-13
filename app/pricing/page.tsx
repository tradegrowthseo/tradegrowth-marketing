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
  foundations,
  retainer,
  addOns,
  guarantees,
  capacity,
  commercials,
} from "@/lib/pricing";
import { pricingFaqs } from "@/lib/faqs";

// Built from lib/pricing.ts rather than retyped, so the SERP description can't
// quote a price the page no longer charges.
const [onYourSite, withNewSite] = foundations.options;

export const metadata: Metadata = {
  ...routeMeta("/pricing/"),
  title: "Pricing",
  description:
    `Every price published in full. ${foundations.name}: ninety days at a fixed ` +
    `${onYourSite.price} on your site or ${withNewSite.price} with a new one, then the ` +
    `${retainer.name} retainer at ${retainer.monthly}/mo, month to month. Five guarantees, in writing.`,
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
        sub="No &ldquo;book a call for a bespoke quote&rdquo;. You scope a fee proposal before you send it, and you'd think twice about a client who wouldn't discuss a budget. Same principle, applied to us: one fixed-price project, one monthly retainer, and the guarantees in writing."
      />

      {/* ─── STEP ONE: FOUNDATIONS ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Step one</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              {foundations.name}: ninety days, one fixed price
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              Everything a practice needs in place before any ongoing work is worth paying for,
              done in ninety days and measured at both ends. Two versions, depending on whether
              your site can carry the work. You can finish it and stop — nothing afterwards is
              required.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
            {foundations.options.map((option, i) => (
              <FadeIn key={option.id} delay={i * 0.1} className="h-full">
                <PricingCard
                  eyebrow={foundations.tagline}
                  name={option.name}
                  price={option.price}
                  priceSuffix="fixed"
                  meta="90 days · three monthly instalments"
                  best={option.best}
                  includesHeading="On top of everything below:"
                  features={option.adds}
                  featured={option.featured}
                  badge={option.featured ? "Most practices" : undefined}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-8 md:p-10">
              <h3 className="text-[#171a26] font-bold text-xl mb-2">
                In every {foundations.name}, whichever version
              </h3>
              <p className="text-[#565c6b] text-sm mb-7 max-w-2xl">{foundations.terms}</p>
              <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                {foundations.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#565c6b] text-sm leading-relaxed">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── STEP TWO: THE RETAINER ───────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Step two, if you want it</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              {retainer.name}: one retainer, month to month
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              Keeps the visibility current and builds on it. One price. What it contains depends
              on who you sell to, because a studio taking homeowner work and a consultancy
              tendering nationally do not need the same things done.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 items-stretch">
            <FadeIn className="h-full">
              <PricingCard
                eyebrow={retainer.tagline}
                name={`${retainer.name} retainer`}
                price={retainer.monthly}
                priceSuffix="/ month"
                meta={retainer.term}
                best={retainer.best}
                includesHeading="Every month, on either track:"
                features={retainer.common}
              />
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              {retainer.tracks.map((track, i) => (
                <FadeIn key={track.id} delay={0.1 + i * 0.08} className="h-full">
                  <div className="h-full bg-white border border-[#e6e8f2] rounded-xl p-7">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5]">
                      Track
                    </span>
                    <h3 className="text-[#171a26] font-bold text-lg mt-2 mb-2">{track.name}</h3>
                    <p className="text-[#8a90a0] text-sm leading-relaxed mb-5 pb-5 border-b border-[#e6e8f2]">
                      {track.who}
                    </p>
                    <ul className="space-y-3">
                      {track.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADD-ONS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Add-ons</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              Priced, published, and only where they fit
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              None of these is bundled in to pad a tier. Each is taken when it makes sense for
              your practice and declined when it doesn&apos;t.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addOn, i) => (
              <FadeIn key={addOn.id} delay={i * 0.08} className="h-full">
                <div
                  className={`h-full rounded-xl border p-7 ${
                    addOn.status === "pilot"
                      ? "border-dashed border-[#c9cddd] bg-[#f6f7fc]"
                      : "border-[#e6e8f2] bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[#171a26] font-bold text-lg">{addOn.name}</h3>
                    {addOn.status === "pilot" && (
                      <span className="flex-shrink-0 text-[10px] font-bold tracking-widest uppercase text-[#8a90a0] border border-[#c9cddd] rounded-full px-2.5 py-1">
                        In pilot
                      </span>
                    )}
                  </div>
                  <p className="text-[#3d4cf5] font-bold text-base mb-1">{addOn.price}</p>
                  <p className="text-[#8a90a0] text-xs mb-4">{addOn.who}</p>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{addOn.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
              The full comparison
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              Both {foundations.name} versions and the {retainer.name} retainer, side by side,
              with the add-ons and the commercials at the bottom.
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
                What sits outside the fee
              </h3>
              <p className="text-[#565c6b] text-sm leading-relaxed mb-4 max-w-3xl">
                The fee covers the scope listed above — there is no separate setup fee. Domain
                renewal from year two, ad spend, pages beyond the ten in a new site, photography
                and video are itemised and agreed before anything is started.
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
