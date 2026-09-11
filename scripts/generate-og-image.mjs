// Builds the 1200x630 social card from the brand logo.
//
// The site was using the raw logo (963x330) as og:image. Card renderers expect
// roughly 1.91:1, so a wide thin logo gets letterboxed or centre-cropped —
// on LinkedIn, which is where this audience actually shares things, the
// wordmark was losing its ends.
//
// Regenerate with `npm run og-image` if the logo changes.

import sharp from "sharp";

const W = 1200;
const H = 630;
const BG = { r: 15, g: 18, b: 32, alpha: 1 }; // #0f1220, the site's hero ground

const logo = await sharp("public/images/tradegrowth-marketing-logo.png")
  .resize({ width: 720, withoutEnlargement: true })
  .toBuffer();

const { height: logoHeight } = await sharp(logo).metadata();

await sharp({ create: { width: W, height: H, channels: 4, background: BG } })
  .composite([{ input: logo, top: Math.round((H - logoHeight) / 2), left: Math.round((W - 720) / 2) }])
  .png()
  .toFile("public/images/og-card.png");

const { width, height, size } = await sharp("public/images/og-card.png").metadata();
console.log(`Wrote public/images/og-card.png — ${width}x${height}, ${(size / 1024).toFixed(0)} KB`);
