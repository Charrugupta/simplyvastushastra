import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  lead?: string;
  subtitle?: string;
  isInView: boolean;
  light?: boolean; // for dark backgrounds
}

/**
 * P1 Fix: Unified 4-level section header hierarchy:
 * eyebrow pill → ornamental divider → h2 headline → Cormorant Garamond lead → subtitle
 */
export default function SectionHeader({
  eyebrow,
  headline,
  lead,
  subtitle,
  isInView,
  light = false,
}: SectionHeaderProps) {
  const textColor = light ? "text-cream" : "text-brown-text";
  const subtitleColor = light ? "text-brown-light" : "text-brown-medium";
  const leadColor = light ? "text-cream/80" : "text-brown-medium";
  const badgeBg = light ? "bg-gold/15" : "bg-gold/10";
  const badgeBorder = light ? "border-gold/40" : "border-gold/30";

  return (
    <div className="text-center mb-14">
      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-3 mb-0"
      >
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.16em] uppercase border ${badgeBorder} text-gold ${badgeBg}`}
        >
          <span
            className="w-1 h-1 rounded-full bg-gold opacity-70"
            aria-hidden="true"
          />
          {eyebrow}
          <span
            className="w-1 h-1 rounded-full bg-gold opacity-70"
            aria-hidden="true"
          />
        </span>
      </motion.div>

      {/* Ornamental rule — P1 signature detail */}
      <motion.div
        className="section-divider"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          className="text-gold opacity-60 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M9 0 L12 6 L9 12 L6 6 Z" fill="currentColor" opacity="0.5" />
          <path d="M9 2 L11 6 L9 10 L7 6 Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Main headline */}
      <motion.h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} leading-tight mb-3`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        {headline}
      </motion.h2>

      {/* Cormorant Garamond lead — italic accent between h2 and subtitle */}
      {lead && (
        <motion.p
          className={`font-accent text-xl md:text-2xl italic ${leadColor} mb-2 leading-relaxed`}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {lead}
        </motion.p>
      )}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={`${subtitleColor} text-base max-w-lg mx-auto leading-relaxed`}
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
