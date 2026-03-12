import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const credentials = [
  "Certified Vastu Expert",
  "7+ Years Experience",
  "3000+ Students Trained",
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "1000+", label: "Consultations Done" },
  { value: "3000+", label: "Students Trained" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
      }}
    >
      {/* Subtle corner mandala */}
      <div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none select-none -translate-y-1/4 translate-x-1/4"
        style={{ opacity: 0.04, color: "#C9A84C" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {[0, 45, 90, 135].map((a) => (
            <line
              key={a}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${a} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Meet the Expert"
          headline="Charru Gupta — Vastu Consultant in Noida & Delhi NCR"
          lead="Founder of SimplyVastuShastra, transforming homes & businesses since 2017."
          isInView={isInView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative frame behind */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl"
              style={{ border: "2px solid #C9A84C", opacity: 0.3 }}
              aria-hidden="true"
            />
            {/* Main image with real photo */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              style={{
                border: "3px solid #C9A84C",
              }}
            >
              <img
                src="/assets/generated/charru-gupta.png"
                alt="Charru Gupta — Founder of SimplyVastuShastra, Vastu Expert"
                className="w-full h-full object-cover object-top"
              />

              {/* Subtle overlay gradient at bottom for stats readability */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(44,24,16,0.7))",
                }}
                aria-hidden="true"
              />

              {/* Stats strip at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 flex"
                aria-label="Expert statistics"
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex-1 py-3 text-center ${i < 2 ? "border-r border-gold/30" : ""}`}
                    style={{
                      background: "rgba(44,24,16,0.6)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <div className="font-serif font-bold text-gold text-lg">
                      {s.value}
                    </div>
                    <div className="text-cream text-xs leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-6 leading-tight">
              7+ Years as Noida's{" "}
              <span className="text-gold-gradient">Trusted Vastu Expert</span>
              <br />
              Across Delhi NCR &amp; UP
            </h2>

            {/* Pull-quote — signature design element */}
            <div
              className="relative my-6 px-6 py-5 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.03) 100%)",
                border: "1px solid rgba(201,168,76,0.22)",
              }}
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute -top-2 -left-1 select-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "6rem",
                  color: "#C9A84C",
                  opacity: 0.15,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                &#8220;
              </div>
              <div
                className="absolute -bottom-4 -right-1 select-none"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "6rem",
                  color: "#C9A84C",
                  opacity: 0.15,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                &#8221;
              </div>
              <blockquote className="relative z-10 font-accent text-lg sm:text-xl italic text-brown-text leading-relaxed text-center">
                My mission is to bring harmony, health, and prosperity to every
                home through the timeless science of Vastu.
              </blockquote>
              <p
                className="relative z-10 text-center text-sm font-semibold mt-3"
                style={{ color: "#C9A84C" }}
              >
                — Charru Gupta, Founder
              </p>
            </div>

            <div className="space-y-4 text-brown-medium leading-relaxed mb-6">
              <p>
                Charru Gupta is the founder of{" "}
                <strong className="text-brown-text">SimplyVastuShastra</strong>,
                the most trusted name in Vastu consultation across{" "}
                <strong className="text-brown-text">Delhi NCR</strong> — serving
                Noida, Greater Noida, Gurgaon, Faridabad, Ghaziabad, and all
                zones of Delhi. With over 7 years of dedicated experience, she
                has transformed 1000+ homes and businesses into harmonious,
                prosperous spaces.
              </p>
              <p>
                Clients across{" "}
                <strong className="text-brown-text">Uttar Pradesh</strong> —
                from Lucknow and Kanpur to Varanasi and Agra — regularly book
                online consultations with Charru. Her{" "}
                <strong className="text-brown-text">
                  practical, no-demolition approach
                </strong>{" "}
                delivers powerful Vastu remedies through simple changes:
                colours, directions, and placements. No breaking walls, no
                expensive renovations.
              </p>
            </div>

            {/* Credentials */}
            <ul className="flex flex-wrap gap-3 mb-8" aria-label="Credentials">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="px-4 py-1.5 rounded-full border border-gold text-gold-deep text-sm font-semibold bg-gold/5 list-none"
                >
                  {c}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex btn-gold-magnetic px-7 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-gold transition-all duration-300"
            >
              Book a Consultation →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
