import { notFound } from "next/navigation";
import ServiceArea from "@/views/ServiceArea";
import JsonLd from "@/components/JsonLd";
import { AREAS, pageMetadata } from "@/lib/seo/pages";

type Props = { params: Promise<{ area: string }> };

// Only the areas in lib/areas.json exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { area } = await params;
  return pageMetadata(`/web-design/${area}`);
}

export default async function Page({ params }: Props) {
  const { area: slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) notFound();
  return (
    <>
      <JsonLd path={`/web-design/${area.slug}`} />
      <ServiceArea area={area} />
    </>
  );
}
