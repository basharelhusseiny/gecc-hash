"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const serviceLinks = [
  "Road Construction",
  "Manufacturing",
  "Real Estate",
  "Energy",
];

const companyLinks = ["About", "Projects", "Careers", "News"];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gecc-navy">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-white font-[Poppins] font-bold text-xl leading-none tracking-tight">
                GECC
              </span>
              <span className="text-white/60 font-mono text-[10px] tracking-[0.15em] uppercase">
                LIMITED
              </span>
            </div>
            <p className="text-white/60 text-sm leading-[1.7] mb-6">
              Building Tomorrow&apos;s Infrastructure
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gecc-orange hover:text-white transition-all duration-200"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-[Poppins] font-semibold text-base mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-[Poppins] font-semibold text-base mb-5">
              Company
            </h4>
            <ul className="space-y-3">
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
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-[Poppins] font-semibold text-base mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>Juba, South Sudan</li>
              <li>
                <a
                  href="tel:+211924750120"
                  className="hover:text-white transition-colors"
                >
                  +211 924 750 120
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gecclimited.com"
                  className="hover:text-white transition-colors"
                >
                  info@gecclimited.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 GECC Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 hover:bg-gecc-orange hover:text-white transition-all duration-200"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
