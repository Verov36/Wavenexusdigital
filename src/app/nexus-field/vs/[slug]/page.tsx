import { notFound } from "next/navigation";
import Compare from "@/views/Compare";
import JsonLd from "@/components/JsonLd";
import { competitors, getCompetitor } from "@/lib/comparisons";
import { pageMetadata } from "@/lib/seo/pages";

type Props = { params: Promise<{ slug: string }> };

// One page per competitor in lib/comparisons.ts; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return pageMetadata(`/nexus-field/vs/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) notFound();
  return (
    <>
      <JsonLd path={`/nexus-field/vs/${competitor.slug}`} />
      <Compare competitor={competitor} />
    </>
  );
}
