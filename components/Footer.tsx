import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Home Decor", href: "/products?category=decor" },
  { label: "Religious Items", href: "/products?category=religious" },
  { label: "Gift Collections", href: "/products?category=gift" },
  { label: "Custom Orders", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-gold-800/25 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-3xl font-bold gold-text block"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                ARS
              </span>
              <span className="text-[0.6rem] tracking-[0.35em] text-gold-400/60 uppercase">
                Exports
              </span>
            </div>
            <p className="text-dark-100/45 text-sm leading-relaxed mb-6">
              Premium handcrafted brass artifacts from Moradabad, India&apos;s
              Brass Capital — exported to 30+ countries worldwide.
            </p>
            <a
              href="https://wa.me/919310070676?text=Hello%20ARS%20Exports"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-widest uppercase border border-gold-600/40 text-gold-400 hover:bg-gold-900/40 rounded transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-dark-50/70 text-xs tracking-[0.3em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-dark-100/45 hover:text-gold-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-dark-50/70 text-xs tracking-[0.3em] uppercase mb-5">
              Collections
            </h4>
            <ul className="space-y-3">
              {products.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-dark-100/45 hover:text-gold-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-50/70 text-xs tracking-[0.3em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919310070676"
                  className="flex items-start gap-3 text-dark-100/45 hover:text-gold-400 text-sm transition-colors"
                >
                  <Phone size={14} className="shrink-0 mt-0.5 text-gold-600/60" />
                  +91 9310070676
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arsexports.com"
                  className="flex items-start gap-3 text-dark-100/45 hover:text-gold-400 text-sm transition-colors"
                >
                  <Mail size={14} className="shrink-0 mt-0.5 text-gold-600/60" />
                  info@arsexports.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-100/45 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5 text-gold-600/60" />
                <div>
                  Moradabad, U.P. (Manufacturing)
                  <br />
                  Noida, U.P. (Export Office)
                  <br />
                  <span className="text-gold-500/40">India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gold-800/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-100/25 text-xs">
            © {new Date().getFullYear()} ARS Exports. All rights reserved.
          </p>
          <p className="text-dark-100/20 text-xs tracking-widest uppercase">
            Premium Brass · Made in India · Exported Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
