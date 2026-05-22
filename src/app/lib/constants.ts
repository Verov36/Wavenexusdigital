import {
  Globe,
  Search,
  Palette,
  Megaphone,
} from "lucide-react";

export const COMPANY_INFO = {
  name: "WaveNexus Digital Invest",
  tagline: "Where Digital Meets Momentum",
  phone: "(910) 915-2221",
  email: "chris.repstein@wavenexusdigitalinvest.com",
  location: "Hampton Roads, Virginia",
  calendarLink: "https://calendar.app.google/95MNpjJrbGjj6qco6",
};

export const services = [
  {
    icon: Globe,
    title: "Website Design",
    text: "Modern, mobile-first websites built to convert visitors into leads and customers.",
  },
  {
    icon: Search,
    title: "SEO & AI Optimization",
    text: "Strong on-page structure, local SEO foundations, and AI-optimized content for better visibility across all search engines including Google, Bing, and AI search tools.",
  },
  {
    icon: Palette,
    title: "Branding & Logos",
    text: "Clean visual identity systems that make your business look premium and trustworthy.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth",
    text: "Marketing-focused design and messaging that help support long-term business growth.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "$599",
    subtitle: "Perfect for new or local businesses",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "SEO & AI optimization",
      "Contact form integration",
      "1 revision round",
    ],
    cta: "Start Small",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    subtitle: "Best for businesses ready to scale",
    features: [
      "5–7 custom pages",
      "Advanced design layout",
      "SEO & AI optimization",
      "Lead capture forms",
      "Analytics setup",
      "3 revision rounds",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Premium",
    price: "$2,499+",
    subtitle: "Built for custom brand presence",
    features: [
      "Fully custom website",
      "Branding + logo package",
      "Advanced SEO & AI optimization",
      "Strategy consultation",
      "Priority support",
      "Expanded scope options",
    ],
    cta: "Go Premium",
    featured: false,
  },
];

export const retainers = [
  {
    title: "Website Maintenance",
    price: "$99/mo",
    text: "Edits, updates, backups, and peace of mind."
  },
  {
    title: "SEO & AI Management",
    price: "$250–$650/mo",
    text: "Ongoing optimization to improve rankings and visibility across all search engines and AI platforms."
  },
  {
    title: "Social Media Management",
    price: "$400–$1,200/mo",
    text: "Content support, posting strategy, and audience growth."
  },
];

export const process = [
  {
    title: "Discover",
    text: "We learn your business, your goals, and what your website needs to accomplish.",
  },
  {
    title: "Design",
    text: "We craft a clean visual direction that builds trust and reflects your brand.",
  },
  {
    title: "Build",
    text: "We create a fast, mobile-friendly site with strong structure and clear calls to action.",
  },
  {
    title: "Launch",
    text: "We optimize, test, and launch with a focus on lead generation and usability.",
  },
];

export const portfolio = [
  {
    name: "Red Vine Mechanical HVAC",
    category: "Local Service Business",
    text: "Lead-driven redesign with service pages, quote form, and local SEO structure.",
    url: "https://redvine-mechanical.figma.site",
  },
  {
    name: "Dizon Digital Media",
    category: "Social Media Management",
    text: "Strategic social media presence with content planning, audience engagement tools, and brand storytelling.",
    url: "https://dizondigitalmarketing.com/",
  },
  {
    name: "Blue Anchor Consulting",
    category: "Professional Services",
    text: "Authority-focused brand presentation with a premium booking experience.",
    url: null,
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "Most starter and growth sites are completed in 1–3 weeks depending on content and revisions.",
  },
  {
    q: "Do you help with content?",
    a: "Yes. We can help structure and polish your website copy so it feels professional and conversion-focused.",
  },
  {
    q: "Can I request updates after launch?",
    a: "Absolutely. We offer monthly support plans for edits, maintenance, and performance improvements.",
  },
  {
    q: "Do you work with local businesses?",
    a: "Yes. WaveNexus Digital Invest is built for local and service-based businesses that need a stronger online presence.",
  },
];
