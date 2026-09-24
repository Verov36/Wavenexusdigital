import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import logoImage from "../../imports/WaveNexus_digital_branding_emblem.png";
import { COMPANY_INFO } from "../lib/constants";
import { trackPageView } from "../lib/analytics";

const NAV = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Send a page_view to GA4 on every client-side route change.
  // Skip the first render — the gtag snippet in index.html already fires that one.
  const firstLoad = useRef(true);
  useEffect(() => {
    if (firstLoad.current) { firstLoad.current = false; return; }
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

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
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img src={logoImage} alt={COMPANY_INFO.name} className="h-9 w-9 object-contain" />
              <div>
                <p className="font-['Barlow_Condensed'] font-800 text-base uppercase tracking-widest text-white leading-none">WaveNexus</p>
                <p className="font-['JetBrains_Mono'] text-[10px] text-amber-500 uppercase tracking-widest leading-none mt-0.5">Digital Invest</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {/* Nexus Field — amber pill */}
              <NavLink to="/nexus-field" className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-1.5 whitespace-nowrap text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest transition-all ${isActive ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 border border-amber-500/40"}`
              }>
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                Nexus Field
              </NavLink>

              {/* Custom Apps — sits with the product, not the agency links */}
              <NavLink to="/custom-apps" className={({ isActive }) =>
                `px-4 py-1.5 whitespace-nowrap text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest transition-all ${isActive ? "text-amber-400" : "text-zinc-300 hover:text-amber-400"}`
              }>
                Custom Apps
              </NavLink>

              {NAV.map(({ label, to }) => (
                <NavLink key={to} to={to} className={({ isActive }) =>
                  `px-4 py-1.5 whitespace-nowrap text-sm font-['DM_Sans'] font-medium uppercase tracking-wider transition-all ${isActive ? "text-amber-400" : "text-zinc-400 hover:text-white"}`
                }>
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden xl:block shrink-0">
              <Link to="/audit"
                className="flex items-center gap-2 px-5 py-2 whitespace-nowrap bg-amber-500 text-zinc-950 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                Free Audit <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-zinc-400 hover:text-white transition-colors">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }}
              className="xl:hidden overflow-hidden border-t border-border bg-zinc-950">
              <nav className="px-4 py-4 flex flex-col gap-1">
                <NavLink to="/nexus-field" className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest ${isActive ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 border border-amber-500/30"}`
                }>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  Nexus Field — Field Service Software
                </NavLink>
                <NavLink to="/custom-apps" className={({ isActive }) =>
                  `px-4 py-3 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest ${isActive ? "text-amber-400 bg-zinc-900" : "text-zinc-300"}`
                }>
                  Custom Apps — Software Built for Your Business
                </NavLink>
                {NAV.map(({ label, to }) => (
                  <NavLink key={to} to={to} className={({ isActive }) =>
                    `px-4 py-3 text-sm font-['DM_Sans'] uppercase tracking-wider ${isActive ? "text-amber-400 bg-zinc-900" : "text-zinc-400"}`
                  }>{label}</NavLink>
                ))}
                <div className="pt-3 mt-1 border-t border-border">
                  <Link to="/audit"
                    className="block w-full text-center px-4 py-3 bg-amber-500 text-zinc-950 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest">
                    Get Free Audit
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1"><Outlet /></main>

      {/* ── Footer ── */}
      <footer className="bg-zinc-950 border-t border-border">
        <div className="h-[2px] bg-amber-500 w-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-10 w-10 object-contain" />
                <div>
                  <p className="font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-widest text-white">WaveNexus Digital Invest</p>
                  <p className="font-['JetBrains_Mono'] text-[11px] text-amber-500 uppercase tracking-widest mt-0.5">Veteran Owned · Hampton Roads, VA</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-['DM_Sans']">
                Veteran-owned web design agency and SaaS company. We build websites, drive local SEO, and make Nexus Field — field service software built around your team.
              </p>
            </div>

            {/* Agency */}
            <div>
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4">Agency</p>
              <ul className="space-y-2">
                {[
                  { label: "About", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" },
                ].map(({ label, to }) => (
                  <li key={to}><Link to={to} className="text-sm text-zinc-500 hover:text-amber-400 transition-colors font-['DM_Sans']">{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Product + contact */}
            <div>
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4">Product</p>
              <ul className="space-y-2 mb-6">
                <li><Link to="/nexus-field" className="text-sm text-amber-500 hover:text-amber-400 font-['Barlow_Condensed'] font-700 uppercase tracking-wider transition-colors">Nexus Field App</Link></li>
                <li><Link to="/custom-apps" className="text-sm text-zinc-500 hover:text-white transition-colors font-['DM_Sans']">Custom Apps</Link></li>
                <li><Link to="/audit?type=demo" className="text-sm text-zinc-500 hover:text-white transition-colors font-['DM_Sans']">Request a Demo</Link></li>
              </ul>
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Contact</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="block text-sm text-zinc-500 hover:text-white transition-colors font-['DM_Sans'] mb-1">{COMPANY_INFO.phone}</a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="block text-xs text-zinc-500 hover:text-white transition-colors break-all font-['DM_Sans']">{COMPANY_INFO.email}</a>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-['JetBrains_Mono'] text-[10px] text-zinc-700 uppercase tracking-widest">© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="font-['JetBrains_Mono'] text-[10px] text-zinc-700 uppercase tracking-widest">Hampton Roads, VA · USMC Veteran Owned</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
