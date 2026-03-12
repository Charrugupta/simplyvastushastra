import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

const benefits = [
  "Improved employee productivity and focus",
  "Positive business growth and revenue enhancement",
  "Better client relationships and business reputation",
  "Reduced workplace conflicts and stress",
  "Optimized placement of owner cabin, cash counter, and reception",
  "Enhanced brand energy and market presence",
];

const steps = [
  {
    step: "Business Understanding",
    desc: "Deep discussion about your business type, challenges, and objectives. Analysis of the current business performance vs Vastu alignment.",
    num: 1,
  },
  {
    step: "Premises Assessment",
    desc: "On-site Vastu survey of your office, shop, or commercial space — covering entrance direction, workstation layout, and energy zones.",
    num: 2,
  },
  {
    step: "Commercial Vastu Analysis",
    desc: "Application of Vastu Purusha Mandala to your commercial space with focus on wealth zones, growth directions, and authority positions.",
    num: 3,
  },
  {
    step: "Business Remedy Report",
    desc: "Detailed report with actionable remedies for every area — from reception desk to MD cabin, cash counter to conference room.",
    num: 4,
  },
  {
    step: "Ongoing Guidance",
    desc: "Follow-up support for implementation with periodic check-ins for evolving business needs.",
    num: 5,
  },
];

const faqs = [
  {
    q: "Can Vastu help improve my business sales?",
    a: "Yes. Proper Vastu alignment of the cash counter, business owner's seat, and entrance direction can significantly improve the flow of prosperity energy, supporting better sales outcomes.",
  },
  {
    q: "Does Vastu apply to small shops and retail outlets?",
    a: "Absolutely. Vastu principles apply to businesses of all sizes — from small shops to large corporate offices. The principles scale with the space.",
  },
  {
    q: "Can you do commercial Vastu without renovation?",
    a: "Yes, most commercial Vastu remedies can be implemented without structural changes — through furniture placement, colours, elements, and energy-correcting techniques.",
  },
  {
    q: "Which areas in Delhi NCR do you serve for commercial Vastu?",
    a: "We serve all commercial areas in Noida (Sector 18, 62, 63, 125, 132), Delhi (Connaught Place, Nehru Place, Lajpat Nagar), Gurgaon (DLF Cyber City, Golf Course Road), and across UP.",
  },
];

export default function CommercialVastuPage() {
  useEffect(() => {
    document.title =
      "Commercial Vastu Consultant in Delhi NCR | Office & Business Vastu | Charru Gupta";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Expert commercial Vastu consultation for offices, shops, and businesses by Charru Gupta. Serving Noida, Delhi, Gurgaon. Boost business growth with authentic Vastu.",
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
          Commercial Vastu Consultation
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          Align your business with cosmic energy for sustained growth,
          prosperity, and success
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            data-ocid="commercial.primary_button"
          >
            Book Consultation
          </Link>
          <a
            href="https://wa.me/919871718653"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-cream border border-gold/40 hover:border-gold transition-all duration-300"
            data-ocid="commercial.secondary_button"
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
            Vastu for Business Success
          </h2>
          <p className="text-brown-medium leading-relaxed mb-4">
            Every successful business needs the right foundation — and that
            includes the energy of its physical space. Commercial Vastu Shastra
            applies ancient spatial wisdom to modern business environments:
            offices, shops, showrooms, clinics, restaurants, and corporate
            headquarters.
          </p>
          <p className="text-brown-medium leading-relaxed">
            Charru Gupta has consulted for businesses across Delhi NCR, Noida,
            Gurgaon, and Uttar Pradesh — from startups to established
            enterprises. Her commercial Vastu assessments identify energy blocks
            causing stagnation and prescribe precise, practical remedies to
            unlock growth.
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" style={{ background: "#FFF8E7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
            Business Benefits of Commercial Vastu
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
          Let's Energize Your Business Space
        </h2>
        <p className="text-gold/80 mb-8 max-w-xl mx-auto">
          Book your commercial Vastu consultation with Charru Gupta today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
          data-ocid="commercial.submit_button"
        >
          Book Consultation Now
        </Link>
      </section>
    </main>
  );
}
