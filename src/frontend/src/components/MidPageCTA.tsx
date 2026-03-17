import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Decorative particles for the CTA strip
const ctaParticles = [
  { top: "20%", left: "5%", size: 4, delay: 0 },
  { top: "60%", left: "2%", size: 3, delay: 1.5 },
  { top: "30%", right: "6%", size: 5, delay: 0.7 },
  { top: "70%", right: "3%", size: 3, delay: 2.1 },
  { top: "45%", left: "12%", size: 2, delay: 1.0 },
  { top: "25%", right: "15%", size: 3, delay: 1.8 },
];

export default function MidPageCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const handleScrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section
      ref={ref}
      aria-label="Book a Vastu Assessment"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A0A05 0%, #2C1810 40%, #3D2B1F 60%, #2C1810 80%, #1A0A05 100%)",
        padding: "clamp(3.5rem, 7vw, 5.5rem) 1rem",
      }}
    >
      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Gold bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {ctaParticles.map((p) => (
        <div
          key={`cta-p-${p.top}-${p.size}`}
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
            opacity: 0.3,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Decorative Om watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(160px, 22vw, 300px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.04)",
        }}
      >
        ॐ
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              background: "rgba(201,168,76,0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-gold animate-glow-pulse"
              aria-hidden="true"
            />
            Energy Assessment
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif leading-tight tracking-tight mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            background:
              "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Is Your Home in Delhi NCR Holding You Back?
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-5"
          aria-hidden="true"
        >
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))",
            }}
          />
          <span style={{ color: "#C9A84C", fontSize: "0.75rem" }}>✦</span>
          <div
            className="h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)",
            }}
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-accent italic text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "rgba(255,248,231,0.72)" }}
        >
          A professional Vastu consultation for your home or office in Noida,
          Delhi, Gurgaon, or anywhere in UP can reveal hidden energy blocks —
          and show you exactly how to fix them.
        </motion.p>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-xs font-medium tracking-[0.12em] uppercase mb-8"
          style={{ color: "rgba(201,168,76,0.55)" }}
        >
          1000+ families have already transformed their homes · 5★ rated · No
          demolition
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={handleScrollToContact}
            className="btn-gold-shimmer px-10 py-4 rounded-full text-[15px] font-bold shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 transition-all duration-300 min-h-[52px] w-full sm:w-auto"
          >
            ✦ Book Assessment Now
          </button>
          <a
            href="https://wa.me/919871718653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-full border-2 font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 min-h-[52px] w-full sm:w-auto"
            style={{
              borderColor: "rgba(201,168,76,0.4)",
              color: "#C9A84C",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(201,168,76,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(201,168,76,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(201,168,76,0.4)";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.843L.057 23.882a.5.5 0 00.61.635l6.155-1.613A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.946 0-3.773-.498-5.365-1.37l-.385-.217-3.99 1.046 1.063-3.88-.235-.395A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
