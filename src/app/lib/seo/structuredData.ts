import { COMPANY_INFO } from "../constants";

const BASE_URL = typeof window !== "undefined" ? window.location.origin : "https://wavenexusdigitalinvest.com";
const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

// ─── @graph — connected entity nodes (2026 best practice) ───────────────────
export const graphSchema = {
  "@context": "https://schema.org",
  "@graph": [

    // ── 1. Organization / LocalBusiness / ProfessionalService ──────────────
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": ORG_ID,
      "name": COMPANY_INFO.name,
      "legalName": "WaveNexus Digital Invest",
      "description": "Veteran-owned local web design company, custom app developer, and digital marketing team in Hampton Roads, VA. We are the local website designers, app developers, and SEO company near you — serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, and Norfolk. Services include custom website design, custom web and mobile app development, local SEO, AI SEO, branding, social media management, and Nexus Field field service management software.",
      "url": BASE_URL,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hampton Roads",
        "addressRegion": "VA",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.7282,
        "longitude": -76.5836,
      },
      "slogan": "Local website designers, app developers, and digital marketing near you in Hampton Roads, VA",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Invoice",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "sameAs": [],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Design, Custom Apps, Digital Marketing & Field Service Software",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom App & Business Software Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local SEO Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI SEO & Generative Engine Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Logo Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nexus Field Field Service Management Software" } },
        ],
      },
      "knowsAbout": [
        "Website Design",
        "Web Development",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Business Process Automation",
        "Local SEO",
        "AI SEO",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "Google Business Profile Optimization",
        "Branding and Logo Design",
        "Social Media Marketing",
        "Digital Marketing for Small Businesses",
        "Field Service Management Software",
        "Parts Inventory Management Software",
        "Hampton Roads Virginia Business",
        "Veteran Owned Business",
      ],
      "areaServed": [
        { "@type": "City", "name": "Suffolk", "addressRegion": "VA" },
        { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
        { "@type": "City", "name": "Chesapeake", "addressRegion": "VA" },
        { "@type": "City", "name": "Newport News", "addressRegion": "VA" },
        { "@type": "City", "name": "Hampton", "addressRegion": "VA" },
        { "@type": "City", "name": "Norfolk", "addressRegion": "VA" },
        { "@type": "City", "name": "Portsmouth", "addressRegion": "VA" },
        { "@type": "City", "name": "Williamsburg", "addressRegion": "VA" },
        { "@type": "City", "name": "York County", "addressRegion": "VA" },
        { "@type": "City", "name": "Isle of Wight County", "addressRegion": "VA" },
      ],
      "serviceType": [
        "Web Developer Near Me",
        "Best Web Developer Near Me",
        "Website Designer Near Me",
        "Local Website Designer Near Me",
        "App Developer Near Me",
        "Mobile App Developer Near Me",
        "Custom Software Development Near Me",
        "Custom Business App Development",
        "Web App Developer Hampton Roads",
        "Local Marketing Team Near Me",
        "Digital Marketing Near Me",
        "Web Design Near Me",
        "SEO Company Near Me",
        "Local SEO Company Near Me",
        "Website Design Company Near Me",
        "Small Business Web Design",
        "Custom Website Design",
        "AI SEO Optimization",
        "Google Business Profile Optimization",
        "Branding Agency Near Me",
        "Logo Design Near Me",
        "Social Media Management",
        "Field Service Management Software",
        "Veteran Owned Marketing Agency",
      ],
    },

    // ── 2. WebSite ──────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      "name": COMPANY_INFO.name,
      "url": BASE_URL,
      "description": "Veteran-owned local web designer, custom app developer, and digital marketing team near you in Hampton Roads VA. Custom websites, custom web and mobile apps, local SEO, AI SEO, branding, and Nexus Field field service software.",
      "publisher": { "@id": ORG_ID },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // ── 3. Nexus Field SoftwareApplication ──────────────────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/nexus-field#software`,
      "name": "Nexus Field",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Field Service Management Software",
      "operatingSystem": "Web, iOS, Android",
      "description": "Nexus Field is a field service management app built for HVAC, plumbing, electrical, landscaping, and contracting companies. Features include free parts inventory tracking across warehouses and trucks, technician assignment, job tracking, built-in photo database, and survey and inspection tools. Configured around how your team actually works.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Parts inventory management included free with every plan",
      },
      "provider": { "@id": ORG_ID },
      "creator": { "@id": ORG_ID },
      "url": `${BASE_URL}/nexus-field`,
      "keywords": "field service management software, field service app, HVAC job tracking, parts inventory field service, field service software for plumbers, technician management app, Nexus Field",
      "featureList": [
        "Free parts inventory tracking — warehouse and per-truck",
        "Technician assignment and parts-per-job logging",
        "Job tracking with notes and full activity timeline",
        "Built-in photo database per job",
        "Survey and inspection tools",
        "Real-time customization to your workflow",
        "Customer-first record architecture",
      ],
    },

    // ── 4. Nexus Inventory SoftwareApplication ──────────────────────────────
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/custom-apps#nexus-inventory`,
      "name": "Nexus Inventory",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Parts Inventory Management Software",
      "operatingSystem": "Web (mobile and tablet first)",
      "description": "Nexus Inventory is a standalone parts inventory system for field service companies, built mobile-first for the warehouse and the truck. Parts are scanned in and out with a phone camera or handheld barcode scanner, labels print directly to a Zebra printer, every truck carries its own stock caps, checkouts are tagged to a job or to restock, and over-cap checkouts trigger a justification that a manager reviews. Six user roles, scheduled audit reports, and CSV import and export.",
      "provider": { "@id": ORG_ID },
      "creator": { "@id": ORG_ID },
      "url": `${BASE_URL}/custom-apps`,
      "keywords": "parts inventory software, truck inventory app, warehouse receiving app, barcode inventory field service, Zebra label printing, Nexus Inventory",
      "featureList": [
        "Barcode and QR scanning with a phone camera or handheld scanner",
        "Warehouse receiving with Zebra label printing",
        "Per-truck stock caps and technician assignment",
        "Job-use vs. restock checkout with work order tracking",
        "Overage justification workflow with manager approval",
        "Six user roles from warehouse employee to super admin",
        "Scheduled inventory audit reports with CSV export",
        "Mass parts import from CSV",
      ],
    },
  ],
};

