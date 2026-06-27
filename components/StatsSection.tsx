"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Briefcase, Globe, Sparkles, Users } from "lucide-react";

const stats = [
  { icon: Sparkles, end: 500, suffix: "+", label: "Exclusive Designs", sub: "In-house originals" },
  { icon: Globe, end: 30, suffix: "+", label: "Countries Served", sub: "Global export reach" },
  { icon: Briefcase, end: 15, suffix: "+", label: "Years of Legacy", sub: "Moradabad heritage" },
  { icon: Users, end: 10000, suffix: "+", label: "Happy Clients", sub: "Worldwide trust" },
];

function useCounter(end: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, end, duration]);
  return count;
}

function StatCard({ icon: Icon, end, suffix, label, sub, active }: (typeof stats)[0] & { active: boolean }) {
  const count = useCounter(end, active);
  const display = end >= 1000 ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}k` : count;

  return (
    <div className="text-center group">
      <div className="w-14 h-14 rounded-full bg-gold-900/30 border border-gold-700/30 flex items-center justify-center mx-auto mb-5 group-hover:border-gold-500/50 group-hover:bg-gold-800/30 transition-all duration-300">
        <Icon size={22} className="text-gold-500" />
      </div>
      <div
        className="text-5xl md:text-6xl font-light gold-text mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {display}{suffix}
      </div>
      <div className="text-dark-50/80 text-sm font-medium mb-1">{label}</div>
      <div className="text-dark-100/40 text-xs tracking-wide">{sub}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #16100c 0%, #1f1510 50%, #16100c 100%)",
      }}
    >
      {/* Gold mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top/bottom lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-500/70 mb-4">
            ARS By Numbers
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-dark-50"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Numbers That Speak{" "}
            <span className="gold-text font-semibold">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} active={inView} />
          ))}
        </div>

        {/* Countries list hint */}
        <div className="text-center mt-16">
          <p className="text-dark-100/35 text-xs tracking-widest uppercase">
            USA · UK · Germany · UAE · Australia · Canada · France · Singapore · and more
          </p>
        </div>
      </div>
    </section>
  );
}
