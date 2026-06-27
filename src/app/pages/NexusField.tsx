import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { setPageMeta } from "../metadata";
import {
  ArrowRight, Package, Truck, Users, ClipboardList, Camera,
  SlidersHorizontal, Wrench, CheckCircle2, Shield, Zap,
  LayoutDashboard, Star, ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const industries = [
  "HVAC", "Plumbing", "Electrical", "Landscaping",
  "General Contracting", "Appliance Repair", "Security Systems",
  "Pest Control", "Roofing", "Pool & Spa Service",
];

const features = [
  {
    icon: ClipboardList,
    title: "Job Tracking & Notes",
    description:
      "Each job has its own page — tech notes, customer info, status updates, and a running timeline of everything that happened. You'll always know where a job stands and what was done.",
  },
  {
    icon: Camera,
    title: "Photo Database",
    description:
      "Photos get attached to the job, not lost in a group text or someone's camera roll. Before, during, after — it's all there and searchable when you need it.",
  },
  {
    icon: ClipboardList,
    title: "Surveys & Inspections",
    description:
      "If the job needs a site survey or an inspection checklist, it's part of the workflow — not a separate form or clipboard. Techs fill it out on-site and it stays with the job record.",
  },
  {
    icon: SlidersHorizontal,
    title: "We Set It Up for You",
    description:
      "We don't hand you a login and wish you luck. We learn how your business runs and configure Nexus Field around that. If something needs to change, we change it.",
    badge: "Built to Suit",
  },
  {
    icon: Wrench,
    title: "Technician Management",
    description:
      "See who's assigned to what, track job progress, and manage truck assignments from one place. Less time chasing updates, more time running the business.",
  },
  {
    icon: Users,
    title: "Everything Tied to the Customer",
    description:
      "Before you even say hello, you can pull up a customer's full history — past jobs, photos, notes, parts used. It makes every call go smoother.",
  },
];

const steps = [
  {
    num: "01",
    title: "Tell us how you work",
    desc: "We ask about your dispatch process, your job types, how you handle parts, and what's currently frustrating your team. The more we understand, the better the setup.",
  },
  {
    num: "02",
    title: "We set it up around your operation",
    desc: "We configure the app using your terminology, your job types, your parts catalog. When your team logs in for the first time, it shouldn't feel foreign.",
  },
  {
    num: "03",
    title: "We walk everyone through it",
    desc: "We get your techs and dispatchers comfortable with the app before you go live. And we stick around after — if something isn't working, we fix it.",
  },
];

export default function NexusField() {
  useEffect(() => {
    setPageMeta(
      "Nexus Field — Field Service Management Software",
      "Nexus Field is field service management software built for HVAC, plumbing, electrical, and contracting companies. Free parts inventory tracking, job tracking, photo database, and survey tools — configured around how your team works."
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1d4ed8_0%,_transparent_60%)] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1e3a5f_0%,_transparent_60%)] opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8">
              <LayoutDashboard className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-bold text-blue-200">Field Service Management Software</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-blue-400">Nexus Field</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-slate-200 mb-6">
              Field service software that works the way your team does.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto">
              We built Nexus Field because the apps already out there were either too expensive, too complicated, or clearly designed by someone who's never run a service crew. This one tracks your jobs, your parts, your photos, and your techs — and we set it up around how you already operate, not the other way around.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-10">
                  Talk to Us First
                </Button>
              </Link>
            </div>

            {/* Industry pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {industries.map((i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-slate-300 text-sm font-semibold px-4 py-1.5 rounded-full">
                  {i}
                </span>
              ))}
            </div>

            {/* Hero split photos */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl sm:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Field service manager reviewing jobs on tablet"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1657664066042-c59e5f84b7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Field service technician on the job"
                  className="w-full h-56 object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parts Inventory — Star Feature */}
      <section className="bg-slate-800 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-4 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-green-300 uppercase tracking-wider">Included Free in Every Plan</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Parts Inventory Management
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Most apps charge extra for inventory — or bury it behind an upgrade. We think that's backwards. Parts tracking is too important to be a premium feature, so we made it free.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left — feature breakdown */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-5">
              {[
                {
                  icon: Package,
                  title: "Warehouse Stock",
                  desc: "Keep a running count of everything in your warehouse — quantities, locations, and alerts when you're running low. No more guessing what you have before sending a tech out.",
                },
                {
                  icon: Truck,
                  title: "Truck-Level Inventory",
                  desc: "Each truck gets its own parts list. You'll always know what's stocked on which vehicle, and you'll get a heads-up when something's running low.",
                },
                {
                  icon: Users,
                  title: "Technician Accountability",
                  desc: "Trucks are assigned to techs, so when a part comes off a truck for a job, it's logged. You'll know who used what, on which job, every time.",
                },
                {
                  icon: ClipboardList,
                  title: "Parts Used Per Job",
                  desc: "Every job shows exactly what parts were pulled for it. Great for billing, for spotting waste, and for knowing your true cost per call.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp}>
                  <div className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/40 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 border border-blue-500/30 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-black text-white mb-1">{title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right — stats + callout */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Warehouse SKUs", value: "Unlimited", sub: "Full parts catalog" },
                  { label: "Fleet Vehicles", value: "All Trucks", sub: "Per-vehicle manifest" },
                  { label: "Tech Assignment", value: "Built-In", sub: "Truck-to-tech mapping" },
                  { label: "Inventory Cost", value: "$0", sub: "Free in every plan" },
                ].map((s) => (
                  <div key={s.label} className="bg-slate-900/80 border border-white/10 rounded-xl p-6 text-center">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{s.label}</p>
                    <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                    <p className="text-xs text-slate-500">{s.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-900/60 to-slate-800/80 border-2 border-blue-500/30 rounded-2xl p-8">
                <Star className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-3">The real cost of not tracking parts</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Most field service companies have a parts problem they don't fully see. Parts leave trucks without a job attached. Warehouse stock slowly disappears. At the end of the month, the numbers don't add up and nobody knows why.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Nexus Field connects parts to jobs from the start. When something gets used, it's recorded. When stock is low, you find out before it's a problem. When the job closes, you know exactly what it cost.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-3">What's Included</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Everything in one place, nothing you don't need</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We built this from conversations with people who run field service companies — not from a list of features that sounded good in a pitch deck.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="h-full bg-white/5 border-2 border-white/10 hover:border-blue-500/40 transition-all group">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                        <f.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      {f.badge && (
                        <span className="text-xs font-black uppercase tracking-wider bg-blue-600/30 border border-blue-400/40 text-blue-300 px-2 py-1 rounded-full">
                          {f.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-black text-white mb-3 group-hover:text-blue-300 transition">{f.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-800 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-3">Getting Started</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How We Onboard You</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              No generic setup wizard. We configure Nexus Field around your actual operation.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {steps.map((step, idx) => (
              <motion.div key={step.num} variants={fadeUp}>
                <div className="flex gap-6 items-start bg-white/5 border border-white/10 hover:border-blue-500/30 rounded-2xl p-7 transition-all">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <ChevronRight className="h-6 w-6 text-slate-600 self-center ml-auto flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Veteran-Built Angle */}
      <section className="bg-slate-900 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Plumber working on the job"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1568918460973-fe7f54f82482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Person reviewing job on tablet"
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Made by someone who gets it
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              WaveNexus is veteran-owned — Marine Corps background. We didn't build Nexus Field to check a box or add a product line. We built it because service businesses kept telling us the same thing: the existing apps don't fit how we work. So we made one that does.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: "No bloat", sub: "We only build features that solve real problems — not features that look good in a demo" },
                { icon: Zap, label: "Works in the field", sub: "Designed for the conditions techs actually work in, not ideal office Wi-Fi" },
                { icon: Users, label: "Clear accountability", sub: "Everyone knows what they own — jobs, parts, customer history" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                  <Icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <p className="font-black text-white mb-1">{label}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Want to see how it'd work for your team?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              We'll walk you through it based on how your business actually runs — not a generic demo with fake data. Just tell us a little about your operation and we'll take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-10">
                  Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 font-bold text-lg px-10">
                  Contact Us First
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
