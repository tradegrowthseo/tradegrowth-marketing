import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import AuditForm from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Free AEO Audit",
  description:
    "A free scan of how visible your trade business is inside ChatGPT, Perplexity, Gemini and Google AI Overviews, benchmarked against a competitor — delivered as a 5-page PDF report.",
};

const whatYouGet = [
  {
    number: "01",
    title: "Your AI visibility scan",
    body: "We ask ChatGPT, Perplexity, Gemini and Google AI Overviews the questions your customers actually ask — and record, word for word, whether your business gets named.",
  },
  {
    number: "02",
    title: "A competitor benchmark",
    body: "The same questions, scored against the business the AI names most often in your area. You'll see exactly what they have that you don't.",
  },
  {
    number: "03",
    title: "A 5-page PDF report",
    body: "The findings, the specific gaps in your schema, content, citations and llms.txt, and a prioritised list of what to fix first. Yours to keep either way.",
  },
];

const reportContents = [
  "Screenshots of the actual AI answers for your trade and area",
  "Which of the five answer engines name you, and which don't",
  "Your schema / JSON-LD coverage and what's missing",
  "Whether your site has an llms.txt file (almost certainly not)",
  "Citation consistency across the sources these models trust",
  "A prioritised fix list, ordered by impact",
];

export default function AuditPage() {
  return (
    <>
      <PageHero
        patternId="audit-grid"
        eyebrow="Free AEO audit"
        title={
          <>
            Find out what the AI says about you{" "}
            <span className="text-gradient">right now</span>
          </>
        }
        sub="We'll scan how visible your business is across ChatGPT, Perplexity, Gemini and Google AI Overviews, benchmark you against a competitor, and send you a 5-page report. Free, no card details, no obligation."
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

      {/* ─── WHAT YOU GET ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What&apos;s included</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Three things, and they&apos;re all yours to keep
            </h2>
            <p className="text-[#565c6b] text-lg mb-14 max-w-2xl leading-relaxed">
              Whether you work with us afterwards or not. If the report says you&apos;re already
              in good shape, we&apos;ll tell you that and you&apos;ve lost nothing.
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

      {/* ─── FORM + REPORT CONTENTS ───────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            {/* What's in the report */}
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionLabel>In the report</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-6">
                  Five pages, no filler
                </h2>
                <ul className="space-y-3.5 mb-8">
                  {reportContents.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[#565c6b]">
                      <svg
                        className="w-5 h-5 text-[#3d4cf5] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white border border-[#e6e8f2] rounded-xl p-5">
                  <h3 className="text-[#171a26] font-bold text-sm mb-2">
                    Why we give this away
                  </h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">
                    Because most trades have genuinely never seen what an AI assistant says about
                    their business, and it&apos;s usually the moment the penny drops. We&apos;d
                    rather show you than talk at you.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white border border-[#e6e8f2] rounded-2xl p-8 shadow-[0_4px_24px_rgba(23,26,38,0.06)]">
                  <SectionLabel>Request your audit</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#171a26] mb-6">
                    Tell us where to look
                  </h2>
                  <AuditForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT HAPPENS NEXT ────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[420px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[130px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light>What happens next</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 max-w-2xl">
              No sales pitch until you ask for one
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "Now",
                body: "You send the form. It takes about ninety seconds and we don't need card details.",
              },
              {
                step: "Within days",
                body: "We run the scan across all five assistants and email you the 5-page PDF report.",
              },
              {
                step: "After that",
                body: "One follow-up to ask if you'd like to talk it through. If you say no, that's the end of it.",
              },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="h-full bg-white/[0.05] border border-white/10 rounded-xl p-6">
                  <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#8b93ff] mb-3">
                    {s.step}
                  </span>
                  <p className="text-white/75 text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
