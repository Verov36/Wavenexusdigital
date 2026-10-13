/**
 * csp-hashes.mjs — runs after `next build` (see package.json).
 *
 * Next.js starts every page with small inline <script> blocks (the React Server
 * Components payload). The Content-Security-Policy header in next.config.ts has
 * to allow inline scripts for those to run, because nonces would need each page
 * rendered per request and these pages are static.
 *
 * This script closes that gap. For every prerendered page it hashes each inline
 * script and adds, at the top of <head>, a second policy:
 *
 *   <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'sha256-…' … https://www.googletagmanager.com">
 *
 * Browsers enforce every policy they are given, so a script must pass both: the
 * only inline scripts that can run are the exact ones Next.js generated for that
 * page. An injected inline script (XSS) is blocked.
 *
 * Two ways it runs:
 *  - On Vercel, Next.js hands the build to Vercel's adapter from inside `next build`,
 *    before any later build step; scripts/csp-adapter.mjs wraps that adapter and
 *    calls addCspMeta() on every prerendered page first.
 *  - Locally (`npm run build`, no adapter), this file runs after `next build` and
 *    processes .next/server/app.
 * Either way it fails the build if no page can be processed, so a Next.js upgrade
 * that changes the output can't silently ship pages without the policy.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const EXTERNAL_SCRIPT_HOSTS = ["https://www.googletagmanager.com"];
const MARKER = 'http-equiv="Content-Security-Policy"';
export const DONE_FILE = "csp-hashes.done";

/** Inline, executable scripts: no src, and not a data block such as JSON-LD. */
function inlineScripts(html) {
  const out = [];
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attrs, body] = m;
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    if (type && !["text/javascript", "module", "application/javascript"].includes(type)) continue;
    out.push(body);
  }
  return out;
}

const sha256 = (s) => `'sha256-${createHash("sha256").update(s, "utf8").digest("base64")}'`;

/**
 * Adds the hash-based policy to one HTML file. Returns the new byte size, or null if
 * the file isn't an HTML document (or was already processed).
 */
export function addCspMeta(file) {
  let html = readFileSync(file, "utf8");
  if (!/<head[^>]*>/i.test(html) || html.includes(MARKER)) return null;
  const hashes = [...new Set(inlineScripts(html).map(sha256))];
  const policy = ["script-src 'self'", ...hashes, ...EXTERNAL_SCRIPT_HOSTS].join(" ");
  const meta = `<meta ${MARKER} content="${policy}"/>`;
  // Right after <meta charset>, ahead of every script in the document.
  const charset = /<meta charSet="utf-8"\/>/i;
  html = charset.test(html) ? html.replace(charset, (m) => `${m}${meta}`) : html.replace(/<head[^>]*>/i, (m) => `${m}${meta}`);
  writeFileSync(file, html);
  return Buffer.byteLength(html);
}

export function htmlFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith(".html") ? [p] : [];
  });
}

// ── CLI: `node scripts/csp-hashes.mjs` after `next build` ───────────────────
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const distDir = join(process.cwd(), ".next");
  if (existsSync(join(distDir, DONE_FILE))) {
    console.log("csp-hashes: pages already processed by the deployment adapter.");
    process.exit(0);
  }
  const appDir = join(distDir, "server", "app");
  let count = 0;
  for (const file of htmlFiles(appDir)) {
    if (addCspMeta(file) !== null) {
      count++;
      console.log(`csp-hashes: ${file.slice(appDir.length)}`);
    }
  }
  if (count === 0) {
    console.error("csp-hashes: no prerendered pages found in .next/server/app.");
    process.exit(1);
  }
  console.log(`csp-hashes: added a hash-based script policy to ${count} page(s).`);
}
