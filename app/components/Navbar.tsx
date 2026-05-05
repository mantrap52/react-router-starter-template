import { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg shadow-navy/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Anchor className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-lg tracking-tight">
                Dakshin Global
              </span>
              <span className="block text-white/50 text-[10px] uppercase tracking-widest hidden sm:block">
                India · Australia Cargo
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-gold hover:bg-gold-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white py-2 text-sm font-medium border-b border-white/10 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 bg-gold text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors hover:bg-gold-light"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
