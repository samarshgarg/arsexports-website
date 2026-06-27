"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Clock } from "lucide-react";

const interests = [
  "Home Decor",
  "Religious Items",
  "Gift Collections",
  "Custom / OEM",
  "Corporate Gifting",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at support@arsexports.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-20 bg-dark-800 min-h-screen">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(196,149,42,0.09)_0%,transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-5">
              Let&apos;s Connect
            </p>
            <h1
              className="text-5xl md:text-6xl font-light text-dark-50 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Start Your{" "}
              <span className="gold-text font-semibold">
                Brass Journey
              </span>
            </h1>
            <p className="text-dark-100/55 text-sm leading-relaxed">
              Whether you need a catalogue, a custom quote, or design advice —
              our team responds within 24 hours on business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Contact info — left */}
            <div className="lg:col-span-2 space-y-6">
              {/* Direct contacts */}
              <div className="card-gold-border rounded-2xl p-7">
                <h3
                  className="text-xl font-semibold text-dark-50 mb-6"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href="https://wa.me/919310070676?text=Hello%20ARS%20Exports%2C%20I%27m%20interested%20in%20your%20brass%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-900/30 border border-green-700/30 flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-dark-50/70 text-xs tracking-widest uppercase mb-1">
                        WhatsApp / Phone
                      </div>
                      <div className="text-dark-50 text-sm group-hover:text-gold-300 transition-colors">
                        +91 9310070676
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919310070676"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-900/30 border border-gold-700/30 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="text-dark-50/70 text-xs tracking-widest uppercase mb-1">
                        Call Us
                      </div>
                      <div className="text-dark-50 text-sm group-hover:text-gold-300 transition-colors">
                        +91 9310070676
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:support@arsexports.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-900/30 border border-gold-700/30 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="text-dark-50/70 text-xs tracking-widest uppercase mb-1">
                        Email
                      </div>
                      <div className="text-dark-50 text-sm group-hover:text-gold-300 transition-colors">
                        support@arsexports.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="card-gold-border rounded-2xl p-7">
                <h3
                  className="text-xl font-semibold text-dark-50 mb-6"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      city: "Moradabad, U.P.",
                      role: "Manufacturing Office",
                      detail: "India's Brass Capital — design studio, production & quality control.",
                    },
                    {
                      city: "Noida, U.P.",
                      role: "Export Office",
                      detail: "International client services, shipping & documentation.",
                    },
                  ].map(({ city, role, detail }) => (
                    <div key={city} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-900/30 border border-gold-700/30 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-dark-50/70 text-xs tracking-widest uppercase mb-1">
                          {role}
                        </div>
                        <div className="text-dark-50 text-sm font-medium mb-0.5">{city}</div>
                        <div className="text-dark-100/45 text-xs">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gold-900/20 border border-gold-800/30">
                <Clock size={16} className="text-gold-500 shrink-0" />
                <p className="text-dark-100/55 text-xs leading-relaxed">
                  We respond to all enquiries within{" "}
                  <span className="text-gold-400">24 hours</span> on business
                  days (Mon–Sat, 10 AM–7 PM IST).
                </p>
              </div>
            </div>

            {/* Form — right */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-gold-border rounded-2xl p-14 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle size={52} className="text-gold-400 mb-6" />
                  <h3
                    className="text-3xl font-light text-dark-50 mb-4"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-dark-100/50 text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out to ARS Exports. Our team will
                    get back to you within 24 hours with our catalogue or a
                    custom quote.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card-gold-border rounded-2xl p-8 space-y-6"
                >

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Business name"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@domain.com"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 000 000 0000"
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Your country"
                        className="form-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                        Product Interest
                      </label>
                      <select name="interest" className="form-field">
                        <option value="">Select category</option>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-dark-600 text-dark-50">
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                      Approximate Quantity / Order Size
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 100 units, 500 pieces mixed"
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your requirements, design ideas, target market, or any specific questions..."
                      className="form-field resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400/80 text-xs text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-dark-800 font-semibold text-sm tracking-widest uppercase rounded transition-all shadow-lg shadow-gold-900/30"
                  >
                    {loading && (
                      <span className="w-4 h-4 border-2 border-dark-800 border-t-transparent rounded-full animate-spin" />
                    )}
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                  <p className="text-center text-dark-100/25 text-xs">
                    Your information is kept confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
