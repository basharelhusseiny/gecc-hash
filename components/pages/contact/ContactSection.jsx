// components/pages/contact/ContactSection.jsx
"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+211 924 750 120", "+254 738 969 443"],
    hrefs: ["tel:+211924750120", "tel:+254738969443"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@gecclimited.com"],
    hrefs: ["mailto:info@gecclimited.com"],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: ["Juba, South Sudan"],
    hrefs: [null],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon - Sat: 8:00 AM - 6:00 PM"],
    hrefs: [null],
  },
];

const socialLinks = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaYoutube, href: "#", label: "Youtube" },
];

const initialForm = { name: "", email: "", phone: "", message: "" };

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".ct-badge, .ct-heading, .ct-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      )
        .fromTo(
          ".ct-info-card",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
          "-=0.3",
        )
        .fromTo(
          ".ct-social",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2",
        )
        .fromTo(
          ".ct-form",
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.7 },
          "-=0.6",
        );
    },
    { scope: sectionRef },
  );

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("submitting");
    // Wire this up to your API route / email service of choice.
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 md:py-24"
    >
      {/* Blueprint dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-[450px] h-[260px] bg-gecc-orange/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[220px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-14 max-w-2xl">
          <div className="ct-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Get In Touch
            </span>
          </div>
          <h2 className="ct-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Let&apos;s{" "}
            <span className="text-gecc-orange">Build Something Together</span>
          </h2>
          <p className="ct-sub text-slate-600 text-[15px] md:text-base leading-relaxed font-light">
            Have a project in mind or a question about our services? Reach out —
            our team usually responds within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, lines, hrefs }) => (
              <div
                key={label}
                className="ct-info-card group relative border border-slate-200 bg-slate-50 hover:border-gecc-orange/40 hover:bg-white hover:shadow-lg hover:shadow-gecc-orange/[0.06] transition-all duration-300 p-5 flex items-start gap-4"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gecc-orange group-hover:border-gecc-orange/70 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange group-hover:border-gecc-orange/70 transition-colors duration-300" />

                <div className="w-11 h-11 shrink-0 border border-gecc-orange/30 bg-gecc-orange/[0.08] flex items-center justify-center">
                  <Icon size={18} className="text-gecc-orange" />
                </div>

                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-mono text-gecc-orange md:text-lg tracking-[0.2em] uppercase font-bold mb-1">
                    {label}
                  </span>
                  {lines.map((line, i) =>
                    hrefs[i] ? (
                      <a
                        key={line}
                        href={hrefs[i]}
                        className="text-[#0a1628] text-sm md:text-[15px] font-medium hover:text-gecc-orange transition-colors duration-200 truncate"
                      >
                        {line}
                      </a>
                    ) : (
                      <span
                        key={line}
                        className="text-[#0a1628] text-sm md:text-[15px] font-medium truncate"
                      >
                        {line}
                      </span>
                    ),
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="ct-social flex items-center gap-4 mt-2 pt-5 border-t border-slate-200">
              <span className="font-mono text-slate-500 uppercase tracking-widest">
                Follow Us
              </span>
              <div className="flex gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-slate-200 hover:border-gecc-orange bg-white hover:bg-gecc-orange/10 flex items-center justify-center text-slate-500 hover:text-gecc-orange transition-all duration-300 hover:scale-105"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="ct-form lg:col-span-7">
            <div className="relative border border-slate-200 bg-slate-50 p-6 md:p-9">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gecc-orange" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gecc-orange" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gecc-orange" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gecc-orange" />

              <div className="flex items-center justify-between mb-7 pb-4 border-b border-slate-200">
                <span className="font-mono text-[#0a1628] md:text-lg font-bold uppercase tracking-[0.2em]">
                  Send a Message
                </span>
                <span className="font-mono text-slate-500 text-[10px] uppercase tracking-widest hidden sm:block">
                  GECC // CONTACT_FORM
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-sm text-slate-600 uppercase tracking-widest"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white border border-slate-300 focus:border-gecc-orange outline-none px-4 py-3 text-sm text-[#0a1628] placeholder:text-slate-400 transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-mono text-sm text-slate-600 uppercase tracking-widest"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+211 9XX XXX XXX"
                      className="bg-white border border-slate-300 focus:border-gecc-orange outline-none px-4 py-3 text-sm text-[#0a1628] placeholder:text-slate-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-sm text-slate-600 uppercase tracking-widest"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-white border border-slate-300 focus:border-gecc-orange outline-none px-4 py-3 text-sm text-[#0a1628] placeholder:text-slate-400 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-sm text-slate-600 uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="bg-white border border-slate-300 focus:border-gecc-orange outline-none px-4 py-3 text-sm text-[#0a1628] placeholder:text-slate-400 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-2 inline-flex items-center justify-center gap-3 bg-gecc-orange hover:bg-[#c95a00] disabled:opacity-70 text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 relative overflow-hidden shadow-md shadow-gecc-orange/20 w-full sm:w-fit"
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    {status === "sent" ? (
                      <>
                        Message Sent <CheckCircle2 size={16} />
                      </>
                    ) : status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                        />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
