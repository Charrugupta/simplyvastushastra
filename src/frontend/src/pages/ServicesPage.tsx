import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Vastu Services | Residential, Commercial & Industrial Vastu | Charru Gupta";
  }, []);

  return (
    <main>
      {/* Page Hero */}
      <div
        className="pt-24 pb-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2C1810 0%, #3D2314 50%, #2C1810 100%)",
        }}
      >
        <span
          className="text-4xl text-gold font-serif block mb-4"
          aria-hidden="true"
        >
          ॐ
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
          Our Vastu Services
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          Residential · Commercial · Industrial
        </p>
      </div>

      <Services />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-16 text-center" style={{ background: "#FFF8E7" }}>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-brown-medium mb-8 max-w-xl mx-auto">
          Book a consultation with Charru Gupta and experience the power of
          authentic Vastu Shastra.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-brown-text transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
          data-ocid="services.primary_button"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
