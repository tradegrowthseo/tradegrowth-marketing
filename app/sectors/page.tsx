import type { Metadata } from "next";
import type { BreadcrumbList, CollectionPage, Graph, ItemList } from "schema-dts";
import Link from "next/link";
import { routeMeta } from "@/lib/seo";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import { sectorGroups, sectors } from "@/lib/sectors";

const SITE_URL = "https://tradegrowthseo.com";
const PATH = "/sectors/";

export const metadata: Metadata = {
  ...routeMeta(PATH),
  title: "Sectors: Marketing for Architecture, Engineering & Construction",
  description:
    "The disciplines we work with across architecture, engineering and construction, from architects and MEP engineers to surveyors, planning consultants and contractors, with a page for each.",
};

const pageSchema: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}${PATH}#page`,
      url: `${SITE_URL}${PATH}`,
      name: "Sectors we work with across architecture, engineering and construction",
      description: metadata.description as string,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organisation` },
      mainEntity: { "@id": `${SITE_URL}${PATH}#list` },
    } satisfies CollectionPage,
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}${PATH}#list`,
      numberOfItems: sectors.length,
      itemListElement: sectors.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Marketing for ${s.name}`,
        url: `${SITE_URL}/sectors/${s.slug}/`,
      })),
    } satisfies ItemList,
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Sectors", item: `${SITE_URL}${PATH}` },
      ],
    } satisfies BreadcrumbList,
  ],
};

const groupIntro: Record<string, string> = {
  Design: "Practices judged first on their portfolio, by clients who want to see work like their own.",
  Engineering: "Consultancies appointed by other professionals, on sector experience and chartered credentials.",
  "Surveying & consultancy": "Advisers whose services clients often search for by name, because a regulator or lender has asked for them.",
  Construction: "Firms checked at pre-qualification and by private clients for completed projects and accreditations.",
};

export default function SectorsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <PageHero
        patternId="sectors-grid"
        eyebrow="Who we work with"
        title={
          <>
            Marketing for architecture, engineering and{" "}
            <span className="text-gradient">construction</span>, by discipline
          </>
        }
        sub={`We work only with the built environment, and each discipline in it wins work differently. There is a page for each of the ${sectors.length} below: who appoints you, what they check, and what your website has to show.`}
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
              Sectors
            </li>
          </ol>
        </nav>
      </PageHero>

      <section className="bg-white py-16 md:py-20 border-b border-[#e6e8f2]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-4 text-[#565c6b] text-lg leading-relaxed">
              <p>
                TradeGrowth Marketing builds websites and does search and AI-search visibility
                work for architecture, engineering and construction businesses, and nobody else.
                The sector is usually described as one industry, but an architect, a fire
                engineer and a main contractor are appointed by different people for different
                reasons, and their marketing should not look the same.
              </p>
              <p>
                Some of these disciplines are found through local search. Others have almost no
                search demand and win work by referral, where the job is to be convincing when
                someone looks the firm up. Each page says which applies and what we would do
                about it. If your discipline is not listed,{" "}
                <Link href="/contact" className="text-[#3d4cf5] font-semibold hover:underline">
                  ask us
                </Link>
                ; if we do not think we can help, we will say so.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {sectorGroups.map((group, gi) => {
        const inGroup = sectors.filter((s) => s.group === group);
        const alt = gi % 2 === 0;
        return (
          <section
            key={group}
            className={`py-16 md:py-20 border-b border-[#e6e8f2] ${alt ? "bg-[#f6f7fc]" : "bg-white"}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              <FadeIn>
                <SectionLabel>{group}</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-3">{group}</h2>
                <p className="text-[#565c6b] mb-9 max-w-2xl leading-relaxed">{groupIntro[group]}</p>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {inGroup.map((s, i) => (
                  <FadeIn key={s.slug} delay={(i % 3) * 0.06} className="h-full">
                    <Link
                      href={`/sectors/${s.slug}`}
                      className={`group flex flex-col h-full border border-[#e6e8f2] hover:border-[#3d4cf5]/40 rounded-xl p-6 transition-colors ${
                        alt ? "bg-white" : "bg-[#f6f7fc]"
                      }`}
                    >
                      <h3 className="text-[#171a26] font-bold text-lg mb-2 group-hover:text-[#3d4cf5] transition-colors">
                        {s.name}
                      </h3>
                      <p className="text-[#565c6b] text-sm leading-relaxed mb-5">{s.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-[#3d4cf5] text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Marketing for {s.name.toLowerCase().replace("mep", "MEP").replace(" ev ", " EV ")}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABand />
    </>
  );
}
