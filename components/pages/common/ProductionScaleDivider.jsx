"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ProductionScaleDivider = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !imgRef.current) return;

      // Parallax: image moves slower than scroll (transform-based, not bg-attachment-fixed)
      gsap.fromTo(
        imgRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Text + accent line reveal
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
          ".prod-badge",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".prod-heading",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          ".prod-desc",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".prod-cta",
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
    >
      {/* Parallax Image Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src="/factory-floor.jpg"
          alt="GECC logistics network across East Africa"
          className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover"
        />
      </div>

      {/* Overlay gradient — navy blueprint tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/5 via-[#0a1628]/80 to-[#0a1628]/5" />
      <div className="absolute inset-0 bg-gecc-navy-dark/30" />

      {/* Blueprint dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Corner blueprint accents */}
      {/* <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/60 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/60 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/60 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/60 pointer-events-none" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center gap-4">
        <div className="prod-badge inline-flex items-center gap-2 border border-gecc-orange/40 bg-gecc-orange/[0.1] px-4 py-2">
          <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
          <span className="font-mono text-gecc-orange text-[10px] tracking-[0.3em] uppercase font-bold">
            Regional Logistics
          </span>
        </div>

        <div
          ref={lineRef}
          className="w-16 h-[2px] bg-gecc-orange origin-center"
          style={{ transformOrigin: "center" }}
        />

        <h2 className="prod-heading text-white text-[1.7rem] md:text-[2.3rem] lg:text-[2.6rem] font-bold leading-[1.2]">
          Scaling Production for{" "}
          <span className="text-gecc-orange">East Africa&apos;s Growth</span>
        </h2>

        <p className="prod-desc text-white/75 text-sm md:text-base leading-relaxed font-light max-w-[600px]">
          From Juba to Kampala, our logistics network delivers manufactured
          materials to construction sites across the region.
        </p>

        <Link
          href="/contact"
          className="prod-cta group mt-2 inline-flex items-center gap-3 bg-gecc-orange hover:bg-[#c95a00] text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 relative overflow-hidden shadow-md shadow-gecc-orange/20"
        >
          <span className="relative z-10">Contact Us</span>
          <ArrowRight
            size={15}
            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
          />
          <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
        </Link>
      </div>
    </section>
  );
};

export default ProductionScaleDivider;
