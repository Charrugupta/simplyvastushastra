import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

const benefits = [
  "Harmonious energy flow throughout the home",
  "Improved family relationships and emotional well-being",
  "Enhanced prosperity and financial stability",
  "Better health for all family members",
  "Peaceful sleep and positive atmosphere",
  "Optimized placement of rooms, furniture, and sacred spaces",
];

const steps = [
  {
    step: "Initial Consultation",
    desc: "A detailed discussion about your home, current challenges, and goals. Share your floor plan and property details.",
    num: 1,
  },
  {
    step: "On-Site Assessment",
    desc: "Charru Gupta visits your home to assess energy zones, directions, room placements, and Vastu compliance.",
    num: 2,
  },
  {
    step: "Vastu Analysis",
    desc: "Deep analysis of the five elements — Earth, Water, Fire, Air, Space — and their balance in your home.",
    num: 3,
  },
  {
    step: "Remedy Report",
    desc: "A comprehensive written report with prioritised, no-demolition remedies, placement guidance, and colour recommendations.",
    num: 4,
  },
  {
    step: "Implementation Support",
    desc: "30-day email support to help you implement remedies and answer follow-up questions.",
    num: 5,
  },
];

const faqs = [
  {
    q: "Do I need to demolish walls for Vastu remedies?",
    a: "In most cases, no. Charru Gupta specializes in no-demolition Vastu remedies using placement, colours, elements, and energizing techniques.",
  },
  {
    q: "How long does a residential Vastu consultation take?",
    a: "An on-site visit typically takes 2–3 hours. The detailed report is delivered within 3–5 working days.",
  },
  {
    q: "Is Vastu consultation available for rented homes?",
    a: "Yes, Vastu remedies can be applied to both owned and rented properties without structural changes.",
  },
  {
    q: "Which areas do you serve for residential Vastu?",
    a: "We serve all areas of Delhi NCR including Noida, Gurgaon, Greater Noida, Ghaziabad, Faridabad, Dwarka, and all of Uttar Pradesh.",
  },
];

export default function ResidentialVastuPage() {
  useEffect(() => {
    document.title =
      "Residential Vastu Consultant in Delhi NCR | Charru Gupta | SimplyVastuShastra";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Expert residential Vastu consultation by Charru Gupta. Serving Noida, Delhi, Gurgaon, Greater Noida, and all of Delhi NCR. No-demolition remedies for homes.",
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
          Residential Vastu Consultation
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          Transform your home into a sanctuary of peace, prosperity, and
          positive energy
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            data-ocid="residential.primary_button"
          >
            Book Consultation
          </Link>
          <a
            href="https://wa.me/919871718653"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-cream border border-gold/40 hover:border-gold transition-all duration-300"
            data-ocid="residential.secondary_button"
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
            Why Residential Vastu Matters
          </h2>
          <p className="text-brown-medium leading-relaxed mb-4">
            Your home is more than a physical space — it is the container for
            your family's energy, relationships, health, and prosperity. Vastu
            Shastra, the ancient Indian science of architecture and spatial
            harmony, provides time-tested principles to align your home with the
            natural forces of the universe.
          </p>
          <p className="text-brown-medium leading-relaxed">
            Charru Gupta brings 7+ years of expertise in residential Vastu
            consultation across Delhi, Noida, Gurgaon, Greater Noida, Ghaziabad,
            and Uttar Pradesh. With a scientific approach and no-demolition
            remedies, she helps families unlock the full positive potential of
            their homes.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" style={{ background: "#FFF8E7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
            Benefits of Residential Vastu
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
                className="bg-white border border-gold/20 rounded-xl p-4 group"
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
          Ready to Harmonize Your Home?
        </h2>
        <p className="text-gold/80 mb-8 max-w-xl mx-auto">
          Book your residential Vastu consultation with Charru Gupta today.
          Serving Delhi NCR &amp; Uttar Pradesh.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
          data-ocid="residential.submit_button"
        >
          Book Consultation Now
        </Link>
      </section>
    </main>
  );
}
