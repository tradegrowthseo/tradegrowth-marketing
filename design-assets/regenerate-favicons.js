/**
 * Regenerates the favicon set from the cube logo master.
 *
 *   node design-assets/regenerate-favicons.js
 *
 * Why the sizes are what they are: Google picks a favicon for search results
 * from the icons a page declares, and its documented preference is a square
 * PNG whose dimensions are a multiple of 48px. The original set was 16/32/64 —
 * none of which is a multiple of 48 — so this adds 48, 96, 192 and 512.
 *
 * The .ico keeps the classic desktop-browser sizes (16/32/48/64) as PNG-encoded
 * layers, which is what the previous .ico used and what every current browser
 * reads. It is written to two paths on purpose:
 *
 *   public/images/favicon.ico  — the one metadata.icons points at
 *   public/favicon.ico         — the root path crawlers hit by convention,
 *                                ignoring the <link> tags entirely
 *
 * They are byte-identical by construction here, which is the whole reason this
 * script exists: keeping them in sync by hand is how they drift.
 *
 * Deliberately absent: app/favicon.ico and app/icon.*. Those App Router file
 * conventions auto-generate their own <link> tag and take priority over
 * metadata.icons — a leftover starter app/favicon.ico is exactly what pinned
 * the old icon in place before. Everything is declared in metadata.icons, and
 * nowhere else.
 *
 * Not regenerated: public/images/apple-touch-icon.png. It is a hand-produced
 * 180x180 flattened onto white (iOS renders transparency badly) and is left
 * exactly as-is.
 *
 * sharp isn't a direct dependency — it comes in with Next. If it ever
 * disappears from node_modules, `npm i -D sharp` and run this again.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MASTER = path.join(__dirname, "..", "public", "images", "tradegrowth-marketing-icon.png");
const IMAGES = path.join(__dirname, "..", "public", "images");
const PUBLIC = path.join(__dirname, "..", "public");

/** Square PNGs written to public/images/favicon-<size>.png. */
const PNG_SIZES = [48, 96, 192, 512];

/** Layers embedded in the .ico, smallest first. */
const ICO_SIZES = [16, 32, 48, 64];

/** Renders the master to a square PNG buffer at `size`, preserving alpha. */
function render(size) {
  return sharp(MASTER)
    .resize(size, size, {
      fit: "contain",
      // Transparent padding, so a non-square master is never stretched.
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer();
}

/**
 * Packs PNG buffers into an ICO container.
 *
 * Layout: a 6-byte ICONDIR, then one 16-byte ICONDIRENTRY per image, then the
 * image payloads. PNG-encoded entries (rather than BMP) are what modern
 * browsers expect and what the previous .ico already used.
 */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(entries.length * 16);
  let offset = header.length + dir.length;

  entries.forEach(({ size, buffer }, i) => {
    const o = i * 16;
    // 0 encodes 256 in this field; our sizes are all well under that.
    dir[o] = size >= 256 ? 0 : size;
    dir[o + 1] = size >= 256 ? 0 : size;
    dir[o + 2] = 0; // palette colour count
    dir[o + 3] = 0; // reserved
    dir.writeUInt16LE(1, o + 4); // colour planes
    dir.writeUInt16LE(32, o + 6); // bits per pixel
    dir.writeUInt32LE(buffer.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += buffer.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.buffer)]);
}

const kb = (n) => (n / 1024).toFixed(1) + " KB";

async function main() {
  const meta = await sharp(MASTER).metadata();
  console.log(`master ${meta.width}x${meta.height} (${kb(fs.statSync(MASTER).size)})\n`);

  if (meta.width !== meta.height) {
    console.warn(`  ! master is not square — output is letterboxed with transparency\n`);
  }

  for (const size of PNG_SIZES) {
    const out = path.join(IMAGES, `favicon-${size}.png`);
    const buf = await render(size);
    fs.writeFileSync(out, buf);
    const upscaled = size > meta.width ? `  (upscaled from ${meta.width}px master)` : "";
    console.log(`  ${String(size + "x" + size).padEnd(9)} ${kb(buf.length).padStart(9)}  favicon-${size}.png${upscaled}`);
  }

  const layers = [];
  for (const size of ICO_SIZES) layers.push({ size, buffer: await render(size) });
  const ico = buildIco(layers);

  for (const target of [path.join(IMAGES, "favicon.ico"), path.join(PUBLIC, "favicon.ico")]) {
    fs.writeFileSync(target, ico);
    console.log(`  ${ICO_SIZES.join("/").padEnd(9)} ${kb(ico.length).padStart(9)}  ${path.relative(path.join(__dirname, ".."), target).split(path.sep).join("/")}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
