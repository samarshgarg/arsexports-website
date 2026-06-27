"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Package } from "lucide-react";

const stats = [
  { icon: Package, value: "500+", label: "Unique Designs" },
  { icon: Globe, value: "30+", label: "Countries" },
  { icon: Star, value: "15+", label: "Years Legacy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle floating gold particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; r: number; vy: number; vx: number; a: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vy: -(Math.random() * 0.4 + 0.1),
        vx: (Math.random() - 0.5) * 0.2,
        a: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.a -= 0.0015;
        if (p.y < -5 || p.a <= 0) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
          p.a = Math.random();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.a * 0.55})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(196,149,42,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.07)_0%,transparent_55%)]" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,149,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,42,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative side ornament */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        <div className="w-px h-20 bg-gradient-to-b from-gold-500 to-transparent" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        <div className="w-px h-20 bg-gradient-to-b from-gold-500 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-gold-500/60" />
            <span className="text-gold-400/80 text-xs tracking-[0.35em] uppercase font-light">
              Moradabad · India&apos;s Brass Capital
            </span>
            <span className="h-px w-10 bg-gold-500/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            <span className="block text-dark-50">Crafting Brass.</span>
            <span className="block gold-text font-semibold">
              Exporting Excellence.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-dark-100/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light tracking-wide"
          >
            Premium handcrafted brass artifacts — home decor, sacred idols, and
            bespoke gift collections — designed in-house and shipped to{" "}
            <span className="text-gold-400">30+ countries worldwide.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/products"
              className="group flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-dark-800 font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 shadow-lg shadow-gold-900/40"
            >
              Explore Collection
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 border border-gold-500/50 text-gold-300 hover:border-gold-400 hover:text-gold-200 text-sm tracking-widest uppercase rounded transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gold-700/40 flex items-center justify-center bg-gold-900/20">
                  <Icon size={16} className="text-gold-500" />
                </div>
                <div className="text-left">
                  <div
                    className="text-xl font-semibold gold-text"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-[0.7rem] text-dark-100/50 tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-800 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.3em] text-gold-500/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
