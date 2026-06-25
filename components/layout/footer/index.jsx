"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
  "Road Construction",
  "Manufacturing",
  "Real Estate",
  "Energy",
];

const companyLinks = ["About", "Projects", "Careers", "News"];

const projectLinks = [
  "G+4 Commercial & Res.",
  "G+5 Residential Bldg",
  "Townhouse Buildings",
  "Road Infrastructure",
  "UNMISS Cold Storage",
  "Renewable Energy",
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1f3d] border-t border-white/[0.08] relative overflow-hidden py-4">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0),
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 120px 120px, 120px 120px",
        }}
      />

      {/* Corner blueprint lines */}
      <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-gecc-orange pointer-events-none" />
      <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-gecc-orange pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-gecc-orange pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-gecc-orange pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col lg:border-r lg:border-white/[0.04] lg:pr-8">
            <div className="mb-6 relative border border-white/10 p-4 bg-black/10 rounded-sm self-start">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gecc-orange" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-gecc-orange" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-gecc-orange" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gecc-orange" />
              <img
                src="/gecc-logo.png"
                alt="GECC Logo"
                className="h-10 w-auto"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              />
            </div>
            <p className="text-white/70 text-xs md:text-[13px] font-mono leading-[1.8] mb-6 max-w-[260px] uppercase tracking-wide">
              Infrastructure • Road Development • Cold Storage • Energy
              Solutions.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: FaFacebookF, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaYoutube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/10 hover:border-gecc-orange bg-white/[0.02] hover:bg-gecc-orange/10 flex items-center justify-center text-white/50 hover:text-gecc-orange transition-all duration-300 rounded-sm hover:scale-[1.05]"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:border-r lg:border-white/[0.04] lg:pr-8">
            <h4 className="text-gecc-orange font-mono font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              Company
            </h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const id =
                        link === "About"
                          ? "#about"
                          : link === "Projects"
                            ? "#projects"
                            : "#hero";
                      document
                        .querySelector(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/60 hover:text-gecc-orange text-[13px] md:text-sm font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 group hover:translate-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-gecc-orange transition-colors rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div className="lg:border-r lg:border-white/[0.04] lg:pr-8">
            <h4 className="text-gecc-orange font-mono font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              Projects
            </h4>
            <ul className="space-y-3.5">
              {projectLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/60 hover:text-gecc-orange text-[13px] md:text-sm font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 group hover:translate-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-gecc-orange transition-colors rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:border-r lg:border-white/[0.04] lg:pr-8">
            <h4 className="text-gecc-orange font-mono font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              Services
            </h4>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-gecc-orange text-[13px] md:text-sm font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 group hover:translate-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-gecc-orange transition-colors rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gecc-orange font-mono font-bold text-xs md:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              Contact
            </h4>
            <ul className="space-y-4 text-white/60 text-[13px] md:text-sm font-mono uppercase tracking-wider">
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-gecc-orange shrink-0 mt-0.5"
                />
                <span className="normal-case text-white/60">
                  Juba, South Sudan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gecc-orange shrink-0" />
                <a
                  href="tel:+211924750120"
                  className="hover:text-white transition-colors"
                >
                  +211 924 750 120
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gecc-orange shrink-0" />
                <a
                  href="mailto:info@gecclimited.com"
                  className="hover:text-white transition-colors lowercase"
                >
                  info@gecclimited.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08] relative z-10 bg-black/20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-mono tracking-wider uppercase">
            © 2026 GECC Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/40 text-xs font-mono tracking-wider uppercase hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-xs font-mono tracking-wider uppercase hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-white/10 hover:border-gecc-orange bg-white/[0.02] hover:bg-gecc-orange/10 flex items-center justify-center text-white/40 hover:text-gecc-orange transition-all duration-300 rounded-sm cursor-pointer relative hover:scale-[1.05]"
              aria-label="Scroll to top"
            >
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20" />
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
