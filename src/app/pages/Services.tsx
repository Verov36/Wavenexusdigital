import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Globe, Search, Palette, TrendingUp, ArrowRight, CheckCircle2, MessageSquare, Users, BarChart3 } from "lucide-react";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const services = [
  {
    icon: Globe,
    label: "Website Development",
    outcome: "You get a website that actually brings in inquiries — not just one that looks nice.",
    forWho: "If you're sending people to a site you're embarrassed to share, or you don't have one at all, this is where to start.",
    results: [
      { heading: "People can find you", body: "We build with local SEO in mind from the first line of code, so when someone searches for what you do in Hampton Roads, you show up." },
      { heading: "It works on every phone", body: "Most of your visitors are on mobile. We design for that first." },
      { heading: "The path to contact is frictionless", body: "Clear calls to action, a form that works, a phone number easy to tap." },
      { heading: "You feel good sharing it", body: "When you're proud of your site, you mention it more. That adds up." },
    ],
    photo: "https://images.unsplash.com/photo-1603195827187-459ab02554a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Web designer working with client",
  },
  {
    icon: Search,
    label: "SEO & AI Search Optimization",
    outcome: "You show up when people in Hampton Roads search for what you do — on Google and AI tools like ChatGPT.",
    forWho: "If your competitors consistently appear above you in search, or you've never really thought about SEO at all, this is the long game that pays off.",
    results: [
      { heading: "More calls from people actively looking", body: "SEO brings in people who are already searching — not people you have to interrupt." },
      { heading: "You show up in AI answers too", body: "More people ask ChatGPT and Perplexity for local recommendations. We optimize for those." },
      { heading: "Monthly reports that make sense", body: "What's improving, where traffic is coming from, what we're focused on next." },
      { heading: "You stop losing ground to competitors", body: "If you're not investing in SEO, someone else is. We help you catch up." },
    ],
    photo: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Business owner reviewing analytics on tablet",
  },
  {
    icon: Palette,
    label: "Branding & Logo Design",
    outcome: "Your business looks like it belongs at the top of its market — before a customer ever speaks to you.",
    forWho: "First impressions happen fast. If your logo is dated or something you threw together to get started, it's quietly costing you credibility.",
    results: [
      { heading: "You look like an established business", body: "A polished logo and consistent brand signal that you take your work seriously." },
      { heading: "Everything matches everywhere", body: "Website, truck wrap, business cards, social — all consistent. More powerful than any single piece alone." },
      { heading: "You stop starting from scratch", body: "With a brand guide in hand, you or anyone you work with knows exactly what to use." },
      { heading: "You actually want to use it", body: "We're not done until you're genuinely proud of it." },
    ],
    photo: "https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Designer working on brand identity",
  },
  {
    icon: TrendingUp,
    label: "Social Media Management",
    outcome: "Your business stays visible and top-of-mind without you having to think about it every week.",
    forWho: "You know you should be posting. It's always on the list. But running a business takes everything you've got, and social keeps falling to the bottom.",
    results: [
      { heading: "Consistent presence without the time drain", body: "We handle the calendar, creation, and posting. You stay visible without writing a caption." },
      { heading: "Content that sounds like you", body: "We take time to understand your voice before writing a word. Nothing generic." },
      { heading: "People remember you when they need you", body: "Most won't need your service the day they see your post. Consistency builds recall." },
      { heading: "You stay focused on the work", body: "Your time is better spent running your business. We handle the part that keeps it growing online." },
    ],
    photo: "https://images.unsplash.com/photo-1521633286323-05b17f47cb74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Person managing social media on tablet",
  },
];

export default function Services() {
  useEffect(() => {
    setPageMeta("Services — Web Design, SEO & Digital Marketing Near Me | Hampton Roads VA",
      "WaveNexus Digital Invest offers website design, local SEO, AI SEO, branding, and social media management for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News, VA.");
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
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">What We Offer</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              Services That<br /><span className="text-amber-500">Actually Work</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">
              We keep it to the things we're genuinely good at. Every service below is described by what it changes for your business, not just what it includes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, idx) => (
        <section key={service.label} className={`py-24 border-b border-border ${idx % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
              <div className={`grid lg:grid-cols-2 gap-16 items-start`}>
                {/* Text */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <service.icon className="h-5 w-5 text-amber-500" />
                    <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">{service.label}</span>
                  </div>
                  <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white mb-6 leading-[0.95]">{service.outcome}</h2>
                  <div className="border-l-2 border-amber-500 pl-5 mb-8">
                    <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed italic">{service.forWho}</p>
                  </div>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Results + photo */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden mb-px">
                    <img src={service.photo} alt={service.photoAlt}
                      className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-px">
                    {service.results.map(({ heading, body }) => (
                      <motion.div key={heading} variants={fadeUp}
                        className="flex gap-4 items-start bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                        <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm mb-0.5 group-hover:text-amber-400 transition-colors">{heading}</p>
                          <p className="font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed">{body}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* How we quote */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">How We Quote</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">How We Figure Out What You Need</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-px bg-zinc-800 mb-12">
            {[
              { icon: MessageSquare, n: "01", heading: "You tell us where things stand", body: "What you have, what's not working, and what you're after. That shapes everything." },
              { icon: Users, n: "02", heading: "We figure out what fits", body: "We'll be straight with you about what would help and what you'd be wasting money on." },
              { icon: BarChart3, n: "03", heading: "You get a clear proposal", body: "Scope, timeline, cost — no vague estimates. You know exactly what you're getting." },
            ].map(({ icon: Icon, n, heading, body }) => (
              <motion.div key={n} variants={fadeUp} className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500">
                <div className="font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/20 group-hover:text-amber-500/50 transition-colors mb-4">{n}</div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors">{heading}</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
              Start With a Free Audit <ArrowRight className="h-5 w-5" />
            </a>
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-700 mt-4">No commitment. Just an honest look at where you stand.</p>
          </motion.div>
        </div>
      </section>

      {/* Nexus Field cross-sell */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid sm:grid-cols-2 gap-10 items-center border border-amber-500/20 bg-zinc-950 p-10">
            <div>
              <span className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400">We Also Build Software</span>
              </span>
              <h3 className="font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-3">Running a field service company?</h3>
              <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed">Nexus Field is our field service management app — job tracking, photo documentation, and free parts inventory built for teams that actually work in the field.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/nexus-field"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                Learn About Nexus Field <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
                Request a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
