import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  FaBook,
  FaCertificate,
  FaCheck,
  FaGraduationCap,
  FaHeadset,
  FaStar,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import MandalaSVG from "./MandalaSVG";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: FaGraduationCap, label: "Foundation to Advanced" },
  { icon: FaVideo, label: "Live Classes Only" },
  { icon: FaCertificate, label: "Certification Provided" },
  { icon: FaBook, label: "Practical Case Studies" },
  { icon: FaHeadset, label: "Ongoing Support" },
  { icon: FaUsers, label: "Community Access" },
];

const courses = [
  {
    title: "Foundation Vastu Course",
    priceNote: "Live Classes · Interactive Sessions",
    duration: "Live",
    badge: null,
    features: [
      "Live interactive classes",
      "Core Vastu principles & directions",
      "Vastu for home & workplace",
      "Certificate of completion",
      "Community access",
    ],
  },
  {
    title: "Advanced Vastu Course",
    priceNote: "Live Classes · Expert Mentoring",
    duration: "Live",
    badge: "Expert Level",
    features: [
      "Live expert-led sessions",
      "Advanced Vastu techniques",
      "Real-world case studies",
      "1-on-1 mentor guidance",
      "Lifetime community access",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="courses"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
      }}
    >
      {/* Mandala pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ opacity: 0.04, color: "#C9A84C" }}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px]">
          <MandalaSVG />
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Certified Vastu Courses"
          headline="Learn Vastu from Delhi NCR's Top Expert"
          lead="Live online classes — join students from Noida, Delhi, UP & across India."
          subtitle="Beginner to advanced — join 3000+ certified students."
          isInView={isInView}
        />

        {/* Feature Highlights */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.label}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  boxShadow:
                    "0 1px 6px rgba(44,24,16,0.05), inset 0 1px 0 rgba(255,248,231,0.7)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <Icon className="text-gold" size={16} aria-hidden="true" />
                </div>
                <span className="text-brown-medium text-xs font-semibold leading-tight">
                  {f.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {courses.map((course, courseIdx) => {
            const isFeatured = !!course.badge;
            const isDark = courseIdx === 1;
            const gradients = [
              "linear-gradient(160deg, #FFF8E7 0%, #F5F0E0 100%)",
              "linear-gradient(160deg, #2C1810 0%, #3D2B1F 100%)",
            ];
            return (
              <motion.article
                key={course.title}
                variants={itemVariants}
                className="rounded-2xl overflow-hidden flex flex-col relative"
                style={{
                  background: gradients[courseIdx],
                  border: isFeatured
                    ? "2px solid rgba(201,168,76,0.7)"
                    : "1px solid rgba(201,168,76,0.25)",
                  boxShadow: isFeatured
                    ? "0 8px 32px rgba(201,168,76,0.3), 0 2px 8px rgba(44,24,16,0.1)"
                    : "0 2px 12px rgba(44,24,16,0.08)",
                }}
              >
                {/* Gradient header band */}
                <div
                  className="h-2 w-full"
                  style={{
                    background: isFeatured
                      ? "linear-gradient(90deg, #B8860B, #D4AF37, #F0D080, #D4AF37, #B8860B)"
                      : "linear-gradient(90deg, #C9A84C55, #D4AF3788)",
                  }}
                  aria-hidden="true"
                />

                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-5 right-4 z-10">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                      style={{
                        background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                        color: "#2C1810",
                        boxShadow: "0 2px 12px rgba(201,168,76,0.5)",
                      }}
                    >
                      <FaStar size={9} aria-hidden="true" />
                      {course.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Live badge */}
                  <div className="mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: isDark
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                        aria-hidden="true"
                      />
                      Live Classes Only
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl font-bold mb-3 ${isDark ? "text-cream" : "text-brown-text"}`}
                  >
                    {course.title}
                  </h3>

                  <div className="mb-5">
                    <span
                      className={`text-xs font-medium ${isDark ? "text-cream/55" : "text-brown-light/70"}`}
                    >
                      {course.priceNote}
                    </span>
                  </div>

                  <ul
                    className="space-y-2.5 flex-1 mb-6"
                    aria-label={`${course.title} features`}
                  >
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${isDark ? "text-cream/75" : "text-brown-medium"}`}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(201,168,76,0.15)" }}
                          aria-hidden="true"
                        >
                          <FaCheck
                            className="text-gold"
                            size={9}
                            aria-hidden="true"
                          />
                        </span>
                        {f}
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
                    className={`py-3.5 rounded-full text-sm font-bold w-full transition-all duration-300 min-h-[48px] ${
                      isFeatured
                        ? "btn-gold-shimmer shadow-md hover:shadow-gold hover:-translate-y-0.5"
                        : isDark
                          ? "btn-gold-outline"
                          : "btn-gold-outline"
                    }`}
                    aria-label={`Enquire about ${course.title}`}
                  >
                    Enquire Now →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          className="text-center p-10 bg-white/80 rounded-3xl gold-border backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-accent text-xl italic text-brown-medium mb-3">
            "Every great Vastu practitioner started exactly where you are —
            curious and ready to learn."
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-6">
            Ready to Master Vastu?
          </h3>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold-shimmer px-10 py-4 rounded-full text-base font-bold shadow-md hover:shadow-gold transition-all duration-300"
          >
            Enroll Now — Limited Seats
          </button>
        </motion.div>
      </div>
    </section>
  );
}
