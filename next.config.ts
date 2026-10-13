import type { NextConfig } from "next";

const SITE = "https://wavenexusdigitalinvest.com";

/**
 * Content-Security-Policy sent as an HTTP header on every response.
 *
 * script-src: Next.js boots every page with small inline scripts (the React
 * Server Components payload), so a header that forbids inline scripts outright
 * breaks the site. Nonces would need every page rendered per request, and these
 * pages are static. So the header allows inline scripts, and each prerendered
 * page also carries a stricter <meta http-equiv="Content-Security-Policy"> that
 * lists the SHA-256 hash of every inline script on that page (added after
 * `next build` by scripts/csp-hashes.mjs). A browser enforces both policies, so
 * the only inline scripts that can run are the exact ones Next.js generated.
 *
 * Fonts are self-hosted through next/font, so Google Fonts is no longer allowed.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://*.google-analytics.com https://*.googletagmanager.com",
  "connect-src 'self' https://wavenexus-crm-production.up.railway.app https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Content-Security-Policy", value: CSP },
];

// Every other hostname this project answers on sends visitors to the canonical domain.
const REDIRECT_HOSTS = [
  "www.wavenexusdigitalinvest.com",
  "wavenexusdigital.vercel.app",
  "wavenexusdigital-verov36s-projects.vercel.app",
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return REDIRECT_HOSTS.flatMap((value) => [
      // "/" on its own, then every deeper path
      { source: "/", has: [{ type: "host" as const, value }], destination: `${SITE}/`, permanent: true },
      { source: "/:path+", has: [{ type: "host" as const, value }], destination: `${SITE}/:path+`, permanent: true },
    ]);
  },
};

export default nextConfig;
