"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";

// The header is light (white) rather than dark: the logo file has a baked-in
// white background, so it can only sit on a light surface. The dark footer
// uses the transparent icon plus a typed wordmark instead.

const navLinks: {
  label: string;
  mobileLabel?: string;
  href: string;
  hasDropdown?: boolean;
}[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "What is AEO", mobileLabel: "AEO", href: "/aeo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// There are no per-service routes — the dropdown deep-links into the sections
// of the single /services page.
const serviceLinks = [
  { label: "All Services", href: "/services", desc: "The full AI Trades Engine" },
  ...services.map((s) => ({
    label: s.label,
    href: `/services#${s.slug}`,
    desc: s.short,
  })),
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(23,26,38,0.07)] border-b border-[#e6e8f2]"
    : "bg-white border-b border-[#e6e8f2]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* ─── Desktop header (lg+) ──────────────────────────────────── */}
        <div className="hidden lg:flex items-center justify-between h-24 gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/tradegrowth-marketing-logo.png"
              alt="TradeGrowth Marketing"
              width={963}
              height={333}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onMouseEnter={() => setServicesOpen(true)}
                    aria-expanded={servicesOpen}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b] hover:text-[#171a26]"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-[0_8px_40px_rgba(23,26,38,0.16)] border border-[#e6e8f2] overflow-hidden"
                      >
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex flex-col px-5 py-3 hover:bg-[#f6f7fc] transition-colors border-b border-[#e6e8f2] last:border-b-0 group"
                          >
                            <span className="text-[#171a26] font-semibold text-sm group-hover:text-[#3d4cf5] transition-colors">
                              {s.label}
                            </span>
                            <span className="text-[#8a90a0] text-xs mt-0.5">{s.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b] hover:text-[#171a26]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-gradient-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-[0_4px_16px_rgba(61,76,245,0.3)] flex-shrink-0"
          >
            Free AEO audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ─── Mobile header (below lg) ──────────────────────────────────
            Logo row with the audit CTA, then an always-visible nav strip
            beneath it — no hamburger, matching the EV Design pattern. */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16 gap-3">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/tradegrowth-marketing-logo.png"
                alt="TradeGrowth Marketing"
                width={963}
                height={333}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center bg-gradient-brand text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex-shrink-0"
            >
              Free audit
            </Link>
          </div>

          <nav className="flex items-stretch justify-between border-t border-[#e6e8f2] -mx-2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <button
                  key={link.href}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                  className={`flex-1 flex items-center justify-center gap-0.5 py-2.5 px-0.5 text-[11px] font-medium leading-tight transition-colors ${
                    isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b]"
                  }`}
                >
                  {link.mobileLabel ?? link.label}
                  <svg
                    className={`w-2.5 h-2.5 shrink-0 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex-1 text-center py-2.5 px-0.5 text-[11px] font-medium leading-tight transition-colors ${
                    isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b]"
                  }`}
                >
                  {link.mobileLabel ?? link.label}
                </Link>
              )
            )}
          </nav>

          <AnimatePresence>
            {mobileServicesOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-[#e6e8f2]"
              >
                <div className="flex flex-col py-1.5">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="px-2 py-2 text-[13px] text-[#565c6b] hover:text-[#3d4cf5] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
