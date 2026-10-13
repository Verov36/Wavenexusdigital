import Contact from "@/views/Contact";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/contact";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <Contact />
    </>
  );
}
