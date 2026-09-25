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
    "Work completed by TradeGrowth Marketing: websites for EV Design, JBSE Consulting Engineers and LND Architecture + Design, and how each is optimised for search and AI.",
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
        eyebrow="Our work"
        title={
          <>
            Websites we&apos;ve built for construction, engineering and{" "}
            <span className="text-gradient">design practices</span>
          </>
        }
        sub="This is work completed by TradeGrowth Marketing: websites designed, built and optimised for search and AI-assisted search for practices across Lancashire that take on projects across the UK. Each one is live — click through and see it for yourself."
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

      {/* ─── INTRO ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 border-b border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-4 text-[#565c6b] text-lg leading-relaxed">
              <p>
                Below are some of the projects TradeGrowth Marketing has worked on and completed:
                an EV charging design consultancy, a mechanical and electrical engineering
                consultancy and an architecture practice. Each site is fast, mobile-first and
                organised around the projects the practice has actually delivered, because that
                is what a prospective client checks before they get in touch.
              </p>
              <p>
                Every build is priced in public at {websiteOptions[0].price} or{" "}
                {websiteOptions[1].price}, ships ready for search and AI-assisted search, and
                is the client&apos;s to keep. The{" "}
                <Link href="/services#website-design" className="text-[#3d4cf5] font-semibold hover:underline">
                  website design service
                </Link>{" "}
                page explains how they are put together and the{" "}
                <Link href="/pricing" className="text-[#3d4cf5] font-semibold hover:underline">
                  pricing page
                </Link>{" "}
                has every figure.
              </p>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {websitesTakeaways.map((line) => (
                <li key={line} className="flex items-start gap-3 text-[#565c6b] text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0 mt-2" />
                  {line}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ─── THE SITES, STACKED ───────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-16 md:py-20 border-b border-[#e6e8f2]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {builtWebsites.map((site, i) => (
              <FadeIn key={site.slug} delay={i * 0.06}>
                <article id={site.slug} className="scroll-mt-32">
                  <div className="flex items-baseline justify-between gap-4 mb-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#171a26]">{site.name}</h2>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] whitespace-nowrap">
                      {site.location}
                    </span>
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Open ${site.name} at ${site.host} in a new tab`}
                    className="group block rounded-2xl overflow-hidden border border-[#e6e8f2] bg-[#0f1220] shadow-[0_8px_40px_rgba(23,26,38,0.08)]"
                  >
                    <Image
                      src={site.image.src}
                      alt={site.image.alt}
                      width={site.image.width}
                      height={site.image.height}
                      sizes="(min-width: 1100px) 1036px, 100vw"
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      className="w-full h-auto transition-opacity group-hover:opacity-90"
                    />
                  </a>

                  <p className="mt-4">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold hover:gap-3 transition-all"
                    >
                      {site.host}
                      <Arrow />
                    </a>
                  </p>

                  <div className="mt-5 space-y-4 text-[#565c6b] leading-relaxed max-w-[820px]">
                    <p>{site.who}</p>
                    <p>{site.built}</p>
                    <p>
                      <span className="font-semibold text-[#171a26]">How it&apos;s optimised: </span>
                      {site.seo}
                    </p>
                  </div>

                  {site.more && (
                    <p className="mt-5">
                      <Link
                        href={site.more.href}
                        className="inline-flex items-center gap-2 text-[#3d4cf5] font-semibold text-sm hover:gap-3 transition-all"
                      >
                        {site.more.label}
                        <Arrow />
                      </Link>
                    </p>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
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
