"use client";

/**
 * Analytics consent, stored per browser.
 *
 * Under PECR, analytics cookies need consent before they are set — so GA4 must
 * not load until a visitor has agreed. Nothing here runs on the server: the
 * site is a static export, so the decision lives in the visitor's browser.
 */

export type ConsentState = "granted" | "denied" | "unset";

const KEY = "tg-analytics-consent";

/** Fired when the choice changes, so the analytics loader can react without a reload. */
export const CONSENT_EVENT = "tg-consent-change";

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unset";
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    // Private mode, or storage blocked entirely. Treat as undecided, which
    // means analytics stays off — the safe direction to fail in.
    return "unset";
  }
}

export function writeConsent(state: Exclude<ConsentState, "unset">): void {
  try {
    window.localStorage.setItem(KEY, state);
  } catch {
    // If we can't persist it we still honour it for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}
