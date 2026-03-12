import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MandalaSVG from "./MandalaSVG";

// Animated counter hook
function useCounter(target: number, duration = 1800, delay = 600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
}

const trustItems = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Consultations" },
  { value: 3000, suffix: "+", label: "Students" },
  { value: 5, suffix: "★", label: "Rated" },
];

function TrustStat({
  item,
  index,
}: { item: (typeof trustItems)[number]; index: number }) {
  const count = useCounter(item.value, 1800, 600 + index * 150);
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="font-serif text-2xl md:text-3xl font-bold text-gold-dark leading-none">
          {count}
          {item.suffix}
        </div>
        <div className="text-brown-medium text-xs font-medium mt-0.5 tracking-wide">
          {item.label}
        </div>
      </div>
      {index < trustItems.length - 1 && (
        <span
          className="text-gold/40 text-2xl font-thin hidden sm:block ml-2"
          aria-hidden="true"
        >
          |
        </span>
      )}
    </div>
  );
}

// Floating particles — scattered golden dots
const particles = [
  { top: "18%", left: "8%", size: 5, delay: 0 },
  { top: "35%", left: "3%", size: 3, delay: 1.2 },
  { top: "65%", left: "12%", size: 4, delay: 2.5 },
  { top: "25%", right: "18%", size: 6, delay: 0.8 },
  { top: "55%", right: "8%", size: 3, delay: 1.9 },
  { top: "72%", right: "22%", size: 5, delay: 3.1 },
  { top: "10%", left: "38%", size: 4, delay: 1.5 },
  { top: "80%", left: "55%", size: 3, delay: 2.2 },
];

