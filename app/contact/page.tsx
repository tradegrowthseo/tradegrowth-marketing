import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { trades } from "@/lib/differentiators";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to TradeGrowth Marketing. Email contact@tradegrowthseo.com, book a discovery call, or send us a message — and find out whether your trade and area are still available.",
};

const contactDetails: {
  label: string;
  value: string;
  href: string | null;
  note?: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Email",
    value: "contact@tradegrowthseo.com",
    href: "mailto:contact@tradegrowthseo.com",
    note: "We reply within one working day",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Coverage",
    value: "UK-wide, remote-first",
    href: null,
    note: "Calls, dashboards and reporting all run remotely",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    label: "Availability",
    value: "One client per trade, per area",
    href: null,
    note: "Ask us whether your postcode is still open",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        patternId="contact-grid"
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s find out if your area is{" "}
            <span className="text-gradient">still free</span>
          </>
        }
        sub="Whether you're ready to start or just want to know what the AI currently says about your business, we're happy to talk. No scripts, no pressure, and an honest answer if we don't think we can help."
      />

      {/* ─── CONTACT BODY ─────────────────────────────────────────────── */}
      <section className="bg-[#f6f7fc] py-24 border-b border-[#e6e8f2]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Details + discovery call */}
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionLabel>Contact details</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-[#171a26] mb-8">
                  TradeGrowth Marketing
                  <span className="block text-base font-medium text-[#8a90a0] mt-1.5">
                    tradegrowthseo.com
                  </span>
                </h2>

                <ul className="space-y-5 mb-10">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#e6e8f2] flex items-center justify-center text-[#3d4cf5] flex-shrink-0 shadow-sm">
                        {detail.icon}
                      </div>
                      <div>
                        <span className="text-[#8a90a0] text-xs font-semibold uppercase tracking-wide block mb-0.5">
                          {detail.label}
                        </span>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-[#171a26] font-medium hover:text-[#3d4cf5] transition-colors break-all"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-[#171a26] font-medium">{detail.value}</span>
                        )}
                        {detail.note && (
                          <span className="block text-[#8a90a0] text-xs mt-0.5">{detail.note}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Book a discovery call */}
                <div className="rounded-2xl bg-gradient-brand-static p-7 text-white shadow-[0_16px_50px_rgba(61,76,245,0.25)]">
                  <h3 className="text-white font-bold text-xl mb-2">
                    Book a discovery call
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    Twenty minutes on the phone. We&apos;ll look at your trade, your area and
                    what the AI currently says about you, then tell you honestly whether
                    there&apos;s a result in it. No slides.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "20 minutes, no obligation",
                      "We check your area is available",
                      "Straight answer either way",
                    ].map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-white/85">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  {/* TODO: swap this mailto for a real booking link (Calendly / GHL
                      calendar) once the scheduling account is set up. */}
                  <a
                    href="mailto:contact@tradegrowthseo.com?subject=Discovery%20call%20request"
                    className="inline-flex items-center gap-2 bg-white text-[#3d4cf5] font-semibold px-5 py-3 rounded-lg text-sm hover:gap-3 transition-all"
                  >
                    Request a call
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <p className="text-white/50 text-xs mt-3">
                    Placeholder: opens an email until the booking calendar is connected.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white border border-[#e6e8f2] rounded-2xl p-8 shadow-[0_4px_24px_rgba(23,26,38,0.06)]">
                  <SectionLabel>Send a message</SectionLabel>
                  <h2 className="text-2xl font-bold text-[#171a26] mb-6">
                    Tell us about your business
                  </h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRADES WE SERVE ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Trades we serve
            </h2>
            <p className="text-[#565c6b] text-lg mb-10 max-w-2xl leading-relaxed">
              We work with UK trades only — and one business per trade, per area. If the trade
              you&apos;re in isn&apos;t listed, ask anyway.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trades.map((trade, i) => (
              <FadeIn key={trade} delay={i * 0.03}>
                <div className="flex items-center gap-3 bg-[#f6f7fc] border border-[#e6e8f2] rounded-lg px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0" />
                  <span className="text-[#565c6b] text-sm font-medium">{trade}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-2xl border border-[#e6e8f2] bg-[#f6f7fc] p-8 text-center">
              <h3 className="text-[#171a26] font-bold text-xl mb-2">
                Not ready to talk yet?
              </h3>
              <p className="text-[#565c6b] mb-6 max-w-xl mx-auto">
                Start with the free AEO audit instead. It shows you what ChatGPT, Perplexity,
                Gemini and Google AI Overviews say about your business today — no call required.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white font-semibold px-7 py-3.5 rounded-lg transition-all shadow-[0_8px_24px_rgba(61,76,245,0.28)]"
              >
                Get the free audit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
