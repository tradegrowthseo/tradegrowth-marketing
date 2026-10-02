import type { Metadata } from "next";
import type { BreadcrumbList, Graph, Service } from "schema-dts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { getSector, sectors } from "@/lib/sectors";
import { builtWebsites } from "@/lib/websites";
import { guarantees, tierById, tracks, websiteOptions } from "@/lib/pricing";

const SITE_URL = "https://tradegrowthseo.com";

// Static export: every sector is pre-rendered, and an unknown slug is a 404
// rather than a page rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    ...routeMeta(`/sectors/${sector.slug}/`),
    // Absolute, with a short brand suffix: the layout template's full
    // suffix pushes these past sixty characters.
    title: { absolute: `${sector.metaTitle} | TradeGrowth` },
    description: sector.metaDescription,
  };
}

/** "MEP & Building Services Engineers" -> "MEP & building services engineers" */
function lower(name: string) {
  return name
    .split(" ")
    .map((w) => (w.length > 1 && w === w.toUpperCase() && /[A-Z]/.test(w) ? w : w.toLowerCase()))
    .join(" ");
}

const LINK = "text-[#3d4cf5] font-semibold hover:underline";

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

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default async function SectorPage({ params }: Params) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const path = `/sectors/${sector.slug}/`;
  const lc = lower(sector.name);
  const proof = sector.proofSlug ? builtWebsites.find((w) => w.slug === sector.proofSlug) : undefined;
  const relevantTracks = tracks.filter((t) => sector.track === "both" || t.id === sector.track);
  const related = sector.related
    .map((s) => getSector(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const basic = tierById("basic");
  const standard = tierById("standard");
  const premium = tierById("premium");

  const pageSchema: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name: `Marketing for ${lc}`,
        serviceType: "Website design, SEO and AI-search visibility",
        url: `${SITE_URL}${path}`,
        description: sector.metaDescription,
        provider: { "@id": `${SITE_URL}/#organisation` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        audience: { "@type": "Audience", audienceType: sector.name },
      } satisfies Service,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Sectors", item: `${SITE_URL}/sectors/` },
          { "@type": "ListItem", position: 3, name: sector.name, item: `${SITE_URL}${path}` },
        ],
      } satisfies BreadcrumbList,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <PageHero
        patternId={`sector-${sector.slug}-grid`}
        eyebrow={sector.group}
        title={
          <>
            Marketing for <span className="text-gradient">{lc}</span>
          </>
        }
        sub={sector.heroSub}
      >
        <nav aria-label="Breadcrumb" className="mt-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/sectors" className="hover:text-white transition-colors">
                Sectors
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white/80" aria-current="page">
              {sector.name}
            </li>
          </ol>
        </nav>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-lg text-sm shadow-[0_8px_30px_rgba(61,76,245,0.4)]"
          >
            Get my free AI-search audit
            <Arrow />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors"
          >
            See pricing
          </Link>
        </div>
      </PageHero>

      {/* ─── ANSWER FIRST + KEY TAKEAWAYS ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <FadeIn>
              <SectionLabel>In short</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-5 leading-tight">
                What does marketing for {lc} involve?
              </h2>
              <div className="space-y-4 text-[#565c6b] text-lg leading-relaxed">
                {sector.answer.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} direction="left">
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-7 md:p-8">
                <h3 className="text-[#171a26] font-bold text-base mb-5">Key takeaways</h3>
                <ul className="space-y-3.5">
                  {sector.takeaways.map((line) => (
                    <li key={line} className="flex items-start gap-3 text-[#565c6b] text-sm leading-relaxed">
                      <Tick />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── HOW THIS DISCIPLINE WINS WORK ────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Where the work comes from</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-8 max-w-3xl">
              How do {lc} win work?
            </h2>
            <div className="space-y-5 text-[#565c6b] text-lg leading-relaxed max-w-3xl">
              {sector.winsWork.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHAT THE BUYER CHECKS / WHAT THE SITE SHOWS ──────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn>
              <SectionLabel>Before they call</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-6">
                What does a client check before appointing {sector.singular}?
              </h2>
              <ul className="space-y-4">
                {sector.buyerChecks.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[#565c6b] leading-relaxed">
                    <Tick />
                    {c}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel>What we build</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-6">
                What should the website show?
              </h2>
              <ul className="space-y-4">
                {sector.siteShows.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[#565c6b] leading-relaxed">
                    <Tick />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-[#8a90a0] text-sm mt-6 leading-relaxed">
                Project write-ups are drafted by us from a twenty-minute call with you and
                approved before anything is published. How the build works is on the{" "}
                <Link href="/services#website-design" className={LINK}>
                  website design
                </Link>{" "}
                section of our services page.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── QUESTIONS CLIENTS ASK + HOW THE WORK IS SHAPED ───────────── */}
      <section className="bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
            <FadeIn>
              <SectionLabel>What gets searched and asked</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-4">
                What do clients ask before they find {sector.singular}?
              </h2>
              <p className="text-[#565c6b] leading-relaxed mb-6">
                Questions like these, typed into Google or put to an AI assistant. They are
                examples of the kind of thing people ask, not measured search volumes; your own
                Search Console data is what decides which ones the site answers first.
              </p>
              <ul className="space-y-3">
                {sector.questions.map((q) => (
                  <li
                    key={q}
                    className="bg-white border border-[#e6e8f2] rounded-lg px-4 py-3 text-sm text-[#171a26] font-medium"
                  >
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel>How we shape the work</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-4">
                Which approach suits {lc}?
              </h2>
              <p className="text-[#565c6b] leading-relaxed mb-6">{sector.trackNote}</p>
              <div className="space-y-4">
                {relevantTracks.map((t) => (
                  <div key={t.id} className="bg-white border border-[#e6e8f2] rounded-xl p-6">
                    <h3 className="text-[#171a26] font-bold text-base mb-1.5">{t.name}</h3>
                    <p className="text-[#8a90a0] text-sm leading-relaxed mb-4">{t.who}</p>
                    <ul className="space-y-2">
                      {[...t.standard, ...t.premium].map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#565c6b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-[#8a90a0] text-sm mt-5 leading-relaxed">
                The detail of what each package includes is in the{" "}
                <Link href="/services#seo-aeo" className={LINK}>
                  SEO and AI-search visibility
                </Link>{" "}
                section and on the{" "}
                <Link href="/pricing" className={LINK}>
                  pricing page
                </Link>
                .
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PROOF, STATED HONESTLY ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Our work in this sector</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-6 max-w-3xl">
              Have you worked with {lc} before?
            </h2>
            {proof ? (
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-7 md:p-9">
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5]">
                  {proof.location}
                </span>
                <h3 className="text-[#171a26] font-bold text-2xl mt-2 mb-3">{proof.name}</h3>
                <p className="text-[#565c6b] leading-relaxed mb-3 max-w-3xl">{proof.who}</p>
                <p className="text-[#565c6b] leading-relaxed mb-6 max-w-3xl">{proof.built}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <a
                    href={proof.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Visit {proof.host}
                    <Arrow />
                  </a>
                  <Link href="/websites" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                    See all the websites we&apos;ve built
                    <Arrow />
                  </Link>
                  {proof.more && (
                    <Link href={proof.more.href} className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                      {proof.more.label}
                      <Arrow />
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-7 md:p-9">
                <p className="text-[#565c6b] text-lg leading-relaxed mb-4 max-w-3xl">
                  Not yet, and we would rather say so than imply otherwise. The websites we have
                  built so far are for an architecture practice, a mechanical and electrical
                  consultancy and an EV charging design consultancy. The method is the same for{" "}
                  {lc}: a site organised around completed work, credentials where a buyer looks,
                  and reporting on what can actually be measured.
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <Link href="/websites" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                    See the websites we&apos;ve built
                    <Arrow />
                  </Link>
                  <Link href="/results" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                    Read the EV Design case study
                    <Arrow />
                  </Link>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ─── COST, GUARANTEES, PROFESSIONAL BODIES ────────────────────── */}
      <section className="bg-[#0f1220] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[560px] h-[380px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <SectionLabel light>What it costs</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                What does it cost, and what do you guarantee?
              </h2>
              <p className="text-white/65 leading-relaxed mb-4">
                Every price is published. A website is {websiteOptions[0].price} or{" "}
                {websiteOptions[1].price}, fixed, with the domain in your name, and there is no
                website fee if the site you have is sound. Monthly packages are {basic.monthly},{" "}
                {standard.monthly} and {premium.monthly}, each with a {basic.minimumMonths}-month
                minimum.
              </p>
              <p className="text-white/65 leading-relaxed mb-5">
                We put {guarantees.length} guarantees in writing, all on things we control: what
                ships in the first month, when a new site launches, and what the reports quote. We
                do not promise a ranking, an AI recommendation or a number of enquiries, because
                nobody controls those.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-[#8b93ff] font-semibold hover:gap-3 transition-all"
              >
                See every price and guarantee
                <Arrow />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel light>What your clients verify</SectionLabel>
              <h3 className="text-white font-bold text-xl mb-4">
                Professional bodies for {lc}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Clients and search engines both look for membership and registration with the
                bodies below. We make sure your status is stated accurately on the site and
                matches your listing with each of them.
              </p>
              <ul className="space-y-3">
                {sector.bodies.map((b) => (
                  <li key={b.url}>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3.5 text-white/85 text-sm font-medium hover:border-white/30 transition-colors"
                    >
                      {b.name}
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Questions {lc} ask us
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={sector.faqs} />
          </FadeIn>
        </div>
      </section>

      {/* ─── RELATED SECTORS ──────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Related sectors</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-8">
              Disciplines that work alongside {lc}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/sectors/${r.slug}`}
                  className="group bg-white border border-[#e6e8f2] hover:border-[#3d4cf5]/40 rounded-xl p-5 transition-colors"
                >
                  <span className="block text-[#171a26] font-bold text-sm mb-1.5 group-hover:text-[#3d4cf5] transition-colors">
                    Marketing for {lower(r.name)}
                  </span>
                  <span className="block text-[#8a90a0] text-xs leading-relaxed">{r.summary}</span>
                </Link>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/sectors" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                All sectors we work with
                <Arrow />
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading={`See how your practice is described today`}
        sub={`The free AI-search audit records what Google and five AI assistants say when someone asks for ${sector.singular}, and what a referred client sees when they look you up. If you're already in good shape, it says so.`}
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
