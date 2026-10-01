/**
 * schemas.mjs — JSON-LD structured data, per route.
 *
 * Used by scripts/prerender.mjs at build time, so every page ships its schema in
 * the static HTML (crawlers that don't run JavaScript see it too). Each page gets
 * only the schema that describes what is actually on that page — Google treats
 * markup for content that isn't visible (e.g. a site-wide FAQPage) as spam.
 */

const CITIES = [
  "Virginia Beach", "Chesapeake", "Norfolk", "Suffolk", "Portsmouth", "Hampton", "Newport News",
  "Williamsburg", "York County", "Isle of Wight County",
];
const areaServed = (names = CITIES) =>
  names.map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Virginia" } }));

export function schemasFor(path, site) {
  const BASE = site.url;
  const ORG_ID = `${BASE}/#organization`;
  const WEBSITE_ID = `${BASE}/#website`;
  const url = path === "/" ? `${BASE}/` : `${BASE}${path}`;
  const page = site.pages[path] || {};

  const organization = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    description:
      "Veteran-owned web design company, custom app developer, and digital marketing team in Hampton Roads, VA. Custom websites, custom web and mobile apps, local SEO, AI SEO, branding, social media management, and Nexus Field field service management software.",
    url: `${BASE}/`,
    telephone: site.phoneE164,
    email: site.email,
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png`, width: 512, height: 512 },
    image: `${BASE}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Virginia Beach",
      addressRegion: "VA",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 36.8529, longitude: -75.978 },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: areaServed(),
    knowsAbout: [
      "Website Design", "Web Development", "Custom Software Development", "Mobile App Development",
      "Local SEO", "AI Search Optimization", "Branding and Logo Design", "Social Media Marketing",
      "Field Service Management Software", "Parts Inventory Management Software",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: `${BASE}/`,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };

  const webPage = {
    "@type": path.startsWith("/blog/") ? "WebPage" : path === "/about" ? "AboutPage" : path === "/contact" ? "ContactPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };

  const graph = [organization, website, webPage];

  // Breadcrumbs on every page but the homepage
  if (path !== "/") {
    const parts = path.split("/").filter(Boolean);
    const items = [{ name: "Home", item: `${BASE}/` }];
    let acc = "";
    for (const part of parts) {
      acc += `/${part}`;
      if (part === "vs") continue; // /nexus-field/vs is not a page
      const p = site.pages[acc];
      const name = p ? (p.headline || p.title.split(/ [|—] /)[0]) : part.replace(/-/g, " ");
      items.push({ name, item: `${BASE}${acc}` });
    }
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
    });
    webPage.breadcrumb = { "@id": `${url}#breadcrumb` };
  }

  const nexusField = {
    "@type": "SoftwareApplication",
    "@id": `${BASE}/nexus-field#software`,
    name: "Nexus Field",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Field Service Management Software",
    operatingSystem: "Web, iOS, Android",
    description:
      "Field service management software for HVAC, plumbing, electrical, landscaping, and contracting companies: parts inventory across warehouses and trucks, job tracking, photo database, technician management, and survey and inspection tools. No contract, minimal setup fee, price held for two years.",
    url: `${BASE}/nexus-field`,
    offers: {
      "@type": "Offer",
      price: "75",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "75",
        priceCurrency: "USD",
        unitText: "per technician per month",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
      description: "Per technician per month. Office and dispatch users free, parts inventory included, no contract.",
    },
    provider: { "@id": ORG_ID },
  };

  const nexusInventory = {
    "@type": "SoftwareApplication",
    "@id": `${BASE}/custom-apps#nexus-inventory`,
    name: "Nexus Inventory",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Parts Inventory Management Software",
    operatingSystem: "Web (mobile and tablet first)",
    description:
      "Standalone parts inventory system for field service companies: barcode scanning with a phone camera or handheld scanner, Zebra label printing, per-truck stock caps, job-tagged checkouts, manager-approved overage justifications, six user roles, scheduled audit reports, and CSV import and export.",
    url: `${BASE}/custom-apps`,
    provider: { "@id": ORG_ID },
  };

  const service = (id, name, serviceType, description, pagePath) => ({
    "@type": "Service",
    "@id": `${BASE}${pagePath}#${id}`,
    name,
    serviceType,
    description,
    provider: { "@id": ORG_ID },
    areaServed: areaServed(CITIES.slice(0, 6)),
    url: `${BASE}${pagePath}`,
  });

  if (path === "/nexus-field" || path.startsWith("/nexus-field/vs/")) graph.push(nexusField);

  if (path === "/custom-apps") {
    graph.push(
      service("custom-apps", "Custom App Development", "Custom App & Business Software Development",
        "Custom web apps, internal tools, and iOS and Android mobile apps for local businesses — job tracking, inventory, scheduling, dispatch, and customer portals. Free scoping call, written scope, built in stages, training, and ongoing support.",
        "/custom-apps"),
      nexusInventory,
    );
  }

  if (path === "/services") {
    graph.push(
      service("web-design", "Website Design & Development", "Website Design & Development",
        "Custom, mobile-first websites for local businesses, built with local SEO from the start and designed to turn visitors into inquiries.", "/services"),
      service("seo", "Local SEO & AI Search Optimization", "Search Engine Optimization",
        "Local SEO, Google Business Profile optimization, and AI search optimization so businesses rank on Google and get cited by tools like ChatGPT and Perplexity.", "/services"),
      service("branding", "Branding & Logo Design", "Branding & Logo Design",
        "Logos and brand identity systems that make a local business look established across its website, social media, and print.", "/services"),
      service("social", "Social Media Management", "Social Media Management",
        "Consistent posting, branded content, and audience growth for local businesses.", "/services"),
    );
  }

  if (path.startsWith("/blog/") && page.headline) {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: page.headline,
      description: page.description,
      image: page.image,
      datePublished: page.datePublished,
      dateModified: page.dateModified || page.datePublished,
      author: { "@type": "Organization", name: site.name, url: `${BASE}/` },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      inLanguage: "en-US",
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
