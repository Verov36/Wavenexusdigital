import CompareIndex from "@/views/CompareIndex";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/nexus-field/vs";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <CompareIndex />
    </>
  );
}
