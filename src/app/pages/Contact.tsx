import { useState, useEffect } from "react";
import { Link } from "react-router";
import { setPageMeta } from "../metadata";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { COMPANY_INFO } from "../lib/constants";
import { trackEvent } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  useEffect(() => {
    setPageMeta(
      "Contact — Local Web Designer & Digital Marketing Near Me | Hampton Roads VA",
      "Get in touch with WaveNexus Digital Invest — your local web designer and digital marketing team near you in Hampton Roads, VA. We serve Suffolk, Virginia Beach, Chesapeake, Newport News, and surrounding areas. Reach out for a free website audit."
    );
  }, []);

  const [interest, setInterest] = useState<"agency" | "nexusfield" | "">("");
  const [formData, setFormData] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.business || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    trackEvent("submit", "Contact Form", interest || "General");
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nInterest: ${interest === "nexusfield" ? "Nexus Field App" : interest === "agency" ? "Agency Services" : "General"}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", business: "", message: "" });
    setInterest("");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Let's talk</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Whether you need a new website, want to see Nexus Field, or just aren't sure where to start — reach out. We're easy to get ahold of and we'll give you a straight answer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 space-y-5">
              <Card className="border-2 border-slate-200">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Call or Text</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, "")}`} className="text-lg font-black text-slate-900 hover:text-blue-600 transition">
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
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-black text-slate-900 hover:text-blue-600 transition break-all">
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-1">We respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-200">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Serving</p>
                    <p className="font-black text-slate-900">Hampton Roads, VA</p>
                    <p className="text-xs text-slate-500 mt-1">Suffolk · Virginia Beach · Chesapeake · Newport News</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-black text-slate-900 mb-2">Free Website Audit</h3>
                  <p className="text-sm text-slate-600 mb-4">Get a personalized analysis of your current online presence — no obligation.</p>
                  <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      Start the Audit <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Nexus Field CTA */}
              <Card className="border-2 border-slate-800 bg-slate-900">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center gap-1.5 mb-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Nexus Field</span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">Interested in Our App?</h3>
                  <p className="text-sm text-slate-400 mb-4">Request a personalized demo of Nexus Field for your field service team.</p>
                  <Link to="/nexus-field">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }} className="lg:col-span-3">
              <Card className="border-2 border-slate-200 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 text-sm mb-6">Tell us a bit about what you're looking for.</p>

                  {/* Interest Toggle */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-slate-700 mb-3">I'm interested in:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setInterest("agency")}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          interest === "agency"
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <p className="font-black text-sm text-slate-900">Agency Services</p>
                        <p className="text-xs text-slate-500 mt-0.5">Website, SEO, Branding</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setInterest("nexusfield")}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          interest === "nexusfield"
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <p className="font-black text-sm text-slate-900">Nexus Field App</p>
                        <p className="text-xs text-slate-500 mt-0.5">Field Service Software</p>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="h-12 border-2 border-slate-200 focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="h-12 border-2 border-slate-200 focus:border-blue-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                      <Input name="business" value={formData.business} onChange={handleChange} placeholder="Your Business" className="h-12 border-2 border-slate-200 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or what questions you have..." className="min-h-[140px] border-2 border-slate-200 focus:border-blue-500" />
                    </div>
                    <Button type="submit" className="w-full h-13 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-3">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
