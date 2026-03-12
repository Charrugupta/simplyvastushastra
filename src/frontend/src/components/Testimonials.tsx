import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Dwarka, Delhi",
    initials: "PS",
    text: "After getting Vastu consultation for our home in Dwarka, we experienced a remarkable improvement in family harmony and finances within just 3 months! Charru ji's approach is so practical — she gave us simple changes with no demolition and the results were beyond our expectations. I would recommend her to every family.",
    service: "Residential Vastu",
    featured: true,
  },
  {
    name: "Rajesh Verma",
    city: "Noida Sector 75",
    initials: "RV",
    text: "My business in Noida was stagnating for 2 years. After implementing Charru ji's Vastu changes, we saw 40% growth in just 6 months. Her no-demolition approach is what convinced me to try it!",
    service: "Commercial Vastu",
    featured: false,
  },
  {
    name: "Sunita Agarwal",
    city: "Indirapuram, Ghaziabad",
    initials: "SA",
    text: "I was skeptical at first, but the practical approach and no-demolition solutions convinced me. Our home in Indirapuram feels so much more peaceful and harmonious now.",
    service: "Residential Vastu",
    featured: false,
  },
  {
    name: "Amit Kumar",
    city: "Greater Noida West",
    initials: "AK",
    text: "Charru ji analyzed our floor plan in Greater Noida and gave specific remedies. We saw positive changes in just 2 weeks — better sleep, less arguments, and more clarity in business decisions!",
    service: "Residential Vastu",
    featured: false,
  },
  {
    name: "Meera Joshi",
    city: "Rohini, Delhi",
    initials: "MJ",
    text: "I enrolled in the Foundation Vastu Course and it completely changed my perspective. Now I understand my home's energy deeply. Charru ji's teaching style is clear, practical and inspiring!",
    service: "Vastu Course",
    featured: false,
  },
];

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

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #F0E8D4 40%, #EDE0C4 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          headline="Real Stories, Real Transformations"
          lead="Voices from families and businesses we've helped across India."
          subtitle="Join 1000+ clients who experienced the power of Vastu."
          isInView={isInView}
        />

        {/* Featured hero testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <article
            className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #2C1810 0%, #3D2B1F 50%, #2C1810 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow:
                "0 20px 60px rgba(44,24,16,0.2), 0 4px 16px rgba(44,24,16,0.15), inset 0 1px 0 rgba(201,168,76,0.1)",
            }}
          >
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(201,168,76,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden="true"
            />

            {/* Radial glow at top-right */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              {/* Quote content */}
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((k) => (
                    <FaStar
                      key={k}
                      className="text-gold"
                      size={16}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Big decorative quote */}
                <div
                  className="font-serif select-none mb-2"
                  style={{
                    fontSize: "7rem",
                    color: "#C9A84C",
                    opacity: 0.2,
                    lineHeight: "0.7",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                  aria-hidden="true"
                >
                  &#8220;
                </div>

                <blockquote
                  className="font-accent italic leading-relaxed mb-6 text-lg sm:text-xl"
                  style={{ color: "rgba(255,248,231,0.9)" }}
                >
                  {featured.text}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-brown-text flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                      boxShadow: "0 0 0 3px rgba(201,168,76,0.3)",
                    }}
                    aria-hidden="true"
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <p
                      className="font-bold text-base leading-tight"
                      style={{ color: "#F0D080" }}
                    >
                      {featured.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(255,248,231,0.6)" }}
                    >
                      {featured.city}
                    </p>
                  </div>
                  <span
                    className="ml-2 text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wide uppercase"
                    style={{
                      color: "#C9A84C",
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    {featured.service}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      color: "#4ade80",
                      background: "rgba(74,222,128,0.1)",
                      border: "1px solid rgba(74,222,128,0.2)",
                    }}
                  >
                    ✓ Verified
                  </span>
                </div>
              </div>

              {/* Decorative Om on right for desktop */}
              <div
                className="hidden lg:block select-none pointer-events-none"
                aria-hidden="true"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "8rem",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(201,168,76,0.12)",
                  lineHeight: 1,
                }}
              >
                ॐ
              </div>
            </div>
          </article>
        </motion.div>

        {/* Remaining testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {rest.map((t) => (
            <motion.article
              key={t.name}
              variants={itemVariants}
              className="card-elevated rounded-2xl p-6 flex flex-col"
            >
              {/* Top row: stars + service badge + verified */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((k) => (
                    <FaStar
                      key={k}
                      className="text-gold"
                      size={11}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-gold-deep bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full font-semibold tracking-wide uppercase">
                    {t.service}
                  </span>
                  <span className="text-[10px] text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full font-semibold">
                    ✓ Verified
                  </span>
                </div>
              </div>

              {/* Large decorative open-quote */}
              <div
                className="font-serif select-none leading-none mb-1"
                style={{
                  fontSize: "4rem",
                  color: "#C9A84C",
                  opacity: 0.18,
                  lineHeight: "0.7",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
                aria-hidden="true"
              >
                &#8220;
              </div>

              {/* Testimonial text */}
              <blockquote className="text-brown-medium text-sm leading-relaxed flex-1 mb-5 font-accent italic text-[0.9rem]">
                {t.text}
              </blockquote>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-brown-text flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                    boxShadow: "0 0 0 2px rgba(201,168,76,0.3)",
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-brown-text text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-brown-light text-xs">{t.city}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Post-testimonials CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-block rounded-3xl px-8 py-8 sm:px-14 sm:py-10 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #2C1810 0%, #3D2B1F 50%, #2C1810 100%)",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow:
                "0 12px 40px rgba(44,24,16,0.15), inset 0 1px 0 rgba(201,168,76,0.08)",
            }}
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(201,168,76,0.04) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Star row */}
              <div
                className="flex items-center justify-center gap-1 mb-4"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((k) => (
                  <FaStar
                    key={k}
                    className="text-gold"
                    size={16}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p
                className="font-serif text-xl sm:text-2xl font-bold mb-2"
                style={{ color: "#F0D080" }}
              >
                Join 1000+ Happy Families
              </p>
              <p
                className="font-accent italic text-base mb-6 max-w-sm mx-auto"
                style={{ color: "rgba(255,248,231,0.65)" }}
              >
                Real transformations, real results. Book your personal Vastu
                consultation today.
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold-shimmer px-10 py-4 rounded-full text-[14px] font-bold shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.55)] hover:-translate-y-0.5 transition-all duration-300 min-h-[52px]"
              >
                Book Your Consultation →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
