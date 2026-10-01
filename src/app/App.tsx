import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/Toaster";

// Head tags and JSON-LD structured data are baked into each page's static HTML
// at build time (see scripts/prerender.mjs); pages update the head tags on
// client-side navigation via setPageMeta().
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}
