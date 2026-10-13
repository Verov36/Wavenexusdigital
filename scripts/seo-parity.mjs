#!/usr/bin/env node
/**
 * seo-parity.mjs — compares what search engines see on two copies of the site.
 *
 *   node scripts/seo-parity.mjs [--baseline URL] [--candidate URL] [--host-check] [--json FILE]
 *
 *   --baseline   the site as it is now        (default https://wavenexusdigitalinvest.com)
 *   --candidate  the site you want to ship    (default http://localhost:3000, i.e. `next build && next start`)
 *   --host-check also request the candidate with Host: www.wavenexusdigitalinvest.com and
 *                expect a permanent redirect to the apex domain (only works against `next start`,
 *                since a hosted preview routes by its own hostname)
 *   --json       write the full per-URL results to FILE
 *   --rendered-h1 FILE  JSON map {path: h1} of the baseline's H1 *after* JavaScript ran (e.g. from
 *                Playwright). The old site's raw HTML had a hidden crawler-only H1, so the raw H1s
 *                are expected to differ; with this file each candidate H1 must equal the H1 visitors
 *                actually saw on the baseline.
 *
 * For every URL in the baseline's sitemap.xml it compares, on the raw HTML (no JavaScript):
 * HTTP status, <title>, meta description, canonical, robots meta, Open Graph and Twitter
 * tags, H1 text, and the JSON-LD (parsed and deep-compared). It also checks that an
 * unknown URL returns 404 with noindex, and that /sitemap.xml and /robots.txt say the
 * same thing (compared by meaning, not by byte: entries, dates, priorities, rules).
 *
 * KNOWN_DIFFERENCES lists differences that are intended; they are reported but don't
 * fail the run. Exit code 1 if anything else differs.
 *
 * No dependencies; Node 20+.
 */
import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";
import { writeFileSync } from "node:fs";
import { isDeepStrictEqual } from "node:util";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASELINE = opt("baseline", "https://wavenexusdigitalinvest.com").replace(/\/$/, "");
const CANDIDATE = opt("candidate", "http://localhost:3000").replace(/\/$/, "");
const HOST_CHECK = args.includes("--host-check");
const JSON_OUT = opt("json", null);
const RENDERED_H1 = opt("rendered-h1", null);
const SITE = "https://wavenexusdigitalinvest.com";

/**
 * Differences that are intended. key: "<path> <field>" (path "*" = every page).
 * value: why. A listed difference is still printed, but doesn't fail the run.
 */
const KNOWN_DIFFERENCES = {
  // The old static HTML carried a hidden, crawler-only summary whose <h1> was written
  // separately from the page; React replaced it on load. The new HTML is the real page,
  // so crawlers now get the same H1 visitors see.
  "* h1": "Raw-HTML H1 differs by design: server HTML now contains the real page; its H1 is the H1 visitors always saw (old HTML had a hidden crawler-only H1).",
  // Next.js marks its own 404 page noindex; "follow" is the default either way.
  "/__404__ robots": "Next.js emits robots \"noindex\" on its 404 page (old: \"noindex, follow\"); identical in effect.",
};

// ── HTTP ─────────────────────────────────────────────────────────────────────
function get(url, headers = {}) {
  const u = new URL(url);
  const request = u.protocol === "https:" ? httpsRequest : httpRequest;
  return new Promise((resolve, reject) => {
    const req = request(u, { method: "GET", headers: { "user-agent": "seo-parity/1.0", ...headers } }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (c) => (body += c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error(`timeout: ${url}`)));
    req.end();
  });
}

// ── HTML extraction (regex-based; the inputs are machine-generated HTML) ────
const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&");
const squash = (s) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) out[m[1].toLowerCase()] = decode(m[3] ?? m[4]);
  return out;
}

