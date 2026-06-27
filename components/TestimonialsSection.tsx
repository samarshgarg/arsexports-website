"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Harrington",
    role: "Import Director, Artisanal Home USA",
    country: "🇺🇸 United States",
    text: "ARS Exports has been our go-to brass supplier for 6 years. The design quality and packaging standards are consistently exceptional — our retail customers always comment on how premium the pieces feel.",
  },
  {
    name: "Sophie Laurent",
    role: "Owner, Maison d'Orient",
    country: "🇫🇷 France",
    text: "What sets ARS apart is their in-house design team. Every season they bring us fresh, exclusive patterns. We've built an entire boutique collection around their pieces and it outsells everything else.",
  },
  {
    name: "Khalid Al-Mansouri",
    role: "Head of Procurement, Gulf Luxury Group",
    country: "🇦🇪 UAE",
    text: "For corporate gifting at scale, ARS is unmatched. Custom engravings, bulk orders, export documentation — they handle everything professionally. We've placed orders exceeding 5,000 units with zero issues.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-dark-700 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(196,149,42,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
            Client Words
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-dark-50"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Trusted by Buyers{" "}
            <span className="gold-text font-semibold">Worldwide</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ name, role, country, text }) => (
            <motion.div
              key={name}
              variants={item}
              className="card-gold-border rounded-2xl p-7 flex flex-col"
            >
              <Quote
                size={28}
                className="text-gold-600/50 mb-5 shrink-0"
              />
              <p className="text-dark-100/65 text-sm leading-relaxed flex-1 mb-6 italic">
                "{text}"
              </p>
              <div className="border-t border-gold-800/30 pt-5">
                <div className="font-medium text-dark-50 text-sm">{name}</div>
                <div className="text-dark-100/45 text-xs mt-0.5">{role}</div>
                <div className="text-gold-400/60 text-xs mt-1">{country}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-dark-100/30 text-xs tracking-widest uppercase mb-6">
            Compliant with international export standards
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-dark-100/25 text-xs tracking-widest uppercase">
            {["ISO 9001:2015", "MSME Certified", "Export Excellence", "Customs Compliant"].map(
              (b) => (
                <span
                  key={b}
                  className="px-4 py-2 border border-gold-800/20 rounded"
                >
                  {b}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
