import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { BLOG_POSTS, type BlogPost } from "../data/blogPosts";
import BlogModal from "./BlogModal";
import SectionHeader from "./SectionHeader";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

// Use first 6 posts on the homepage
const homePosts = BLOG_POSTS.slice(0, 6);

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Blog & Insights"
          headline="Vastu Insights & Tips"
          lead="Practical wisdom from 7+ years of Vastu practice."
          subtitle="Expert knowledge to help you harness the power of Vastu."
          isInView={isInView}
        />

        {/* Blog Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {homePosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="card-elevated rounded-2xl overflow-hidden group flex flex-col cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Cover image */}
              <div
                className="h-52 relative overflow-hidden"
                role="img"
                aria-label={`Cover for ${post.title}`}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay for category badge readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(44,24,16,0.5) 100%)",
                  }}
                  aria-hidden="true"
                />
                {/* Category badge overlay on the image */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-bold text-white bg-black/40 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      color: "#8B6914",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    {post.readTime}
                  </span>
                  <span className="text-xs text-brown-light/70">
                    {post.date}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-brown-text mb-2 leading-snug group-hover:text-gold-dark transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-brown-medium text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-gold font-bold text-sm transition-all group/link w-fit px-0 py-0"
                  style={{ letterSpacing: "0.02em" }}
                  aria-label={`Read more: ${post.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                >
                  Read Article
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 group-hover/link:translate-x-1 group-hover/link:bg-gold/20"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      fontSize: "0.75rem",
                    }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Inline consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center"
        >
          <p className="text-brown-medium text-sm sm:text-base font-accent italic">
            Want Vastu tips for your home?{" "}
            <span className="text-brown-text font-semibold not-italic">
              Get a personalised consultation.
            </span>
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-shrink-0 inline-flex items-center gap-2 btn-gold-magnetic px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_2px_12px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            ✦ Talk to Charru Gupta
          </button>
        </motion.div>

        {/* View All Blogs CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-6 text-center"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 btn-gold px-8 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-gold transition-all duration-300"
          >
            View All Blogs
            <span aria-hidden="true" className="text-base">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Blog Article Modal */}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
