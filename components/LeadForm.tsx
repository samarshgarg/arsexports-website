"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const interests = [
  "Home Decor",
  "Religious Items",
  "Gift Collections",
  "Custom / OEM",
  "Corporate Gifting",
  "Mixed / All Categories",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
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
      setError("Something went wrong. Please email us directly at info@arsexports.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="lead-form"
      className="relative py-28 bg-dark-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(196,149,42,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-5">
              Work With Us
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-dark-50 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Request Our{" "}
              <span className="gold-text font-semibold">
                Exclusive Catalogue
              </span>
            </h2>
            <p className="text-dark-100/55 leading-relaxed mb-8 text-sm md:text-base">
              Share your requirements and receive our full product catalogue with
              pricing, MOQs, and custom design options — tailored for
              importers, boutiques, and corporate buyers.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Quick Response",
                  desc: "We reply within 24 hours on business days.",
                },
                {
                  title: "No Obligation",
                  desc: "Get the catalogue and explore before committing.",
                },
                {
                  title: "Custom Quotes",
                  desc: "Pricing based on volume, design and destination.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 rounded-full bg-gold-600/50 self-stretch shrink-0" />
                  <div>
                    <div className="text-dark-50 text-sm font-medium mb-0.5">
                      {title}
                    </div>
                    <div className="text-dark-100/45 text-sm">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-10 pt-8 border-t border-gold-800/30">
              <p className="text-dark-100/40 text-xs tracking-widest uppercase mb-3">
                Prefer direct contact?
              </p>
              <a
                href="https://wa.me/919310070676?text=Hello%20ARS%20Exports%2C%20I%27m%20interested%20in%20your%20brass%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp: +91 9310070676
              </a>
              <br />
              <a
                href="mailto:info@arsexports.com"
                className="inline-flex items-center gap-2 text-gold-400/70 hover:text-gold-300 text-sm transition-colors mt-2"
              >
                info@arsexports.com
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div className="card-gold-border rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-gold-400 mx-auto mb-5" />
                <h3
                  className="text-2xl font-semibold text-dark-50 mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                  }}
                >
                  Request Received!
                </h3>
                <p className="text-dark-100/55 text-sm leading-relaxed">
                  Thank you for reaching out. Our team will send you the
                  catalogue and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-gold-border rounded-2xl p-8 space-y-5"
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
                      placeholder="John Smith"
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
                      placeholder="Your Company Ltd."
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
                      placeholder="you@company.com"
                      className="form-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="United States"
                      className="form-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                    Product Interest *
                  </label>
                  <select name="interest" required className="form-field">
                    <option value="" disabled selected>
                      Select a category
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-dark-600 text-dark-50">
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-dark-100/50 tracking-widest uppercase mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements — quantities, design preferences, budget range..."
                    className="form-field resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400/80 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-dark-800 font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 shadow-lg shadow-gold-900/30"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-dark-800 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {loading ? "Sending..." : "Send Request"}
                </button>

                <p className="text-center text-dark-100/30 text-xs">
                  By submitting you agree to our privacy policy. We never share
                  your data.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
