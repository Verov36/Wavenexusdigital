import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const SITE_URL = 'https://wavenexusdigitalinvest.com';
const SITE_TITLE = 'Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital Invest';
const SITE_DESCRIPTION = 'WaveNexus Digital Invest is a veteran-owned local web designer and digital marketing team near you in Hampton Roads, VA. We build websites that bring in leads, run local SEO, and offer AI search optimization for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses. Also makers of Nexus Field field service software.';

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
<meta name="geo.placename" content="Hampton Roads, Virginia">
<meta name="geo.position" content="36.7282;-76.5836">
<meta name="ICBM" content="36.7282, -76.5836">
<link rel="canonical" href="${SITE_URL}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WaveNexus Digital Invest">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${SITE_URL}/">
<meta property="og:title" content="Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital">
<meta property="og:description" content="Veteran-owned local web design and digital marketing team in Hampton Roads, VA. Custom websites, local SEO, AI SEO optimization, branding — and makers of Nexus Field field service software.">
<meta property="og:image" content="${SITE_URL}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Local Web Designer & Digital Marketing | Hampton Roads VA | WaveNexus Digital">
<meta name="twitter:description" content="Veteran-owned web design, local SEO, AI SEO, and digital marketing serving Hampton Roads VA. Also makers of Nexus Field field service management software.">
<meta name="twitter:image" content="${SITE_URL}/og-image.jpg">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y6X0LLS4FD"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y6X0LLS4FD');</script>
</head>`);

      // ── 4. Inject noscript fallback before </body> (block elements valid here) ──
      html = html.replace('</body>', `<noscript><div style="font-family:sans-serif;max-width:800px;margin:0 auto;padding:40px 20px"><h1>WaveNexus Digital Invest — Web Designer &amp; Digital Marketing Hampton Roads VA</h1><p>Veteran-owned local web design company and digital marketing team serving Hampton Roads, Virginia. We build custom websites, run local SEO, AI SEO optimization, branding, and social media management for small businesses in Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, and Norfolk.</p><p>We are also the makers of Nexus Field — field service management software for HVAC, plumbing, electrical, landscaping, and contracting companies.</p><h2>Services</h2><ul><li>Website Design &amp; Development</li><li>Local SEO &amp; AI Search Optimization</li><li>Branding &amp; Logo Design</li><li>Social Media Management</li><li>Nexus Field Field Service Software</li></ul><h2>Service Area</h2><p>Hampton Roads VA, Suffolk VA, Virginia Beach VA, Chesapeake VA, Newport News VA, Hampton VA, Norfolk VA, Portsmouth VA</p><p>Phone: (757) 601-8058 | Email: chris.repstein@wavenexusdigitalinvest.com</p><nav><a href="/">Home</a> | <a href="/services">Services</a> | <a href="/nexus-field">Nexus Field</a> | <a href="/portfolio">Portfolio</a> | <a href="/about">About</a> | <a href="/contact">Contact</a></nav></div></noscript>
</body>`);

      return html;
    },
  },
};


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
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
