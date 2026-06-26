import { motion } from "motion/react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const posts = [
  {
    category: "Local SEO",
    date: "June 10, 2026",
    title: "Why Hampton Roads Businesses Need Hyper-Local SEO in 2026",
    excerpt:
      "With more consumers searching for services 'near me,' local SEO has never been more critical for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News. Here's how to dominate your local market.",
    readTime: "5 min read",
    featured: true,
  },
  {
    category: "Field Service Tech",
    date: "June 2, 2026",
    title: "Why Your Field Service Team Is Losing Money on Untracked Parts",
    excerpt:
      "Most field service businesses have no idea how many parts walk off trucks with no job record attached. We break down how parts tracking software pays for itself — and why we built it into Nexus Field for free.",
    readTime: "6 min read",
    featured: true,
  },
  {
    category: "Website Development",
    date: "May 28, 2026",
    title: "5 Signs Your Business Website Is Costing You Customers",
    excerpt:
      "A slow, outdated, or poorly designed website can silently drain leads from your business. Discover the top warning signs and what modern website development can do to turn things around.",
    readTime: "4 min read",
    featured: false,
  },
  {
    category: "Veteran Business",
    date: "May 15, 2026",
    title: "Military Discipline and the Digital Marketing Mindset",
    excerpt:
      "The values learned in the Marine Corps — mission focus, adaptability, and executing under pressure — translate directly into building successful digital strategies for small businesses.",
    readTime: "6 min read",
    featured: false,
  },
  {
    category: "Field Service Tech",
    date: "May 5, 2026",
    title: "What to Look for in a Field Service App (And What Most Get Wrong)",
    excerpt:
      "There are dozens of field service management apps on the market. Most are bloated, overpriced, or built by people who've never dispatched a tech. Here's what actually matters.",
    readTime: "7 min read",
    featured: false,
  },
  {
    category: "Web Design",
    date: "April 30, 2026",
    title: "Mobile-First Design: Why 70% of Your Visitors Are on Their Phones",
    excerpt:
      "If your website isn't optimized for mobile, you're losing more than half your potential customers. We break down what mobile-first website development means and why it matters for your bottom line.",
    readTime: "4 min read",
    featured: false,
  },
  {
    category: "AI & SEO",
    date: "April 14, 2026",
    title: "How AI Search Is Changing SEO for Local Service Businesses",
    excerpt:
      "Google's AI Overviews and tools like ChatGPT are reshaping how people find businesses online. Learn how to optimize your website to appear in AI-driven search results and stay ahead of the competition.",
    readTime: "7 min read",
    featured: false,
  },
  {
    category: "Digital Strategy",
    date: "March 28, 2026",
    title: "Building a Digital Presence from Scratch: A Step-by-Step Guide",
    excerpt:
      "Whether you're launching a new business in Hampton Roads or modernizing an established one, this guide walks you through every step of building a strong, lead-generating digital presence.",
    readTime: "8 min read",
    featured: false,
  },
  {
    category: "Google & Local Search",
    date: "June 18, 2026",
    title: "Your Google Business Profile Is Free Real Estate — Are You Using It?",
    excerpt:
      "Most local businesses set up their Google Business Profile once and forget about it. That's a mistake. An optimized profile can put you at the top of local search results without spending a dollar on ads. Here's exactly what to do.",
    readTime: "5 min read",
    featured: false,
  },
  {
    category: "Reputation & Reviews",
    date: "June 5, 2026",
    title: "How to Get More Google Reviews (And Why They Matter More Than You Think)",
    excerpt:
      "For local service businesses, Google reviews are one of the most powerful things you can have — and one of the easiest to neglect. We break down a simple system for getting reviews consistently without it feeling awkward or pushy.",
    readTime: "4 min read",
    featured: false,
  },
  {
    category: "Copywriting",
    date: "May 20, 2026",
    title: "Your Website Looks Great. But Does It Say the Right Things?",
    excerpt:
      "A well-designed website with weak copy still loses customers. Most small business sites tell visitors what they do but never explain why it matters or why they should call today. Here's how to fix the words on your site without hiring a copywriter.",
    readTime: "6 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Local SEO": "bg-green-50 text-green-700",
  "Field Service Tech": "bg-blue-50 text-blue-700",
  "Website Development": "bg-indigo-50 text-indigo-700",
  "Veteran Business": "bg-red-50 text-red-700",
  "Web Design": "bg-violet-50 text-violet-700",
  "AI & SEO": "bg-orange-50 text-orange-700",
  "Digital Strategy": "bg-slate-100 text-slate-700",
  "Google & Local Search": "bg-yellow-50 text-yellow-700",
  "Reputation & Reviews": "bg-teal-50 text-teal-700",
  "Copywriting": "bg-rose-50 text-rose-700",
};

export default function Blog() {
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-blue-400 mb-4">Insights & Resources</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Digital Marketing & Field Service Insights
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Practical tips on website development, local SEO, field service technology, and digital strategy from a veteran-owned perspective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Featured</p>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featured.map((post, idx) => (
              <motion.div
                key={post.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-700"}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition leading-snug">{post.title}</h2>
                    <p className="text-slate-600 leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* All Posts */}
          <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">All Posts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, idx) => (
              <motion.div
                key={post.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                transition={{ delay: (idx % 3) * 0.08 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-slate-100 text-slate-700"}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="font-black text-slate-900 mb-3 group-hover:text-blue-600 transition leading-snug">{post.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-slate-600 mb-4 text-lg">Want personalized digital marketing advice for your business?</p>
            <a href="https://wavenexusos.polsia.app/intake" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
                Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
