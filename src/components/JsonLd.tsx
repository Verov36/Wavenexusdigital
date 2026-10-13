import { schemasFor } from "@/lib/seo/schemas";
import { site } from "@/lib/seo/pages";

/** The page's JSON-LD structured data, rendered into the static HTML. */
export default function JsonLd({ path }: { path: string }) {
  // "<" is escaped so the JSON can never close the script element early.
  const json = JSON.stringify(schemasFor(path, site)).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
