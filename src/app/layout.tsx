import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/Toaster";
import { barlowCondensed, dmSans, jetbrainsMono } from "@/lib/fonts";
import { site, SITE_URL } from "@/lib/seo/pages";
import "@/styles/index.css";

// Tags shared by every page. Each page adds its own title, description,
// canonical, Open Graph, Twitter and robots tags with pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: site.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    language: "English",
    "geo.region": "US-VA",
    "geo.placename": "Norfolk, Virginia",
    "geo.position": "36.8508;-76.2859",
    ICBM: "36.8508, -76.2859",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta httpEquiv="content-language" content="en-us" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Analytics. The bootstrap lives in public/ga.js rather than inline, for the CSP. */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} />
        <script defer src="/ga.js" />
        {/* Content fades in with JavaScript (motion). Without it, show everything as-is. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
