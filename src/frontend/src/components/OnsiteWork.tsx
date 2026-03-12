import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const onsiteStories = [
  {
    image: "/assets/generated/onsite-work-1.png",
    title: "On-Site Assessment, Delhi NCR",
    story:
      "During a residential Vastu assessment in Delhi NCR, Charru meticulously documented every zone of the under-construction home — marking directions, noting structural alignments, and discussing with the owner how room placements could be optimised before walls go up. 'The best time to apply Vastu is before the cement sets,' she explains.",
    tag: "Residential Consultation",
  },
  {
    image: "/assets/generated/onsite-work-2.png",
    title: "Commercial Space Evaluation, Noida",
    story:
      "A large glass-facade commercial building in Noida — Charru assessing the entrance orientation and natural light flow before the interiors were fitted. Getting the directional energy right at this stage means the business that occupies the space starts its journey with an energetic advantage from day one.",
    tag: "Commercial Vastu",
  },
  {
    image: "/assets/generated/onsite-work-3.png",
    title: "Industrial Unit Survey, UP",
    story:
      "An industrial unit in Uttar Pradesh — Charru surveying the production floor layout, identifying the fire and water element zones, and recommending optimal placement for machinery and raw material storage. Proper industrial Vastu reduces workforce conflict, minimises accidents, and improves production efficiency.",
    tag: "Industrial Vastu",
  },
  {
    image: "/assets/generated/onsite-work-4.png",
    title: "Factory Energy Mapping, Greater Noida",
    story:
      "Inside a large manufacturing facility near Greater Noida, Charru maps the energy flow across different production zones. The north-east corner — the divine zone — needed to be kept free of heavy machinery. Simple repositioning of equipment and adding the right elements transformed the unit's environment and team morale within weeks.",
    tag: "Industrial Vastu",
  },
  {
    image: "/assets/generated/onsite-work-5.png",
    title: "Under-Construction Home, Delhi",
    story:
      "A staircase assessment in an under-construction home in Delhi. Staircase placement and direction have a profound impact on energy flow between floors. Here, Charru identified a south-west staircase — ideal for grounding energy — and recommended specific remedies for the landing zone to keep the family's stability energy strong.",
    tag: "Residential Consultation",
  },
  {
    image: "/assets/generated/onsite-work-6.png",
    title: "New Construction Vastu Audit, Delhi NCR",
    story:
      "A ceiling-to-floor structural audit during the construction phase of a residential property in Delhi NCR. Charru's pre-construction consultations are among the most valuable — identifying zone corrections, door placements, and beam positions before they become permanent. This family saved ₹3 lakhs in potential future renovation costs.",
    tag: "Pre-Construction Vastu",
  },
];

export default function OnsiteWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="onsite-work"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2C1810 0%, #3D2B1F 50%, #2C1810 100%)",
      }}
    >
      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Real Work. Real Sites."
          headline="From Blueprint to Transformation"
          lead="Every consultation starts with a site visit — measuring, mapping, and understanding the space firsthand."
          subtitle="Charru Gupta has assessed homes, offices, and industrial units across Delhi NCR and UP."
          isInView={isInView}
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onsiteStories.map((item, index) => {
            const isExpanded = expanded === index;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(44,24,16,0.6)",
                }}
                onClick={() => setExpanded(isExpanded ? null : index)}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "240px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(44,24,16,0.85) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "#F0D080",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-serif font-bold text-base mb-2 leading-tight"
                    style={{ color: "#F0D080" }}
                  >
                    {item.title}
                  </h3>

                  {/* Story — collapsible */}
                  <p
                    className="text-sm leading-relaxed transition-all duration-300"
                    style={{
                      color: "rgba(255,248,231,0.75)",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: isExpanded ? "unset" : 3,
                      overflow: isExpanded ? "visible" : "hidden",
                    }}
                  >
                    {item.story}
                  </p>

                  <button
                    type="button"
                    className="mt-3 text-xs font-semibold transition-colors duration-200"
                    style={{ color: "#C9A84C" }}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Read less ↑" : "Read more →"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <p
            className="font-accent italic text-lg mb-6"
            style={{ color: "rgba(255,248,231,0.65)" }}
          >
            Every home has a story. Let Charru help yours become a better one.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold-shimmer px-10 py-4 rounded-full text-sm font-bold shadow-lg"
          >
            Book an On-Site Consultation →
          </button>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
