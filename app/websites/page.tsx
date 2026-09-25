import type { Metadata } from "next";
import type { BreadcrumbList, CollectionPage, Graph, ItemList } from "schema-dts";
import Image from "next/image";
import Link from "next/link";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { builtWebsites, websitesTakeaways, websitesFaqs } from "@/lib/websites";
import { websiteOptions } from "@/lib/pricing";

const SITE_URL = "https://tradegrowthseo.com";
const PATH = "/websites/";

export const metadata: Metadata = {
  ...routeMeta(PATH),
  title: "Websites We've Built for Architects & Engineers",
  description:
    "Three live websites built for engineering and design practices — EV Design, JBSE Consulting Engineers and LND Architecture + Design. Fixed price, mobile-first, yours to keep.",
};

// CollectionPage + ItemList so the three sites are one machine-readable set,
// plus BreadcrumbList for the page's place in the site. FAQPage is emitted by
// the FAQ component. No street addresses anywhere: every practice listed is a
// service-area business.
const pageSchema: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}${PATH}#page`,
      url: `${SITE_URL}${PATH}`,
      name: "Websites we've built for construction, engineering and design practices",
      description: metadata.description as string,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organisation` },
      mainEntity: { "@id": `${SITE_URL}${PATH}#list` },
    } satisfies CollectionPage,
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}${PATH}#list`,
      name: "Websites built by TradeGrowth Marketing",
      numberOfItems: builtWebsites.length,
      itemListElement: builtWebsites.map((site, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: site.name,
        url: site.url,
        item: {
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.who,
          creator: { "@id": `${SITE_URL}/#organisation` },
        },
      })),
    } satisfies ItemList,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Websites", item: `${SITE_URL}${PATH}` },
      ],
    } satisfies BreadcrumbList,
  ],
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

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function WebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <PageHero
        patternId="websites-grid"
        eyebrow="Websites"
        title={
          <>
            Websites we&apos;ve built for construction, engineering and{" "}
            <span className="text-gradient">design practices</span>
          </>
        }
        sub="Three live sites, each built around the practice's projects rather than a list of services, at a fixed price, with the domain in the client's name. Click through to any of them — they're the real thing, not mock-ups."
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
              Websites
            </li>
          </ol>
        </nav>
      </PageHero>

      {/* ─── ANSWER FIRST + KEY TAKEAWAYS ─────────────────────────────── */}
      <section className="bg-white py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <FadeIn>
              <SectionLabel>What you&apos;re looking at</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-5 leading-tight">
                Three practices, three websites, one way of building them
              </h2>
              <div className="space-y-4 text-[#565c6b] text-lg leading-relaxed">
                <p>
                  These are websites TradeGrowth Marketing designed and built for an EV charging
                  design consultancy, a mechanical and electrical engineering consultancy and an
                  architecture practice, all in Lancashire and all taking work across the UK. Each
                  one is a fast, mobile-first site organised around the projects the practice has
                  actually delivered, because that is what a prospective client checks first.
                </p>
                <p>
                  Every build is priced in public at {websiteOptions[0].price} or{" "}
                  {websiteOptions[1].price}, ships with structured data describing the practice,
                  and is the client&apos;s to keep. The{" "}
                  <Link href="/services#website-design" className="text-[#3d4cf5] font-semibold hover:underline">
                    website design service
                  </Link>{" "}
                  page explains how they are put together, and the{" "}
                  <Link href="/pricing" className="text-[#3d4cf5] font-semibold hover:underline">
                    pricing page
                  </Link>{" "}
                  has every figure.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} direction="left">
              <div className="rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-7 md:p-8">
                <h3 className="text-[#171a26] font-bold text-base mb-5">Key takeaways</h3>
                <ul className="space-y-3.5">
                  {websitesTakeaways.map((line) => (
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

      {/* ─── THE THREE SITES ──────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-20 md:py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The sites</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-12">
              Live, and yours to click through
            </h2>
          </FadeIn>

          <div className="space-y-10">
            {builtWebsites.map((site, i) => (
              <FadeIn key={site.slug} delay={i * 0.08}>
                <article
                  id={site.slug}
                  className="scroll-mt-32 rounded-2xl border border-[#e6e8f2] bg-white overflow-hidden"
                >
                  <div className="grid lg:grid-cols-[1.25fr_1fr]">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Open ${site.name} at ${site.host} in a new tab`}
                      className="group block bg-[#0f1220] border-b lg:border-b-0 lg:border-r border-[#e6e8f2]"
                    >
                      <Image
                        src={site.image.src}
                        alt={site.image.alt}
                        width={site.image.width}
                        height={site.image.height}
                        sizes="(min-width: 1024px) 640px, 100vw"
                        priority={i === 0}
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "auto"}
                        className="w-full h-auto transition-opacity group-hover:opacity-90"
                      />
                    </a>

                    <div className="p-7 md:p-9 flex flex-col">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] mb-2">
                        {site.location}
                      </span>
                      <h3 className="text-[#171a26] font-bold text-2xl mb-3">{site.name}</h3>
                      <p className="text-[#565c6b] leading-relaxed mb-5">{site.who}</p>

                      <h4 className="text-[#171a26] font-semibold text-sm mb-2">What we built</h4>
                      <p className="text-[#565c6b] text-sm leading-relaxed mb-5">{site.built}</p>

                      <ul className="flex flex-wrap gap-2 mb-7">
                        {site.pages.map((p) => (
                          <li
                            key={p}
                            className="text-xs font-medium text-[#565c6b] bg-[#f6f7fc] border border-[#e6e8f2] rounded-full px-3 py-1"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center justify-center gap-2 bg-gradient-brand text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
                        >
                          Visit {site.host}
                          <Arrow />
                        </a>
                        {site.more && (
                          <Link
                            href={site.more.href}
                            className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                          >
                            {site.more.label}
                            <Arrow />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              About getting one of these built
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={websitesFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand
        heading="Want to know where your own site stands?"
        sub="The free AI-search audit checks how your practice is described in search and by five AI assistants, and tells you honestly whether your current website can carry the work or needs replacing."
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
