import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { setPageMeta } from "../metadata";
import veteranImage1 from "../../imports/1st_vet_image.png";
import veteranImage2 from "../../imports/2nd_vet_logo.png";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

export default function About() {
  useEffect(() => {
    setPageMeta("About — Veteran-Owned Web Design | Hampton Roads VA",
      "WaveNexus Digital Invest is a veteran-owned web design and digital marketing company in Hampton Roads, VA. Marine Corps veteran founded, serving Suffolk, Virginia Beach, Chesapeake, and Newport News.",
      "/about");
  }, []);

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
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Story</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              Small Team.<br /><span className="text-amber-500">Serious Work.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">
              Marine Corps veteran-owned digital agency and SaaS company based in Hampton Roads, VA. We'd rather do great work for a few clients than mediocre work for many.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Veteran badges */}
      <section className="bg-zinc-900 py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-px bg-zinc-800 max-w-xl mx-auto">
            <div className="bg-zinc-900 p-8 flex items-center justify-center w-full"><img src={veteranImage1} alt="Veteran Owned Business" className="max-h-28 w-auto" /></div>
            <div className="bg-zinc-900 p-8 flex items-center justify-center w-full"><img src={veteranImage2} alt="Marine Corps Veteran" className="max-h-28 w-auto" /></div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1773434013413-b2c56e94c5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Iwo Jima Memorial" className="w-full h-[480px] object-cover grayscale" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Mission</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white mb-8 leading-[0.9]">
                Why We<br /><span className="text-amber-500">Started This</span>
              </h2>
              <div className="space-y-5 font-['DM_Sans'] text-zinc-400 leading-relaxed">
                <p>Chris founded WaveNexus after leaving the <span className="text-white font-semibold">Marine Corps</span> and seeing how many good local businesses were getting left behind online — paying too much for agencies that didn't care, or just not knowing where to start.</p>
                <p>We build websites, handle SEO, and help businesses look the part online. We also built <span className="text-amber-400 font-semibold">Nexus Field</span> — our field service management app — because field service companies kept telling us the same thing: the software out there doesn't fit how we work.</p>
                <p>We're not trying to be everything to everyone. Just really good at what we do for the clients who trust us with it.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-900 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">How We Operate</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white">Our Values</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {[
              { n: "01", title: "We Finish What We Start", body: "Once we take a project, we see it through — no halfway handoffs." },
              { n: "02", title: "We're Honest With You", body: "If something won't work for your situation, we'll tell you." },
              { n: "03", title: "We Focus on What Moves the Needle", body: "Not every tactic is worth your money. We focus on what actually matters." },
              { n: "04", title: "We Sweat the Details", body: "The small stuff adds up — we care about getting things right, not just done." },
            ].map(({ n, title, body }) => (
              <motion.div key={n} variants={fadeUp}
                className="bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <div className="font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors mb-4 leading-none">{n}</div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Our Process</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white mb-8 leading-[0.9]">
                How We<br /><span className="text-amber-500">Work</span>
              </h2>
              <div className="space-y-px">
                {[
                  { n: "1", title: "We Listen First", body: "Before recommending anything, we want to understand what you're actually trying to accomplish." },
                  { n: "2", title: "We Make a Plan Together", body: "No surprise scope creep. We align on what we're building, why, and when." },
                  { n: "3", title: "We Build and Launch", body: "You stay in the loop. Nothing goes live until you're happy with it." },
                  { n: "4", title: "We Stick Around", body: "Questions after launch? Changes needed? We're not hard to reach." },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-5 items-start bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                    <div className="flex-shrink-0 font-['Barlow_Condensed'] font-900 text-2xl text-amber-500 w-6">{n}</div>
                    <div>
                      <p className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm group-hover:text-amber-400 transition-colors">{title}</p>
                      <p className="font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed mt-1">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team collaboration" className="w-full h-[440px] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service area CTA */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4">Service Area</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-zinc-950 leading-[0.9]">
                Proudly Serving<br />Hampton Roads
              </h2>
            </div>
            <div>
              <p className="font-['DM_Sans'] text-zinc-950/70 mb-6 leading-relaxed">
                Suffolk · Virginia Beach · Chesapeake · Newport News · Hampton · Norfolk · Portsmouth · Williamsburg · York County · Isle of Wight
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/audit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Free Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
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
