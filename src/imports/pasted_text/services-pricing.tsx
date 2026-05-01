import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Palette,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Star,
  ShieldCheck,
  LayoutDashboard,
  Workflow,
  BadgeDollarSign,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    text: "Modern, mobile-first websites built to convert visitors into leads and customers.",
  },
  {
    icon: Search,
    title: "SEO Setup",
    text: "Strong on-page structure, local SEO foundations, and better search visibility.",
  },
  {
    icon: Palette,
    title: "Branding & Logos",
    text: "Clean visual identity systems that make your business look premium and trustworthy.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth",
    text: "Marketing-focused design and messaging that help support long-term business growth.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$599",
    subtitle: "Perfect for new or local businesses",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 revision round",
    ],
    cta: "Start Small",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    subtitle: "Best for businesses ready to scale",
    features: [
      "5–7 custom pages",
      "Advanced design layout",
      "On-page SEO structure",
      "Lead capture forms",
      "Analytics setup",
      "3 revision rounds",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Premium",
    price: "$2,499+",
    subtitle: "Built for custom brand presence",
    features: [
      "Fully custom website",
      "Branding + logo package",
      "SEO + speed optimization",
      "Strategy consultation",
      "Priority support",
      "Expanded scope options",
    ],
    cta: "Go Premium",
    featured: false,
  },
];

const retainers = [
  { title: "Website Maintenance", price: "$99/mo", text: "Edits, updates, backups, and peace of mind." },
  { title: "SEO Management", price: "$300–$800/mo", text: "Ongoing optimization to improve rankings and visibility." },
  { title: "Social Media Management", price: "$400–$1,200/mo", text: "Content support, posting strategy, and audience growth." },
];

const process = [
  {
    title: "Discover",
    text: "We learn your business, your goals, and what your website needs to accomplish.",
  },
  {
    title: "Design",
    text: "We craft a clean visual direction that builds trust and reflects your brand.",
  },
  {
    title: "Build",
    text: "We create a fast, mobile-friendly site with strong structure and clear calls to action.",
  },
  {
    title: "Launch",
    text: "We optimize, test, and launch with a focus on lead generation and usability.",
  },
];

const portfolio = [
  {
    name: "Harbor Ridge HVAC",
    category: "Local Service Business",
    text: "Lead-driven redesign with service pages, quote form, and local SEO structure.",
  },
  {
    name: "Nova Edge Fitness",
    category: "Fitness Brand",
    text: "High-energy landing page with membership CTA and class scheduling flow.",
  },
  {
    name: "Blue Anchor Consulting",
    category: "Professional Services",
    text: "Authority-focused brand presentation with a premium booking experience.",
  },
];

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most starter and growth sites are completed in 1–3 weeks depending on content and revisions.",
  },
  {
    q: "Do you help with content?",
    a: "Yes. We can help structure and polish your website copy so it feels professional and conversion-focused.",
  },
  {
    q: "Can I request updates after launch?",
    a: "Absolutely. We offer monthly support plans for edits, maintenance, and performance improvements.",
  },
  {
    q: "Do you work with local businesses?",
    a: "Yes. WaveNexus Digital is built for local and service-based businesses that need a stronger online presence.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function WaveNexusLogo({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#3BAFDA" />
          <stop offset="100%" stopColor="#0A2540" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#waveGradient)" />
      <path d="M10 55 C 30 35, 70 75, 90 45" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
      <path d="M10 65 C 30 45, 70 85, 90 55" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

// Secondary Logo (Horizontal)
function WaveNexusLogoHorizontal({ className }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <WaveNexusLogo className="h-10 w-10" />
      <span className="text-white font-bold text-lg">WaveNexus Digital</span>
    </div>
  );
}

// Icon Only (for favicon / app icon)
function WaveNexusIcon({ className }) {
  return <WaveNexusLogo className={className} />;
}

