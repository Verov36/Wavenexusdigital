import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Target,
  Users,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Search,
  Palette,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import logoImage from "../../imports/WaveNexus_digital_branding_emblem.png";
import veteranImage1 from "../../imports/1st_vet_image.png";
import veteranImage2 from "../../imports/2nd_vet_logo.png";
import { COMPANY_INFO, portfolio } from "../lib/constants";
import { handleSmoothScroll } from "../lib/utils/scroll";
import { trackEvent } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
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

    trackEvent("submit", "Contact Form", "Project Request");

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Business: ${formData.business}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=Project Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");

    setFormData({
      name: "",
      email: "",
      business: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt={COMPANY_INFO.name} className="h-10 w-10" />
              <div>
                <p className="text-base font-bold text-slate-900">{COMPANY_INFO.name}</p>
                <p className="text-xs text-slate-600 hidden sm:block">{COMPANY_INFO.tagline}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-slate-700 hover:text-blue-600 transition">About</a>
              <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="text-slate-700 hover:text-blue-600 transition">Pricing</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="text-slate-700 hover:text-blue-600 transition">Portfolio</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-slate-700 hover:text-blue-600 transition">Contact</a>
            </nav>

            <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Free Audit
              </Button>
            </a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col gap-4 font-semibold">
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-slate-700">About</a>
                <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="text-slate-700">Pricing</a>
                <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="text-slate-700">Portfolio</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-slate-700">Contact</a>
                <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Free Audit
                  </Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760540257641-536ac2c633d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <Award className="h-5 w-5 text-blue-300" />
                  <span className="text-sm font-bold text-blue-100">Proudly Veteran-Owned & Operated</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  Digital Solutions Built with Military Precision
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  WaveNexus Digital Invest brings the same discipline and mission-first mindset from the Marine Corps to your digital success. We build websites, optimize for search, and create strategies that deliver real results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(e as any, "#about");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8"
                  >
                    Learn Our Story <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(e as any, "#pricing");
                    }}
                    variant="outline"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8"
                  >
                    View Pricing
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-blue-300">8</div>
                    <div className="text-sm text-blue-200 mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-300">98%</div>
                    <div className="text-sm text-blue-200 mt-1">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-300">24/7</div>
                    <div className="text-sm text-blue-200 mt-1">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-300">USMC</div>
                    <div className="text-sm text-blue-200 mt-1">Veteran Led</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">About WaveNexus Digital</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Founded by a Marine. Built on Discipline.
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our mission is simple: deliver exceptional digital solutions with the same commitment we learned in service.
              </p>
            </motion.div>

            {/* Veteran Badges */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="border-2 border-slate-200 overflow-hidden">
                  <CardContent className="p-6 flex items-center justify-center bg-white">
                    <img src={veteranImage1} alt="Veteran Owned Business" className="max-h-32 w-auto" />
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200 overflow-hidden">
                  <CardContent className="p-6 flex items-center justify-center bg-white">
                    <img src={veteranImage2} alt="Marine Corps Veteran" className="max-h-32 w-auto" />
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Our Story */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1773434013413-b2c56e94c5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Iwo Jima Memorial - US Marine Corps War Memorial"
                    className="max-h-96 w-auto rounded-xl"
                  />
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  Our Mission
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Founded by a <span className="font-bold text-slate-900">Marine Corps veteran</span>, WaveNexus Digital Invest brings military discipline and a mission-first mindset to every project. We know what it means to execute under pressure, adapt on the fly, and deliver results that matter.
                  </p>
                  <p>
                    We don't just build websites—we engineer digital ecosystems designed to convert visitors into customers. Every line of code, every design choice, and every strategy is backed by data, tested for performance, and optimized for growth.
                  </p>
                  <p>
                    Whether you're a small business looking to establish your online presence or a growing company ready to dominate your market, we bring the same commitment we learned in service: <span className="font-bold text-blue-600">Never leave a mission incomplete.</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Our Values */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-black text-slate-900 mb-2">Mission-Focused</h4>
                    <p className="text-sm text-slate-600">Every project gets our full commitment until completion</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-black text-slate-900 mb-2">Client-First</h4>
                    <p className="text-sm text-slate-600">Your success is our success, period</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-black text-slate-900 mb-2">Results-Driven</h4>
                    <p className="text-sm text-slate-600">Data and performance guide every decision</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-black text-slate-900 mb-2">Excellence</h4>
                    <p className="text-sm text-slate-600">We hold ourselves to the highest standards</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Our Process */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-16">
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">How We Work</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">1</div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Listen</h4>
                      <p className="text-sm text-slate-600">We take time to understand your business, goals, and challenges</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">2</div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Strategize</h4>
                      <p className="text-sm text-slate-600">We craft a customized plan tailored to your unique needs</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">3</div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Execute</h4>
                      <p className="text-sm text-slate-600">We build, launch, and optimize with precision</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">4</div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">Support</h4>
                      <p className="text-sm text-slate-600">We're with you for the long haul, ensuring continued success</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Pricing</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Clear, Transparent Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                No hidden fees, no surprises. Choose the package that fits your business needs.
              </p>
            </motion.div>

            {/* Website Design Packages */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Globe className="h-8 w-8 text-blue-600" />
                Website Design & Development
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Starter</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$1,000 - $1,500</div>
                    <p className="text-slate-600 mb-6">Perfect for small businesses getting started online</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">5-page professional website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Mobile responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Basic SEO optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Contact form integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">2 weeks delivery</span>
                      </li>
                    </ul>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(e as any, "#contact");
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-600 shadow-xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white text-xs font-black uppercase px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Growth</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$1,599 - $2,199</div>
                    <p className="text-slate-600 mb-6">For businesses ready to scale their online presence</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">10-page custom website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Content management system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Advanced SEO & AI optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Blog integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Analytics setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">3 weeks delivery</span>
                      </li>
                    </ul>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(e as any, "#contact");
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Premium</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$2,999</div>
                    <p className="text-slate-600 mb-6">Enterprise solution with custom features</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Unlimited pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Custom functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">E-commerce integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Priority support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Custom timeline</span>
                      </li>
                    </ul>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(e as any, "#contact");
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* SEO & Marketing Services */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Search className="h-8 w-8 text-blue-600" />
                SEO & AI Optimization
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Basic</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$250/mo</div>
                    <p className="text-slate-600 mb-6">Essential SEO for local businesses</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Keyword research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">On-page optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Monthly reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Advanced</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$450/mo</div>
                    <p className="text-slate-600 mb-6">Comprehensive SEO & content strategy</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Everything in Basic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Content creation (4 posts/mo)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Technical SEO audit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Local SEO optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all">
                  <CardContent className="p-8">
                    <div className="text-sm font-black uppercase tracking-wider text-blue-600 mb-2">Enterprise</div>
                    <div className="text-4xl font-black text-slate-900 mb-2">$650/mo</div>
                    <p className="text-slate-600 mb-6">Full-service SEO & AI strategy</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Everything in Advanced</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">AI search optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Competitor analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Priority support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Additional Services */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-2xl font-black text-slate-900 mb-8">Additional Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-slate-200">
                  <CardContent className="p-6">
                    <Palette className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-black text-slate-900 mb-2">Branding & Logo Design</h4>
                    <p className="text-2xl font-black text-blue-600 mb-3">$800 - $4,000</p>
                    <p className="text-sm text-slate-600">Professional brand identity and logo packages</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="p-6">
                    <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-black text-slate-900 mb-2">Social Media Management</h4>
                    <p className="text-2xl font-black text-blue-600 mb-3">$300 - $1,000/mo</p>
                    <p className="text-sm text-slate-600">Full social media strategy and management</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-black text-slate-900 mb-2">Website Maintenance</h4>
                    <p className="text-2xl font-black text-blue-600 mb-3">$150 - $500/mo</p>
                    <p className="text-sm text-slate-600">Keep your site updated, secure, and running smoothly</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-slate-50 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Our Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Real businesses we've helped establish their digital presence and drive growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.slice(0, 2).map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={item.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("click", "Portfolio", item.name)}
                    className="block h-full group"
                  >
                    <Card className="h-full border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg mb-6">
                          <Globe className="h-7 w-7 text-white" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-wider text-blue-600 mb-3">{item.category}</p>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition">{item.name}</h3>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">{item.text}</p>
                        <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                          View Project <ArrowRight className="h-5 w-5 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Get In Touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Let's discuss your project. Schedule a free consultation or send us a message.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
                <div className="space-y-6">
                  <Card className="border-2 border-slate-200">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 mb-1">Call Us</p>
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-lg font-black text-slate-900 hover:text-blue-600">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-200">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-500 mb-1">Email Us</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-black text-slate-900 hover:text-blue-600 break-all">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-200">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 mb-1">Location</p>
                        <p className="text-lg font-black text-slate-900">{COMPANY_INFO.location}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardContent className="p-6 text-center">
                      <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                      <h3 className="text-xl font-black text-slate-900 mb-2">Book a Free Audit</h3>
                      <p className="text-sm text-slate-600 mb-4">Let's discuss your project in detail</p>
                      <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                          Schedule Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-3">
                <Card className="border-2 border-slate-200 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                        <Input
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          placeholder="Your Business"
                          className="h-12 border-2 border-slate-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          className="min-h-[150px] border-2 border-slate-200 focus:border-blue-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg"
                      >
                        Send Message <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-10 w-10" />
                <div>
                  <p className="text-xl font-black">{COMPANY_INFO.name}</p>
                  <p className="text-sm text-blue-300">{COMPANY_INFO.tagline}</p>
                </div>
              </div>
              <p className="text-blue-200 max-w-md">
                Veteran-owned digital solutions built with military precision. Helping businesses succeed online.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 font-bold md:justify-end">
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-400 transition">About</a>
              <a href="#pricing" onClick={(e) => handleScroll(e, "#pricing")} className="hover:text-blue-400 transition">Pricing</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-blue-400 transition">Portfolio</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-sm text-blue-200">© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
