import type { Metadata } from "next";
import Link from "next/link";
import { Code2, MessageSquareQuote, BadgeCheck, FileText, LineChart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { aeoFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "What is AEO?",
  description:
    "Answer Engine Optimisation explained for UK trades: how homeowners now ask ChatGPT, Perplexity, Gemini and Google AI Overviews who to hire — and how we get your business named in the answer.",
};

const engines = [
  { name: "ChatGPT", note: "The default for most people now" },
  { name: "Perplexity", note: "Answers with cited sources" },
  { name: "Google AI Overviews", note: "Above the blue links" },
  { name: "Gemini", note: "Built into Android and Search" },
  { name: "Claude", note: "Widely used for research" },
];

const levers = [
  {
    icon: <Code2 className="w-6 h-6" strokeWidth={1.8} />,
    number: "01",
    title: "Schema / JSON-LD",
    body: "Machine-readable markup describing your services, service areas, credentials, opening hours, reviews and prices. It's how a model knows you're a NICEIC-registered electrician covering Bolton rather than just a page of words.",
  },
  {
    icon: <MessageSquareQuote className="w-6 h-6" strokeWidth={1.8} />,
    number: "02",
    title: "AI-ready FAQ content",
    body: "Content written the way people actually ask — \"how much does a full rewire cost?\", not \"our rewiring services\". Answer-first, specific, and structured so a model can lift a clean paragraph straight out of it.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" strokeWidth={1.8} />,
    number: "03",
    title: "Trusted citations",
    body: "Consistent listings across the directories, review platforms and local sources these models were trained on and still cite. Consistency matters more than volume: one wrong phone number across four sites does real damage.",
  },
  {
    icon: <FileText className="w-6 h-6" strokeWidth={1.8} />,
    number: "04",
    title: "llms.txt",
    body: "A plain-text file at the root of your site — the AI-era robots.txt — giving language models a clean summary of who you are, what you do and where you work. It costs nothing and almost no UK trades website has one.",
  },
  {
    icon: <LineChart className="w-6 h-6" strokeWidth={1.8} />,
    number: "05",
    title: "Monthly visibility tracking",
    body: "We ask each assistant the questions your customers ask, every month, and record whether you're named, where you rank in the answer and who's beating you. Without this you're guessing, and so is everyone selling you AEO.",
  },
];

function AnswerPanel({
  variant,
  results,
}: {
  variant: "before" | "after";
  results: { name: string; note: string; us?: boolean }[];
}) {
  const isAfter = variant === "after";
  return (
    <div
      className={`rounded-2xl border p-6 h-full ${
        isAfter
          ? "border-[#3d4cf5]/30 bg-white shadow-[0_12px_50px_rgba(61,76,245,0.14)]"
          : "border-[#e6e8f2] bg-[#f6f7fc]"
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[#e6e8f2]">
        <span
          className={`text-[11px] font-bold tracking-widest uppercase ${
            isAfter ? "text-[#3d4cf5]" : "text-[#8a90a0]"
          }`}
        >
          {isAfter ? "After — month 3" : "Before — month 0"}
        </span>
        <span className="text-[#8a90a0] text-xs">AI assistant</span>
      </div>

      <p className="text-[#8a90a0] text-sm mb-5">
        &ldquo;Who&apos;s the best electrician near me for a full rewire?&rdquo;
      </p>

      <div className="space-y-2.5">
        {results.map((r, i) => (
          <div
            key={r.name}
            className={`flex items-start gap-3 rounded-lg px-3.5 py-3 border ${
              r.us
                ? "bg-gradient-to-r from-[#eef0ff] to-[#f3eeff] border-[#3d4cf5]/30"
                : "bg-white border-[#e6e8f2]"
            }`}
          >
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                r.us ? "bg-gradient-brand-static text-white" : "bg-[#eceef6] text-[#8a90a0]"
              }`}
            >
              {i + 1}
            </span>
            <span>
              <span
                className={`block text-sm font-semibold ${r.us ? "text-[#171a26]" : "text-[#565c6b]"}`}
              >
                {r.name}
              </span>
              <span className="block text-xs text-[#8a90a0] mt-0.5">{r.note}</span>
            </span>
          </div>
        ))}
      </div>

      <p className="text-[#8a90a0] text-xs mt-5 pt-4 border-t border-[#e6e8f2]">
        {isAfter ? (
          <>
            You&apos;re the first name in the answer
            <span className="ai-caret text-[#3d4cf5]">▌</span>
          </>
        ) : (
          "You aren't mentioned at all"
        )}
      </p>
    </div>
  );
}

