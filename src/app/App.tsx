import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { setMetadata } from "./metadata";
import { injectStructuredData } from "./lib/seo/structuredData";

// ── Step 1: Nuke any existing noindex tags immediately ──────────────────────
(function nukeNoindex() {
  if (typeof document === "undefined") return;
  const selectors = [
    'meta[name="robots"]',
    'meta[name="ROBOTS"]',
    'meta[name="Robots"]',
    'meta[content*="noindex"]',
    'meta[content*="nofollow"]',
    'meta[http-equiv="X-Robots-Tag"]',
    'meta[http-equiv="x-robots-tag"]',
  ];
  selectors.forEach((sel) =>
    document.querySelectorAll(sel).forEach((el) => el.remove())
  );
})();

// ── Step 2: Watch for any noindex tags added later and kill them instantly ──
(function watchNoindex() {
  if (typeof document === "undefined" || typeof MutationObserver === "undefined") return;

  const isNoindexMeta = (node: Node): boolean => {
    if (node.nodeType !== 1) return false;
    const el = node as Element;
    if (el.tagName !== "META") return false;
    const name = (el.getAttribute("name") || "").toLowerCase();
    const httpEquiv = (el.getAttribute("http-equiv") || "").toLowerCase();
    const content = (el.getAttribute("content") || "").toLowerCase();
    return (
      (name === "robots" && (content.includes("noindex") || content.includes("nofollow"))) ||
      content.includes("noindex") ||
      (httpEquiv === "x-robots-tag" && content.includes("noindex"))
    );
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (isNoindexMeta(node)) {
          (node as Element).remove();
        }
      });
    });
  });

  // Start watching as soon as head is available
  const startObserving = () => {
    if (document.head) {
      observer.observe(document.head, { childList: true, subtree: true });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserving);
  } else {
    startObserving();
  }
})();

export default function App() {
  useEffect(() => {
    // Step 3: Write clean index,follow tag after React mounts
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
