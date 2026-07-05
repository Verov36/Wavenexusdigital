import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Strips noindex from the generated HTML during build — runs inside Vite,
// cannot be bypassed by Vercel project settings or skipped build steps.
const removeNoindex: Plugin = {
  name: 'remove-noindex',
  transformIndexHtml(html) {
    // Remove the exact tag found in production: <meta name="robots" content="noindex, nofollow" />
    html = html.replace(
      /<meta[^>]*name=["']robots["'][^>]*>/gi,
      ''
    );
    html = html.replace(
      /<meta[^>]*content=["'][^"']*noindex[^"']*["'][^>]*>/gi,
      ''
    );
    // Inject clean robots tag + Google Analytics before </head>
    html = html.replace(
      '</head>',
      `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y6X0LLS4FD"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y6X0LLS4FD');</script>
</head>`
    );
    return html;
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
