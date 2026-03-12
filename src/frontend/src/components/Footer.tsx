import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const anchorLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

const servicePageLinks = [
  { slug: "residential-vastu", label: "Residential Vastu" },
  { slug: "commercial-vastu", label: "Commercial Vastu" },
  { slug: "industrial-vastu", label: "Industrial Vastu" },
];

const courseScrolls = ["Foundation Vastu Course", "Advanced Vastu Course"];

const cityLinks = [
  { label: "Noida", slug: "noida" },
  { label: "Delhi", slug: "delhi" },
  { label: "Gurgaon", slug: "gurgaon" },
  { label: "Greater Noida", slug: "greater-noida" },
  { label: "Ghaziabad", slug: "ghaziabad" },
  { label: "Faridabad", slug: "faridabad" },
  { label: "Dwarka", slug: "dwarka" },
  { label: "Rohini", slug: "rohini" },
  { label: "Lucknow", slug: "lucknow" },
  { label: "Kanpur", slug: "kanpur" },
  { label: "Varanasi", slug: "varanasi" },
  { label: "Noida Extension", slug: "noida-extension" },
];

const socialLinks = [
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/charrugupta_official",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCwwCrDePJusBqQlX7bnGCAQ",
  },
  {
    Icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/charru.gupta.94/",
  },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919871718653" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const isOnHomePage = location.pathname === "/";

  const handleAnchorClick = (href: string) => {
    if (isOnHomePage) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/" });
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* Pre-footer CTA Band */}
      <div
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #3D2B1F 0%, #5C3A28 50%, #3D2B1F 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="text-4xl mb-3 leading-none"
            aria-hidden="true"
            style={{ color: "#C9A84C" }}
          >
            ॐ
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-3">
            Book Your Vastu Consultation in Delhi NCR
          </h2>
          <p className="font-accent italic text-cream/70 text-xl mb-8">
            Serving Noida, Delhi, Gurgaon, Ghaziabad, Greater Noida, Faridabad
            &amp; all of UP.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-gold-shimmer px-10 py-4 rounded-full text-base font-bold shadow-lg"
              data-ocid="footer.primary_button"
            >
              Book Your Consultation
            </button>
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 font-semibold text-sm"
              data-ocid="footer.secondary_button"
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <footer style={{ background: "#1A0A05" }} aria-label="Site footer">
        {/* Gold top border */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)",
          }}
          aria-hidden="true"
        />

        {/* As Featured In strip */}
        <div
          className="border-b"
          style={{ borderColor: "rgba(201,168,76,0.1)" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <p
              className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              As Seen In &amp; Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {["ABP News", "Midday", "Outlook", "News Nation"].map((pub) => (
                <span key={pub} className="press-badge">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
          {/* Top section — 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-12">
            {/* Brand column — spans 2 on mobile */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span
                  className="text-gold text-3xl font-serif"
                  aria-hidden="true"
                >
                  ॐ
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-serif text-cream font-bold text-lg">
                    SimplyVastu
                  </span>
                  <span className="font-serif text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                    Shastra
                  </span>
                </div>
              </Link>
              <p className="text-brown-light text-sm leading-relaxed mb-5">
                Transforming Homes, Transforming Lives
              </p>
              <p className="font-accent italic text-brown-light/80 text-sm">
                "Ancient wisdom for modern living"
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {anchorLinks.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => handleAnchorClick(href)}
                      className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-gold/40 text-xs" aria-hidden="true">
                        ›
                      </span>
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/blogs"
                    className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40 text-xs" aria-hidden="true">
                      ›
                    </span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vastu-experience-centre"
                    className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40 text-xs" aria-hidden="true">
                      ›
                    </span>
                    Vastu Experience Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/areas-we-serve"
                    className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-gold/40 text-xs" aria-hidden="true">
                      ›
                    </span>
                    Areas We Serve
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Services">
              <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2.5">
                {servicePageLinks.map(({ slug, label }) => (
                  <li key={slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug }}
                      className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-gold/40 text-xs" aria-hidden="true">
                        ›
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
                {courseScrolls.map((course) => (
                  <li key={course}>
                    <button
                      type="button"
                      onClick={() => handleAnchorClick("#courses")}
                      className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-gold/40 text-xs" aria-hidden="true">
                        ›
                      </span>
                      {course}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Service Areas */}
            <nav aria-label="Service areas">
              <h3 className="font-serif text-cream font-bold mb-3 text-sm uppercase tracking-wider">
                Service Areas
              </h3>
              <p className="text-gold/60 text-xs mb-4 leading-relaxed">
                Residential, Commercial &amp; Industrial Vastu
              </p>
              <ul className="space-y-2">
                {cityLinks.map(({ label, slug }) => (
                  <li key={slug}>
                    <Link
                      to="/vastu-consultant/$slug"
                      params={{ slug }}
                      className="text-brown-light hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="text-gold/40 text-xs" aria-hidden="true">
                        ›
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect */}
            <div>
              <h3 className="font-serif text-cream font-bold mb-5 text-sm uppercase tracking-wider">
                Connect With Us
              </h3>
              <div className="flex gap-3 mb-6" aria-label="Social media links">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-text transition-all duration-300"
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-brown-light text-sm">
                  📧 info@charrugupta.com
                </p>
                <p className="text-brown-light text-sm">
                  📍 India (Online &amp; In-Person)
                </p>
                <p className="text-brown-light text-sm">📱 +91 98717 18653</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-6"
            style={{ background: "rgba(201,168,76,0.15)" }}
            aria-hidden="true"
          />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brown-light">
            <p>
              © {currentYear} SimplyVastuShastra. All rights reserved. Made with{" "}
              <span className="text-gold" aria-label="love">
                ❤️
              </span>{" "}
              for Vastu Lovers
            </p>
            <p>
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
