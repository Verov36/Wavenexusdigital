import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { COMPANY_INFO } from "../lib/constants";
import { trackEvent } from "../lib/analytics";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function Contact() {
  useEffect(() => {
    setPageMeta("Contact — Local Web Designer Near Me | Hampton Roads VA",
      "Get in touch with WaveNexus Digital Invest — your local web design and digital marketing team in Hampton Roads, VA. Serving Suffolk, Virginia Beach, Chesapeake, and Newport News. Free website audit.",
      "/contact");
  }, []);

  const [interest, setInterest] = useState<"agency" | "nexusfield" | "">("");
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.business || !form.message) { toast.error("Please fill in all fields"); return; }
    trackEvent("submit", "Contact Form", interest || "General");
    const body = `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nInterest: ${interest === "nexusfield" ? "Nexus Field App" : interest === "agency" ? "Agency Services" : "General"}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", business: "", message: "" });
    setInterest("");
  };

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
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Get In Touch</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              Let's Talk
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">
              Whether you need a website, want to see Nexus Field, or just aren't sure where to start — reach out. We're easy to get ahold of and we'll give you a straight answer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-px">
              {[
                { icon: Phone, label: "Call or Text", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\D/g, "")}` },
                { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                { icon: MapPin, label: "Serving", value: "Hampton Roads, VA", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} variants={fadeUp}
                  className="flex items-center gap-5 bg-zinc-900 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                  <div className="w-10 h-10 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-wide text-white hover:text-amber-400 transition-colors break-all">{value}</a>
                    ) : (
                      <p className="font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-wide text-white">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Free audit */}
              <motion.div variants={fadeUp} className="bg-amber-500 p-8">
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-950/60 mb-3">No obligation</p>
                <h3 className="font-['Barlow_Condensed'] font-900 text-2xl uppercase text-zinc-950 mb-3">Free Website Audit</h3>
                <p className="font-['DM_Sans'] text-sm text-zinc-950/70 mb-5">A personalized look at your current online presence and what would actually help.</p>
                <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Start Now <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Nexus Field */}
              <motion.div variants={fadeUp} className="bg-zinc-900 border border-amber-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400">Nexus Field</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-2">Interested in Our App?</h3>
                <p className="font-['DM_Sans'] text-xs text-zinc-500 mb-4">Request a demo of Nexus Field for your field service team.</p>
                <Link to="/nexus-field"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 border border-amber-500/40 text-amber-400 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-amber-500 hover:text-zinc-950 transition-all text-sm">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-3">
              <div className="bg-zinc-900 p-8 border border-border">
                <h2 className="font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-2">Send Us a Message</h2>
                <p className="font-['DM_Sans'] text-sm text-zinc-500 mb-8">Tell us a bit about what you're looking for.</p>

                {/* Interest toggle */}
                <div className="mb-8">
                  <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-3">I'm interested in:</p>
                  <div className="grid grid-cols-2 gap-px bg-zinc-800">
                    <button type="button" onClick={() => setInterest("agency")}
                      className={`p-5 text-left transition-all ${interest === "agency" ? "bg-amber-500" : "bg-zinc-900 hover:bg-zinc-800"}`}>
                      <p className={`font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-sm ${interest === "agency" ? "text-zinc-950" : "text-white"}`}>Agency Services</p>
                      <p className={`font-['DM_Sans'] text-xs mt-0.5 ${interest === "agency" ? "text-zinc-950/60" : "text-zinc-600"}`}>Website, SEO, Branding</p>
                    </button>
                    <button type="button" onClick={() => setInterest("nexusfield")}
                      className={`p-5 text-left transition-all ${interest === "nexusfield" ? "bg-amber-500" : "bg-zinc-900 hover:bg-zinc-800"}`}>
                      <p className={`font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-sm ${interest === "nexusfield" ? "text-zinc-950" : "text-white"}`}>Nexus Field App</p>
                      <p className={`font-['DM_Sans'] text-xs mt-0.5 ${interest === "nexusfield" ? "text-zinc-950/60" : "text-zinc-600"}`}>Field Service Software</p>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-px bg-zinc-800">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "John Doe" },
                    { label: "Email", name: "email", type: "email", placeholder: "john@example.com" },
                    { label: "Business Name", name: "business", type: "text", placeholder: "Your Business" },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name} className="bg-zinc-900">
                      <label className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 px-5 pt-4 pb-1">{label}</label>
                      <input name={name} type={type} value={(form as any)[name]} onChange={handleChange} placeholder={placeholder}
                        className="w-full bg-transparent px-5 pb-4 text-white placeholder:text-zinc-700 font-['DM_Sans'] text-sm outline-none focus:bg-zinc-800 transition-colors" />
                    </div>
                  ))}
                  <div className="bg-zinc-900">
                    <label className="block font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 px-5 pt-4 pb-1">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5}
                      className="w-full bg-transparent px-5 pb-4 text-white placeholder:text-zinc-700 font-['DM_Sans'] text-sm outline-none resize-none focus:bg-zinc-800 transition-colors" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                    Send Message <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
