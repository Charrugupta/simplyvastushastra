import { Link, useParams } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { CITY_PAGES } from "../data/cityPages";
import { SERVICE_PAGES } from "../data/servicePages";

function injectServiceJsonLd(service: (typeof SERVICE_PAGES)[0]) {
  const existing = document.getElementById("service-jsonld");
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = "service-jsonld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url: `https://simplyvastushastra.com/services/${service.slug}`,
      provider: {
        "@type": "ProfessionalService",
        name: "SimplyVastuShastra",
        url: "https://simplyvastushastra.com",
        telephone: "+91-9871718653",
        email: "info@charrugupta.com",
      },
      areaServed: [
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "State", name: "Delhi NCR" },
        { "@type": "State", name: "Uttar Pradesh" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
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

const FEATURED_CITIES = [
  "noida",
  "delhi",
  "gurgaon",
  "greater-noida",
  "dwarka",
  "lucknow",
];

export default function ServicePage() {
  const params = useParams({ strict: false }) as { slug?: string };
  const slug = params.slug;
  const service = useMemo(
    () => SERVICE_PAGES.find((s) => s.slug === slug) ?? null,
    [slug],
  );

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!service) return;

    const prevTitle = document.title;
    document.title = service.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) metaDesc.setAttribute("content", service.metaDescription);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalEl?.getAttribute("href") ?? "";
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute(
      "href",
      `https://simplyvastushastra.com/services/${service.slug}`,
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const prevOgTitle = ogTitle?.getAttribute("content") ?? "";
    const prevOgDesc = ogDesc?.getAttribute("content") ?? "";
    const prevOgUrl = ogUrl?.getAttribute("content") ?? "";

    if (ogTitle) ogTitle.setAttribute("content", service.metaTitle);
    if (ogDesc) ogDesc.setAttribute("content", service.metaDescription);
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://simplyvastushastra.com/services/${service.slug}`,
      );

    injectServiceJsonLd(service);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
      if (canonicalEl) canonicalEl.setAttribute("href", prevCanonical);
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc);
      if (ogUrl) ogUrl.setAttribute("content", prevOgUrl);
      const script = document.getElementById("service-jsonld");
      if (script) script.remove();
    };
  }, [service]);

  const featuredCities = useMemo(
    () => CITY_PAGES.filter((c) => FEATURED_CITIES.includes(c.slug)),
    [],
  );

  if (!service) {
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
          Service Not Found
        </h1>
        <p className="text-brown-medium mb-8 text-center max-w-md">
          The service page you're looking for doesn't exist or may have been
          moved.
        </p>
        <a
          href="/#services"
          className="btn-gold px-8 py-3 rounded-full font-semibold text-sm"
          data-ocid="service.link"
        >
          ← View All Services
        </a>
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
                <a
                  href="/#services"
                  className="hover:text-gold transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="text-gold/40" aria-hidden="true">
                ›
              </li>
              <li className="text-brown-text font-medium">{service.title}</li>
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
              Our Services
            </span>

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-brown-text mb-4 leading-tight">
              {service.h1}
            </h1>

            <p className="text-brown-medium text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
              {service.metaDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 btn-gold-shimmer px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
                data-ocid="service.primary_button"
              >
                Book This Consultation
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
                data-ocid="service.secondary_button"
              >
                WhatsApp Enquiry
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
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-5">
              About This Service
            </h2>
            <p className="text-brown-medium text-base leading-relaxed max-w-3xl">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Key Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(201,168,76,0.12)" }}
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
                        d="M2 6l3 3 5-5"
                        stroke="#C9A84C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-brown-medium text-sm leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 60%, #EDE0C4 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-text mb-10 text-center">
              How It Works
            </h2>
            <div className="relative">
              {/* Connecting line */}
              <div
                className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5"
                style={{ background: "rgba(201,168,76,0.2)" }}
                aria-hidden="true"
              />
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={step.step} className="flex gap-6 items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #C9A84C 0%, #D4AF37 100%)",
                        color: "#2C1810",
                        boxShadow: "0 4px 12px rgba(201,168,76,0.3)",
                      }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="flex-1 p-5 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        boxShadow: "0 2px 12px rgba(44,24,16,0.04)",
                      }}
                    >
                      <h3 className="font-serif font-bold text-brown-text mb-2">
                        {step.step}
                      </h3>
                      <p className="text-brown-medium text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            About {service.title}
          </p>
          <ul className="space-y-3">
            {service.faqs.map((faq, i) => (
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
                  aria-controls={`service-faq-${i}`}
                  data-ocid="service.toggle"
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
                  <div id={`service-faq-${i}`} className="px-6 pb-5">
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
            Ready for Your {service.title}?
          </h2>
          <p className="font-accent italic text-cream/70 text-base mb-8">
            Book a personalised consultation with Charru Gupta today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="btn-gold-shimmer px-10 py-4 rounded-full font-bold text-base"
              data-ocid="service.primary_button"
            >
              Book Consultation
            </a>
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 font-semibold text-sm transition-all duration-300"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" }}
              data-ocid="service.secondary_button"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Also Serving Cities */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 100%)",
          borderTop: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-brown-text mb-2">
            Also Serving These Cities
          </h2>
          <p className="text-brown-medium text-sm mb-8">
            {service.title} available across Delhi NCR and Uttar Pradesh
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredCities.map((city, idx) => (
              <Link
                key={city.slug}
                to="/vastu-consultant/$slug"
                params={{ slug: city.slug }}
                className="group p-4 rounded-xl transition-all duration-300 flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
                data-ocid={`service.item.${idx + 1}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-serif font-bold text-brown-text text-sm group-hover:text-gold-dark transition-colors">
                    {city.name}
                  </p>
                  <p className="text-xs text-brown-medium">{city.region}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
