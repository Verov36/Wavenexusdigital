import Audit from "@/views/Audit";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo/pages";

const PATH = "/audit";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <JsonLd path={PATH} />
      <Audit />
    </>
  );
}