function extract(html) {
  const head = html.slice(0, html.search(/<\/head>/i) + 1 || html.length);
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => attrs(m[0]));
  const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => attrs(m[0]));
  const metaBy = (key, value) => metas.filter((m) => m[key] === value).map((m) => m.content);
  const one = (arr) => (arr.length === 1 ? arr[0] : arr.length === 0 ? null : arr);
  const og = {};
  const tw = {};
  for (const m of metas) {
    if (m.property?.startsWith("og:")) og[m.property] = m.content;
    if (m.name?.startsWith("twitter:")) tw[m.name] = m.content;
  }
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch {
      return { __unparseable: m[1].slice(0, 80) };
    }
  });
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => squash(m[1]));
  return {
    title: one([...head.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)].map((m) => decode(m[1]).trim())),
    description: one(metaBy("name", "description")),
    canonical: one(links.filter((l) => l.rel === "canonical").map((l) => l.href)),
    robots: one(metaBy("name", "robots")),
    og,
    twitter: tw,
    geo: { region: one(metaBy("name", "geo.region")), placename: one(metaBy("name", "geo.placename")), position: one(metaBy("name", "geo.position")) },
    h1: one(h1),
    jsonLd,
  };
}

/** Text a visitor without JavaScript would read: <body> minus scripts, styles and hidden elements. */
export function visibleText(html) {
  let body = html.slice(html.search(/<body/i));
  body = body.replace(/<(script|style|template|noscript)\b[\s\S]*?<\/\1>/gi, " ");
  // elements with the boolean `hidden` attribute (not the Tailwind class "hidden", which is responsive)
  body = body.replace(/<([a-z]+)\b(?:[^>"']|"[^"]*"|'[^']*')*?\shidden(?:=""|(?=[\s>/]))[^>]*>[\s\S]*?<\/\1>/gi, " ");
  return squash(body);
}

// ── sitemap / robots, compared by meaning ───────────────────────────────────
function parseSitemap(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, u]) => {
    const tag = (t) => u.match(new RegExp(`<${t}>([^<]*)</${t}>`))?.[1]?.trim() ?? null;
    return { loc: tag("loc"), lastmod: tag("lastmod"), changefreq: tag("changefreq"), priority: tag("priority") === null ? null : Number(tag("priority")) };
  });
}
function parseRobots(txt) {
  const groups = [];
  const sitemaps = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    if (!line) continue;
    const [k, ...rest] = line.split(":");
    const key = k.trim().toLowerCase();
    const val = rest.join(":").trim();
    if (key === "sitemap") sitemaps.push(val);
    else if (key === "user-agent") {
      if (!cur || cur.rules.length) groups.push((cur = { agents: [], rules: [] }));
      cur.agents.push(val.toLowerCase());
    } else if (cur) cur.rules.push(`${key}: ${val}`);
  }
  const byAgent = {};
  for (const g of groups) for (const a of g.agents) byAgent[a] = [...(byAgent[a] || []), ...g.rules].sort();
  return { byAgent, sitemaps: sitemaps.sort() };
}

// ── compare ──────────────────────────────────────────────────────────────────
const results = [];
let failures = 0;
function record(path, field, base, cand) {
  const same = isDeepStrictEqual(base, cand);
  const known = KNOWN_DIFFERENCES[`${path} ${field}`] ?? KNOWN_DIFFERENCES[`* ${field}`];
  const status = same ? "match" : known ? "intended" : "DIFF";
  if (status === "DIFF") failures++;
  results.push({ path, field, status, ...(same ? {} : { baseline: base, candidate: cand, note: known }) });
  return status;
}

