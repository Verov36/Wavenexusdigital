"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { NEXUS_FIELD, CAP_BINDS_AT, competitors, nexusMonthly, computeCost } from "@/lib/comparisons";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

// One reference shop, so every row on this page is the same comparison. Eight
// techs and two office seats sits inside every vendor's published seat tiers,
// so nothing here is extrapolated past what they print. The per-competitor
// pages have the slider for any other size.
const REF = { techs: 8, office: 2 };

const rows = competitors.map((c) => {
  const theirs = computeCost(c.pricing, REF.techs, REF.office);
  const theirYearOne = theirs.monthly * 12 + theirs.oneTime;
  const ourYearOne = nexusMonthly(REF.techs) * 12;
  return { c, theirYearOne, ourYearOne, diff: theirYearOne - ourYearOne };
});

export default function CompareIndex() {
  const ourYearOne = nexusMonthly(REF.techs) * 12;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-8 bg-amber-500" />
              <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-amber-500">Honest comparisons</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-barlow font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-6">
              Nexus Field{" "}<br /><span className="text-zinc-600">vs</span> <span className="text-amber-500">the alternatives</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-barlow font-700 text-2xl sm:text-3xl uppercase tracking-wide text-zinc-300 mb-6">
              Their published prices. Our price. No spin either way.
            </motion.p>
            <motion.p variants={fadeUp} className="font-dmsans text-lg text-zinc-400 leading-relaxed max-w-3xl mb-10">
              Every number on these pages comes from the vendor&apos;s own pricing page, re-checked and dated. Where
              a competitor is cheaper for your size of shop, the page says so and tells you by how much. You can
              put your own tech count into the calculator on any of them.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href={NEXUS_FIELD.contactUrl} onClick={() => trackEvent("click", "Compare Index", "Hero Talk")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-barlow font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors">
                Talk to Us <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/nexus-field"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-barlow font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all">
                See Nexus Field
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Same shop, every vendor */}
      <section className="bg-zinc-900 py-20 lg:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <Calculator className="h-5 w-5 text-amber-500" />
              <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-amber-500">
                One shop: {REF.techs} techs, {REF.office} office seats
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white mb-5">
              Year one, same shop, every vendor
            </motion.h2>
            <motion.p variants={fadeUp} className="font-dmsans text-zinc-400 leading-relaxed max-w-3xl mb-12">
              Nexus Field is {usd(ourYearOne)} for this shop. Office and dispatch seats aren&apos;t techs, so we
              don&apos;t bill them &mdash; the other vendors do, which is why their seat count is {REF.techs + REF.office}.
              This size sits inside every vendor&apos;s published tiers, so none of these figures are extrapolated.
            </motion.p>

            <motion.div variants={fadeUp} className="border border-zinc-800 divide-y divide-zinc-800">
              {rows.map(({ c, theirYearOne, diff }) => (
                <Link key={c.slug} href={"/nexus-field/vs/" + c.slug}
                  onClick={() => trackEvent("click", "Compare Index", c.name)}
                  className="group grid sm:grid-cols-[1fr_auto_auto] gap-4 sm:gap-8 items-center p-6 hover:bg-zinc-950/60 transition-colors">
                  <div>
                    <p className="font-barlow font-800 text-xl uppercase text-white group-hover:text-amber-400 transition-colors">
                      Nexus Field vs {c.name}
                    </p>
                    <p className="font-dmsans text-sm text-zinc-500 mt-1">{c.headline}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-barlow font-900 text-2xl text-white tabular-nums">{usd(theirYearOne)}</p>
                    <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mt-1">Their year one</p>
                  </div>
                  <div className="sm:text-right sm:min-w-[11rem]">
                    <p className={"font-barlow font-800 text-sm uppercase tracking-wide " + (diff >= 0 ? "text-amber-500" : "text-zinc-400")}>
                      {diff >= 0
                        ? usd(diff) + " more than us"
                        : usd(-diff) + " less than us"}
                    </p>
                    <p className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mt-1 inline-flex items-center gap-1">
                      See the math <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="font-dmsans text-sm text-zinc-500 leading-relaxed mt-6 max-w-3xl">
              At this size two of the three are cheaper than us on seat price, and we&apos;d rather you heard that
              here than found it out later. Each page breaks the number down, lists what the quote doesn&apos;t
              include, and says plainly where that vendor is the better choice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Where the cap changes the answer */}
      <section className="bg-zinc-950 py-20 lg:py-28 border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-5 w-5 text-amber-500" />
              <span className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-amber-500">The ceiling</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-barlow font-900 text-4xl sm:text-5xl uppercase text-white mb-6">
              Where our price stops and theirs keeps going
            </motion.h2>
            <motion.p variants={fadeUp} className="font-dmsans text-lg text-zinc-400 leading-relaxed mb-5">
              Nexus Field is {NEXUS_FIELD.perTechLabel} a tech a month with nothing above {NEXUS_FIELD.capLabel} a
              month, however many techs you run. The cap starts saving you money at {CAP_BINDS_AT} techs, and from
              there every tech you hire is free. Seat-based pricing does the opposite: the bigger you get, the more
              the gap grows.
            </motion.p>
            <motion.p variants={fadeUp} className="font-dmsans text-lg text-zinc-400 leading-relaxed mb-10">
              That is the honest shape of it. Under about a dozen techs, a cheap seat plan is hard to beat on price
              alone, and the comparison pages show you the figures. Past that, the ceiling is the whole argument.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {competitors.map((c) => (
                <Link key={c.slug} href={"/nexus-field/vs/" + c.slug}
                  className="inline-flex items-center gap-2 font-barlow font-700 uppercase tracking-widest text-xs text-amber-500 border border-zinc-800 hover:border-amber-500/40 px-4 py-2 transition-colors">
                  Nexus Field vs {c.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="font-jetbrains text-[10px] uppercase tracking-widest text-zinc-600 mt-10 leading-relaxed">
              Prices are each vendor&apos;s own published figures on the date shown on their comparison page, and
              change without notice. ServiceTitan, Housecall Pro and Jobber are trademarks of their owners.
              WaveNexus Digital Invest is not affiliated with any of them.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-jetbrains text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Bring Your Renewal Quote</p>
              <h2 className="font-barlow font-900 text-4xl sm:text-5xl uppercase leading-[0.9] text-zinc-950">
                We&apos;ll tell you if you should stay
              </h2>
            </div>
            <div>
              <p className="font-dmsans text-zinc-900 leading-relaxed mb-6">
                Send us what you pay now and what it&apos;s missing. If switching wouldn&apos;t save you money or
                time, we&apos;ll say so on the call &mdash; that answer is worth more to us than a bad fit.
              </p>
              <Link href={NEXUS_FIELD.contactUrl} onClick={() => trackEvent("click", "Compare Index", "CTA Talk")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-950 text-white font-barlow font-800 uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Talk to Us <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
