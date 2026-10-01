/**
 * prerender.mjs — Per-route static HTML generator (SEO fix)
 * ---------------------------------------------------------------------------
 * WHY THIS EXISTS
 * The site is a React single-page app: the Vite build produces ONE dist/index.html
 * and the host rewrites every URL to it. That means every page (/services, /about,
 * /blog/...) was served with the HOMEPAGE title, description and — critically — a
 * <link rel="canonical"> pointing at the homepage. That canonical tells Google
 * "this page is a duplicate of the homepage," so subpages never get indexed.
 *
 * WHAT THIS DOES
 * After `vite build`, this script takes the built dist/index.html as a template and
 * writes a real per-route HTML file (dist/<route>/index.html) for every route, each
 * with its OWN <title>, meta description, canonical, Open Graph/Twitter tags, and a
 * crawler-readable content block injected into #root (React clears #root and takes
 * over on mount via createRoot, so real users are unaffected).
 *
 * It is pure Node with no dependencies, so it runs anywhere `npm run build` runs
 * (locally, Vercel, CI). It is wired into package.json after the vite build.
 *
 * CAUTION: the helpers below are plain regexes over index.html. Never put a tag
 * name in angle brackets inside a comment in index.html — it will match here.
 * ---------------------------------------------------------------------------
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { schemasFor } from "../src/app/lib/seo/schemas.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const templatePath = join(distDir, "index.html");

// Titles, descriptions and contact details live in src/app/lib/site.json, shared
// with the React app so the static HTML and the live page never disagree.
const site = JSON.parse(readFileSync(join(__dirname, "..", "src", "app", "lib", "site.json"), "utf8"));
const SITE_URL = site.url;
const SITE_NAME = site.name;
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PHONE = site.phone;
const EMAIL = site.email;

// Shared internal-link nav — gives crawlers a real link graph on every page
const NAV_LINKS = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/nexus-field", "Nexus Field"],
  ["/custom-apps", "Custom Apps"],
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

// ── Per-route SEO config ────────────────────────────────────────────────────
// path: route (used for canonical + output file location; title and
//       description come from site.json)
// h1: crawler-visible H1
// body: array of paragraph strings (crawler-readable content)
const ROUTES = [
  {
    path: "/",
    h1: "Web Design & Field Service Software — Hampton Roads, VA",
    body: [
      "WaveNexus Digital Invest is a US Marine Corps veteran-owned web design agency and software company based in Hampton Roads, Virginia. We build websites that bring in leads and make field service software that fits the way your team actually works.",
      "Our services include custom website design and development, custom web and mobile app development for businesses, local SEO and AI search optimization, branding and logo design, and social media management for local service businesses in Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, and surrounding Southeast Virginia communities.",
      "We are also the makers of Nexus Field — field service management software for HVAC, plumbing, electrical, landscaping, and contracting companies, with free parts inventory tracking across warehouses and trucks — and Nexus Inventory, a barcode-driven parts inventory system for warehouses and trucks.",
    ],
  },
  {
    path: "/services",
    h1: "Services That Actually Work",
    body: [
      "WaveNexus Digital Invest provides web design, custom app development, local SEO, AI search optimization, branding, and social media management for local businesses across Hampton Roads, VA.",
      "Website Development: modern, mobile-first websites built with local SEO from the first line of code, clear calls to action, and forms that convert visitors into inquiries.",
      "Custom Apps & Business Software: web apps, internal tools, and iOS and Android mobile apps built around how your business actually runs — job tracking, inventory, scheduling, customer portals. We built our own: Nexus Field and Nexus Inventory.",
      "SEO & AI Search Optimization: rank on Google and get cited by AI tools like ChatGPT and Perplexity, with local keyword targeting, Google Business Profile optimization, and monthly reporting.",
      "Branding & Logo Design: clean visual identity systems that make your business look established and trustworthy across your website, social media, and print.",
      "Social Media Management: consistent posting, content that sounds like you, and audience growth without the time drain.",
    ],
  },
  {
    path: "/nexus-field",
    h1: "Nexus Field — Field Service Management Software",
    body: [
      "Nexus Field is field service management software built for HVAC, plumbing, electrical, landscaping, and contracting companies. It works the way your team does.",
      "Free parts inventory in every plan: warehouse stock, truck-level inventory, technician accountability, and parts-used-per-job logging so you always know where your parts went.",
      "Also includes job tracking with full activity timelines, an automatic photo database attached to every job, surveys and inspections built into the workflow, technician management, and customer-first records.",
      "Straight pricing: no contract, a minimal setup fee to configure it around your business, and your price held for two years — then we sit down together, go through your pain points and what we can improve, and agree on what comes next. Businesses on the big-name platforms tell us the same three things: the price went up again, they're locked into a contract, and the setup fees were brutal. Nexus Field is built to be the opposite.",
      "Built by a Marine Corps veteran-owned team for people who work in the field — no bloat, no charging extra for the basics.",
    ],
  },
  {
    path: "/nexus-field/vs/servicetitan",
    h1: "Nexus Field vs ServiceTitan",
    body: [
      "ServiceTitan is the biggest name in field service software, and for a large multi-location operation it can be the right call. But the shops that call us have usually just opened a renewal notice. This page puts the two side by side with real numbers, including the ones ServiceTitan doesn't publish. Checked September 2026.",
      "The short version. Per tech per month: ServiceTitan approximately $245 to $500 (public estimate; ServiceTitan does not publish pricing), Nexus Field $75. Contract: ServiceTitan 12-month minimum, Nexus Field none, month to month. Setup: ServiceTitan implementation reported at $5,000 to $50,000, Nexus Field a minimal fee scoped to the size of your data migration and quoted on the discovery call.",
      "Line by line. ServiceTitan sells three plans (Starter, Essentials, The Works) with per-technician pricing shown only as Request Pricing, plus paid add-on modules: Marketing Pro, Pricebook Pro, Dispatch Pro, Fleet Pro, Scheduling Pro, Field Pro, and Contact Center Pro. Nexus Field has one plan with everything in it, office and dispatch users free, mobile and desktop included, parts inventory included in every plan, and your price held for two years, then renegotiated together.",
      "Year one for an 8-tech shop, using ServiceTitan's lowest reported per-tech price and lowest reported implementation fee: $245 × 8 × 12 = $23,520 plus $5,000 implementation = $28,520, before any add-on modules. Nexus Field: $75 × 8 × 12 = $7,200 plus a setup fee scoped to your migration. Same price in year two.",
      "To be fair, ServiceTitan is the better choice if you run a large multi-location operation, want marketing, call center, and financing inside one vendor, or need a deep third-party integration marketplace. Nexus Field is the better fit if you have between 2 and 40 techs and the renewal quote made you wince, you'd rather pay $75 a tech than budget $5,000+ before the app has done anything for you, you want the software configured around how your shop already works, parts walking off trucks is a bigger problem for you than marketing automation, and you want to be able to leave.",
      "Sources: ServiceTitan's pricing page for plan names, per-technician structure, and Pro add-ons; FSM Advisor and Projul for aggregated public price estimates. ServiceTitan does not publish prices; estimated figures are from user reports and review sites, not an official quote. ServiceTitan is a trademark of its owner; WaveNexus Digital Invest is not affiliated with ServiceTitan.",
    ],
  },
  {
    path: "/custom-apps",
    h1: "Custom App Development for Businesses — Hampton Roads, VA",
    body: [
      "You know what you need handled. We build the tool. Most businesses run on a mix of spreadsheets, group texts, and an off-the-shelf app that does about 60% of the job. If you can describe the process, WaveNexus Digital Invest can build the app that runs it — in the browser, on the phone, or both. Veteran-owned, based in Hampton Roads, Virginia.",
      "What we build: custom web apps and internal tools — job trackers, inventory, scheduling, dispatch boards, customer portals that run in a browser and work on a phone with nothing to install. Mobile apps for iOS and Android for the work that happens on the truck or on site: barcode scanning, photos tied to jobs, checklists and inspections, signatures and sign-off. And Nexus Field configured to you — if what you need is field service management, our own platform set up around your terminology, job types, and parts is usually the fastest route.",
      "How it works: 1. Tell us what you're handling — a free 30-minute call walking through the process as it actually happens. 2. We write the scope — a plain-English document covering every screen, who uses it, what it does, and what it costs; you approve it before anything gets built. 3. We build it in stages, so you see it working early and steer as we go. 4. We train your team before go-live. 5. We keep it running — hosting, updates, and changes as your business changes.",
      "What we've built — Nexus Field: field service management for HVAC, plumbing, electrical and contracting companies, with jobs and full history, photos attached to every job, surveys and inspections in the workflow, technician and truck management, and parts inventory in every plan.",
      "What we've built — Nexus Inventory: a standalone parts-inventory system built mobile-first for the warehouse and the truck. Techs scan parts in and out with a phone camera or handheld barcode scanner; labels print straight to a Zebra printer. Every truck has its own stock caps, checkouts are tagged to a job or to restock, and going over cap triggers a justification the manager approves or rejects. Six user roles, scheduled audit reports, CSV import and export.",
      "Both built and run by WaveNexus — the same team you'd be working with. Custom app developer near you in Hampton Roads, serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, and Norfolk. Start with a free scoping call.",
    ],
  },
  {
    path: "/portfolio",
    h1: "Real Projects. Real Results.",
    body: [
      "Web design and local SEO projects from WaveNexus Digital Invest for local service businesses across Hampton Roads, Virginia.",
      "Featured case study — Red Vine Mechanical HVAC: a full mobile-first redesign for a Hampton Roads HVAC contractor with dedicated service pages, a frictionless quote request form, LocalBusiness schema, and local SEO structure targeting Hampton Roads service-area searches.",
      "We help local businesses establish a stronger digital presence that ranks in search and converts visitors into leads.",
    ],
  },
  {
    path: "/about",
    h1: "Small Team. Serious Work.",
    body: [
      "WaveNexus Digital Invest is a Marine Corps veteran-owned digital agency and SaaS company based in Hampton Roads, VA. We'd rather do great work for a few clients than mediocre work for many.",
      "Chris founded WaveNexus after leaving the Marine Corps and seeing how many good local businesses were getting left behind online. We build websites, handle SEO, and help businesses look the part — and we built Nexus Field because field service companies kept telling us the existing software didn't fit how they work.",
      "We serve Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, Williamsburg, York County, and Isle of Wight.",
    ],
  },
  {
    path: "/blog",
    h1: "Digital Marketing & Field Service Insights",
    body: [
      "Practical tips on web design, local SEO, AI search, field service technology, and digital strategy from a veteran-owned perspective in Hampton Roads, VA.",
      "Featured: Field Service Software vs. Spreadsheets — Which One Actually Saves You Money? And: Parts Are Walking Off Your Trucks — Here's How to Track Them Without Adding Admin Work.",
    ],
  },
  {
    path: "/blog/field-service-software-vs-spreadsheets",
    h1: "Field Service Software vs. Spreadsheets: Which One Actually Saves You Money?",
    body: [
      "Most contractors in Hampton Roads start with spreadsheets because they look free. But the true cost is buried in payroll: roughly 10 hours per week of admin overhead, which at $85/hour is about $44,200 in lost billable time every year.",
      "Spreadsheets also carry a 15–20% error rate, create information silos with no single source of truth, and slow your dispatch flow. Field service management software replaces human error with structured workflows.",
      "The ROI of moving to software like Nexus Field: up to 35% more jobs per technician per day and payment cycles dropping from ~38 days to ~7 days.",
    ],
  },
  {
    path: "/blog/parts-walking-off-trucks",
    h1: "Parts Are Walking Off Your Trucks. Here's How to Track Them.",
    body: [
      "For HVAC, plumbing, and electrical contractors in Hampton Roads, parts walk off the truck one unrecorded fitting at a time. If you aren't tracking inventory at the truck level, you're losing 5–10% of your material value every year.",
      "Manual paperwork fails because it adds friction — if logging a part is a chore, techs won't do it. You need inventory tracking that is a byproduct of the job, not extra admin.",
      "Nexus Field solves this with truck-level precision, an optional 'no part, no close' rule, and real-time reorder triggers when truck stock hits a par level.",
    ],
  },
  {
    path: "/contact",
    h1: "Let's Talk",
    body: [
      "WaveNexus Digital Invest — veteran-owned web design, custom apps, and digital marketing in Hampton Roads, VA. Get in touch for a free website audit, a free app scoping call, or to discuss your project.",
      `Phone: ${PHONE} | Email: ${EMAIL}`,
      "Serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, and all of Southeast Virginia.",
    ],
  },
  {
    path: "/audit",
    h1: "Get Your Free Audit",
    body: [
      "Tell us where you are online and we'll give you an honest look at what's working, what isn't, and what would actually bring in more calls. No pitch, no packages you don't need.",
      "Every audit covers speed and mobile performance, how you show up on Google and in AI search tools, and plain-English findings with the fixes that matter most.",
      "Running a field service team? Request a demo of Nexus Field: $75 per tech a month, office users free, parts inventory included, no contract.",
      `Phone: ${PHONE} | Email: ${EMAIL}`,
    ],
  },
];

// ── HTML helpers (regex-based, dependency-free) ─────────────────────────────
function setTitle(html, title) {
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  }
  return html.replace(/<head[^>]*>/i, (m) => `${m}\n<title>${esc(title)}</title>`);
}

// Insert or replace a <meta name="..."> / <meta property="..."> tag
function upsertMeta(html, attr, key, content) {
  const re = new RegExp(`<meta[^>]*${attr}=["']${escapeRe(key)}["'][^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${esc(content)}">`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `${tag}\n</head>`);
}

// Insert or replace <link rel="canonical">
function upsertCanonical(html, href) {
  const re = /<link[^>]*rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${esc(href)}">`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `${tag}\n</head>`);
}

// Inject crawler-readable content inside the (empty) #root div.
// React's createRoot(...).render() replaces it on mount. Until then it is kept
// invisible (index.html hides .prerender unless JavaScript is off), so visitors
// don't see an unstyled flash; crawlers read the HTML either way.
function injectRootContent(html, contentHtml) {
  const re = /(<div id=["']root["'][^>]*>)([\s\S]*?)(<\/div>)/i;
  if (re.test(html)) {
    return html.replace(re, (_m, open, _inner, close) => `${open}${contentHtml}${close}`);
  }
  // Fallback: no #root found — drop content just inside <body>
  return html.replace(/<body[^>]*>/i, (m) => `${m}\n<div id="root">${contentHtml}</div>`);
}

// Add the page's JSON-LD structured data to <head>
function injectJsonLd(html, data) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return html.replace("</head>", `<script type="application/ld+json">${json}</script>\n</head>`);
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Build the readable content block for a route (shared header/nav + main + footer)
function renderContent(route) {
  const canonical = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
  const nav = NAV_LINKS.map(([href, label]) => `<a href="${href}">${label}</a>`).join(" · ");
  const paras = route.body.map((p) => `<p>${esc(p)}</p>`).join("\n");
  return `
<div class="prerender">
<nav aria-label="Primary">${nav}</nav>
<main>
<h1>${esc(route.h1)}</h1>
${paras}
</main>
<footer>
<p><strong>${esc(SITE_NAME)}</strong> — Veteran-owned web design, custom apps &amp; digital marketing, Hampton Roads, VA.</p>
<p>Serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth VA.</p>
<p>Phone: <a href="tel:${site.phoneE164}">${esc(PHONE)}</a> · Email: <a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p>
<p><a href="${canonical}">${esc(canonical)}</a></p>
</footer>
</div>`.trim();
}

// ── Main ────────────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(templatePath)) {
    console.log("⚠ dist/index.html not found — skipping prerender (run `vite build` first)");
    process.exit(0);
  }

  const template = readFileSync(templatePath, "utf8");
  let count = 0;

  for (const route of ROUTES) {
    const meta = site.pages[route.path];
    if (!meta) throw new Error(`No title/description for ${route.path} in src/app/lib/site.json`);
    const canonical = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    let html = template;

    // ---- <head> ----
    html = setTitle(html, meta.title);
    html = upsertMeta(html, "name", "description", meta.description);
    html = upsertCanonical(html, canonical);
    html = upsertMeta(html, "property", "og:title", meta.title);
    html = upsertMeta(html, "property", "og:description", meta.description);
    html = upsertMeta(html, "property", "og:url", canonical);
    html = upsertMeta(html, "property", "og:type", route.path.startsWith("/blog/") ? "article" : "website");
    html = upsertMeta(html, "property", "og:site_name", SITE_NAME);
    html = upsertMeta(html, "property", "og:image", OG_IMAGE);
    html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
    html = upsertMeta(html, "name", "twitter:title", meta.title);
    html = upsertMeta(html, "name", "twitter:description", meta.description);
    html = upsertMeta(html, "name", "twitter:image", OG_IMAGE);
    html = upsertMeta(
      html,
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    html = injectJsonLd(html, schemasFor(route.path, site));

    // ---- body: crawler-readable content ----
    html = injectRootContent(html, renderContent(route));

    // ---- write ----
    const outPath =
      route.path === "/" ? join(distDir, "index.html") : join(distDir, route.path, "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    count++;
    console.log(`✅ prerendered ${route.path.padEnd(42)} → ${outPath.replace(distDir, "dist")}`);
  }

  // ---- 404.html: Vercel serves this, with a real 404 status, for any URL that
  // has no file. The React app still boots and renders the NotFound page.
  let notFound = template;
  notFound = setTitle(notFound, `Page Not Found | ${SITE_NAME}`);
  notFound = upsertMeta(notFound, "name", "robots", "noindex, follow");
  notFound = notFound.replace(/<link[^>]*rel=["']canonical["'][^>]*>\n?/i, "");
  notFound = notFound.replace(/<meta[^>]*property=["']og:url["'][^>]*>\n?/i, "");
  writeFileSync(join(distDir, "404.html"), notFound, "utf8");
  console.log(`✅ wrote 404 page                                → dist/404.html`);

  console.log(`\n✅ Prerender complete — ${count} route(s) written with unique title, canonical, structured data, and content.`);
}

main();