// ── FAQPage — kept for AI citation value even though Google deprecated rich result display (May 2026)
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you a local web designer near me in Hampton Roads VA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WaveNexus Digital Invest is a veteran-owned local website design and digital marketing team based in Hampton Roads, VA. We serve Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, and surrounding areas. We are the local website designers near you in Southeast Virginia.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best web developer near me in Hampton Roads Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WaveNexus Digital Invest is a top-rated local web developer in Hampton Roads, VA. We build custom websites for local businesses, run local SEO and AI SEO campaigns, and provide full digital marketing services. As a veteran-owned small business, we work with a focused client list so every project gets real attention.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you build custom apps and business software for local businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WaveNexus Digital Invest is a custom app developer in Hampton Roads, VA. We build custom web apps, internal tools, and iOS and Android mobile apps around how a business actually runs — job tracking, inventory, scheduling, dispatch, and customer portals. We built our own software too: Nexus Field, a field service management platform, and Nexus Inventory, a barcode-driven parts inventory system for warehouses and trucks. Every project starts with a free scoping call and a written scope you approve before we build.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer local SEO and digital marketing near me in Hampton Roads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WaveNexus Digital Invest is a local marketing team serving all of Hampton Roads VA — including Suffolk, Virginia Beach, Chesapeake, and Newport News. We offer local SEO, AI SEO (GEO/AEO), Google Business Profile optimization, branding, and social media management for local businesses.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Nexus Field?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexus Field is a field service management app built for HVAC, plumbing, electrical, landscaping, and contracting companies. It includes free parts inventory tracking across your warehouse and trucks, job tracking, a built-in photo database, technician management, and survey tools. It is configured around how your team actually works, not a generic template.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most websites we build are completed in 2 to 3 weeks depending on scope and how quickly content is provided. We give you a clear timeline before we start and keep you updated throughout.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you help small local businesses with web design and SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Most of our clients are small local service businesses in Hampton Roads VA. We keep our client list focused so each business gets real attention — not a cookie-cutter package. We are the local web design and SEO team near you.",
      },
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in Hampton Roads Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses throughout Hampton Roads including Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, Williamsburg, York County, and Isle of Wight County. We are a veteran-owned local digital marketing team based in Southeast Virginia.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you optimize websites for AI search tools like ChatGPT and Perplexity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Beyond traditional Google SEO, we optimize websites for AI search tools including ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. This includes structured data, answer-ready content formatting, and generative engine optimization (GEO) so your business gets cited when people ask AI tools for local recommendations.",
      },
    },
    {
      "@type": "Question",
      "name": "Are you veteran owned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WaveNexus Digital Invest is a US Marine Corps veteran-owned business based in Hampton Roads, Virginia. We are proud to serve local businesses throughout Suffolk, Virginia Beach, Chesapeake, Newport News, and the surrounding communities.",
      },
    },
  ],
};

