"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const scrolled = useScrollAnimation(100);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gecc-navy backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#hero");
              }}
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src="/gecc-logo.png"
                alt="GECC Logo"
                className="h-10 w-auto"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-white/80 hover:text-gecc-orange text-[15px] font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gecc-orange after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+211924750120"
                className="hidden md:flex items-center gap-2 bg-gecc-orange text-white px-5 py-2.5 text-sm font-semibold hover:bg-gecc-orange-dark transition-all duration-200 hover:scale-[1.02] shadow-md shadow-gecc-orange/10 rounded-sm"
              >
                <Phone size={14} />
                Get in Touch
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 hover:text-gecc-orange transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gecc-navy/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-white text-2xl font-medium hover:text-gecc-orange transition-colors relative py-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gecc-orange after:transition-all after:duration-300 hover:after:w-1/2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+211924750120"
            className="flex items-center gap-2 bg-gecc-orange text-white px-6 py-3 text-lg font-semibold mt-4 hover:bg-gecc-orange-dark transition-all duration-200 hover:scale-[1.02] shadow-md shadow-gecc-orange/20 rounded-sm"
          >
            <Phone size={18} />
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
