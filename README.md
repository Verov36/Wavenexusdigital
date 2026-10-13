# WaveNexus Digital Invest — website

The site at https://wavenexusdigitalinvest.com. Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel. Every page is static: it is built once by `npm run build` and served as plain HTML with its real content, metadata and structured data in it.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (next build, then scripts/csp-hashes.mjs)
npm start          # serve the production build
npm run typecheck
```

Node 24 (see `engines` in package.json).

## Where things live

| What | Where |
| --- | --- |
| Page titles and descriptions | `src/lib/site.json` |
| Service-area (city) pages: copy, FAQ, titles | `src/lib/areas.json`, rendered at `/web-design/[area]` |
| Nexus Field vs. competitor pages | `src/lib/comparisons.ts`, rendered at `/nexus-field/vs/[slug]` |
| Phone, email, CRM endpoint, portfolio | `src/lib/constants.ts` |
| JSON-LD structured data (incl. `SAME_AS` profile links) | `src/lib/seo/schemas.ts` |
| `<head>` tags for every page | `src/lib/seo/pages.tsx` (`pageMetadata`) and `src/app/layout.tsx` |
| sitemap.xml / robots.txt | `src/app/sitemap.ts` / `src/app/robots.ts` |
| Routes | `src/app/**/page.tsx` (thin: metadata + JSON-LD + the page component) |
| Page components | `src/views/*.tsx` |
| Header, footer and shared components | `src/components/` |
| Fonts (self-hosted via next/font) | `src/lib/fonts.ts`, files in `src/fonts/` |
| Security headers, CSP, redirects | `next.config.ts` (plus `scripts/csp-hashes.mjs`, see below) |
| Google Analytics bootstrap | `public/ga.js` |

### Adding a page

1. Add its title and description to `src/lib/site.json`.
2. Create `src/app/<path>/page.tsx` like the existing ones (`pageMetadata("/<path>")` + `<JsonLd path="/<path>" />` + the component).
3. Add it to `src/app/sitemap.ts`.

### Content-Security-Policy

Next.js boots each page with small inline scripts. The CSP header in `next.config.ts` allows inline scripts, and after the build `scripts/csp-hashes.mjs` adds a second, stricter policy to every prerendered page listing the SHA-256 hash of each inline script on it. Browsers enforce both, so only the scripts Next.js generated can run. If you add a third-party script, add its host to `script-src` in both `next.config.ts` and `EXTERNAL_SCRIPT_HOSTS` in the script.

## Checking SEO before shipping

```bash
npm run build && npm start &
node scripts/seo-parity.mjs --baseline https://wavenexusdigitalinvest.com --candidate http://localhost:3000 --host-check
```

Compares status, title, description, canonical, robots, Open Graph/Twitter tags, H1 and JSON-LD of every sitemap URL, plus sitemap.xml, robots.txt, the 404 page and the www → apex redirect. See the comment at the top of the script.
