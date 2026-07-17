import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Calendar, BookOpen, Package, AlertTriangle, CheckCircle2 } from "lucide-react";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

export default function BlogPostPartsTracking() {
  useEffect(() => {
    setPageMeta(
      "Parts Are Walking Off Your Trucks. Here's How to Track Them Without Adding Admin Work",
      "HVAC, plumbing, and electrical contractors in Hampton Roads lose 5–10% of material value every year to untracked parts. Here's how Nexus Field solves the truck-level inventory problem.",
      "/blog/parts-walking-off-trucks"
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-zinc-950 pt-24 pb-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Back */}
            <motion.div variants={fadeUp} className="mb-10">
              <Link to="/blog"
                className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 hover:text-amber-500 transition-colors">
                <ArrowLeft className="h-3 w-3" /> Back to Blog
              </Link>
            </motion.div>

            {/* Meta */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest px-2 py-1 border text-amber-400 border-amber-400/30 bg-amber-400/10">
                Field Service Tech
              </span>
              <div className="flex items-center gap-1.5 text-zinc-600">
                <Calendar className="h-3 w-3" />
                <span className="font-['JetBrains_Mono'] text-[10px]">Jul 17, 2026</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-600">
                <BookOpen className="h-3 w-3" />
                <span className="font-['JetBrains_Mono'] text-[10px]">7 min read</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] text-white mb-8">
              Parts Are Walking<br />Off Your Trucks.<br />
              <span className="text-amber-500">Here's How to<br />Track Them</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed border-l-4 border-amber-500 pl-5">
              Inventory shrinkage isn't just a line item on your P&L. It's a leak in your hull.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-zinc-900 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Van shelving with organized parts inventory"
            className="w-full h-72 object-cover grayscale"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="bg-zinc-950 py-16 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              For HVAC, plumbing, and electrical contractors in Hampton Roads, parts don't just disappear. They walk off the truck one unrecorded copper fitting at a time.
            </p>
            <p>
              The numbers don't add up, and nobody knows why.
            </p>
            <p>
              You stock the warehouse. You load the vans. But by the end of the month, your "recorded inventory" and "actual inventory" are two different stories. If you aren't tracking inventory at the truck level, you're losing between <strong className="text-amber-400">5% and 10% of your material value every year.</strong>
            </p>
            <p className="font-semibold text-white">That is pure profit, gone.</p>
          </div>

          {/* Section: Inventory Black Hole */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
                The Inventory Black Hole
              </h2>
            </div>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              Most field service businesses treat trucks like black holes. Parts go in. Revenue (hopefully) comes out. But the middle part — the actual usage — is a mess of scribbled notes, "I'll do it later" promises, and forgotten SKUs.
            </p>
            <p>
              When a technician pulls a capacitor or a specific breaker for a Friday afternoon emergency call, reporting it is the last thing on their mind. They want to finish the job and go home.
            </p>
            <p>
              The result? The part is installed, the customer is happy, but the invoice never sees that material cost. <strong className="text-white">You just gave away your inventory for free.</strong>
            </p>
          </div>

          {/* Section: Why Paperwork Fails */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
              Why Paperwork Fails Your Mission
            </h2>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              We've seen the "system" many local trades use. It usually involves a clipboard or a generic spreadsheet that someone — usually a stressed-out office manager — has to reconcile at midnight.
            </p>
            <p>
              Manual tracking is a failure point. It adds admin bloat. It creates friction. If your field service management software makes a technician jump through hoops to log a part, they won't do it.
            </p>
            <p>
              You don't need more paperwork. You need a streamlined dispatch flow where <strong className="text-white">inventory tracking is a byproduct of the job, not an extra chore.</strong>
            </p>
          </div>

          {/* Section: Real Cost */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
              The Real Cost of "Close Enough"
            </h2>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>Let's talk brass tacks.</p>
            <p>
              If you carry $50,000 in inventory across your warehouse and three trucks, a 5% shrinkage rate is <strong className="text-amber-400">$2,500 down the drain.</strong>
            </p>
            <p>
              In the high-stakes world of HVAC and plumbing, where margins are tightened by fuel costs and labor, that $2,500 is your marketing budget. It's your new equipment fund. It's your profit.
            </p>
          </div>

          {/* Two failure modes */}
          <div className="my-10 space-y-px">
            {[
              {
                n: "01",
                heading: "The Phantom Stockout",
                body: "Your system says you have the motor. You send the tech. The tech finds an empty bin. The job is delayed. The customer is upset. Your reputation takes the hit.",
              },
              {
                n: "02",
                heading: "The Margin Killer",
                body: "You absorb the cost of the material because it wasn't billed. Your job costing looks great on paper, but your bank account tells a different story.",
              },
            ].map(({ n, heading, body }) => (
              <div key={n} className="bg-zinc-900 p-8 flex gap-6 items-start group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500">
                <div className="font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/30 group-hover:text-amber-500/60 transition-colors flex-shrink-0 w-12">{n}</div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-2 group-hover:text-amber-400 transition-colors">{heading}</h4>
                  <p className="font-['DM_Sans'] text-zinc-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Nexus Field */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
                Nexus Field: Built for the Trenches
              </h2>
            </div>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              At WaveNexus, we didn't build Nexus Field to look pretty in a demo. We built it to work in a service van at 6:00 PM in the middle of July.
            </p>
            <p>
              Our field service management software is designed with a "no-bloat" philosophy. We focus on what actually moves the needle for contractors in Southeast Virginia. Specifically, we solve the truck-level inventory problem.
            </p>
          </div>

          <div className="my-10 space-y-px">
            {[
              {
                heading: "Truck-Level Precision",
                body: "Every van is its own warehouse. Nexus Field tracks exactly what is on Truck A vs. Truck B. When a tech uses a part, it is deducted from their specific stock instantly — not from a general pool.",
              },
              {
                heading: 'The "No Part, No Close" Rule',
                body: "We ground digital processes in physical reality. You can configure the system so a job cannot be closed until the materials are accounted for. It's about discipline and execution — the same approach that makes military operations work.",
              },
              {
                heading: "Real-Time Reorder Triggers",
                body: "When truck stock hits a par level, the system alerts the office automatically. No more manual truck checks on Saturday mornings. You know what you need before you run out.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="flex gap-4 items-start bg-zinc-900 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group">
                <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-base mb-1 group-hover:text-amber-400 transition-colors">{heading}</h4>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider image */}
          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="HVAC technician on job with parts"
              className="w-full h-52 object-cover grayscale"
            />
          </div>

          {/* Section: 3-Step Plan */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
              How to Stop the Bleed — The 3-Step Plan
            </h2>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed mb-8 text-[17px]">
            <p>If you're tired of the numbers not adding up, you need a mission-focused approach to your inventory.</p>
          </div>

          <div className="space-y-px mb-10">
            {[
              {
                n: "01",
                heading: "Standardize Your Truck Stock",
                body: "Every HVAC or plumbing van should carry a specific 'load out.' Don't let techs build personal stockpiles. Standardize the SKUs so tracking is predictable and audits take minutes, not hours.",
              },
              {
                n: "02",
                heading: "Kill the Free-Text Entry",
                body: "If your techs are typing in 'gold pipe thingy,' your data is useless. Use a system with pre-loaded SKU lists so part selection is fast, accurate, and searchable.",
              },
              {
                n: "03",
                heading: "Execute Weekly Cycle Counts",
                body: "Don't wait for an annual inventory nightmare. Pick five high-value items every Friday. Count them. Reconcile them. Catch the drift before it becomes a flood.",
              },
            ].map(({ n, heading, body }) => (
              <div key={n} className="bg-zinc-900 p-8 flex gap-6 items-start group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500">
                <div className="font-['Barlow_Condensed'] font-900 text-3xl text-amber-500/30 group-hover:text-amber-500/60 transition-colors flex-shrink-0 w-10">{n}</div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] font-800 text-lg uppercase text-white mb-2 group-hover:text-amber-400 transition-colors">{heading}</h4>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px] mt-10">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">No More Excuses</h2>
            <p>
              As a US Marine Corps Veteran-owned company, we don't believe in "cookie-cutter" packages that fail when things get messy. We provide field service management software for small business owners who are serious about growth.
            </p>
            <p>
              If you're operating in Chesapeake, Virginia Beach, or Norfolk, you don't have time for software that requires a PhD to operate. You need a tool that tracks your parts, protects your margins, and stays out of the way.
            </p>
            <p className="font-semibold text-white text-xl">
              Stop letting your profit walk off the truck. Your inventory is your capital. If you don't control it, it will control you.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Secure Your Inventory Today</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase leading-[0.9] text-zinc-950">
                Let's lock down your truck stock.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-['DM_Sans'] text-zinc-950/70 leading-relaxed">
                We don't do high-pressure sales. If you want to see how Nexus Field can stop the "black hole" of unbilled materials, we'll walk you through it — no obligation, 24/7 support backed by a 100% satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                  Talk to Us <ArrowRight className="h-5 w-5" />
                </a>
                <Link to="/nexus-field"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all">
                  See Nexus Field
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="bg-zinc-950 py-10 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/blog/field-service-software-vs-spreadsheets"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 hover:text-amber-500 transition-colors">
            <ArrowLeft className="h-3 w-3" /> Previous Post
          </Link>
          <Link to="/blog"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 hover:text-amber-500 transition-colors">
            All Posts <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </>
  );
}
