"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HardHat, Recycle, FileCheck2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: HardHat,
    title: "Safety First",
    desc: "We conduct comprehensive risk assessments, provide continuous safety training, and enforce strict safety protocols to maintain a secure working environment.",
  },
  {
    icon: Recycle,
    title: "Environmental Responsibility",
    desc: "Through waste reduction initiatives, energy-efficient practices, and sustainable construction methods, we work to minimize our environmental footprint.",
  },
  {
    icon: FileCheck2,
    title: "Regulatory Compliance",
    desc: "We adhere to local and international regulations, ensuring every project meets the highest standards of safety, quality, and compliance.",
  },
];

const commitments = [
  { label: "Proactive Safety Measures", value: 100 },
  { label: "Emergency Preparedness", value: 100 },
  { label: "Mechanical Engineering Standards", value: 100 },
  { label: "HSE Training & Development", value: 100 },
];

const HSESection = () => {
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
        ".hse-badge, .hse-heading, .hse-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      ).fromTo(
        ".hse-pillar",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.3",
      );

      // Progress bars animate width on scroll
      gsap.fromTo(
        ".hse-bar-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.3,
          ease: "power2.out",
          stagger: 0.12,
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".hse-bars",
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[220px] bg-gecc-orange/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12 max-w-2xl">
          <div className="hse-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Health, Safety & Environment
            </span>
          </div>
          <h2 className="hse-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Safety &{" "}
            <span className="text-gecc-orange">
              Environmental Responsibility
            </span>
          </h2>
          <p className="hse-desc text-slate-600 text-[15px] md:text-base leading-relaxed font-light">
            At GECC, safety and environmental responsibility are fundamental to
            our operations. We are committed to maintaining the highest Health,
            Safety, and Environmental standards across every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="hse-pillar relative border border-slate-200 bg-slate-50 p-6"
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gecc-orange" />
                <div className="w-10 h-10 border border-gecc-orange/30 bg-gecc-orange/[0.08] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-gecc-orange" />
                </div>
                <h4 className="text-[#0a1628] font-bold text-base mb-2">
                  {title}
                </h4>
                <p className="text-slate-500 text-[13px] leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Commitments bars */}
          <div className="hse-bars lg:col-span-5 border border-slate-200 bg-gecc-navy-dark p-7">
            <div className="text-white font-mono text-xs tracking-[0.25em] uppercase mb-6 pb-3 border-b border-white/10">
              HSE Commitments
            </div>
            <div className="flex flex-col gap-5">
              {commitments.map(({ label, value }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/75 text-[13px] font-mono uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-gecc-orange font-mono text-xs font-bold">
                      {value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                    <div
                      className="hse-bar-fill h-full bg-gecc-orange"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HSESection;
