import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiYoutube } from "react-icons/si";

const videos = [
  {
    id: "iIcxUE-puXQ",
    title: "Vastu for Home",
    description: "Transform your home with ancient Vastu wisdom",
  },
  {
    id: "9T444pZlcN4",
    title: "Vastu Tips",
    description: "Practical Vastu tips for daily life",
  },
  {
    id: "agDOneEa2_k",
    title: "Vastu Remedies",
    description: "Simple Vastu remedies without demolition",
  },
  {
    id: "wTRhzD5ItKg",
    title: "Vastu for Office",
    description: "Boost your business with Vastu",
  },
  {
    id: "JUtIhiIpxUk",
    title: "Vastu Principles",
    description: "Core Vastu principles explained",
  },
  {
    id: "uWtgN4_Bzlg",
    title: "Expert Insights",
    description: "Expert Vastu insights by Charru Gupta",
  },
];

function VideoCard({
  video,
  isActive,
  onPlay,
  index,
}: {
  video: (typeof videos)[number];
  isActive: boolean;
  onPlay: (id: string) => void;
  index: number;
}) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex-shrink-0 group"
      style={{ flex: "0 0 auto" }}
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-300"
        style={{
          border: isActive
            ? "1.5px solid rgba(201,168,76,0.85)"
            : "1.5px solid rgba(201,168,76,0.2)",
          boxShadow: isActive
            ? "0 0 0 1px rgba(201,168,76,0.25), 0 8px 40px rgba(201,168,76,0.22), 0 2px 12px rgba(0,0,0,0.4)"
            : "0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.25)",
          background: "#0d0a06",
        }}
      >
        {/* Video / Thumbnail area — 16:9 */}
        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%", background: "#0d0a06" }}
        >
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="iframe"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <iframe
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none", display: "block" }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {/* Thumbnail image */}
                <img
                  src={thumbnailUrl}
                  alt={`${video.title} — Charru Gupta Vastu`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,10,6,0.75) 0%, rgba(13,10,6,0.15) 60%, transparent 100%)",
                  }}
                />

                {/* Premium gold play button overlay — full card clickable */}
                <button
                  type="button"
                  onClick={() => onPlay(video.id)}
                  aria-label={`Play ${video.title}`}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{ background: "transparent" }}
                >
                  <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle at 38% 38%, rgba(240,208,128,0.95), rgba(201,168,76,0.90) 55%, rgba(184,134,11,0.85))",
                        boxShadow:
                          "0 0 0 1px rgba(255,248,231,0.2), 0 4px 24px rgba(201,168,76,0.5), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
                        backdropFilter: "blur(4px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      {/* Outer glow ring */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          border: "1.5px solid rgba(240,208,128,0.6)",
                          boxShadow: "0 0 16px rgba(201,168,76,0.35)",
                        }}
                      />
                      {/* Play triangle */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: "12px solid transparent",
                          borderBottom: "12px solid transparent",
                          borderLeft: "20px solid rgba(44,24,16,0.9)",
                          marginLeft: 4,
                          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                        }}
                      />
                    </div>

                    {/* Subtle pulse ring around play button */}
                    <div
                      className="absolute rounded-full pointer-events-none animate-pulse-ring"
                      style={{
                        width: 90,
                        height: 90,
                        border: "1.5px solid rgba(201,168,76,0.35)",
                      }}
                    />
                  </div>
                </button>

                {/* YouTube logo badge — top right (non-interactive) */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full pointer-events-none"
                  style={{
                    background: "rgba(13,10,6,0.7)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <SiYoutube className="text-red-500" size={14} />
                  <span
                    className="text-[10px] font-bold tracking-wide"
                    style={{ color: "rgba(255,248,231,0.85)" }}
                  >
                    YouTube
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card info footer */}
        <div
          className="px-5 py-4"
          style={{
            background: "linear-gradient(to bottom, #16110a 0%, #0d0a06 100%)",
            borderTop: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <h3
            className="font-serif font-bold text-base leading-tight mb-1"
            style={{ color: "#F5F0E8" }}
          >
            {video.title}
          </h3>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,248,231,0.55)" }}
          >
            {video.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function YouTubeCarousel() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerView = viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, videos.length - cardsPerView);
  // Clamp currentIndex when viewport resizes and maxIndex shrinks
  const safeIndex = Math.min(currentIndex, maxIndex);

  const handlePlay = useCallback((id: string) => {
    setActiveVideoId(id);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Gap between cards in px
  const gapPx = cardsPerView === 1 ? 0 : 20;

  return (
    <section
      id="youtube"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #16100a 0%, #1e1508 45%, #130e07 100%)",
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)",
      }}
    >
      {/* Sacred geometry background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* Ambient gold glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C9A84C 20%, #F0D080 50%, #C9A84C 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px flex-1 max-w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))",
              }}
            />
            <span
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase"
              style={{ color: "rgba(201,168,76,0.8)" }}
            >
              <SiYoutube className="text-red-500" size={14} />
              Charru Gupta on YouTube
            </span>
            <div
              className="h-px flex-1 max-w-16"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)",
              }}
            />
          </div>

          <h2
            className="font-serif font-bold leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              background:
                "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #D4AF37 70%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Watch &amp; Learn
          </h2>

          <p
            className="text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(255,248,231,0.6)" }}
          >
            Discover ancient Vastu wisdom through expert insights, practical
            tips, and real transformation stories
          </p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative">
          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            aria-label="Previous videos"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background:
                safeIndex === 0
                  ? "rgba(44,24,16,0.3)"
                  : "linear-gradient(135deg, rgba(201,168,76,0.9), rgba(184,134,11,0.85))",
              border: `1.5px solid ${safeIndex === 0 ? "rgba(201,168,76,0.15)" : "rgba(240,208,128,0.5)"}`,
              boxShadow:
                safeIndex === 0
                  ? "none"
                  : "0 4px 16px rgba(201,168,76,0.35), 0 1px 4px rgba(0,0,0,0.3)",
              opacity: safeIndex === 0 ? 0.35 : 1,
              cursor: safeIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={safeIndex === 0 ? "rgba(201,168,76,0.5)" : "#2C1810"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={safeIndex === maxIndex}
            aria-label="Next videos"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background:
                safeIndex === maxIndex
                  ? "rgba(44,24,16,0.3)"
                  : "linear-gradient(135deg, rgba(201,168,76,0.9), rgba(184,134,11,0.85))",
              border: `1.5px solid ${safeIndex === maxIndex ? "rgba(201,168,76,0.15)" : "rgba(240,208,128,0.5)"}`,
              boxShadow:
                safeIndex === maxIndex
                  ? "none"
                  : "0 4px 16px rgba(201,168,76,0.35), 0 1px 4px rgba(0,0,0,0.3)",
              opacity: safeIndex === maxIndex ? 0.35 : 1,
              cursor: safeIndex === maxIndex ? "not-allowed" : "pointer",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                safeIndex === maxIndex ? "rgba(201,168,76,0.5)" : "#2C1810"
              }
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden mx-2 md:mx-3">
            <motion.div
              className="flex"
              style={{ gap: gapPx }}
              animate={{
                x: `calc(-${safeIndex * (100 / cardsPerView)}% - ${safeIndex * gapPx}px)`,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {videos.map((video, i) => (
                <div
                  key={video.id}
                  style={{
                    flex: `0 0 calc(${100 / cardsPerView}% - ${gapPx === 0 ? 0 : (gapPx * (cardsPerView - 1)) / cardsPerView}px)`,
                    minWidth: 0,
                  }}
                >
                  <VideoCard
                    video={video}
                    isActive={activeVideoId === video.id}
                    onPlay={handlePlay}
                    index={i}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot indicators */}
        <div
          className="flex items-center justify-center gap-2.5 mt-8"
          role="tablist"
          aria-label="Video carousel pages"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: dot indicators are purely positional
              key={`dot-${i}`}
              type="button"
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className="transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full"
              style={{
                width: i === safeIndex ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  i === safeIndex
                    ? "linear-gradient(90deg, #C9A84C, #F0D080)"
                    : "rgba(201,168,76,0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://www.youtube.com/channel/UCwwCrDePJusBqQlX7bnGCAQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            style={{
              border: "1.5px solid rgba(201,168,76,0.6)",
              color: "#C9A84C",
              background: "rgba(201,168,76,0.06)",
              boxShadow: "0 2px 12px rgba(201,168,76,0.1)",
            }}
          >
            <SiYoutube className="text-red-500" size={18} />
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(19,14,7,0.6))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
