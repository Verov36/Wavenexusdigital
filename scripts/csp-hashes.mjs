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
 * It fails the build if a page can't be processed, so a Next.js upgrade that
 * changes the output can't silently ship pages without the policy.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const APP_DIR = join(process.cwd(), ".next", "server", "app");
const EXTERNAL_SCRIPT_HOSTS = ["https://www.googletagmanager.com"];
const MARKER = 'http-equiv="Content-Security-Policy"';

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith(".html") ? [p] : [];
  });
}

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

if (!existsSync(APP_DIR)) {
  console.error("csp-hashes: .next/server/app not found — run `next build` first.");
  process.exit(1);
}

const files = htmlFiles(APP_DIR);
if (files.length === 0) {
  console.error("csp-hashes: no prerendered pages found.");
  process.exit(1);
}

for (const file of files) {
  let html = readFileSync(file, "utf8");
  if (html.includes(MARKER)) continue; // already processed
  const hashes = [...new Set(inlineScripts(html).map(sha256))];
  const policy = ["script-src 'self'", ...hashes, ...EXTERNAL_SCRIPT_HOSTS].join(" ");
  const meta = `<meta ${MARKER} content="${policy}"/>`;
  // Right after <meta charset>, ahead of every script in the document.
  const charset = /<meta charSet="utf-8"\/>/i;
  if (charset.test(html)) html = html.replace(charset, (m) => `${m}${meta}`);
  else if (/<head[^>]*>/i.test(html)) html = html.replace(/<head[^>]*>/i, (m) => `${m}${meta}`);
  else {
    console.error(`csp-hashes: no <head> in ${file}`);
    process.exit(1);
  }
  writeFileSync(file, html);
  console.log(`csp-hashes: ${file.slice(APP_DIR.length) || "/"} — ${hashes.length} inline script(s) hashed`);
}
