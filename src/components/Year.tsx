"use client";
import { useEffect, useState } from "react";

/** The current year. Rendered at build time, then corrected in the browser if the build is older. */
export default function Year({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
