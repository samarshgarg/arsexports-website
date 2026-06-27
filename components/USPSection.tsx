"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Award, Globe2, Palette } from "lucide-react";

const usps = [
  {
    icon: Palette,
    title: "Exclusive Designs",
    description:
      "Our in-house design studio creates original patterns you won't find anywhere else — each piece is a unique signature of ARS craftsmanship.",
  },
  {
    icon: Award,
    title: "Export Quality",
    description:
      "International-grade materials, precision finishing, and export-compliant packaging ensure every shipment arrives perfect.",
  },
  {
    icon: Globe2,
    title: "Moradabad Heritage",
    description:
      "300 years of brass-crafting tradition flows through our artisans. Every piece carries the legacy of India's Brass Capital.",
  },
  {
    icon: Gem,
    title: "Custom & OEM Orders",
    description:
      "Bespoke designs, branded collections, and white-label manufacturing for importers, retailers, and corporate buyers.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function USPSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-dark-800 overflow-hidden">
      {/* Subtle gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
            Why Choose ARS
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-dark-50"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Our{" "}
            <span className="gold-text font-semibold">Distinct Advantage</span>
          </h2>
        </div>

        {/* USP Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {usps.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="card-gold-border rounded-xl p-7 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-900/40 flex items-center justify-center mb-5 group-hover:bg-gold-800/50 transition-colors">
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3
                className="text-xl font-semibold text-dark-50 mb-3"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {title}
              </h3>
              <p className="text-dark-100/55 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
    </section>
  );
}
