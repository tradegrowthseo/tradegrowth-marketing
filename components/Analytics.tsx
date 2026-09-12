"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CONSENT_EVENT, readConsent, type ConsentState } from "@/lib/consent";

/**
 * Loads GA4 only once a visitor has accepted.
 *
 * The GoogleAnalytics component injects the gtag script as soon as it renders,
 * so gating has to happen above it — there is no "load but don't track" mode.
 * Until consent is granted this renders nothing and no Google cookie is set,
 * which is the state a compliance scanner checks for.
 *
 * Consequence worth knowing: GA4 now sees consented visitors only, so real
 * traffic is higher than the dashboard. Never reconcile it against Search
 * Console impressions, which aren't gated.
 */
export default function Analytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<ConsentState>("unset");

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (e: Event) => setConsent((e as CustomEvent).detail as ConsentState);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (consent !== "granted") return null;
  return <GoogleAnalytics gaId={gaId} />;
}
