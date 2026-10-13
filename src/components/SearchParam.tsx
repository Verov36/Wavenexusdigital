"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function Reader({ name, onValue }: { name: string; onValue: (value: string | null) => void }) {
  const value = useSearchParams().get(name);
  useEffect(() => onValue(value), [value, onValue]);
  return null;
}

/**
 * Reports a query-string parameter to its parent once the page is running in
 * the browser. The pages themselves are static (the HTML is the same for every
 * query string), so the parameter can only be read on the client; keeping that
 * read inside its own Suspense boundary lets the rest of the page render into
 * the static HTML as normal.
 */
export default function SearchParam(props: { name: string; onValue: (value: string | null) => void }) {
  return (
    <Suspense fallback={null}>
      <Reader {...props} />
    </Suspense>
  );
}
