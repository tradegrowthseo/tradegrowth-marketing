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
import { readFileSync, writeFileSync } from "node:fs";

const CONTENT = {
  "/": ["app/page.tsx", "lib/services.ts", "lib/differentiators.ts", "lib/pricing.ts", "lib/audiences.ts"],
  "/services": ["app/services/page.tsx", "lib/services.ts", "lib/pricing.ts"],
  "/aeo": ["app/aeo/page.tsx", "lib/faqs.ts"],
  "/pricing": ["app/pricing/page.tsx", "lib/pricing.ts", "lib/faqs.ts", "components/ui/ComparisonTable.tsx"],
  "/audit": ["app/audit/page.tsx", "components/AuditForm.tsx"],
  "/websites": ["app/websites/page.tsx", "lib/websites.ts"],
  "/north-west": ["app/north-west/page.tsx", "lib/north-west.ts", "lib/pricing.ts", "lib/websites.ts"],
  "/results": ["app/results/page.tsx"],
  "/about": ["app/about/page.tsx", "lib/faqs.ts", "lib/audiences.ts"],
  "/contact": ["app/contact/page.tsx", "components/ContactForm.tsx", "lib/audiences.ts"],
  "/privacy": ["app/privacy/page.tsx"],
  "/terms": ["app/terms/page.tsx", "lib/pricing.ts"],
};

// One route per sector. The slugs are read out of lib/sectors.ts rather than
// listed again here, so adding a sector cannot leave the sitemap without a
// date for it. All sector pages share one template and one data file, so they
// move together, which is true: there is no per-sector source to date apart.
CONTENT["/sectors"] = ["app/sectors/page.tsx", "lib/sectors.ts"];
for (const [, slug] of readFileSync("lib/sectors.ts", "utf8").matchAll(/^    slug: "([a-z0-9-]+)",$/gm)) {
  CONTENT[`/sectors/${slug}`] = ["app/sectors/[slug]/page.tsx", "lib/sectors.ts", "lib/pricing.ts"];
}

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
for (const [route, date] of Object.entries(dates)) console.log(`  ${route.padEnd(46)} ${date}`);
