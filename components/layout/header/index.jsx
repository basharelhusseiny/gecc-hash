"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
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
            ? "bg-gecc-navy/85 backdrop-blur-md py-3 shadow-lg border-b border-white/[0.06]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src="/gecc-logo.png"
                alt="GECC Logo"
                className="h-9 md:h-11 w-auto"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gecc-orange text-sm font-mono uppercase tracking-[0.2em] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gecc-orange after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+211924750120"
                className="hidden md:flex items-center gap-2 border border-gecc-orange/30 hover:border-gecc-orange bg-gecc-orange/10 hover:bg-gecc-orange text-gecc-orange hover:text-white px-5 py-2 text-sm font-mono uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-md shadow-gecc-orange/10 cursor-pointer"
              >
                <Phone size={12} />
                Get in Touch
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 hover:text-gecc-orange transition-colors duration-200 z-50 relative"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backmask */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full sm:max-w-md bg-gecc-navy/95 backdrop-blur-xl border-l border-white/[0.08] shadow-2xl transition-transform duration-500 ease-out transform lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Blueprint Corner Accents in Drawer */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gecc-orange pointer-events-none" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gecc-orange pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-gecc-orange pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gecc-orange pointer-events-none" />

        <div className="flex flex-col h-full px-8 py-20 justify-between">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-4">
              <span className="font-mono text-gecc-orange text-xl tracking-[0.25em] uppercase font-bold">
                Menu
              </span>
            </div>

            {/* Navigation List */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.04] text-white/70 hover:text-gecc-orange transition-colors duration-200 cursor-pointer"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="text-[10px] text-white/30 font-bold"></span>
                    • {link.label}
                  </span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gecc-orange"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Contact */}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]">
            <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
              Establishment // 2009
            </span>
            <a
              href="tel:+211924750120"
              className="flex items-center justify-center gap-2 border border-gecc-orange bg-gecc-orange text-white py-3 text-sm font-mono uppercase tracking-widest hover:bg-gecc-orange-dark transition-all duration-200 shadow-lg shadow-gecc-orange/20"
            >
              <Phone size={14} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
