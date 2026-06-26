import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { setPageMeta } from "../metadata";
import {
  Globe, Search, Palette, TrendingUp, ArrowRight,
  CheckCircle2, MessageSquare, Users, BarChart3,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

const services = [
  {
    icon: Globe,
    label: "Website Development",
    outcome: "You get a website that actually brings in inquiries — not just one that looks nice.",
    forWho: "If you're sending people to a site you're embarrassed to share, or you don't have one at all, this is where to start. A good website is still the single best thing most local businesses can do for their online presence.",
    results: [
      {
        heading: "People can find you",
        body: "We build with local SEO in mind from the first line of code, so when someone in your area searches for what you do, your site has a real shot at showing up.",
      },
      {
        heading: "It works on every phone",
        body: "Most of your visitors are on mobile. We design for that first, so nothing looks broken or hard to use on a small screen.",
      },
      {
        heading: "It's easy to contact you",
        body: "Clear calls to action, a form that works, a phone number that's easy to tap. The path from 'interested' to 'reached out' should be frictionless.",
      },
      {
        heading: "You feel good sharing it",
        body: "This sounds small but it matters. When you're proud of your site, you mention it more, share it more, and that adds up.",
      },
    ],
    accent: "blue",
    bg: "bg-white",
  },
  {
    icon: Search,
    label: "SEO & AI Search Optimization",
    outcome: "You show up when people in Hampton Roads search for what you do — on Google and on AI tools like ChatGPT.",
    forWho: "If your competitors consistently appear above you in search results, or if you've never really thought about SEO at all, this is the long game that pays off. It takes time, but it compounds.",
    results: [
      {
        heading: "More calls from people actively looking",
        body: "SEO brings in people who are already searching for your service — not people you have to interrupt. That's a fundamentally better lead.",
      },
      {
        heading: "You show up in AI answers too",
        body: "More people are asking ChatGPT, Perplexity, and Google's AI overviews for local recommendations. We optimize for those, not just traditional search.",
      },
      {
        heading: "You understand what's working",
        body: "Monthly reports that actually make sense — what's improving, where traffic is coming from, and what we're focused on next.",
      },
      {
        heading: "You stop losing ground to competitors",
        body: "If you're not investing in SEO, someone else is. We help you catch up and eventually get ahead.",
      },
    ],
    accent: "indigo",
    bg: "bg-slate-50",
  },
  {
    icon: Palette,
    label: "Branding & Logo Design",
    outcome: "Your business looks like it belongs at the top of its market — before a customer ever speaks to you.",
    forWho: "First impressions happen fast. If your logo is dated, inconsistent, or just something you threw together to get started, it's quietly costing you credibility. A strong visual identity fixes that.",
    results: [
      {
        heading: "You look like a real, established business",
        body: "A polished logo and consistent brand signal that you take your work seriously — and that makes customers more comfortable hiring you.",
      },
      {
        heading: "Everything matches everywhere",
        body: "Your website, truck wrap, business cards, and social profiles all looking consistent is more powerful than any single piece alone.",
      },
      {
        heading: "You stop starting from scratch",
        body: "With a brand guide in hand, you or anyone you work with knows exactly what colors, fonts, and style to use. No more guessing.",
      },
      {
        heading: "You actually want to use it",
        body: "We're not done until you're genuinely proud of it. That matters — brands you believe in get used more.",
      },
    ],
    accent: "violet",
    bg: "bg-white",
  },
  {
    icon: TrendingUp,
    label: "Social Media Management",
    outcome: "Your business stays visible and top-of-mind without you having to think about it every week.",
    forWho: "You know you should be posting. It's always on the list. But running a business takes everything you've got, and social media keeps falling to the bottom. We take it off your plate entirely.",
    results: [
      {
        heading: "Consistent presence without the time drain",
        body: "We handle the content calendar, creation, and posting. You stay visible to your audience without having to write a single caption.",
      },
      {
        heading: "Content that actually sounds like you",
        body: "We take time to understand your business and your voice before we write a word. Nothing generic, nothing that could belong to any company.",
      },
      {
        heading: "People remember you when they need you",
        body: "Most people won't need your service the day they see your post — but they'll remember you when they do. Consistency builds that recall.",
      },
      {
        heading: "You stay focused on the work",
        body: "Your time is better spent running your business. We handle the part that keeps it growing online.",
      },
    ],
    accent: "blue",
    bg: "bg-slate-50",
  },
];

const accentText: Record<string, string> = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
};

