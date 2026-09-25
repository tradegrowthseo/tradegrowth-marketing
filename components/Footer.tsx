import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

// LinkedIn points at the real company page, matching the entry on /contact so
// there is one LinkedIn destination site-wide rather than two.
//
// Instagram and Facebook were removed rather than left pointing at the platform
// home pages: an icon that lands on instagram.com reads worse than no icon.
// Add them back here once real profiles exist.
const socials = [
  {
    label: "LinkedIn",
    // Bradley's personal profile rather than the company page: the company page
    // has no activity on it, and for a founder-led consultancy the person is the
    // credible destination. The company page stays in schema sameAs.
    href: "https://www.linkedin.com/in/bradley-redfern/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  },
];

const company = [
  { label: "What is AEO?", href: "/aeo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Websites we've built", href: "/websites" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Free AI-Search Audit", href: "/audit" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1220] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column. The full logo has a baked-in white background, so on
              the dark footer we pair the transparent icon with a typed wordmark. */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 w-fit">
              <Image
                src="/images/tradegrowth-marketing-icon.png"
                alt=""
                width={215}
                height={215}
                className="h-10 w-10"
              />
              <span className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">TRADEGROWTH</span>
                <span className="text-white/50 text-[10px] font-medium tracking-[0.35em] mt-1">
                  MARKETING
                </span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Marketing for UK construction, engineering and design businesses — websites, SEO,
              AI-search visibility and targeted advertising for architects, engineers, interior
              designers and construction specialists.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TradeGrowth Marketing on ${s.label}`}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wide mb-1">
                  Email
                </span>
                <a
                  href="mailto:contact@tradegrowthseo.com"
                  className="hover:text-white transition-colors break-all"
                >
                  contact@tradegrowthseo.com
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wide mb-1">
                  Coverage
                </span>
                UK-wide, remote-first
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wide mb-1">
                  Availability
                </span>
                Taking on new clients
              </li>
            </ul>

            <Link
              href="/audit"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-brand text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all"
            >
              Get a free AI-search audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} TradeGrowth Marketing. All rights reserved.{" "}
            <Link href="/privacy/" className="hover:text-white/60 transition-colors underline">
              Privacy
            </Link>
          </p>
          <p className="text-white/30 text-xs">
            tradegrowthseo.com · Marketing for UK construction, engineering &amp; design businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
