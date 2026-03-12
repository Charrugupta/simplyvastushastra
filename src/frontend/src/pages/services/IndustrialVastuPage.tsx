import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

const benefits = [
  "Improved production efficiency and output quality",
  "Reduced machinery breakdowns and operational disruptions",
  "Enhanced worker safety and reduced accidents",
  "Better financial returns and cash flow for the business",
  "Positive management-labour relations",
  "Optimized factory layout for energy efficiency",
];

const steps = [
  {
    step: "Industrial Site Analysis",
    desc: "Analysis of your factory/plant's plot direction, entrance orientation, and the placement of key zones like production, storage, admin, and utilities.",
    num: 1,
  },
  {
    step: "Energy Zone Mapping",
    desc: "Application of Vastu Purusha Mandala to industrial layout \u2014 identifying power zones for management, wealth zones for treasury, and activity zones for production floors.",
    num: 2,
  },
  {
    step: "Element Assessment",
    desc: "Assessment of the five elements (Pancha Bhuta) in context of industrial operations \u2014 fire zones, water sources, electrical zones, and earth stability.",
    num: 3,
  },
  {
    step: "Industrial Vastu Report",
    desc: "Comprehensive report with layout recommendations, machinery placement guidance, entrance optimization, and remedies for existing Vastu doshas.",
    num: 4,
  },
  {
    step: "Implementation Consultation",
    desc: "On-site guidance for implementing remedies, with special consideration for operational continuity and safety requirements.",
    num: 5,
  },
];

const faqs = [
  {
    q: "Can Vastu improve factory production efficiency?",
    a: "Yes. Proper alignment of production zones with directional energy forces can reduce friction, improve workflow, and enhance overall operational efficiency.",
  },
  {
    q: "Is industrial Vastu applicable to factories in UP and Noida?",
    a: "Absolutely. Charru Gupta has extensive experience with industrial Vastu in Greater Noida, Noida (Sectors 62\u201363, 80, 135), Ghaziabad, and across Uttar Pradesh industrial corridors.",
  },
  {
    q: "How is industrial Vastu different from residential?",
    a: "Industrial Vastu focuses on operational energy \u2014 production flow, worker zones, machinery placement, fire safety, and financial zones \u2014 rather than domestic harmony.",
  },
  {
    q: "Can Vastu help with ongoing business losses in manufacturing?",
    a: "Persistent losses often have a Vastu component. Analysis of the main gate direction, owner's office, and cash/accounts department can reveal and remedy energy blocks causing financial drain.",
  },
];

export default function IndustrialVastuPage() {
  useEffect(() => {
    document.title =
      "Industrial Vastu Expert in UP & Delhi NCR | Factory & Plant Vastu | Charru Gupta";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Industrial Vastu consultation by Charru Gupta for factories, plants, and warehouses in Noida, Greater Noida, Ghaziabad, and Uttar Pradesh industrial areas.",
      );
  }, []);

  return (
    <main>
      {/* Hero */}
      <div
        className="pt-24 pb-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2C1810 0%, #3D2314 50%, #2C1810 100%)",
        }}
      >
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
          Industrial Vastu Consultation
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          Optimize your factory, plant, or warehouse with authentic industrial
          Vastu expertise
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            data-ocid="industrial.primary_button"
          >
            Book Consultation
          </Link>
          <a
            href="https://wa.me/919871718653"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-cream border border-gold/40 hover:border-gold transition-all duration-300"
            data-ocid="industrial.secondary_button"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-6">
            Industrial Vastu: Ancient Science for Modern Manufacturing
          </h2>
          <p className="text-brown-medium leading-relaxed mb-4">
            Industrial spaces \u2014 factories, plants, warehouses, and
            manufacturing units \u2014 are dynamic environments with complex
            energy requirements. Vastu Shastra offers a systematic framework for
            optimizing these spaces, aligning production zones with directional
            forces that support efficiency, safety, and profitability.
          </p>
          <p className="text-brown-medium leading-relaxed">
            Charru Gupta has consulted for industrial units in Greater Noida,
            Noida, Ghaziabad, and across the Yamuna Expressway industrial
            corridor. Her industrial Vastu assessments are thorough, practical,
            and designed to work within operational realities \u2014 no
            disruption to production.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" style={{ background: "#FFF8E7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
            Benefits of Industrial Vastu
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gold/20"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "#C9A84C" }}
                  aria-hidden="true"
                />
                <span className="text-brown-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
          Our Consultation Process
        </h2>
        <div className="space-y-6">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-brown-text text-sm"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                }}
                aria-hidden="true"
              >
                {item.num}
              </div>
              <div>
                <h3 className="font-serif font-bold text-brown-text mb-1">
                  {item.step}
                </h3>
                <p className="text-brown-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ background: "#FFF8E7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white border border-gold/20 rounded-xl p-4"
              >
                <summary className="font-medium text-brown-text cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-gold ml-2" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-brown-medium mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #2C1810 0%, #3D2314 100%)",
        }}
      >
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-4">
          Transform Your Industrial Space
        </h2>
        <p className="text-gold/80 mb-8 max-w-xl mx-auto">
          Book your industrial Vastu consultation with Charru Gupta. Expert
          guidance for factories, plants, and warehouses across Delhi NCR &amp;
          UP.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
          data-ocid="industrial.submit_button"
        >
          Book Consultation Now
        </Link>
      </section>
    </main>
  );
}
