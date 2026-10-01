import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Package, ClipboardList, Camera, Zap, Globe, Search, Palette, TrendingUp, Code2, Smartphone, ScanLine } from "lucide-react";
import { portfolio } from "../lib/constants";
import { trackEvent } from "../lib/analytics";
import { useEffect } from "react";
import { setPageMeta } from "../metadata";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

export default function Home() {
  useEffect(() => {
    setPageMeta("/");
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-zinc-950">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Photo overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1760192465389-f0b1f9b6abd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=70&w=1280')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">

            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">
                US Marine Corps Veteran Owned · Hampton Roads, VA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp}
              className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tight text-white mb-6">
              Web Design{" "}<br />
              <span className="text-amber-500">& Field Service</span>{" "}<br />
              Software
            </motion.h1>

            <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl font-['DM_Sans']">
              We build websites that bring in leads and make field service software that actually fits the way your team works. Small team. Focused work. Hampton Roads, VA.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/nexus-field"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Explore Nexus Field <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                Our Services <ChevronRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div initial="hidden" animate="show" variants={stagger}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800">
            {[
              { val: "8+", label: "Projects" },
              { val: "USMC", label: "Veteran Led" },
              { val: "24/7", label: "Support" },
              { val: "100%", label: "Satisfaction" },
            ].map(({ val, label }) => (
              <motion.div key={label} variants={fadeUp} className="bg-zinc-950 px-6 py-5 text-center">
                <div className="font-['Barlow_Condensed'] font-900 text-3xl text-amber-500 uppercase">{val}</div>
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NEXUS FIELD SPOTLIGHT ── */}
      <section className="bg-zinc-950 py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-8 bg-amber-500" />
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Software Product</span>
            <span className="flex items-center gap-1.5 px-3 py-1 border border-amber-500/30 bg-amber-500/10">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[10px] text-amber-400 uppercase tracking-widest">Live Now</span>
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-2">
                Nexus
              </h2>
              <h2 className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-amber-500 mb-8">
                Field
              </h2>

              <div className="w-16 h-[2px] bg-amber-500 mb-8" />

              <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-['DM_Sans']">
                Field service software built by people who actually talked to field service companies. We got tired of seeing teams duct-tape together spreadsheets, group texts, and apps that never quite fit — so we built one that does.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-10 font-['DM_Sans']">
                Parts inventory is <span className="text-white font-semibold">free in every plan</span> — warehouse stock, truck-level inventory, and parts-per-job logging. Because it shouldn't cost extra to know where your parts went.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/nexus-field"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                  See Full Product <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/audit?type=demo"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
                  Request Demo
                </Link>
              </div>
            </motion.div>

            {/* Right — feature grid */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-px">
              {/* Photo */}
              <div className="overflow-hidden mb-px">
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Field service manager on tablet" className="w-full h-52 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              {/* Features */}
              <div className="grid grid-cols-2 gap-px bg-zinc-800">
                {[
                  { icon: Package, label: "Parts Inventory", note: "Free · Warehouse + Truck", amber: true },
                  { icon: ClipboardList, label: "Job Tracking", note: "Full history & notes", amber: false },
                  { icon: Camera, label: "Photo Database", note: "Attached to every job", amber: false },
                  { icon: Zap, label: "Built to Suit", note: "Configured for you", amber: false },
                ].map(({ icon: Icon, label, note, amber }) => (
                  <motion.div key={label} variants={fadeUp}
                    className={`p-5 ${amber ? "bg-amber-500/10 border border-amber-500/30" : "bg-zinc-900"}`}>
                    <Icon className={`h-5 w-5 mb-3 ${amber ? "text-amber-400" : "text-zinc-500"}`} />
                    {amber && <span className="font-['JetBrains_Mono'] text-[9px] text-amber-400 uppercase tracking-widest block mb-1">Free</span>}
                    <p className={`font-['Barlow_Condensed'] font-700 uppercase tracking-wider text-sm ${amber ? "text-amber-400" : "text-white"}`}>{label}</p>
                    <p className="font-['DM_Sans'] text-xs text-zinc-600 mt-0.5">{note}</p>
                  </motion.div>
                ))}
              </div>
              {/* Industries */}
              <div className="bg-zinc-900 p-4">
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-zinc-600 mb-3">Built For</p>
                <div className="flex flex-wrap gap-2">
                  {["HVAC", "Plumbing", "Electrical", "Landscaping", "Contracting", "Appliance Repair"].map(i => (
                    <span key={i} className="font-['JetBrains_Mono'] text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1 uppercase tracking-wider">{i}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM APPS BRIDGE ── */}
      <section className="bg-zinc-950 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid lg:grid-cols-5 gap-px bg-zinc-800 border border-amber-500/20">
            <div className="lg:col-span-3 bg-zinc-950 p-8 lg:p-10">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400 block mb-4">Need something Nexus Field doesn't do?</span>
              <h3 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase leading-[0.95] text-white mb-4">
                We build custom apps{" "}<br /><span className="text-amber-500">for businesses with a process</span>
              </h3>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed mb-8 max-w-xl">
                If you can describe what you need handled and how, we can build the tool that runs it — in the browser, on the phone, or both. The same team that built Nexus Field builds yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/custom-apps" onClick={() => trackEvent("click", "Home", "Custom Apps")}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                  See How We Build Apps <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact?interest=customapp"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
                  Scope My App — Free
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-rows-3 gap-px bg-zinc-800">
              {[
                { icon: Code2, label: "Custom web apps & internal tools", note: "Job tracking, inventory, scheduling, portals" },
                { icon: Smartphone, label: "Mobile apps", note: "iOS & Android for the truck and the job site" },
                { icon: ScanLine, label: "Built and proven on our own", note: "Nexus Field · Nexus Inventory" },
              ].map(({ icon: Icon, label, note }) => (
                <div key={label} className="bg-zinc-900 p-5 flex items-start gap-4">
                  <Icon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-['Barlow_Condensed'] font-700 uppercase tracking-wider text-sm text-white">{label}</p>
                    <p className="font-['DM_Sans'] text-xs text-zinc-600 mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AGENCY SERVICES ── */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Digital Agency</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">
              What We Do for{" "}<br /><span className="text-amber-500">Local Businesses</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {[
              { icon: Globe, title: "Website Development", desc: "Sites that load fast, work on phones, and actually bring in inquiries." },
              { icon: Search, title: "SEO & AI Search", desc: "Show up on Google and in AI tools like ChatGPT when locals search for you." },
              { icon: Palette, title: "Branding & Logos", desc: "A visual identity that makes your business look like it belongs at the top." },
              { icon: TrendingUp, title: "Social Media", desc: "Consistent presence without you having to think about it every week." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                className="bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <Icon className="h-6 w-6 text-amber-500 mb-6" />
                <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-8">
            <Link to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO TEASER ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Work</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">Real Projects,{" "}<br /><span className="text-amber-500">Real Results</span></h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-px bg-zinc-800 mb-8">
            {portfolio.filter(p => p.name !== "Dizon Digital Media").map((item, idx) => (
              <motion.div key={item.name} variants={fadeUp}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackEvent("click", "Portfolio", item.name)}
                    className="block bg-zinc-900 p-8 h-full group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500">
                    <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-3">{item.category}</div>
                    <h3 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-3 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                    <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6">{item.text}</p>
                    <span className="font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Project <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ) : (
                  <div className="bg-zinc-900 p-8 h-full border-l-2 border-transparent">
                    <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-3">{item.category}</div>
                    <h3 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-3">{item.name}</h3>
                    <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{item.text}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Link to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
              View All Work <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="bg-zinc-950 py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Service Area</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">
              Local Web Design &amp; Marketing{" "}<br /><span className="text-amber-500">Across Hampton Roads, VA</span>
            </h2>
            <p className="font-['DM_Sans'] text-zinc-500 mt-4 max-w-2xl leading-relaxed">
              We're a Hampton Roads-based team that works with local businesses throughout Southeast Virginia. Whether you're in Suffolk or Virginia Beach, you get the same focused attention — no outsourced work, no cookie-cutter packages.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-800 mb-10">
            {[
              { city: "Suffolk", note: "Primary base" },
              { city: "Virginia Beach", note: "Full coverage" },
              { city: "Chesapeake", note: "Full coverage" },
              { city: "Newport News", note: "Full coverage" },
              { city: "Hampton", note: "Full coverage" },
              { city: "Norfolk", note: "Full coverage" },
              { city: "Portsmouth", note: "Full coverage" },
              { city: "Williamsburg", note: "Full coverage" },
              { city: "York County", note: "Full coverage" },
              { city: "Isle of Wight", note: "Full coverage" },
            ].map(({ city, note }) => (
              <motion.div key={city} variants={fadeUp}
                className="bg-zinc-950 px-5 py-4 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <p className="font-['Barlow_Condensed'] font-700 uppercase text-sm tracking-wider text-white group-hover:text-amber-400 transition-colors">{city}</p>
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-zinc-700 mt-0.5">{note}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="bg-zinc-900 border border-zinc-800 p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-500 mb-2">Web Designer Near Me</p>
              <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                Looking for a local web designer near you in Hampton Roads? We build custom, mobile-first websites for local service businesses that need to show up in search and actually convert visitors into leads.
              </p>
            </div>
            <div>
              <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-500 mb-2">Local SEO Company Near Me</p>
              <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                We run local SEO campaigns for businesses throughout Hampton Roads — Google Business Profile optimization, local keyword targeting, and AI search optimization so you're found on ChatGPT and Perplexity too.
              </p>
            </div>
            <div>
              <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-500 mb-2">Digital Marketing Near Me</p>
              <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                From branding and logo design to social media management and full digital marketing strategies — we're the local marketing team near you in Southeast Virginia. Veteran owned. Focused on results.
              </p>
            </div>
            <div>
              <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-500 mb-2">App Developer Near Me</p>
              <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                Need a custom app or business software built in Hampton Roads? We build web and mobile apps around how your business actually works — and we've built our own, Nexus Field and Nexus Inventory.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Ready When You Are</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase leading-[0.9] text-zinc-950">
                Let's figure out what you actually need.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-['DM_Sans'] text-zinc-950/70 leading-relaxed">
                No pitch, no packages you don't need. Start with a free audit — we'll give you an honest look at where you stand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/audit"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Free Audit <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
