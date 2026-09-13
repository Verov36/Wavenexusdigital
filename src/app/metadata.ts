// Hampton Roads, VA geo coordinates (Suffolk area)
const GEO_LATITUDE = "36.7282";
const GEO_LONGITUDE = "-76.5836";
// Always the production origin. Deriving this from window.location made the
// homepage canonical point at whatever host served the page (previews, the
// vercel.app alias), which is exactly what a canonical must never do.
const BASE_URL = "https://wavenexusdigitalinvest.com";

export const metadata = {
  // Lead with "near me" — Google treats this as proximity intent, not a keyword
  title: "Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital Invest",

  // Answer-ready: direct answer in first 40-60 words (AI citation best practice)
  description: "WaveNexus Digital Invest is a veteran-owned local web designer and digital marketing team near you in Hampton Roads, VA. We build websites that bring in leads, run local SEO, and offer AI search optimization for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses. Also makers of Nexus Field field service software.",

  keywords: [
    // Primary "near me" intent queries
    "web developer near me",
    "best web developer near me",
    "website designer near me",
    "local website designer near me",
    "local marketing team near me",
    "digital marketing near me",
    "web design near me",
    "SEO company near me",
    "local SEO company near me",
    "website design company near me",
    "web development company near me",
    "affordable web designer near me",
    "small business web designer near me",
    "branding company near me",
    "logo designer near me",
    "social media management near me",
    // Custom apps / software
    "app developer near me",
    "mobile app developer near me",
    "custom software development near me",
    "custom app development Hampton Roads",
    "business app developer Hampton Roads VA",
    "web app developer Virginia Beach",
    "mobile app developer Virginia Beach",
    "custom software developer Suffolk VA",
    "iOS Android app developer Hampton Roads",
    "internal tools developer small business",
    // Hampton Roads geo
    "web developer Hampton Roads",
    "local website designer Hampton Roads VA",
    "web design Hampton Roads",
    "digital marketing Hampton Roads VA",
    "SEO company Hampton Roads",
    "local marketing team Hampton Roads",
    "website development Hampton Roads",
    "marketing agency Hampton Roads Virginia",
    // Virginia Beach
    "web developer Virginia Beach VA",
    "website designer Virginia Beach",
    "local web design Virginia Beach",
    "digital marketing Virginia Beach",
    "SEO services Virginia Beach VA",
    // Suffolk
    "web developer Suffolk VA",
    "website designer Suffolk Virginia",
    "web design Suffolk VA",
    // Chesapeake
    "web developer Chesapeake VA",
    "website designer Chesapeake Virginia",
    "digital marketing Chesapeake VA",
    // Newport News
    "web developer Newport News VA",
    "website design Newport News Virginia",
    // Norfolk
    "web developer Norfolk VA",
    "website designer Norfolk Virginia",
    // Veteran angle
    "veteran owned web design company Virginia",
    "veteran owned digital marketing agency Hampton Roads",
    "marine corps veteran owned business Virginia",
    // AI SEO — growing query category
    "AI SEO optimization Hampton Roads",
    "GEO optimization Virginia",
    "Google AI Overview optimization",
    "ChatGPT SEO optimization",
    "AI search optimization near me",
    // Nexus Field
    "field service management software",
    "field service app",
    "HVAC job tracking software",
    "parts inventory field service app",
    "field service software for plumbers",
    "field service management app Virginia",
    "Nexus Field app",
    "technician management software",
    // Nexus Inventory
    "parts inventory software",
    "truck inventory app",
    "barcode inventory app field service",
    "Nexus Inventory",
  ].join(", "),

  author: "WaveNexus Digital Invest",
  canonical: BASE_URL,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  language: "en-US",

  openGraph: {
    title: "Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital",
    description: "Veteran-owned local web design and digital marketing team in Hampton Roads, VA. Custom websites, custom apps, local SEO, AI SEO optimization, branding — and makers of Nexus Field field service software.",
    type: "website",
    siteName: "WaveNexus Digital Invest",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Local Web Designer & Digital Marketing | Hampton Roads VA | WaveNexus Digital",
    description: "Veteran-owned web design, custom apps, local SEO, AI SEO, and digital marketing serving Hampton Roads VA. Also makers of Nexus Field field service management software.",
  },

  geo: {
    region: "US-VA",
    placename: "Hampton Roads, Virginia",
    latitude: GEO_LATITUDE,
    longitude: GEO_LONGITUDE,
    icbm: `${GEO_LATITUDE}, ${GEO_LONGITUDE}`,
  },
};