async function main() {
  console.log(`baseline:  ${BASELINE}\ncandidate: ${CANDIDATE}\n`);

  const renderedH1 = RENDERED_H1 ? JSON.parse((await import("node:fs")).readFileSync(RENDERED_H1, "utf8")) : null;

  // sitemap.xml
  const [bs, cs] = await Promise.all([get(`${BASELINE}/sitemap.xml`), get(`${CANDIDATE}/sitemap.xml`)]);
  const baseSitemap = parseSitemap(bs.body);
  const candSitemap = parseSitemap(cs.body);
  record("/sitemap.xml", "status", bs.status, cs.status);
  record("/sitemap.xml", "entries", baseSitemap, candSitemap);
  if (!baseSitemap.length) throw new Error("baseline sitemap has no URLs");

  // robots.txt
  const [br, cr] = await Promise.all([get(`${BASELINE}/robots.txt`), get(`${CANDIDATE}/robots.txt`)]);
  record("/robots.txt", "status", br.status, cr.status);
  record("/robots.txt", "rules", parseRobots(br.body), parseRobots(cr.body));

  // every page
  const rows = [];
  for (const { loc } of baseSitemap) {
    const path = new URL(loc).pathname.replace(/(.)\/$/, "$1");
    const [b, c] = await Promise.all([get(`${BASELINE}${path}`), get(`${CANDIDATE}${path}`)]);
    const be = extract(b.body);
    const ce = extract(c.body);
    const row = { path };
    row.status = record(path, "status", b.status, c.status);
    for (const f of ["title", "description", "canonical", "robots", "og", "twitter", "geo", "h1", "jsonLd"]) row[f] = record(path, f, be[f], ce[f]);
    if (renderedH1) row.h1Rendered = record(path, "h1-vs-rendered-baseline", renderedH1[path] ?? null, ce.h1);
    // Visitors without JavaScript (and crawlers) must get the page's real content.
    const text = visibleText(c.body);
    const h1s = [].concat(ce.h1 ?? []);
    row.contentInHtml = record(path, "visible-content", true, h1s.length > 0 && h1s.every((h) => text.includes(h)) && text.length > 1500);
    row.noHiddenBlock = record(path, "no-hidden-crawler-block", true, !/class="prerender"|visibility:\s*hidden/i.test(c.body));
    rows.push(row);
  }

  // unknown URL
  const missing = "/this-page-does-not-exist-" + Date.now().toString(36);
  const [bm, cm] = await Promise.all([get(`${BASELINE}${missing}`), get(`${CANDIDATE}${missing}`)]);
  record("/__404__", "status", bm.status, cm.status);
  record("/__404__", "status-is-404", true, cm.status === 404);
  record("/__404__", "title", extract(bm.body).title, extract(cm.body).title);
  record("/__404__", "robots", extract(bm.body).robots, extract(cm.body).robots);
  record("/__404__", "noindex", true, /noindex/.test(String(extract(cm.body).robots)));
  record("/__404__", "no-canonical", null, extract(cm.body).canonical);

  // www → apex
  if (HOST_CHECK) {
    for (const [host, path] of [["www.wavenexusdigitalinvest.com", "/about"], ["www.wavenexusdigitalinvest.com", "/"], ["wavenexusdigital.vercel.app", "/blog"]]) {
      const r = await get(`${CANDIDATE}${path}`, { host });
      record(`host ${host}${path}`, "redirect", { permanent: true, location: `${SITE}${path}` }, { permanent: r.status === 308 || r.status === 301, location: r.headers.location ?? null });
    }
  }

  // report
  const fields = ["status", "title", "description", "canonical", "robots", "og", "twitter", "geo", "h1", ...(renderedH1 ? ["h1Rendered"] : []), "jsonLd", "contentInHtml", "noHiddenBlock"];
  const mark = (s) => (s === "match" ? "✓" : s === "intended" ? "≈" : "✗");
  console.log(["path".padEnd(46), ...fields.map((f) => f.slice(0, 7).padEnd(7))].join(" "));
  for (const r of rows) console.log([r.path.padEnd(46), ...fields.map((f) => mark(r[f]).padEnd(7))].join(" "));
  console.log("\n✓ identical   ≈ intended difference   ✗ unexpected difference\n");
  for (const r of results.filter((x) => x.path.startsWith("/sitemap") || x.path.startsWith("/robots") || x.path.startsWith("/__404__") || x.path.startsWith("host "))) {
    console.log(`${mark(r.status)} ${r.path} ${r.field}${r.status === "match" ? "" : `\n    baseline:  ${JSON.stringify(r.baseline)}\n    candidate: ${JSON.stringify(r.candidate)}${r.note ? `\n    why: ${r.note}` : ""}`}`);
  }
  const diffs = results.filter((r) => r.status !== "match" && !(r.path.startsWith("/__404__") || r.path.startsWith("/sitemap") || r.path.startsWith("/robots") || r.path.startsWith("host ")));
  if (diffs.length) {
    console.log("\nPage differences:");
    for (const d of diffs) console.log(`${mark(d.status)} ${d.path} ${d.field}\n    baseline:  ${JSON.stringify(d.baseline)}\n    candidate: ${JSON.stringify(d.candidate)}`);
  }
  if (JSON_OUT) writeFileSync(JSON_OUT, JSON.stringify(results, null, 2));
  console.log(`\n${results.length} checks: ${results.filter((r) => r.status === "match").length} identical, ${results.filter((r) => r.status === "intended").length} intended differences, ${failures} unexpected differences.`);
  process.exit(failures ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
