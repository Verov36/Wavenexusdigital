#!/usr/bin/env node
/**
 * indexnow.mjs: tells Bing, Yandex and the other IndexNow engines which pages changed,
 * so they re-crawl them now instead of on their own schedule. (Google doesn't use
 * IndexNow; it reads the sitemap.)
 *
 *   node scripts/indexnow.mjs [--days N] [--all] [--dry-run]
 *
 * Reads the LIVE sitemap, so run it after a deploy is live (the GitHub workflow
 * .github/workflows/indexnow.yml does this on every successful production deploy).
 * Sends the URLs whose lastmod is within the last N days (default 3), or every URL with --all.
 * The key file public/aa20561ec20ba1fdf663bc0649b66bd5.txt must stay deployed; engines fetch it to verify the ping.
 */
const SITE = "https://wavenexusdigitalinvest.com";
const KEY = "aa20561ec20ba1fdf663bc0649b66bd5";

const args = process.argv.slice(2);
const days = Number(args[args.indexOf("--days") + 1]) || 3;
const all = args.includes("--all");
const dryRun = args.includes("--dry-run");

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const cutoff = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);
const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map(([, u]) => ({ loc: u.match(/<loc>([^<]+)/)?.[1], lastmod: u.match(/<lastmod>([^<]+)/)?.[1] ?? "" }))
  .filter((u) => u.loc && (all || u.lastmod.slice(0, 10) >= cutoff))
  .map((u) => u.loc);

if (!urls.length) {
  console.log(`indexnow: nothing changed in the last ${days} day(s)`);
  process.exit(0);
}
console.log(`indexnow: ${urls.length} URL(s)\n  ${urls.join("\n  ")}`);
if (dryRun) process.exit(0);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`indexnow: HTTP ${res.status} ${res.statusText}`);
// 200 = accepted, 202 = accepted, key still being verified
if (res.status !== 200 && res.status !== 202) process.exit(1);
