import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Search, Target, Inbox, PhoneCall, Network } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import StatsRow from "@/components/ui/StatsRow";
import PricingCard from "@/components/ui/PricingCard";
import CTABand from "@/components/ui/CTABand";
import { services } from "@/lib/services";
import { tiers, websiteProduct } from "@/lib/pricing";
import { differentiators, agencyComparison } from "@/lib/differentiators";

export const metadata: Metadata = {
  title: "TradeGrowth Marketing | Get Found, Get Booked, Get Recommended by AI",
  description:
    "The AI-powered growth engine built for UK trades and local service businesses. Get found on Google, get named inside ChatGPT and AI Overviews, and get the jobs actually booked — with pricing published openly.",
};

const iconMap: Record<string, React.ReactNode> = {
  "website-design": <Globe className="w-7 h-7" strokeWidth={1.8} />,
  "seo-aeo": <Search className="w-7 h-7" strokeWidth={1.8} />,
  "google-meta-ads": <Target className="w-7 h-7" strokeWidth={1.8} />,
  "trade-crm": <Inbox className="w-7 h-7" strokeWidth={1.8} />,
  "done-for-you-sales": <PhoneCall className="w-7 h-7" strokeWidth={1.8} />,
  "trades-network": <Network className="w-7 h-7" strokeWidth={1.8} />,
};

