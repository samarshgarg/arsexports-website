"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const points = [
  "In-house design studio — exclusive patterns, not catalogue reorders",
  "Export-compliant packaging with foam-lined, labelled cartons",
  "MOQ-flexible — suitable for importers, boutiques & corporates",
  "Custom engraving, private-label & OEM manufacturing available",
  "Offices in Moradabad (manufacturing) & Noida (export coordination)",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-dark-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(196,149,42,0.07)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            {/* Large decorative text */}
            <div
              className="text-[10rem] md:text-[14rem] font-bold leading-none select-none pointer-events-none text-gold-900/20"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              aria-hidden
            >
              ARS
            </div>

            {/* Info cards overlaid */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-xs">
                {[
                  { value: "300+", label: "Year tradition" },
                  { value: "500+", label: "Unique designs" },
                  { value: "30+", label: "Export countries" },
                  { value: "10k+", label: "Happy clients" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="card-gold-border rounded-xl p-5 text-center"
                  >
                    <div
                      className="text-3xl font-semibold gold-text mb-1"
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {value}
                    </div>
                    <div className="text-[0.65rem] tracking-widest text-dark-100/50 uppercase">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold accent circle */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border border-gold-700/20 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border border-gold-600/30 opacity-50" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-5">
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-dark-50 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Born in{" "}
              <span className="gold-text font-semibold">Moradabad,</span>
              <br /> Built for the World
            </h2>
            <p className="text-dark-100/60 leading-relaxed mb-5 text-sm md:text-base">
              ARS Exports is rooted in Moradabad — a city that has defined
              India&apos;s brass identity for over 300 years. We combine that
              centuries-old artisan tradition with a modern design-first
              philosophy to create pieces that sell globally.
            </p>
            <p className="text-dark-100/60 leading-relaxed mb-8 text-sm md:text-base">
              Our buyers range from boutique importers in Europe to large retail
              chains in the Middle East and corporate gift companies across North
              America. What unites them? A demand for exclusivity — which is
              precisely what ARS delivers.
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-10">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-gold-500 mt-0.5 shrink-0"
                  />
                  <span className="text-dark-100/60 text-sm leading-relaxed">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 tracking-widest uppercase transition-colors group border-b border-gold-700/40 pb-0.5"
            >
              Learn More About Us
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
