/**
 * Cloudflare Pages middleware. Three jobs, all host-level, none of them
 * touching the static pages themselves.
 *
 * 1. One authoritative host. Found 18 Oct 2026 from the first Search Console
 *    sync of this site: www.tradegrowthseo.com answered 200 with the same
 *    pages, so Google treated the two hosts as separate sites. It chose the
 *    www copy as canonical for /services/, /pricing/ and /audit/ (overriding
 *    the canonical tag, which points at the apex), left the apex copies
 *    "Discovered – currently not indexed", and split the impressions between
 *    the two. A canonical tag is a hint. A 301 is an instruction. So www
 *    redirects to the apex, path and query preserved, exactly as the NDG site
 *    does.
 *
 * 2. The *.pages.dev preview alias is kept out of the index: robots.txt there
 *    becomes a blanket Disallow and every response carries X-Robots-Tag
 *    noindex. The header matters because Disallow only stops crawling; a
 *    preview URL already in the index needs a noindex it is allowed to fetch
 *    in order to drop out.
 *
 * 3. /u/* is the CRM, worn under this domain. Every outreach email carries an
 *    opt-out link, and proposals are sent as a link too. Those pages live on
 *    the CRM (crm.tradegrowthseo.com), but a prospect should only ever see
 *    tradegrowthseo.com, so this proxies the request there and hands the
 *    response back: method, headers and body forwarded, Location headers that
 *    point at the CRM rewritten to this host. The CRM references its own
 *    scripts and styles by absolute address (assetPrefix), so nothing on the
 *    proxied page asks this static site for files it does not have.
 *
 * A zone-level Redirect Rule in the Cloudflare dashboard would do job 1 at
 * the edge without invoking this worker, but it would live outside version
 * control and outside this repo's deploy. Here it ships, and reverts, with
 * the site.
 *
 * public/_routes.json keeps this worker away from static assets. A worker in
 * front of a media file breaks byte-range requests (learned on the NDG hero
 * film), and this only ever has HTML-level jobs.
 *
 * Anything unexpected falls through to next(). A bug here must never take the
 * live site down.
 */

const APEX = "tradegrowthseo.com";
const CRM = "https://crm.tradegrowthseo.com";

const PREVIEW_ROBOTS = "User-agent: *\nDisallow: /\n";
const NOINDEX = "noindex, nofollow";

// Hop-by-hop and host-specific headers that must not be copied across.
const DROP_REQUEST = ["host", "x-forwarded-host", "x-forwarded-proto", "cf-connecting-ip", "cf-ray", "cf-visitor", "cf-ipcountry", "content-length"];
const DROP_RESPONSE = ["content-encoding", "content-length", "transfer-encoding", "connection", "alt-svc", "cf-ray", "report-to", "nel"];

async function proxyToCrm(request, url) {
  const target = CRM + url.pathname + url.search;
  const headers = new Headers(request.headers);
  for (const h of DROP_REQUEST) headers.delete(h);

  const init = { method: request.method, headers, redirect: "manual" };
  if (request.method !== "GET" && request.method !== "HEAD") init.body = await request.arrayBuffer();

  const upstream = await fetch(target, init);
  const out = new Headers(upstream.headers);
  for (const h of DROP_RESPONSE) out.delete(h);

  const location = out.get("location");
  if (location && location.startsWith(CRM)) out.set("location", `https://${APEX}` + location.slice(CRM.length));
  out.set("x-robots-tag", NOINDEX);

  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers: out });
}

export const onRequest = async (context) => {
  const { request, next } = context;

  try {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();

    if (host === `www.${APEX}`) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }

    if (host.endsWith(".pages.dev")) {
      if (url.pathname === "/robots.txt") {
        return new Response(PREVIEW_ROBOTS, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "x-robots-tag": NOINDEX,
            "cache-control": "no-store",
          },
        });
      }
      const response = await next();
      const tagged = new Response(response.body, response);
      tagged.headers.set("x-robots-tag", NOINDEX);
      return tagged;
    }

    if (url.pathname === "/u" || url.pathname.startsWith("/u/")) {
      return await proxyToCrm(request, url);
    }
  } catch {
    // Fall through to the normal response.
  }

  return next();
};