const stats = [
  { value: "3", label: "Rings before the AI agent answers", suffix: " rings" },
  { value: "5", label: "AI assistants we optimise you for" },
  { value: "1", label: "Client per trade or service, per area" },
  { value: "2×", label: "Your money back, guaranteed" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0f1220] min-h-[88vh] flex items-center overflow-hidden pt-32 lg:pt-28 pb-20">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[640px] h-[640px] bg-[#3d4cf5] opacity-[0.22] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] bg-[#5b1cf0] opacity-[0.18] rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
            <div>
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-7">
                  <span className="w-2 h-2 rounded-full bg-[#8b93ff]" />
                  <span className="text-white/80 text-xs font-medium tracking-wide">
                    The AI Trades Engine — for UK trades &amp; local service businesses
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.12}>
                <h1 className="text-white text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.06] tracking-[-0.03em] mb-6">
                  Get found, get booked, and get{" "}
                  <span className="text-gradient">recommended by AI</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-9 max-w-xl">
                  Your customers have stopped scrolling through ten blue links. They ask ChatGPT
                  who to hire — and get three names back. We make sure one of them is yours, then
                  we answer the phone and chase the quote so the job actually gets booked.
                </p>
              </FadeIn>

              <FadeIn delay={0.28}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/audit"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-8 py-4 rounded-lg transition-all text-base shadow-[0_8px_30px_rgba(61,76,245,0.4)]"
                  >
                    Get my free AEO audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                  >
                    See our pricing — it&apos;s all published
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.36}>
                <p className="text-white/45 text-xs mt-8 font-medium tracking-wide uppercase">
                  One client per trade or service, per area · Double-your-money guarantee
                </p>
              </FadeIn>
            </div>

            {/* Mocked AI answer — shows, rather than explains, what AEO buys you. */}
            <FadeIn delay={0.24} direction="left">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-white/40 text-xs ml-2">AI assistant</span>
                </div>

                <p className="text-white/50 text-sm mb-4">
                  &ldquo;Who&apos;s the best electrician near me for a full rewire?&rdquo;
                </p>

                <div className="space-y-3">
                  {[
                    { name: "Your business here", note: "18 yrs experience · NICEIC · 94 reviews", us: true },
                    { name: "A competitor", note: "Local, 5-star rated" },
                    { name: "Another competitor", note: "Established 2009" },
                  ].map((r, i) => (
                    <div
                      key={r.name}
                      className={`flex items-start gap-3 rounded-lg px-3.5 py-3 border ${
                        r.us
                          ? "bg-gradient-to-r from-[#3d4cf5]/25 to-[#5b1cf0]/15 border-[#8b93ff]/40"
                          : "bg-white/[0.03] border-white/5"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                          r.us ? "bg-gradient-brand-static text-white" : "bg-white/10 text-white/50"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span>
                        <span
                          className={`block text-sm font-semibold ${r.us ? "text-white" : "text-white/60"}`}
                        >
                          {r.name}
                        </span>
                        <span className="block text-xs text-white/40 mt-0.5">{r.note}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-white/35 text-xs mt-4 pt-4 border-t border-white/10">
                  Illustrative example
                  <span className="ai-caret text-[#8b93ff]">▌</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e6e8f2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14">
          <StatsRow stats={stats} />
        </div>
      </section>

      {/* ─── THE FOUR DIFFERENTIATORS ─────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The AI Trades Engine</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171a26] mb-4 max-w-3xl">
              Four things your current agency almost certainly isn&apos;t doing
            </h2>
            <p className="text-[#565c6b] text-lg mb-14 max-w-2xl leading-relaxed">
              Any agency can build you a website and run some ads. These four are the reason our
              clients win jobs the others only generate leads for.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <FadeIn key={d.id} delay={i * 0.08}>
                <div className="relative h-full bg-white border border-[#e6e8f2] rounded-xl p-8 overflow-hidden hover:shadow-[0_8px_40px_rgba(61,76,245,0.1)] transition-shadow">
                  <span className="absolute top-6 right-7 text-5xl font-extrabold text-[#eef0ff] select-none">
                    {d.number}
                  </span>
                  <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-3">
                    {d.label}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-xl mb-3 pr-14">{d.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed mb-5">{d.body}</p>
                  <ul className="space-y-2">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                        <svg
                          className="w-4 h-4 text-[#3d4cf5] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIX SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Six services, one connected system
            </h2>
            <p className="text-[#565c6b] text-lg mb-14 max-w-2xl leading-relaxed">
              Every one of them is built AEO-ready from day one — schema, FAQ structure and
              llms.txt included, not sold back to you as an upgrade in six months.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={(i % 3) * 0.07}>
                <ServiceCard
                  title={s.label}
                  description={s.short}
                  href={`/services#${s.slug}`}
                  features={s.features.slice(0, 3)}
                  icon={iconMap[s.slug]}
                  headline={s.headline}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
              >
                See every service in detail
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── HONEST COMPARISON ────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light>The honest comparison</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Everyone helps you get leads.{" "}
              <span className="text-gradient">We help you win the jobs.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl leading-relaxed">
              Here&apos;s a straight comparison against how a typical local marketing agency
              works. Judge it for yourself.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
              <table className="w-full min-w-[680px] border-collapse">
                <caption className="sr-only">
                  TradeGrowth Marketing compared with a typical local marketing agency
                </caption>
                <thead>
                  <tr className="border-b border-white/15">
                    <th scope="col" className="text-left text-white/40 text-xs font-semibold uppercase tracking-widest pb-4 pr-6 w-[24%]">
                      &nbsp;
                    </th>
                    <th scope="col" className="text-left text-white/40 text-xs font-semibold uppercase tracking-widest pb-4 px-6 w-[38%]">
                      A typical local agency
                    </th>
                    <th scope="col" className="text-left text-xs font-semibold uppercase tracking-widest pb-4 pl-6 w-[38%] text-[#8b93ff]">
                      TradeGrowth Marketing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agencyComparison.map((row) => (
                    <tr key={row.area} className="border-b border-white/10 align-top">
                      <th scope="row" className="text-left text-white font-semibold text-sm py-5 pr-6">
                        {row.area}
                      </th>
                      <td className="text-white/45 text-sm py-5 px-6">
                        <span className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {row.typical}
                        </span>
                      </td>
                      <td className="text-white/90 text-sm py-5 pl-6 font-medium">
                        <span className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#8b93ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {row.us}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PRICING TEASER ───────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel center>Pricing, in public</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-[#171a26] mb-4">
                No &ldquo;book a call for a quote&rdquo;
              </h2>
              <p className="text-[#565c6b] text-lg max-w-2xl mx-auto leading-relaxed">
                A {websiteProduct.price} website you own outright, then one monthly package on
                top. Every price we charge is published — because you&apos;d be suspicious of a
                customer who wouldn&apos;t tell you their budget too.
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

          <FadeIn delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold hover:gap-3 transition-all"
              >
                Compare all four tiers in full
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PROOF / TESTIMONIAL ──────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Proof</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171a26] mb-12 max-w-2xl">
              What it looks like when it works
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-8 md:p-10">
                <span className="inline-block bg-[#eef0ff] text-[#3d4cf5] text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  Case study · EV Design, Burnley
                </span>
                {/* Only what the live screenshots on /results actually show —
                    no traffic, revenue or job-count figures. */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "#1", label: "On Google — local Burnley search" },
                    { value: "Named", label: "In Google's AI Overview for the North West" },
                    { value: "Recommended", label: "When you ask ChatGPT" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-gradient mb-1">{s.value}</div>
                      <div className="text-[#8a90a0] text-sm">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#565c6b] leading-relaxed mb-6">
                  EV Design designs EV charging infrastructure out of Burnley, Lancashire. Search
                  for them locally and their site comes back first, ahead of national installers.
                  Search wider and Google&apos;s AI Overview names them as a North West
                  specialist. Ask ChatGPT who they are and it answers with the business, the
                  location and the phone number.
                </p>
                <Link
                  href="/results"
                  className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read the full case study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              {/* Client-approved wording. Do not paraphrase or trim it. */}
              <figure className="h-full flex flex-col justify-center rounded-2xl bg-gradient-brand-static p-8 md:p-10 text-white shadow-[0_16px_50px_rgba(61,76,245,0.28)]">
                <svg className="w-10 h-10 text-white/30 mb-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.5 4C6 4 3 7 3 10.5S6 17 9.5 17c.3 0 .6 0 .9-.1C9.6 18.7 8 20 6 20v2c4.4 0 8-3.6 8-8v-3.5C14 7 12.5 4 9.5 4z" />
                </svg>
                <blockquote className="text-lg md:text-xl font-semibold leading-snug mb-6">
                  &ldquo;Since working with TradeGrowth Marketing, my business comes up first on
                  Google when people in Burnley search for what I do — and I&apos;m even showing
                  up in ChatGPT now. Brad clearly knows his stuff and actually delivers the
                  results he promises. Can&apos;t recommend him enough.&rdquo;
                </blockquote>
                <figcaption className="text-white/70 text-sm">
                  <span className="block font-semibold text-white">Jonathan</span>
                  EV Design · Burnley, Lancashire
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <CTABand />
    </>
  );
}
