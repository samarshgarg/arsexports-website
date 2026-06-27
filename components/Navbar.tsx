"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-800/95 backdrop-blur-md border-b border-gold-800/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl font-bold tracking-widest gold-text"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              ARS
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-gold-400/80 uppercase font-light">
              Exports
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  pathname === href
                    ? "text-gold-400"
                    : "text-dark-100/70 hover:text-gold-300"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919310070676"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-dark-100/60 hover:text-gold-400 transition-colors"
            >
              <Phone size={14} />
              <span className="tracking-wide">+91 93100 70676</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs tracking-widest uppercase font-medium border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-800 transition-all duration-300 rounded"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gold-400 p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark-800/98 backdrop-blur-md border-t border-gold-800/20 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === href
                  ? "text-gold-400"
                  : "text-dark-100/70 hover:text-gold-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center px-5 py-3 text-xs tracking-widest uppercase font-medium border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-800 transition-all rounded"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
