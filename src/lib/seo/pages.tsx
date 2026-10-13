import type { Metadata } from "next";
import siteJson from "../site.json";
import areasJson from "../areas.json";

/**
 * Titles, descriptions and the rest of each page's <head> come from lib/site.json
 * (and lib/areas.json for the service-area pages), so search results, structured
 * data and the page itself never disagree.
 */

export type PageInfo = {
  title: string;
  description: string;
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  /** Service-area pages only */
  area?: string;
  faq?: [string, string][];
};

export type Area = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  local: string[];
  focus: [string, string][];
  faq: [string, string][];
};

export type Site = Omit<typeof siteJson, "pages"> & { pages: Record<string, PageInfo> };

export const AREAS = areasJson.areas as unknown as Area[];
export const AREA_HUB = areasJson.hub;

/** site.json plus one entry per service-area page. */
export const site: Site = {
  ...siteJson,
  pages: {
    ...(siteJson.pages as Record<string, PageInfo>),
    ...Object.fromEntries(
      AREAS.map((a) => [
        `/web-design/${a.slug}`,
        { title: a.title, description: a.description, area: a.name, faq: a.faq },
      ]),
    ),
  },
};

export const SITE_URL = site.url;
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const canonicalFor = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

/** Full <head> metadata for a route listed in site.json / areas.json. */
export function pageMetadata(path: string): Metadata {
  const page = site.pages[path];
  if (!page) throw new Error(`No title/description for ${path} in src/lib/site.json`);
  const url = canonicalFor(path);
  // Next.js drops the trailing slash from a bare-domain URL, which would change the
  // homepage canonical from ".../" to "..."; <HomeCanonical> renders those two tags instead.
  const isHome = path === "/";
  return {
    title: { absolute: page.title },
    description: page.description,
    ...(isHome ? {} : { alternates: { canonical: url } }),
    // A string, so the directives stay in the same order as before the migration.
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: path.startsWith("/blog/") ? "article" : "website",
      siteName: site.name,
      locale: "en_US",
      ...(isHome ? {} : { url }),
      title: page.title,
      description: page.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE],
    },
  };
}

/** The homepage's canonical and og:url, exactly as before ("https://…com/", with the slash). React places them in <head>. */
export function HomeCanonical() {
  const url = canonicalFor("/");
  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </>
  );
}