// Light Version (for white backgrounds)
function WaveNexusLogoLight({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#waveGradientLight)" />
      <path d="M10 55 C 30 35, 70 75, 90 45" stroke="#000000" strokeWidth="4" fill="none" opacity="0.9" />
      <path d="M10 65 C 30 45, 70 85, 90 55" stroke="#000000" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

export default function WaveNexusDigitalWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-[-5%] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <WaveNexusLogo className="h-10 w-10" />
            <div>
              <p className="text-lg font-semibold tracking-wide">WaveNexus Digital</p>
              <p className="text-xs text-slate-400">Where Digital Meets Momentum</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <Button className="rounded-2xl bg-amber-400 text-slate-950 hover:bg-amber-300">
            Free Website Audit
          </Button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-white/5 px-4 py-2 text-sm text-amber-200">
              <ShieldCheck className="h-4 w-4" />
              Built for local businesses, contractors, and service brands
            </div>
            <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build a digital presence that actually drives business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              WaveNexus Digital creates clean, modern websites and growth systems for businesses that want more leads, stronger branding, and better first impressions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-2xl bg-amber-400 text-slate-950 hover:bg-amber-300">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                Book a Discovery Call
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> Mobile-first</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> Conversion-focused</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-300" /> Fast turnaround</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <CardContent className="p-0">
                <div className="border-b border-white/10 bg-slate-900/80 p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-300" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <p className="mb-3 text-sm text-slate-400">Lead Snapshot</p>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold text-white">+38%</p>
                        <p className="text-sm text-slate-400">Demo increase in inquiries</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-white/5 p-4">
                          <LayoutDashboard className="mb-2 h-5 w-5 text-amber-300" />
                          <p className="text-sm text-slate-400">Faster UX</p>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-4">
                          <Workflow className="mb-2 h-5 w-5 text-cyan-300" />
                          <p className="text-sm text-slate-400">Clear funnel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-amber-300/10 p-6">
                    <p className="mb-2 text-sm text-slate-300">Why businesses choose us</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 rounded-2xl bg-black/20 p-4">
                        <Star className="mt-0.5 h-5 w-5 text-amber-300" />
                        <div>
                          <p className="font-medium text-white">Premium look, practical results</p>
                          <p className="text-sm text-slate-300">We blend modern design with real business goals.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-2xl bg-black/20 p-4">
                        <BadgeDollarSign className="mt-0.5 h-5 w-5 text-amber-300" />
                        <div>
                          <p className="font-medium text-white">Built for conversions</p>
                          <p className="text-sm text-slate-300">Pages are designed to turn traffic into calls, forms, and bookings.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-center text-sm text-slate-300 sm:grid-cols-3 lg:px-8">
            <div>Designed for service businesses</div>
            <div>Built for trust and lead generation</div>
            <div>Flexible packages and monthly support</div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything your business needs to look credible online</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              From websites and branding to SEO foundations, WaveNexus Digital helps businesses create a stronger online presence with a clean, modern edge.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                  <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300/20 to-cyan-400/20 text-amber-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {process.map((step, idx) => (
              <Card key={step.title} className="rounded-[1.75rem] border-white/10 bg-slate-900/70">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 font-bold text-slate-950">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-slate-300">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Simple packages with room to grow</h2>
            <p className="mt-4 text-slate-300">
              Start with what fits now, then scale into SEO, maintenance, and marketing support as your business grows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className={`rounded-[2rem] border ${tier.featured ? "border-amber-300/40 bg-gradient-to-b from-amber-300/10 to-cyan-400/10" : "border-white/10 bg-white/5"}`}
              >
                <CardContent className="p-8">
                  {tier.featured && (
                    <div className="mb-4 inline-flex rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-950">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-2 text-4xl font-black text-white">{tier.price}</p>
                  <p className="mt-2 text-slate-300">{tier.subtitle}</p>
                  <div className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`mt-8 w-full rounded-2xl ${tier.featured ? "bg-amber-400 text-slate-950 hover:bg-amber-300" : "bg-white/10 text-white hover:bg-white/15"}`}>
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {retainers.map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] border-white/10 bg-slate-900/70">
                <CardContent className="p-6">
                  <p className="text-sm uppercase tracking-wide text-slate-400">Monthly Service</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-2xl font-bold text-amber-300">{item.price}</p>
                  <p className="mt-3 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Portfolio</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sample projects that show the direction</h2>
              <p className="mt-4 text-slate-300">
                These showcase how WaveNexus Digital can position different types of businesses with clean visuals and strong conversion pathways.
              </p>
            </div>
            <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
              Request a Mockup
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item, idx) => (
              <motion.div key={item.name} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                <Card className="rounded-[1.75rem] border-white/10 bg-white/5 transition hover:bg-white/10">
                  <CardContent className="p-6">
                    <p className="text-sm text-slate-400">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-3 text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Common questions</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <Card key={item.q} className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 text-slate-300">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let’s build something that grows your business</h2>
              <p className="mt-4 text-slate-300">
                Tell us about your business and what you need. We’ll map out the next steps and help you get moving fast.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-300" /> (555) 555-5555</div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-300" /> hello@wavenexusdigital.com</div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-300" /> United States</div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-white/10 bg-white/5">
              <CardContent className="p-8">
                <div className="grid gap-4">
                  <Input placeholder="Your name" className="h-12 rounded-2xl border-white/10 bg-slate-900/80 text-white placeholder:text-slate-400" />
                  <Input placeholder="Business email" className="h-12 rounded-2xl border-white/10 bg-slate-900/80 text-white placeholder:text-slate-400" />
                  <Input placeholder="Business name" className="h-12 rounded-2xl border-white/10 bg-slate-900/80 text-white placeholder:text-slate-400" />
                  <Textarea placeholder="Tell us about your project" className="min-h-[140px] rounded-2xl border-white/10 bg-slate-900/80 text-white placeholder:text-slate-400" />
                  <Button className="mt-2 h-12 rounded-2xl bg-amber-400 text-slate-950 hover:bg-amber-300">
                    Send Project Request <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-medium text-white">WaveNexus Digital</p>
            <p>Modern websites and digital growth systems for businesses ready to scale.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
