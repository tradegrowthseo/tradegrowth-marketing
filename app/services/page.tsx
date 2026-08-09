import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Search, Target, Inbox, PhoneCall, Network } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The six services behind the AI Trades Engine, for UK trades and local service businesses: website design, SEO + AEO, Google & Meta ads, an industry-specific CRM, done-for-you sales and The Trades Network.",
};

const iconMap: Record<string, React.ReactNode> = {
  "website-design": <Globe className="w-6 h-6" strokeWidth={1.8} />,
  "seo-aeo": <Search className="w-6 h-6" strokeWidth={1.8} />,
  "google-meta-ads": <Target className="w-6 h-6" strokeWidth={1.8} />,
  "trade-crm": <Inbox className="w-6 h-6" strokeWidth={1.8} />,
  "done-for-you-sales": <PhoneCall className="w-6 h-6" strokeWidth={1.8} />,
  "trades-network": <Network className="w-6 h-6" strokeWidth={1.8} />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        patternId="svc-grid"
        eyebrow="Services"
        title={
          <>
            Six services. One <span className="text-gradient">connected system.</span>
          </>
        }
        sub="Buy the piece you need or the whole engine. Either way, every single one is built AEO-ready from day one — schema, FAQ structure and llms.txt included, never sold back to you later as an upgrade."
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

      {/* ─── AEO-READY BAND ───────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[130px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionLabel light>Built in, not bolted on</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                Every service ships AEO-ready from day one
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Most agencies build you a site, then come back in six months to sell you
                &ldquo;AI optimisation&rdquo; as a separate line item. We think that&apos;s
                selling you the same job twice. Schema, question-led FAQ structure and llms.txt
                are part of the build, whichever services you take.
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
                  "JSON-LD schema markup",
                  "Question-led FAQ structure",
                  "llms.txt for AI crawlers",
                  "Trusted citation building",
                  "Entity-consistent business data",
                  "Monthly AI visibility tracking",
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
        heading="Not sure which services you actually need?"
        sub="Start with the free AEO audit. It shows you exactly where you stand in AI answers today, and we'll tell you honestly which of the six would move the needle first."
      />
    </>
  );
}
