import BlogPostPartsTracking from "@/views/BlogPostPartsTracking";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/blog/parts-walking-off-trucks";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <BlogPostPartsTracking />
    </>
  );
}
