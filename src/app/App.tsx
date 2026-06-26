import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { setMetadata } from "./metadata";
import { injectStructuredData } from "./lib/seo/structuredData";

export default function App() {
  useEffect(() => {
    setMetadata();
    injectStructuredData();
    document.body.setAttribute("itemscope", "");
    document.body.setAttribute("itemtype", "https://schema.org/WebPage");
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}
