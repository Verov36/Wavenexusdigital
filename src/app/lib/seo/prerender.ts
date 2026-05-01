// Prerender and SSR compatibility helpers

/**
 * Checks if the current user agent is a search engine crawler
 */
export function isCrawler(): boolean {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const crawlers = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'sogou',
    'exabot',
    'facebot',
    'ia_archiver',
    'crawler',
    'bot',
    'spider',
  ];

  return crawlers.some(crawler => userAgent.includes(crawler));
}

// Noscript content removed - was causing "JavaScript needed" message to appear
// Search engines can still crawl via:
// - Structured data (JSON-LD schemas)
// - Semantic HTML markup
// - Meta tags
// - Sitemap.xml
