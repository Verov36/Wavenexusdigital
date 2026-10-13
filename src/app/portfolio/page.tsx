import Portfolio from "@/views/Portfolio";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/portfolio";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <Portfolio />
    </>
  );
}
