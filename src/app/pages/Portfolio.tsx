import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, TrendingUp, Smartphone, MapPin, FileText } from "lucide-react";
import { portfolio } from "../lib/constants";
import { trackEvent } from "../lib/analytics";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

export default function Portfolio() {
  useEffect(() => {
    setPageMeta("Portfolio — Web Design Work | Hampton Roads VA",
      "Real projects from WaveNexus Digital Invest — a veteran-owned web design company in Hampton Roads, VA. See our work for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.",
      "/portfolio");
  }, []);

  const projects = portfolio.filter(p => p.name !== "Dizon Digital Media");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Work</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              Real Projects.<br /><span className="text-amber-500">Real Results.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">
              Local service businesses and companies we've helped establish a stronger digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study — Red Vine Mechanical HVAC */}
      <section className="bg-zinc-900 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Featured Case Study</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">
              Red Vine Mechanical HVAC
            </h2>
            <p className="font-['DM_Sans'] text-zinc-500 mt-3 max-w-2xl">
              A full redesign for a Hampton Roads HVAC contractor — built from scratch to generate leads, rank locally, and give the business a professional presence that matched the quality of their work.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — project story */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="HVAC technician working on unit"
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="space-y-6 font-['DM_Sans'] text-zinc-400 leading-relaxed">
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-800 uppercase text-white text-xl tracking-wider mb-2">The Problem</h3>
                  <p>Red Vine Mechanical had a strong reputation built on word-of-mouth but no digital presence to support it. Their old site wasn't mobile-optimized, had no service pages, no local SEO structure, and no clear way for new customers to request a quote. They were losing ground to competitors who showed up in search.</p>
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-800 uppercase text-white text-xl tracking-wider mb-2">What We Built</h3>
                  <p>We rebuilt the site from the ground up with a mobile-first design, dedicated service pages for HVAC installation, repair, and maintenance, a frictionless quote request form, and local SEO structure targeting Hampton Roads service area searches. Every page was written with conversion and search visibility in mind from day one.</p>
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-800 uppercase text-white text-xl tracking-wider mb-2">Local SEO Foundation</h3>
                  <p>We built LocalBusiness schema, optimized page titles and meta descriptions for Hampton Roads HVAC searches, set up Google Business Profile structure guidance, and made sure every service page targeted the right geographic keywords — so when someone in Suffolk or Virginia Beach searches for HVAC near them, Red Vine shows up.</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="https://www.redvinemechanical.com/" target="_blank" rel="noopener noreferrer"
                  onClick={() => trackEvent("click", "Portfolio", "Red Vine Mechanical — Case Study CTA")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                  View Live Site <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Right — deliverables + metrics */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-px">
              {/* Outcome metrics */}
              <div className="grid grid-cols-2 gap-px bg-zinc-800 mb-px">
                {[
                  { val: "<2s", label: "Page Load Speed" },
                  { val: "100%", label: "Mobile Optimized" },
                  { val: "8+", label: "Service Pages" },
                  { val: "Local", label: "SEO Structured" },
                ].map(({ val, label }) => (
                  <div key={label} className="bg-zinc-950 px-6 py-5 text-center">
                    <div className="font-['Barlow_Condensed'] font-900 text-3xl text-amber-500 uppercase">{val}</div>
                    <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="space-y-px">
                {[
                  { icon: Smartphone, heading: "Mobile-First Redesign", body: "Built for the phone screens of homeowners searching for HVAC help on the go." },
                  { icon: MapPin, heading: "Local SEO Architecture", body: "Service area pages, LocalBusiness schema, and geo-targeted keywords for Hampton Roads, Suffolk, Chesapeake, and Virginia Beach." },
                  { icon: FileText, heading: "Service Pages That Convert", body: "Separate pages for installation, repair, and maintenance — each written to rank and to give potential customers a reason to call." },
                  { icon: TrendingUp, heading: "Lead Capture System", body: "A streamlined quote request form designed to reduce friction and capture more inquiries from organic traffic." },
                ].map(({ icon: Icon, heading, body }) => (
                  <motion.div key={heading} variants={fadeUp}
                    className="flex gap-4 items-start bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                    <Icon className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm mb-0.5 group-hover:text-amber-400 transition-colors">{heading}</p>
                      <p className="font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Industry tag */}
              <div className="bg-zinc-950 p-4 border border-zinc-800">
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-zinc-600 mb-2">Industry</p>
                <div className="flex gap-2 flex-wrap">
                  {["HVAC", "Local Service", "Hampton Roads VA", "Lead Gen"].map(t => (
                    <span key={t} className="font-['JetBrains_Mono'] text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1 uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {projects.map((item, idx) => (
              <motion.div key={item.name} variants={fadeUp}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackEvent("click", "Portfolio", item.name)}
                    className="block bg-zinc-950 p-8 h-full group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                    <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-4">{item.category}</div>
                    <h2 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-4 group-hover:text-amber-400 transition-colors">{item.name}</h2>
                    <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6">{item.text}</p>
                    <span className="font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Project <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </a>
                ) : (
                  <div className="bg-zinc-950 p-8 h-full border-b-2 border-zinc-800">
                    <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4">{item.category}</div>
                    <h2 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase text-zinc-500 mb-4">{item.name}</h2>
                    <p className="font-['DM_Sans'] text-sm text-zinc-700 leading-relaxed mb-6">{item.text}</p>
                    <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-700">Coming Soon</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4">Your Business Could Be Next</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-zinc-950 leading-[0.9]">
                Ready to build something that brings in leads?
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                Free Audit <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
