import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Code2, Smartphone, Layers,
  TrendingUp, Lock, DollarSign, AlertTriangle, Camera, Users,
  MessageSquare, FileText, Hammer, GraduationCap, LifeBuoy,
  ClipboardList, Package, ScanLine, Printer, Truck, ShieldCheck, BarChart3,
} from "lucide-react";
import { setPageMeta } from "../metadata";
import { trackEvent } from "../lib/analytics";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

// The three things we hear most about the big-name platforms, plus the one that
// sends people looking for something custom in the first place.
const painPoints = [
  { icon: TrendingUp, heading: "The price went up again", body: "Same software as last year. Bigger invoice." },
  { icon: Lock, heading: "You're locked in", body: "A contract you can't leave and data you can't take with you." },
  { icon: DollarSign, heading: "The up-front cost is brutal", body: "Setup fees and onboarding charges before it's done anything for you." },
  { icon: AlertTriangle, heading: "And it still almost fits", body: "So your team works around it every day." },
];

const whatWeBuild = [
  {
    icon: Code2,
    label: "Custom web apps & internal tools",
    body: "Job trackers, inventory, scheduling, dispatch boards, customer portals. Runs in a browser, works on a phone, nothing to install.",
    examples: ["Job & work order tracking", "Inventory and parts", "Scheduling & dispatch", "Customer portals"],
  },
  {
    icon: Smartphone,
    label: "Mobile apps",
    body: "iOS and Android, for the work that happens on the truck or on site: scanning, photos, checklists, sign-offs.",
    examples: ["Barcode & QR scanning", "Photo capture tied to jobs", "Checklists & inspections", "Signatures & sign-off"],
  },
  {
    icon: Layers,
    label: "Nexus Field, configured to you",
    body: "If what you need is field service management, our own platform set up around your terminology, job types, and parts is usually the fastest route.",
    examples: ["Your job types & terminology", "Your parts catalog", "Your trucks & techs", "No contract · price held for 2 years"],
    link: { to: "/nexus-field", label: "Explore Nexus Field" },
  },
];

const steps = [
  { icon: MessageSquare, n: "01", heading: "Tell us what you're handling", body: "A 30-minute call. Walk us through the process as it actually happens — who does what, where it breaks. Free." },
  { icon: FileText, n: "02", heading: "We write the scope", body: "A plain-English document: every screen, who uses it, what it does, what it costs. You approve it before anything gets built." },
  { icon: Hammer, n: "03", heading: "We build it in stages", body: "You see it working early and steer as we go — no six-month silence followed by a surprise." },
  { icon: GraduationCap, n: "04", heading: "We train your team", body: "Before go-live, not after. If something doesn't fit how they work, we fix it." },
  { icon: LifeBuoy, n: "05", heading: "We keep it running", body: "Hosting, updates, and changes as your business changes." },
];

const nexusFieldFeatures = [
  { icon: ClipboardList, label: "Jobs with full history & notes" },
  { icon: Camera, label: "Photos attached to every job" },
  { icon: CheckCircle2, label: "Surveys & inspections in the workflow" },
  { icon: Users, label: "Technician & truck management" },
  { icon: Package, label: "Parts inventory in every plan" },
];

const nexusInventoryFeatures = [
  { icon: ScanLine, label: "Scan in & out — phone camera or handheld scanner" },
  { icon: Printer, label: "Labels print straight to a Zebra printer" },
  { icon: Truck, label: "Per-truck stock caps; job-use vs. restock" },
  { icon: ShieldCheck, label: "Over-cap checkouts need a justification the manager reviews" },
  { icon: Users, label: "Six user roles, from warehouse to super admin" },
  { icon: BarChart3, label: "Scheduled audit reports, CSV import & export" },
];

