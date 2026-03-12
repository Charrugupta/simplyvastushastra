import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { CITY_PAGES } from "../data/cityPages";

const DELHI_NCR_SLUGS = [
  "noida",
  "delhi",
  "gurgaon",
  "greater-noida",
  "ghaziabad",
  "faridabad",
  "dwarka",
  "rohini",
  "noida-extension",
];

const UP_SLUGS = ["lucknow", "kanpur", "varanasi"];

export default function AreasWeServePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Areas We Serve | Vastu Consultant in Delhi NCR & UP — SimplyVastuShastra";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        "Charru Gupta provides expert Vastu consultation across Delhi NCR (Noida, Delhi, Gurgaon, Faridabad, Ghaziabad, Dwarka, Rohini) and Uttar Pradesh (Lucknow, Kanpur, Varanasi).",
      );

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? "";
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute(
      "href",
      "https://simplyvastushastra.com/areas-we-serve",
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";
    const prevOgUrl = ogUrl?.getAttribute("content") ?? "";

    if (ogTitle)
      ogTitle.setAttribute(
        "content",
        "Areas We Serve | Vastu Consultant in Delhi NCR & UP",
      );
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        "Expert Vastu consultation across Delhi NCR & Uttar Pradesh by Charru Gupta.",
      );
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        "https://simplyvastushastra.com/areas-we-serve",
      );

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc);
      if (ogUrl) ogUrl.setAttribute("content", prevOgUrl);
    };
  }, []);

  const delhiNCRCities = CITY_PAGES.filter((c) =>
    DELHI_NCR_SLUGS.includes(c.slug),
  );
  const upCities = CITY_PAGES.filter((c) => UP_SLUGS.includes(c.slug));

  return (
    <div className="min-h-screen" style={{ background: "#FFF8E7" }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
        }}
      >
        <div
          className="absolute right-8 top-16 text-9xl font-serif pointer-events-none select-none hidden lg:block"
          style={{ color: "rgba(201,168,76,0.07)" }}
          aria-hidden="true"
        >
          ॐ
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brown-medium flex-wrap">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gold/40" aria-hidden="true">
                ›
              </li>
              <li className="text-brown-text font-medium">Areas We Serve</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{
                color: "#C9A84C",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              Our Coverage
            </span>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-brown-text mb-4 leading-tight">
              Vastu Consultation —{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Areas We Serve
              </span>
            </h1>

            <p className="text-brown-medium text-base md:text-lg leading-relaxed max-w-3xl">
              Charru Gupta provides expert Vastu consultation across Delhi NCR
              and Uttar Pradesh for residential homes, commercial offices, and
              industrial properties. Both in-person site visits and online
              consultations are available across all the cities listed below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delhi NCR Section */}
      <section ref={ref} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="h-px flex-1"
                style={{ background: "rgba(201,168,76,0.2)" }}
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text whitespace-nowrap">
                Delhi NCR
              </h2>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(201,168,76,0.2)" }}
                aria-hidden="true"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {delhiNCRCities.map((city, idx) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <Link
                    to="/vastu-consultant/$slug"
                    params={{ slug: city.slug }}
                    className="group block p-6 rounded-2xl transition-all duration-300 h-full"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                    }}
                    data-ocid={`areas.item.${idx + 1}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        className="flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <h3 className="font-serif font-bold text-brown-text group-hover:text-gold-dark transition-colors">
                          {city.name}
                        </h3>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#C9A84C" }}
                        >
                          {city.region}
                        </span>
                      </div>
                    </div>
                    <p className="text-brown-medium text-xs leading-relaxed line-clamp-2 mb-4">
                      {city.tagline}
                    </p>
                    <p
                      className="text-xs font-bold group-hover:translate-x-1 transition-transform duration-200 inline-block"
                      style={{ color: "#C9A84C" }}
                    >
                      View Page →
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* UP Section */}
      <section
        className="py-16 px-4"
        style={{ background: "rgba(255,255,255,0.5)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="h-px flex-1"
                style={{ background: "rgba(201,168,76,0.2)" }}
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text whitespace-nowrap">
                Uttar Pradesh
              </h2>
              <div
                className="h-px flex-1"
                style={{ background: "rgba(201,168,76,0.2)" }}
                aria-hidden="true"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {upCities.map((city, idx) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.06 }}
                >
                  <Link
                    to="/vastu-consultant/$slug"
                    params={{ slug: city.slug }}
                    className="group block p-6 rounded-2xl transition-all duration-300 h-full"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                    }}
                    data-ocid={`areas.item.${idx + 10}`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        className="flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <h3 className="font-serif font-bold text-brown-text group-hover:text-gold-dark transition-colors">
                          {city.name}
                        </h3>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#C9A84C" }}
                        >
                          {city.region}
                        </span>
                      </div>
                    </div>
                    <p className="text-brown-medium text-xs leading-relaxed line-clamp-2 mb-4">
                      {city.tagline}
                    </p>
                    <p
                      className="text-xs font-bold group-hover:translate-x-1 transition-transform duration-200 inline-block"
                      style={{ color: "#C9A84C" }}
                    >
                      View Page →
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online India-wide CTA */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #3D2B1F 0%, #5C3A28 50%, #3D2B1F 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="text-4xl mb-3 font-serif"
            style={{ color: "rgba(201,168,76,0.4)" }}
            aria-hidden="true"
          >
            ॐ
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-3">
            Can't Find Your City?
          </h2>
          <p className="font-accent italic text-cream/70 text-base mb-3">
            We offer Online Vastu Consultation across all of India.
          </p>
          <p className="text-cream/60 text-sm mb-8">
            Whether you're in Mumbai, Bangalore, Hyderabad, Pune, Chandigarh, or
            anywhere else — Charru Gupta provides thorough, detailed online
            Vastu consultations via video call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services/$slug"
              params={{ slug: "online-vastu-consultation" }}
              className="btn-gold-shimmer px-10 py-4 rounded-full font-bold text-base"
              data-ocid="areas.primary_button"
            >
              Online Vastu Consultation
            </Link>
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 font-semibold text-sm transition-all duration-300"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
              data-ocid="areas.secondary_button"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
