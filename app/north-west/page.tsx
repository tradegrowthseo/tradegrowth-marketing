import type { Metadata } from "next";
import type { BreadcrumbList, Graph, Service } from "schema-dts";
import Link from "next/link";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { soldServices } from "@/lib/services";
import { builtWebsites } from "@/lib/websites";
import { guarantees, tierById, tracks, websiteOptions } from "@/lib/pricing";
import {
  base,
  counties,
  howWorkIsWon,
  northWestFaqs,
  northWestTakeaways,
} from "@/lib/north-west";

const SITE_URL = "https://tradegrowthseo.com";
const PATH = "/north-west/";

export const metadata: Metadata = {
  ...routeMeta(PATH),
  title: "Marketing for Architects & Engineers in the North West",
  description:
    "Websites, SEO and AI-search visibility for architecture, engineering and construction practices across Lancashire, Greater Manchester, Merseyside, Cheshire and Cumbria.",
};

// Service + BreadcrumbList. areaServed names the region and its counties;
// there is no street address anywhere, because TradeGrowth is a service-area
// business. FAQPage is emitted by the FAQ component.
const pageSchema: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PATH}#service`,
      name: "Marketing for architecture, engineering and construction practices in the North West",
      serviceType: "Website design, SEO and AI-search visibility for AEC practices",
      url: `${SITE_URL}${PATH}`,
      description: metadata.description as string,
      provider: { "@id": `${SITE_URL}/#organisation` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "North West England" },
        ...counties.map((name) => ({ "@type": "AdministrativeArea" as const, name })),
      ],
    } satisfies Service,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "North West", item: `${SITE_URL}${PATH}` },
      ],
    } satisfies BreadcrumbList,
  ],
};

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

const basic = tierById("basic");
const standard = tierById("standard");
const premium = tierById("premium");

