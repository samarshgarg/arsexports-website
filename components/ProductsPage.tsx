"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { products, categories, type Category } from "@/lib/products";
import { ArrowRight, Filter } from "lucide-react";

const tagColours: Record<string, string> = {
  "Best Seller": "bg-gold-500/20 text-gold-300 border-gold-600/40",
  New: "bg-emerald-900/30 text-emerald-400 border-emerald-700/30",
  Exclusive: "bg-purple-900/30 text-purple-400 border-purple-700/30",
  Premium: "bg-sky-900/30 text-sky-400 border-sky-700/30",
};

const allCategories = [
  { id: "all", label: "All Products" },
  ...categories.map((c) => ({ id: c.id, label: c.label })),
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const card = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ProductsPage() {
  const params = useSearchParams();
  const defaultCat = (params.get("category") as Category) || "all";
  const [active, setActive] = useState<Category | "all">(defaultCat);

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-20 bg-dark-800 min-h-screen">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,149,42,0.09)_0%,transparent_65%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-5">
              Our Collections
            </p>
            <h1
              className="text-5xl md:text-6xl font-light text-dark-50 mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Exclusive{" "}
              <span className="gold-text font-semibold">Brass Designs</span>
            </h1>
            <p className="text-dark-100/55 max-w-xl mx-auto text-sm leading-relaxed">
              500+ original designs crafted in Moradabad. Each piece is an
              exclusive creation — not a catalogue reorder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[72px] z-30 bg-dark-800/90 backdrop-blur-md border-y border-gold-800/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            <Filter size={14} className="text-gold-500/50 shrink-0 mr-2" />
            {allCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id as Category | "all")}
                className={`shrink-0 px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                  active === id
                    ? "bg-gold-500 text-dark-800 font-semibold"
                    : "border border-gold-700/30 text-dark-100/50 hover:border-gold-500/50 hover:text-gold-300"
                }`}
              >
                {label}
                {id !== "all" && (
                  <span className="ml-2 opacity-60">
                    ({products.filter((p) => p.category === id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={card} layout>
                  <div className="group relative rounded-2xl overflow-hidden bg-dark-600 card-gold-border h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-dark-500">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/30 transition-all duration-500" />

                      {/* Tag */}
                      {product.tag && (
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[0.6rem] tracking-widest uppercase border ${tagColours[product.tag]}`}
                          >
                            {product.tag}
                          </span>
                        </div>
                      )}

                      {/* Enquire overlay button */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}`}
                          className="flex items-center justify-center gap-2 w-full py-2.5 bg-gold-500 text-dark-800 text-xs font-semibold tracking-widest uppercase rounded"
                        >
                          Enquire Now <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="text-[0.6rem] text-gold-500/60 tracking-widest uppercase mb-2">
                        {categories.find((c) => c.id === product.category)?.label}
                      </div>
                      <h3
                        className="text-lg font-semibold text-dark-50 mb-2 leading-snug"
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                        }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-dark-100/45 text-xs leading-relaxed flex-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA banner */}
          <div className="mt-20 card-gold-border rounded-2xl p-10 text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
              Don&apos;t see what you need?
            </p>
            <h3
              className="text-3xl font-light text-dark-50 mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              We Create{" "}
              <span className="gold-text font-semibold">Custom Designs</span>
            </h3>
            <p className="text-dark-100/50 text-sm mb-8 max-w-lg mx-auto">
              Share a reference, sketch, or concept — our design team will
              create an exclusive piece tailored to your market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-dark-800 font-semibold text-sm tracking-widest uppercase rounded transition-all"
            >
              Request Custom Design <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
