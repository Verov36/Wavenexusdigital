import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/pages";

const allow = (userAgent: string) => ({ userAgent, allow: "/" });

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Every crawler may index everything
      allow("*"),
      // Google, explicitly
      allow("Googlebot"),
      allow("Googlebot-Image"),
      // AI crawlers: needed for ChatGPT, Perplexity, Claude and Bing Copilot to find the site
      allow("GPTBot"),
      allow("PerplexityBot"),
      allow("ClaudeBot"),
      allow("anthropic-ai"),
      allow("OAI-SearchBot"),
      allow("ChatGPT-User"),
      allow("Claude-SearchBot"),
      allow("Claude-User"),
      allow("Perplexity-User"),
      allow("Google-Extended"),
      allow("Applebot"),
      allow("Applebot-Extended"),
      allow("Bingbot"),
      allow("BingPreview"),
      allow("DuckDuckBot"),
      // Slow down high-volume SEO tool scrapers (not search engines)
      { userAgent: "AhrefsBot", crawlDelay: 10 },
      { userAgent: "SemrushBot", crawlDelay: 10 },
      { userAgent: "MJ12bot", crawlDelay: 10 },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