export default function NorthWestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <PageHero
        patternId="north-west-grid"
        eyebrow="North West England"
        title={
          <>
            Marketing for architecture, engineering and construction practices in the{" "}
            <span className="text-gradient">North West</span>
          </>
        }
        sub={`We're based in ${base.town} and work only with this sector: websites, SEO and AI-search visibility that give a referred client the evidence to pick up the phone. Three of our sites are live for practices in ${base.county} today.`}
      >
        <nav aria-label="Breadcrumb" className="mt-8">
          <ol className="flex items-center gap-2 text-xs text-white/50">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white/80" aria-current="page">
              North West
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
            href="/websites"
            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors"
          >
            See the websites we&apos;ve built
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
                What we do for North West practices
              </h2>
              <div className="space-y-4 text-[#565c6b] text-lg leading-relaxed">
                <p>
                  TradeGrowth Marketing helps architects, structural and MEP engineers, interior
                  designers and construction specialists in the North West of England get more of
                  the right project enquiries. We do it by building the practice a website
                  organised around its projects, making it findable in search and in AI-assisted
                  search, and keeping that current month by month.
                </p>
                <p>
                  We work across {counties.slice(0, -1).join(", ")} and{" "}
                  {counties[counties.length - 1]}, remotely, from {base.town}. The same service is
                  available anywhere in the UK; this page exists because the North West is where
                  we are and where our work so far is.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 mt-7">
                {counties.map((c) => (
                  <li
                    key={c}
                    className="text-xs font-medium text-[#565c6b] bg-[#f6f7fc] border border-[#e6e8f2] rounded-full px-3 py-1"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} direction="left">
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-7 md:p-8">
                <h3 className="text-[#171a26] font-bold text-base mb-5">Key takeaways</h3>
                <ul className="space-y-3.5">
                  {northWestTakeaways.map((line) => (
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

      {/* ─── HOW WORK IS WON, AND LOST ────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Where enquiries come from</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-3xl">
              How does a North West practice actually win work?
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-3xl leading-relaxed">
              Mostly by referral, and then by surviving a quick look online. Research across 523
              professional services firms found that more than half of buyers had ruled out a
              firm they were referred to before ever speaking to it, most often because of the
              website, the content or not being findable in search (
              <a
                href="https://hingemarketing.com/blog/story/new-research-report-referral-marketing-for-professional-services-firms"
                target="_blank"
                rel="noopener"
                className={LINK}
              >
                Hinge Research Institute, 2015
              </a>
              ). That check is the moment our work is built for.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {howWorkIsWon.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08} className="h-full">
                <div className="relative h-full bg-white border border-[#e6e8f2] rounded-xl p-7 overflow-hidden">
                  <span className="absolute top-5 right-6 text-4xl font-extrabold text-[#eef0ff] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3 pr-12">{step.title}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed">{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-3xl">
              What do you do to bring in project enquiries?
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-3xl leading-relaxed">
              Three things, in order. Each links to the full description on our services page.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {soldServices.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col border border-[#e6e8f2] rounded-xl p-7">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2">
                    {s.tagline}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-xl mb-3">{s.label}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed mb-5">{s.intro}</p>
                  <Link
                    href={`/services#${s.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {s.label} in detail
                    <Arrow />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TWO TRACKS — the page's one table ────────────────────────── */}
      <section className="bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>It depends who you sell to</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-3xl">
              Is the work the same for a local practice and a regional consultancy?
            </h2>
            <p className="text-[#565c6b] text-lg mb-10 max-w-3xl leading-relaxed">
              No. A practice taking homeowner work around Preston, Chester or Kendal has local
              search demand to capture. A consultancy selling to developers and contractors across
              the region has almost none, and is won on evidence and mentions instead.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} direction="none">
            <div className="contain-content overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
              <table className="w-full min-w-[720px] border-collapse bg-white rounded-xl overflow-hidden border border-[#e6e8f2]">
                <caption className="sr-only">
                  How the work differs between residential-facing practices and consultancies
                  selling to professional buyers
                </caption>
                <thead>
                  <tr className="bg-[#0f1220] text-white text-left">
                    <th scope="col" className="w-[22%] text-sm font-semibold px-5 py-4">
                      &nbsp;
                    </th>
                    {tracks.map((t) => (
                      <th key={t.id} scope="col" className="w-[39%] text-sm font-semibold px-5 py-4">
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm text-[#565c6b]">
                  <tr className="border-t border-[#e6e8f2] align-top">
                    <th scope="row" className="text-left font-semibold text-[#171a26] px-5 py-4">
                      Who this is
                    </th>
                    {tracks.map((t) => (
                      <td key={t.id} className="px-5 py-4 leading-relaxed">
                        {t.who}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#e6e8f2] align-top">
                    <th scope="row" className="text-left font-semibold text-[#171a26] px-5 py-4">
                      On {standard.name}
                    </th>
                    {tracks.map((t) => (
                      <td key={t.id} className="px-5 py-4 leading-relaxed">
                        <ul className="space-y-2">
                          {t.standard.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-[#e6e8f2] align-top">
                    <th scope="row" className="text-left font-semibold text-[#171a26] px-5 py-4">
                      Added on {premium.name}
                    </th>
                    {tracks.map((t) => (
                      <td key={t.id} className="px-5 py-4 leading-relaxed">
                        <ul className="space-y-2">
                          {t.premium.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── PROOF ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Proof, in the North West</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-3xl">
              Which North West practices have you worked with?
            </h2>
            <p className="text-[#565c6b] text-lg mb-12 max-w-3xl leading-relaxed">
              Three, all live and all yours to click through. For one of them we can also show
              what happened in search afterwards.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {builtWebsites.map((site, i) => (
              <FadeIn key={site.slug} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl p-7">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2">
                    {site.location}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3">{site.name}</h3>
                  <p className="text-[#565c6b] text-sm leading-relaxed mb-5">{site.who}</p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-auto inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {site.host}
                    <Arrow />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#e6e8f2] p-7 md:p-9">
              <h3 className="text-[#171a26] font-bold text-xl mb-3">
                EV Design, Burnley: what the search results show
              </h3>
              <p className="text-[#565c6b] leading-relaxed mb-4 max-w-3xl">
                Search for EV Design locally and their site comes back first on Google, ahead of
                national installers. Search wider and Google&apos;s AI Overview names them as a
                North West specialist. Ask ChatGPT who they are and it describes the business
                accurately. These are visibility results, evidenced by screenshots of live
                searches. They are not enquiry or revenue figures, and we don&apos;t present them
                as though they were.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/results" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                  Read the EV Design case study
                  <Arrow />
                </Link>
                <Link href="/websites" className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all">
                  See all three websites
                  <Arrow />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── COST, GUARANTEES, AND WHAT WE DON'T PROMISE ──────────────── */}
      <section className="bg-[#0f1220] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[560px] h-[380px] bg-[#5b1cf0] opacity-[0.14] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <SectionLabel light>What it costs</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                What does it cost, and what is guaranteed?
              </h2>
              <p className="text-white/65 leading-relaxed mb-5">
                Every price is published. A website is {websiteOptions[0].price} or{" "}
                {websiteOptions[1].price}, fixed, and yours outright with the domain in your name.
                Monthly packages are {basic.monthly}, {standard.monthly} and {premium.monthly},
                each with a {basic.minimumMonths}-month minimum and a month&apos;s notice after
                that. If the site you already have is sound, there is no website fee.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-[#8b93ff] font-semibold hover:gap-3 transition-all"
              >
                See every price and the full comparison
                <Arrow />
              </Link>

              <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-white font-bold text-base mb-2">What we don&apos;t promise</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  A ranking, an AI recommendation or a number of enquiries. Nobody controls what
                  Google ranks or what an assistant says, and search is slow: published data shows
                  fewer than two in a hundred new pages reach Google&apos;s first page within a
                  year (
                  <a
                    href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/"
                    target="_blank"
                    rel="noopener"
                    className="text-[#8b93ff] font-semibold hover:underline"
                  >
                    Ahrefs, 2025
                  </a>
                  ). We&apos;d rather you heard that from us on day one.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel light>In writing</SectionLabel>
              <ul className="space-y-4">
                {guarantees.map((g) => (
                  <li key={g.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="text-white font-bold text-sm mb-1.5">{g.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{g.body}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Questions North West practices ask
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={northWestFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading="See what a referral sees when they look you up"
        sub="The free AI-search audit shows how your practice is described in search and by five AI assistants, benchmarked against one competitor. If you're already in good shape, it says so."
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
