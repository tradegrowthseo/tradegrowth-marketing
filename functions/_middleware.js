/**
 * Cloudflare Pages middleware: one authoritative host.
 *
 * Found 18 Oct 2026 from the first Search Console sync of this site:
 * www.tradegrowthseo.com answered 200 with the same pages, so Google treated
 * the two hosts as separate sites. It chose the www copy as canonical for
 * /services/, /pricing/ and /audit/ (overriding the canonical tag, which
 * points at the apex), left the apex copies "Discovered – currently not
 * indexed", and split the impressions between the two. Over 1 Jul – 17 Oct
 * the www rows carried 130 impressions the apex never saw.
 *
 * A canonical tag is a hint. A 301 is an instruction. So www redirects to the
 * apex, path and query preserved, exactly as the NDG site does.
 *
 * A zone-level Redirect Rule in the Cloudflare dashboard would run at the edge
 * without invoking this worker, but it would live outside version control and
 * outside this repo's deploy. Here it ships, and reverts, with the site.
 *
 * public/_routes.json keeps this worker away from static assets. A worker in
 * front of a media file breaks byte-range requests (learned on the NDG hero
 * film), and this only ever has an HTML-level job.
 *
 * Anything unexpected falls through to next(). A bug here must never take the
 * live site down.
 */

const APEX = "tradegrowthseo.com";

export const onRequest = async (context) => {
  const { request, next } = context;

  try {
    const url = new URL(request.url);
    if (url.hostname.toLowerCase() === `www.${APEX}`) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }
  } catch {
    // Fall through to the normal response.
  }

  return next();
};
