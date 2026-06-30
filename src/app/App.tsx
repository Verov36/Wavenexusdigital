import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { setMetadata } from "./metadata";
import { injectStructuredData } from "./lib/seo/structuredData";

// Run immediately — before React renders — to kill any platform-injected noindex tags
(function nukeNoindex() {
  if (typeof document === "undefined") return;
  [
    'meta[name="robots"]',
    'meta[name="ROBOTS"]',
    'meta[content*="noindex"]',
    'meta[content*="nofollow"]',
    'meta[http-equiv="X-Robots-Tag"]',
  ].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => el.remove());
  });
})();

export default function App() {
  useEffect(() => {
    setMetadata();
    injectStructuredData();
    document.body.setAttribute("itemscope", "");
    document.body.setAttribute("itemtype", "https://schema.org/WebPage");
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}
