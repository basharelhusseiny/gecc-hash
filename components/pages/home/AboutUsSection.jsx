"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Award,
    value: "17+",
    label: "Years of Experience",
    sub: "2009 – Present",
  },
  {
    icon: CalendarDays,
    value: "2009",
    label: "Year Established",
    sub: "Juba, South Sudan",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Projects Delivered",
    sub: "Across East Africa",
  },
  {
    icon: Globe,
    value: "5+",
    label: "Countries Reached",
    sub: "East Africa Region",
  },
];

const AboutUsSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  const decorRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Left column animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Vertical line draw
      tl.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, duration: 1.1, ease: "power2.inOut" },
        0,
      );

      // Corner accents
      tl.fromTo(
        decorRef.current?.querySelectorAll(".corner-accent"),
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.07 },
        0.1,
      );

      // Left content items
      const leftItems = leftRef.current?.querySelectorAll(".anim-item");
      if (leftItems?.length) {
        tl.fromTo(
          leftItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
          0.25,
        );
      }

      // Heading words
      const words = leftRef.current?.querySelectorAll(".abt-word");
      if (words?.length) {
        tl.fromTo(
          words,
          { opacity: 0, y: 36, rotateX: -30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.055,
            ease: "back.out(1.4)",
          },
          0.4,
        );
      }

      // Video frame
      tl.fromTo(
        videoRef.current,
        { opacity: 0, x: 40, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power2.out" },
        0.5,
      );

      // Stats strip
      const cards = statsRef.current?.querySelectorAll(".stat-card");
      if (cards?.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 28, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.09,
            ease: "back.out(1.3)",
          },
          0.85,
        );
      }
    },
    { scope: sectionRef },
  );

  const headingWords =
    "Building a Sustainable Future Through Engineering Excellence".split(" ");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-14 md:py-24"
    >
      {/* Blueprint dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top orange glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[260px] bg-gecc-orange/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[220px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      {/* Vertical accent line */}
      <div ref={lineRef} />

      {/* Corner blueprint accents */}
      <div ref={decorRef} className="pointer-events-none select-none">
        <div className="corner-accent absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/60" />
        <div className="corner-accent absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/60" />
        <div className="corner-accent absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/60" />
        <div className="corner-accent absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/60" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* ─── Main 2-col row ─── */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center mb-12">
          {/* ── Left: Badge + Heading + Desc + CTA ── */}
          <div ref={leftRef} className="flex flex-col gap-7">
            {/* Badge */}
            <div className="anim-item inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
              <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
              <span className="font-mono text-gecc-orange text-[10px] tracking-[0.3em] uppercase font-bold">
                About GECC
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]"
              style={{ perspective: "800px" }}
            >
              {headingWords.map((word, i) => (
                <span
                  key={i}
                  className="abt-word inline-block mr-[0.28em]"
                  style={{ display: "inline-block" }}
                >
                  {word === "Engineering" || word === "Excellence" ? (
                    <span className="text-gecc-orange">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="anim-item text-slate-600 text-[15px] md:text-base leading-[1.85] font-light">
              Founded in{" "}
              <span className="text-[#0a1628] font-semibold">2009</span>,{" "}
              <span className="text-gecc-orange font-semibold">
                Giant Equatorial Construction Company Ltd (GECC)
              </span>{" "}
              has become a trusted name in construction and infrastructure
              development across South Sudan and East Africa. We specialize in
              building construction, road construction, asphalting, and
              large-scale infrastructure projects, delivering quality,
              innovation, and long-term value in every project.
            </p>

            {/* Quote / CTA text */}
            <p className="anim-item text-slate-500 text-sm md:text-[15px] leading-[1.8] italic border-l-[3px] border-gecc-orange/50 pl-4 bg-orange-50 py-3 pr-3 ">
              We are committed to delivering durable, efficient, and sustainable
              construction solutions that support economic growth and community
              development.
            </p>

            {/* CTA Button */}
            <div className="anim-item flex items-center gap-5">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-gecc-orange hover:bg-[#c95a00] text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 relative overflow-hidden  shadow-md shadow-gecc-orange/20"
              >
                <span className="relative z-10">Learn More About Us</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                />
                <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
              </Link>
              <div className="hidden sm:flex items-center gap-2.5 text-slate-500 font-mono text-xs tracking-[0.25em] uppercase">
                <div className="w-8 h-px bg-slate-300" />
                EST. 2009
              </div>
            </div>
          </div>

          {/* ── Right: Video / Image in blueprint frame ── */}
          <div ref={videoRef} className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 bg-gecc-orange/[0.06] rounded-lg blur-xl pointer-events-none" />

            {/* Blueprint frame container */}
            <div className="relative border-2 border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/60">
              {/* Corner HUD marks */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-gecc-orange z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-gecc-orange z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-gecc-orange z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-gecc-orange z-20 pointer-events-none" />

              {/* HUD label top-left */}
              <div className="absolute top-3 left-8 z-20 bg-gecc-orange/90 px-2.5 pb-1 ">
                <span className="font-mono text-white text-[10px] tracking-[0.2em] uppercase font-bold">
                  GECC // Operations
                </span>
              </div>

              {/* HUD data bottom-right */}
              <div className="absolute bottom-3 right-3 z-20 flex flex-col items-end gap-1">
                <span className="font-mono text-white/70 text-xs tracking-widest bg-black/40 px-2 py-0.5 ">
                  EST. 2009 · SOUTH SUDAN
                </span>
              </div>

              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[340px] md:h-[420px] object-cover"
              >
                <source src="/factory-loop.mp4" type="video/mp4" />
                {/* Fallback image */}
                <img
                  src="/gallery-1.jpg"
                  alt="GECC construction operations"
                  className="w-full h-full object-cover"
                />
              </video>

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge on video */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 shadow-xl px-5 py-3 z-30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gecc-orange/10 border border-gecc-orange/30 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-gecc-orange" />
                </div>
                <div>
                  <div className="text-[#0a1628] font-bold font-mono text-lg leading-none">
                    17+
                  </div>
                  <div className="text-slate-500 text-[11px] font-mono uppercase tracking-wider mt-0.5">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Stats strip ─── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-200/80"
        >
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div
              key={i}
              className="stat-card relative group p-5 md:p-6 border border-slate-200 bg-slate-100 hover:bg-white hover:border-gecc-orange/40 hover:shadow-lg hover:shadow-gecc-orange/[0.08] transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gecc-orange/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l  border-gecc-orange group-hover:border-gecc-orange/60 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange group-hover:border-gecc-orange/60 transition-colors duration-300" />

              <div className="relative z-10 flex flex-col gap-2">
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center border border-gecc-orange/25 group-hover:border-gecc-orange/50 bg-gecc-orange/[0.06] transition-colors duration-300 mb-1">
                  <Icon size={15} className="text-gecc-orange" />
                </div>

                {/* Value */}
                <div className="text-2xl md:text-[1.9rem] font-bold text-[#0a1628] font-mono group-hover:text-gecc-orange transition-colors duration-300 leading-none">
                  {value}
                </div>

                {/* Label */}
                <div className="text-slate-700 text-[12px] md:text-[13px] font-semibold uppercase tracking-wide leading-tight">
                  {label}
                </div>

                {/* Sub */}
                <div className="text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-widest border-t border-slate-200 pt-2 mt-1">
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
