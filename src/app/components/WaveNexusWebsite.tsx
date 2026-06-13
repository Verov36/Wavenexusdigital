import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  Target,
  Users,
  Zap,
  Award,
  Globe,
  BookOpen,
  Calendar,
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
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                <img
                  src={logoImage}
                  alt={COMPANY_INFO.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 leading-tight">{COMPANY_INFO.name}</p>
                <p className="text-xs text-slate-600 hidden sm:block">{COMPANY_INFO.tagline}</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="text-slate-700 hover:text-blue-600 transition">About</a>
              <a href="#blog" onClick={(e) => handleScroll(e, "#blog")} className="text-slate-700 hover:text-blue-600 transition">Blog</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="text-slate-700 hover:text-blue-600 transition">Portfolio</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-slate-700 hover:text-blue-600 transition">Contact</a>
            </nav>

            <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
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
                <a href="#blog" onClick={(e) => handleScroll(e, "#blog")} className="text-slate-700">Blog</a>
                <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="text-slate-700">Portfolio</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="text-slate-700">Contact</a>
                <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760192465389-f0b1f9b6abd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')] bg-cover bg-center opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/60"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                  <Award className="h-5 w-5 text-blue-300" />
                  <span className="text-sm font-bold text-blue-100">Proudly Veteran-Owned & Operated</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  Hampton Roads Website Development Built with Military Precision
                </h1>

                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Local website developers serving Suffolk, Virginia Beach, Chesapeake, Newport News, and Hampton Roads VA. Marine Corps veteran-owned bringing military discipline to your digital success. Custom website development, SEO optimization, and web solutions for Southeast Virginia businesses.
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
                      handleScroll(e as any, "#blog");
                    }}
                    variant="outline"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8"
                  >
                    Read Our Blog
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
                Serving Hampton Roads, Suffolk, Virginia Beach, Chesapeake, and Newport News with exceptional website development and digital solutions built on Marine Corps values.
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

            {/* Our Values & Process - With Strategic Background */}
            <div className="relative mt-16 py-16 overflow-hidden rounded-2xl">
              {/* Background Image with Parallax Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')"
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-50/70"></div>

              {/* Content */}
              <div className="relative">
                {/* Our Values */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Our Core Values</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <Target className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="font-black text-slate-900 mb-2">Mission-Focused</h4>
                        <p className="text-sm text-slate-600">Every project gets our full commitment until completion</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <Users className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="font-black text-slate-900 mb-2">Client-First</h4>
                        <p className="text-sm text-slate-600">Your success is our success, period</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <Zap className="h-7 w-7 text-white" />
                        </div>
                        <h4 className="font-black text-slate-900 mb-2">Results-Driven</h4>
                        <p className="text-sm text-slate-600">Data and performance guide every decision</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all bg-white/95 backdrop-blur-sm">
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
                    <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">1</div>
                        <div>
                          <h4 className="font-black text-slate-900 mb-2">Listen</h4>
                          <p className="text-sm text-slate-600">We take time to understand your business, goals, and challenges</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">2</div>
                        <div>
                          <h4 className="font-black text-slate-900 mb-2">Strategize</h4>
                          <p className="text-sm text-slate-600">We craft a customized plan tailored to your unique needs</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white">3</div>
                        <div>
                          <h4 className="font-black text-slate-900 mb-2">Execute</h4>
                          <p className="text-sm text-slate-600">We build, launch, and optimize with precision</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-200">
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
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-600 mb-3">Insights & Resources</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Digital Marketing Insights for Hampton Roads Businesses
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Practical tips on website development, local SEO, and digital strategy from a veteran-owned perspective.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Local SEO",
                  date: "June 10, 2026",
                  title: "Why Hampton Roads Businesses Need Hyper-Local SEO in 2026",
                  excerpt: "With more consumers searching for services 'near me,' local SEO has never been more critical for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News. Here's how to dominate your local market.",
                  readTime: "5 min read",
                },
                {
                  category: "Website Development",
                  date: "May 28, 2026",
                  title: "5 Signs Your Business Website Is Costing You Customers",
                  excerpt: "A slow, outdated, or poorly designed website can silently drain leads from your business. Discover the top warning signs and what modern website development can do to turn things around.",
                  readTime: "4 min read",
                },
                {
                  category: "Veteran Business",
                  date: "May 15, 2026",
                  title: "Military Discipline and the Digital Marketing Mindset",
                  excerpt: "The values learned in the Marine Corps — mission focus, adaptability, and executing under pressure — translate directly into building successful digital strategies for small businesses.",
                  readTime: "6 min read",
                },
                {
                  category: "Web Design",
                  date: "April 30, 2026",
                  title: "Mobile-First Design: Why 70% of Your Visitors Are on Their Phones",
                  excerpt: "If your website isn't optimized for mobile, you're losing more than half your potential customers. We break down what mobile-first website development means and why it matters for your bottom line.",
                  readTime: "4 min read",
                },
                {
                  category: "AI & SEO",
                  date: "April 14, 2026",
                  title: "How AI Search Is Changing SEO for Local Service Businesses",
                  excerpt: "Google's AI Overviews and tools like ChatGPT are reshaping how people find businesses online. Learn how to optimize your website to appear in AI-driven search results and stay ahead of the competition.",
                  readTime: "7 min read",
                },
                {
                  category: "Digital Strategy",
                  date: "March 28, 2026",
                  title: "Building a Digital Presence from Scratch: A Step-by-Step Guide for Small Businesses",
                  excerpt: "Whether you're launching a new business in Hampton Roads or modernizing an established one, this guide walks you through every step of building a strong, lead-generating digital presence.",
                  readTime: "8 min read",
                },
              ].map((post, idx) => (
                <motion.div
                  key={post.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  transition={{ delay: (idx % 3) * 0.1 }}
                >
                  <Card className="h-full border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="font-black text-slate-900 mb-3 group-hover:text-blue-600 transition leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                        <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
              <p className="text-slate-600 mb-4">Want personalized digital marketing advice for your Hampton Roads business?</p>
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                  Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
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
              {portfolio.filter(p => p.name !== "Dizon Digital Media").map((item, idx) => (
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

        {/* Service Area Section */}
        <section id="service-area" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
              <p className="text-sm font-black uppercase tracking-wider text-blue-300 mb-3">Service Area</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Serving Hampton Roads & Southeast Virginia
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Proudly serving local businesses throughout Hampton Roads with professional website development and digital solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 h-full">
                  <CardContent className="p-8">
                    <MapPin className="h-10 w-10 text-blue-300 mb-4" />
                    <h3 className="text-2xl font-black text-white mb-6">Cities We Serve</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-blue-300 mb-2">Primary Areas:</h4>
                        <ul className="space-y-2 text-blue-100">
                          <li>• Suffolk, VA</li>
                          <li>• Virginia Beach, VA</li>
                          <li>• Chesapeake, VA</li>
                          <li>• Newport News, VA</li>
                          <li>• Hampton, VA</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-300 mb-2">Extended Areas:</h4>
                        <ul className="space-y-2 text-blue-100">
                          <li>• Norfolk, VA</li>
                          <li>• Portsmouth, VA</li>
                          <li>• York County, VA</li>
                          <li>• Isle of Wight, VA</li>
                          <li>• Williamsburg, VA</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 h-full">
                  <CardContent className="p-8">
                    <Phone className="h-10 w-10 text-blue-300 mb-4" />
                    <h3 className="text-2xl font-black text-white mb-6">Local Contact Information</h3>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-bold text-blue-300 mb-2">Phone</p>
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-black text-white hover:text-blue-300 transition">
                          {COMPANY_INFO.phone}
                        </a>
                        <p className="text-sm text-blue-200 mt-1">Call or text for immediate assistance</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-blue-300 mb-2">Email</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-black text-white hover:text-blue-300 transition break-all">
                          {COMPANY_INFO.email}
                        </a>
                        <p className="text-sm text-blue-200 mt-1">We respond within 24 hours</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-blue-300 mb-2">Serving</p>
                        <p className="text-lg font-black text-white">Hampton Roads & Southeast Virginia</p>
                        <p className="text-sm text-blue-200 mt-1">Proudly veteran-owned and locally operated</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }} className="text-center">
              <Card className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-lg border-2 border-blue-400/30 inline-block">
                <CardContent className="p-6">
                  <p className="text-lg font-bold text-white mb-4">
                    <span className="text-blue-300">Local Website Developers</span> Committed to Hampton Roads Businesses
                  </p>
                  <p className="text-blue-100 max-w-2xl">
                    As a veteran-owned business based in the Hampton Roads area, we understand the unique needs of local businesses in Suffolk, Virginia Beach, Chesapeake, Newport News, and surrounding communities. We provide personalized website development services with the dedication and discipline of the Marine Corps.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
                        <p className="text-sm font-bold text-slate-500 mb-1">Serving</p>
                        <p className="text-lg font-black text-slate-900">{COMPANY_INFO.location}</p>
                        <p className="text-xs text-slate-600 mt-1">Suffolk, Virginia Beach, Chesapeake, Newport News</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardContent className="p-6 text-center">
                      <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                      <h3 className="text-xl font-black text-slate-900 mb-2">Get Your Free Audit</h3>
                      <p className="text-sm text-slate-600 mb-4">Complete our intake form to get started</p>
                      <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                          Start Now
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
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-10 w-auto object-contain" />
                <div>
                  <p className="text-xl font-black">{COMPANY_INFO.name}</p>
                  <p className="text-sm text-blue-300">{COMPANY_INFO.tagline}</p>
                </div>
              </div>
              <p className="text-blue-200 max-w-md">
                Veteran-owned website development and digital solutions built with military precision. Professional website developers helping businesses succeed online.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 font-bold md:justify-end">
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-400 transition">About</a>
              <a href="#blog" onClick={(e) => handleScroll(e, "#blog")} className="hover:text-blue-400 transition">Blog</a>
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
