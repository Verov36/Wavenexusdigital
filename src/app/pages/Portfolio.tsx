import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolio } from "../lib/constants";
import { trackEvent } from "../lib/analytics";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

export default function Portfolio() {
  useEffect(() => {
    setPageMeta("Portfolio — Web Design Work | Hampton Roads VA",
      "Real projects from WaveNexus Digital Invest — a veteran-owned web design company in Hampton Roads, VA. See our work for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.");
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
