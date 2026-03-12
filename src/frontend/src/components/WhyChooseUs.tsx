import { motion, useInView } from "motion/react";
import { useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Personalized Consultation",
    desc: "Tailored solutions specific to your home, business & life goals. No generic advice — every recommendation is crafted for your unique space.",
    highlight: "No generic templates, ever.",
  },
  {
    number: "02",
    title: "Affordable & Practical Remedies",
    desc: "Cost-effective solutions that fit every budget. We believe Vastu benefits should be accessible to all, not just the privileged few.",
    highlight: "Value for every rupee.",
  },
  {
    number: "03",
    title: "No Demolition Solutions",
    desc: "Simple changes like color, placement & directions — not a single wall needs to come down. Transform your space without structural changes.",
    highlight: "Zero construction required.",
  },
  {
    number: "04",
    title: "Experienced & Certified Expert",
    desc: "7+ years of proven expertise and certified training. Charru Gupta brings rigorous academic knowledge and real-world experience to every consultation.",
    highlight: "7+ years, 1000+ clients.",
  },
  {
    number: "05",
    title: "Strong Student Community",
    desc: "Join 3000+ certified practitioners and support network. You're never alone on your Vastu journey — our community is always there for you.",
    highlight: "3000+ active members.",
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

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A0A05 0%, #2C1810 60%, #1A0A05 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Gold bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Large decorative Om watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none"
        aria-hidden="true"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(200px, 30vw, 420px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.04)",
        }}
      >
        ॐ
      </div>

      {/* Radial glow at center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10 py-24 px-4 md:px-8 lg:px-16"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase mb-4"
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
            Our Difference
          </span>

          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))",
              }}
              aria-hidden="true"
            />
            <span style={{ color: "#C9A84C", fontSize: "0.75rem" }}>✦</span>
            <div
              className="h-[1px] w-16"
              style={{
                background:
                  "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)",
              }}
              aria-hidden="true"
            />
          </motion.div>

          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{
              background:
                "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why Delhi NCR Trusts SimplyVastuShastra
          </h2>
          <p
            className="font-accent text-xl italic max-w-lg mx-auto"
            style={{ color: "rgba(255,248,231,0.6)" }}
          >
            Noida's most practical, scientific &amp; life-changing Vastu expert.
          </p>
        </motion.div>

        {/* Central pull quote from Charru Gupta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16 px-4"
        >
          <div
            className="relative rounded-2xl px-8 py-8 sm:px-12"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            {/* Decorative quote marks */}
            <div
              className="absolute -top-5 left-8 select-none"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "5rem",
                color: "#C9A84C",
                opacity: 0.2,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              &#8220;
            </div>
            <blockquote
              className="font-accent text-xl sm:text-2xl italic leading-relaxed relative z-10"
              style={{ color: "rgba(255,248,231,0.85)" }}
            >
              Every home carries an energy that either supports your growth or
              holds you back. Vastu is the ancient science that aligns your
              space with the universe's natural forces — and I make that simple,
              practical, and accessible for everyone.
            </blockquote>
            <p
              className="mt-4 text-sm font-bold tracking-wide"
              style={{ color: "#C9A84C" }}
            >
              — Charru Gupta, Vastu Expert & Founder
            </p>
          </div>
        </motion.div>

        {/* Reasons — numbered list with big decorative numbers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="relative group"
            >
              <div
                className="h-full rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(201,168,76,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.18)";
                }}
              >
                {/* Top border glow on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
                  }}
                  aria-hidden="true"
                />

                {/* Big decorative number */}
                <div
                  className="number-huge mb-2 leading-none select-none"
                  aria-hidden="true"
                >
                  {reason.number}
                </div>

                <h3
                  className="font-serif text-lg sm:text-xl font-bold mb-3 leading-tight"
                  style={{ color: "#F0D080" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(255,248,231,0.65)" }}
                >
                  {reason.desc}
                </p>

                {/* Highlight chip */}
                <span
                  className="inline-block text-[11px] font-bold tracking-wide px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#C9A84C",
                  }}
                >
                  ✦ {reason.highlight}
                </span>
              </div>

              {/* Connector line between items (horizontal, desktop) */}
              {i < reasons.length - 1 && i % 3 !== 2 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px]"
                  style={{ background: "rgba(201,168,76,0.2)" }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}

          {/* CTA card to fill grid */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.05) 100%)",
              border: "1.5px solid rgba(201,168,76,0.35)",
            }}
          >
            <div
              className="text-5xl mb-4 leading-none"
              style={{ color: "#C9A84C", opacity: 0.8 }}
              aria-hidden="true"
            >
              ॐ
            </div>
            <p
              className="font-serif font-bold text-xl mb-2"
              style={{ color: "#F0D080" }}
            >
              Ready to Transform?
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "rgba(255,248,231,0.6)" }}
            >
              Begin your Vastu journey today
            </p>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold-magnetic px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started Today
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom CTA — full-width journey prompt */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="text-center sm:text-left">
              <p
                className="font-serif text-xl font-bold mb-1"
                style={{ color: "#F0D080" }}
              >
                Experience the difference yourself
              </p>
              <p className="text-sm" style={{ color: "rgba(255,248,231,0.6)" }}>
                Join 1000+ families who've already transformed their spaces.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex-shrink-0 btn-gold-magnetic px-9 py-4 rounded-full text-[14px] font-bold shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap min-h-[52px]"
            >
              Start Your Vastu Journey →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
