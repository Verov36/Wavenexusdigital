import type { Metadata } from "next";
import NotFound from "@/views/NotFound";
import { site } from "@/lib/seo/pages";

// Served with HTTP 404 for every URL that isn't a page. Next.js adds
// <meta name="robots" content="noindex"> to it, which keeps it out of search results.
export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${site.name}` },
};

export default function NotFoundPage() {
  return <NotFound />;
}
