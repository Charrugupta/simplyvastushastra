import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SERVICE_LINKS = [
  { slug: "residential-vastu", label: "Residential Vastu" },
  { slug: "commercial-vastu", label: "Commercial Vastu" },
  { slug: "industrial-vastu", label: "Industrial Vastu" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on pathname change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-[0_2px_24px_rgba(44,24,16,0.14)]" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(255,248,231,0.97)"
          : "rgba(255,248,231,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="SimplyVastuShastra Home"
          data-ocid="nav.link"
        >
          <span
            className="text-3xl text-gold font-serif leading-none select-none"
            aria-hidden="true"
          >
            ॐ
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-brown-text font-bold text-base md:text-lg tracking-wide">
              SimplyVastu
            </span>
            <span className="font-serif text-gold text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
              Shastra
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Home */}
          <li>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/about"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Services Dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1 font-medium text-sm transition-colors duration-200 relative group ${
                isServiceActive
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              data-ocid="nav.dropdown_menu"
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-200 ${
                  isServiceActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              onMouseLeave={() => setServicesOpen(false)}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl overflow-hidden transition-all duration-200 origin-top ${
                servicesOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
              style={{
                background: "rgba(255,248,231,0.98)",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow:
                  "0 8px 32px rgba(44,24,16,0.12), 0 2px 8px rgba(201,168,76,0.1)",
                backdropFilter: "blur(12px)",
              }}
              role="menu"
            >
              {/* All services link at top */}
              <Link
                to="/services"
                onClick={() => setServicesOpen(false)}
                className="w-full text-left flex items-center gap-3 px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 transition-colors duration-200 text-xs font-bold uppercase tracking-wider border-b"
                style={{ borderColor: "rgba(201,168,76,0.15)" }}
                role="menuitem"
                data-ocid="nav.link"
              >
                <span className="text-gold/50" aria-hidden="true">
                  ☰
                </span>
                All Services Overview
              </Link>
              {SERVICE_LINKS.map(({ slug, label }) => (
                <Link
                  key={slug}
                  to={
                    `/services/${slug}` as
                      | "/services/residential-vastu"
                      | "/services/commercial-vastu"
                      | "/services/industrial-vastu"
                  }
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === `/services/${slug}`
                      ? "text-gold bg-gold/5"
                      : "text-brown-medium hover:text-gold hover:bg-gold/5"
                  }`}
                  role="menuitem"
                  data-ocid="nav.link"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#C9A84C" }}
                    aria-hidden="true"
                  />
                  {label}
                </Link>
              ))}
            </div>
          </li>

          {/* Courses */}
          <li>
            <Link
              to="/courses"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/courses"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Blog */}
          <li>
            <Link
              to="/blogs"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname.startsWith("/blogs")
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Experience Centre */}
          <li>
            <Link
              to="/vastu-experience-centre"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/vastu-experience-centre"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Experience Centre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                location.pathname === "/contact"
                  ? "text-gold"
                  : "text-brown-medium hover:text-gold"
              }`}
              data-ocid="nav.link"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-gold-magnetic px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_2px_12px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_20px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            data-ocid="nav.primary_button"
          >
            Book Consultation
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-brown-text hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cream/98 border-t border-gold/20 px-4 py-4">
          <ul className="flex flex-col gap-1">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                About
              </Link>
            </li>

            {/* Services with submenu */}
            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isServiceActive
                    ? "text-gold bg-gold/5"
                    : "text-brown-medium hover:text-gold hover:bg-gold/5"
                }`}
                aria-expanded={mobileServicesOpen}
                data-ocid="nav.dropdown_menu"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileServicesOpen ? "max-h-64" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-1 py-1">
                  <li>
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-sm text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg transition-colors duration-200"
                      data-ocid="nav.link"
                    >
                      All Services
                    </Link>
                  </li>
                  {SERVICE_LINKS.map(({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        to={
                          `/services/${slug}` as
                            | "/services/residential-vastu"
                            | "/services/commercial-vastu"
                            | "/services/industrial-vastu"
                        }
                        className="block px-4 py-2.5 text-sm text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg transition-colors duration-200"
                        data-ocid="nav.link"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Courses */}
            <li>
              <Link
                to="/courses"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Courses
              </Link>
            </li>

            {/* Blog */}
            <li>
              <Link
                to="/blogs"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Blog
              </Link>
            </li>

            {/* Experience Centre */}
            <li>
              <Link
                to="/vastu-experience-centre"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Experience Centre
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                className="w-full text-left block px-4 py-3 text-brown-medium hover:text-gold hover:bg-gold/5 rounded-lg font-medium transition-colors duration-200"
                data-ocid="nav.link"
              >
                Contact
              </Link>
            </li>

            {/* Book CTA */}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block w-full text-center px-4 py-3 rounded-full font-bold text-brown-text transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                }}
                data-ocid="nav.primary_button"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
