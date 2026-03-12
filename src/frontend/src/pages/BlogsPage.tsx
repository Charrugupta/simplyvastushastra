import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { BLOG_POSTS, type BlogPost } from "../data/blogPosts";
import { getCmsBlogPosts } from "../data/cmsBlogPosts";

const ALL_CATEGORY = "All";

function injectBlogsJsonLd(posts: BlogPost[]) {
  const existing = document.getElementById("blogs-jsonld");
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = "blogs-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SimplyVastuShastra Blog",
    description:
      "Expert Vastu Shastra articles, tips, and guides by Charru Gupta",
    url: "https://simplyvastushastra.com/blogs",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://simplyvastushastra.com/blogs/${post.slug}`,
      name: post.title,
    })),
  });
  document.head.appendChild(script);
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = useMemo(() => [...BLOG_POSTS, ...getCmsBlogPosts()], []);

  // SEO setup
  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Vastu Blog | Tips for Delhi NCR & UP | SimplyVastuShastra";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Vastu tips for Noida, Delhi, Gurgaon, Ghaziabad, Greater Noida & UP by Charru Gupta. Expert guides on home Vastu, office Vastu, wealth & remedies. Updated regularly.",
      );
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? "";
    if (canonicalEl) {
      canonicalEl.setAttribute("href", "https://simplyvastushastra.com/blogs");
    }

    injectBlogsJsonLd(allPosts);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
      const script = document.getElementById("blogs-jsonld");
      if (script) script.remove();
    };
  }, [allPosts]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allPosts.map((p) => p.category)));
    return [ALL_CATEGORY, ...cats];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORY || post.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [allPosts, activeCategory, searchQuery]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #FFF8E7 0%, #FDF6E3 100%)",
      }}
    >
      {/* Hero Header */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE4D0 100%)",
        }}
      >
        {/* Decorative Om watermark */}
        <div
          className="absolute right-0 top-0 text-right leading-none select-none pointer-events-none opacity-[0.04]"
          aria-hidden="true"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(200px, 30vw, 400px)",
            color: "#C9A84C",
            transform: "translateY(-20%)",
          }}
        >
          ॐ
        </div>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto mb-8"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex items-center gap-2 text-sm text-brown-medium">
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                to="/"
                className="hover:text-gold transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="text-gold/40">
              ›
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span className="text-brown-text font-medium" itemProp="name">
                Blog
              </span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              ✦ Vastu Wisdom ✦
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brown-text leading-tight mb-4">
              Vastu Blog —
              <br />
              <span className="text-gold-gradient">
                Tips for Delhi NCR &amp; UP
              </span>
            </h1>
            <p className="text-brown-medium text-lg md:text-xl font-accent italic max-w-2xl mt-4">
              Expert Vastu guidance by Charru Gupta, Noida's trusted Vastu
              consultant — practical tips for homes &amp; businesses in Noida,
              Delhi, Gurgaon, Ghaziabad, Greater Noida &amp; across Uttar
              Pradesh.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-xl"
          >
            <label htmlFor="blog-search" className="sr-only">
              Search blog posts
            </label>
            <div className="relative">
              <input
                id="blog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tips, guides, topics…"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 bg-white/80 text-brown-text placeholder:text-brown-light text-sm font-medium transition-all duration-200 outline-none"
                style={{
                  borderColor: "rgba(201,168,76,0.35)",
                  boxShadow: "0 2px 12px rgba(201,168,76,0.08)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C9A84C";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(201,168,76,0.15), 0 2px 12px rgba(201,168,76,0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(201,168,76,0.08)";
                }}
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-brown-text border-gold shadow-sm"
                    : "bg-white/60 text-brown-medium border-gold/25 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-brown-medium text-sm">
              {filteredPosts.length === 0
                ? "No articles found"
                : `${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}`}
              {activeCategory !== ALL_CATEGORY && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-gold font-semibold">
                    {activeCategory}
                  </span>
                </span>
              )}
              {searchQuery && (
                <span>
                  {" "}
                  matching{" "}
                  <span className="text-gold font-semibold">
                    "{searchQuery}"
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* No results state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div
                className="text-6xl mb-4 leading-none"
                aria-hidden="true"
                style={{ color: "rgba(201,168,76,0.25)" }}
              >
                ॐ
              </div>
              <h2 className="font-serif text-2xl font-bold text-brown-text mb-3">
                No articles found
              </h2>
              <p className="text-brown-medium mb-6">
                Try a different search term or browse all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory(ALL_CATEGORY);
                }}
                className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Blog Cards Grid */}
          {filteredPosts.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="text-3xl mb-3"
            aria-hidden="true"
            style={{ color: "#C9A84C" }}
          >
            ॐ
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-3">
            Ready for a Personal Vastu Consultation?
          </h2>
          <p className="text-brown-medium mb-6 font-accent italic">
            Transform your home or office with expert Vastu guidance from Charru
            Gupta.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 btn-gold-shimmer px-8 py-3.5 rounded-full text-sm font-bold shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={itemVariants}
      className="card-elevated rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Cover Image */}
      <Link
        to="/blogs/$slug"
        params={{ slug: post.slug }}
        className="block h-52 relative overflow-hidden"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/generated/blog-vastu-tips.dim_800x480.jpg";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(44,24,16,0.5) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-brown-light">{post.readTime}</span>
          <span className="text-xs text-brown-light/70">{post.date}</span>
        </div>

        <h2 className="font-serif text-base font-bold text-brown-text mb-2 leading-snug group-hover:text-gold-dark transition-colors line-clamp-2">
          <Link to="/blogs/$slug" params={{ slug: post.slug }}>
            {post.title}
          </Link>
        </h2>

        <p className="text-brown-medium text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-brown-light font-medium">
            By {post.author}
          </span>
          <Link
            to="/blogs/$slug"
            params={{ slug: post.slug }}
            className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors inline-flex items-center gap-1 group/link"
            aria-label={`Read: ${post.title}`}
          >
            Read Article
            <span
              className="transition-transform duration-200 group-hover/link:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
