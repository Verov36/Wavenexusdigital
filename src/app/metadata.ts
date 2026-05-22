export const metadata = {
  title: "Website Development Hampton Roads VA | Website Developers Suffolk, Virginia Beach, Chesapeake | WaveNexus Digital",
  description: "Local website developers serving Hampton Roads, Suffolk, Virginia Beach, Chesapeake, and Newport News VA. Professional website development services for businesses in Southeast Virginia. Custom web development, SEO optimization, and digital solutions.",
  keywords: "website developers Hampton Roads, website development Virginia Beach, web developers Suffolk VA, website development Chesapeake, website developers Newport News, Hampton Roads web development, Suffolk website design, Virginia Beach web developers, Chesapeake website development, Newport News web design, local website developers, website development near me, professional website developers, custom website development, web development services, business website development, responsive web development, SEO website development, affordable website development Virginia",
  author: "WaveNexus Digital Invest",
  canonical: typeof window !== "undefined" ? window.location.origin : "https://wavenexusdigitalinvest.com",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  language: "en-US",
  openGraph: {
    title: "Website Development Hampton Roads VA | Suffolk, Virginia Beach, Chesapeake | WaveNexus Digital",
    description: "Local website developers serving Hampton Roads, Suffolk, Virginia Beach, Chesapeake, and Newport News VA. Professional website development and digital solutions for Southeast Virginia businesses.",
    type: "website",
    siteName: "WaveNexus Digital Invest",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Hampton Roads VA | Suffolk, Virginia Beach, Chesapeake",
    description: "Local website developers serving Hampton Roads, Suffolk, Virginia Beach, Chesapeake, and Newport News VA. Professional website development and digital solutions.",
  },
};

export function setMetadata() {
  // Set document title
  document.title = metadata.title;

  // Set meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", metadata.description);

  // Set meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute("content", metadata.keywords);

  // Set meta author
  let metaAuthor = document.querySelector('meta[name="author"]');
  if (!metaAuthor) {
    metaAuthor = document.createElement("meta");
    metaAuthor.setAttribute("name", "author");
    document.head.appendChild(metaAuthor);
  }
  metaAuthor.setAttribute("content", metadata.author);

  // Set robots meta
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement("meta");
    metaRobots.setAttribute("name", "robots");
    document.head.appendChild(metaRobots);
  }
  metaRobots.setAttribute("content", metadata.robots);

  // Set language
  document.documentElement.setAttribute("lang", "en");

  // Set canonical URL
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute("href", metadata.canonical);

  // Set viewport - optimized for mobile
  const metaViewport = document.querySelector('meta[name="viewport"]');
  if (metaViewport) {
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover");
  }

  // Add mobile-specific meta tags
  let metaFormatDetection = document.querySelector('meta[name="format-detection"]');
  if (!metaFormatDetection) {
    metaFormatDetection = document.createElement("meta");
    metaFormatDetection.setAttribute("name", "format-detection");
    document.head.appendChild(metaFormatDetection);
  }
  metaFormatDetection.setAttribute("content", "telephone=yes");

  // iOS-specific optimizations
  let metaAppleMobileWebAppCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
  if (!metaAppleMobileWebAppCapable) {
    metaAppleMobileWebAppCapable = document.createElement("meta");
    metaAppleMobileWebAppCapable.setAttribute("name", "apple-mobile-web-app-capable");
    document.head.appendChild(metaAppleMobileWebAppCapable);
  }
  metaAppleMobileWebAppCapable.setAttribute("content", "yes");

  let metaAppleMobileWebAppStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  if (!metaAppleMobileWebAppStatusBarStyle) {
    metaAppleMobileWebAppStatusBarStyle = document.createElement("meta");
    metaAppleMobileWebAppStatusBarStyle.setAttribute("name", "apple-mobile-web-app-status-bar-style");
    document.head.appendChild(metaAppleMobileWebAppStatusBarStyle);
  }
  metaAppleMobileWebAppStatusBarStyle.setAttribute("content", "black-translucent");

  // Open Graph tags
  const ogTags = [
    { property: "og:title", content: metadata.openGraph.title },
    { property: "og:description", content: metadata.openGraph.description },
    { property: "og:type", content: metadata.openGraph.type },
    { property: "og:site_name", content: metadata.openGraph.siteName },
    { property: "og:locale", content: metadata.openGraph.locale },
    { property: "og:url", content: metadata.canonical },
  ];

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });

  // Twitter Card tags
  const twitterTags = [
    { name: "twitter:card", content: metadata.twitter.card },
    { name: "twitter:title", content: metadata.twitter.title },
    { name: "twitter:description", content: metadata.twitter.description },
  ];

  twitterTags.forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });
}
