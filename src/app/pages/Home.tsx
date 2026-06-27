import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Award, Globe, Search, Palette, Zap,
  Package, Camera, ClipboardList, Shield, CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { portfolio } from "../lib/constants";
import { trackEvent } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1760192465389-f0b1f9b6abd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-bold text-blue-100">Proudly Veteran-Owned & Operated — Hampton Roads, VA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Websites, SEO &amp; Field Service Software
              <span className="block text-blue-400 mt-2">from a Team That Actually Cares</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl">
              We're a small, veteran-owned team based in Hampton Roads. We build websites that bring in real leads, help local businesses show up on Google, and make field service software that actually fits the way your team works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/nexus-field">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 w-full sm:w-auto">
                  Explore Nexus Field <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>

            <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "8+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "USMC", label: "Veteran Led" },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <div className="text-3xl font-black text-blue-300">{s.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nexus Field Spotlight */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-blue-200">SaaS Product — Now Available</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
                Meet <span className="text-blue-400">Nexus Field</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We built this because we couldn't find a field service app that wasn't overpriced, bloated, or clearly made by people who've never dispatched a tech. Nexus Field keeps jobs organized, photos attached, and parts accounted for — without charging you extra for the basics. Parts inventory is <span className="text-white font-bold">included free.</span>
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Parts inventory free — track warehouse stock and what's on each truck",
                  "See which tech used which parts on which job",
                  "Job notes and photos stay attached to the job, always",
                  "Surveys and inspections built right into the workflow",
                  "We configure it around how you actually work",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/nexus-field">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                    See All Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold px-8">
                    Request a Demo
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Package, title: "Parts Inventory", desc: "Warehouse & truck-level tracking, free in every plan", highlight: true },
                  { icon: ClipboardList, title: "Job Tracking", desc: "Full job history, notes, and status in real time", highlight: false },
                  { icon: Camera, title: "Photo Database", desc: "Before/after photos organized by job automatically", highlight: false },
                  { icon: Zap, title: "Built to Suit", desc: "Customized to your workflow in real time", highlight: false },
                ].map(({ icon: Icon, title, desc, highlight }) => (
                  <Card
                    key={title}
                    className={`border-2 transition-all ${
                      highlight
                        ? "border-blue-500 bg-blue-600/20"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <CardContent className="p-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${highlight ? "bg-blue-500" : "bg-white/10"}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {highlight && (
                        <span className="text-xs font-black text-green-400 uppercase tracking-wider block mb-1">Free</span>
                      )}
                      <h3 className="font-black text-white text-sm mb-1">{title}</h3>
                      <p className="text-xs text-slate-400 leading-snug">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-4 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1640622300362-573446a17973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Field service technician using tablet on the job"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Built For</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["HVAC", "Plumbing", "Electrical", "Landscaping", "Contracting"].map((i) => (
                    <span key={i} className="text-xs bg-white/10 text-slate-300 px-3 py-1 rounded-full font-semibold">{i}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Digital Agency</p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">What We Do for Local Businesses</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We're not a big agency. We work with a small number of clients so we can actually pay attention to each one.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Most of our clients are local service businesses and small companies in Hampton Roads who needed a real website, better Google visibility, or both — and got tired of being treated like a number.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team working on web design and digital marketing"
                  className="w-full h-72 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: Globe, title: "Website Development", desc: "Good-looking sites that work on phones, load fast, and actually bring in inquiries." },
              { icon: Search, title: "SEO & AI Search", desc: "We help you show up when locals search for what you do — on Google and AI tools like ChatGPT." },
              { icon: Palette, title: "Branding & Logos", desc: "A logo and visual identity that makes your business look like it belongs at the top." },
              { icon: Zap, title: "Digital Strategy", desc: "Not sure where to start? We'll figure out what makes the most sense for your situation." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="h-full border-2 border-slate-200 hover:border-blue-400 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Our Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Real Projects, Real Results</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8 mb-10">
            {portfolio.filter((p) => p.name !== "Dizon Digital Media").map((item) => (
              <motion.div key={item.name} variants={fadeUp}>
                <a
                  href={item.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click", "Portfolio", item.name)}
                  className="block group"
                >
                  <Card className="border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-5">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-xs font-black uppercase tracking-wider text-blue-600 mb-2">{item.category}</p>
                      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition">{item.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.text}</p>
                      <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Project <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Let's figure out what you actually need.</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              No pitch calls, no packages you don't need. Start with a free audit and we'll give you an honest look at where you stand and what would actually help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10">
                  Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold px-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
