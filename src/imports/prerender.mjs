import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "..", "dist", "index.html");

if (!existsSync(indexPath)) {
  console.log("⚠  dist/index.html not found — skipping robots fix");
  process.exit(0);
}

let html = readFileSync(indexPath, "utf8");

const before = html;

// Remove every noindex/nofollow meta tag variant the platform might inject
html = html.replace(
  /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["'][^>]*\/?>/gi,
  ""
);
html = html.replace(
  /<meta[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["'][^>]*\/?>/gi,
  ""
);
html = html.replace(
  /<meta[^>]*http-equiv=["']X-Robots-Tag["'][^>]*content=["'][^"']*noindex[^"']*["'][^>]*\/?>/gi,
  ""
);
// Catch any remaining meta tag containing noindex
html = html.replace(
  /<meta[^>]*noindex[^>]*>/gi,
  ""
);

// Inject a clean index,follow tag right before </head>
const robotsTag = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">';
if (!html.includes('name="robots"')) {
  html = html.replace("</head>", `  ${robotsTag}\n</head>`);
} else {
  // Replace whatever robots tag is there with a clean one
  html = html.replace(
    /<meta[^>]*name=["']robots["'][^>]*\/?>/gi,
    robotsTag
  );
}

writeFileSync(indexPath, html, "utf8");

if (html !== before) {
  console.log("✅ Removed noindex from dist/index.html — robots tag set to index, follow");
} else {
  console.log("✅ dist/index.html — no noindex found, robots tag confirmed clean");
}
