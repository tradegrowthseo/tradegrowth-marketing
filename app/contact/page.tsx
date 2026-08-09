import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { sectors } from "@/lib/differentiators";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to TradeGrowth Marketing. Email contact@tradegrowthseo.com, book a discovery call, or send us a message — and find out whether your trade or service and your area are still available.",
};

const contactDetails: {
  label: string;
  value: string;
  href: string | null;
  /** Opens in a new tab with noopener/noreferrer. Off for mailto:/tel: links. */
  external?: boolean;
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
    label: "Phone",
    value: "07985 185604",
    href: "tel:+447985185604",
    note: "Mon–Fri, working hours",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    // Pre-filled opener so the chat isn't a blank box. The apostrophe in "I'd"
    // is percent-encoded (%27) to keep the query string valid.
    href: "https://wa.me/447985185604?text=Hi%20TradeGrowth%2C%20I%27d%20like%20to%20know%20more",
    external: true,
    note: "Opens a chat with a message ready to send",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "TradeGrowth Marketing",
    href: "https://www.linkedin.com/company/138514390/",
    external: true,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
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
    value: "One client per trade or service, per area",
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
                            {...(detail.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
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
                    Twenty minutes on the phone. We&apos;ll look at what you do, your area and
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

      {/* ─── WHO WE SERVE ─────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Who we work with</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171a26] mb-4 max-w-2xl">
              Trades and local service businesses
            </h2>
            <p className="text-[#565c6b] text-lg mb-10 max-w-2xl leading-relaxed">
              UK trades and local service businesses — one client per trade or service, per area.
              If what you do isn&apos;t listed, ask anyway.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sectors.map((sector, i) => (
              <FadeIn key={sector} delay={i * 0.03}>
                <div className="flex items-center gap-3 bg-[#f6f7fc] border border-[#e6e8f2] rounded-lg px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-brand-static flex-shrink-0" />
                  <span className="text-[#565c6b] text-sm font-medium">{sector}</span>
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
