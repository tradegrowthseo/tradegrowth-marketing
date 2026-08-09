"use client";

import { useEffect } from "react";

/**
 * Site-wide GA4 click tracking, mounted once from app/layout.tsx.
 *
 * Events fired here:
 *   whatsapp_click    — any wa.me / api.whatsapp.com link, including the
 *                       floating WhatsAppButton
 *   phone_click       — any tel: link
 *   audit_cta_click   — any link to /audit (header, footer, hero CTAs, CTABand,
 *                       the 404 page)
 *
 * generate_lead is NOT fired here. It belongs on the forms' success paths in
 * ContactForm and AuditForm, where a confirmed send can actually be observed.
 *
 * Why one delegated listener instead of an onClick on each link: nearly every
 * page carrying these CTAs is a server component — app/page.tsx, the contact
 * page, Footer, CTABand, not-found. Giving each an onClick would force them all
 * to become client components and ship their markup as JS, on a site that is
 * otherwise a fully static export. One listener on document costs nothing and
 * also catches links added after this file was written.
 *
 * Matching is on href rather than link text, so rewording a CTA can't silently
 * detach its tracking.
 *
 * Listening in the capture phase means the event is seen before any handler
 * further down could stop it propagating. Note this tracks primary clicks and
 * keyboard activation (both fire `click`); middle-click "open in new tab"
 * fires `auxclick` instead and is not counted.
 */

/** wa.me and the api.whatsapp.com form both open a WhatsApp chat. */
const WHATSAPP = /(?:^|\/\/)(?:wa\.me|api\.whatsapp\.com)\b/i;

/** /audit, with or without the trailing slash next.config.ts adds. */
const AUDIT_PATH = /^\/audit\/?$/;

function labelOf(a: HTMLAnchorElement) {
  // aria-label first: the floating WhatsApp bubble is an icon with no text.
  const text = a.getAttribute("aria-label") || a.textContent || "";
  return text.replace(/\s+/g, " ").trim().slice(0, 100);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      // closest() so a click on an inner <svg> or <span> still resolves to
      // the anchor that wraps it.
      const a = target.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href) return;

      let event: string | null = null;

      if (href.startsWith("tel:")) {
        event = "phone_click";
      } else if (WHATSAPP.test(href)) {
        event = "whatsapp_click";
      } else if (a.origin === window.location.origin && AUDIT_PATH.test(a.pathname)) {
        // a.pathname resolves "/audit" and any absolute form to the same value.
        event = "audit_cta_click";
      }

      if (!event) return;

      // Optional-chained: the GA script may not have loaded, or a blocker may
      // have stopped it entirely.
      window.gtag?.("event", event, {
        link_text: labelOf(a),
        link_url: href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
