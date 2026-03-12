import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return count;
}

const stats = [
  { value: 1000, suffix: "+", label: "Families Consulted", icon: "🏠" },
  { value: 3000, suffix: "+", label: "Students Certified", icon: "🎓" },
  { value: 7, suffix: "+", label: "Years of Mastery", icon: "✦" },
  { value: 5, suffix: "★", label: "Rated Across India", icon: "⭐" },
];

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof stats)[number];
  index: number;
  active: boolean;
}) {
  const count = useCounter(stat.value, 2000 + index * 100, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.12, ease: "easeOut" }}
      className="relative group"
    >
      <div
        className="rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden transition-all duration-400"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(201,168,76,0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Top border glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 opacity-60"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div className="text-2xl mb-3" aria-hidden="true">
          {stat.icon}
        </div>

        {/* Number */}
        <div
          className="font-serif text-4xl sm:text-5xl font-bold leading-none mb-2"
          style={{
            background:
              "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}
          {stat.suffix}
        </div>

        {/* Label */}
        <p
          className="text-sm sm:text-base font-medium tracking-wide"
          style={{ color: "rgba(255,248,231,0.75)" }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function TransformationStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16"
      style={{
        background:
          "linear-gradient(135deg, #1A0A05 0%, #2C1810 50%, #1A0A05 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Large Om watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(180px, 30vw, 360px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.05)",
          userSelect: "none",
        }}
      >
        ॐ
      </div>

      {/* Radial glow at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              background: "rgba(201,168,76,0.07)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
              style={{ background: "#C9A84C" }}
              aria-hidden="true"
            />
            Our Impact
            <span
              className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
              style={{ background: "#C9A84C", animationDelay: "0.4s" }}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{
            background:
              "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Spaces Transformed.
          <br />
          Lives Changed.
        </motion.h2>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div
            className="h-[1px] w-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))",
            }}
            aria-hidden="true"
          />
          <span style={{ color: "#C9A84C", fontSize: "0.85rem" }}>✦</span>
          <div
            className="h-[1px] w-20"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)",
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-center text-base sm:text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
          style={{ color: "rgba(255,248,231,0.65)" }}
        >
          The science of Vastu has changed thousands of homes across India.
          <br className="hidden sm:block" />
          Your transformation is next.
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              active={isInView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold-magnetic px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg shadow-[0_4px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_8px_40px_rgba(201,168,76,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Vastu Journey →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
