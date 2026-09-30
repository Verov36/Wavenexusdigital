import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { setMetadata } from "./metadata";

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

// ── Step 3: Write the site-wide defaults BEFORE React mounts ────────────────
// This used to live in App's useEffect. React runs child effects before parent
// effects, so each page's setPageMeta() call fired first and was then wiped out
// by setMetadata() — every route ended up reporting the homepage's title,
// description and (worst of all) a canonical pointing at "/". Running it at
// module scope means the defaults land first and each page's own metadata wins.
setMetadata();

export default function App() {
  useEffect(() => {
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
