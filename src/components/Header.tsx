"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import logoImage from "@/assets/logo-emblem.webp";
import { COMPANY_INFO } from "@/lib/constants";
import { trackPageView } from "@/lib/analytics";

const NAV = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/** A link that knows whether it points at the current page (or a page under it). */
function NavLink({ href, className, children }: { href: string; className: (isActive: boolean) => string; children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return <Link href={href} className={className(isActive)} aria-current={isActive ? "page" : undefined}>{children}</Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Send a page_view to GA4 on every client-side route change.
  // Skip the first render — public/ga.js already sends that one.
  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) { firstLoad.current = false; return; }
    trackPageView(pathname + window.location.search);
  }, [pathname]);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Header ──
          The desktop row must survive the moment before the web fonts arrive: the
          system fallback is wider than Barlow Condensed and used to overflow the
          container, so the logo text spilled into the nav and the CTA wrapped. Hence
          shrink-0 on the logo and CTA, whitespace-nowrap on every nav item, and the
          full nav only from xl (1280px) — with seven items it no longer fits a 1024px
          viewport in the fallback font, so lg gets the hamburger. */}
      <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-background"}`}>
        {/* Amber top line */}
        <div className="h-[2px] bg-amber-500 w-full" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image src={logoImage} alt={COMPANY_INFO.name} width={36} height={36} priority className="h-9 w-9 object-contain" />
              <div>
                <p className="font-barlow font-800 text-base uppercase tracking-widest text-white leading-none">WaveNexus</p>
                <p className="font-jetbrains text-[10px] text-amber-500 uppercase tracking-widest leading-none mt-0.5">Digital Invest</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {/* Nexus Field — amber pill */}
              <NavLink href="/nexus-field" className={(isActive) =>
                `flex items-center gap-1.5 px-4 py-1.5 whitespace-nowrap text-sm font-barlow font-700 uppercase tracking-widest transition-all ${isActive ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 border border-amber-500/40"}`
              }>
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                Nexus Field
              </NavLink>

              {/* Custom Apps — sits with the product, not the agency links */}
              <NavLink href="/custom-apps" className={(isActive) =>
                `px-4 py-1.5 whitespace-nowrap text-sm font-barlow font-700 uppercase tracking-widest transition-all ${isActive ? "text-amber-400" : "text-zinc-300 hover:text-amber-400"}`
              }>
                Custom Apps
              </NavLink>

              {NAV.map(({ label, to }) => (
                <NavLink key={to} href={to} className={(isActive) =>
                  `px-4 py-1.5 whitespace-nowrap text-sm font-dmsans font-medium uppercase tracking-wider transition-all ${isActive ? "text-amber-400" : "text-zinc-400 hover:text-white"}`
                }>
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden xl:block shrink-0">
              <Link href="/audit"
                className="flex items-center gap-2 px-5 py-2 whitespace-nowrap bg-amber-500 text-zinc-950 text-sm font-barlow font-700 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                Free Audit <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open} aria-controls="mobile-menu" className="xl:hidden p-2 text-zinc-400 hover:text-white transition-colors">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}
              id="mobile-menu" className="xl:hidden overflow-hidden border-t border-border bg-zinc-950">
              <nav className="px-4 py-4 flex flex-col gap-1">
                <NavLink href="/nexus-field" className={(isActive) =>
                  `flex items-center gap-2 px-4 py-3 text-sm font-barlow font-700 uppercase tracking-widest ${isActive ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 border border-amber-500/30"}`
                }>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  Nexus Field — Field Service Software
                </NavLink>
                <NavLink href="/custom-apps" className={(isActive) =>
                  `px-4 py-3 text-sm font-barlow font-700 uppercase tracking-widest ${isActive ? "text-amber-400 bg-zinc-900" : "text-zinc-300"}`
                }>
                  Custom Apps — Software Built for Your Business
                </NavLink>
                {NAV.map(({ label, to }) => (
                  <NavLink key={to} href={to} className={(isActive) =>
                    `px-4 py-3 text-sm font-dmsans uppercase tracking-wider ${isActive ? "text-amber-400 bg-zinc-900" : "text-zinc-400"}`
                  }>{label}</NavLink>
                ))}
                <div className="pt-3 mt-1 border-t border-border">
                  <Link href="/audit"
                    className="block w-full text-center px-4 py-3 bg-amber-500 text-zinc-950 text-sm font-barlow font-700 uppercase tracking-widest">
                    Get Free Audit
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

    </>
  );
}
