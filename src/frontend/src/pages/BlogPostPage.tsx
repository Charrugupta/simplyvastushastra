import { Link, useParams } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useMemo } from "react";
import CmsBlogRenderer from "../components/CmsBlogRenderer";
import { BLOG_POSTS } from "../data/blogPosts";
import type { ExtendedBlogPost } from "../data/blogPostsExtended";
import { getCmsBlogPosts } from "../data/cmsBlogPosts";

function injectBlogPostJsonLd(post: (typeof BLOG_POSTS)[0]) {
  const existing = document.getElementById("blogpost-jsonld");
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = "blogpost-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://simplyvastushastra.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://simplyvastushastra.com",
    },
    publisher: {
      "@type": "Organization",
      name: "SimplyVastuShastra",
      url: "https://simplyvastushastra.com",
      logo: {
        "@type": "ImageObject",
        url: "https://simplyvastushastra.com/assets/generated/logo-charru-gupta.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://simplyvastushastra.com/blogs/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-IN",
  });
  document.head.appendChild(script);
}

export default function BlogPostPage() {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug;
  const post = useMemo(
    () =>
      ([...BLOG_POSTS, ...getCmsBlogPosts()] as ExtendedBlogPost[]).find(
        (p) => p.slug === slug,
      ) ?? null,
    [slug],
  );

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const allPosts = [
      ...BLOG_POSTS,
      ...getCmsBlogPosts(),
    ] as ExtendedBlogPost[];
    const sameCat = allPosts.filter(
      (p) => p.slug !== post.slug && p.category === post.category,
    );
    const others = allPosts.filter(
      (p) => p.slug !== post.slug && p.category !== post.category,
    );
    const combined = [...sameCat, ...others];
    return combined.slice(0, 3);
  }, [post]);

  // SEO
  useEffect(() => {
    if (!post) return;

    const extPost = post as ExtendedBlogPost;

    const prevTitle = document.title;
    document.title =
      extPost._isCms && extPost._metaTitle
        ? extPost._metaTitle
        : `${post.title} | SimplyVastuShastra`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? "";
    if (canonicalEl) {
      canonicalEl.setAttribute(
        "href",
        extPost._isCms && extPost._canonicalUrl
          ? extPost._canonicalUrl
          : `https://simplyvastushastra.com/blogs/${post.slug}`,
      );
    }

    // OG meta
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";
    const prevOgUrl = ogUrl?.getAttribute("content") ?? "";
    const prevOgImage = ogImage?.getAttribute("content") ?? "";

    if (ogTitle)
      ogTitle.setAttribute("content", `${post.title} | SimplyVastuShastra`);
    if (ogDesc) ogDesc.setAttribute("content", post.metaDescription);
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://simplyvastushastra.com/blogs/${post.slug}`,
      );
    if (ogImage)
      ogImage.setAttribute(
        "content",
        extPost._isCms && extPost._ogImage
          ? extPost._ogImage
          : `https://simplyvastushastra.com${post.coverImage}`,
      );

    injectBlogPostJsonLd(post);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc);
      if (ogUrl) ogUrl.setAttribute("content", prevOgUrl);
      if (ogImage) ogImage.setAttribute("content", prevOgImage);
      const script = document.getElementById("blogpost-jsonld");
      if (script) script.remove();
    };
  }, [post]);

  // Scroll to top when slug changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally scroll on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // 404 state
  if (!post) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center py-32 px-4"
        style={{ background: "#FFF8E7" }}
      >
        <div
          className="text-6xl mb-4 text-gold/30 font-serif"
          aria-hidden="true"
        >
          ॐ
        </div>
        <h1 className="font-serif text-3xl font-bold text-brown-text mb-3">
          Article Not Found
        </h1>
        <p className="text-brown-medium mb-8 text-center max-w-md">
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/blogs"
          className="btn-gold px-8 py-3 rounded-full font-semibold text-sm"
        >
          ← Back to All Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#FFF8E7" }}>
      {/* Hero Cover Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/assets/generated/blog-fallback.jpg";
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(44,24,16,0.75) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Category badge on hero */}
        <div className="absolute bottom-6 left-6 right-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold text-white bg-gold/80 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight line-clamp-3">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-4 md:px-6 py-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex items-center gap-2 text-sm text-brown-medium flex-wrap">
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
              <Link
                to="/blogs"
                className="hover:text-gold transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li aria-hidden="true" className="text-gold/40">
              ›
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="text-brown-text font-medium truncate max-w-[200px] md:max-w-none"
            >
              <span itemProp="name">{post.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-brown-medium hover:text-gold transition-colors mb-8 group"
        >
          <span
            className="transition-transform duration-200 group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>
          All Blogs
        </Link>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-8 pb-6"
          style={{ borderBottom: "1px solid rgba(201,168,76,0.25)" }}
        >
          <span className="text-xs font-bold text-gold-deep bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-brown-light flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime}
          </span>
          <span className="text-xs text-brown-light flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {post.date}
          </span>
          <span className="text-xs text-brown-light flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {post.author}
          </span>
        </motion.div>

        {/* Article Content */}
        {(post as ExtendedBlogPost)._isCms &&
        (post as ExtendedBlogPost)._htmlContent ? (
          <CmsBlogRenderer
            htmlContent={(post as ExtendedBlogPost)._htmlContent!}
          />
        ) : (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="blog-article"
          >
            {post.content}
          </motion.article>
        )}

        {/* Keywords (for SEO, visually as tags) */}
        <div
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
        >
          <p className="text-xs font-semibold text-brown-light uppercase tracking-wider mb-3">
            Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs text-brown-medium bg-gold/8 border border-gold/20 px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Author card */}
        <div
          className="mt-10 p-6 rounded-2xl"
          style={{
            background: "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          <div className="flex items-start gap-4">
            <img
              src="/assets/generated/logo-charru-gupta.png"
              alt="Charru Gupta"
              className="w-14 h-14 rounded-full object-cover border-2"
              style={{ borderColor: "#C9A84C" }}
            />
            <div>
              <p className="font-serif font-bold text-brown-text">
                Charru Gupta
              </p>
              <p className="text-xs text-gold font-semibold mb-1">
                Vastu Consultant & Expert — SimplyVastuShastra
              </p>
              <p className="text-sm text-brown-medium leading-relaxed">
                Certified Vastu Shastra practitioner with 7+ years of experience
                and 1000+ successful consultations across India and
                internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div
          className="mt-10 p-8 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, #3D2B1F 0%, #5C3A28 50%, #3D2B1F 100%)",
          }}
        >
          <div
            className="text-3xl mb-2 text-gold/60 font-serif"
            aria-hidden="true"
          >
            ॐ
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-cream mb-2">
            Book a Consultation with Charru Gupta
          </h2>
          <p className="font-accent italic text-cream/70 text-sm mb-6">
            Get personalised Vastu guidance for your home, office, or business.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 btn-gold-shimmer px-8 py-3 rounded-full font-bold text-sm"
          >
            Book Your Consultation
          </a>
        </div>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          className="py-16 px-4"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  to="/blogs/$slug"
                  params={{ slug: relPost.slug }}
                  className="card-elevated rounded-2xl overflow-hidden group flex flex-col"
                >
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={relPost.coverImage}
                      alt={relPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
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
                        {relPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-brown-light mb-2">
                      {relPost.readTime}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-brown-text leading-snug group-hover:text-gold-dark transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
