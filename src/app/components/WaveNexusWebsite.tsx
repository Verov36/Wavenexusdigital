import React, { useState } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  TrendingUp,
  Palette,
  Search,
  Menu,
  X,
  ChevronRight,
  Award,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import logoImage from "../../imports/WaveNexus_digital_branding_emblem.png";
import heroImage1 from "../../imports/ChatGPT_Image_May_4,_2026,_04_01_02_PM_(1).png";
import heroImage2 from "../../imports/ChatGPT_Image_May_4,_2026,_04_01_02_PM_(4).png";
import seoImage from "../../imports/1st_SEO_IMAGE.jpg";
import resultsGraph from "../../imports/Results_graph.jpg";
import keywordsImage from "../../imports/Keywords.jpg";
import conversionImage from "../../imports/Conversion_result.jpg";
import veteranImage1 from "../../imports/1st_vet_image.png";
import veteranImage2 from "../../imports/2nd_vet_logo.png";
import { COMPANY_INFO, portfolio } from "../lib/constants";
import { handleSmoothScroll } from "../lib/utils/scroll";
import { trackEvent } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

    toast.success("Opening your email client...", {
      description: "The form data has been added to a new email draft.",
    });

    setFormData({
      name: "",
      email: "",
      business: "",
      message: "",
    });
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
  };

  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Custom, responsive websites built with modern technology. Mobile-first design that converts visitors into customers.",
      features: [
        "Fully responsive design",
        "SEO-optimized architecture",
        "Fast loading speeds",
        "Mobile-first approach",
        "Content management system",
        "Custom functionality"
      ],
      pricing: [
        { tier: "Starter", price: "$1,500 - $3,000", desc: "5-page professional website" },
        { tier: "Growth", price: "$3,000 - $6,000", desc: "10-page custom website with CMS" },
        { tier: "Premium", price: "$6,000+", desc: "Enterprise solution with advanced features" }
      ]
    },
    {
      icon: Search,
      title: "SEO & AI Optimization",
      description: "Get found on Google, Bing, and AI-powered search engines. Data-driven strategies that increase your visibility and drive qualified traffic.",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audit",
        "AI search optimization (ChatGPT, Perplexity)",
        "Local SEO & Google Business",
        "Monthly performance reports"
      ],
      pricing: [
        { tier: "Basic", price: "$250/month", desc: "Essential SEO management" },
        { tier: "Advanced", price: "$450/month", desc: "Comprehensive SEO & content" },
        { tier: "Enterprise", price: "$650/month", desc: "Full-service SEO & AI optimization" }
      ]
    },
    {
      icon: Palette,
      title: "Branding & Logo Design",
      description: "Professional brand identity that makes you memorable. From logos to complete brand guidelines that set you apart.",
      features: [
        "Custom logo design",
        "Brand color palette",
        "Typography selection",
        "Brand guidelines document",
        "Business card design",
        "Social media assets"
      ],
      pricing: [
        { tier: "Logo Package", price: "$800 - $1,500", desc: "Professional logo with variations" },
        { tier: "Brand Identity", price: "$2,000 - $4,000", desc: "Complete brand package" },
        { tier: "Full Rebrand", price: "$4,000+", desc: "Comprehensive brand overhaul" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Growth Strategy",
      description: "Holistic digital marketing solutions. We help you grow your online presence with social media, content marketing, and analytics.",
      features: [
        "Social media management",
        "Content strategy & creation",
        "Email marketing campaigns",
        "Analytics & reporting",
        "Conversion optimization",
        "Ongoing consultation"
      ],
      pricing: [
        { tier: "Starter", price: "$300/month", desc: "Social media management" },
        { tier: "Growth", price: "$600/month", desc: "Multi-channel marketing" },
        { tier: "Enterprise", price: "$1,000+/month", desc: "Full-service digital strategy" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" role="banner">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt={COMPANY_INFO.name} className="h-12 w-12" loading="eager" />
            <div>
              <p className="text-lg font-bold text-slate-900">{COMPANY_INFO.name}</p>
              <p className="text-xs font-medium text-slate-600">{COMPANY_INFO.tagline}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex" role="navigation">
            <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-blue-600 transition">Home</a>
            <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-blue-600 transition">Services</a>
            <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-600 transition">About</a>
            <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-blue-600 transition">Contact</a>
          </nav>

          <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Free Consultation
            </Button>
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-900">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/98">
            <nav className="flex flex-col gap-4 px-6 py-6 text-slate-700 font-semibold">
              <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-blue-600 transition">Home</a>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-blue-600 transition">Services</a>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-600 transition">About</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-blue-600 transition">Portfolio</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-blue-600 transition">Contact</a>
              <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold">
                  Free Consultation
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main role="main">
        {/* Hero Section with Carousel */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3LjlsLjUuNXYuNWgtOXYtMWguNnptLTEgMGgtOXYxaDl2LTF6bS0xMCAwSDEydjFoMTN2LTF6bS0xNCAwSDNNMSAxMy4zdi0xLjZoMXYxLjZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24 lg:px-8">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-100 mb-4 sm:mb-6">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  Veteran-Owned & Operated
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6">
                  Digital Solutions That Drive Real Results
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-8">
                  We build modern websites, optimize for search engines, and create digital strategies that help businesses grow. Professional service with military precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(e as any, "#services");
                    }}
                    className="w-full sm:w-auto bg-white text-blue-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-6 hover:bg-blue-50 shadow-xl hover:scale-105 transition-all"
                  >
                    View Our Services <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-6 hover:bg-white hover:text-blue-900 shadow-xl hover:scale-105 transition-all"
                    >
                      Get Started Today
                    </Button>
                  </a>
                </div>
                <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 text-white">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-300">100+</div>
                    <div className="text-xs sm:text-sm font-medium text-blue-200">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-300">98%</div>
                    <div className="text-xs sm:text-sm font-medium text-blue-200">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-300">24/7</div>
                    <div className="text-xs sm:text-sm font-medium text-blue-200">Support Available</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 lg:mt-0"
              >
                <Slider {...carouselSettings} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                  <div>
                    <img src={heroImage1} alt="Professional Web Design Services" className="w-full h-auto" />
                  </div>
                  <div>
                    <img src={heroImage2} alt="SEO Optimization Services" className="w-full h-auto" />
                  </div>
                  <div>
                    <img src={seoImage} alt="Analytics and Growth" className="w-full h-auto" />
                  </div>
                  <div>
                    <img src={resultsGraph} alt="Business Growth Results" className="w-full h-auto" />
                  </div>
                </Slider>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
              <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-600 mb-2 sm:mb-3">Our Services</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 lg:mb-6 px-4">
                Complete Digital Solutions for Your Business
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                From initial concept to ongoing growth, we provide everything you need to succeed online.
              </p>
            </motion.div>

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUp}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg mb-4 sm:mb-6">
                              <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
                            <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 leading-relaxed">{service.description}</p>

                            <div className="space-y-2 sm:space-y-3">
                              {service.features.map((feature) => (
                                <div key={feature} className="flex items-start gap-2 sm:gap-3">
                                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm sm:text-base text-slate-700 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-6 sm:p-8 lg:p-12 bg-white border-t-2 lg:border-t-0 lg:border-l-2 border-slate-100">
                            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">Pricing Options</h4>
                            <div className="space-y-4 sm:space-y-6">
                              {service.pricing.map((price) => (
                                <div key={price.tier} className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-2">
                                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                                    <h5 className="text-base sm:text-lg font-black text-slate-900">{price.tier}</h5>
                                    <span className="text-xl sm:text-2xl font-black text-blue-600">{price.price}</span>
                                  </div>
                                  <p className="text-sm sm:text-base text-slate-600 font-medium">{price.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Button
                              onClick={(e) => {
                                e.preventDefault();
                                handleScroll(e as any, "#contact");
                                toast.success("Let's discuss your project!", {
                                  description: "Scroll to the contact form to get started.",
                                });
                              }}
                              className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-base sm:text-lg py-5 sm:py-6 hover:shadow-xl hover:scale-105 transition-all"
                            >
                              Get Started <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
              <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-300 mb-2 sm:mb-3">About WaveNexus Digital</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 lg:mb-6 px-4">
                Built on Discipline. Driven by Results.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                Founded by a Marine Corps veteran with a mission to deliver excellence in every project.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 h-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300" />
                      Our Mission
                    </h3>
                    <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-4 sm:mb-6">
                      Founded by a <span className="font-black text-white">Marine Corps veteran</span>, WaveNexus Digital Invest brings military discipline and a mission-first mindset to every project. We know what it means to execute under pressure, adapt on the fly, and deliver results that matter.
                    </p>
                    <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                      We don't just build websites — we engineer digital ecosystems designed to convert visitors into customers. Every line of code, every design choice, and every strategy is backed by data, tested for performance, and optimized for growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 h-full">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300" />
                      Our Process
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500 flex items-center justify-center font-black text-lg sm:text-xl">1</div>
                        <div>
                          <h4 className="font-black text-white mb-1 text-sm sm:text-base">Listen</h4>
                          <p className="text-blue-100 text-sm sm:text-base">We take time to understand your business, goals, and challenges.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500 flex items-center justify-center font-black text-lg sm:text-xl">2</div>
                        <div>
                          <h4 className="font-black text-white mb-1 text-sm sm:text-base">Strategize</h4>
                          <p className="text-blue-100 text-sm sm:text-base">We craft a customized plan tailored to your unique needs.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500 flex items-center justify-center font-black text-lg sm:text-xl">3</div>
                        <div>
                          <h4 className="font-black text-white mb-1 text-sm sm:text-base">Execute</h4>
                          <p className="text-blue-100 text-sm sm:text-base">We build, launch, and optimize with precision.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500 flex items-center justify-center font-black text-lg sm:text-xl">4</div>
                        <div>
                          <h4 className="font-black text-white mb-1 text-sm sm:text-base">Support</h4>
                          <p className="text-blue-100 text-sm sm:text-base">We don't disappear after launch — we're with you for the long haul.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}>
              <Card className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-lg border-2 border-blue-400/30">
                <CardContent className="p-6 sm:p-8 text-center">
                  <p className="text-base sm:text-xl lg:text-2xl font-black text-white leading-relaxed max-w-4xl mx-auto">
                    "Whether you're a small business looking to establish your online presence or a growing company ready to dominate your market, we bring the same commitment we learned in service: <span className="text-blue-300">Never leave a mission incomplete.</span>"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }} className="mt-8 sm:mt-12 lg:mt-16">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <img src={veteranImage1} alt="Veteran Owned Business" className="w-full h-auto" />
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 overflow-hidden">
                  <CardContent className="p-3 sm:p-4">
                    <img src={veteranImage2} alt="Marine Corps Leadership" className="w-full h-auto" />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
              <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-600 mb-2 sm:mb-3">Our Work</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 lg:mb-6 px-4">
                Real Projects. Real Results.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                See how we've helped businesses like yours establish their digital presence and drive growth.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {portfolio.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("click", "Portfolio", item.name)}
                      className="block h-full group"
                    >
                      <Card className="h-full border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg mb-3 sm:mb-4">
                            <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <p className="text-xs font-black uppercase tracking-wider text-blue-600 mb-1 sm:mb-2">{item.category}</p>
                          <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition">{item.name}</h3>
                          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-3 sm:mb-4">{item.text}</p>
                          <div className="flex items-center text-sm sm:text-base text-blue-600 font-bold group-hover:gap-2 transition-all">
                            View Project <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="h-full border-2 border-slate-200 shadow-lg">
                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 shadow-lg mb-3 sm:mb-4">
                          <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-1 sm:mb-2">{item.category}</p>
                        <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 mb-2 sm:mb-3">{item.name}</h3>
                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">{item.text}</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Card className="border-2 border-slate-200 overflow-hidden">
                <CardContent className="p-0">
                  <img src={keywordsImage} alt="Keyword Optimization Results" className="w-full h-auto" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">Keyword Optimization</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">Strategic keyword targeting that drives qualified traffic and increases conversions.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-slate-200 overflow-hidden">
                <CardContent className="p-0">
                  <img src={conversionImage} alt="Conversion Results" className="w-full h-auto" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">Measurable Growth</h3>
                    <p className="text-sm sm:text-base text-slate-600 font-medium">Data-driven strategies that deliver real ROI and business growth.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
              <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-600 mb-2 sm:mb-3">Get In Touch</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4 lg:mb-6 px-4">
                Let's Start Your Project
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                Ready to take your business to the next level? Get in touch today for a free consultation.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <Card className="border-2 border-slate-200 hover:border-blue-300 shadow-lg transition-all">
                    <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-500 mb-0.5 sm:mb-1">Call Us</p>
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-base sm:text-lg lg:text-xl font-black text-slate-900 hover:text-blue-600 transition">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-200 hover:border-blue-300 shadow-lg transition-all">
                    <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-slate-500 mb-0.5 sm:mb-1">Email Us</p>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm sm:text-base lg:text-lg font-black text-slate-900 hover:text-blue-600 transition break-all">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-200 hover:border-blue-300 shadow-lg transition-all">
                    <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-500 mb-0.5 sm:mb-1">Location</p>
                        <p className="text-base sm:text-lg lg:text-xl font-black text-slate-900">{COMPANY_INFO.location}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <Users className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 sm:mb-3">Ready to Get Started?</h3>
                      <p className="text-sm sm:text-base text-slate-600 font-medium mb-4 sm:mb-6">Schedule a free consultation to discuss your project.</p>
                      <a href={COMPANY_INFO.calendarLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-base sm:text-lg py-5 sm:py-6 hover:shadow-xl hover:scale-105 transition-all">
                          Book Free Consultation
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
                <Card className="border-2 border-slate-200 shadow-2xl">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1 sm:mb-2">Your Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="h-11 sm:h-12 border-2 border-slate-200 focus:border-blue-500 font-medium text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1 sm:mb-2">Email Address</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="h-11 sm:h-12 border-2 border-slate-200 focus:border-blue-500 font-medium text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1 sm:mb-2">Business Name</label>
                        <Input
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          placeholder="Your Business"
                          className="h-11 sm:h-12 border-2 border-slate-200 focus:border-blue-500 font-medium text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1 sm:mb-2">Project Details</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          className="min-h-[120px] sm:min-h-[150px] border-2 border-slate-200 focus:border-blue-500 font-medium text-sm sm:text-base"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                      >
                        Send Message <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
      <footer className="bg-slate-900 text-white py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img src={logoImage} alt={COMPANY_INFO.name} className="h-10 w-10 sm:h-12 sm:w-12" />
                <div>
                  <p className="text-lg sm:text-xl font-black">{COMPANY_INFO.name}</p>
                  <p className="text-xs sm:text-sm text-blue-300">{COMPANY_INFO.tagline}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-blue-200 font-medium max-w-md">
                Professional digital solutions built with military precision. Helping businesses grow online.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base font-bold md:justify-end">
              <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-blue-400 transition">Home</a>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-blue-400 transition">Services</a>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-blue-400 transition">About</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")} className="hover:text-blue-400 transition">Portfolio</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700 text-center">
            <p className="text-xs sm:text-sm text-blue-200">© 2026 {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
