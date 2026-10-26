"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, ChevronRight, Phone, Globe, Search, MapPin, Star, Sparkles, Gauge,
  FileText, Palette, TrendingUp, Wrench, Code2, CheckCircle2,
} from "lucide-react";
import { portfolio, TEL_HREF, COMPANY_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[2px] w-8 bg-amber-500" />
      <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-amber-500">{children}</span>
    </div>
  );
}

const PROBLEMS = [
  {
    icon: Gauge,
    title: "The site isn't built to rank",
    desc: "Slow pages, one page trying to cover every service, and no clear statement of what you do and where. Google can't recommend what it can't understand.",
  },
  {
    icon: MapPin,
    title: "Your Google Business Profile is half done",
    desc: "Wrong categories, no photos, no posts. The map pack is where most local calls start, and an incomplete profile rarely shows up there.",
  },
  {
    icon: FileText,
    title: "Your listings don't match",
    desc: "An old address on Yelp, a different phone number on a directory. When your details conflict, Google trusts all of them less.",
  },
  {
    icon: Star,
    title: "Not enough recent reviews",
    desc: "Reviews are one of the strongest local ranking signals, and they're what customers read before they call. Most businesses never ask.",
  },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Website Design & Build",
    desc: "Custom, mobile-first websites for local service businesses — written and structured to rank and to turn visitors into calls.",
    points: ["Fast load on phones", "A page for each service", "Tap-to-call & short quote forms", "Built on Next.js, not a page builder"],
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "The work that gets you into Google's map pack and local results for the searches your customers actually make.",
    points: ["Keyword & competitor research", "City and service-area pages", "Schema markup", "Monthly ranking reports"],
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Setup or cleanup of the profile that drives most local calls — then keeping it active so Google keeps showing it.",
    points: ["Categories & services", "Photos and posts", "Matching listings across the web", "Review request system"],
  },
  {
    icon: Sparkles,
    title: "AI Search Optimization",
    desc: "More people now ask ChatGPT, Perplexity, and Google's AI Overviews who to call. We make your business easy for those tools to find and recommend.",
    points: ["Clear, quotable answers", "Structured data AI tools read", "Consistent business facts", "Crawler access set up right"],
  },
];

const PROCESS = [
  { step: "01", title: "Free Audit", desc: "We look at your site, your Google Business Profile, your listings, and who's beating you in search — and tell you plainly what's holding you back." },
  { step: "02", title: "Plan", desc: "A written plan: what we'll build or fix, in what order, and what it costs. No packages you don't need." },
  { step: "03", title: "Build", desc: "We build the site and the local SEO foundation together, so it's ready to rank the day it launches." },
  { step: "04", title: "Grow & Report", desc: "Ongoing SEO, profile updates, and content. You get a monthly report on rankings, calls, and form leads." },
];

const AREA_LINKS = [
  { city: "Norfolk", href: "/web-design/norfolk-va", note: "Home base" },
  { city: "Virginia Beach", href: "/web-design/virginia-beach-va", note: "Web design & SEO" },
  { city: "Chesapeake", href: "/web-design/chesapeake-va", note: "Web design & SEO" },
  { city: "Suffolk", href: "/web-design/suffolk-va", note: "Web design & SEO" },
  { city: "Portsmouth", href: "/web-design/portsmouth-va", note: "Web design & SEO" },
  { city: "All of Hampton Roads", href: "/web-design/hampton-roads-va", note: "Hampton, Newport News & more" },
];