export default function AeoPage() {
  return (
    <>
      <PageHero
        patternId="aeo-grid"
        eyebrow="The AI Trades Engine"
        title={
          <>
            What is <span className="text-gradient">AEO</span>, and why should a
            tradesperson care?
          </>
        }
        sub="Answer Engine Optimisation is the work of getting your business named and recommended inside AI-generated answers. Not ranked in a list of links — named, in the answer itself, as the business to call."
      />

      {/* ─── THE SHIFT ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
            <FadeIn>
              <SectionLabel>What changed</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-6 leading-tight">
                Homeowners stopped scrolling. They started asking.
              </h2>
              <div className="space-y-5 text-[#565c6b] text-lg leading-relaxed">
                <p>
                  For twenty years, finding a tradesperson meant typing something into Google and
                  working down a page of ten blue links. Every agency in the country learned to
                  compete for those ten places.
                </p>
                <p>
                  That&apos;s not how a growing number of jobs start any more. A homeowner opens
                  ChatGPT and types &ldquo;we need a full rewire in a 1930s semi in Bolton, who
                  should we call and what should it cost?&rdquo; — and gets back a short answer
                  with two or three businesses named and a reason for each.
                </p>
                <p className="text-[#171a26] font-semibold">
                  There is no page two. There are no ten links. There are three names, and either
                  you&apos;re one of them or you don&apos;t exist for that customer.
                </p>
                <p>
                  The behaviour skews towards the jobs worth winning. Someone with a dripping tap
                  still searches Google. Someone planning a rewire, a new boiler or an extension
                  asks an assistant to compare the options first — because it&apos;s a bigger
                  decision and they want it explained.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12} direction="left">
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-8">
                <h3 className="text-[#171a26] font-bold text-lg mb-2">
                  The five answer engines we optimise for
                </h3>
                <p className="text-[#8a90a0] text-sm mb-6">
                  Each one builds its answers differently, so being named by one doesn&apos;t
                  mean being named by the rest.
                </p>
                <ul className="space-y-3">
                  {engines.map((e) => (
                    <li
                      key={e.name}
                      className="flex items-center justify-between gap-4 bg-white border border-[#e6e8f2] rounded-lg px-4 py-3.5"
                    >
                      <span className="text-[#171a26] font-semibold text-sm">{e.name}</span>
                      <span className="text-[#8a90a0] text-xs text-right">{e.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER PROOF ─────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <SectionLabel center>The difference AEO makes</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold text-[#171a26] mb-4">
                You weren&apos;t recommended.{" "}
                <span className="text-gradient">Now you&apos;re first.</span>
              </h2>
              <p className="text-[#565c6b] text-lg max-w-2xl mx-auto leading-relaxed">
                Same question, same assistant, same town — asked before we started and again
                three months in.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <FadeIn delay={0.05}>
              <AnswerPanel
                variant="before"
                results={[
                  { name: "Competitor A", note: "Named first, with a reason" },
                  { name: "Competitor B", note: "Named second" },
                  { name: "Competitor C", note: "Mentioned as an alternative" },
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <AnswerPanel
                variant="after"
                results={[
                  { name: "Your business", note: "NICEIC registered · 18 yrs · 94 reviews", us: true },
                  { name: "Competitor A", note: "Named second" },
                  { name: "Competitor B", note: "Mentioned as an alternative" },
                ]}
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-[#8a90a0] text-sm text-center mt-8 max-w-2xl mx-auto">
              Illustrative example of the change AEO produces. Your free audit shows you the real
              version — the actual answers each assistant gives for your trade in your area right
              now.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── THE FIVE LEVERS ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>How it&apos;s actually done</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Five levers, pulled together
            </h2>
            <p className="text-[#565c6b] text-lg mb-14 max-w-2xl leading-relaxed">
              None of these is a secret and none of them is magic. They work because almost no
              trades business in the UK is doing them yet.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levers.map((lever, i) => (
              <FadeIn key={lever.number} delay={(i % 3) * 0.07}>
                <div className="relative h-full bg-white border border-[#e6e8f2] rounded-xl p-7 overflow-hidden hover:border-[#3d4cf5]/40 hover:shadow-[0_8px_40px_rgba(61,76,245,0.1)] transition-all">
                  <span className="absolute top-5 right-6 text-4xl font-extrabold text-[#eef0ff] select-none">
                    {lever.number}
                  </span>
                  <span className="w-12 h-12 rounded-xl bg-[#eef0ff] flex items-center justify-center text-[#3d4cf5] mb-5">
                    {lever.icon}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3 pr-10">{lever.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{lever.body}</p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.21}>
              <div className="h-full rounded-xl bg-gradient-brand-static p-7 text-white flex flex-col justify-center shadow-[0_12px_40px_rgba(61,76,245,0.28)]">
                <h3 className="font-bold text-xl mb-3">See where you stand today</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  We&apos;ll run all five checks against your business and send you a 5-page
                  report showing exactly what each assistant says when someone asks for your
                  trade in your area.
                </p>
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 bg-white text-[#3d4cf5] font-semibold px-5 py-3 rounded-lg text-sm w-fit hover:gap-3 transition-all"
                >
                  Get the free audit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-t border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              AEO, answered properly
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={aeoFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
