"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export interface Screenshot {
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
}

/**
 * Stacked, full-width screenshot cards with a click-to-zoom lightbox.
 *
 * These are search-result captures, so the text inside them is the whole
 * point — they get one column and the full width of the content container
 * rather than a three-across grid, and they're rendered at their natural
 * aspect ratio (no object-cover crop) so nothing is cut off.
 *
 * next.config.ts exports the site statically with images.unoptimized, so the
 * source PNGs are served untouched. Sources are ~2300-2500px wide against a
 * ~960px display width, which is the 2x+ density needed to stay crisp.
 */
export default function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  // Index of the shot shown in the lightbox, or null when it's closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // The trigger that opened the lightbox, so focus can go back to it on close.
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const open = openIndex !== null ? shots[openIndex] : null;

  // Esc to dismiss, and lock body scroll so the page behind doesn't move
  // while the overlay is up.
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close]);

  // Move focus into the overlay when it opens, and back to the thumbnail that
  // opened it when it closes, so keyboard users aren't dropped at the top.
  const lastIndex = useRef<number | null>(null);
  useEffect(() => {
    if (openIndex !== null) {
      lastIndex.current = openIndex;
      closeRef.current?.focus();
    } else if (lastIndex.current !== null) {
      triggerRefs.current[lastIndex.current]?.focus();
      lastIndex.current = null;
    }
  }, [openIndex]);

  return (
    <>
      {/* Single column, capped at a readable width and centred — full-bleed on
          mobile, never stretched across a wide desktop viewport. */}
      <div className="flex flex-col gap-10 md:gap-12 max-w-[960px] mx-auto">
        {shots.map((shot, i) => (
          <FadeIn key={shot.src} delay={i * 0.08}>
            <figure className="bg-white border border-[#e6e8f2] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(23,26,38,0.06)]">
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                onClick={() => setOpenIndex(i)}
                aria-label={`Enlarge screenshot: ${shot.caption}`}
                className="group relative block w-full cursor-zoom-in bg-[#0f1220] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3d4cf5]/40"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="w-full h-auto"
                />

                {/* Zoom affordance. Decorative — the button's aria-label
                    already says what the control does. */}
                <span
                  className="pointer-events-none absolute top-3 right-3 flex items-center gap-1.5 rounded-lg bg-[#171a26]/80 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  Click to enlarge
                </span>
              </button>

              <figcaption className="border-t border-[#e6e8f2] px-5 py-4 text-[#171a26] text-sm font-semibold">
                {shot.caption}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={open.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            // Backdrop click closes; the inner panel stops propagation so
            // clicks on the image itself don't dismiss it.
            onClick={close}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#0b0d18]/90 p-4 sm:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-[1400px] flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-white">{open.caption}</p>

                <div className="flex items-center gap-2">
                  {/* Escape hatch to the raw file, for anyone who wants to zoom
                      past the viewport's limits. */}
                  <a
                    href={open.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open full size
                  </a>

                  <button
                    type="button"
                    ref={closeRef}
                    onClick={close}
                    aria-label="Close enlarged screenshot"
                    className="rounded-lg bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* max-h keeps a tall screenshot inside the viewport instead of
                  pushing the caption and controls off-screen. */}
              <Image
                src={open.src}
                alt={open.alt}
                width={open.width}
                height={open.height}
                sizes="100vw"
                priority
                className="h-auto max-h-[78vh] w-full rounded-lg object-contain shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
