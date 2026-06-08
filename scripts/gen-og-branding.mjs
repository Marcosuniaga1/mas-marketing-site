// One-off generator for public/og-branding.png (1200x630).
// Same visual style as gen-og-image.mjs but with copy specific to the
// /branding landing page.
// Run: node scripts/gen-og-branding.mjs

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "..", "public", "og-branding.png");

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

  <!-- eyebrow chip -->
  <g transform="translate(80, 230)">
    <rect width="380" height="36" rx="18" fill="rgba(196, 160, 80, 0.12)" stroke="${GOLD}" stroke-opacity="0.4"/>
    <text x="20" y="24"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="14" font-weight="600" fill="${GOLD}"
          letter-spacing="0.18em">
      BRANDING · IDENTIDAD DE MARCA
    </text>
  </g>

  <!-- main heading (2 lines, last line in gold) -->
  <g transform="translate(80, 340)">
    <text x="0" y="0"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="82" font-weight="800" fill="#ffffff"
          letter-spacing="-0.04em">
      Una marca
    </text>
    <text x="0" y="92"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          font-size="82" font-weight="800" fill="url(#gold)"
          letter-spacing="-0.04em">
      que se recuerda.
    </text>
  </g>

  <!-- subtitle -->
  <text x="80" y="530"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="24" font-weight="500" fill="${MUTED}"
        letter-spacing="-0.01em">
    Naming · Logo · Manual de marca · Posicionamiento
  </text>

  <!-- thin gold accent line -->
  <rect x="80" y="554" width="120" height="3" fill="url(#gold)"/>

  <!-- footer row -->
  <text x="80" y="585"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="22" font-weight="500" fill="#d6d3d1">
    masmarketingagency.com
  </text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);

console.log(`✓ Wrote ${out}`);