const FAQS = [
  {
    q: "How long does it take to show up on Google?",
    a: "A new or rebuilt site usually starts getting indexed within a few weeks. Ranking in the map pack and local results for competitive searches typically takes three to six months of steady work — profile updates, reviews, content, and consistent listings. We'll tell you up front what's realistic for your market.",
  },
  {
    q: "Do I need a new website, or can you fix the one I have?",
    a: "Sometimes the right answer is fixing what you have. The free audit tells you which: if your site is fast, mobile-friendly, and structured well, we'll focus on SEO and your Google Business Profile instead of selling you a rebuild.",
  },
  {
    q: "What's the difference between web design and local SEO?",
    a: "Web design is the site itself — how it looks, loads, and turns visitors into calls. Local SEO is everything that gets people to it: your Google Business Profile, reviews, listings, and the pages and content Google uses to decide who shows up for a local search. You need both, and we do both.",
  },
  {
    q: "Do you only work with businesses in Norfolk?",
    a: "We're based in Norfolk and work with businesses across Hampton Roads — Virginia Beach, Chesapeake, Suffolk, Portsmouth, Hampton, Newport News, and beyond. Meetings in person or by phone, whichever works for you.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1760192465389-f0b1f9b6abd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=70&w=1280')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-amber-500">
                US Marine Corps Veteran Owned · Norfolk, VA
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-barlow font-900 text-6xl sm:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tight text-white mb-6">
              Web Design{" "}<br />
              <span className="text-amber-500">& Local SEO</span>
              <span className="block mt-4 text-2xl sm:text-3xl lg:text-4xl tracking-widest text-zinc-400">Norfolk · Hampton Roads, VA</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-zinc-300 text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl font-dmsans">
              Websites that get you found on Google — and get you called.
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed mb-10 max-w-2xl font-dmsans">
              We build fast, mobile-first websites for local businesses and do the local SEO that puts them in front of
              customers: Google Business Profile, reviews, service-area pages, and AI search. One small team, based in Norfolk.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" onClick={() => trackEvent("click", "Home", "Hero Free Audit")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-barlow font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Get a Free Website Audit <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={TEL_HREF} onClick={() => trackEvent("click", "Home", "Hero Call")}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-barlow font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                <Phone className="h-5 w-5" /> {COMPANY_INFO.phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="show" variants={stagger}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
            {[
              { val: "USMC", label: "Veteran Owned" },
              { val: "Norfolk", label: "Home Base" },
              { val: "Mobile", label: "First, Every Build" },
              { val: "Google + AI", label: "Search Ready" },
            ].map(({ val, label }) => (
              <motion.div key={label} variants={fadeUp} className="bg-zinc-950 px-6 py-5 text-center">
                <div className="font-barlow font-900 text-3xl text-amber-500 uppercase">{val}</div>
                <div className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY YOU'RE NOT GETTING FOUND ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14 max-w-3xl">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-barlow font-900 text-5xl sm:text-6xl uppercase text-white leading-[0.95]">
              Why Local Businesses{" "}<br /><span className="text-amber-500">Don&apos;t Get Found</span>
            </h2>
            <p className="font-dmsans text-zinc-500 mt-6 leading-relaxed">
              Most businesses that are invisible online aren&apos;t doing anything wrong in their work — the problem is a
              few fixable things Google looks at. These are the four we see most often across Hampton Roads.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {PROBLEMS.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="bg-zinc-950 p-8">
                <Icon className="h-6 w-6 text-amber-500 mb-6" />
                <h3 className="font-barlow font-800 text-xl uppercase tracking-wider text-white mb-3">{title}</h3>
                <p className="font-dmsans text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-barlow font-900 text-5xl sm:text-6xl uppercase text-white leading-[0.95]">
              Websites That Rank.{" "}<br /><span className="text-amber-500">SEO That Brings Calls.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-px bg-zinc-800">
            {SERVICES.map(({ icon: Icon, title, desc, points }) => (
              <motion.div key={title} variants={fadeUp}
                className="bg-zinc-900 p-8 lg:p-10 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <Icon className="h-7 w-7 text-amber-500 mb-6" />
                <h3 className="font-barlow font-800 text-2xl uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="font-dmsans text-zinc-400 leading-relaxed mb-6">{desc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 font-dmsans text-sm text-zinc-500">
                      <CheckCircle2 className="h-4 w-4 text-amber-500/70 flex-shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-px grid sm:grid-cols-2 gap-px bg-zinc-800">
            {[
              { icon: Palette, title: "Branding & Logos", desc: "A clean identity so your site, truck, and profile all look like the same business." },
              { icon: TrendingUp, title: "Social Media", desc: "Steady posting that backs up your search presence without eating your week." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-zinc-900 p-6 flex items-start gap-4">
                <Icon className="h-5 w-5 text-zinc-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-barlow font-700 uppercase tracking-wider text-white">{title}</p>
                  <p className="font-dmsans text-sm text-zinc-500 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-8">
            <Link href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-barlow font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-barlow font-900 text-5xl sm:text-6xl uppercase text-white">Local Sites,{" "}<br /><span className="text-amber-500">Built to Be Found</span></h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-px bg-zinc-800 mb-8">
            {portfolio.filter(p => p.name !== "Dizon Digital Media").map(item => (
              <motion.div key={item.name} variants={fadeUp}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackEvent("click", "Portfolio", item.name)}
                    className="block bg-zinc-900 p-8 h-full group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500">
                    <div className="font-jetbrains text-[10px] uppercase tracking-widest text-amber-500 mb-3">{item.category}</div>
                    <h3 className="font-barlow font-800 text-2xl uppercase text-white mb-3 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                    <p className="font-dmsans text-sm text-zinc-500 leading-relaxed mb-6">{item.text}</p>
                    <span className="font-barlow font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Project <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ) : (
                  <div className="bg-zinc-900 p-8 h-full border-l-2 border-transparent">
                    <div className="font-jetbrains text-[10px] uppercase tracking-widest text-amber-500 mb-3">{item.category}</div>
                    <h3 className="font-barlow font-800 text-2xl uppercase text-white mb-3">{item.name}</h3>
                    <p className="font-dmsans text-sm text-zinc-500 leading-relaxed">{item.text}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-barlow font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
              See the Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-barlow font-900 text-5xl sm:text-6xl uppercase text-white leading-[0.95]">
              From Audit{" "}<br /><span className="text-amber-500">to the Map Pack</span>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {PROCESS.map(({ step, title, desc }) => (
              <motion.div key={step} variants={fadeUp} className="bg-zinc-900 p-8">
                <div className="font-barlow font-900 text-5xl text-amber-500/30 mb-4">{step}</div>
                <h3 className="font-barlow font-800 text-xl uppercase tracking-wider text-white mb-3">{title}</h3>
                <p className="font-dmsans text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <SectionLabel>Service Area</SectionLabel>
            <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white">
              Web Design &amp; SEO{" "}<br /><span className="text-amber-500">Across Hampton Roads, VA</span>
            </h2>
            <p className="font-dmsans text-zinc-500 mt-4 max-w-2xl leading-relaxed">
              We&apos;re based in Norfolk and work with local businesses throughout Hampton Roads. Every city searches a little
              differently — pick yours to see how we approach it.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-zinc-800 mb-10">
            {AREA_LINKS.map(({ city, href, note }) => (
              <motion.div key={city} variants={fadeUp}>
                <Link href={href}
                  className="block bg-zinc-950 px-5 py-5 h-full group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                  <p className="font-barlow font-700 uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                    {city} <ChevronRight className="h-4 w-4 text-zinc-700 group-hover:text-amber-400" />
                  </p>
                  <p className="font-jetbrains text-[9px] uppercase tracking-widest text-zinc-600 mt-1">{note}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="bg-zinc-900 border border-zinc-800 p-8 grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-jetbrains text-[9px] uppercase tracking-widest text-amber-500 mb-2">Local Web Designer</p>
              <p className="font-dmsans text-sm text-zinc-400 leading-relaxed">
                Looking for a web designer near you in Hampton Roads? We build custom, mobile-first websites for local
                service businesses that need to show up in search and turn visitors into leads.
              </p>
            </div>
            <div>
              <p className="font-jetbrains text-[9px] uppercase tracking-widest text-amber-500 mb-2">Local SEO Company</p>
              <p className="font-dmsans text-sm text-zinc-400 leading-relaxed">
                Google Business Profile optimization, local keyword targeting, citation cleanup, and review systems for
                businesses in Norfolk, Virginia Beach, Chesapeake, Suffolk, and Portsmouth.
              </p>
            </div>
            <div>
              <p className="font-jetbrains text-[9px] uppercase tracking-widest text-amber-500 mb-2">AI Search Optimization</p>
              <p className="font-dmsans text-sm text-zinc-400 leading-relaxed">
                When someone asks ChatGPT, Perplexity, or Google&apos;s AI Overviews for a local business, we make sure your
                business has the clear, consistent information those tools need to recommend you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white">Web Design &amp; SEO FAQ</h2>
          </motion.div>
          <div className="space-y-px bg-zinc-800">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-zinc-900 p-7">
                <h3 className="font-barlow font-800 text-xl uppercase tracking-wide text-white mb-3">{q}</h3>
                <p className="font-dmsans text-zinc-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALSO FROM WAVENEXUS (secondary) ── */}
      <section className="bg-zinc-950 py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-8">
            <SectionLabel>Also From WaveNexus</SectionLabel>
            <p className="font-dmsans text-zinc-500 max-w-2xl leading-relaxed">
              Besides websites and SEO, we build software for businesses that run on a process.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-px bg-zinc-800">
            {[
              {
                icon: Wrench, label: "Field Service Software", title: "Nexus Field", href: "/nexus-field",
                desc: "Dispatch, quotes with e-signature, and truck-level parts inventory for HVAC, refrigeration, and electrical contractors. $59 per tech, no contract.",
                cta: "See Nexus Field",
              },
              {
                icon: Code2, label: "Custom Software", title: "Custom Apps", href: "/custom-apps",
                desc: "Web and mobile apps built around how your business actually works — job tracking, inventory, scheduling, and customer portals.",
                cta: "See Custom Apps",
              },
            ].map(({ icon: Icon, label, title, href, desc, cta }) => (
              <motion.div key={title} variants={fadeUp}>
                <Link href={href} onClick={() => trackEvent("click", "Home", title)}
                  className="block bg-zinc-950 p-8 h-full group hover:bg-zinc-900 transition-colors border-l-2 border-transparent hover:border-amber-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-5 w-5 text-amber-500" />
                    <span className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600">{label}</span>
                  </div>
                  <h3 className="font-barlow font-800 text-2xl uppercase text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
                  <p className="font-dmsans text-sm text-zinc-500 leading-relaxed mb-6">{desc}</p>
                  <span className="font-barlow font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                    {cta} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Free Website &amp; SEO Audit</p>
              <h2 className="font-barlow font-900 text-5xl sm:text-6xl uppercase leading-[0.9] text-zinc-950">
                Find out why you&apos;re not showing up.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-dmsans text-zinc-950/70 leading-relaxed">
                We&apos;ll check your website, Google Business Profile, listings, and reviews against the businesses
                outranking you — and give you an honest, plain-English list of what to fix first. No pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/audit" onClick={() => trackEvent("click", "Home", "Bottom Free Audit")}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-barlow font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Get My Free Audit <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={TEL_HREF}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-zinc-950 text-zinc-950 font-barlow font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                  <Phone className="h-4 w-4" /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
