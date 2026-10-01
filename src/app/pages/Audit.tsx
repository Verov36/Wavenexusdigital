import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { COMPANY_INFO, TEL_HREF, submitToCrm } from "../lib/constants";
import { trackEvent } from "../lib/analytics";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

type Kind = "audit" | "demo";

const COPY: Record<Kind, { eyebrow: string; title: string; intro: string; formTitle: string; button: string; points: string[] }> = {
  audit: {
    eyebrow: "Free Website Audit",
    title: "Get Your Free Audit",
    intro: "Tell us where you are online and we'll give you an honest look at what's working, what isn't, and what would actually bring in more calls. No pitch, no packages you don't need.",
    formTitle: "Request Your Audit",
    button: "Get My Free Audit",
    points: [
      "Speed and mobile check: how your site performs on the phones your customers use",
      "Google and AI search: how you show up when locals search for what you do",
      "Plain-English findings with the fixes that matter most, whether or not you hire us",
    ],
  },
  demo: {
    eyebrow: "Nexus Field Demo",
    title: "See Nexus Field",
    intro: "We'll walk you through Nexus Field set up around how your team actually runs: your job types, your trucks, your parts. Not a generic demo with fake data.",
    formTitle: "Request a Demo",
    button: "Request My Demo",
    points: [
      "$75 per tech a month, office and dispatch users free",
      "Parts inventory (warehouse and truck) included in every plan",
      "No contract, and your price is held for two years",
    ],
  },
};

const TRADES = ["HVAC", "Plumbing", "Electrical", "Landscaping", "General Contracting", "Appliance Repair", "Pest Control", "Security Systems", "Other"];

const empty = { name: "", business: "", email: "", phone: "", website: "", trade: "", city: "", crew: "", message: "", company_site: "" };

