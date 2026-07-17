import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Calendar, BookOpen, DollarSign, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

export default function BlogPostSpreadsheets() {
  useEffect(() => {
    setPageMeta(
      "Field Service Software vs. Spreadsheets: Which One Actually Saves You Money?",
      "Spreadsheets look free but cost Hampton Roads contractors $44,200/year in lost billable time. See the real ROI of switching to field service management software like Nexus Field.",
      "/blog/field-service-software-vs-spreadsheets"
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
                <span className="font-['JetBrains_Mono'] text-[10px]">8 min read</span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] text-white mb-8">
              Field Service Software<br />vs. Spreadsheets:<br />
              <span className="text-amber-500">Which One Actually<br />Saves You Money?</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed border-l-4 border-amber-500 pl-5">
              "Free" is the most expensive word in your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-zinc-900 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <img
            src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Field service contractor using tablet on job site"
            className="w-full h-72 object-cover grayscale"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="bg-zinc-950 py-16 border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">

            <p>
              Most contractors in Hampton Roads start with spreadsheets. It makes sense at first. Excel is already on your computer, and Google Sheets doesn't cost a dime. You think you're being lean. You think you're saving money.
            </p>
            <p className="font-semibold text-white text-xl">You're wrong.</p>
            <p>
              Spreadsheets aren't a management tool — they're a leaky bucket. Every hour you spend "massaging" data into a cell is an hour you aren't billing a client. Every time a technician forgets to log a part used on a job in Virginia Beach, that's cash walking right off your truck.
            </p>
            <p>
              If you're serious about scaling your trade business, you need to stop acting like a data entry clerk and start acting like a commander.
            </p>
          </div>

          {/* Section: Hidden Tax */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
                The Hidden Tax of Manual Entry
              </h2>
            </div>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              Spreadsheets look cheap because there's no monthly subscription. But the true cost is buried in your payroll.
            </p>
            <p>
              Research shows that the average contractor using spreadsheets spends roughly <strong className="text-white">10 hours per week</strong> on administrative overhead: scheduling, updating customer info, and fixing errors. At a standard billable rate of $85/hour, that's <strong className="text-amber-400">$44,200 in lost billable time every single year.</strong>
            </p>
            <p>That isn't "free." That is a massive operational tax.</p>
          </div>

          {/* Stat callout */}
          <div className="my-10 grid sm:grid-cols-3 gap-px bg-zinc-800">
            {[
              { val: "10hrs", label: "Admin overhead per week (avg)", sub: "Scheduling, data entry, fixing errors" },
              { val: "$85", label: "Standard billable rate", sub: "Per hour of technician time" },
              { val: "$44,200", label: "Lost billable time per year", sub: "The real cost of 'free' tools" },
            ].map(({ val, label, sub }) => (
              <div key={label} className="bg-zinc-900 p-6 text-center">
                <div className="font-['Barlow_Condensed'] font-900 text-4xl text-amber-500 mb-2">{val}</div>
                <div className="font-['DM_Sans'] text-sm text-white font-semibold mb-1">{label}</div>
                <div className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-zinc-600">{sub}</div>
              </div>
            ))}
          </div>

          {/* Section: Error rates */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
                15% Error Rates Are Killing Your Margins
              </h2>
            </div>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              Manual data entry is prone to human failure. Industry data confirms that spreadsheets carry a <strong className="text-white">15–20% error rate</strong>. In the field, this looks like:
            </p>
          </div>

          <div className="my-8 space-y-px">
            {[
              "Double-booked appointments in Chesapeake.",
              "Wrong addresses sent to your landscaping crew.",
              "Invoices with missing SKUs or miscalculated labor hours.",
              "Inventory counts that don't match the shelf.",
            ].map(item => (
              <div key={item} className="flex items-start gap-4 bg-zinc-900 px-6 py-4 border-l-2 border-transparent hover:border-amber-500 transition-all">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                <p className="font-['DM_Sans'] text-zinc-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              When you use field service management software, you replace human error with structured workflows. You don't "type" job details — you select them. The system validates the data. The leaks stop.
            </p>
          </div>

          {/* Divider image */}
          <div className="my-12">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Messy paper-based office system"
              className="w-full h-52 object-cover grayscale"
            />
          </div>

          {/* Section: Information Silos */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
              Spreadsheets Are Information Silos
            </h2>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              In a mission-critical environment, communication is everything. Spreadsheets fail because they are static.
            </p>
            <p>
              Your office manager has one version. Your lead electrician has another on his phone. You have a third on your laptop. None of them match. This lack of a "single source of truth" creates bottlenecks that slow down your entire dispatch flow.
            </p>
          </div>

          <div className="my-8 bg-zinc-900 border border-zinc-800 p-8">
            <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-4">The "Where's My Tech?" Problem</h3>
            <p className="font-['DM_Sans'] text-zinc-400 leading-relaxed mb-4">
              When a customer in Norfolk calls asking for an ETA, can you answer them in five seconds?
            </p>
            <p className="font-['DM_Sans'] text-zinc-400 leading-relaxed">
              If you're using spreadsheets, you're calling the tech, waiting for a callback, and then calling the customer back. That's three points of failure for one simple question. Proper field service software gives you real-time job status. You see the tech. You answer the customer immediately. That is how you build a reputation for reliability.
            </p>
          </div>

          {/* Section: ROI */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
                The Real ROI of Moving to Software
              </h2>
            </div>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px] mb-10">
            <p>
              Switching to a platform like Nexus Field isn't just about "organizing." It's about revenue generation.
            </p>
          </div>

          <div className="space-y-px bg-zinc-800 mb-10">
            {[
              {
                icon: TrendingUp,
                stat: "35% More Jobs Per Day",
                body: "Data from top-performing trades shows that contractors using dedicated software complete 30–40% more jobs per technician per day. By optimizing routes and automating dispatch, you eliminate the 'dead time' between jobs. For a mid-sized electrical or landscaping team, this throughput increase can translate to thousands of additional monthly revenue per technician.",
              },
              {
                icon: Clock,
                stat: "60% Faster Payment Cycles",
                body: "Cash flow is the lifeblood of your business. If it takes three days to get a service ticket back to the office and another two to mail an invoice, your money is sitting in someone else's pocket for a week longer than it should. Field service software allows for same-day digital invoicing. Payment cycles can drop from 38 days down to just 7 days.",
              },
            ].map(({ icon: Icon, stat, body }) => (
              <div key={stat} className="bg-zinc-900 p-8 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-3">{stat}</h3>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Why Local */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-14 mb-6">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">
              Mission Readiness for Hampton Roads Contractors
            </h2>
          </motion.div>

          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px]">
            <p>
              We don't build software for tech companies. We build it for people who get their hands dirty. Whether you need landscaping management software to track recurring maintenance contracts in Suffolk or electrical contractor software to manage complex job histories in Newport News, the objective remains the same: <strong className="text-white">eliminate the bloat.</strong>
            </p>
            <p>
              Most "big-box" software companies sell you a package filled with features you'll never use. They want you to change your business to fit their code. At WaveNexus Digital Invest, we take the opposite approach. We're a US Marine Corps Veteran-owned agency. We understand discipline, execution, and the specific needs of local trade businesses in Southeast Virginia.
            </p>
          </div>

          <div className="my-10 space-y-px">
            {[
              { n: "01", heading: "Job Tracking", body: "Know exactly what's happening, when, and where — in real time." },
              { n: "02", heading: "Inventory Management", body: "Stop parts from 'walking off trucks' without a record." },
              { n: "03", heading: "Photo Databases", body: "Document every job for quality control and dispute resolution." },
              { n: "04", heading: "No Outsourcing", body: "You work with us, 24/7, right here in the US." },
            ].map(({ n, heading, body }) => (
              <div key={n} className="bg-zinc-900 p-6 flex gap-6 items-start group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500">
                <div className="font-['Barlow_Condensed'] font-900 text-3xl text-amber-500/30 group-hover:text-amber-500/60 transition-colors flex-shrink-0 w-10">{n}</div>
                <div>
                  <h4 className="font-['Barlow_Condensed'] font-800 text-lg uppercase text-white mb-1 group-hover:text-amber-400 transition-colors">{heading}</h4>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="font-['DM_Sans'] text-zinc-300 leading-relaxed space-y-6 text-[17px] mt-10">
            <h2 className="font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white">Stop Guessing. Start Executing.</h2>
            <p>
              The numbers don't lie. Spreadsheets are costing you tens of thousands of dollars in hidden inefficiencies every year. Software is an investment that pays for itself by reclaiming billable hours and accelerating your cash flow.
            </p>
            <p>
              If your current system involves spreadsheets, sticky notes, and text message chains, you're leaving money on the table. Sticking with spreadsheets is a choice to stay small. It's a choice to accept a 20% error rate. It's a choice to pay for "free" tools with your most valuable asset: your time.
            </p>
            <p>
              <strong className="text-white">Nexus Field was built to solve the "leaky bucket" problem.</strong> It is lean, fast, and designed for the field.
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
              <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4">Ready to Stop the Leak?</p>
              <h2 className="font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase leading-[0.9] text-zinc-950">
                Let's look at your workflow and find the leaks.
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-['DM_Sans'] text-zinc-950/70 leading-relaxed">
                No high-pressure sales. We'll look at your current process, identify what's costing you, and show you exactly how Nexus Field can tighten your operation.
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
          <Link to="/blog"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 hover:text-amber-500 transition-colors">
            <ArrowLeft className="h-3 w-3" /> All Posts
          </Link>
          <Link to="/blog/parts-walking-off-trucks"
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 hover:text-amber-500 transition-colors">
            Next Post <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </>
  );
}
