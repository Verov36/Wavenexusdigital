/**
 * csp-adapter.mjs — wraps the deployment platform's Next.js adapter (Vercel's).
 *
 * Next.js 16 hands its build output to the platform adapter named by
 * NEXT_ADAPTER_PATH from inside `next build`, so a later build step can't change
 * the pages any more. This wrapper adds the hash-based Content-Security-Policy
 * to every prerendered page (see csp-hashes.mjs) and then passes everything to
 * the real adapter unchanged. next.config.ts only uses it when NEXT_ADAPTER_PATH
 * is set; local builds don't have an adapter and use the postbuild step instead.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { addCspMeta, htmlFiles, DONE_FILE } from "./csp-hashes.mjs";

const innerPath = process.env.NEXT_ADAPTER_PATH;
const require = createRequire(import.meta.url);
const innerMod = innerPath ? await import(pathToFileURL(require.resolve(innerPath)).href) : {};
const inner = innerMod.default?.default ?? innerMod.default ?? innerMod;

/** @type {import("next").NextAdapter} */
const adapter = {
  name: inner.name ?? "csp-hashes",
  ...(inner.modifyConfig ? { modifyConfig: (config, ctx) => inner.modifyConfig(config, ctx) } : {}),
  async onBuildComplete(ctx) {
    const done = new Set();
    let count = 0;
    const process1 = (file) => {
      if (!file || !file.endsWith(".html") || done.has(file)) return null;
      done.add(file);
      const size = addCspMeta(file);
      if (size !== null) count++;
      return size;
    };
    for (const p of ctx.outputs.prerenders) {
      const size = process1(p.fallback?.filePath);
      if (size !== null && typeof p.htmlSize === "number") p.htmlSize = size;
    }
    for (const f of ctx.outputs.staticFiles) process1(f.filePath);
    // Anything else prerendered under the build directory (e.g. the 404 page)
    for (const file of htmlFiles(join(ctx.distDir, "server"))) process1(file);
    if (count === 0) throw new Error("csp-adapter: no prerendered HTML pages found to add the CSP to.");
    console.log(`csp-adapter: added a hash-based script policy to ${count} page(s).`);
    writeFileSync(join(ctx.distDir, DONE_FILE), String(count));
    if (inner.onBuildComplete) await inner.onBuildComplete(ctx);
  },
};

export default adapter;
