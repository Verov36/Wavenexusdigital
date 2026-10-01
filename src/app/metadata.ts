import site from "./lib/site.json";

// Every page's <head> tags are written into its static HTML at build time
// (vite.config.ts + scripts/prerender.mjs), using the titles and descriptions in
// lib/site.json. This only keeps them correct when the visitor navigates
// client-side from one page to another.

type PageMeta = { title: string; description: string };
const pages = site.pages as Record<string, PageMeta>;

function setTag(selector: string, attrKey: string, attrVal: string, content: string) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string | null) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (href === null) {
    link?.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

const INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/** Sets title, description, canonical, OG and Twitter tags for a route listed in site.json. */
export function setPageMeta(path: string, override?: Partial<PageMeta>) {
  const meta = { ...pages[path], ...override };
  const url = path === "/" ? `${site.url}/` : `${site.url}${path}`;

  document.title = meta.title;
  setTag('meta[name="robots"]', "name", "robots", INDEX);
  setTag('meta[name="description"]', "name", "description", meta.description);
  setTag('meta[property="og:title"]', "property", "og:title", meta.title);
  setTag('meta[property="og:description"]', "property", "og:description", meta.description);
  setTag('meta[property="og:url"]', "property", "og:url", url);
  setTag('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
  setTag('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
  setCanonical(url);
}

/** For the 404 page: keep it out of search results and drop the canonical. */
export function setNotFoundMeta() {
  document.title = `Page Not Found | ${site.name}`;
  setTag('meta[name="robots"]', "name", "robots", "noindex, follow");
  setCanonical(null);
}
