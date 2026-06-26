import { Link } from "react-router";
import { motion } from "motion/react";
import { Globe, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { portfolio } from "../lib/constants";
import { trackEvent } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Portfolio() {
  const filtered = portfolio.filter((p) => p.name !== "Dizon Digital Media");

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Real Projects for Real Businesses</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From local HVAC companies to professional services firms, we help businesses establish strong digital presences that drive leads and build trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
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
                    <Card className="h-full border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mb-6 shadow-lg">
                          <Globe className="h-7 w-7 text-white" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-wider text-blue-600 mb-2">{item.category}</p>
                        <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition">{item.name}</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 flex-1">{item.text}</p>
                        <span className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                          View Project <ExternalLink className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="h-full border-2 border-slate-200">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center mb-6 shadow-lg">
                        <Globe className="h-7 w-7 text-white" />
                      </div>
                      <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">{item.category}</p>
                      <h2 className="text-xl font-black text-slate-900 mb-3">{item.name}</h2>
                      <p className="text-slate-600 leading-relaxed mb-6 flex-1">{item.text}</p>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</span>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Your Business Could Be Next</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
              Ready to build something that actually brings in leads? Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                  Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8">
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
