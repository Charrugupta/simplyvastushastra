import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const cities = [
  { name: "Noida", desc: "Residential & Commercial Vastu", slug: "noida" },
  { name: "Dwarka, Delhi", desc: "Home & Apartment Vastu", slug: "dwarka" },
  { name: "Delhi", desc: "Home & Office Vastu", slug: "delhi" },
  { name: "Gurgaon", desc: "Corporate & Business Vastu", slug: "gurgaon" },
  { name: "Greater Noida", desc: "Residential Vastu", slug: "greater-noida" },
  { name: "Ghaziabad", desc: "Home & Industrial Vastu", slug: "ghaziabad" },
  {
    name: "Faridabad",
    desc: "Residential & Industrial Vastu",
    slug: "faridabad",
  },
  { name: "Rohini", desc: "Home & Apartment Vastu", slug: "rohini" },
  { name: "Lucknow", desc: "Online Vastu Consultation", slug: "lucknow" },
  { name: "Kanpur", desc: "Online Vastu Consultation", slug: "kanpur" },
  { name: "Varanasi", desc: "Online Vastu Consultation", slug: "varanasi" },
  { name: "Prayagraj", desc: "Online Vastu Consultation", slug: null },
];

const faqs = [
  {
    q: "Who is the best Vastu consultant in Noida?",
    a: "Charru Gupta of SimplyVastuShastra is widely regarded as the best Vastu consultant in Noida, with 7+ years of experience and 1000+ consultations across Noida, Delhi NCR, and Uttar Pradesh.",
  },
  {
    q: "Is there a Vastu consultant in Dwarka, Delhi?",
    a: "Yes. Charru Gupta provides Vastu consultation for all Dwarka sectors (1–23) and Dwarka Expressway. Both in-person site visits and online consultations are available for Dwarka residents.",
  },
  {
    q: "Does Charru Gupta offer Vastu consultation in Delhi?",
    a: "Yes. Charru offers in-person Vastu consultation across all of Delhi — South Delhi, North Delhi, East Delhi, Dwarka, Rohini, Pitampura — and online consultations for the entire country.",
  },
  {
    q: "Is there a Vastu consultant in Gurgaon / Gurugram?",
    a: "SimplyVastuShastra serves Gurgaon (Gurugram) and all Delhi NCR cities including Faridabad and Ghaziabad for residential, commercial, and industrial Vastu consultations.",
  },
  {
    q: "Can I get online Vastu consultation in Uttar Pradesh?",
    a: "Yes. We offer comprehensive online Vastu consultations for all of UP — Lucknow, Kanpur, Varanasi, Agra, Meerut, Prayagraj, Ayodhya, Mathura, and all UP cities via video call.",
  },
  {
    q: "Does Vastu require breaking walls or demolition?",
    a: "No. Charru Gupta's no-demolition approach resolves 85–90% of Vastu doshas through colour changes, furniture placement, directional corrections, and element balancing — no structural changes needed.",
  },
  {
    q: "What is the difference between residential and commercial Vastu?",
    a: "Residential Vastu focuses on homes, flats, and apartments — optimising bedrooms, kitchens, entrances, and family zones. Commercial Vastu targets offices, shops, and businesses — improving productivity, client flow, and financial energy.",
  },
  {
    q: "How long does it take to see results after Vastu corrections?",
    a: "Most clients notice improvements within 21–40 days of implementing Vastu remedies. Changes in sleep quality, relationship harmony, and financial flow are commonly reported first.",
  },
];

export default function LocalSEO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="local-seo"
      ref={ref}
      aria-label="Vastu consultation cities and FAQ"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
      }}
    >
      {/* Cities We Serve */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Our Coverage
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brown-text mb-3">
            Vastu Consultation Across{" "}
            <span className="text-gold-gradient">
              Delhi NCR &amp; Uttar Pradesh
            </span>
          </h2>
          <p className="text-brown-medium text-base max-w-2xl mx-auto">
            Whether you are in Noida, Delhi, Gurgaon, Ghaziabad, Faridabad, or
            anywhere in UP — Charru Gupta brings expert Vastu guidance to your
            doorstep (in-person or online).
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {cities.map((city) => {
            const inner = (
              <>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2.5"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-serif text-sm font-semibold text-brown-text group-hover:text-gold-dark transition-colors">
                  {city.name}
                </span>
              </>
            );

            const sharedClassName =
              "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300";
            const sharedStyle = {
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 2px 8px rgba(44,24,16,0.04)",
            };

            if (city.slug) {
              return (
                <Link
                  key={city.name}
                  to="/vastu-consultant/$slug"
                  params={{ slug: city.slug }}
                  className={sharedClassName}
                  style={sharedStyle}
                  aria-label={`Vastu Consultant in ${city.name}`}
                  data-ocid="localseo.link"
                >
                  {inner}
                </Link>
              );
            }

            return (
              <Link
                key={city.name}
                to="/areas-we-serve"
                className={sharedClassName}
                style={sharedStyle}
                aria-label={`Vastu Consultant in ${city.name}`}
                data-ocid="localseo.link"
              >
                {inner}
              </Link>
            );
          })}
        </motion.div>
      </div>

      {/* Divider */}
      <div
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16"
        aria-hidden="true"
      >
        <div
          className="h-px w-full"
          style={{ background: "rgba(201,168,76,0.2)" }}
        />
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              color: "#C9A84C",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-3">
            Common Questions About{" "}
            <span className="text-gold-gradient">Vastu Consultation</span>
          </h2>
          <p className="text-brown-medium text-base max-w-xl mx-auto">
            Answers to the most common queries from clients in Delhi NCR &amp;
            Uttar Pradesh.
          </p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.85)",
                border:
                  openIndex === i
                    ? "1px solid rgba(201,168,76,0.45)"
                    : "1px solid rgba(201,168,76,0.2)",
                boxShadow:
                  openIndex === i
                    ? "0 4px 16px rgba(201,168,76,0.12)"
                    : "0 2px 6px rgba(44,24,16,0.04)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-serif font-bold text-brown-text text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <section id={`faq-answer-${i}`} className="px-6 pb-5">
                  <p className="text-brown-medium text-sm leading-relaxed border-t border-gold/15 pt-4">
                    {faq.a}
                  </p>
                </section>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
