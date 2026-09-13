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

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const templatePath = join(distDir, "index.html");

const SITE_URL = "https://wavenexusdigitalinvest.com";
const SITE_NAME = "WaveNexus Digital Invest";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PHONE = "(757) 601-8058";
const EMAIL = "chris.repstein@wavenexusdigitalinvest.com";

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
// path: route (used for canonical + output file location)
// title: full <title>
// description: meta description
// h1: crawler-visible H1
// body: array of paragraph strings (crawler-readable content)
const ROUTES = [
  {
    path: "/",
    title: "Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "WaveNexus Digital Invest is a veteran-owned local web designer and digital marketing team near you in Hampton Roads, VA. We build websites that bring in leads, run local SEO, and offer AI search optimization for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses. Also makers of Nexus Field field service software.",
    h1: "Web Design & Field Service Software — Hampton Roads, VA",
    body: [
      "WaveNexus Digital Invest is a US Marine Corps veteran-owned web design agency and software company based in Hampton Roads, Virginia. We build websites that bring in leads and make field service software that fits the way your team actually works.",
      "Our services include custom website design and development, custom web and mobile app development for businesses, local SEO and AI search optimization, branding and logo design, and social media management for local service businesses in Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, and surrounding Southeast Virginia communities.",
      "We are also the makers of Nexus Field — field service management software for HVAC, plumbing, electrical, landscaping, and contracting companies, with free parts inventory tracking across warehouses and trucks — and Nexus Inventory, a barcode-driven parts inventory system for warehouses and trucks.",
    ],
  },
  {
    path: "/services",
    title: "Services — Web Design, Custom Apps, SEO & Digital Marketing Near Me | Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "WaveNexus Digital Invest offers website design, custom business apps, local SEO, AI SEO, branding, and social media management for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News, VA.",
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
    title: "Nexus Field — Field Service Management Software | WaveNexus Digital Invest",
    description:
      "Nexus Field is field service management software for HVAC, plumbing, electrical, and contracting companies. Free parts inventory, job tracking, photo database, and survey tools — configured around your team.",
    h1: "Nexus Field — Field Service Management Software",
    body: [
      "Nexus Field is field service management software built for HVAC, plumbing, electrical, landscaping, and contracting companies. It works the way your team does.",
      "Free parts inventory in every plan: warehouse stock, truck-level inventory, technician accountability, and parts-used-per-job logging so you always know where your parts went.",
      "Also includes job tracking with full activity timelines, an automatic photo database attached to every job, surveys and inspections built into the workflow, technician management, and customer-first records.",
      "Built by a Marine Corps veteran-owned team for people who work in the field — no bloat, no charging extra for the basics.",
    ],
  },
  {
    path: "/custom-apps",
    title: "Custom App Developer Near Me | Business Software & Mobile Apps | Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "WaveNexus builds custom web and mobile apps for local businesses in Hampton Roads, VA — job tracking, inventory, scheduling, customer portals. You describe the process; we build the tool that fits it. Veteran-owned. Free scoping call.",
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
    title: "Portfolio — Web Design Work | Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "Real projects from WaveNexus Digital Invest — a veteran-owned web design company in Hampton Roads, VA. See our work for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.",
    h1: "Real Projects. Real Results.",
    body: [
      "Web design and local SEO projects from WaveNexus Digital Invest for local service businesses across Hampton Roads, Virginia.",
      "Featured case study — Red Vine Mechanical HVAC: a full mobile-first redesign for a Hampton Roads HVAC contractor with dedicated service pages, a frictionless quote request form, LocalBusiness schema, and local SEO structure targeting Hampton Roads service-area searches.",
      "We help local businesses establish a stronger digital presence that ranks in search and converts visitors into leads.",
    ],
  },
  {
    path: "/about",
    title: "About — Veteran-Owned Web Design | Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "WaveNexus Digital Invest is a veteran-owned web design and digital marketing company in Hampton Roads, VA. Marine Corps veteran founded, serving Suffolk, Virginia Beach, Chesapeake, and Newport News.",
    h1: "Small Team. Serious Work.",
    body: [
      "WaveNexus Digital Invest is a Marine Corps veteran-owned digital agency and SaaS company based in Hampton Roads, VA. We'd rather do great work for a few clients than mediocre work for many.",
      "Chris founded WaveNexus after leaving the Marine Corps and seeing how many good local businesses were getting left behind online. We build websites, handle SEO, and help businesses look the part — and we built Nexus Field because field service companies kept telling us the existing software didn't fit how they work.",
      "We serve Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, Williamsburg, York County, and Isle of Wight.",
    ],
  },
  {
    path: "/blog",
    title: "Blog — Digital Marketing & Field Service Insights | WaveNexus Digital Invest",
    description:
      "Practical tips on website development, local SEO, AI search, field service technology, and digital strategy from a veteran-owned perspective in Hampton Roads, VA.",
    h1: "Digital Marketing & Field Service Insights",
    body: [
      "Practical tips on web design, local SEO, AI search, field service technology, and digital strategy from a veteran-owned perspective in Hampton Roads, VA.",
      "Featured: Field Service Software vs. Spreadsheets — Which One Actually Saves You Money? And: Parts Are Walking Off Your Trucks — Here's How to Track Them Without Adding Admin Work.",
    ],
  },
  {
    path: "/blog/field-service-software-vs-spreadsheets",
    title: "Field Service Software vs. Spreadsheets: Which One Actually Saves You Money? | WaveNexus Digital Invest",
    description:
      "Spreadsheets look free but cost Hampton Roads contractors $44,200/year in lost billable time. See the real ROI of switching to field service management software like Nexus Field.",
    h1: "Field Service Software vs. Spreadsheets: Which One Actually Saves You Money?",
    body: [
      "Most contractors in Hampton Roads start with spreadsheets because they look free. But the true cost is buried in payroll: roughly 10 hours per week of admin overhead, which at $85/hour is about $44,200 in lost billable time every year.",
      "Spreadsheets also carry a 15–20% error rate, create information silos with no single source of truth, and slow your dispatch flow. Field service management software replaces human error with structured workflows.",
      "The ROI of moving to software like Nexus Field: up to 35% more jobs per technician per day and payment cycles dropping from ~38 days to ~7 days.",
    ],
  },
  {
    path: "/blog/parts-walking-off-trucks",
    title: "Parts Are Walking Off Your Trucks. Here's How to Track Them Without Adding Admin Work | WaveNexus Digital Invest",
    description:
      "HVAC, plumbing, and electrical contractors in Hampton Roads lose 5–10% of material value every year to untracked parts. Here's how Nexus Field solves the truck-level inventory problem.",
    h1: "Parts Are Walking Off Your Trucks. Here's How to Track Them.",
    body: [
      "For HVAC, plumbing, and electrical contractors in Hampton Roads, parts walk off the truck one unrecorded fitting at a time. If you aren't tracking inventory at the truck level, you're losing 5–10% of your material value every year.",
      "Manual paperwork fails because it adds friction — if logging a part is a chore, techs won't do it. You need inventory tracking that is a byproduct of the job, not extra admin.",
      "Nexus Field solves this with truck-level precision, an optional 'no part, no close' rule, and real-time reorder triggers when truck stock hits a par level.",
    ],
  },
  {
    path: "/contact",
    title: "Contact — Local Web Designer Near Me | Hampton Roads VA | WaveNexus Digital Invest",
    description:
      "Get in touch with WaveNexus Digital Invest — your local web design, custom app, and digital marketing team in Hampton Roads, VA. Serving Suffolk, Virginia Beach, Chesapeake, and Newport News. Free website audit.",
    h1: "Let's Talk",
    body: [
      "WaveNexus Digital Invest — veteran-owned web design, custom apps, and digital marketing in Hampton Roads, VA. Get in touch for a free website audit, a free app scoping call, or to discuss your project.",
      `Phone: ${PHONE} | Email: ${EMAIL}`,
      "Serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, and all of Southeast Virginia.",
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
// React's createRoot(...).render() clears #root on mount, so users never see this.
function injectRootContent(html, contentHtml) {
  const re = /(<div id=["']root["'][^>]*>)([\s\S]*?)(<\/div>)/i;
  if (re.test(html)) {
    return html.replace(re, (_m, open, _inner, close) => `${open}${contentHtml}${close}`);
  }
  // Fallback: no #root found — drop content just inside <body>
  return html.replace(/<body[^>]*>/i, (m) => `${m}\n<div id="root">${contentHtml}</div>`);
}

// Replace (or add) the <noscript> fallback with route-specific content
function setNoscript(html, contentHtml) {
  const block = `<noscript>${contentHtml}</noscript>`;
  if (/<noscript>[\s\S]*?<\/noscript>/i.test(html)) {
    return html.replace(/<noscript>[\s\S]*?<\/noscript>/i, block);
  }
  return html.replace("</body>", `${block}\n</body>`);
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
<div style="font-family:sans-serif;max-width:820px;margin:0 auto;padding:32px 20px">
<nav aria-label="Primary">${nav}</nav>
<main>
<h1>${esc(route.h1)}</h1>
${paras}
</main>
<footer>
<p><strong>${esc(SITE_NAME)}</strong> — Veteran-owned web design, custom apps &amp; digital marketing, Hampton Roads, VA.</p>
<p>Serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth VA.</p>
<p>Phone: ${esc(PHONE)} · Email: ${esc(EMAIL)}</p>
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
    const canonical = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    let html = template;

    // ---- <head> ----
    html = setTitle(html, route.title);
    html = upsertMeta(html, "name", "description", route.description);
    html = upsertCanonical(html, canonical);
    html = upsertMeta(html, "property", "og:title", route.title);
    html = upsertMeta(html, "property", "og:description", route.description);
    html = upsertMeta(html, "property", "og:url", canonical);
    html = upsertMeta(html, "property", "og:type", route.path.startsWith("/blog/") ? "article" : "website");
    html = upsertMeta(html, "property", "og:site_name", SITE_NAME);
    html = upsertMeta(html, "property", "og:image", OG_IMAGE);
    html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
    html = upsertMeta(html, "name", "twitter:title", route.title);
    html = upsertMeta(html, "name", "twitter:description", route.description);
    html = upsertMeta(html, "name", "twitter:image", OG_IMAGE);
    html = upsertMeta(
      html,
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // ---- body: crawler-readable content ----
    const content = renderContent(route);
    html = injectRootContent(html, content);
    html = setNoscript(html, content);

    // ---- write ----
    const outPath =
      route.path === "/" ? join(distDir, "index.html") : join(distDir, route.path, "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    count++;
    console.log(`✅ prerendered ${route.path.padEnd(42)} → ${outPath.replace(distDir, "dist")}`);
  }

  console.log(`\n✅ Prerender complete — ${count} route(s) written with unique title, canonical, and content.`);
}

main();
