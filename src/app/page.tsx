import Home from "@/views/Home";
import JsonLd from "@/components/JsonLd";
import { HomeCanonical, pageMetadata } from "@/lib/seo/pages";

const PATH = "/";

export const metadata = pageMetadata(PATH);

export default function Page() {
  return (
    <>
      <HomeCanonical />
      <JsonLd path={PATH} />
      <Home />
    </>
  );
}