export default function Hero() {
  const sweepRef = useRef<HTMLDivElement>(null);
  const [swept, setSwept] = useState(false);
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSwept(true), 200);
    const lineTimer = setTimeout(() => setLineDrawn(true), 400);
    return () => {
      clearTimeout(timer);
      clearTimeout(lineTimer);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #FFF8E7 0%, #F5F0E8 55%, #EDE0C4 100%)",
      }}
    >
      {/* Gold top accent line — animated draw */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C9A84C 20%, #D4AF37 50%, #C9A84C 80%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Animated gold line that draws itself */}
      <div
        className="absolute top-[3px] left-0 h-[1px] bg-gold/30 z-20"
        style={{
          width: lineDrawn ? "100%" : "0",
          transition: lineDrawn
            ? "width 1.5s cubic-bezier(0.4,0,0.2,1)"
            : "none",
        }}
        aria-hidden="true"
      />

      {/* Sacred geometry pattern overlay */}
      <div
        className="sacred-geo-overlay absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.035 }}
      />

      {/* Dot-grid atmospheric overlay */}
      <div
        className="dot-grid-overlay absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.3 }}
      />

      {/* Diagonal golden light sweep — plays once on load */}
      <div
        ref={sweepRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 bottom-0 w-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 50%, transparent 100%)",
            transform: swept
              ? "translateX(500%) skewX(-15deg)"
              : "translateX(-200%) skewX(-15deg)",
            transition: swept
              ? "transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            left: 0,
          }}
        />
      </div>

      {/* Floating gold particles */}
      {particles.map((p) => (
        <div
          key={`p-${p.top}-${p.size}-${p.delay}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right:
              "right" in p
                ? (p as typeof p & { right: string }).right
                : undefined,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #D4AF37, #C9A84C)",
            animationName: "float-particle",
            animationDuration: `${5 + (Math.floor(p.delay) % 3)}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${p.delay}s`,
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Large Om watermark — slow spin */}
      <div
        className="animate-hero-spin absolute select-none"
        style={{
          top: "50%",
          left: "50%",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(240px, 40vw, 500px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201, 168, 76, 0.06)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
        aria-hidden="true"
      >
        ॐ
      </div>

      {/* Radial light pulse behind hero text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse-ring border border-gold/20"
          aria-hidden="true"
        />
      </div>

      {/* Mandala — right side */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[560px] h-[560px] pointer-events-none select-none"
        style={{ opacity: 0.07, color: "#C9A84C" }}
        aria-hidden="true"
      >
        <MandalaSVG />
      </div>

      {/* Smaller accent mandala — bottom left */}
      <div
        className="absolute bottom-12 left-8 w-28 h-28 md:w-44 md:h-44 pointer-events-none select-none"
        style={{ opacity: 0.09, color: "#B8860B" }}
        aria-hidden="true"
      >
        <MandalaSVG />
      </div>

      {/* ── MOBILE LAYOUT: Photo above, text content below ── */}
      <div
        className="lg:hidden relative z-10 w-full flex flex-col"
        style={{ minHeight: "100svh", paddingTop: "72px" }}
      >
        {/* Photo block — top half, no text on it */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative w-full flex-shrink-0"
          style={{ height: "52vw", minHeight: "220px", maxHeight: "340px" }}
        >
          <img
            src="/assets/generated/charru-gupta.png"
            alt="Charru Gupta — Vastu Expert & Founder of SimplyVastuShastra"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 12%" }}
          />
          {/* Subtle bottom fade to blend into content section */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(245,240,232,0.95))",
            }}
            aria-hidden="true"
          />
          {/* Decorative gold frame — top corners */}
          <div
            className="absolute top-3 left-3 w-8 h-8 pointer-events-none"
            style={{
              borderTop: "2px solid rgba(201,168,76,0.7)",
              borderLeft: "2px solid rgba(201,168,76,0.7)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-3 right-3 w-8 h-8 pointer-events-none"
            style={{
              borderTop: "2px solid rgba(201,168,76,0.7)",
              borderRight: "2px solid rgba(201,168,76,0.7)",
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Text content — clean background, fully readable */}
        <div
          className="flex-1 px-5 pt-4 pb-28"
          style={{ background: "linear-gradient(to bottom, #F5F0E8, #FFF8E7)" }}
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-3"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase border text-gold-deep"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(201,168,76,0.45)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-glow-pulse"
                aria-hidden="true"
              />
              Ancient Wisdom · Modern Solutions
            </span>
          </motion.div>

          {/* Name label */}
          <motion.p
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2"
            style={{ color: "#C9A84C" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            Charru Gupta · Founder, SimplyVastuShastra
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="font-serif leading-[1.05] tracking-tight mb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="block text-[2.2rem] font-bold leading-[1.0] text-brown-text">
              Transform Your
            </span>
            <span className="block text-[2.6rem] font-bold leading-[1.0] text-shimmer-gold">
              Home &amp; Life
            </span>
            <span className="block text-[1.1rem] font-normal leading-snug mt-1.5 text-brown-medium">
              Vastu Consultant in Noida · Delhi NCR · UP
            </span>
          </motion.h1>

          {/* Animated gold divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90px" }}
            transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
            className="h-[2px] mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #C9A84C, #F0D080, transparent)",
            }}
            aria-hidden="true"
          />

          {/* Google Reviews chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#5C4033",
                boxShadow: "0 2px 8px rgba(44,24,16,0.07)",
              }}
            >
              <span style={{ color: "#F4B400" }}>★★★★★</span>
              Google Reviews · 5.0 · 1000+ Families
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-3 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <button
              type="button"
              onClick={() => handleScrollTo("#contact")}
              className="btn-gold-magnetic w-full py-4 rounded-full text-[15px] font-bold shadow-[0_4px_20px_rgba(201,168,76,0.4)] text-center min-h-[52px]"
            >
              ✦ Book a Consultation
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo("#courses")}
              className="btn-gold-outline w-full py-3.5 rounded-full text-[14px] text-center min-h-[48px] font-semibold transition-all duration-300"
            >
              Explore Courses
            </button>
          </motion.div>

          {/* Urgency nudge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#8B6914",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: "#22c55e",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
                  animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
                aria-hidden="true"
              />
              Limited slots this month · 12 families joined this week
            </span>
          </motion.div>

          {/* Trust stats — 4-column grid */}
          <motion.div
            className="grid grid-cols-4 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="rounded-xl p-2.5 text-center"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 2px 8px rgba(44,24,16,0.06)",
                }}
              >
                <div
                  className="font-serif text-base font-bold leading-none"
                  style={{ color: "#C9A84C" }}
                >
                  {trustItems[i].value}
                  {item.suffix}
                </div>
                <div
                  className="text-[9px] font-medium mt-0.5 tracking-wide leading-tight"
                  style={{ color: "#7A5C3E" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto w-full px-8 xl:px-16 pt-40 pb-28">
        <div className="flex flex-row items-center justify-between gap-12 xl:gap-16">
          {/* Left: All text & CTAs */}
          <div className="max-w-2xl flex-shrink-0">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase border border-gold/40 text-gold-deep bg-white/60 backdrop-blur-sm shadow-sm">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-glow-pulse"
                  aria-hidden="true"
                />
                Ancient Wisdom · Modern Solutions
                <span
                  className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-glow-pulse"
                  style={{ animationDelay: "0.4s" }}
                  aria-hidden="true"
                />
              </span>
            </motion.div>

            {/* H1 — dramatic 3-line typographic stanza */}
            <motion.h1
              className="font-serif leading-[1.06] tracking-tight mb-6"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <span className="block text-[3.6rem] xl:text-[5rem] font-bold text-brown-text">
                Transform Your
              </span>
              <span className="block text-[4.2rem] xl:text-[5.8rem] font-bold leading-[1.02] text-shimmer-gold">
                Home &amp; Life
              </span>
              <span className="block text-[2.4rem] xl:text-[3.2rem] font-normal text-brown-medium leading-snug mt-1">
                Vastu Consultant in Noida &amp; Delhi NCR
              </span>
            </motion.h1>

            {/* Animated gold line that draws after h1 */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
              className="h-[2px] mb-8 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #C9A84C, #F0D080, transparent)",
              }}
              aria-hidden="true"
            />

            {/* Google Reviews + social proof */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#5C4033",
                  boxShadow: "0 2px 8px rgba(44,24,16,0.08)",
                }}
              >
                <span style={{ color: "#F4B400" }}>★★★★★</span>
                Google Reviews · 5.0
              </span>
              <span className="text-brown-light/60 text-[11px] tracking-[0.1em] uppercase font-medium">
                Trusted by 1000+ Families Across India
              </span>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="font-accent text-xl xl:text-2xl text-brown-medium leading-relaxed mb-8 italic max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            >
              Professional Vastu Consultation &amp; Certified Courses
              <br />
              <span className="not-italic font-semibold text-brown-text text-lg xl:text-xl">
                by Charru Gupta
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => handleScrollTo("#contact")}
                className="btn-gold-magnetic px-9 py-4 rounded-full text-[15px] shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.55)] hover:-translate-y-0.5 transition-all duration-300 min-h-[52px]"
              >
                Book a Consultation
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo("#courses")}
                className="btn-gold-outline px-9 py-4 rounded-full text-[15px] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(201,168,76,0.2)] transition-all duration-300 min-h-[52px]"
              >
                Explore Courses
              </button>
            </motion.div>

            {/* Urgency nudge — desktop */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
              className="mb-9"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[12px] font-semibold"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#7A5C3E",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "#22c55e",
                    boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
                    animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                  }}
                  aria-hidden="true"
                />
                Limited consultation slots this month · 12 families joined this
                week
              </span>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-x-8 gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46, ease: "easeOut" }}
            >
              {trustItems.map((item, i) => (
                <TrustStat key={item.label} item={item} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Right side: Desktop portrait */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div
              className="relative animate-portrait-glow"
              style={{ borderRadius: "50%" }}
            >
              {/* Decorative outer rings */}
              <div
                className="absolute -inset-4 rounded-full opacity-25"
                style={{ border: "1px dashed #C9A84C" }}
                aria-hidden="true"
              />
              <div
                className="absolute -inset-8 rounded-full opacity-12"
                style={{ border: "1px solid #C9A84C" }}
                aria-hidden="true"
              />
              {/* Conic gold ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #C9A84C 0%, #F0D080 25%, #C9A84C 50%, #A07830 75%, #C9A84C 100%)",
                  padding: "3px",
                  borderRadius: "50%",
                }}
                aria-hidden="true"
              />

              {/* Photo container */}
              <div
                className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden"
                style={{
                  border: "4px solid #C9A84C",
                  boxShadow:
                    "inset 0 0 20px rgba(201,168,76,0.15), 0 8px 40px rgba(44,24,16,0.2)",
                }}
              >
                <img
                  src="/assets/generated/charru-gupta.png"
                  alt="Charru Gupta — Vastu Expert & Founder of SimplyVastuShastra"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
            </div>

            {/* Name label below portrait */}
            <div className="mt-5 text-center">
              <p className="font-serif text-xl font-bold text-brown-text leading-tight">
                Charru Gupta
              </p>
              <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mt-0.5">
                Founder, SimplyVastuShastra
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust marquee strip */}
      <div
        className="absolute bottom-14 sm:bottom-20 left-0 right-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {(["copy-a", "copy-b"] as const).map((copyKey) => (
            <span
              key={copyKey}
              className="flex items-center gap-6 pr-6 text-brown-light/60 text-[11px] tracking-[0.15em] uppercase font-medium"
            >
              {[
                { id: "aw", text: "Ancient Vastu Wisdom" },
                { id: "d1", text: "✦" },
                { id: "ye", text: "7+ Years Experience" },
                { id: "d2", text: "✦" },
                { id: "co", text: "1000+ Consultations" },
                { id: "d3", text: "✦" },
                { id: "st", text: "3000+ Students Trained" },
                { id: "d4", text: "✦" },
                { id: "nd", text: "No Demolition Solutions" },
                { id: "d5", text: "✦" },
                { id: "oi", text: "Online & In-Person" },
                { id: "d6", text: "✦" },
              ].map(({ id, text }) => (
                <span key={`${copyKey}-${id}`}>{text}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-brown-light text-[10px] tracking-[0.22em] uppercase font-medium">
          Discover More
        </span>
        <div className="w-[1px] h-12 relative overflow-hidden rounded-full bg-gold/15">
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gold to-transparent rounded-full"
            animate={{ y: ["0%", "200%"] }}
            transition={{
              duration: 1.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatDelay: 0.2,
            }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(237,224,196,0.45))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
