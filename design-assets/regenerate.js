/**
 * Regenerates the web-ready founder portrait from the full-res master.
 *
 *   node design-assets/regenerate.js
 *
 * Why this exists: next.config.ts sets `images: { unoptimized: true }` (required
 * by `output: "export"`), so Next does no resizing at build time — whatever
 * sits in public/ is what every visitor downloads. The supplied master is a
 * 1.8 MB landscape PNG being shown as a 320px-wide 4/5 portrait, so it gets
 * pre-cropped and re-encoded here instead.
 *
 * The crop is centred horizontally and uses the master's full height. On the
 * current master that lands the face dead centre; check the output if you ever
 * swap in a differently-framed photo.
 *
 * sharp isn't a direct dependency — it comes in with Next. If it ever
 * disappears from node_modules, `npm i -D sharp` and run this again.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MASTER = path.join(__dirname, "brad-redfern.png");
const OUT = path.join(__dirname, "..", "public", "images", "brad-redfern.webp");

// 4/5 portrait, at 2x the 320px display box on the About page.
const ASPECT = 4 / 5;
const OUT_WIDTH = 640;
const OUT_HEIGHT = OUT_WIDTH / ASPECT;
const QUALITY = 82;

async function main() {
  const { width, height } = await sharp(MASTER).metadata();

  // Derive the crop from the master's real dimensions rather than hard-coding
  // them, so replacing the photo doesn't silently produce a bad crop.
  const cropWidth = Math.min(width, Math.round(height * ASPECT));
  const cropHeight = Math.round(cropWidth / ASPECT);

  await sharp(MASTER)
    .extract({
      left: Math.round((width - cropWidth) / 2),
      top: Math.round((height - cropHeight) / 2),
      width: cropWidth,
      height: cropHeight,
    })
    .resize(OUT_WIDTH, OUT_HEIGHT)
    .webp({ quality: QUALITY })
    .toFile(OUT);

  const masterKb = (fs.statSync(MASTER).size / 1024).toFixed(0);
  const outKb = (fs.statSync(OUT).size / 1024).toFixed(0);
  console.log(`master ${width}x${height} ${masterKb} KB`);
  console.log(`wrote  ${OUT_WIDTH}x${OUT_HEIGHT} ${outKb} KB -> ${path.relative(process.cwd(), OUT)}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
