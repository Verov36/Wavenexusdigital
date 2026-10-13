import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo-emblem.webp";
import { COMPANY_INFO, TEL_HREF } from "@/lib/constants";
import { AREAS } from "@/lib/seo/pages";
import Year from "./Year";

const SERVICE_AREAS = AREAS;

export default function Footer() {
  return (
    <>
      {/* ── Footer ── */}
      <footer className="bg-zinc-950 border-t border-border">
        <div className="h-[2px] bg-amber-500 w-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src={logoImage} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                <div>
                  <p className="font-barlow font-800 text-xl uppercase tracking-widest text-white">WaveNexus Digital Invest</p>
                  <p className="font-jetbrains text-[11px] text-amber-500 uppercase tracking-widest mt-0.5">Veteran Owned · Hampton Roads, VA</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-dmsans">
                Veteran-owned web design agency and SaaS company. We build websites, drive local SEO, and make Nexus Field — field service software built around your team.
              </p>
            </div>

            {/* Agency */}
            <div>
              <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mb-4">Agency</p>
              <ul className="space-y-2">
                {[
                  { label: "About", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" },
                ].map(({ label, to }) => (
                  <li key={to}><Link href={to} className="text-sm text-zinc-500 hover:text-amber-400 transition-colors font-dmsans">{label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Product + contact */}
            <div>
              <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mb-4">Product</p>
              <ul className="space-y-2 mb-6">
                <li><Link href="/nexus-field" className="text-sm text-amber-500 hover:text-amber-400 font-barlow font-700 uppercase tracking-wider transition-colors">Nexus Field App</Link></li>
                <li><Link href="/custom-apps" className="text-sm text-zinc-500 hover:text-white transition-colors font-dmsans">Custom Apps</Link></li>
                <li><Link href="/audit?type=demo" className="text-sm text-zinc-500 hover:text-white transition-colors font-dmsans">Request a Demo</Link></li>
              </ul>
              <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Contact</p>
              <a href={TEL_HREF} className="block text-sm text-zinc-500 hover:text-white transition-colors font-dmsans mb-1">{COMPANY_INFO.phone}</a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="block text-xs text-zinc-500 hover:text-white transition-colors break-all font-dmsans">{COMPANY_INFO.email}</a>
            </div>
          </div>

          <div className="border-t border-border pt-6 pb-6">
            <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Service Areas</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {SERVICE_AREAS.map(({ slug, short }) => (
                <li key={slug}><Link href={`/web-design/${slug}`} className="text-sm text-zinc-500 hover:text-amber-400 transition-colors font-dmsans">Web Design {short}</Link></li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-jetbrains text-[10px] text-zinc-700 uppercase tracking-widest">© <Year initial={new Date().getFullYear()} /> {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="font-jetbrains text-[10px] text-zinc-700 uppercase tracking-widest">Norfolk, VA · Serving Hampton Roads · USMC Veteran Owned</p>
          </div>
        </div>
      </footer>
    </>
  );
}
