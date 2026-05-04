import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import logoImage from "../../imports/WaveNexus_digital_branding_emblem.png";
import heroImage1 from "../../imports/ChatGPT_Image_May_4,_2026,_04_01_02_PM_(1).png";
import heroImage2 from "../../imports/ChatGPT_Image_May_4,_2026,_04_01_02_PM_(4).png";
import { COMPANY_INFO, services, pricing, retainers, process, portfolio, faqs } from "../lib/constants";
import { handleSmoothScroll } from "../lib/utils/scroll";
import { trackEvent } from "../lib/analytics";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
};

export default function WaveNexusWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleSmoothScroll(e, id, () => setMobileMenuOpen(false));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.business || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Track form submission
    trackEvent("submit", "Contact Form", "Project Request");

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=Project Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast.success("Opening your email client...", {
      description: "The form data has been added to a new email draft.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      business: "",
      message: "",
    });
  };

  const handlePricingClick = (tierName: string) => {
    trackEvent("click", "Pricing", tierName);
    toast.success(`${tierName} plan selected!`, {
      description: "Scroll down to the contact form to get started.",
    });
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20 text-slate-900" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ contain: 'layout style paint' }}>
        <div className="absolute left-[-10%] top-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-amber-300/20 to-orange-400/15 blur-3xl" />
        <div className="absolute right-[-5%] top-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-cyan-300/15 to-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/15 to-orange-300/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b-2 border-stone-200 bg-white/95 backdrop-blur-xl shadow-sm" role="banner">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt={COMPANY_INFO.name} className="h-12 w-12" loading="eager" />
            <div>
              <p className="text-lg font-bold tracking-wide bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">{COMPANY_INFO.name}</p>
              <p className="text-xs font-medium text-slate-600">{COMPANY_INFO.tagline}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex" role="navigation" aria-label="Main navigation">
            <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="transition hover:text-cyan-600">Services</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="transition hover:text-cyan-600">Pricing</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="transition hover:text-cyan-600">Portfolio</a>
            <a href="#faq" onClick={(e) => handleScroll(e, "#faq")} className="transition hover:text-cyan-600">FAQ</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="transition hover:text-cyan-600">Contact</a>
          </nav>

          <a
            href="{COMPANY_INFO.calendarLink}"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <Button className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 hover:scale-105 transition-all">
              Free Website Audit
            </Button>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-stone-200 bg-white/98 backdrop-blur-xl">
            <nav className="flex flex-col gap-4 px-6 py-6 text-slate-700 font-semibold">
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="transition hover:text-cyan-600">Services</a>
              <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="transition hover:text-cyan-600">Pricing</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="transition hover:text-cyan-600">Portfolio</a>
              <a href="#faq" onClick={(e) => handleScroll(e, "#faq")} className="transition hover:text-cyan-600">FAQ</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="transition hover:text-cyan-600">Contact</a>
              <a
                href="{COMPANY_INFO.calendarLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60">
                  Free Website Audit
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main role="main">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28" aria-label="Hero section">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-cyan-500/30 bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 text-sm font-bold text-cyan-700 shadow-lg shadow-cyan-500/20">
              <ShieldCheck className="h-5 w-5" />
              Built for local businesses, contractors, and service brands
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-tight bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
              Build a digital presence that actually drives business.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-8 font-medium text-slate-700">
              WaveNexus Digital Invest creates clean, modern websites and growth systems optimized for SEO and AI search engines. We help businesses get more leads, stronger branding, and better visibility online.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(e as any, "#pricing");
                }}
                className="h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 text-lg font-bold text-white shadow-2xl shadow-amber-500/50 hover:shadow-3xl hover:shadow-amber-500/60 hover:scale-105 transition-all"
              >
                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="{COMPANY_INFO.calendarLink}"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full rounded-2xl border-2 border-cyan-600 bg-white px-8 text-lg font-bold text-cyan-700 shadow-lg shadow-cyan-500/30 hover:bg-cyan-50 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all"
                >
                  Book a Discovery Call
                </Button>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> Mobile-first</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> SEO & AI optimized</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> Conversion-focused</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> Fast turnaround</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative space-y-6"
          >
            {/* Main Hero Image */}
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={heroImage1}
                alt="WaveNexus Digital Invest - Helping local businesses grow online"
                className="w-full h-auto"
                loading="eager"
              />
            </div>

            {/* Secondary SEO Image */}
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={heroImage2}
                alt="Stronger SEO, Higher Rankings, More Growth"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </section>

        <section className="border-y-2 border-stone-200 bg-gradient-to-r from-stone-100/50 via-amber-50/30 to-stone-100/50">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 text-center text-sm font-bold uppercase tracking-wider text-slate-800 sm:grid-cols-3 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-600" />
              Designed for service businesses
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-amber-600" />
              Built for trust and lead generation
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-600" />
              Flexible packages and monthly support
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Services</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Everything your business needs to look credible online</h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold text-slate-700">
              From SEO and AI-optimized websites to branding and growth systems, WaveNexus Digital Invest helps businesses create a stronger online presence with a clean, modern edge.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                  <Card className="h-full rounded-[1.75rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg shadow-stone-200/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-400">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/40">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
                      <p className="mt-3 leading-7 font-medium text-slate-600">{service.text}</p>
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
              <Card key={step.title} className="rounded-[1.75rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg hover:shadow-xl hover:border-cyan-400 transition-all">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-black text-xl text-white shadow-lg shadow-cyan-500/50">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{step.title}</h3>
                  <p className="mt-3 font-semibold text-slate-600">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">Pricing</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Simple packages with room to grow</h2>
            <p className="mt-5 text-lg font-semibold text-slate-700">
              Start with what fits now, then scale into SEO, maintenance, and marketing support as your business grows.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className={`rounded-[2rem] border-2 ${tier.featured ? "border-amber-500 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 shadow-2xl shadow-amber-500/50 scale-105" : "border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg"}`}
              >
                <CardContent className="p-8">
                  {tier.featured && (
                    <div className="mb-5 inline-flex rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-amber-500/50">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-black text-slate-900">{tier.name}</h3>
                  <p className="mt-3 text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{tier.price}</p>
                  <p className="mt-3 font-bold text-slate-700">{tier.subtitle}</p>
                  <div className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 font-semibold text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => handlePricingClick(tier.name)}
                    className={`mt-10 h-14 w-full rounded-2xl text-lg font-black shadow-lg transition-all hover:scale-105 ${
                      tier.featured
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60"
                    }`}
                  >
                    {tier.cta} →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {retainers.map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg hover:shadow-xl hover:border-cyan-400 transition-all">
                <CardContent className="p-7">
                  <p className="text-xs font-black uppercase tracking-wider text-cyan-600">Monthly Service</p>
                  <h3 className="mt-3 text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{item.price}</p>
                  <p className="mt-4 font-semibold text-slate-600 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Portfolio</p>
              <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Sample projects that show the direction</h2>
              <p className="mt-5 text-lg font-semibold text-slate-700">
                These showcase how WaveNexus Digital Invest can position different types of businesses with clean visuals and strong conversion pathways.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(e as any, "#contact");
                toast.info("Request a Mockup", {
                  description: "Fill out the contact form to request a custom mockup for your business.",
                });
              }}
              className="h-14 rounded-2xl border-2 border-cyan-600 bg-white px-8 text-base font-bold text-cyan-700 shadow-lg shadow-cyan-500/30 hover:bg-cyan-50 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all"
            >
              Request a Mockup →
            </Button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item, idx) => (
              <motion.div key={item.name} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    onClick={() => trackEvent("click", "Portfolio", item.name)}
                  >
                    <Card className="h-full rounded-[1.75rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg transition-all hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-400 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-7">
                        <p className="text-xs font-black uppercase tracking-wider text-cyan-600">{item.category}</p>
                        <h3 className="mt-3 text-xl font-black text-slate-900">{item.name}</h3>
                        <p className="mt-3 font-semibold text-slate-600 leading-relaxed">{item.text}</p>
                        <p className="mt-4 font-bold text-cyan-600">View Project →</p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="h-full rounded-[1.75rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-lg transition-all hover:shadow-xl hover:border-cyan-400">
                    <CardContent className="p-7">
                      <p className="text-xs font-black uppercase tracking-wider text-cyan-600">{item.category}</p>
                      <h3 className="mt-3 text-xl font-black text-slate-900">{item.name}</h3>
                      <p className="mt-3 font-semibold text-slate-600 leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Common questions</h2>
          </div>

          <div className="mt-12 space-y-5">
            {faqs.map((item) => (
              <Card key={item.q} className="rounded-[1.5rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all">
                <CardContent className="p-7">
                  <h3 className="text-lg font-black text-slate-900">{item.q}</h3>
                  <p className="mt-3 font-semibold text-slate-600 leading-relaxed">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Contact</p>
              <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">Let's build something that grows your business</h2>
              <p className="mt-5 text-lg font-semibold text-slate-700">
                Tell us about your business and what you need. We'll map out the next steps and help you get moving fast.
              </p>

              <div className="mt-10 space-y-5 text-slate-700">
                <div className="flex items-center gap-4 rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 p-4 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/40">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="font-bold text-lg hover:text-cyan-600 transition">{COMPANY_INFO.phone}</a>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 p-4 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/40">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold hover:text-cyan-600 transition break-all">{COMPANY_INFO.email}</a>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 p-4 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/40">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-lg">{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>

            <Card className="rounded-[2rem] border-2 border-stone-200 bg-gradient-to-br from-white to-stone-50 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="h-14 rounded-2xl border-2 border-stone-200 bg-stone-50 text-slate-900 font-semibold placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white"
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business email"
                    className="h-14 rounded-2xl border-2 border-stone-200 bg-stone-50 text-slate-900 font-semibold placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white"
                  />
                  <Input
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    placeholder="Business name"
                    className="h-14 rounded-2xl border-2 border-stone-200 bg-stone-50 text-slate-900 font-semibold placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white"
                  />
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project"
                    className="min-h-[160px] rounded-2xl border-2 border-stone-200 bg-stone-50 text-slate-900 font-semibold placeholder:text-slate-500 focus:border-cyan-500 focus:bg-white"
                  />
                  <Button
                    type="submit"
                    className="mt-3 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-lg font-black text-white shadow-xl shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/60 hover:scale-105 transition-all"
                  >
                    Send Project Request <MessageSquare className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-stone-200 bg-gradient-to-br from-stone-100 to-amber-50/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-lg font-black bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">{COMPANY_INFO.name}</p>
            <p className="mt-2 font-semibold text-slate-800 max-w-md">Modern websites and digital growth systems for businesses ready to scale.</p>
          </div>
          <div className="flex flex-wrap gap-6 font-bold text-slate-800">
            <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-cyan-600 transition">Services</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="hover:text-cyan-600 transition">Pricing</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-cyan-600 transition">Portfolio</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-cyan-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