export function setMetadata() {
  document.title = metadata.title;

  const head = document.head;

  // Nuke every robots/noindex tag the platform may have injected — all variants
  [
    'meta[name="robots"]',
    'meta[name="ROBOTS"]',
    'meta[name="Robots"]',
    'meta[http-equiv="X-Robots-Tag"]',
    'meta[content*="noindex"]',
    'meta[content*="nofollow"]',
  ].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => el.remove());
  });

  // Now write a clean robots tag — index, follow
  const robotsMeta = document.createElement("meta");
  robotsMeta.setAttribute("name", "robots");
  robotsMeta.setAttribute("content", metadata.robots);
  head.appendChild(robotsMeta);

  const setOrCreate = (selector: string, attrKey: string, attrVal: string, contentVal: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta") as HTMLMetaElement;
      el.setAttribute(attrKey, attrVal);
      head.appendChild(el);
    }
    el.setAttribute("content", contentVal);
  };

  // Core meta
  setOrCreate('meta[name="description"]', "name", "description", metadata.description);
  setOrCreate('meta[name="keywords"]', "name", "keywords", metadata.keywords);
  setOrCreate('meta[name="author"]', "name", "author", metadata.author);

  // Geo meta tags — local SEO signal for geo-targeted search
  setOrCreate('meta[name="geo.region"]', "name", "geo.region", metadata.geo.region);
  setOrCreate('meta[name="geo.placename"]', "name", "geo.placename", metadata.geo.placename);
  setOrCreate('meta[name="geo.position"]', "name", "geo.position", `${metadata.geo.latitude};${metadata.geo.longitude}`);
  setOrCreate('meta[name="ICBM"]', "name", "ICBM", metadata.geo.icbm);

  // Mobile
  setOrCreate('meta[name="format-detection"]', "name", "format-detection", "telephone=yes");
  setOrCreate('meta[name="mobile-web-app-capable"]', "name", "mobile-web-app-capable", "yes");
  setOrCreate('meta[name="apple-mobile-web-app-status-bar-style"]', "name", "apple-mobile-web-app-status-bar-style", "black-translucent");

  // Language / locale
  document.documentElement.setAttribute("lang", "en");
  setOrCreate('meta[name="language"]', "name", "language", "English");
  setOrCreate('meta[http-equiv="content-language"]', "http-equiv", "content-language", "en-us");

  // Canonical
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute("href", metadata.canonical);

  // Viewport
  const metaViewport = document.querySelector('meta[name="viewport"]');
  if (metaViewport) {
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover");
  }

  // Open Graph
  [
    { property: "og:title", content: metadata.openGraph.title },
    { property: "og:description", content: metadata.openGraph.description },
    { property: "og:type", content: metadata.openGraph.type },
    { property: "og:site_name", content: metadata.openGraph.siteName },
    { property: "og:locale", content: metadata.openGraph.locale },
    { property: "og:url", content: metadata.canonical },
  ].forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });

  // Twitter
  [
    { name: "twitter:card", content: metadata.twitter.card },
    { name: "twitter:title", content: metadata.twitter.title },
    { name: "twitter:description", content: metadata.twitter.description },
  ].forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  });
}

// Per-page title/description/canonical updater — call in each page's useEffect
export function setPageMeta(title: string, description: string, path = "") {
  const fullTitle = title.includes("WaveNexus") ? title : `${title} | WaveNexus Digital Invest`;
  document.title = fullTitle;

  const canonical = `${BASE_URL}${path}`;

  const setTag = (selector: string, attr: string, val: string, attrKey?: string, attrVal?: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (attrKey && attrVal) el.setAttribute(attrKey, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, val);
  };

  setTag('meta[name="description"]', "content", description);

  // OG
  setTag('meta[property="og:title"]', "content", fullTitle, "property", "og:title");
  setTag('meta[property="og:description"]', "content", description, "property", "og:description");
  setTag('meta[property="og:url"]', "content", canonical, "property", "og:url");

  // Twitter
  setTag('meta[name="twitter:title"]', "content", fullTitle, "name", "twitter:title");
  setTag('meta[name="twitter:description"]', "content", description, "name", "twitter:description");

  // Canonical
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", canonical);
}
