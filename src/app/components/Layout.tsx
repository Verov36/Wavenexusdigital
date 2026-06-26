import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Award, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../../imports/WaveNexus_digital_branding_emblem.png";
import { COMPANY_INFO } from "../lib/constants";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md border-b border-slate-200" : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="h-10 w-10 sm:h-12 sm:w-12">
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 leading-tight">{COMPANY_INFO.name}</p>
                <p className="text-xs text-slate-500 hidden sm:block">{COMPANY_INFO.tagline}</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Nexus Field — highlighted */}
              <NavLink
                to="/nexus-field"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-black transition-all ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`
                }
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Nexus Field
              </NavLink>

              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm">
                  Free Audit
                </Button>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                <NavLink
                  to="/nexus-field"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-black ${
                      isActive ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"
                    }`
                  }
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  Nexus Field — Our SaaS Product
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-semibold ${
                        isActive ? "bg-slate-100 text-blue-600" : "text-slate-700"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-2 mt-1 border-t border-slate-100">
                  <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      Get Your Free Audit
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-24 w-24 object-contain flex-shrink-0" />
                <div>
                  <p className="text-lg font-black">{COMPANY_INFO.name}</p>
                  <p className="text-xs text-blue-400">{COMPANY_INFO.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed mb-4">
                Veteran-owned digital agency and SaaS company based in Hampton Roads, VA. We build websites, handle SEO, and make field service software that actually fits your team.
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-400 font-bold">
                <Award className="h-4 w-4" />
                <span>US Marine Corps Veteran Owned & Operated</span>
              </div>
            </div>

            {/* Agency Links */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Agency</p>
              <ul className="space-y-2">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product + Contact */}
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Product</p>
              <ul className="space-y-2 mb-6">
                <li>
                  <Link to="/nexus-field" className="text-sm text-blue-400 hover:text-blue-300 font-bold transition">
                    Nexus Field App
                  </Link>
                </li>
                <li>
                  <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition">
                    Request a Demo
                  </a>
                </li>
              </ul>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Contact</p>
              <a href={`tel:${COMPANY_INFO.phone}`} className="block text-sm text-slate-400 hover:text-white transition mb-1">
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="block text-xs text-slate-400 hover:text-white transition break-all">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600">© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="text-xs text-slate-600">Hampton Roads, Virginia · Veteran Owned</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