// ── Service schemas — individual pages ─────────────────────────────────────
export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services#web-design`,
    "serviceType": "Website Design & Development",
    "name": "Local Website Designer Near Me — Hampton Roads VA",
    "alternateName": ["Web Developer Near Me Hampton Roads", "Best Web Developer Near Me Virginia"],
    "provider": { "@id": ORG_ID },
    "description": "Looking for a local website designer near you in Hampton Roads VA? WaveNexus Digital Invest builds custom, mobile-first websites for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News. SEO-optimized from day one, fast delivery, and built to bring in real inquiries.",
    "areaServed": [
      { "@type": "City", "name": "Suffolk", "addressRegion": "VA" },
      { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
      { "@type": "City", "name": "Chesapeake", "addressRegion": "VA" },
      { "@type": "City", "name": "Newport News", "addressRegion": "VA" },
      { "@type": "City", "name": "Hampton", "addressRegion": "VA" },
      { "@type": "City", "name": "Norfolk", "addressRegion": "VA" },
    ],
    "keywords": "web developer near me, best web developer near me, local website designer near me, website design near me, web design Hampton Roads VA, website designer Virginia Beach, web developer Suffolk VA, website design Chesapeake VA",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/custom-apps#custom-apps`,
    "serviceType": "Custom App & Business Software Development",
    "name": "Custom App Developer Near Me — Hampton Roads VA",
    "alternateName": ["App Developer Near Me Hampton Roads", "Mobile App Developer Near Me Virginia", "Custom Software Development Hampton Roads VA"],
    "provider": { "@id": ORG_ID },
    "url": `${BASE_URL}/custom-apps`,
    "description": "Custom app developer near you in Hampton Roads VA. WaveNexus Digital Invest builds custom web apps, internal tools, and iOS and Android mobile apps for local businesses — job tracking, inventory, scheduling, dispatch, and customer portals — designed around how the business actually runs. Free scoping call, a written scope you approve, built in stages, then training and ongoing support. Makers of Nexus Field and Nexus Inventory.",
    "areaServed": [
      { "@type": "City", "name": "Suffolk", "addressRegion": "VA" },
      { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
      { "@type": "City", "name": "Chesapeake", "addressRegion": "VA" },
      { "@type": "City", "name": "Newport News", "addressRegion": "VA" },
      { "@type": "City", "name": "Hampton", "addressRegion": "VA" },
      { "@type": "City", "name": "Norfolk", "addressRegion": "VA" },
    ],
    "keywords": "app developer near me, mobile app developer near me, custom software development near me, custom business app development, web app developer Hampton Roads, custom app development Virginia Beach, business software developer Suffolk VA, iOS Android app developer Hampton Roads",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services#seo`,
    "serviceType": "Local SEO & AI Search Optimization",
    "name": "Local SEO Company Near Me — Hampton Roads VA",
    "alternateName": ["SEO Company Near Me Hampton Roads", "Digital Marketing Near Me Virginia Beach"],
    "provider": { "@id": ORG_ID },
    "description": "Local SEO company near you in Hampton Roads VA. We help local businesses rank higher on Google, appear in Google Maps, and get cited by AI tools like ChatGPT and Perplexity. Services include local SEO, AI SEO (GEO/AEO), Google Business Profile optimization, keyword research, and monthly reporting for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses.",
    "areaServed": [
      { "@type": "City", "name": "Suffolk", "addressRegion": "VA" },
      { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
      { "@type": "City", "name": "Chesapeake", "addressRegion": "VA" },
      { "@type": "City", "name": "Newport News", "addressRegion": "VA" },
    ],
    "keywords": "SEO company near me, local SEO company near me, digital marketing near me, local marketing team near me, AI SEO Hampton Roads, GEO optimization Virginia, Google Business Profile optimization Hampton Roads",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services#branding`,
    "serviceType": "Branding & Logo Design",
    "name": "Logo Designer & Branding Near Me — Hampton Roads VA",
    "provider": { "@id": ORG_ID },
    "description": "Professional logo design and branding for local businesses in Hampton Roads VA. Custom logos, brand identity systems, color palettes, and social media kits for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.",
    "areaServed": [
      { "@type": "City", "name": "Suffolk", "addressRegion": "VA" },
      { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
      { "@type": "City", "name": "Chesapeake", "addressRegion": "VA" },
    ],
    "keywords": "logo design near me, branding company near me, logo designer Hampton Roads, brand identity Virginia Beach, graphic designer near me Hampton Roads",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services#social`,
    "serviceType": "Social Media Management",
    "name": "Social Media Management Near Me — Hampton Roads VA",
    "provider": { "@id": ORG_ID },
    "description": "Social media management for local businesses in Hampton Roads VA. Content strategy, branded post creation, audience growth, and platform management for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses.",
    "areaServed": [
      { "@type": "City", "name": "Virginia Beach", "addressRegion": "VA" },
      { "@type": "City", "name": "Hampton Roads", "addressRegion": "VA" },
    ],
    "keywords": "social media management near me, social media marketing Hampton Roads, content marketing Virginia Beach",
  },
];

export function injectStructuredData() {
  const schemas = [
    graphSchema,
    faqSchema,
    ...serviceSchemas,
  ];

  schemas.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}
