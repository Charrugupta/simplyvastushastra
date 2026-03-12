import { useEffect } from "react";
import Courses from "../components/Courses";

export default function CoursesPage() {
  useEffect(() => {
    document.title =
      "Vastu Courses | Foundation & Advanced Vastu Shastra | Charru Gupta";
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
          Vastu Courses
        </h1>
        <p className="text-gold/80 text-lg max-w-2xl mx-auto px-4">
          Learn the Ancient Science of Vastu Shastra — Live Classes by Charru
          Gupta
        </p>
      </div>

      <Courses />
    </main>
  );
}
