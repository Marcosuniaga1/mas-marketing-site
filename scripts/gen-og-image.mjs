// One-off generator for public/og-image.png (1200x630).
// Renders an SVG with the MAS brand and rasterizes via sharp.
// Run: node scripts/gen-og-image.mjs
//
// Re-run any time the tagline/colors change.

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "..", "public", "og-image.png");

const W = 1200;
const H = 630;
const BG = "#060606";
const BG_GLOW = "#1a1208";
const GOLD = "#C4A050";
const GOLD_LIGHT = "#F5D572";
const GOLD_DARK = "#8B6F1F";
const MUTED = "#a8a29e";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bg" cx="20%" cy="10%" r="80%">
      <stop offset="0%" stop-color="${BG_GLOW}"/>
      <stop offset="60%" stop-color="${BG}"/>
      <stop offset="100%" stop-color="${BG}"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${GOLD_LIGHT}"/>
      <stop offset="50%" stop-color="${GOLD}"/>
      <stop offset="100%" stop-color="${GOLD_DARK}"/>
    </linearGradient>
    <linearGradient id="markGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${GOLD_LIGHT}"/>
      <stop offset="100%" stop-color="${GOLD_DARK}"/>
    </linearGradient>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- top-left logo mark + brand name -->
  <g transform="translate(80, 80)">
    <rect width="56" height="56" rx="14" fill="url(#markGold)"/>
    <text x="76" y="38"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="30" font-weight="700" fill="#ffffff"
          letter-spacing="-0.02em">
      MAS Marketing Agency
    </text>
  </g>

  <!-- main heading: two lines -->
  <g transform="translate(80, 320)">
    <text x="0" y="0"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="84" font-weight="800" fill="#ffffff"
          letter-spacing="-0.04em">
      Marketing que convierte.
    </text>
    <text x="0" y="98"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="84" font-weight="800" fill="url(#gold)"
          letter-spacing="-0.04em">
      Webs que venden.
    </text>
  </g>

  <!-- subtitle -->
  <text x="80" y="500"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="28" font-weight="500" fill="${MUTED}"
        letter-spacing="-0.01em">
    Páginas web · Meta &amp; Google Ads · SEO · Branding
  </text>

  <!-- footer row -->
  <text x="80" y="570"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="24" font-weight="500" fill="#d6d3d1">
    masmarketingagency.com
  </text>
  <text x="${W - 80}" y="570" text-anchor="end"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="24" font-weight="500" fill="${GOLD}">
    Venezuela · LATAM · España
  </text>

  <!-- thin gold accent line -->
  <rect x="80" y="540" width="120" height="3" fill="url(#gold)"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);

console.log(`✓ Wrote ${out}`);
