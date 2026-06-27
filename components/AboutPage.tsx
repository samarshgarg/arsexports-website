"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gem, Globe2, Award, Users, Palette } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Palette,
    title: "Design-First Philosophy",
    desc: "We invest in our own design studio so every piece in our catalogue is an original. We never reproduce mass-market patterns.",
  },
  {
    icon: Gem,
    title: "Quality Uncompromised",
    desc: "Every product is inspected against strict finish, weight, and dimension standards before it leaves Moradabad.",
  },
  {
    icon: Globe2,
    title: "Global Export Expertise",
    desc: "From documentation to freight, we handle international exports seamlessly — making your job easier.",
  },
  {
    icon: Award,
    title: "Heritage Craftsmanship",
    desc: "Our artisans carry skills passed down through generations, combining traditional techniques with modern finishing.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    desc: "80% of our clients reorder. We build relationships, not transactions — offering seasonal updates and exclusivity.",
  },
];

const team = [
  { role: "Design Studio", desc: "10-person in-house team creating original collections each season" },
  { role: "Quality Control", desc: "Dedicated QC department with 3-stage inspection before dispatch" },
  { role: "Export Operations", desc: "Noida office handling shipping, documentation and client liaison" },
  { role: "Artisan Network", desc: "150+ skilled craftspeople across Moradabad workshops" },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-dark-800">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(196,149,42,0.1)_0%,transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-700/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-5">
              Our Story
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-dark-50 mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Born in Moradabad,{" "}
              <span className="gold-text font-semibold">
                Built for the World
              </span>
            </h1>
            <p className="text-dark-100/60 text-lg leading-relaxed">
              ARS Exports brings India&apos;s 300-year brass heritage to the
              global stage — with a modern design sensibility and an
              uncompromising commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 border-t border-gold-800/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl md:text-4xl font-light text-dark-50 mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                The <span className="gold-text font-semibold">ARS</span> Story
              </h2>
              <div className="space-y-4 text-dark-100/60 text-sm leading-relaxed">
                <p>
                  Moradabad has been India&apos;s undisputed brass capital for over
                  three centuries. The city&apos;s artisans carry a lineage of skill
                  that no machine can replicate — an intimate understanding of
                  how metal behaves under the hammer, the chisel, and the eye
                  of the craftsperson.
                </p>
                <p>
                  ARS Exports was founded with a single conviction: that this
                  extraordinary craft deserved a global audience, and that
                  getting there required more than skill — it required design.
                </p>
                <p>
                  We built an in-house design studio, trained a quality-control
                  team, and established an export operations office in Noida to
                  serve international buyers with the professionalism they
                  expect. Today, our pieces ship to boutiques in Paris,
                  hospitality chains in Dubai, corporate gifting companies
                  across North America, and home-decor importers in Southeast
                  Asia.
                </p>
                <p>
                  Every piece that leaves our workshop carries the weight of
                  tradition and the clarity of modern design. That is the ARS
                  promise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "300+", label: "Year Tradition" },
                { value: "500+", label: "Unique Designs" },
                { value: "30+", label: "Countries" },
                { value: "10k+", label: "Happy Clients" },
                { value: "150+", label: "Skilled Artisans" },
                { value: "2", label: "Office Locations" },
              ].map(({ value, label }) => (
                <div key={label} className="card-gold-border rounded-xl p-5 text-center">
                  <div
                    className="text-3xl font-semibold gold-text mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {value}
                  </div>
                  <div className="text-[0.65rem] text-dark-100/45 tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-700 border-y border-gold-800/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-dark-50"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our Core <span className="gold-text font-semibold">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-gold-border rounded-xl p-7">
                <div className="w-11 h-11 rounded-lg bg-gold-900/40 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <h3
                  className="text-xl font-semibold text-dark-50 mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-dark-100/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
              How We&apos;re Built
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-dark-50"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Our <span className="gold-text font-semibold">Structure</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map(({ role, desc }) => (
              <div key={role} className="flex gap-4">
                <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-dark-50 font-medium text-sm mb-1">{role}</div>
                  <div className="text-dark-100/50 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-dark-700 border-t border-gold-800/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
              Where We Are
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-dark-50"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Two Cities.{" "}
              <span className="gold-text font-semibold">One Mission.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                city: "Moradabad, U.P.",
                role: "Manufacturing Hub",
                desc: "India's Brass Capital — where our artisans, design studio, and quality control are based. The heart of ARS production.",
              },
              {
                city: "Noida, U.P.",
                role: "Export Office",
                desc: "Our commercial nerve centre, handling international client relations, export documentation, logistics coordination, and sales.",
              },
            ].map(({ city, role, desc }) => (
              <div key={city} className="card-gold-border rounded-2xl p-8">
                <div className="text-gold-500/60 text-xs tracking-widest uppercase mb-2">{role}</div>
                <h3
                  className="text-2xl font-semibold text-dark-50 mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {city}
                </h3>
                <p className="text-dark-100/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2
            className="text-3xl md:text-4xl font-light text-dark-50 mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ready to Source{" "}
            <span className="gold-text font-semibold">Premium Brass?</span>
          </h2>
          <p className="text-dark-100/50 text-sm mb-8">
            Request our catalogue or start a conversation about your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-dark-800 font-semibold text-sm tracking-widest uppercase rounded transition-all"
            >
              Request a Catalogue
            </Link>
            <Link
              href="/products"
              className="px-7 py-3.5 border border-gold-500/50 text-gold-300 hover:border-gold-400 text-sm tracking-widest uppercase rounded transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
