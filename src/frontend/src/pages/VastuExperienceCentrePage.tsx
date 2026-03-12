import { Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const timeline = [
  {
    year: "6000 BCE",
    chapterNo: "01",
    title: "The Vedic Origin",
    body: "Vastu Shastra was first described in the Atharva Veda — one of the four sacred Vedic texts. Ancient sages spent lifetimes observing how the sun, wind, water, and earth affected human wellbeing and codified their findings into precise architectural laws. These were not rituals — they were peer-reviewed observations over centuries.",
  },
  {
    year: "2500 BCE",
    chapterNo: "02",
    title: "Indus Valley Cities",
    body: "Mohenjo-daro and Harappa — among humanity's earliest planned cities — were built on Vastu principles. Streets ran perfectly north-south and east-west. Drainage systems were positioned on the correct side. These were not coincidences. They were the application of a 3,500-year-old architectural science.",
  },
  {
    year: "1000 BCE",
    chapterNo: "03",
    title: "The Great Temples",
    body: "India's most enduring temples — Tirupati, Brihadeeswarar, and the Sun Temple at Konark — were all engineered with Vastu at their core. Orientation, proportion, and spatial ratios were calculated with mathematical precision that still confounds modern engineers.",
  },
  {
    year: "Today",
    chapterNo: "04",
    title: "Modern Science Confirms It",
    body: "Environmental psychology, biophilic design, and circadian biology independently confirm what Vastu described millennia ago: natural light from the east enhances alertness, north-facing openings reduce heat stress, and water features in the northeast calm the nervous system. The science caught up. Vastu was already there.",
  },
];

const scienceCards = [
  {
    svgPath:
      "M12 1v1m0 20v1M4.22 4.22l.707.707M19.071 19.07l.707.708M1 12h1m20 0h1M4.22 19.778l.707-.707M19.071 4.929l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Solar Orientation",
    myth: '"It is just superstition to face the entrance east."',
    science:
      "East-facing entrances receive morning sunlight (400–700 nm wavelength), which regulates cortisol and melatonin cycles — proven across multiple sleep studies to reduce anxiety and improve sleep quality. This is circadian biology, not superstition.",
    accent: "#F5A623",
  },
  {
    svgPath:
      "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z M12 8v4l3 3",
    title: "Water in the Northeast",
    myth: '"Placing water in the northeast is a random rule."',
    science:
      "The northeast receives maximum ultraviolet light — a natural disinfectant. Groundwater quality is historically highest in this direction across the Indian subcontinent. Vastu codified observable hydrology, not mythology.",
    accent: "#4A90E2",
  },
  {
    svgPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Southwest Bedrooms",
    myth: '"Sleeping with head to the south is old folklore."',
    science:
      "Earth's geomagnetic field runs north to south. The human body's iron-rich blood aligns with this field during rest. Peer-reviewed studies published in medical journals show sleeping with the head pointing south reduces blood pressure and improves REM sleep quality.",
    accent: "#7ED321",
  },
  {
    svgPath:
      "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z",
    title: "Kitchen in the Southeast",
    myth: '"Southeast kitchen placement is arbitrary tradition."',
    science:
      "The southeast catches the last afternoon sun — ideal for natural drying and sanitization. Prevailing winds in India blow northeast to southwest, so southeast kitchens prevent cooking smoke from recirculating into living areas. This is applied meteorology.",
    accent: "#E85D04",
  },
];

const stats = [
  { value: "6,000", suffix: "+", label: "Years of Documented History" },
  {
    value: "87",
    suffix: "%",
    label: "Clients Report Positive Change Within 3 Months",
  },
  {
    value: "1,000",
    suffix: "+",
    label: "Spaces Transformed in Delhi NCR & UP",
  },
  { value: "100", suffix: "%", label: "Scientific Principles at Core" },
];

const stories = [
  {
    name: "Priya S.",
    location: "Noida",
    before:
      "Constant family conflicts and financial stagnation for 3 years despite every effort.",
    after:
      "After Vastu correction of the master bedroom and main entrance orientation, the atmosphere at home shifted noticeably within 6 weeks.",
    quote: "It felt like someone removed an invisible weight from our home.",
  },
  {
    name: "Rajesh M.",
    location: "Lucknow",
    before:
      "High employee turnover, declining sales, and low team morale for two consecutive years.",
    after:
      "Relocated the cash counter and manager's cabin per Vastu guidelines. Business grew 40% in the following quarter.",
    quote: "I was a sceptic. The results changed my mind completely.",
  },
  {
    name: "Sunita K.",
    location: "Delhi",
    before:
      "Chronic health issues recurring in the family for years despite ongoing medical treatment.",
    after:
      "Vastu analysis revealed the bedroom was in the wrong zone. Shifted sleeping direction and blocked a misaligned window. Health stabilised within months.",
    quote: "Doctors had no explanation. Vastu gave us one — and the solution.",
  },
];

const principles = [
  {
    no: "01",
    title: "Pancha Bhuta",
    subtitle: "Five Elements",
    desc: "Vastu harmonises the five natural elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akasha) — within your living environment. Modern building biology calls these bioclimatic factors. Every Vastu recommendation balances at least two of these forces.",
    svgPath:
      "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    no: "02",
    title: "Directions & Energy Fields",
    subtitle: "Dik Shakti",
    desc: "Each cardinal and intercardinal direction carries a specific energy pattern driven by solar path, magnetic field orientation, and prevailing wind patterns. Vastu maps these precisely to room functions. There is no guesswork — each direction has a documented scientific property.",
    svgPath:
      "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-.553-.894L15 2m0 18V5",
  },
  {
    no: "03",
    title: "Proportion & Sacred Geometry",
    subtitle: "Ayadi Ratios",
    desc: "Vastu uses mathematical ratios — called Ayadi — to determine the dimensions of rooms, doors, and windows. These ratios create spaces that feel expansive, calm, and balanced. Modern architects independently rediscovered the same principles as the golden ratio. Vastu codified it 4,000 years earlier.",
    svgPath:
      "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    no: "04",
    title: "Zone-Based Living",
    subtitle: "Mandala Zones",
    desc: "Each area of a home is assigned a functional zone based on Vastu's directional energy map. Bedrooms belong in the southwest (magnetic stability), kitchens in the southeast (solar warmth and wind direction), study rooms in the northeast (maximum clarity light). When zones are misaligned, the environment works against you.",
    svgPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

const floatingParticles = [
  { left: "8%", top: "12%", dur: 7, delay: 0, size: 3 },
  { left: "15%", top: "35%", dur: 9, delay: 1.2, size: 2 },
  { left: "22%", top: "68%", dur: 6, delay: 0.5, size: 4 },
  { left: "35%", top: "22%", dur: 8, delay: 2.1, size: 2 },
  { left: "48%", top: "80%", dur: 7, delay: 1.5, size: 3 },
  { left: "62%", top: "15%", dur: 9, delay: 0.8, size: 2 },
  { left: "72%", top: "55%", dur: 6, delay: 3.0, size: 4 },
  { left: "80%", top: "28%", dur: 8, delay: 1.8, size: 2 },
  { left: "88%", top: "72%", dur: 7, delay: 0.3, size: 3 },
  { left: "93%", top: "42%", dur: 9, delay: 2.4, size: 2 },
  { left: "55%", top: "45%", dur: 6, delay: 1.0, size: 3 },
  { left: "30%", top: "88%", dur: 8, delay: 3.5, size: 2 },
];

const decorativeStars = [
  { left: "7%", top: "8%", dur: 2.5, delay: 0 },
  { left: "18%", top: "22%", dur: 3.2, delay: 0.4 },
  { left: "28%", top: "45%", dur: 2.8, delay: 0.8 },
  { left: "38%", top: "15%", dur: 3.5, delay: 1.2 },
  { left: "52%", top: "72%", dur: 2.2, delay: 1.6 },
  { left: "65%", top: "38%", dur: 3.8, delay: 2.0 },
  { left: "74%", top: "8%", dur: 2.5, delay: 2.4 },
  { left: "83%", top: "55%", dur: 3.1, delay: 2.8 },
  { left: "91%", top: "25%", dur: 2.7, delay: 3.2 },
  { left: "12%", top: "62%", dur: 3.4, delay: 0.6 },
  { left: "45%", top: "88%", dur: 2.6, delay: 1.0 },
  { left: "58%", top: "18%", dur: 3.3, delay: 1.8 },
];

/* ─────────────────────────────────────────────
   UTILITY HOOKS
───────────────────────────────────────────── */
function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ─────────────────────────────────────────────
   SVG ICON COMPONENT
───────────────────────────────────────────── */
function Icon({
  path,
  className = "w-6 h-6",
  strokeWidth = 1.5,
}: {
  path: string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <path d={path} />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   VASTU PURUSHA MANDALA SVG
───────────────────────────────────────────── */
function VastuPurushaMandala() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const zones = [
    {
      x: 10,
      y: 10,
      w: 20,
      h: 20,
      label: "NW",
      sublabel: "Living",
      color: "rgba(201,168,76,0.12)",
    },
    {
      x: 30,
      y: 10,
      w: 40,
      h: 20,
      label: "N",
      sublabel: "Study",
      color: "rgba(74,144,226,0.1)",
    },
    {
      x: 70,
      y: 10,
      w: 20,
      h: 20,
      label: "NE",
      sublabel: "Study/Meditation",
      color: "rgba(74,144,226,0.15)",
    },
    {
      x: 10,
      y: 30,
      w: 20,
      h: 40,
      label: "W",
      sublabel: "Dining",
      color: "rgba(201,168,76,0.08)",
    },
    {
      x: 30,
      y: 30,
      w: 40,
      h: 40,
      label: "Centre",
      sublabel: "Brahmasthan",
      color: "rgba(255,255,255,0.03)",
    },
    {
      x: 70,
      y: 30,
      w: 20,
      h: 40,
      label: "E",
      sublabel: "Entrance",
      color: "rgba(245,166,35,0.1)",
    },
    {
      x: 10,
      y: 70,
      w: 20,
      h: 20,
      label: "SW",
      sublabel: "Master Bed",
      color: "rgba(232,93,4,0.12)",
    },
    {
      x: 30,
      y: 70,
      w: 40,
      h: 20,
      label: "S",
      sublabel: "Storage",
      color: "rgba(201,168,76,0.08)",
    },
    {
      x: 70,
      y: 70,
      w: 20,
      h: 20,
      label: "SE",
      sublabel: "Kitchen",
      color: "rgba(232,93,4,0.1)",
    },
  ];

  const directions = [
    { x: 50, y: 4, label: "N" },
    { x: 50, y: 97, label: "S" },
    { x: 4, y: 50, label: "W" },
    { x: 97, y: 50, label: "E" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative mx-auto"
      style={{ maxWidth: 420 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        className="w-full"
        style={{ filter: "drop-shadow(0 0 20px rgba(201,168,76,0.2))" }}
        role="img"
        aria-label="Vastu Purusha Mandala showing directional zones"
      >
        <title>Vastu Purusha Mandala — directional energy zones</title>
        {/* Outer border */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          fill="none"
          stroke="rgba(201,168,76,0.4)"
          strokeWidth="0.5"
        />
        {/* Inner border */}
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="rgba(201,168,76,0.25)"
          strokeWidth="0.3"
        />

        {/* Zone fills */}
        {zones.map((z) => (
          <rect
            key={z.label}
            x={z.x}
            y={z.y}
            width={z.w}
            height={z.h}
            fill={z.color}
          />
        ))}

        {/* Grid lines */}
        <line
          x1="30"
          y1="10"
          x2="30"
          y2="90"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="0.4"
        />
        <line
          x1="70"
          y1="10"
          x2="70"
          y2="90"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="0.4"
        />
        <line
          x1="10"
          y1="30"
          x2="90"
          y2="30"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="0.4"
        />
        <line
          x1="10"
          y1="70"
          x2="90"
          y2="70"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="0.4"
        />

        {/* Diagonal lines for Brahmasthan */}
        <line
          x1="30"
          y1="30"
          x2="70"
          y2="70"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.3"
          strokeDasharray="2,2"
        />
        <line
          x1="70"
          y1="30"
          x2="30"
          y2="70"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.3"
          strokeDasharray="2,2"
        />

        {/* Zone labels */}
        {zones.map((z) => (
          <g key={`label-${z.label}`}>
            <text
              x={z.x + z.w / 2}
              y={z.y + z.h / 2 - 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(201,168,76,0.9)"
              fontSize="3.2"
              fontWeight="700"
              fontFamily="serif"
            >
              {z.label}
            </text>
            <text
              x={z.x + z.w / 2}
              y={z.y + z.h / 2 + 4}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255,248,231,0.65)"
              fontSize="2.4"
              fontFamily="sans-serif"
            >
              {z.sublabel}
            </text>
          </g>
        ))}

        {/* Direction compass markers */}
        {directions.map((d) => (
          <text
            key={d.label}
            x={d.x}
            y={d.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(201,168,76,0.7)"
            fontSize="3.5"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            {d.label}
          </text>
        ))}

        {/* Centre Om */}
        <text
          x="50"
          y="51"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(201,168,76,0.4)"
          fontSize="8"
          fontFamily="serif"
        >
          ॐ
        </text>

        {/* Corner accent diamonds */}
        {[
          [10, 10],
          [90, 10],
          [10, 90],
          [90, 90],
        ].map(([cx, cy]) => (
          <polygon
            key={`${cx}-${cy}`}
            points={`${cx},${cy - 1.5} ${cx + 1.5},${cy} ${cx},${cy + 1.5} ${cx - 1.5},${cy}`}
            fill="rgba(201,168,76,0.6)"
          />
        ))}
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STAT COUNTER CARD
───────────────────────────────────────────── */
type StatItem = (typeof stats)[number];
function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const numericTarget = Number.parseInt(stat.value.replace(/,/g, ""), 10);
  const count = useCountUp(numericTarget, 2.0, isInView);

  const formatted =
    count >= 1000 ? count.toLocaleString("en-IN") : count.toString();

  return (
    <motion.div
      ref={ref}
      className="text-center px-4 py-6 rounded-2xl"
      style={{
        background: "rgba(44,24,16,0.25)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
    >
      <div
        className="font-serif font-bold leading-none mb-2"
        style={{
          fontSize: "clamp(2.2rem, 4vw, 3rem)",
          color: "#2C1810",
          letterSpacing: "-0.02em",
        }}
      >
        {formatted}
        <span style={{ color: "#8B4513" }}>{stat.suffix}</span>
      </div>
      <div
        className="text-xs font-semibold leading-snug"
        style={{ color: "rgba(44,24,16,0.7)" }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE CARD
───────────────────────────────────────────── */
type TimelineItem = (typeof timeline)[number];
function TimelineCard({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Card — desktop takes 46% */}
      <div
        className={`w-full md:w-[46%] pl-14 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
      >
        <div
          className="relative p-8 rounded-2xl overflow-hidden group transition-all duration-500"
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow:
              "0 4px 24px rgba(44,24,16,0.07), 0 1px 4px rgba(44,24,16,0.04)",
          }}
        >
          {/* Gold top line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A84C, #D4AF37, #C9A84C, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="flex items-start gap-4 mb-4">
            <div
              className="shrink-0 font-serif font-black leading-none"
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(201,168,76,0.25)",
                letterSpacing: "-0.04em",
              }}
              aria-hidden="true"
            >
              {item.chapterNo}
            </div>
            <div>
              <span
                className="inline-block text-xs font-black tracking-[0.22em] uppercase mb-2"
                style={{ color: "#C9A84C" }}
              >
                {item.year}
              </span>
              <h3
                className="font-serif font-bold leading-tight"
                style={{ fontSize: "1.2rem", color: "#2C1810" }}
              >
                {item.title}
              </h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#5C4033" }}>
            {item.body}
          </p>
        </div>
      </div>

      {/* Centre dot — absolute on mobile, centred on desktop */}
      <div
        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 w-6 h-6 rounded-full flex items-center justify-center z-10"
        style={{
          background: "linear-gradient(135deg, #C9A84C, #D4AF37)",
          boxShadow:
            "0 0 0 5px rgba(201,168,76,0.18), 0 0 15px rgba(201,168,76,0.4)",
        }}
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-white opacity-80" />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SCIENCE CARD
───────────────────────────────────────────── */
type ScienceCard = (typeof scienceCards)[number];
function ScienceCardItem({
  card,
  index,
}: {
  card: ScienceCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.035)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.45)" : "rgba(201,168,76,0.15)"}`,
        backdropFilter: "blur(10px)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.15)"
          : "0 4px 24px rgba(0,0,0,0.2)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.18 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* MYTH banner */}
      <div
        className="px-7 pt-6 pb-4"
        style={{ borderBottom: "1px solid rgba(155,35,53,0.2)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(155,35,53,0.12)", color: "#E85D04" }}
          >
            <Icon path={card.svgPath} className="w-5 h-5" />
          </div>
          <div>
            <span
              className="block text-xs font-black tracking-[0.25em] uppercase"
              style={{ color: "rgba(232,93,4,0.7)" }}
            >
              The Myth
            </span>
            <h3
              className="font-serif font-bold text-lg"
              style={{ color: "#FFF8E7" }}
            >
              {card.title}
            </h3>
          </div>
        </div>
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: "rgba(255,248,231,0.5)" }}
        >
          {card.myth}
        </p>
      </div>

      {/* SCIENCE reveal */}
      <div
        className="px-7 pt-5 pb-6"
        style={{ background: "rgba(201,168,76,0.05)" }}
      >
        <span
          className="block text-xs font-black tracking-[0.22em] uppercase mb-2"
          style={{ color: "#C9A84C" }}
        >
          The Science
        </span>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,248,231,0.82)" }}
        >
          {card.science}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PRINCIPLE CARD
───────────────────────────────────────────── */
type PrincipleItem = (typeof principles)[number];
function PrincipleCard({
  principle,
  index,
}: {
  principle: PrincipleItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl p-8 relative overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(201,168,76,0.18)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.14 }}
      whileHover={{
        borderColor: "rgba(201,168,76,0.4)",
        boxShadow: "0 0 40px rgba(201,168,76,0.1)",
      }}
    >
      {/* Decorative chapter number */}
      <div
        className="absolute -top-4 -right-2 font-serif font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "7rem",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.1)",
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        {principle.no}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#C9A84C",
            }}
          >
            <Icon path={principle.svgPath} className="w-5 h-5" />
          </div>
          <div>
            <span
              className="block text-xs font-black tracking-[0.2em] uppercase"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              {principle.no}
            </span>
            <h3
              className="font-serif font-bold leading-tight"
              style={{ fontSize: "1.15rem", color: "#FFF8E7" }}
            >
              {principle.title}
            </h3>
          </div>
        </div>

        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "rgba(201,168,76,0.6)" }}
        >
          {principle.subtitle}
        </p>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,248,231,0.68)" }}
        >
          {principle.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   STORY CARD
───────────────────────────────────────────── */
type StoryItem = (typeof stories)[number];
function StoryCard({
  story,
  index,
}: {
  story: StoryItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "white",
        border: "1px solid rgba(201,168,76,0.2)",
        boxShadow:
          "0 4px 28px rgba(44,24,16,0.08), 0 1px 4px rgba(44,24,16,0.04)",
      }}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.14 }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 16px 48px rgba(201,168,76,0.2), 0 4px 12px rgba(44,24,16,0.06)",
      }}
    >
      {/* Before / After header */}
      <div className="grid grid-cols-2">
        <div
          className="p-3 text-center text-xs font-black tracking-widest uppercase"
          style={{ color: "#9B2335", background: "rgba(155,35,53,0.06)" }}
        >
          Before
        </div>
        <div
          className="p-3 text-center text-xs font-black tracking-widest uppercase"
          style={{
            color: "#2D7D46",
            background: "rgba(45,125,70,0.06)",
            borderLeft: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          After
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }} />

      <div className="p-6">
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div
            className="rounded-xl p-4 text-xs leading-relaxed"
            style={{ color: "#9B2335", background: "rgba(155,35,53,0.05)" }}
          >
            {story.before}
          </div>
          <div
            className="rounded-xl p-4 text-xs leading-relaxed"
            style={{ color: "#2D7D46", background: "rgba(45,125,70,0.05)" }}
          >
            {story.after}
          </div>
        </div>

        <blockquote
          className="rounded-xl p-5"
          style={{
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="font-serif text-3xl leading-none mb-2"
            style={{ color: "rgba(201,168,76,0.35)" }}
            aria-hidden="true"
          >
            "
          </div>
          <p
            className="font-accent italic text-sm leading-relaxed mb-3"
            style={{ color: "#5C4033" }}
          >
            {story.quote}
          </p>
          <footer
            className="text-xs font-black tracking-wider uppercase"
            style={{ color: "#C9A84C" }}
          >
            — {story.name}, {story.location}
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION: CINEMATIC HERO
───────────────────────────────────────────── */
function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0D0500" }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
        aria-hidden="true"
      >
        <img
          src="/assets/generated/vastu-experience-hero.dim_1600x900.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.28 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(13,5,0,0.7) 0%, rgba(26,10,5,0.5) 50%, rgba(13,5,0,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Rotating Om watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.span
          className="font-serif"
          style={{
            fontSize: "clamp(320px, 45vw, 560px)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,168,76,0.06)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 130,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          ॐ
        </motion.span>
      </div>

      {/* Pulsing concentric rings */}
      {[280, 480, 680].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size,
            height: size,
            border: "1px solid rgba(201,168,76,0.12)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 4.5 + i * 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Floating gold particle dots */}
      {floatingParticles.map((p) => (
        <motion.div
          key={`${p.left}-${p.top}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: "rgba(201,168,76,0.7)",
          }}
          animate={{
            y: [0, -28, -14, -22, 0],
            x: [0, 8, -6, 4, 0],
            opacity: [0.25, 0.65, 0.4, 0.5, 0.25],
          }}
          transition={{
            duration: p.dur,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: p.delay,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <span
            className="inline-block text-xs font-black tracking-[0.32em] uppercase px-5 py-2.5 rounded-full mb-10"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.35)",
              letterSpacing: "0.32em",
            }}
          >
            Vastu Experience Centre
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-serif font-bold leading-tight mb-7"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#FFF8E7",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
          }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          Vastu is Not a Belief.
          <br />
          <motion.span
            style={{
              color: "#C9A84C",
              display: "inline-block",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            It is a Science.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="leading-relaxed max-w-2xl mx-auto mb-12"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            color: "rgba(255,248,231,0.72)",
            textShadow: "0 1px 20px rgba(0,0,0,0.4)",
          }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          6,000 years of architectural wisdom — decoded through modern science,
          environmental psychology, and lived human experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          <a
            href="#story"
            className="btn-gold-shimmer px-9 py-4 rounded-full text-sm font-black shadow-xl"
            style={{ letterSpacing: "0.06em" }}
          >
            Begin the Journey ↓
          </a>
          <Link
            to="/"
            className="px-8 py-4 rounded-full text-sm font-bold hover:bg-gold/10 transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
            }}
          >
            Book a Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 9, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1.5px solid rgba(201,168,76,0.4)" }}
        >
          <motion.div
            className="w-1 h-2.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.7)" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: STATS STRIP
───────────────────────────────────────────── */
function StatsStrip() {
  return (
    <div
      className="py-10 px-4"
      style={{
        background:
          "linear-gradient(135deg, #C9A84C 0%, #D4AF37 45%, #E8C96A 70%, #B8860B 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCounter key={s.label} stat={s} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION: ANCIENT CODEX (Origin Story)
───────────────────────────────────────────── */
function AncientCodexSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="story"
      ref={ref}
      className="py-28 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #FAF3E0 60%, #F5EDD8 100%)",
      }}
    >
      {/* Large Om watermark in background */}
      <div
        className="absolute right-0 top-0 font-serif pointer-events-none select-none"
        style={{
          fontSize: "30rem",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.06)",
          transform: "translate(25%, -18%)",
        }}
        aria-hidden="true"
      >
        ॐ
      </div>

      {/* Sacred geometry background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 sacred-geo-overlay"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-xs font-black tracking-[0.28em] uppercase px-5 py-2 rounded-full mb-5"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            The Ancient Codex
          </span>

          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#2C1810",
              letterSpacing: "-0.02em",
            }}
          >
            A Science Born From
            <br />
            <span style={{ color: "#C9A84C" }}>Observation, Not Myth</span>
          </h2>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#5C4033" }}
          >
            Ancient Indians were not superstitious — they were scientists. They
            spent lifetimes observing how spaces affect human health, wealth,
            and relationships. Vastu Shastra is their peer-reviewed,
            field-tested conclusion passed down through the Vedas.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.5) 15%, rgba(201,168,76,0.35) 85%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <TimelineCard key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: MYTH VS SCIENCE
───────────────────────────────────────────── */
function MythVsScienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "#1A0A05" }}
    >
      {/* Animated star field */}
      {decorativeStars.map((star) => (
        <motion.div
          key={`star-${star.left}-${star.top}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: star.left,
            top: star.top,
            width: 2,
            height: 2,
            background: "rgba(201,168,76,0.5)",
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.dur,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
          aria-hidden="true"
        />
      ))}

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-18"
          style={{ marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-xs font-black tracking-[0.28em] uppercase px-5 py-2 rounded-full mb-5"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            Myth vs Science
          </span>
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#FFF8E7",
              letterSpacing: "-0.02em",
            }}
          >
            Every Rule Has a
            <br />
            <span style={{ color: "#C9A84C" }}>Scientific Reason</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,248,231,0.65)" }}
          >
            People call Vastu a myth because they do not know the science behind
            it. Here is the evidence — peer-reviewed, independently verified.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scienceCards.map((card, i) => (
            <ScienceCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: VASTU PURUSHA MANDALA
───────────────────────────────────────────── */
function MandalaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FAF3E0 0%, #FFF8E7 50%, #FAF0D7 100%)",
      }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none mandala-bg opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: SVG Mandala */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <VastuPurushaMandala />
            </motion.div>
          </div>

          {/* Right: Explanatory text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span
              className="inline-block text-xs font-black tracking-[0.28em] uppercase px-5 py-2 rounded-full mb-5"
              style={{
                color: "#C9A84C",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              The Cosmic Blueprint
            </span>

            <h2
              className="font-serif font-bold leading-tight mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#2C1810",
                letterSpacing: "-0.02em",
              }}
            >
              The Living Blueprint
              <br />
              <span style={{ color: "#C9A84C" }}>of Your Space</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#5C4033" }}
            >
              The Vastu Purusha Mandala is an 8×8 grid representing the cosmic
              energy map of any built space. Each of the 64 grid squares is
              governed by a specific directional energy. Modern architects use
              similar principles in feng shui and bioclimatic design.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5C4033" }}
            >
              The Mandala divides space into nine primary zones: the sacred
              Brahmasthan (centre), four cardinal zones (N, S, E, W), and four
              intercardinal corners. Each zone has an assigned function
              supported by the environmental science of that direction.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  zone: "NE",
                  function: "Study / Meditation",
                  reason: "Max UV, clarity light",
                },
                {
                  zone: "SE",
                  function: "Kitchen",
                  reason: "Afternoon sun, wind direction",
                },
                {
                  zone: "SW",
                  function: "Master Bedroom",
                  reason: "Geomagnetic stability",
                },
                {
                  zone: "NW",
                  function: "Living / Guest",
                  reason: "Prevailing breeze",
                },
                {
                  zone: "N",
                  function: "Study / Library",
                  reason: "Diffused natural light",
                },
                {
                  zone: "Centre",
                  function: "Brahmasthan",
                  reason: "Energy focal point",
                },
              ].map((z) => (
                <div
                  key={z.zone}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "rgba(201,168,76,0.07)",
                    border: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <div
                    className="font-serif font-bold text-base mb-0.5"
                    style={{ color: "#C9A84C" }}
                  >
                    {z.zone}
                  </div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#2C1810" }}
                  >
                    {z.function}
                  </div>
                  <div
                    className="text-xs leading-tight"
                    style={{ color: "#8B7355" }}
                  >
                    {z.reason}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: FOUR LAWS (Core Principles)
───────────────────────────────────────────── */
function FourLawsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "#2C1810" }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none grain-overlay"
        aria-hidden="true"
      />

      {/* Large decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-serif font-black"
          style={{
            fontSize: "clamp(18rem, 30vw, 28rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(201,168,76,0.04)",
            lineHeight: 1,
          }}
        >
          ॐ
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-18"
          style={{ marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-xs font-black tracking-[0.28em] uppercase px-5 py-2 rounded-full mb-5"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.28)",
            }}
          >
            Core Principles
          </span>
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#FFF8E7",
              letterSpacing: "-0.02em",
            }}
          >
            The Four Laws
            <br />
            <span style={{ color: "#C9A84C" }}>of Vastu Shastra</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,248,231,0.65)" }}
          >
            Vastu is not about idols, rituals, or luck. It is about applying
            precise environmental science to create spaces that support human
            life at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <PrincipleCard key={p.no} principle={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: REAL TRANSFORMATIONS
───────────────────────────────────────────── */
function TransformationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #FAF3E0 60%, #F5EDD8 100%)",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 sacred-geo-overlay"
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-18"
          style={{ marginBottom: "5rem" }}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block text-xs font-black tracking-[0.28em] uppercase px-5 py-2 rounded-full mb-5"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            Real Transformations
          </span>
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#2C1810",
              letterSpacing: "-0.02em",
            }}
          >
            Not Faith.
            <br />
            <span style={{ color: "#C9A84C" }}>Results.</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C4033" }}
          >
            These are not testimonials. These are documented case studies from
            homes and offices across Delhi NCR and Uttar Pradesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <StoryCard key={story.name} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: FINAL CTA
───────────────────────────────────────────── */
function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: "#0D0500" }}
    >
      {/* Gold gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative floating mandala */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-96 h-96"
          fill="none"
          stroke="rgba(201,168,76,1)"
          role="presentation"
          aria-hidden="true"
          focusable="false"
        >
          <title>Decorative mandala</title>
          {[30, 60, 90, 120, 150, 180].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} strokeWidth="0.5" />
          ))}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((a) => (
            <line
              key={a}
              x1="200"
              y1="20"
              x2="200"
              y2="380"
              strokeWidth="0.5"
              transform={`rotate(${a} 200 200)`}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      {floatingParticles.slice(0, 8).map((p) => (
        <motion.div
          key={`cta-${p.left}-${p.top}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size - 1,
            height: p.size - 1,
            background: "rgba(201,168,76,0.5)",
          }}
          animate={{
            y: [0, -20, -10, -18, 0],
            opacity: [0.15, 0.5, 0.3, 0.45, 0.15],
          }}
          transition={{
            duration: p.dur + 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          {/* Om symbol */}
          <motion.div
            className="font-serif font-bold mb-8 leading-none"
            style={{ fontSize: "5rem", color: "#C9A84C" }}
            animate={{
              textShadow: [
                "0 0 20px rgba(201,168,76,0.3)",
                "0 0 50px rgba(201,168,76,0.7)",
                "0 0 20px rgba(201,168,76,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            aria-hidden="true"
          >
            ॐ
          </motion.div>

          <h2
            className="font-serif font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              color: "#FFF8E7",
              letterSpacing: "-0.02em",
            }}
          >
            Your Space is Shaping
            <br />
            <span style={{ color: "#C9A84C" }}>Your Destiny</span>
          </h2>

          {/* Pull quote */}
          <motion.blockquote
            className="mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div
              className="font-serif text-5xl leading-none mb-3"
              style={{ color: "rgba(201,168,76,0.3)" }}
              aria-hidden="true"
            >
              "
            </div>
            <p
              className="font-accent italic text-xl leading-relaxed mb-4"
              style={{ color: "rgba(255,248,231,0.82)" }}
            >
              The house you live in is not just walls and a roof. It is a living
              energy field that supports or suppresses everything you do.
            </p>
            <footer
              className="text-sm font-black tracking-wider uppercase"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              — Charru Gupta
            </footer>
          </motion.blockquote>

          <p
            className="text-base leading-relaxed mb-12 max-w-lg mx-auto"
            style={{ color: "rgba(255,248,231,0.6)" }}
          >
            Charru Gupta has transformed over 1,000 homes and offices across
            Delhi NCR and Uttar Pradesh. Each consultation is a precise
            scientific analysis — not a ritual.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              onClick={() =>
                setTimeout(() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100)
              }
              className="btn-gold-shimmer px-10 py-4 rounded-full text-base font-black shadow-2xl"
              style={{ letterSpacing: "0.04em" }}
            >
              Book Your Vastu Consultation
            </Link>
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
              style={{
                border: "1.5px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
            >
              {/* WhatsApp SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
                focusable="false"
                role="presentation"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.843L.057 23.882a.5.5 0 00.61.635l6.155-1.613A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.946 0-3.773-.498-5.365-1.37l-.385-.217-3.99 1.046 1.063-3.88-.235-.395A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp +91 98717 18653
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function VastuExperienceCentrePage() {
  // Prevent AnimatePresence warnings
  const _ = AnimatePresence;
  void _;

  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Vastu Experience Centre | Vastu Science Delhi NCR | SimplyVastuShastra";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover the science of Vastu Shastra — ancient wisdom proven by modern research. Serving Delhi NCR, Noida, Gurgaon & Uttar Pradesh. Charru Gupta, SimplyVastuShastra.",
      );
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? "";
    if (canonicalEl) {
      canonicalEl.setAttribute(
        "href",
        "https://simplyvastushastra.com/vastu-experience-centre",
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ParallaxHero />
      <StatsStrip />
      <AncientCodexSection />
      <MythVsScienceSection />
      <MandalaSection />
      <FourLawsSection />
      <TransformationsSection />
      <FinalCTA />
    </div>
  );
}
