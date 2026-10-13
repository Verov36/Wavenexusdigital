import type { MetadataRoute } from "next";
import { AREAS, AREA_HUB, canonicalFor } from "@/lib/seo/pages";

type Entry = [path: string, lastModified: string, changeFrequency: "weekly" | "monthly", priority: number];

// Bump a page's date here when its content changes.
const PAGES: Entry[] = [
  ["/", "2026-10-12", "weekly", 1.0],
  ["/nexus-field", "2026-09-13", "weekly", 0.95],
  ["/nexus-field/vs/servicetitan", "2026-09-13", "monthly", 0.9],
  ["/custom-apps", "2026-09-13", "monthly", 0.9],
  ["/services", "2026-10-12", "monthly", 0.9],
  ["/about", "2026-10-12", "monthly", 0.85],
  ["/portfolio", "2026-10-12", "monthly", 0.8],
  ["/blog", "2026-06-30", "weekly", 0.85],
  ["/contact", "2026-10-12", "monthly", 0.8],
  ["/audit", "2026-09-24", "monthly", 0.8],
  ["/blog/field-service-software-vs-spreadsheets", "2026-07-17", "monthly", 0.8],
  ["/blog/parts-walking-off-trucks", "2026-07-17", "monthly", 0.8],
  // Service-area pages (lib/areas.json); the Hampton Roads hub ranks a little higher
  ...AREAS.map((a): Entry => [`/web-design/${a.slug}`, "2026-10-12", "monthly", a.slug === AREA_HUB ? 0.85 : 0.8]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, lastModified, changeFrequency, priority]) => ({
    url: canonicalFor(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
