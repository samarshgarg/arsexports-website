"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const card = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export default function FeaturedCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-dark-700 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,149,42,0.06)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
            Our Collections
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-dark-50 mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Crafted for Every{" "}
            <span className="gold-text font-semibold">Occasion</span>
          </h2>
          <p className="text-dark-100/50 max-w-xl mx-auto text-sm leading-relaxed">
            Three curated collections. Hundreds of exclusive designs. One
            standard of excellence that defines ARS Exports globally.
          </p>
        </div>

        {/* Category cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={card}>
              <Link
                href={`/products?category=${cat.id}`}
                className="group relative block rounded-2xl overflow-hidden aspect-[4/5] bg-dark-500"
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/92 via-dark-900/40 to-transparent" />

                {/* Gold corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-px bg-gold-400" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gold-400" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gold-400" />
                  <div className="absolute bottom-0 left-0 h-full w-px bg-gold-400" />
                </div>

                {/* Count badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-500/30">
                  <span className="text-gold-300 text-xs tracking-widest">
                    {cat.count} Designs
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-2xl font-semibold text-dark-50 mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-dark-100/55 text-sm leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-widest uppercase group-hover:gap-3 transition-all">
                    View Collection <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gold-400/80 hover:text-gold-300 tracking-widest uppercase transition-colors group"
          >
            View All Products
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