const accentBg: Record<string, string> = {
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  violet: "bg-violet-600",
};

const accentBorder: Record<string, string> = {
  blue: "border-blue-200 bg-blue-50",
  indigo: "border-indigo-200 bg-indigo-50",
  violet: "border-violet-200 bg-violet-50",
};

const accentCheck: Record<string, string> = {
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
};

export default function Services() {
  useEffect(() => {
    setPageMeta(
      "Web Design, Local SEO & Digital Marketing Services Near Me — Hampton Roads VA",
      "Looking for a local marketing team near you in Hampton Roads VA? WaveNexus Digital Invest offers website design, local SEO, AI SEO, branding, and social media management for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News."
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Services that actually make a difference
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              We keep it to the things we're genuinely good at — websites, SEO, branding, and social media. Every service below is described by what it changes for your business, not just what it includes.
            </p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                Talk to Us About Your Business <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <section key={service.label} className={`py-20 lg:py-28 ${service.bg}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left — text */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 ${accentBg[service.accent]} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <p className={`text-sm font-black uppercase tracking-wider ${accentText[service.accent]} mb-3`}>
                    {service.label}
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-snug">
                    {service.outcome}
                  </h2>

                  <div className={`border-l-4 border-${service.accent}-400 pl-5 mb-8`}>
                    <p className="text-slate-600 leading-relaxed italic">
                      {service.forWho}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button className={`${accentBg[service.accent]} hover:opacity-90 text-white font-bold px-8`}>
                      Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Right — outcome cards */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                    {service.results.map((result) => (
                      <motion.div key={result.heading} variants={fadeUp}>
                        <div className={`rounded-xl border p-5 ${accentBorder[service.accent]}`}>
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className={`h-5 w-5 ${accentCheck[service.accent]} flex-shrink-0 mt-0.5`} />
                            <div>
                              <p className="font-black text-slate-900 mb-1">{result.heading}</p>
                              <p className="text-sm text-slate-600 leading-relaxed">{result.body}</p>
                            </div>
                          </div>
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

      {/* How We Quote */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">How we figure out what you need</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We don't have a menu you pick from. Every quote starts with a conversation about your situation — then we put together something specific.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MessageSquare,
                step: "01",
                heading: "You tell us where things stand",
                body: "What do you have now, what's not working, and what's the outcome you're after? That conversation shapes everything.",
              },
              {
                icon: Users,
                step: "02",
                heading: "We figure out what actually fits",
                body: "Not every business needs the same thing. We'll be straight with you about what would help and what you'd be wasting money on.",
              },
              {
                icon: BarChart3,
                step: "03",
                heading: "You get a clear proposal",
                body: "Scope, timeline, and cost — no vague estimates. You know exactly what you're getting before you commit to anything.",
              },
            ].map(({ icon: Icon, step, heading, body }) => (
              <motion.div key={step} variants={fadeUp}>
                <Card className="border-2 border-slate-200 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Step {step}</span>
                    </div>
                    <h3 className="font-black text-slate-900 mb-2">{heading}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10">
                Start with a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-slate-400 mt-3">No commitment. Just an honest look at where you stand.</p>
          </div>
        </div>
      </section>

      {/* Nexus Field Cross-sell */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Card className="bg-gradient-to-br from-blue-900/60 to-slate-800 border-2 border-blue-500/30">
              <CardContent className="p-10">
                <div className="grid sm:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-3 py-1 mb-4">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-blue-300">We also build software</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3">
                      Running a field service company?
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      Nexus Field is our field service management app — job tracking, photo documentation, and parts inventory (free) built for the way service teams actually work.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/nexus-field">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                        Learn About Nexus Field <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold">
                        Request a Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
