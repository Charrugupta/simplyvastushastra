import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaBuilding, FaHome, FaIndustry } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const services = [
  {
    icon: FaHome,
    title: "Residential Vastu Consultant in Delhi NCR",
    problem: "Is your home feeling stressful or unlucky?",
    help: "Expert residential Vastu consultation for homes, flats & apartments in Noida, Delhi, Gurgaon, Greater Noida, Ghaziabad & Faridabad. Align your living space with natural energies for peace, health, and prosperity.",
    benefits: [
      "Harmonious family life",
      "Improved health & wealth",
      "Positive energy flow",
    ],
    accentColor: "#C9A84C",
  },
  {
    icon: FaBuilding,
    title: "Commercial Vastu Consultant in Noida",
    problem: "Struggling with business stagnation?",
    help: "Transform your office or commercial space in Noida, Delhi NCR into a powerhouse of productivity. Expert commercial Vastu for businesses, shops, showrooms, and offices across Delhi NCR.",
    benefits: ["Business growth", "Team productivity", "Financial prosperity"],
    accentColor: "#D4AF37",
  },
  {
    icon: FaIndustry,
    title: "Industrial Vastu Expert in Uttar Pradesh",
    problem: "Facing operational challenges in your factory?",
    help: "Specialized industrial Vastu consultation for factories, warehouses, and manufacturing units across Uttar Pradesh and Delhi NCR. Ensure smooth workflows, worker harmony, and increased output.",
    benefits: ["Smooth operations", "Worker safety", "Increased output"],
    accentColor: "#B8860B",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

function goToContact() {
  const el = document.querySelector("#contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/contact";
  }
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="section-padding bg-beige relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
          transform: "translate(-35%, 35%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Services"
          headline="Vastu Consultation in Delhi NCR & UP"
          lead="Expert Vastu for Noida, Delhi, Gurgaon, Ghaziabad & all of UP."
          subtitle="Residential, Commercial & Industrial Vastu — tailored for your space."
          isInView={isInView}
        />

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className={`rounded-2xl p-6 flex flex-col group relative overflow-hidden transition-all duration-300 ${
                  isLast && services.length % 3 === 2 ? "lg:col-start-2" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(160deg, #ffffff 0%, #fdfaf4 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  boxShadow:
                    "0 2px 8px rgba(44,24,16,0.05), 0 1px 3px rgba(44,24,16,0.03)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 16px 40px rgba(201,168,76,0.2), 0 4px 12px rgba(44,24,16,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 8px rgba(44,24,16,0.05), 0 1px 3px rgba(44,24,16,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.2)";
                }}
              >
                {/* Left accent bar — editorial style signature detail */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${service.accentColor}99, ${service.accentColor}, ${service.accentColor}66)`,
                    opacity: 0.7,
                  }}
                  aria-hidden="true"
                />

                {/* Icon + service number row */}
                <div className="flex items-start justify-between mb-5 mt-1 pl-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.07) 100%)",
                      border: "1px solid rgba(201,168,76,0.28)",
                      boxShadow: "0 2px 8px rgba(201,168,76,0.12)",
                    }}
                  >
                    <Icon
                      className="text-gold"
                      style={{ fontSize: "1.1rem" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[0.14em] uppercase"
                    style={{
                      color: "rgba(201,168,76,0.45)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pl-3 flex flex-col flex-1">
                  <h3 className="font-serif text-[1.05rem] font-bold text-brown-text mb-1.5 group-hover:text-gold-dark transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p
                    className="font-accent italic text-brown-medium text-sm mb-3 leading-relaxed"
                    style={{ fontStyle: "italic" }}
                  >
                    {service.problem}
                  </p>
                  <p className="text-brown-medium text-sm leading-relaxed mb-4">
                    {service.help}
                  </p>

                  {/* Benefits */}
                  <ul
                    className="space-y-1.5 mb-5 flex-1"
                    aria-label={`${service.title} benefits`}
                  >
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-brown-medium"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          className="flex-shrink-0"
                          aria-hidden="true"
                        >
                          <circle
                            cx="7"
                            cy="7"
                            r="6"
                            fill="rgba(201,168,76,0.12)"
                          />
                          <path
                            d="M4.5 7 L6.2 8.7 L9.5 5.3"
                            stroke="#C9A84C"
                            strokeWidth="1.3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={goToContact}
                    className="btn-gold-outline px-5 py-2.5 rounded-full text-sm font-semibold w-full text-center mt-auto"
                    aria-label={`Book ${service.title} consultation`}
                    data-ocid={`services.item.${i + 1}`}
                  >
                    Book Now &rarr;
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* How it works */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
              style={{
                color: "#C9A84C",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              How It Works
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Book a Session",
                desc: "Fill the contact form or WhatsApp us to schedule your consultation.",
                emoji: "📅",
              },
              {
                step: "02",
                title: "Share Your Space",
                desc: "Send floor plans and photos. We analyse every zone with precision.",
                emoji: "🏠",
              },
              {
                step: "03",
                title: "Transform Your Life",
                desc: "Receive your personalised Vastu report and start implementing changes.",
                emoji: "✨",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative flex items-start gap-5 p-6 rounded-2xl group"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(201,168,76,0.22)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(44,24,16,0.04)",
                }}
              >
                {/* Step circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)",
                    color: "#2C1810",
                    boxShadow: "0 4px 12px rgba(201,168,76,0.35)",
                  }}
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="text-xl mb-1" aria-hidden="true">
                    {item.emoji}
                  </div>
                  <h4 className="font-serif font-bold text-brown-text text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-brown-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < 2 && (
                  <div
                    className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center z-10 text-sm font-bold"
                    style={{
                      background: "white",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#C9A84C",
                      boxShadow: "0 2px 8px rgba(44,24,16,0.06)",
                    }}
                    aria-hidden="true"
                  >
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
