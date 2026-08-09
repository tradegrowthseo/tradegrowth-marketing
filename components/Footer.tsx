import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

// TODO: replace the three social URLs below with the real profiles before launch.
// These are placeholders — they point at the platform home pages, not at us.
const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
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
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Free AEO Audit", href: "/audit" },
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
              The AI-powered growth engine for UK trades and local service businesses — get
              found, get booked, and get
              recommended by AI.
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
            <p className="text-white/25 text-[11px] mt-3">
              Social links are placeholders — to be updated before launch.
            </p>
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
                One client per trade or service, per area
              </li>
            </ul>

            <Link
              href="/audit"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-brand text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all"
            >
              Get a free AEO audit
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
            &copy; {new Date().getFullYear()} TradeGrowth Marketing. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            tradegrowthseo.com · Marketing for UK trades &amp; local service businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
