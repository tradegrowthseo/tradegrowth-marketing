import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import TodoNote from "@/components/ui/TodoNote";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Results",
  description:
    "A case study showing what the AI Trades Engine does for a working electrician: before, what we built, the result, and the client's own words.",
};

// ⚠️ PLACEHOLDER DATA — every figure on this page is invented for layout
// purposes. Replace with the electrician's real signed-off numbers before
// launch, along with their name, business name, photo and filmed testimonial.
const beforeState = [
  {
    label: "AI visibility",
    value: "Not named",
    body: "Asking ChatGPT, Perplexity or Gemini for an electrician in their town returned three competitors and no mention of them at all.",
  },
  {
    label: "Missed calls",
    value: "~XX / week",
    body: "Calls came in while they were on the tools. Most went to voicemail, and most of those never rang back.",
  },
  {
    label: "Quote follow-up",
    value: "None",
    body: "Quotes went out and then nothing happened. No chase, no answer either way, no idea why jobs were lost.",
  },
  {
    label: "Website",
    value: "X years old",
    body: "Slow on mobile, no schema, no FAQ structure — invisible to answer engines and hard work for Google.",
  },
];

const whatWeBuilt = [
  {
    step: "01",
    title: "Rebuilt the website, AEO-ready",
    body: "A 10-page mobile-first build with JSON-LD schema, question-led FAQ pages and an llms.txt file. Domain moved into their name.",
  },
  {
    step: "02",
    title: "Fixed the citation trail",
    body: "Consistent business data across directories and review platforms, plus the Google Business Profile properly managed for the first time.",
  },
  {
    step: "03",
    title: "Answered every call",
    body: "AI voice agent picking up within three rings, 24/7, qualifying the job and booking it straight into the calendar.",
  },
  {
    step: "04",
    title: "Chased every quote",
    body: "A human appointment setter working the 48h / 5d / 10d / 20d / 30d cadence until each quote got a yes or a no.",
  },
];

const results = [
  { value: "1st", label: "Named first in AI answers", sub: "Was: not mentioned" },
  { value: "+XX%", label: "More quoted jobs per month", sub: "Months 1–6 vs prior 6" },
  { value: "XX%", label: "Of missed calls now booked", sub: "Was: voicemail" },
  { value: "£XX,XXX", label: "Added revenue in 6 months", sub: "Client-reported" },
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
        sub="One electrician, six months, and the full picture: where they started, what we actually built, what changed, and what they said about it afterwards."
      />

      {/* ─── PLACEHOLDER WARNING ──────────────────────────────────────── */}
      <section className="bg-white pt-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <TodoNote label="To replace">
              <strong>This entire case study is placeholder content.</strong> Every figure,
              percentage and quote below is invented to show the layout. Before this page goes
              live it needs the electrician&apos;s real signed-off numbers, their name and
              business name, a photo, and the filmed testimonial in place of the video block at
              the bottom.
            </TodoNote>
          </FadeIn>
        </div>
      </section>

      {/* ─── THE CLIENT ───────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <FadeIn>
              <PlaceholderImage
                label="Client photo"
                hint="Van, team or on-site shot — to be supplied"
                aspectRatio="4/3"
              />
            </FadeIn>
            <FadeIn delay={0.1} direction="left">
              <SectionLabel>The client</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-5">
                [Business name] — Electrician, [Town]
              </h2>
              <p className="text-[#565c6b] text-lg leading-relaxed mb-6">
                A [X]-person electrical firm doing domestic rewires, consumer unit upgrades and
                EV charger installs across [area]. Good at the work, well reviewed by the
                customers they had, and completely invisible to anyone who asked an AI assistant
                for a recommendation.
              </p>
              <dl className="grid sm:grid-cols-3 gap-4">
                {[
                  { k: "Trade", v: "Electrician" },
                  { k: "Team size", v: "[X] people" },
                  { k: "Engagement", v: "6 months" },
                ].map((d) => (
                  <div key={d.k} className="bg-[#f6f7fc] border border-[#e6e8f2] rounded-lg px-4 py-3">
                    <dt className="text-[#8a90a0] text-xs uppercase tracking-wide font-semibold mb-1">
                      {d.k}
                    </dt>
                    <dd className="text-[#171a26] font-semibold text-sm">{d.v}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BEFORE ───────────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Before</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4">
              Where they were starting from
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              Nothing here is unusual. This is roughly where most good trade businesses are
              sitting right now.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beforeState.map((b, i) => (
              <FadeIn key={b.label} delay={i * 0.07}>
                <div className="h-full bg-white border border-[#e6e8f2] rounded-xl p-6">
                  <span className="block text-[#8a90a0] text-xs font-semibold uppercase tracking-wide mb-2">
                    {b.label}
                  </span>
                  <span className="block text-2xl font-bold text-[#171a26] mb-3">{b.value}</span>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILT ────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The build</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-12 max-w-2xl">
              What we actually did
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeBuilt.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="relative h-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl p-7">
                  <div className="text-4xl font-extrabold text-gradient mb-3">{s.step}</div>
                  <h3 className="text-[#171a26] font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE RESULT ───────────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-24 relative overflow-hidden">
        <div className="absolute top-[-10%] right-0 w-[560px] h-[460px] bg-[#3d4cf5] opacity-[0.18] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-0 w-[420px] h-[420px] bg-[#5b1cf0] opacity-[0.16] rounded-full blur-[130px] pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light>The result</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
              Six months later
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl leading-relaxed">
              All figures below are placeholders pending the client&apos;s sign-off on the real
              numbers.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <FadeIn key={r.label} delay={i * 0.08}>
                <div className="h-full bg-white/[0.05] border border-white/10 rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                    {r.value}
                  </div>
                  <div className="text-white/80 text-sm font-medium mb-1">{r.label}</div>
                  <div className="text-white/40 text-xs">{r.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>In their words</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-12 max-w-2xl">
              What the client said
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-stretch">
            <FadeIn>
              <PlaceholderImage
                label="Filmed testimonial"
                hint="Video to be recorded and embedded here"
                aspectRatio="16/9"
                className="h-full"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <figure className="h-full flex flex-col justify-center rounded-2xl bg-gradient-brand-static p-8 md:p-10 text-white shadow-[0_16px_50px_rgba(61,76,245,0.28)]">
                <svg className="w-10 h-10 text-white/30 mb-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.5 4C6 4 3 7 3 10.5S6 17 9.5 17c.3 0 .6 0 .9-.1C9.6 18.7 8 20 6 20v2c4.4 0 8-3.6 8-8v-3.5C14 7 12.5 4 9.5 4z" />
                </svg>
                <blockquote className="text-xl md:text-2xl font-semibold leading-snug mb-6">
                  &ldquo;I didn&apos;t even know people were asking ChatGPT for an electrician.
                  Now I&apos;m the one it tells them to call — and I&apos;m not losing the jobs I
                  quote for any more.&rdquo;
                </blockquote>
                <figcaption className="text-white/70 text-sm">
                  <span className="block font-semibold text-white">[Client name]</span>
                  [Business name] · [Town]
                  <span className="block mt-3 text-white/50 text-xs">
                    Placeholder quote — to be replaced with the real signed-off testimonial.
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
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
        sub="We take one client per trade, per area. If your postcode isn't taken yet, the free AEO audit is the fastest way to find out what we'd be working with."
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
