import localFont from "next/font/local";

// Self-hosted with next/font (files from Fontsource, SIL Open Font License), so
// no request ever goes to Google Fonts and text never waits on a third party.

export const barlowCondensed = localFont({
  src: [
    { path: "../fonts/barlow-condensed-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
  fallback: ["sans-serif"],
});

export const dmSans = localFont({
  src: [
    { path: "../fonts/dm-sans-latin-opsz-normal.woff2", weight: "100 1000", style: "normal" },
    { path: "../fonts/dm-sans-latin-opsz-italic.woff2", weight: "100 1000", style: "italic" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["sans-serif"],
});

export const jetbrainsMono = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: ["monospace"],
});