export default function CustomApps() {
  useEffect(() => {
    setPageMeta("/custom-apps");
  }, []);

  const scopeCta = "/contact?interest=customapp";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Custom Software · Hampton Roads, VA</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              You know what you need handled.{" "}<br /><span className="text-amber-500">We build the tool.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed max-w-3xl mb-10">
              Most businesses run on a mix of spreadsheets, group texts, and an off-the-shelf app that does about 60% of the job. If you can describe the process, we can build the app that runs it — in the browser, on the phone, or both.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to={scopeCta} onClick={() => trackEvent("click", "Custom Apps", "Hero Scope CTA")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Scope My App — Free <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#built"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                See What We've Built <ChevronRight className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sound familiar? */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Sound Familiar?</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">
              What we hear from businesses{" "}<br /><span className="text-amber-500">on the big-name platforms</span>
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800">
            {painPoints.map(({ icon: Icon, heading, body }) => (
              <motion.div key={heading} variants={fadeUp}
                className="bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <Icon className="h-6 w-6 text-amber-500 mb-6" />
                <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-wider text-white mb-2 group-hover:text-amber-400 transition-colors">{heading}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">What We Build</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">
              Built around the work,{" "}<br /><span className="text-amber-500">not the other way around</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid lg:grid-cols-3 gap-px bg-zinc-800">
            {whatWeBuild.map(({ icon: Icon, label, body, examples, link }) => (
              <motion.div key={label} variants={fadeUp}
                className="bg-zinc-950 p-8 flex flex-col group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <Icon className="h-6 w-6 text-amber-500 mb-6" />
                <h3 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{label}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6">{body}</p>
                <ul className="space-y-2 mb-6">
                  {examples.map((e) => (
                    <li key={e} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="font-['DM_Sans'] text-sm text-zinc-400">{e}</span>
                    </li>
                  ))}
                </ul>
                {link && (
                  <Link to={link.to} className="mt-auto font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                    {link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-900 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">How It Works</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">From "here's what we deal with" to a tool your team uses</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-800">
            {steps.map(({ icon: Icon, n, heading, body }) => (
              <motion.div key={n} variants={fadeUp}
                className="bg-zinc-900 p-7 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/20 group-hover:text-amber-500/50 transition-colors">{n}</span>
                  <Icon className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{heading}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we've built */}
      <section id="built" className="bg-zinc-950 py-24 border-b border-border scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">What We've Built</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white">
              Real software.{" "}<br /><span className="text-amber-500">Running real businesses.</span>
            </h2>
            <p className="font-['DM_Sans'] text-zinc-500 mt-4 max-w-2xl leading-relaxed">
              Both built and run by WaveNexus — the same team you'd be working with.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-px bg-zinc-800">
            {/* Nexus Field */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="bg-zinc-950 p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400">Field Service Management · Live</span>
              </div>
              <h3 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-3">Nexus Field</h3>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed mb-6">
                Field service management for HVAC, plumbing, electrical and contracting companies. Built because the apps out there were either too expensive, too complicated, or made by people who've never dispatched a tech.
              </p>
              <ul className="space-y-2.5 mb-8">
                {nexusFieldFeatures.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-['DM_Sans'] text-sm text-zinc-300">{label}</span>
                  </li>
                ))}
              </ul>
              <Link to="/nexus-field" onClick={() => trackEvent("click", "Custom Apps", "Nexus Field")}
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors self-start">
                Explore Nexus Field <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Nexus Inventory */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="bg-zinc-950 p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400">Parts Inventory · Warehouse + Truck</span>
              </div>
              <h3 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-3">Nexus Inventory</h3>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed mb-6">
                A standalone parts-inventory system built mobile-first for the warehouse and the truck. It closes the gap between "we ordered it" and "where did it go" — and the tech is never stuck waiting mid-job.
              </p>
              <ul className="space-y-2.5 mb-8">
                {nexusInventoryFeatures.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-['DM_Sans'] text-sm text-zinc-300">{label}</span>
                  </li>
                ))}
              </ul>
              <Link to={scopeCta} onClick={() => trackEvent("click", "Custom Apps", "Nexus Inventory Ask")}
                className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all self-start">
                Ask About Nexus Inventory
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built by someone who gets it */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid sm:grid-cols-2 gap-10 items-center border border-amber-500/20 bg-zinc-950 p-10">
            <div>
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400 block mb-4">Built By</span>
              <h3 className="font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-3">Made by someone who gets it</h3>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed">
                Marine Corps veteran-owned. We built our own software because the tools out there didn't fit how real businesses work — so we know what it's like to be on your side of the table.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-zinc-800">
              {[
                { heading: "No bloat", body: "Only screens that solve real problems" },
                { heading: "Built for the field", body: "Designed for real working conditions" },
                { heading: "You own the outcome", body: "A written scope, and a team you can call" },
              ].map(({ heading, body }) => (
                <div key={heading} className="bg-zinc-900 p-4">
                  <p className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm">{heading}</p>
                  <p className="font-['DM_Sans'] text-xs text-zinc-600 mt-0.5">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Start Here</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase leading-[0.9] text-zinc-950">
                Tell us what you're trying to handle.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-['DM_Sans'] text-zinc-950/70 leading-relaxed">
                No pitch. A free scoping call, then a written scope you can say no to.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={scopeCta} onClick={() => trackEvent("click", "Custom Apps", "Bottom Scope CTA")}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Scope My App <ArrowRight className="h-5 w-5" />
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
