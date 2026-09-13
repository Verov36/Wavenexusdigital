import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Minus, ExternalLink, Calculator } from "lucide-react";
import { setPageMeta } from "../metadata";
import { trackEvent } from "../lib/analytics";
import { NEXUS_FIELD, competitors, getCompetitor } from "../lib/comparisons";
import NotFound from "./NotFound";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export default function Compare() {
  const { slug } = useParams();
  const c = getCompetitor(slug);
  const [techs, setTechs] = useState(8);
  const [office, setOffice] = useState(2);

  useEffect(() => {
    if (c) setPageMeta(c.metaTitle, c.metaDescription, `/nexus-field/vs/${c.slug}`);
    window.scrollTo(0, 0);
  }, [c]);

  if (!c) return <NotFound />;

  const theirs = c.cost(techs, office);
  const theirYearOne = theirs.monthly * 12 + theirs.oneTime;
  const ourYearOne = NEXUS_FIELD.perTechMonthly * techs * 12;
  const diff = theirYearOne - ourYearOne;
  const others = competitors.filter((o) => o.slug !== c.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div key={c.slug} initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Honest comparison · Checked {c.checked}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-6">
              Nexus Field<br /><span className="text-zinc-600">vs</span> <span className="text-amber-500">{c.name}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['Barlow_Condensed'] font-700 text-2xl sm:text-3xl uppercase tracking-wide text-zinc-300 mb-6">
              {c.headline}
            </motion.p>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
              {c.intro}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to={NEXUS_FIELD.contactUrl} onClick={() => trackEvent("click", "Compare", `${c.name} — Hero Talk`)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Talk to Us <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/nexus-field"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                See Nexus Field
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">The Short Version</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">Three things that decide it</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-px bg-zinc-800">
            {c.glance.map(({ label, them, us, estimate }) => (
              <motion.div key={label} variants={fadeUp} className="bg-zinc-900 p-8">
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-6">{label}</p>
                <div className="flex justify-between items-end gap-4 mb-2">
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 whitespace-nowrap">{c.name}</span>
                  <span className="font-['Barlow_Condensed'] font-800 text-2xl text-zinc-400 text-right leading-tight">{them}{estimate && <sup className="text-amber-500 text-sm ml-0.5">*</sup>}</span>
                </div>
                <div className="h-px bg-zinc-800 my-3" />
                <div className="flex justify-between items-end gap-4">
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 whitespace-nowrap">Nexus Field</span>
                  <span className="font-['Barlow_Condensed'] font-900 text-4xl text-white text-right leading-none">{us}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="font-['DM_Sans'] text-xs text-zinc-600 mt-4">
            <span className="text-amber-500">*</span> {c.estimateNote}
          </p>
        </div>
      </section>

      {/* Side by side */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Side by Side</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white">Line by line</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 pr-6 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 w-1/4"></th>
                  <th className="text-left py-4 px-6 font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-zinc-400 text-lg w-[37.5%]">{c.name}</th>
                  <th className="text-left py-4 pl-6 font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-amber-500 text-lg w-[37.5%] border-l-2 border-amber-500/40 bg-amber-500/[0.03]">Nexus Field</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map(({ label, them, us, estimate }) => (
                  <tr key={label} className="border-b border-zinc-800/60 hover:bg-zinc-900/50 transition-colors">
                    <td className="py-5 pr-6 align-top font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-zinc-500">{label}</td>
                    <td className="py-5 px-6 align-top font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed">
                      <span className="flex gap-3"><Minus className="h-4 w-4 text-zinc-700 flex-shrink-0 mt-0.5" /><span>{them}{estimate && <sup className="text-amber-500 ml-0.5">*</sup>}</span></span>
                    </td>
                    <td className="py-5 pl-6 align-top font-['DM_Sans'] text-sm text-zinc-200 leading-relaxed border-l-2 border-amber-500/40 bg-amber-500/[0.03]">
                      <span className="flex gap-3"><Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" /><span>{us}</span></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost example */}
      <section className="bg-zinc-900 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Year One</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white leading-[0.9] mb-6">
                What your shop<br /><span className="text-amber-500">actually pays</span>
              </h2>
              <p className="font-['DM_Sans'] text-zinc-400 leading-relaxed mb-6">
                Set your crew. For {c.name} we pick the cheapest plan that covers your seat count at their published month-to-month rate, so this is their best case, not their worst.
              </p>
              <label className="block mb-5">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 flex items-center gap-2 mb-3"><Calculator className="h-3.5 w-3.5" /> Technicians: <span className="text-white text-sm">{techs}</span></span>
                <input type="range" min={1} max={40} value={techs} onChange={(e) => setTechs(Number(e.target.value))}
                  className="w-full accent-amber-500" aria-label="Number of technicians" />
              </label>
              <label className="block">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 flex items-center gap-2 mb-3">Office &amp; dispatch users: <span className="text-white text-sm">{office}</span></span>
                <input type="range" min={0} max={10} value={office} onChange={(e) => setOffice(Number(e.target.value))}
                  className="w-full accent-amber-500" aria-label="Number of office and dispatch users" />
              </label>
              <p className={`font-['DM_Sans'] text-sm leading-relaxed mt-8 p-4 border-l-2 ${diff >= 0 ? "border-amber-500 text-zinc-300" : "border-zinc-600 text-zinc-400"}`}>
                {diff >= 0
                  ? <>At this size Nexus Field comes out <span className="text-white">{usd(diff)}</span> lower in year one — before anything on {c.name}'s "not in that number" list.</>
                  : <>Straight answer: at this size {c.name} is <span className="text-white">{usd(-diff)}</span> a year cheaper on seat price. What that number doesn't include is listed under their total. That's what the $75 buys.</>}
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-zinc-800">
              <motion.div variants={fadeUp} className="bg-zinc-900 p-8 flex flex-col">
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-6">{c.name}</p>
                <dl className="space-y-3 font-['DM_Sans'] text-sm">
                  {theirs.lines.map((l) => (
                    <div key={l.label} className="flex justify-between gap-4">
                      <dt className="text-zinc-500">{l.label}{l.note && <span className="block text-[11px] text-zinc-600">{l.note}</span>}</dt>
                      <dd className="text-zinc-300 whitespace-nowrap">{l.amount === null ? "—" : usd(l.amount)}</dd>
                    </div>
                  ))}
                </dl>
                <div className="h-px bg-zinc-800 my-5" />
                <p className="font-['Barlow_Condensed'] font-900 text-4xl text-zinc-300">{usd(theirYearOne)}</p>
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mt-1">{theirs.caption}</p>
                <div className="mt-6 pt-5 border-t border-zinc-800">
                  <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Not in that number</p>
                  <ul className="space-y-1.5">
                    {theirs.notIncluded.map((n) => (
                      <li key={n} className="flex gap-2 font-['DM_Sans'] text-xs text-zinc-500"><Minus className="h-3.5 w-3.5 text-zinc-700 flex-shrink-0 mt-0.5" />{n}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-zinc-950 p-8 border-2 border-amber-500/40 flex flex-col">
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-6">Nexus Field</p>
                <dl className="space-y-3 font-['DM_Sans'] text-sm">
                  <div className="flex justify-between gap-4"><dt className="text-zinc-500">{NEXUS_FIELD.perTechLabel} × {techs} techs × 12</dt><dd className="text-zinc-200 whitespace-nowrap">{usd(ourYearOne)}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-500">{office} office &amp; dispatch users</dt><dd className="text-zinc-200">$0</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-zinc-500">Setup</dt><dd className="text-zinc-400 text-right">minimal, quoted on the call</dd></div>
                </dl>
                <div className="h-px bg-zinc-800 my-5" />
                <p className="font-['Barlow_Condensed'] font-900 text-4xl text-white">{usd(ourYearOne)} <span className="font-['DM_Sans'] font-normal text-sm text-zinc-500">+ setup</span></p>
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mt-1">Same price in year two</p>
                <div className="mt-6 pt-5 border-t border-zinc-800">
                  <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-3">In that number</p>
                  <ul className="space-y-1.5">
                    {["Every feature. No tiers, no add-ons.", "Warehouse and per-truck parts inventory", "Configured to your job types, terminology, and parts", "Training for your team before go-live", "Mobile and desktop"].map((n) => (
                      <li key={n} className="flex gap-2 font-['DM_Sans'] text-xs text-zinc-300"><Check className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" />{n}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honest: where they win / where we win */}
      <section className="bg-zinc-950 py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-zinc-600" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-500">To Be Fair</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-8">Where {c.name} is<br />the better choice</h2>
            <div className="space-y-px">
              {c.theyWin.map(({ title, body }) => (
                <div key={title} className="bg-zinc-900 p-6 border-l-2 border-zinc-700">
                  <h3 className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-lg mb-1">{title}</h3>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">And Where We Are</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-8">Nexus Field is<br /><span className="text-amber-500">the better fit if</span></h2>
            <ul className="space-y-px">
              {c.weWin.map((line) => (
                <li key={line} className="flex gap-4 items-start bg-zinc-900 p-5 border-l-2 border-amber-500">
                  <Check className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="font-['DM_Sans'] text-sm text-zinc-300 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sources + other comparisons */}
      <section className="bg-zinc-900 py-14 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Sources &amp; how we got these numbers</p>
          <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-5">{c.sourceNote}</p>
          <ul className="space-y-2">
            {c.sources.map(({ label, url }) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm text-zinc-400 hover:text-amber-400 transition-colors">
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />{label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mt-6">{c.name} is a trademark of its owner. WaveNexus Digital Invest is not affiliated with {c.name}.</p>

          {others.length > 0 && (
            <div className="mt-10 pt-8 border-t border-zinc-800">
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Also compared</p>
              <div className="flex flex-wrap gap-2">
                {others.map((o) => (
                  <Link key={o.slug} to={`/nexus-field/vs/${o.slug}`}
                    className="inline-flex items-center gap-2 font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 border border-zinc-800 hover:border-amber-500/40 px-4 py-2 transition-colors">
                    Nexus Field vs {o.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Bring Your Current Bill</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase leading-[0.9] text-zinc-950">
                We'll put the numbers next to each other on a call.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-['DM_Sans'] text-zinc-950/70 leading-relaxed">
                {NEXUS_FIELD.perTechLabel} per tech. Office users free. No contract. Minimal setup, scoped on the call. If it's not a fit, we'll tell you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={NEXUS_FIELD.demoUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click", "Compare", `${c.name} — Demo`)}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Request a Demo <ArrowRight className="h-5 w-5" />
                </a>
                <Link to={NEXUS_FIELD.contactUrl}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                  Talk to Us First
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
