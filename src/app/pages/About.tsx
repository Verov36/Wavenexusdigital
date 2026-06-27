import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { setPageMeta } from "../metadata";
import { Shield, Target, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import veteranImage1 from "../../imports/1st_vet_image.png";
import veteranImage2 from "../../imports/2nd_vet_logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function About() {
  useEffect(() => {
    setPageMeta(
      "About — Veteran-Owned Web Design & Digital Marketing | Hampton Roads VA",
      "WaveNexus Digital Invest is a veteran-owned local web design and digital marketing company in Hampton Roads, VA. Marine Corps veteran founded. Serving Suffolk, Virginia Beach, Chesapeake, and Newport News businesses with honest, focused digital work."
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-4">Our Story</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
              We're a small team. <br />We take the work seriously.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              WaveNexus Digital Invest is a veteran-owned digital agency and SaaS company based in Hampton Roads, VA. Marine Corps background. Small by choice — we'd rather do great work for a few clients than mediocre work for many.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Veteran Badges */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Card className="border-2 border-slate-200">
              <CardContent className="p-6 flex items-center justify-center bg-white">
                <img src={veteranImage1} alt="Veteran Owned Business" className="max-h-32 w-auto" />
              </CardContent>
            </Card>
            <Card className="border-2 border-slate-200">
              <CardContent className="p-6 flex items-center justify-center bg-white">
                <img src={veteranImage2} alt="Marine Corps Veteran" className="max-h-32 w-auto" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1773434013413-b2c56e94c5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Iwo Jima Memorial"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-blue-600" />
                Our Mission
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Chris founded WaveNexus after leaving the <span className="font-bold text-slate-900">Marine Corps</span> and seeing how many good local businesses were getting left behind online — either paying too much for agencies that didn't care, or just not knowing where to start.
                </p>
                <p>
                  We build websites, handle SEO, and help businesses look the part online. We also built <span className="font-bold text-blue-600">Nexus Field</span> — our own field service management app — because field service companies kept telling us the same thing: the software out there doesn't fit how we work.
                </p>
                <p>
                  We're based in Hampton Roads and we work with businesses across the region. We're not trying to be everything to everyone — just really good at what we do for the clients who trust us with it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')" }}
        />
        <div className="absolute inset-0 bg-slate-50/75" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Our Core Values</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "We finish what we start", desc: "Once we take on a project, we see it through — no halfway handoffs" },
              { icon: Users, title: "We're honest with you", desc: "If something won't work for your situation, we'll tell you" },
              { icon: Zap, title: "We focus on what moves the needle", desc: "Not every tactic is worth your money — we focus on what actually matters for your business" },
              { icon: Award, title: "We sweat the details", desc: "The small stuff adds up — we care about getting things right, not just done" },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="border-2 border-slate-200 hover:border-blue-400 transition-all bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-black text-slate-900 mb-4">How We Work</h2>
              <p className="text-slate-600 leading-relaxed">
                We keep the process simple and transparent. You should always know what's happening, what's next, and who to call if you have a question.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.15 }}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1758876022088-2d46af5635c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Team collaborating on a client project"
                  className="w-full h-56 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", title: "We listen first", desc: "Before we recommend anything, we want to understand what you're actually trying to accomplish" },
              { n: "2", title: "We make a plan together", desc: "No surprise scope creep — we align on what we're building, why, and when" },
              { n: "3", title: "We build and launch", desc: "You stay in the loop throughout. Nothing gets pushed live until you're happy with it" },
              { n: "4", title: "We stick around", desc: "Questions after launch? Changes needed? We're not hard to get ahold of" },
            ].map(({ n, title, desc }) => (
              <motion.div key={n} variants={fadeUp}>
                <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white mb-4">{n}</div>
                  <h3 className="font-black text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-black mb-4">Proudly Serving Hampton Roads</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Suffolk · Virginia Beach · Chesapeake · Newport News · Hampton · Norfolk · Portsmouth · York County · Isle of Wight · Williamsburg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                  Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-bold px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
