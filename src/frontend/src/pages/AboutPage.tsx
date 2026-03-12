import { useEffect } from "react";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Charru Gupta | Best Vastu Consultant in Delhi NCR";
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
          About Charru Gupta
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          India's Leading Vastu Consultant | 7+ Years · 1000+ Families · 3000+
          Students
        </p>
      </div>

      <About />
      <WhyChooseUs />
    </main>
  );
}
