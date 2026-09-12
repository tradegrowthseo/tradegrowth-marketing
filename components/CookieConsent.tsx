"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/consent";

/**
 * Analytics consent banner.
 *
 * The container carries id="cookie-consent" deliberately. Compliance scanners
 * locate the banner with selectors like [id*="consent"] — if the only matching
 * id is on the heading (which aria-labelledby needs), the scanner analyses the
 * heading, finds no buttons inside it, and reports no reject option, no policy
 * link and no purpose text. All false, all cascading from one selector miss.
 * Costs nothing to prevent, and "the scanner is wrong" is a poor position to
 * argue from with a prospect.
 */
export default function CookieConsent() {
  // Starts hidden and only appears once we've confirmed no choice is stored,
  // so it never flashes for a returning visitor who already decided.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === "unset") setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (state: "granted" | "denied") => {
    writeConsent(state);
    setVisible(false);
  };

  return (
    <div
      id="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-heading"
      aria-describedby="cookie-consent-body"
      className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-5"
    >
      <div className="mx-auto max-w-[880px] rounded-2xl border border-[#e6e8f2] bg-white p-5 sm:p-6 shadow-[0_16px_50px_rgba(23,26,38,0.18)]">
        <h2 id="cookie-consent-heading" className="text-[#171a26] font-bold text-base mb-2">
          Analytics cookies
        </h2>
        <p id="cookie-consent-body" className="text-[#565c6b] text-sm leading-relaxed mb-4">
          We&apos;d like to use Google Analytics to see which pages are useful and how people
          reach us. It&apos;s optional, nothing is set until you agree, and declining changes
          nothing about how the site works. See our{" "}
          <Link href="/privacy/" className="text-[#3d4cf5] font-semibold hover:underline">
            privacy policy
          </Link>{" "}
          for what we collect and who processes it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex items-center justify-center bg-gradient-brand text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all"
          >
            Accept analytics
          </button>
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex items-center justify-center border border-[#e6e8f2] bg-white hover:bg-[#f6f7fc] text-[#171a26] font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
