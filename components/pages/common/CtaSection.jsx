"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const rotateGroupRef = useRef(null);
  const rotateGroup2Ref = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !svgRef.current) return;

      const mainLines = svgRef.current.querySelectorAll(".cta-line");
      const dots = svgRef.current.querySelectorAll(".cta-dot");
      const shapes = svgRef.current.querySelectorAll(".cta-shape");

      gsap.set(mainLines, { opacity: 0, strokeDashoffset: 700 });
      gsap.set(dots, { opacity: 0, scale: 0 });
      gsap.set(shapes, { opacity: 0, scale: 0.6, rotate: -25 });

      // Draw blueprint lines on scroll-in
      gsap.to(mainLines, {
        opacity: 0.5,
        strokeDashoffset: 0,
        duration: 2.2,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Pop in geometric shapes
      gsap.to(shapes, {
        opacity: 0.55,
        scale: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Pop in dots
      gsap.to(dots, {
        opacity: 0.85,
        scale: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Continuous slow rotation — compass/crosshair group (clockwise)
      gsap.to(rotateGroupRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // Counter-rotation — second ring group (anti-clockwise, different speed)
      gsap.to(rotateGroup2Ref.current, {
        rotation: -360,
        duration: 90,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      // Continuous slow drift on the whole svg (subtle parallax)
      gsap.to(svgRef.current, {
        xPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Lively pulsing dots loop
      gsap.to(dots, {
        opacity: 0.3,
        scale: 1.3,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.15, from: "random" },
        delay: 1,
      });

      // Shapes gentle breathing pulse
      gsap.to(shapes, {
        opacity: 0.3,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" },
        delay: 1.2,
      });

      // Text + line + CTA reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
      )
        .fromTo(
          ".cta-badge",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".cta-heading",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          ".cta-desc",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".cta-actions",
          { opacity: 0, y: 18, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] overflow-hidden flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #f39c12 0%, #e67e22 45%, #d35400 100%)",
      }}
    >
      {/* Animated Blueprint SVG layer */}
      <svg
        ref={svgRef}
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Grid lines */}
        <line
          x1="0"
          y1="125"
          x2="1200"
          y2="125"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="700"
          className="cta-line"
        />
        <line
          x1="0"
          y1="375"
          x2="1200"
          y2="375"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="700"
          className="cta-line"
        />
        <line
          x1="300"
          y1="0"
          x2="300"
          y2="500"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="700"
          className="cta-line"
        />
        <line
          x1="900"
          y1="0"
          x2="900"
          y2="500"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="700"
          className="cta-line"
        />
        <line
          x1="600"
          y1="0"
          x2="600"
          y2="500"
          stroke="white"
          strokeWidth="0.6"
          strokeDasharray="700"
          strokeDashoffset="700"
          className="cta-line"
          opacity="0.3"
        />

        {/* Diagonal construction lines */}
        <path
          d="M0 500 L250 250 L500 500"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="700"
          className="cta-line"
        />
        <path
          d="M700 0 L950 250 L1200 0"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="700"
          className="cta-line"
        />
        <path
          d="M0 0 L100 0 L100 100"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeDasharray="300"
          className="cta-line"
        />
        <path
          d="M1200 500 L1100 500 L1100 400"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeDasharray="300"
          className="cta-line"
        />

        {/* Corner frame brackets */}
        <path
          d="M40 60 L40 40 L60 40"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          className="cta-line"
        />
        <path
          d="M1140 60 L1160 60 L1160 40"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          className="cta-line"
        />
        <path
          d="M40 440 L40 460 L60 460"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          className="cta-line"
        />
        <path
          d="M1140 440 L1160 440 L1160 460"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="100"
          className="cta-line"
        />

        {/* ── Rotating compass / crosshair group (top-left) ── */}
        <g
          ref={rotateGroupRef}
          className="cta-shape"
          style={{ transformBox: "fill-box" }}
        >
          <circle
            cx="150"
            cy="110"
            r="55"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="150"
            cy="110"
            r="38"
            stroke="white"
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="4 6"
          />
          <line
            x1="150"
            y1="55"
            x2="150"
            y2="165"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="95"
            y1="110"
            x2="205"
            y2="110"
            stroke="white"
            strokeWidth="1"
          />
          <polygon points="150,90 158,112 150,134 142,112" fill="white" />
        </g>

        {/* ── Counter-rotating ring group (bottom-right) ── */}
        <g
          ref={rotateGroup2Ref}
          className="cta-shape"
          style={{ transformBox: "fill-box" }}
        >
          <circle
            cx="1040"
            cy="390"
            r="62"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="1040"
            cy="390"
            r="62"
            stroke="white"
            strokeWidth="0.6"
            fill="none"
            strokeDasharray="10 8"
          />
          <rect
            x="1010"
            y="360"
            width="60"
            height="60"
            stroke="white"
            strokeWidth="1"
            fill="none"
            transform="rotate(45 1040 390)"
          />
          <circle cx="1040" cy="390" r="5" fill="white" />
        </g>

        {/* Static decorative polygons */}
        <polygon
          points="650,80 685,140 615,140"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="cta-shape"
        />
        <rect
          x="60"
          y="320"
          width="46"
          height="46"
          stroke="white"
          strokeWidth="1"
          fill="none"
          transform="rotate(18 83 343)"
          className="cta-shape"
        />
        <polygon
          points="980,70 1010,95 980,120 950,95"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="cta-shape"
        />
        <circle
          cx="450"
          cy="420"
          r="20"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className="cta-shape"
        />
        <circle
          cx="450"
          cy="420"
          r="32"
          stroke="white"
          strokeWidth="0.6"
          fill="none"
          strokeDasharray="3 5"
          className="cta-shape"
        />

        {/* Reference dots */}
        <circle cx="300" cy="125" r="5" fill="white" className="cta-dot" />
        <circle cx="900" cy="125" r="5" fill="white" className="cta-dot" />
        <circle cx="300" cy="375" r="5" fill="white" className="cta-dot" />
        <circle cx="900" cy="375" r="5" fill="white" className="cta-dot" />
        <circle cx="600" cy="250" r="6" fill="white" className="cta-dot" />
        <circle cx="150" cy="250" r="4" fill="white" className="cta-dot" />
        <circle cx="1050" cy="250" r="4" fill="white" className="cta-dot" />
        <circle cx="450" cy="125" r="3.5" fill="white" className="cta-dot" />
        <circle cx="750" cy="375" r="3.5" fill="white" className="cta-dot" />
        <circle cx="220" cy="420" r="3.5" fill="white" className="cta-dot" />
        <circle cx="980" cy="160" r="3.5" fill="white" className="cta-dot" />
      </svg>

      {/* Soft dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20 pointer-events-none" />

      {/* Dot-grid texture (matches site system) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center flex flex-col items-center gap-4">
        <div className="cta-badge inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2">
          <span className="w-1.5 h-1.5 bg-white animate-pulse" />
          <span className="font-mono text-white text-sm tracking-[0.3em] uppercase font-bold">
            Let's Work Together
          </span>
        </div>

        <div
          ref={lineRef}
          className="w-16 h-[2px] bg-white origin-center"
          style={{ transformOrigin: "center" }}
        />

        <h2 className="cta-heading text-white text-[1.7rem] md:text-[2.3rem] lg:text-[2.6rem] font-bold leading-[1.2]">
          Ready to <span style={{ color: "#0e2645" }}>Build Something</span>{" "}
          Extraordinary?
        </h2>

        <p className="cta-desc text-white/85 text-sm md:text-lg leading-relaxed font-light max-w-[640px]">
          Whether it&apos;s a road that connects communities, a factory that
          creates jobs, or a building that stands for generations —{" "}
          <span className="font-semibold" style={{ color: "#0e2645" }}>
            let&apos;s engineer it together
          </span>
          .
        </p>

        <div className="cta-actions flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 relative overflow-hidden shadow-lg shadow-black/20 hover:scale-[1.02]"
            style={{ backgroundColor: "#0e2645" }}
          >
            <span className="relative z-10">Get a Free Consultation</span>
            <ArrowRight
              size={15}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
            <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
          </Link>

          <a
            href="tel:+211924750120"
            className="flex items-center gap-2.5 text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
          >
            <span
              className="w-9 h-9 border border-white/50 flex items-center justify-center transition-colors duration-300"
              style={{ borderColor: "rgba(14,38,69,0.5)" }}
            >
              <Phone size={14} />
            </span>
            +211 924 750 120
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
