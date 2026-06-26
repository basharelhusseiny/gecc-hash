"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  "16+ Years of Industry Experience",
  "Proven Expertise in Infrastructure Development",
  "Commitment to Quality & Innovation",
  "Strong Health & Safety Standards",
  "Sustainable Construction Practices",
  "Trusted Across South Sudan & East Africa",
];

const WhyChooseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".why-badge, .why-heading, .why-stat",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      ).fromTo(
        ".why-item",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08 },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0e2645] overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-[450px] h-[300px] bg-[#0e2645]/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Stat panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="why-badge inline-flex items-center gap-2 border border-gecc-orange/30 bg-gecc-orange/[0.08] px-3.5 py-1.5 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Why Choose GECC
            </span>
          </div>
          <h2 className="why-heading text-[1.9rem] md:text-[2.3rem] font-bold text-white leading-[1.2]">
            A Partner You Can <span className="text-gecc-orange">Build On</span>
          </h2>

          <div className="why-stat relative border border-white/[0.08] bg-white/[0.03] p-7 w-fit">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gecc-orange" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gecc-orange" />
            <div className="font-mono text-5xl font-bold text-gecc-orange leading-none">
              16+
            </div>
            <div className="text-white/60 text-xs font-mono uppercase tracking-widest mt-2">
              Years of Industry Experience
            </div>
          </div>

          <Link
            href="/projects"
            className="why-stat group inline-flex items-center gap-3 w-fit bg-gecc-orange hover:bg-[#c95a00] text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-7 py-3.5 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">See Our Work</span>
            <ArrowRight
              size={15}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
            <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
          </Link>
        </div>

        {/* Checklist grid */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="why-item flex items-start gap-3 border border-white/[0.08] bg-[#070f1d]/30 p-5 hover:border-gecc-orange/40 transition-colors duration-300"
            >
              <CheckCircle2
                size={20}
                className="text-gecc-orange shrink-0 mt-0.5"
              />
              <span className="text-white/85 text-sm md:text-[15px] font-medium leading-snug">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
