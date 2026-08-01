import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Eye, Handshake, Target } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { generalFaqs } from "@/lib/faqs";
import { trades } from "@/lib/differentiators";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why TradeGrowth Marketing exists, what we believe, and the two rules we run on: one client per trade per area, and a double-your-money guarantee.",
};

const values = [
  {
    icon: <Eye className="w-6 h-6" strokeWidth={1.8} />,
    title: "Transparent by default",
    body: "Every price is published on this website. Ad spend goes straight from you to Google and Meta so we can't skim it. Reports show what happened, including the months where the answer is \"not much yet\".",
  },
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.8} />,
    title: "Judged on jobs, not leads",
    body: "A lead is not a result. Anyone can buy you clicks and send a screenshot of them. We measure whether the phone got answered, whether the quote got chased and whether the job got booked.",
  },
  {
    icon: <Handshake className="w-6 h-6" strokeWidth={1.8} />,
    title: "Built for trades only",
    body: "We don't also do dentists, gyms and estate agents. Specialising is the only reason we can build things like EICR generation and a referral network that actually works.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.8} />,
    title: "Skin in the game",
    body: "The double-your-money guarantee means if it doesn't work, we keep working for free until it does. That's only possible because we're selective about who we take on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        patternId="about-grid"
        eyebrow="About us"
        title={
          <>
            Everyone helps you get leads.{" "}
            <span className="text-gradient">We help you win the jobs.</span>
          </>
        }
        sub="TradeGrowth Marketing exists because the gap between a lead and a booked job is where most trade businesses quietly lose money — and almost nobody in this industry is being paid to close it."
      />

      {/* ─── THE STORY ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The story</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Why we started
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
            {/* Pre-cropped 640x800 webp (27 KB). next.config sets
                images.unoptimized for the static export, so nothing resizes
                this at build time — the file has to arrive web-ready. 640x800
                is 2x the display box. The full-res master lives outside
                public/ at design-assets/brad-redfern.png so it doesn't deploy;
                regenerate from it if the framing ever changes. */}
            <FadeIn delay={0.08}>
              <figure className="w-[280px] sm:w-[320px] mx-auto lg:mx-0">
                <Image
                  src="/images/brad-redfern.webp"
                  alt="Brad Redfern, founder of TradeGrowth Marketing"
                  width={640}
                  height={800}
                  sizes="(min-width: 640px) 320px, 280px"
                  className="w-full aspect-[4/5] object-cover object-center rounded-2xl border border-[#e6e8f2] shadow-[0_16px_50px_rgba(23,26,38,0.14)]"
                />
                <figcaption className="mt-5 text-center lg:text-left">
                  <span className="block text-[#171a26] font-bold">Brad Redfern</span>
                  <span className="block text-[#8a90a0] text-sm">
                    Founder, TradeGrowth Marketing
                  </span>
                </figcaption>
              </figure>
            </FadeIn>

            <FadeIn delay={0.14} direction="left">
              <div className="space-y-5 text-[#565c6b] text-lg leading-relaxed">
                <p>
                  Talk to enough trades and the same story comes back. They&apos;ve paid an
                  agency for a website. Maybe they&apos;ve paid for ads. The leads come in, a
                  report arrives at the end of the month with an encouraging number on it — and
                  the diary still isn&apos;t full.
                </p>
                <p>
                  The reason is almost never the marketing. It&apos;s that a lead lands at 4pm on
                  a Tuesday while you&apos;re in a loft, goes to voicemail, and by the time you
                  call back at seven the customer has booked someone who picked up. Or the quote
                  goes out and nobody ever chases it, so a job you were 80% likely to win quietly
                  evaporates.
                </p>
                <p>
                  No agency was being paid to fix that half of the problem. They were being paid
                  for leads, so they optimised for leads — and the hardest, most valuable part of
                  the process was left entirely to the person who was already doing a full day on
                  the tools.
                </p>
                <p>
                  Then the second thing happened. Homeowners started asking ChatGPT and
                  Google&apos;s AI Overviews who to hire, and getting back three names instead of
                  ten links. An entire channel opened up that almost no trades business in the UK
                  is set up for, while the agencies serving them are still selling page-one
                  rankings.
                </p>
                <p className="text-[#171a26] font-semibold">
                  So we built the thing that handles both: get named by the AI, then actually
                  answer the phone and chase the quote. That&apos;s the AI Trades Engine, and
                  it&apos;s the whole business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <SectionLabel light center>
              Our mission
            </SectionLabel>
            <p className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight">
              To make good UK trade businesses the ones{" "}
              <span className="text-gradient">both Google and the AI recommend</span> — and then
              to make sure the work actually gets booked.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What we believe</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-12 max-w-2xl">
              Four things we won&apos;t compromise on
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="h-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl p-7">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#e6e8f2] flex items-center justify-center text-[#3d4cf5] mb-5">
                    {v.icon}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-[#565c6b] leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXCLUSIVITY + GUARANTEE ──────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="h-full bg-white border border-[#e6e8f2] rounded-2xl p-8 md:p-10">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-4">
                  Exclusivity
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-5">
                  One client per trade, per area
                </h3>
                <div className="space-y-4 text-[#565c6b] leading-relaxed">
                  <p>
                    If we work with an electrician in your town, we will not take on another one.
                    Not for more money, not for a bigger budget, not next quarter.
                  </p>
                  <p>
                    It costs us revenue and it&apos;s the single best decision we&apos;ve made.
                    It means our incentives point the same way as yours, it means the referral
                    network can exist at all, and it means we can look you in the eye about the
                    guarantee.
                  </p>
                  <p className="text-[#171a26] font-semibold">
                    The practical consequence: areas run out. If your postcode is still free,
                    it won&apos;t necessarily stay that way.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-[#3d4cf5] font-semibold hover:gap-3 transition-all"
                >
                  Check if your area is available
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl bg-gradient-brand-static p-8 md:p-10 text-white shadow-[0_16px_50px_rgba(61,76,245,0.28)]">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-white/70 mb-4">
                  The guarantee
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                  Double your money — or we work for free
                </h3>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    If the work we do doesn&apos;t return at least double what you&apos;ve paid
                    us, we keep working at no charge until it does.
                  </p>
                  <p>
                    It isn&apos;t a gimmick and it isn&apos;t buried in small print. It&apos;s
                    what happens when you only take on clients you&apos;re confident you can get
                    a result for — which is exactly what the one-per-area rule forces us to do.
                  </p>
                  <p className="font-semibold text-white">
                    If we don&apos;t think we can do that for your business, we&apos;ll tell you
                    on the first call rather than take your money.
                  </p>
                </div>
                <Link
                  href="/pricing"
                  className="mt-7 inline-flex items-center gap-2 bg-white text-[#3d4cf5] font-semibold px-5 py-3 rounded-lg text-sm w-fit hover:gap-3 transition-all"
                >
                  See what it costs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TRADES WE SERVE ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10 max-w-2xl">
              Trades we serve
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trades.map((trade, i) => (
              <FadeIn key={trade} delay={i * 0.03}>
                <div className="flex items-center gap-3 bg-[#f6f7fc] border border-[#e6e8f2] rounded-lg px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0" />
                  <span className="text-[#565c6b] text-sm font-medium">{trade}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="text-[#8a90a0] text-sm mt-6">
              Trade not on the list? Ask anyway — if we can get a result for you we&apos;ll say
              so, and if we can&apos;t we&apos;ll say that instead.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-t border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Common questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={generalFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
