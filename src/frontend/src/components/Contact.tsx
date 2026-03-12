import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaSpinner,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "sonner";
import SectionHeader from "./SectionHeader";

// Formspree endpoint — replace XXXXXXXX with your actual Formspree form ID
// Sign up free at https://formspree.io and create a form pointed at charrugupta10@gmail.com
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdalppy";

const services = [
  "Residential Vastu",
  "Commercial & Office Vastu",
  "Industrial Vastu",
  "Foundation Vastu Course",
  "Advanced Vastu Course",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email";
  }
  if (!form.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (form.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Enter at least 10 digits";
  }
  if (!form.serviceInterest) errors.serviceInterest = "Please select a service";
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          serviceInterest: form.serviceInterest,
          message: form.message,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setForm(initialForm);
      toast.success("Message sent! We'll contact you soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #3D2B1F 0%, #2C1810 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          transform: "translate(-40%, -40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          transform: "translate(40%, 40%)",
        }}
        aria-hidden="true"
      />

      {/* Thin gold top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Get In Touch"
          headline="Book Vastu Consultation in Delhi NCR"
          lead="Serving Noida, Delhi, Gurgaon, Ghaziabad, Greater Noida & all of UP."
          subtitle="Take the first step towards a harmonious, prosperous home or office."
          isInView={isInView}
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-cream rounded-2xl overflow-hidden relative">
              {/* Premium gold header bar above form */}
              <div
                className="px-8 py-4 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, #2C1810 0%, #4A2D1A 50%, #2C1810 100%)",
                  borderBottom: "2px solid transparent",
                  backgroundClip: "padding-box",
                  position: "relative",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #C9A84C 30%, #F0D080 50%, #C9A84C 70%, transparent)",
                  }}
                  aria-hidden="true"
                />
                <div className="flex items-center gap-2">
                  <span
                    style={{ color: "#C9A84C", fontSize: "1.1rem" }}
                    aria-hidden="true"
                  >
                    ॐ
                  </span>
                  <span
                    className="font-serif font-bold text-sm"
                    style={{ color: "#F0D080" }}
                  >
                    Book Your Consultation
                  </span>
                </div>
                {/* Social proof: 5 stars + count */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((k) => (
                      <span
                        key={k}
                        style={{ color: "#F4B400", fontSize: "0.7rem" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "rgba(255,248,231,0.7)" }}
                  >
                    Join 1000+ happy clients
                  </span>
                </div>
              </div>

              <div className="p-8 relative overflow-hidden">
                {/* Decorative mandala watermark */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none select-none opacity-5"
                  style={{ color: "#C9A84C" }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    {[0, 45, 90, 135].map((a) => (
                      <line
                        key={a}
                        x1="50"
                        y1="5"
                        x2="50"
                        y2="95"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        transform={`rotate(${a} 50 50)`}
                      />
                    ))}
                  </svg>
                </div>
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="text-6xl mb-4 leading-none"
                      aria-hidden="true"
                    >
                      ॐ
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-brown-text mb-2">
                      Thank you! Your consultation request has been received.
                    </h3>
                    <p className="text-brown-medium mb-6">
                      Charru Gupta will personally review your message and get
                      back to you at your email address.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Consultation booking form"
                  >
                    <h3 className="font-serif text-xl font-bold text-brown-text mb-6">
                      Send Us a Message
                    </h3>

                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="field-name"
                          className="block text-sm font-semibold text-brown-medium mb-1.5"
                        >
                          Full Name{" "}
                          <span aria-hidden="true" className="text-gold">
                            *
                          </span>
                        </label>
                        <input
                          id="field-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          autoComplete="name"
                          aria-required="true"
                          aria-describedby={
                            errors.name ? "error-name" : undefined
                          }
                          aria-invalid={!!errors.name}
                          className={`w-full px-4 py-3 rounded-xl border text-brown-text text-sm bg-white placeholder:text-brown-light/60 outline-none transition-all focus:ring-2 focus:ring-gold/40 ${
                            errors.name
                              ? "border-red-400"
                              : "border-gold/30 focus:border-gold"
                          }`}
                        />
                        {errors.name && (
                          <p
                            id="error-name"
                            className="text-red-500 text-xs mt-1"
                            role="alert"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="field-email"
                          className="block text-sm font-semibold text-brown-medium mb-1.5"
                        >
                          Email{" "}
                          <span aria-hidden="true" className="text-gold">
                            *
                          </span>
                        </label>
                        <input
                          id="field-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          autoComplete="email"
                          aria-required="true"
                          aria-describedby={
                            errors.email ? "error-email" : undefined
                          }
                          aria-invalid={!!errors.email}
                          className={`w-full px-4 py-3 rounded-xl border text-brown-text text-sm bg-white placeholder:text-brown-light/60 outline-none transition-all focus:ring-2 focus:ring-gold/40 ${
                            errors.email
                              ? "border-red-400"
                              : "border-gold/30 focus:border-gold"
                          }`}
                        />
                        {errors.email && (
                          <p
                            id="error-email"
                            className="text-red-500 text-xs mt-1"
                            role="alert"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="field-phone"
                          className="block text-sm font-semibold text-brown-medium mb-1.5"
                        >
                          Phone{" "}
                          <span aria-hidden="true" className="text-gold">
                            *
                          </span>
                        </label>
                        <input
                          id="field-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98717 18653"
                          required
                          autoComplete="tel"
                          aria-required="true"
                          aria-describedby={
                            errors.phone ? "error-phone" : undefined
                          }
                          aria-invalid={!!errors.phone}
                          className={`w-full px-4 py-3 rounded-xl border text-brown-text text-sm bg-white placeholder:text-brown-light/60 outline-none transition-all focus:ring-2 focus:ring-gold/40 ${
                            errors.phone
                              ? "border-red-400"
                              : "border-gold/30 focus:border-gold"
                          }`}
                        />
                        {errors.phone && (
                          <p
                            id="error-phone"
                            className="text-red-500 text-xs mt-1"
                            role="alert"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label
                          htmlFor="field-serviceInterest"
                          className="block text-sm font-semibold text-brown-medium mb-1.5"
                        >
                          Service Interest{" "}
                          <span aria-hidden="true" className="text-gold">
                            *
                          </span>
                        </label>
                        <select
                          id="field-serviceInterest"
                          name="serviceInterest"
                          value={form.serviceInterest}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby={
                            errors.serviceInterest ? "error-service" : undefined
                          }
                          aria-invalid={!!errors.serviceInterest}
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white outline-none transition-all focus:ring-2 focus:ring-gold/40 ${
                            form.serviceInterest
                              ? "text-brown-text"
                              : "text-brown-light/60"
                          } ${errors.serviceInterest ? "border-red-400" : "border-gold/30 focus:border-gold"}`}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        {errors.serviceInterest && (
                          <p
                            id="error-service"
                            className="text-red-500 text-xs mt-1"
                            role="alert"
                          >
                            {errors.serviceInterest}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="field-message"
                          className="block text-sm font-semibold text-brown-medium mb-1.5"
                        >
                          Message{" "}
                          <span aria-hidden="true" className="text-gold">
                            *
                          </span>
                        </label>
                        <textarea
                          id="field-message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your space and what you'd like to improve..."
                          rows={4}
                          required
                          aria-required="true"
                          aria-describedby={
                            errors.message ? "error-message" : undefined
                          }
                          aria-invalid={!!errors.message}
                          className={`w-full px-4 py-3 rounded-xl border text-brown-text text-sm bg-white placeholder:text-brown-light/60 outline-none transition-all focus:ring-2 focus:ring-gold/40 resize-none ${
                            errors.message
                              ? "border-red-400"
                              : "border-gold/30 focus:border-gold"
                          }`}
                        />
                        {errors.message && (
                          <p
                            id="error-message"
                            className="text-red-500 text-xs mt-1"
                            role="alert"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-gold-magnetic w-full py-4 rounded-xl text-sm font-bold shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[52px]"
                        aria-label={
                          submitting ? "Sending message..." : "Send message"
                        }
                      >
                        {submitting && (
                          <FaSpinner
                            className="animate-spin"
                            aria-hidden="true"
                          />
                        )}
                        {submitting
                          ? "Sending..."
                          : "Send My Consultation Request →"}
                      </button>

                      {/* Urgency note */}
                      <p
                        className="text-center text-xs mt-2 animate-urgency"
                        style={{ color: "rgba(184,134,11,0.8)" }}
                      >
                        ⚡ Limited consultation slots available this month
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl font-bold text-cream mb-6">
              Get in Touch
            </h3>

            {/* Prominent WhatsApp CTA */}
            <a
              href="https://wa.me/919871718653"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-3 w-full py-4 rounded-xl text-base font-bold mb-8"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} aria-hidden="true" />
              WhatsApp Now — +91 98717 18653
            </a>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <FaPhone className="text-gold" size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <p className="text-cream font-semibold text-sm">
                    +91 98717 18653
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <FaEnvelope
                    className="text-gold"
                    size={16}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <p className="text-cream font-semibold text-sm">
                    info@charrugupta.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <FaMapMarkerAlt
                    className="text-gold"
                    size={16}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wide mb-0.5">
                    Serving
                  </p>
                  <p className="text-cream font-semibold text-sm">
                    Noida · Delhi · Gurgaon · Ghaziabad · Faridabad · Greater
                    Noida · All of UP
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mb-8">
              <p className="text-cream/60 text-xs uppercase tracking-widest mb-4">
                Follow Us
              </p>
              <div className="flex gap-3" aria-label="Social media links">
                {[
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
                  {
                    Icon: FaWhatsapp,
                    label: "WhatsApp",
                    href: "https://wa.me/919871718653",
                  },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-text transition-all duration-300"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold/40 pl-5">
              <p className="font-accent text-lg italic text-cream/80 leading-relaxed">
                "Vastu is not superstition — it is the science of harmonious
                living."
              </p>
              <footer className="mt-2 text-gold text-sm font-semibold">
                — Charru Gupta
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