export default function Audit() {
  const [searchParams, setSearchParams] = useSearchParams();
  const kind: Kind = searchParams.get("type") === "demo" ? "demo" : "audit";
  const copy = COPY[kind];

  useEffect(() => {
    setPageMeta(
      "/audit",
      kind === "demo"
        ? {
            title: "Request a Nexus Field Demo | WaveNexus Digital Invest",
            description:
              "Request a demo of Nexus Field field service software, configured around how your HVAC, plumbing, or electrical team works. $75 per tech a month, no contract.",
          }
        : undefined,
    );
  }, [kind]);

  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.business || (!form.email && !form.phone)) {
      toast.error("Please add your name, business, and an email or phone number.");
      return;
    }
    setSending(true);
    try {
      const details = kind === "demo" && form.crew ? `Techs in the field: ${form.crew}` : "";
      await submitToCrm({
        name: form.name,
        business: form.business,
        email: form.email,
        phone: form.phone,
        website: form.website,
        trade: form.trade,
        city: form.city,
        interest: kind === "demo" ? "nexus field demo" : "website audit",
        message: [details, form.message].filter(Boolean).join("\n\n"),
        company_site: form.company_site,
      });
      trackEvent("submit", kind === "demo" ? "Demo Request" : "Audit Request", form.trade || "Unspecified");
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      toast.error(`${(err as Error).message} You can also call or text ${COMPANY_INFO.phone}.`);
    } finally {
      setSending(false);
    }
  };

  const field = "w-full bg-transparent px-5 pb-4 text-white placeholder:text-zinc-700 font-['DM_Sans'] text-sm outline-none focus:bg-zinc-800 transition-colors";
  const labelCls = "block font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 px-5 pt-4 pb-1";

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
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">{copy.eyebrow}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              {copy.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">{copy.intro}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-px">
              {/* Audit / demo toggle */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-px bg-zinc-800 mb-px">
                {(["audit", "demo"] as Kind[]).map((k) => (
                  <button key={k} type="button" aria-pressed={kind === k} onClick={() => { setSent(false); setSearchParams(k === "demo" ? { type: "demo" } : {}); }}
                    className={`p-5 text-left transition-all ${kind === k ? "bg-amber-500" : "bg-zinc-900 hover:bg-zinc-800"}`}>
                    <p className={`font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-sm ${kind === k ? "text-zinc-950" : "text-white"}`}>
                      {k === "demo" ? "Nexus Field Demo" : "Website Audit"}
                    </p>
                    <p className={`font-['DM_Sans'] text-xs mt-0.5 ${kind === k ? "text-zinc-950/60" : "text-zinc-600"}`}>
                      {k === "demo" ? "Field service software" : "Free, no obligation"}
                    </p>
                  </button>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="bg-zinc-900 p-8">
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-5">What you get</p>
                <ul className="space-y-4">
                  {copy.points.map((p) => (
                    <li key={p} className="flex gap-3 font-['DM_Sans'] text-sm text-zinc-300">
                      <Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {[
                { icon: Phone, label: "Rather talk?", value: COMPANY_INFO.phone, href: TEL_HREF },
                { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} variants={fadeUp}
                  className="flex items-center gap-5 bg-zinc-900 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                  <div className="w-10 h-10 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors">
                    <Icon className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-1">{label}</p>
                    <a href={href} className="font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-wide text-white hover:text-amber-400 transition-colors break-all">{value}</a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-3">
              <div className="bg-zinc-900 p-8 border border-border">
                {sent ? (
                  <div className="py-10">
                    <div className="w-12 h-12 bg-amber-500 flex items-center justify-center mb-6">
                      <Check className="h-6 w-6 text-zinc-950" />
                    </div>
                    <h2 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-4">Got It. Thank You.</h2>
                    <p className="font-['DM_Sans'] text-zinc-400 leading-relaxed mb-8">
                      {kind === "demo"
                        ? "We'll reach out to set up a time that works for you and your team."
                        : "We're looking at your online presence now and will reach out with what we find."}{" "}
                      If it's urgent, call or text <a href={TEL_HREF} className="text-amber-400 hover:text-amber-300">{COMPANY_INFO.phone}</a>.
                    </p>
                    <button type="button" onClick={() => { setSent(false); setForm(empty); }}
                      className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                      Send another request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-2">{copy.formTitle}</h2>
                    <p className="font-['DM_Sans'] text-sm text-zinc-500 mb-8">Takes about a minute. We'll only use this to get back to you.</p>

                    <form onSubmit={onSubmit} className="space-y-px bg-zinc-800">
                      {/* Spam trap: hidden from people, bots fill it in */}
                      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                        <label>Company site<input name="company_site" tabIndex={-1} autoComplete="off" value={form.company_site} onChange={onChange} /></label>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-px">
                        {[
                          { label: "Your Name *", name: "name", type: "text", placeholder: "John Doe", auto: "name" },
                          { label: "Business Name *", name: "business", type: "text", placeholder: "Your Business", auto: "organization" },
                          { label: "Email", name: "email", type: "email", placeholder: "john@example.com", auto: "email" },
                          { label: "Phone", name: "phone", type: "tel", placeholder: "(757) 555-0123", auto: "tel" },
                        ].map(({ label, name, type, placeholder, auto }) => (
                          <div key={name} className="bg-zinc-900">
                            <label htmlFor={`audit-${name}`} className={labelCls}>{label}</label>
                            <input id={`audit-${name}`} name={name} type={type} autoComplete={auto} value={(form as Record<string, string>)[name]}
                              onChange={onChange} placeholder={placeholder} className={field} />
                          </div>
                        ))}
                      </div>

                      <div className="bg-zinc-900">
                        <label htmlFor="audit-website" className={labelCls}>Current Website {kind === "audit" && <span className="normal-case tracking-normal text-zinc-700">(leave blank if you don't have one)</span>}</label>
                        <input id="audit-website" name="website" type="text" inputMode="url" autoComplete="url" value={form.website} onChange={onChange}
                          placeholder="yourbusiness.com" className={field} />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-px">
                        <div className="bg-zinc-900">
                          <label htmlFor="audit-trade" className={labelCls}>Type of Business</label>
                          <select id="audit-trade" name="trade" value={form.trade} onChange={onChange} className={`${field} [&>option]:bg-zinc-900 [&>option]:text-white ${form.trade ? "" : "text-zinc-700"}`}>
                            <option value="">Select one</option>
                            {TRADES.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        {kind === "demo" ? (
                          <div className="bg-zinc-900">
                            <label htmlFor="audit-crew" className={labelCls}>Techs in the Field</label>
                            <input id="audit-crew" name="crew" type="text" inputMode="numeric" value={form.crew} onChange={onChange} placeholder="e.g. 6" className={field} />
                          </div>
                        ) : (
                          <div className="bg-zinc-900">
                            <label htmlFor="audit-city" className={labelCls}>City</label>
                            <input id="audit-city" name="city" type="text" autoComplete="address-level2" value={form.city} onChange={onChange} placeholder="Suffolk" className={field} />
                          </div>
                        )}
                      </div>

                      <div className="bg-zinc-900">
                        <label htmlFor="audit-message" className={labelCls}>Anything We Should Know?</label>
                        <textarea id="audit-message" name="message" value={form.message} onChange={onChange} rows={4}
                          placeholder={kind === "demo"
                            ? "How do you track jobs and parts today? (spreadsheets, texts, another app...)"
                            : "What's frustrating you about your site or getting found online?"}
                          className={`${field} resize-none`} />
                      </div>

                      <button type="submit" disabled={sending}
                        className="w-full flex items-center justify-center gap-2 py-5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors disabled:opacity-60">
                        {sending ? "Sending..." : <>{copy.button} <ArrowRight className="h-5 w-5" /></>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
