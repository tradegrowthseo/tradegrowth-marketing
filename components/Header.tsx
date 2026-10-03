"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/services";
import { sectorGroups, sectors } from "@/lib/sectors";

// The header is light (white) rather than dark: the logo file has a baked-in
// white background, so it can only sit on a light surface. The dark footer
// uses the transparent icon plus a typed wordmark instead.

interface DropdownItem {
  label: string;
  href: string;
  desc?: string;
  /** Optional group heading rendered above this item in the desktop panel. */
  group?: string;
}

interface NavLink {
  label: string;
  mobileLabel?: string;
  href: string;
  /** Items for a dropdown. The panel mounts only when opened, so these links
   *  are NOT in the static HTML. Crawlers reach the same pages through the
   *  footer, the /sectors index and the audience cards, which are. Keep it
   *  that way: a nav-only link is invisible to Google. */
  dropdown?: DropdownItem[];
  /** Desktop panel layout. "list" is one column; "grid" is two columns with
   *  group headings, for the sixteen sector pages. */
  layout?: "list" | "grid";
}

// There are no per-service routes — the dropdown deep-links into the sections
// of the single /services page.
const serviceLinks: DropdownItem[] = [
  { label: "All Services", href: "/services", desc: "Everything we do, in detail" },
  ...services.map((s) => ({
    label: s.label,
    href: `/services#${s.slug}`,
    desc: s.short,
  })),
];

// One entry per sector page, grouped the way /sectors/ groups them. The first
// item of each group carries the heading.
const sectorLinks: DropdownItem[] = [
  { label: "All sectors", href: "/sectors", desc: "Sixteen disciplines, a page for each" },
  ...sectorGroups.flatMap((group) =>
    sectors
      .filter((s) => s.group === group)
      .map((s, i) => ({
        label: s.name,
        href: `/sectors/${s.slug}`,
        group: i === 0 ? group : undefined,
      })),
  ),
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: serviceLinks, layout: "list" },
  { label: "Sectors", href: "/sectors", dropdown: sectorLinks, layout: "grid" },
  { label: "What is AEO", mobileLabel: "AEO", href: "/aeo" },
  { label: "Pricing", href: "/pricing" },
  { label: "Websites", href: "/websites" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  // Which dropdown is open, keyed by the nav link's href. One at a time.
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
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

  const Chevron = ({ open, small = false }: { open: boolean; small?: boolean }) => (
    <svg
      className={`${small ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

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

          <nav className="flex items-center gap-0.5" ref={navRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() => setOpenDesktop((v) => (v === link.href ? null : link.href))}
                    onMouseEnter={() => setOpenDesktop(link.href)}
                    aria-expanded={openDesktop === link.href}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b] hover:text-[#171a26]"
                    }`}
                  >
                    {link.label}
                    <Chevron open={openDesktop === link.href} />
                  </button>

                  <AnimatePresence>
                    {openDesktop === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={() => setOpenDesktop(null)}
                        className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_8px_40px_rgba(23,26,38,0.16)] border border-[#e6e8f2] overflow-hidden ${
                          link.layout === "grid" ? "w-[640px]" : "w-80"
                        }`}
                      >
                        {link.layout === "grid" ? (
                          <div>
                            <Link
                              href={link.dropdown[0].href}
                              className="flex flex-col px-5 py-3 hover:bg-[#f6f7fc] transition-colors border-b border-[#e6e8f2] group"
                            >
                              <span className="text-[#171a26] font-semibold text-sm group-hover:text-[#3d4cf5] transition-colors">
                                {link.dropdown[0].label}
                              </span>
                              <span className="text-[#8a90a0] text-xs mt-0.5">{link.dropdown[0].desc}</span>
                            </Link>
                            <div className="grid grid-cols-2 gap-x-2 px-3 py-3">
                              {link.dropdown.slice(1).map((s) => (
                                <div key={s.href} className="contents">
                                  {s.group && (
                                    <span className="col-span-2 px-2 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase text-[#3d4cf5] first:pt-0">
                                      {s.group}
                                    </span>
                                  )}
                                  <Link
                                    href={s.href}
                                    className="px-2 py-1.5 rounded-md text-[13px] text-[#565c6b] hover:text-[#3d4cf5] hover:bg-[#f6f7fc] transition-colors"
                                  >
                                    {s.label}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          link.dropdown.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex flex-col px-5 py-3 hover:bg-[#f6f7fc] transition-colors border-b border-[#e6e8f2] last:border-b-0 group"
                            >
                              <span className="text-[#171a26] font-semibold text-sm group-hover:text-[#3d4cf5] transition-colors">
                                {s.label}
                              </span>
                              {s.desc && <span className="text-[#8a90a0] text-xs mt-0.5">{s.desc}</span>}
                            </Link>
                          ))
                        )}
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
            Free AI-search audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ─── Mobile header (below lg) ──────────────────────────────────
            Logo row with the audit CTA, then an always-visible nav strip
            beneath it — no hamburger, matching the EV Design pattern. Nine
            tabs no longer fit a 375px row at once, so the strip scrolls
            sideways rather than shrinking each tab until it wraps. */}
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

          <nav
            className="flex items-stretch border-t border-[#e6e8f2] -mx-6 px-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Main"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <button
                  key={link.href}
                  onClick={() => setOpenMobile((v) => (v === link.href ? null : link.href))}
                  aria-expanded={openMobile === link.href}
                  className={`flex-none flex items-center justify-center gap-0.5 py-2.5 px-3 text-[12px] font-medium leading-tight whitespace-nowrap transition-colors ${
                    isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b]"
                  }`}
                >
                  {link.mobileLabel ?? link.label}
                  <Chevron open={openMobile === link.href} small />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex-none text-center py-2.5 px-3 text-[12px] font-medium leading-tight whitespace-nowrap transition-colors ${
                    isActive(link.href) ? "text-[#3d4cf5]" : "text-[#565c6b]"
                  }`}
                >
                  {link.mobileLabel ?? link.label}
                </Link>
              )
            )}
          </nav>

          <AnimatePresence>
            {openMobile && (
              <motion.div
                key={openMobile}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-[#e6e8f2]"
              >
                <div className="flex flex-col py-1.5 max-h-[60vh] overflow-y-auto">
                  {navLinks
                    .find((l) => l.href === openMobile)
                    ?.dropdown?.map((s) => (
                      <div key={s.href} className="contents">
                        {s.group && (
                          <span className="px-2 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase text-[#3d4cf5]">
                            {s.group}
                          </span>
                        )}
                        <Link
                          href={s.href}
                          className="px-2 py-2 text-[13px] text-[#565c6b] hover:text-[#3d4cf5] transition-colors"
                        >
                          {s.label}
                        </Link>
                      </div>
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
