import { COMPANY_INFO } from "../constants";

// JSON-LD Structured Data for better SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": COMPANY_INFO.name,
  "description": "Professional web design, SEO, and digital marketing services for local businesses",
  "url": typeof window !== "undefined" ? window.location.origin : "",
  "telephone": COMPANY_INFO.phone,
  "email": COMPANY_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": COMPANY_INFO.location
  },
  "sameAs": [],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Web Design",
    "SEO Services",
    "Digital Marketing",
    "Branding",
    "Website Development"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": COMPANY_INFO.name,
  "url": typeof window !== "undefined" ? window.location.origin : "",
  "description": "Modern websites and digital growth systems optimized for SEO and AI search engines",
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_INFO.name
  }
};

export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Design",
    "provider": {
      "@type": "ProfessionalService",
      "name": COMPANY_INFO.name
    },
    "description": "Modern, mobile-first websites built to convert visitors into leads and customers",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO & AI Optimization",
    "provider": {
      "@type": "ProfessionalService",
      "name": COMPANY_INFO.name
    },
    "description": "Strong on-page structure, local SEO foundations, and AI-optimized content for better visibility",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Branding & Logo Design",
    "provider": {
      "@type": "ProfessionalService",
      "name": COMPANY_INFO.name
    },
    "description": "Clean visual identity systems that make your business look premium and trustworthy",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  }
];

export const offerSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Starter Website Package",
    "description": "1-3 page website with mobile responsive design and SEO optimization",
    "price": "599",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Growth Website Package",
    "description": "5-7 custom pages with advanced design and SEO optimization",
    "price": "1299",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Premium Website Package",
    "description": "Fully custom website with branding, advanced SEO, and priority support",
    "price": "2499",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    }
  }
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a website take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most starter and growth sites are completed in 1–3 weeks depending on content and revisions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can help structure and polish your website copy so it feels professional and conversion-focused."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request updates after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer monthly support plans for edits, maintenance, and performance improvements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with local businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. WaveNexus Digital Invest is built for local and service-based businesses that need a stronger online presence."
      }
    }
  ]
};

// Function to inject all structured data into the page
export function injectStructuredData() {
  // Organization schema
  const orgScript = document.createElement("script");
  orgScript.type = "application/ld+json";
  orgScript.text = JSON.stringify(organizationSchema);
  document.head.appendChild(orgScript);

  // Website schema
  const websiteScript = document.createElement("script");
  websiteScript.type = "application/ld+json";
  websiteScript.text = JSON.stringify(websiteSchema);
  document.head.appendChild(websiteScript);

  // FAQ schema
  const faqScript = document.createElement("script");
  faqScript.type = "application/ld+json";
  faqScript.text = JSON.stringify(faqSchema);
  document.head.appendChild(faqScript);

  // Service schemas
  serviceSchemas.forEach((schema) => {
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.text = JSON.stringify(schema);
    document.head.appendChild(serviceScript);
  });

  // Offer schemas
  offerSchemas.forEach((schema) => {
    const offerScript = document.createElement("script");
    offerScript.type = "application/ld+json";
    offerScript.text = JSON.stringify(schema);
    document.head.appendChild(offerScript);
  });
}
