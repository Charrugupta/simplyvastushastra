import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      aria-label="WhatsApp contact button"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-14 bottom-0 whitespace-nowrap bg-white text-brown-text text-xs font-semibold px-3 py-2 rounded-xl shadow-lg pointer-events-none"
            role="tooltip"
            id="whatsapp-tooltip"
          >
            Chat with us on WhatsApp
            <div
              className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "6px solid white",
              }}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse rings */}
      <div className="relative" aria-hidden="true">
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30 scale-110" />
        <span
          className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20 scale-125"
          style={{ animationDelay: "0.4s" }}
        />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919871718653"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        aria-describedby="whatsapp-tooltip"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-white" size={26} aria-hidden="true" />
      </a>
    </div>
  );
}
