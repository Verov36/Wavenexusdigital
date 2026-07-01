import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Package, Truck, Users, ClipboardList, Camera, SlidersHorizontal, Wrench, Shield, Zap, ChevronRight } from "lucide-react";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: ClipboardList, title: "Job Tracking & Notes", body: "Every job has its own page — status, tech notes, customer info, and a full activity timeline. You always know where things stand." },
  { icon: Camera, title: "Photo Database", body: "Photos attach to the job automatically. Before, during, after — searchable when you need them, not buried in someone's camera roll." },
  { icon: ClipboardList, title: "Surveys & Inspections", body: "When a job needs a site survey or checklist, it's built into the workflow — not a separate clipboard. It stays with the job record." },
  { icon: SlidersHorizontal, title: "Built to Suit", body: "We configure the app around how your business actually operates. When your team logs in, it shouldn't feel foreign.", badge: "Custom" },
  { icon: Wrench, title: "Technician Management", body: "See who's on what, track job progress, manage trucks. Less time chasing updates, more time running the business." },
  { icon: Users, title: "Customer-First Records", body: "Before you even say hello, pull up a customer's full history — past jobs, photos, parts used, notes. Every call goes smoother." },
];

const steps = [
  { n: "01", title: "Tell us how you work", body: "We ask about your dispatch flow, job types, parts setup, and what's currently frustrating your team." },
  { n: "02", title: "We configure it for you", body: "Your terminology, your job types, your parts catalog. When your team logs in for the first time, it shouldn't feel foreign." },
  { n: "03", title: "We walk everyone through it", body: "We train your techs and dispatchers before go-live. If something isn't working after launch, we fix it." },
];

