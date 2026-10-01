import type { ComponentType } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Every page except Home and NotFound is split into its own chunk and loaded on
// first visit, so the homepage doesn't download the code for all thirteen pages.
const page = (load: () => Promise<{ default: ComponentType }>) => () =>
  load().then((m) => ({ Component: m.default }));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", lazy: page(() => import("./pages/About")) },
      { path: "nexus-field", lazy: page(() => import("./pages/NexusField")) },
      { path: "nexus-field/vs/:slug", lazy: page(() => import("./pages/Compare")) },
      { path: "custom-apps", lazy: page(() => import("./pages/CustomApps")) },
      { path: "services", lazy: page(() => import("./pages/Services")) },
      { path: "portfolio", lazy: page(() => import("./pages/Portfolio")) },
      { path: "blog", lazy: page(() => import("./pages/Blog")) },
      { path: "blog/field-service-software-vs-spreadsheets", lazy: page(() => import("./pages/BlogPostSpreadsheets")) },
      { path: "blog/parts-walking-off-trucks", lazy: page(() => import("./pages/BlogPostPartsTracking")) },
      { path: "contact", lazy: page(() => import("./pages/Contact")) },
      { path: "audit", lazy: page(() => import("./pages/Audit")) },
      { path: "*", Component: NotFound },
    ],
  },
]);
