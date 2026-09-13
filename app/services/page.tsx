import type { Metadata } from "next";
import { routeMeta } from "@/lib/seo";
import Link from "next/link";
import { Globe, Search, Target, Inbox } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import {
  services,
  enquiryPipeline,
  pipelineOutcomes,
  responsibilities,
  attributionNotes,
  trackingCaveats,
} from "@/lib/services";
import { scopeNotes } from "@/lib/pricing";

export const metadata: Metadata = {
  ...routeMeta("/services/"),
  title: "Services",
  description:
    "Three services for UK construction, engineering and design businesses: website design, SEO and AI-search visibility, and Google & Meta ads as an add-on — plus the enquiry-management pilot, described honestly.",
};

const iconMap: Record<string, React.ReactNode> = {
  "website-design": <Globe className="w-6 h-6" strokeWidth={1.8} />,
  "seo-aeo": <Search className="w-6 h-6" strokeWidth={1.8} />,
  "google-meta-ads": <Target className="w-6 h-6" strokeWidth={1.8} />,
  "trade-crm": <Inbox className="w-6 h-6" strokeWidth={1.8} />,
};

// Sections that were consolidated away still have links pointing at them from
// older pages and anything already indexed. Rendering their old ids inside the
// section that absorbed the content keeps those links landing on the relevant
// content instead of dumping the reader at the top of the page.
const legacyAnchors: Record<string, string[]> = {
  "trade-crm": ["done-for-you-sales"],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        patternId="svc-grid"
        eyebrow="Services"
        title={
          <>
            Three services. <span className="text-gradient">Built in the right order.</span>
          </>
        }
        sub="Foundations first, then the retainer if you want it. Every build ships ready for search and AI-assisted search — structured data, question-led content and case studies included, never sold back to you later as an upgrade."
      />

      {/* ─── JUMP NAV ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e6e8f2] sticky top-[104px] lg:top-24 z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 -mx-1">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#565c6b] hover:text-[#3d4cf5] hover:bg-[#eef0ff] transition-colors whitespace-nowrap"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE DETAIL SECTIONS ──────────────────────────────────── */}
      {services.map((service, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            // Offset for the fixed header + sticky jump nav when linked to by hash.
            className={`scroll-mt-44 py-20 md:py-24 border-b border-[#e6e8f2] ${
              alt ? "bg-[#f6f7fc]" : "bg-white"
            }`}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
              {legacyAnchors[service.slug]?.map((id) => (
                <span key={id} id={id} className="block scroll-mt-44" aria-hidden="true" />
              ))}
              <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
                <FadeIn>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl bg-[#eef0ff] flex items-center justify-center text-[#3d4cf5] flex-shrink-0">
                      {iconMap[service.slug]}
                    </span>
                    <div>
                      <span className="block text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5]">
                        {service.tagline}
                      </span>
                      <span className="block text-[#8a90a0] text-xs mt-0.5">
                        Service {String(i + 1).padStart(2, "0")} of {String(services.length).padStart(2, "0")}
                      </span>
                    </div>
                    {service.headline && (
                      <span className="ml-auto bg-gradient-brand-static text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        Headline service
                      </span>
                    )}
                    {service.status === "pilot" && (
                      <span className="ml-auto border border-[#c9cddd] text-[#8a90a0] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                        In pilot · not yet sold
                      </span>
                    )}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-5 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#171a26] text-lg leading-relaxed mb-6 font-medium">
                    {service.intro}
                  </p>
                  <div className="space-y-4 text-[#565c6b] leading-relaxed">
                    {service.detail.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={0.1} direction="left">
                  <div className="lg:sticky lg:top-48 space-y-4">
                    {service.deliverables.map((d) => (
                      <div
                        key={d.title}
                        className={`rounded-xl border border-[#e6e8f2] p-6 ${
                          alt ? "bg-white" : "bg-[#f6f7fc]"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[#3d4cf5] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <div>
                            <h3 className="text-[#171a26] font-bold text-base mb-1.5">{d.title}</h3>
                            <p className="text-[#565c6b] text-sm leading-relaxed">{d.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="rounded-xl border border-[#e6e8f2] bg-white p-6">
                      <h3 className="text-[#171a26] font-bold text-sm mb-3">Also included</h3>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* ─── ILLUSTRATIVE PIPELINE ────────────────────────────────────── */}
      <section id="enquiry-pipeline" className="scroll-mt-44 bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>An example pipeline</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              What the enquiry pipeline in pilot looks like
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              What&apos;s being piloted now, not a product on the price list. Stages and timings are
              agreed with each practice — a studio taking residential work and a consultancy
              tendering on frameworks do not want the same pipeline.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ol className="flex flex-wrap items-stretch gap-3 mb-8">
              {enquiryPipeline.map((stage, i) => (
                <li key={stage} className="flex items-center gap-3">
                  <span className="flex items-center gap-3 h-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl px-5 py-4">
                    <span className="w-6 h-6 rounded-md bg-gradient-brand-static text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-[#171a26] text-sm font-semibold whitespace-nowrap">
                      {stage}
                    </span>
                  </span>
                  {/* Arrows only at xl, the one breakpoint where all five stages
                      fit on a single line. Below that the row wraps and the arrow
                      on the last item of a line points into empty space. */}
                  {i < enquiryPipeline.length - 1 && (
                    <svg className="w-4 h-4 text-[#8a90a0] flex-shrink-0 hidden xl:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="rounded-xl border border-[#e6e8f2] bg-[#f6f7fc] p-6 md:p-7">
              <h3 className="text-[#171a26] font-bold text-base mb-1.5">
                Outcomes, not further steps
              </h3>
              <p className="text-[#565c6b] text-sm leading-relaxed mb-4">
                An enquiry can reach any of these from any stage. Nothing has to walk the whole
                line, and plenty of good enquiries don&apos;t.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {pipelineOutcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="inline-flex items-center gap-2 bg-white border border-[#e6e8f2] rounded-full px-4 py-1.5 text-sm font-medium text-[#565c6b]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static" />
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              <div className="rounded-xl border border-[#e6e8f2] bg-white p-6">
                <h3 className="text-[#3d4cf5] text-[11px] font-bold tracking-widest uppercase mb-2.5">
                  What we do
                </h3>
                <p className="text-[#565c6b] text-sm leading-relaxed">{responsibilities.ours}</p>
              </div>
              <div className="rounded-xl border border-[#e6e8f2] bg-white p-6">
                <h3 className="text-[#3d4cf5] text-[11px] font-bold tracking-widest uppercase mb-2.5">
                  What your team does
                </h3>
                <p className="text-[#565c6b] text-sm leading-relaxed">{responsibilities.yours}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT GETS RECORDED, AND WHAT CAN BE ATTRIBUTED ──────────── */}
      <section id="attribution" className="scroll-mt-44 bg-[#0f1220] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[560px] h-[380px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light>What the reporting can and can&apos;t say</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl leading-snug">
              Four things worth keeping apart
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl leading-relaxed">
              Most marketing reports quietly blur these together, which is how a click count ends
              up being presented as a pipeline. We keep them separate.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {attributionNotes.map((note, i) => (
              <FadeIn key={note.term} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-white font-bold text-base mb-2">{note.term}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{note.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <ul className="space-y-3">
              {trackingCaveats.map((caveat) => (
                <li key={caveat} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <svg className="w-4 h-4 text-[#8b93ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  {caveat}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ─── SCOPE AND COSTS ──────────────────────────────────────────── */}
      <section id="scope-and-costs" className="scroll-mt-44 bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Scope and costs</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              What&apos;s included, and what isn&apos;t
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-2xl leading-relaxed">
              The packages are a defined standard scope. Here is where that scope ends, so
              nothing arrives as a surprise on an invoice.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {scopeNotes.map((note, i) => (
              <FadeIn key={note.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-xl border border-[#e6e8f2] bg-white p-6">
                  <h3 className="text-[#171a26] font-bold text-base mb-2">{note.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{note.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AEO-READY BAND ───────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[130px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel light>Built in, not bolted on</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                Every service ships ready for AI-assisted search
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                The common pattern is to build a site, then return six months later to sell
                &ldquo;AI optimisation&rdquo; as a separate line item. That is charging twice for
                the same groundwork. Structured data, question-led content and case studies are part
                of the build, whichever services you take — none of it a guarantee that an
                assistant will name you, all of it the work that makes it possible.
              </p>
              <Link
                href="/aeo"
                className="inline-flex items-center gap-2 text-[#8b93ff] font-semibold hover:gap-3 transition-all"
              >
                Understand how AEO works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "JSON-LD structured data",
                  "Question-led content structure",
                  "Case studies, drafted from a call",
                  "Consistent listings and citations",
                  "Entity-consistent business data",
                  "Monthly AI visibility reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b93ff] flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABand
        heading="Not sure which of these you actually need?"
        sub="Start with the free AI-search audit. It shows how you're described in AI answers today, and we'll tell you honestly which of the four would make the most difference first."
      />
    </>
  );
}
