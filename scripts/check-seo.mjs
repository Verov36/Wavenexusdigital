#!/usr/bin/env node
/**
 * check-seo.mjs: fails the build when a page's <head> basics are off, instead of
 * shipping them and finding out from an audit.
 *
 * For every page in src/lib/site.json and src/lib/areas.json it checks:
 *   - title: 30-60 characters, unique. Titles are used as-is (title.absolute), so
 *     this is the length people see in search results.
 *   - description: 110-160 characters.
 *   - dateModified: present, YYYY-MM-DD, not in the future. It is the sitemap's lastmod.
 *
 * Nothing is trimmed automatically: a page that fails is listed so the copy can be rewritten.
 */
import { readFileSync } from "node:fs";

const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), "utf8"));
const site = read("src/lib/site.json");
const areas = read("src/lib/areas.json");

const pages = {
  ...site.pages,
  ...Object.fromEntries(areas.areas.map((a) => [`/web-design/${a.slug}`, a])),
};

const today = new Date().toISOString().slice(0, 10);
const problems = [];
const seen = new Map();

for (const [path, p] of Object.entries(pages)) {
  const t = p.title ?? "";
  const d = p.description ?? "";
  if (t.length < 30 || t.length > 60) problems.push(`${path}: title is ${t.length} chars (needs 30-60): "${t}"`);
  if (seen.has(t)) problems.push(`${path}: same title as ${seen.get(t)}`);
  seen.set(t, path);
  if (d.length < 110 || d.length > 160) problems.push(`${path}: description is ${d.length} chars (needs 110-160)`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.dateModified ?? "")) problems.push(`${path}: dateModified missing or not YYYY-MM-DD`);
  else if (p.dateModified > today) problems.push(`${path}: dateModified ${p.dateModified} is in the future`);
}

if (problems.length) {
  console.error(`check-seo: ${problems.length} problem(s)\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log(`check-seo: ${Object.keys(pages).length} pages OK (titles 30-60, descriptions 110-160, dateModified set)`);
