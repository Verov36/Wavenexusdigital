import BlogPostSpreadsheets from "@/views/BlogPostSpreadsheets";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/blog/field-service-software-vs-spreadsheets";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <BlogPostSpreadsheets />
    </>
  );
}
