import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NexusField from "./pages/NexusField";
import CustomApps from "./pages/CustomApps";
import Compare from "./pages/Compare";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPostSpreadsheets from "./pages/BlogPostSpreadsheets";
import BlogPostPartsTracking from "./pages/BlogPostPartsTracking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "nexus-field", Component: NexusField },
      { path: "nexus-field/vs/:slug", Component: Compare },
      { path: "custom-apps", Component: CustomApps },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "blog", Component: Blog },
      { path: "blog/field-service-software-vs-spreadsheets", Component: BlogPostSpreadsheets },
      { path: "blog/parts-walking-off-trucks", Component: BlogPostPartsTracking },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
