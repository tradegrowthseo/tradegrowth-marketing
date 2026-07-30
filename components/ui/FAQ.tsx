"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Faq } from "@/lib/faqs";

interface FAQProps {
  faqs: Faq[];
  /**
   * Emits FAQPage JSON-LD alongside the accordion. We sell AEO, so our own
   * FAQs ship with the schema that makes them quotable by answer engines.
   * Set false on a page that already emits FAQPage schema elsewhere — two
   * FAQPage blocks on one URL is worse than none.
   */
  schema?: boolean;
}

export default function FAQ({ faqs, schema = true }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <div className="divide-y divide-[#e6e8f2] border-y border-[#e6e8f2]">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 text-left py-5 group"
                >
                  <span className="text-[#171a26] font-semibold text-base md:text-lg group-hover:text-[#3d4cf5] transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-all ${
                      isOpen
                        ? "bg-gradient-brand-static text-white"
                        : "bg-[#eef0ff] text-[#3d4cf5]"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#565c6b] leading-relaxed pb-6 pr-12 max-w-3xl">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}
