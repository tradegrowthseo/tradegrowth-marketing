"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 07985185604 in international format, with a pre-filled opening message.
const WHATSAPP_URL =
  "https://wa.me/447985185604?text=Hi%2C%20I%20found%20you%20via%20your%20website";

/**
 * Floating WhatsApp button, rendered site-wide from app/layout.tsx.
 *
 * It hides itself while the footer is on screen. The footer carries its own
 * "Get a free AEO audit" CTA and the contact block, and on a narrow viewport a
 * fixed bottom-right bubble sits directly on top of them — so rather than
 * fighting it with padding, the button gets out of the way once the reader has
 * reached the bottom of the page.
 *
 * z-40 keeps it above page content but below the fixed header (z-50), so the
 * header's Services dropdown always wins.
 */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  // Delay the entrance so it animates in after the page has settled rather
  // than competing with the hero.
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      // A small negative bottom margin means it starts fading just before the
      // footer's top edge reaches the bubble, not after they've collided.
      { rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const show = visible && !footerInView;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.45)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          {/* Soft pulse ring — decorative, and switched off for reduced-motion users
              via the motion-reduce variant. */}
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping motion-reduce:hidden"
            aria-hidden="true"
          />

          <svg
            className="relative w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Desktop-only label that slides out on hover. Hidden from assistive
              tech — the aria-label on the anchor already names the control. */}
          <span
            className="pointer-events-none absolute right-full mr-3 hidden lg:block whitespace-nowrap rounded-lg bg-[#171a26] px-3 py-2 text-xs font-semibold text-white opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
            aria-hidden="true"
          >
            Chat on WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
