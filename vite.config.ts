import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import site from './src/app/lib/site.json'

const SITE_URL = site.url;
const SITE_TITLE = site.pages['/'].title;
const SITE_DESCRIPTION = site.pages['/'].description;

// Runs LAST among all Vite plugins (order: 'post') so it fires after Figma Make's
// platform plugin has finished injecting its boilerplate — then strips and replaces everything.
const removeNoindex: Plugin = {
  name: 'remove-noindex',
  transformIndexHtml: {
    order: 'post',
    handler(html) {
      // ── 1. Strip every tag the platform may have injected ──────────────────

      // All robots/noindex variants
      html = html.replace(/<meta[^>]*name=["']robots["'][^>]*\/?>/gi, '');
      html = html.replace(/<meta[^>]*content=["'][^"']*noindex[^"']*["'][^>]*\/?>/gi, '');

      // All description tags (removes the boilerplate "Create and customize…" line)
      html = html.replace(/<meta[^>]*name=["']description["'][^>]*\/?>/gi, '');

      // All OG and Twitter duplicates
      html = html.replace(/<meta[^>]*property=["']og:[^"']*["'][^>]*\/?>/gi, '');
      html = html.replace(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*\/?>/gi, '');

      // All GA/gtag scripts already injected by platform
      html = html.replace(/<script[^>]*googletagmanager[^>]*><\/script>/gi, '');
      html = html.replace(/<script[^>]*gtag[^>]*>[\s\S]*?<\/script>/gi, '');

      // ── 2. Replace <title> with the real, full title ───────────────────────
      if (/<title>[^<]*<\/title>/i.test(html)) {
        html = html.replace(/<title>[^<]*<\/title>/i, `<title>${SITE_TITLE}</title>`);
      } else {
        html = html.replace(/<head[^>]*>/i, (m) => `${m}<title>${SITE_TITLE}</title>`);
      }

      // ── 3. Inject clean tags before </head> (meta/link/script only — no block elements) ──
      html = html.replace('</head>', `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="description" content="${SITE_DESCRIPTION}">
<meta name="author" content="WaveNexus Digital Invest">
<meta name="language" content="English">
<meta http-equiv="content-language" content="en-us">
<meta name="geo.region" content="US-VA">
<meta name="geo.placename" content="Virginia Beach, Virginia">
<meta name="geo.position" content="36.8529;-75.978">
<meta name="ICBM" content="36.8529, -75.978">
<link rel="canonical" href="${SITE_URL}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WaveNexus Digital Invest">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${SITE_URL}/">
<meta property="og:title" content="${SITE_TITLE}">
<meta property="og:description" content="${SITE_DESCRIPTION}">
<meta property="og:image" content="${SITE_URL}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${SITE_TITLE}">
<meta name="twitter:description" content="${SITE_DESCRIPTION}">
<meta name="twitter:image" content="${SITE_URL}/og-image.jpg">
<link rel="preconnect" href="https://www.googletagmanager.com">
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}"></script>
<script defer src="/ga.js"></script>
</head>`);

      return html;
    },
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    removeNoindex,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
