import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { setPageMeta } from "../metadata";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { show: { transition: { staggerChildren: 0.07 } } };

type Post = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
  slug?: string;
};

const posts: Post[] = [
  {
    category: "Field Service Tech",
    date: "Jul 17, 2026",
    title: "Field Service Software vs. Spreadsheets: Which One Actually Saves You Money?",
    excerpt: "Spreadsheets look cheap — no subscription fee. But the average contractor using them loses $44,200 a year in unbilled time and a 15–20% error rate eating their margins. The real math doesn't lie.",
    readTime: "8 min",
    featured: true,
    slug: "/blog/field-service-software-vs-spreadsheets",
  },
  {
    category: "Field Service Tech",
    date: "Jul 17, 2026",
    title: "Parts Are Walking Off Your Trucks. Here's How to Track Them Without Adding Admin Work",
    excerpt: "For HVAC, plumbing, and electrical contractors in Hampton Roads, parts don't just disappear — they walk off one unrecorded copper fitting at a time. If you aren't tracking at the truck level, you're losing 5–10% of your material value every year.",
    readTime: "7 min",
    featured: true,
    slug: "/blog/parts-walking-off-trucks",
  },
  { category: "Local SEO", date: "Jun 18, 2026", title: "Your Google Business Profile Is Free Real Estate — Are You Using It?", excerpt: "Most local businesses set up their Google Business Profile once and forget about it. An optimized profile can put you at the top of local search results without spending a dollar on ads.", readTime: "5 min", featured: false },
  { category: "Website Development", date: "May 28, 2026", title: "5 Signs Your Business Website Is Costing You Customers", excerpt: "A slow, outdated, or poorly designed website can silently drain leads. Here are the top warning signs and what modern web design can do to turn things around.", readTime: "4 min", featured: false },
  { category: "Veteran Business", date: "May 15, 2026", title: "Military Discipline and the Digital Marketing Mindset", excerpt: "Mission focus, adaptability, and executing under pressure — the values from the Marine Corps translate directly into building successful digital strategies for small businesses.", readTime: "6 min", featured: false },
  { category: "AI & SEO", date: "Apr 14, 2026", title: "How AI Search Is Changing SEO for Local Service Businesses", excerpt: "Google AI Overviews and ChatGPT are reshaping how people find local businesses. Learn how to optimize so your business gets recommended when people ask AI tools for local services.", readTime: "7 min", featured: false },
  { category: "Web Design", date: "Apr 30, 2026", title: "Mobile-First Design: Why 70% of Your Visitors Are on Their Phones", excerpt: "If your website isn't optimized for mobile, you're losing more than half your potential customers. Here's what mobile-first development means and why it matters for your bottom line.", readTime: "4 min", featured: false },
  { category: "Reputation & Reviews", date: "Jun 5, 2026", title: "How to Get More Google Reviews (And Why They Matter More Than You Think)", excerpt: "For local service businesses, Google reviews are one of the most powerful things you can have. A simple system for getting reviews consistently without it feeling awkward.", readTime: "4 min", featured: false },
  { category: "Copywriting", date: "May 20, 2026", title: "Your Website Looks Great. But Does It Say the Right Things?", excerpt: "Most small business sites tell visitors what they do but never explain why it matters or why they should call today. How to fix the words on your site without hiring a copywriter.", readTime: "6 min", featured: false },
  { category: "Digital Strategy", date: "Mar 28, 2026", title: "Building a Digital Presence from Scratch: A Step-by-Step Guide", excerpt: "Whether you're launching a new Hampton Roads business or modernizing an established one, this guide walks through every step of building a strong, lead-generating digital presence.", readTime: "8 min", featured: false },
];

const catColors: Record<string, string> = {
  "Local SEO": "text-green-400 border-green-400/30 bg-green-400/10",
  "Field Service Tech": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "Website Development": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Veteran Business": "text-red-400 border-red-400/30 bg-red-400/10",
  "AI & SEO": "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "Web Design": "text-violet-400 border-violet-400/30 bg-violet-400/10",
  "Reputation & Reviews": "text-teal-400 border-teal-400/30 bg-teal-400/10",
  "Copywriting": "text-rose-400 border-rose-400/30 bg-rose-400/10",
  "Digital Strategy": "text-zinc-400 border-zinc-400/30 bg-zinc-400/10",
};

export default function Blog() {
  useEffect(() => {
    setPageMeta("Blog — Digital Marketing & Field Service Insights | WaveNexus",
      "Practical tips on website development, local SEO, AI search, field service technology, and digital strategy from a veteran-owned perspective in Hampton Roads, VA.",
      "/blog");
  }, []);

  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

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
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500">Insights & Resources</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8">
              Digital Marketing<br /><span className="text-amber-500">& Field Service</span><br />Insights
            </motion.h1>
            <motion.p variants={fadeUp} className="font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed">
              Practical tips on web design, local SEO, AI search, field service tech, and digital strategy — from a veteran-owned perspective.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-zinc-900 py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Featured</p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-px bg-zinc-800">
            {featured.map(post => {
              const inner = (
                <>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest px-2 py-1 border ${catColors[post.category] ?? "text-zinc-400 border-zinc-700"}`}>{post.category}</span>
                    <div className="flex items-center gap-1.5 text-zinc-600">
                      <Calendar className="h-3 w-3" />
                      <span className="font-['JetBrains_Mono'] text-[10px]">{post.date}</span>
                    </div>
                  </div>
                  <h2 className="font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-4 group-hover:text-amber-400 transition-colors leading-tight">{post.title}</h2>
                  <p className="font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-zinc-700">
                      <BookOpen className="h-3 w-3" /><span className="font-['JetBrains_Mono'] text-[10px]">{post.readTime} read</span>
                    </div>
                    <span className="font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </>
              );
              const cls = "bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500 cursor-pointer block h-full";
              return (
                <motion.div key={post.title} variants={fadeUp}>
                  {post.slug
                    ? <Link to={post.slug} className={cls}>{inner}</Link>
                    : <div className={cls}>{inner}</div>
                  }
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* All posts */}
      <section className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-6">All Posts</p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 mb-12">
            {rest.map(post => (
              <motion.div key={post.title} variants={fadeUp}
                className="bg-zinc-950 p-7 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest px-2 py-1 border ${catColors[post.category] ?? "text-zinc-400 border-zinc-700"}`}>{post.category}</span>
                  <span className="font-['JetBrains_Mono'] text-[9px] text-zinc-700">{post.date}</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-800 text-lg uppercase text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">{post.title}</h3>
                <p className="font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center border-t border-border pt-12">
            <p className="font-['DM_Sans'] text-zinc-500 mb-5">Want personalized digital advice for your business?</p>
            <Link to="/audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
              Get Your Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
