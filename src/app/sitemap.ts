import type { MetadataRoute } from "next";
import { AREAS, AREA_HUB, canonicalFor, site } from "@/lib/seo/pages";

type Entry = [path: string, changeFrequency: "weekly" | "monthly", priority: number];

// lastmod is each page's dateModified in lib/site.json (lib/areas.json for the
// service-area pages), the same record its title and description come from.
// Bump it there whenever the page's content changes; scripts/check-seo.mjs fails
// the build if a page has none.
const PAGES: Entry[] = [
  ["/", "weekly", 1.0],
  ["/nexus-field", "weekly", 0.95],
  ["/nexus-field/vs/servicetitan", "monthly", 0.9],
  ["/custom-apps", "monthly", 0.9],
  ["/services", "monthly", 0.9],
  ["/about", "monthly", 0.85],
  ["/portfolio", "monthly", 0.8],
  ["/blog", "weekly", 0.85],
  ["/contact", "monthly", 0.8],
  ["/audit", "monthly", 0.8],
  ["/blog/field-service-software-vs-spreadsheets", "monthly", 0.8],
  ["/blog/parts-walking-off-trucks", "monthly", 0.8],
  // Service-area pages; the Hampton Roads hub ranks a little higher
  ...AREAS.map((a): Entry => [`/web-design/${a.slug}`, "monthly", a.slug === AREA_HUB ? 0.85 : 0.8]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, changeFrequency, priority]) => ({
    url: canonicalFor(path),
    lastModified: site.pages[path].dateModified,
    changeFrequency,
    priority,
  }));
}
