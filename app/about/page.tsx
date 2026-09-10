import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Eye, Handshake, Target } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABand from "@/components/ui/CTABand";
import FAQ from "@/components/ui/FAQ";
import { generalFaqs } from "@/lib/faqs";
import AudienceCards from "@/components/ui/AudienceCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why TradeGrowth Marketing exists, what we believe, and how we work with UK construction, engineering and design businesses — architects, engineers and interior designers.",
};

const values = [
  {
    icon: <Eye className="w-6 h-6" strokeWidth={1.8} />,
    title: "Transparent by default",
    body: "Every price is published on this website. Ad spend goes straight from you to Google and Meta so we can't skim it. Reports show what happened, including the months where the honest answer is \"not much yet\".",
  },
  {
    icon: <Target className="w-6 h-6" strokeWidth={1.8} />,
    title: "Judged on enquiries, not clicks",
    body: "Traffic is not a result. Anyone can buy you clicks and put them in a report. What matters is whether the right kind of project enquiry arrived, whether it got answered, and whether the fee proposal that followed got a decision.",
  },
  {
    icon: <Handshake className="w-6 h-6" strokeWidth={1.8} />,
    title: "Built environment only",
    body: "Construction, engineering and design businesses. Not ecommerce, not national consumer brands. Staying narrow is what lets us understand how a project enquiry actually arrives in this sector, and what a developer or an estates team is looking for before they shortlist anybody.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.8} />,
    title: "Realistic about outcomes",
    body: "Nobody controls what Google ranks or what an AI assistant says, and we don't pretend otherwise. We'll tell you what the work involves, report what can actually be observed, and say so on the first call if we don't think we can get you a result.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        patternId="about-grid"
        eyebrow="About us"
        title={
          <>
            Expertise is the product.{" "}
            <span className="text-gradient">Most websites hide it.</span>
          </>
        }
        sub="TradeGrowth Marketing helps construction, engineering and design businesses show what they are good at, get found by the people commissioning that kind of work, and keep the resulting enquiries organised."
      />

      {/* ─── THE STORY ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>The story</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Why we started
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-start">
            {/* Pre-cropped 640x800 webp (27 KB). next.config sets
                images.unoptimized for the static export, so nothing resizes
                this at build time — the file has to arrive web-ready. 640x800
                is 2x the display box. The full-res master lives outside
                public/ at design-assets/brad-redfern.png so it doesn't deploy;
                regenerate from it if the framing ever changes. */}
            <FadeIn delay={0.08}>
              <figure className="w-[280px] sm:w-[320px] mx-auto lg:mx-0">
                <Image
                  src="/images/brad-redfern.webp"
                  alt="Brad Redfern, founder of TradeGrowth Marketing"
                  width={640}
                  height={800}
                  sizes="(min-width: 640px) 320px, 280px"
                  className="w-full aspect-[4/5] object-cover object-center rounded-2xl border border-[#e6e8f2] shadow-[0_16px_50px_rgba(23,26,38,0.14)]"
                />
                <figcaption className="mt-5 text-center lg:text-left">
                  <span className="block text-[#171a26] font-bold">Brad Redfern</span>
                  <span className="block text-[#8a90a0] text-sm">
                    Founder, TradeGrowth Marketing
                  </span>
                </figcaption>
              </figure>
            </FadeIn>

            <FadeIn delay={0.14} direction="left">
              <div className="space-y-5 text-[#565c6b] text-lg leading-relaxed">
                <p>
                  Look at enough websites belonging to architects, engineers and design studios
                  and a pattern shows up. The work is genuinely good. The site lists services in
                  three lines each, shows a handful of images with no context, and says almost
                  nothing about the projects, the constraints or the people who solved them.
                </p>
                <p>
                  That matters because of how the work is actually won. Someone deciding who to
                  approach — a developer, an architect looking for a consultant, a homeowner
                  planning an extension — is looking for evidence that you have handled something
                  like their project before. A list of services does not provide it. A properly
                  presented portfolio does, and most practices already have the material.
                </p>
                <p>
                  The second thing is what happens after the enquiry arrives. It lands while you
                  are on site or in a meeting. The fee proposal goes out and then sits, and nobody
                  is paid to follow it up. Plenty of good practices lose appointments there rather
                  than in the pitch.
                </p>
                <p>
                  Meanwhile, how people research has shifted again. A growing share of enquiries
                  start with a question to ChatGPT or Google&apos;s AI Overview rather than a page
                  of links, and those systems answer from whatever they can read and trust about
                  a practice. Most consultancy websites give them very little to work with.
                </p>
                <p className="text-[#171a26] font-semibold">
                  So that is what this business does: make the expertise visible, make it findable
                  in both kinds of search, and put a system behind it so the enquiries that follow
                  are organised and easy for your team to keep on top of.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────────────── */}
      <section className="bg-[#0f1220] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3d4cf5] opacity-[0.16] rounded-full blur-[140px] pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <SectionLabel light center>
              Our mission
            </SectionLabel>
            <p className="text-2xl md:text-4xl font-bold text-white leading-snug tracking-tight">
              To help good UK construction, engineering and design businesses{" "}
              <span className="text-gradient">be found for the work they do best</span> — and to
              keep the enquiries that follow organised enough to act on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What we believe</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-12 max-w-2xl">
              Four things we won&apos;t compromise on
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="h-full bg-[#f6f7fc] border border-[#e6e8f2] rounded-xl p-7">
                  <span className="w-12 h-12 rounded-xl bg-white border border-[#e6e8f2] flex items-center justify-center text-[#3d4cf5] mb-5">
                    {v.icon}
                  </span>
                  <h3 className="text-[#171a26] font-bold text-lg mb-3">{v.title}</h3>
                  <p className="text-[#565c6b] leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-y border-[#e6e8f2]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Construction, engineering and design businesses
            </h2>
            <p className="text-[#565c6b] text-lg mb-10 max-w-2xl leading-relaxed">
              Four disciplines make up most of what we do, with related built-environment
              consultancies and contractors alongside them.
            </p>
          </FadeIn>

          <AudienceCards alt />

          <FadeIn delay={0.24}>
            <p className="text-[#8a90a0] text-sm mt-6">
              Not on the list? Ask anyway — if we think we can get a result for you we&apos;ll say
              so, and if we can&apos;t we&apos;ll say that instead.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-10">
              Common questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <FAQ faqs={generalFaqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
