import { useEffect } from "react";
import WaveNexusWebsite from "./components/WaveNexusWebsite";
import { Toaster } from "./components/ui/sonner";
import { setMetadata } from "./metadata";
import { initAnalytics } from "./lib/analytics";
import { injectStructuredData } from "./lib/seo/structuredData";

export default function App() {
  useEffect(() => {
    // Set metadata for SEO
    setMetadata();

    // Inject structured data for rich snippets
    injectStructuredData();

    // Add semantic markup for crawlers (without noscript fallback)
    document.body.setAttribute('itemscope', '');
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage');

    // Initialize analytics
    initAnalytics();
  }, []);

  return (
    <>
      <WaveNexusWebsite />
      <Toaster position="top-center" />
    </>
  );
}
