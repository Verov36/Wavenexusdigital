"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import site from "@/lib/site.json";
import { AREAS, AREA_HUB as HUB, type Area } from "@/lib/seo/pages";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`h-[2px] w-8 ${dark ? "bg-zinc-950" : "bg-amber-500"}`} />
      <span className={`font-jetbrains text-[11px] uppercase tracking-[0.2em] ${dark ? "text-zinc-950/60" : "text-amber-500"}`}>{children}</span>
    </div>
  );
}

export default function ServiceArea({ area }: { area: Area }) {
  const isHub = area.slug === HUB;
  const others = AREAS.filter((a) => a.slug !== area.slug && a.slug !== HUB);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}><Eyebrow>{isHub ? "Service Area" : `${area.short}, VA`}</Eyebrow></motion.div>
            <motion.h1 variants={fadeUp} className="font-barlow font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] text-white mb-8">
              {area.h1}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-dmsans text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10">
              {area.intro}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <Link href="/audit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-barlow font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
                Free Website Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.phoneE164}`}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-700 text-white font-barlow font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all">
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Eyebrow>{isHub ? "One Region, Many Markets" : `Doing Business in ${area.short}`}</Eyebrow>
            <div className="space-y-5 font-dmsans text-zinc-400 text-lg leading-relaxed">
              {area.local.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-zinc-950 py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white leading-[0.9]">
              How We Help {area.short} Businesses
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-px bg-zinc-800">
            {area.focus.map(([title, body], i) => (
              <motion.div key={title} variants={fadeUp}
                className="bg-zinc-900 p-8 border-b-2 border-transparent hover:border-amber-500 transition-colors">
                <div className="font-barlow font-900 text-4xl text-amber-500/30 mb-4 leading-none">0{i + 1}</div>
                <h3 className="font-barlow font-800 text-xl uppercase tracking-wider text-white mb-3">{title}</h3>
                <p className="font-dmsans text-sm text-zinc-400 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="font-dmsans text-sm text-zinc-500 mt-6">
            See everything we offer on our <Link href="/services" className="text-amber-500 hover:text-amber-400 underline underline-offset-4">services page</Link>, or our <Link href="/custom-apps" className="text-amber-500 hover:text-amber-400 underline underline-offset-4">custom app development</Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-900 py-20 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white leading-[0.9] mb-10">
            {area.short} Web Design FAQ
          </h2>
          <div className="space-y-px bg-zinc-800">
            {area.faq.map(([q, a]) => (
              <div key={q} className="bg-zinc-950 p-6 sm:p-8">
                <h3 className="font-barlow font-800 text-xl uppercase tracking-wide text-white mb-3">{q}</h3>
                <p className="font-dmsans text-zinc-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Eyebrow dark>{isHub ? "Pick Your City" : "Also Serving"}</Eyebrow>
          <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-zinc-950 leading-[0.9] mb-8">
            {isHub ? "Web Design by City" : "Across Hampton Roads"}
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {others.map((a) => (
              <Link key={a.slug} href={`/web-design/${a.slug}`}
                className="px-5 py-3 border-2 border-zinc-950 text-zinc-950 font-barlow font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                {a.short}
              </Link>
            ))}
            {!isHub && (
              <Link href={`/web-design/${HUB}`}
                className="px-5 py-3 bg-zinc-950 text-amber-500 font-barlow font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                All of Hampton Roads
              </Link>
            )}
          </div>
          <p className="font-dmsans text-zinc-950/70">
            {site.name} · Norfolk, VA · <a href={`tel:${site.phoneE164}`} className="underline underline-offset-4">{site.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
