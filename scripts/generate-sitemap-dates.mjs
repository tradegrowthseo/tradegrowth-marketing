// Per-page lastmod, derived from git history.
//
// The framework default stamps every URL with the build time, which tells
// Google the entire site changed on every deploy. Google discounts a lastmod it
// can't trust, so that signal is worse than none at all.
//
// This runs at COMMIT time and its output is committed. Computing it during the
// build would break on the shallow clones CI and Cloudflare Pages use — git log
// returns nothing there, and the bug comes back silently.
//
// A route's date is the newest commit touching either its own file or the
// content modules it renders, because the copy lives in lib/ rather than in the
// page.

import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const CONTENT = {
  "/": ["app/page.tsx", "lib/services.ts", "lib/differentiators.ts", "lib/pricing.ts", "lib/audiences.ts"],
  "/services": ["app/services/page.tsx", "lib/services.ts", "lib/pricing.ts"],
  "/aeo": ["app/aeo/page.tsx", "lib/faqs.ts"],
  "/pricing": ["app/pricing/page.tsx", "lib/pricing.ts", "lib/faqs.ts", "components/ui/ComparisonTable.tsx"],
  "/audit": ["app/audit/page.tsx", "components/AuditForm.tsx"],
  "/results": ["app/results/page.tsx"],
  "/about": ["app/about/page.tsx", "lib/faqs.ts", "lib/audiences.ts"],
  "/contact": ["app/contact/page.tsx", "components/ContactForm.tsx", "lib/audiences.ts"],
};

const lastCommit = (file) => {
  const out = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: "utf8" }).trim();
  return out || null;
};

const dates = {};
for (const [route, files] of Object.entries(CONTENT)) {
  const stamps = files.map(lastCommit).filter(Boolean).sort();
  if (!stamps.length) {
    throw new Error(`No git history for ${route} — refusing to emit a build-time lastmod.`);
  }
  dates[route] = stamps[stamps.length - 1];
}

writeFileSync("lib/sitemap-dates.json", JSON.stringify(dates, null, 2) + "\n");
console.log("Wrote lib/sitemap-dates.json");
for (const [route, date] of Object.entries(dates)) console.log(`  ${route.padEnd(12)} ${date}`);
