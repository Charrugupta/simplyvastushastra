import { Link, useParams } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CITY_PAGES } from "../data/cityPages";

function injectCityJsonLd(city: (typeof CITY_PAGES)[0]) {
  const existing = document.getElementById("city-jsonld");
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = "city-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `SimplyVastuShastra — Vastu Consultant in ${city.name}`,
      description: `Expert Vastu consultation services in ${city.name} by Charru Gupta. ${city.tagline}`,
      url: `https://simplyvastushastra.com/vastu-consultant/${city.slug}`,
      image: "https://simplyvastushastra.com/assets/generated/charru-gupta.png",
      telephone: "+91-9871718653",
      email: "info@charrugupta.com",
      areaServed: [
        { "@type": "City", name: city.name },
        { "@type": "State", name: city.region },
      ],
      priceRange: "₹₹₹",
      founder: {
        "@type": "Person",
        name: "Charru Gupta",
        url: "https://simplyvastushastra.com",
      },
      sameAs: [
        "https://www.instagram.com/charrugupta_official",
        "https://www.youtube.com/channel/UCwwCrDePJusBqQlX7bnGCAQ",
        "https://www.facebook.com/charru.gupta.94/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ]);
  document.head.appendChild(script);
}

export default function CityPage() {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug;
  const city = useMemo(
    () => CITY_PAGES.find((c) => c.slug === slug) ?? null,
    [slug],
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!city) return;

    const prevTitle = document.title;
    document.title = `Vastu Consultant in ${city.name} | Charru Gupta`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc)
      metaDesc.setAttribute(
        "content",
        `${city.tagline}. Expert Vastu consultation in ${city.name} by Charru Gupta — 7+ years, 1000+ consultations, no-demolition approach.`,
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
      `https://simplyvastushastra.com/vastu-consultant/${city.slug}`,
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
        `Vastu Consultant in ${city.name} | Charru Gupta`,
      );
    if (ogDesc)
      ogDesc.setAttribute(
        "content",
        `${city.tagline}. Expert Vastu consultation in ${city.name} by Charru Gupta.`,
      );
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://simplyvastushastra.com/vastu-consultant/${city.slug}`,
      );

    injectCityJsonLd(city);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc);
      if (ogUrl) ogUrl.setAttribute("content", prevOgUrl);
      const script = document.getElementById("city-jsonld");
      if (script) script.remove();
    };
  }, [city]);

  const relatedCities = useMemo(() => {
    if (!city) return [];
    return CITY_PAGES.filter((c) => c.slug !== city.slug).slice(0, 4);
  }, [city]);

  if (!city) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center py-32 px-4"
        style={{ background: "#FFF8E7" }}
      >
        <div
          className="text-6xl mb-4 font-serif"
          style={{ color: "rgba(201,168,76,0.3)" }}
          aria-hidden="true"
        >
          ॐ
        </div>
        <h1 className="font-serif text-3xl font-bold text-brown-text mb-3">
          Page Not Found
        </h1>
        <p className="text-brown-medium mb-8 text-center max-w-md">
          The city page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/areas-we-serve"
          className="btn-gold px-8 py-3 rounded-full font-semibold text-sm"
          data-ocid="city.link"
        >
          ← View All Cities
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#FFF8E7" }}>
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-20 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
        }}
      >
        {/* Decorative Om watermark */}
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
              <li>
                <Link
                  to="/areas-we-serve"
                  className="hover:text-gold transition-colors"
                >
                  Areas We Serve
                </Link>
              </li>
              <li className="text-gold/40" aria-hidden="true">
                ›
              </li>
              <li className="text-brown-text font-medium">{city.name}</li>
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
              {city.region}
            </span>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-brown-text mb-4 leading-tight">
              Vastu Consultant in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {city.name}
              </span>
            </h1>

            <p className="text-brown-medium text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              {city.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 btn-gold-shimmer px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
                data-ocid="city.primary_button"
              >
                Book Consultation in {city.name}
              </a>
              <a
                href="https://wa.me/919871718653"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 font-semibold text-sm transition-all duration-300"
                style={{
                  borderColor: "rgba(201,168,76,0.4)",
                  color: "#C9A84C",
                }}
                data-ocid="city.secondary_button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.843L.057 23.882a.5.5 0 00.61.635l6.155-1.613A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.946 0-3.773-.498-5.365-1.37l-.385-.217-3.99 1.046 1.063-3.88-.235-.395A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section
        ref={ref}
        className="py-16 px-4"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-12 items-start"
          >
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-5">
                Vastu Consultation in {city.name}
              </h2>
              <p className="text-brown-medium text-base leading-relaxed">
                {city.intro}
              </p>
            </div>
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <img
                src="/assets/generated/charru-gupta.png"
                alt="Charru Gupta — Vastu Consultant"
                className="w-24 h-24 rounded-full object-cover border-2 mx-auto mb-4"
                style={{ borderColor: "#C9A84C" }}
                loading="lazy"
              />
              <p className="font-serif font-bold text-brown-text text-center mb-1">
                Charru Gupta
              </p>
              <p className="text-xs text-gold font-semibold text-center mb-4">
                Vastu Consultant & Expert
              </p>
              <ul className="space-y-2">
                {[
                  "7+ Years Experience",
                  "1000+ Consultations",
                  "No Demolition Approach",
                  "Delhi NCR & UP",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-brown-medium"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C9A84C" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-16 px-4"
        style={{ background: "rgba(255,255,255,0.5)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-8">
              Services Offered in{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8860B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {city.name}
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {city.services.map((service, i) => (
                <div
                  key={service}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-serif"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      color: "#C9A84C",
                    }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-brown-medium text-sm leading-relaxed pt-1.5">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section
        className="py-14 px-4"
        style={{
          background:
            "linear-gradient(135deg, #3D2B1F 0%, #5C3A28 50%, #3D2B1F 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream text-center mb-10">
            Why Choose Charru Gupta for{" "}
            <span style={{ color: "#C9A84C" }}>Vastu in {city.name}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "7+", label: "Years of Experience" },
              { num: "1000+", label: "Families Transformed" },
              { num: "0", label: "Demolition Required" },
              { num: "5★", label: "Client Rating" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p
                  className="font-serif text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: "#C9A84C" }}
                >
                  {num}
                </p>
                <p className="text-cream/70 text-xs md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-8 block text-center"
              style={{
                color: "#C9A84C",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              Client Story from {city.name}
            </span>
            <blockquote
              className="p-8 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 4px 24px rgba(44,24,16,0.06)",
              }}
            >
              <p
                className="font-serif text-3xl mb-6 leading-none"
                style={{ color: "rgba(201,168,76,0.3)" }}
                aria-hidden="true"
              >
                "
              </p>
              <p className="text-brown-medium text-base md:text-lg leading-relaxed italic font-accent mb-6">
                {city.testimonial.quote}
              </p>
              <footer>
                <p className="font-serif font-bold text-brown-text">
                  {city.testimonial.name}
                </p>
                <p className="text-gold text-sm font-semibold">
                  {city.testimonial.location}
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 px-4"
        style={{ background: "rgba(255,255,255,0.5)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-brown-medium text-center mb-10 text-sm">
            About Vastu Consultation in {city.name}
          </p>
          <ul className="space-y-3">
            {city.faqs.map((faq, i) => (
              <li
                key={faq.q}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border:
                    openFaq === i
                      ? "1px solid rgba(201,168,76,0.45)"
                      : "1px solid rgba(201,168,76,0.2)",
                  boxShadow:
                    openFaq === i
                      ? "0 4px 16px rgba(201,168,76,0.12)"
                      : "0 2px 6px rgba(44,24,16,0.04)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2"
                  aria-expanded={openFaq === i}
                  aria-controls={`city-faq-${i}`}
                  data-ocid="city.toggle"
                >
                  <span className="font-serif font-bold text-brown-text text-sm md:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
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
                {openFaq === i && (
                  <div id={`city-faq-${i}`} className="px-6 pb-5">
                    <p
                      className="text-brown-medium text-sm leading-relaxed border-t pt-4"
                      style={{ borderColor: "rgba(201,168,76,0.15)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
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
            Book Your Vastu Consultation in {city.name}
          </h2>
          <p className="font-accent italic text-cream/70 text-base mb-8">
            Transform your home or business with expert Vastu guidance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="btn-gold-shimmer px-10 py-4 rounded-full font-bold text-base"
              data-ocid="city.primary_button"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 font-semibold text-sm transition-all duration-300"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
              data-ocid="city.secondary_button"
            >
              WhatsApp Charru Gupta
            </a>
          </div>
        </div>
      </section>

      {/* Related Cities */}
      {relatedCities.length > 0 && (
        <section
          className="py-16 px-4"
          style={{
            background: "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 100%)",
            borderTop: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-brown-text mb-8">
              Also Serving Nearby Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCities.map((related, idx) => (
                <Link
                  key={related.slug}
                  to="/vastu-consultant/$slug"
                  params={{ slug: related.slug }}
                  className="group p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  data-ocid={`city.item.${idx + 1}`}
                >
                  <p className="font-serif font-bold text-brown-text text-sm group-hover:text-gold-dark transition-colors mb-1">
                    {related.name}
                  </p>
                  <p className="text-xs text-brown-medium">{related.region}</p>
                  <p
                    className="text-xs font-semibold mt-2 group-hover:translate-x-1 transition-transform duration-200 inline-block"
                    style={{ color: "#C9A84C" }}
                  >
                    View Page →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