export default function NexusField() {
  useEffect(() => {
    setPageMeta("Nexus Field — Field Service Management Software",
      "Nexus Field is field service management software for HVAC, plumbing, electrical, and contracting companies. Free parts inventory, job tracking, photo database, and survey tools — configured around your team.");
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-zinc-950 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640622300362-573446a17973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Field Service Management Software</span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="font-['Barlow_Condensed'] font-900 text-7xl sm:text-8xl lg:text-[9rem] uppercase leading-[0.85] text-white">
                Nexus
              </h1>
              <h1 className="font-['Barlow_Condensed'] font-900 text-7xl sm:text-8xl lg:text-[9rem] uppercase leading-[0.85] text-amber-500">
                Field
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-300 mt-8 mb-4 leading-relaxed max-w-xl">
              Field service software that works the way your team does.
            </motion.p>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-zinc-500 leading-relaxed mb-10 max-w-xl">
              We built this because the apps out there were either too expensive, too complicated, or made by people who've never dispatched a tech. Parts, jobs, photos, surveys — all in one place, set up around how you already work.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Request a Demo <ArrowRight className="h-5 w-5" />
              </a>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                Talk to Us First
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-2">
              {["HVAC", "Plumbing", "Electrical", "Landscaping", "General Contracting", "Appliance Repair", "Security Systems", "Pest Control"].map(i => (
                <span key={i} className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-3 py-1.5">{i}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PARTS INVENTORY — STAR FEATURE ── */}
      <section className="bg-zinc-900 py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 bg-amber-500/10">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-400">Included Free in Every Plan</span>
            </span>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9]">
              Parts Inventory<br /><span className="text-amber-500">Management</span>
            </h2>
            <div className="w-16 h-[2px] bg-amber-500 mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-px">
              {[
                { icon: Package, title: "Warehouse Stock", body: "Full catalog of everything in your warehouse — quantities, locations, and low-stock alerts before a tech even asks." },
                { icon: Truck, title: "Truck-Level Inventory", body: "Each truck has its own parts list. Know what's on every vehicle and get notified when stock runs low." },
                { icon: Users, title: "Technician Accountability", body: "Trucks are assigned to techs. When a part comes off for a job, it's logged — you know who used what, every time." },
                { icon: ClipboardList, title: "Parts Used Per Job", body: "Every job shows exactly what was pulled. Great for billing, catching waste, and knowing your true cost per call." },
              ].map(({ icon: Icon, title, body }) => (
                <motion.div key={title} variants={fadeUp}
                  className="flex gap-5 bg-zinc-950 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                  <div className="flex-shrink-0 w-10 h-10 border border-amber-500/30 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white mb-1 group-hover:text-amber-400 transition-colors">{title}</h3>
                    <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }} className="space-y-px">
              <div className="grid grid-cols-2 gap-px bg-zinc-800 mb-px">
                {[
                  { label: "Warehouse SKUs", val: "Unlimited" },
                  { label: "Fleet Vehicles", val: "All Trucks" },
                  { label: "Tech Assignment", val: "Built-In" },
                  { label: "Inventory Cost", val: "$0" },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-zinc-900 p-6 text-center">
                    <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-2">{label}</p>
                    <p className="font-['Barlow_Condensed'] font-900 text-3xl text-amber-500 uppercase">{val}</p>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 border border-amber-500/20 p-8">
                <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-4">The real cost of not tracking parts</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed mb-4">
                  Parts leave trucks without a job attached. Warehouse stock slowly disappears. At the end of the month the numbers don't add up and nobody knows why.
                </p>
                <p className="font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                  Nexus Field connects parts to jobs from the start. When something gets used, it's recorded. When stock is low, you know before it's a problem.
                </p>
              </div>

              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Field service technician on the job" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ALL FEATURES ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">What's Included</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">
              Everything in one place.<br /><span className="text-amber-500">Nothing you don't need.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {features.map(({ icon: Icon, title, body, badge }) => (
              <motion.div key={title} variants={fadeUp}
                className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    <Icon className="h-5 w-5 text-zinc-500 group-hover:text-amber-500 transition-colors" />
                  </div>
                  {badge && <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-400 border border-amber-500/30 px-2 py-1">{badge}</span>}
                </div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE ONBOARD ── */}
      <section className="bg-zinc-900 py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Getting Started</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white">How We Onboard You</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-px">
            {steps.map(({ n, title, body }) => (
              <motion.div key={n} variants={fadeUp}
                className="flex gap-8 items-start bg-zinc-950 p-8 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                <div className="flex-shrink-0 font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/30 group-hover:text-amber-500 transition-colors leading-none">{n}</div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-wider text-white mb-2 group-hover:text-amber-400 transition-colors">{title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VETERAN ANGLE ── */}
      <section className="bg-zinc-950 py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Built By</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white mb-6">
                Made by someone<br /><span className="text-amber-500">who gets it</span>
              </h2>
              <p className="font-['DM_Sans'] text-zinc-400 leading-relaxed mb-4">
                WaveNexus is Marine Corps veteran-owned. We didn't build Nexus Field to check a box — we built it because field service businesses kept telling us the same thing: the existing apps don't fit how we work.
              </p>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed">
                So we made one that does. No bloat, no features that only look good in a demo, no charging extra for the basics.
              </p>
            </div>
            <div className="space-y-px">
              {[
                { icon: Shield, label: "No Bloat", sub: "Only features that solve real problems" },
                { icon: Zap, label: "Works in the Field", sub: "Designed for real working conditions" },
                { icon: Users, label: "Clear Accountability", sub: "Everyone owns their jobs, parts, outcomes" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-5 bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                  <Icon className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">{label}</p>
                    <p className="font-['DM_Sans'] text-xs text-zinc-600">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4">Request a Demo</p>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-zinc-950 mb-4">
              Want to see how it'd work for your team?
            </h2>
            <p className="font-['DM_Sans'] text-zinc-950/70 mb-10 max-w-xl mx-auto">
              We'll walk you through it based on how your business actually runs — not a generic demo with fake data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-zinc-900 transition-colors">
                Request a Demo <ArrowRight className="h-5 w-5" />
              </a>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:bg-zinc-950 hover:text-amber-500 transition-all">
                Contact Us First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
