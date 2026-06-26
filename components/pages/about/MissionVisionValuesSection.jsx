"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, ShieldCheck, Award, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We uphold the highest ethical standards, ensuring transparency, accountability, and professionalism in every project and partnership.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    desc: "We are committed to delivering durable, high-performance, and innovative construction solutions that exceed industry standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We embrace environmentally responsible construction practices, utilizing sustainable materials and efficient methodologies to reduce environmental impact.",
  },
];

const MissionVisionValuesSection = () => {
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
        ".mv-badge, .mv-heading",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      )
        .fromTo(
          ".mv-card",
          { opacity: 0, y: 36, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          ".val-card",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-gecc-navy-dark overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gecc-orange/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-blue-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-2xl mx-auto">
          <div className="mv-badge inline-flex items-center gap-2 border border-gecc-orange/30 bg-gecc-orange/[0.08] px-3.5 py-1.5">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Mission, Vision & Values
            </span>
          </div>
          <h2 className="mv-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-white leading-[1.18]">
            What <span className="text-gecc-orange">Drives Us Forward</span>
          </h2>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              icon: Target,
              label: "Our Mission",
              text: "To deliver high-quality, innovative, and sustainable construction solutions while prioritizing safety, efficiency, and client satisfaction. We strive to exceed expectations and contribute to long-term economic development through reliable infrastructure projects.",
            },
            {
              icon: Eye,
              label: "Our Vision",
              text: "To be the leading engineering and construction company in East Africa, recognized for excellence, innovation, and sustainable development that positively impacts communities and future generations.",
            },
          ].map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="mv-card relative border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-7 md:p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gecc-orange" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gecc-orange" />
              <div className="w-12 h-12 border border-gecc-orange/30 bg-gecc-orange/[0.08] flex items-center justify-center mb-5">
                <Icon size={22} className="text-gecc-orange" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl mb-3">
                {label}
              </h3>
              <p className="text-white/60 text-sm md:text-[15px] leading-relaxed font-light">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="val-card group relative border border-white/[0.08] bg-[#070f1d] p-6 hover:border-gecc-orange/40 transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gecc-orange/30 group-hover:border-gecc-orange/70 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange/30 group-hover:border-gecc-orange/70 transition-colors duration-300" />
              <Icon size={20} className="text-gecc-orange mb-3" />
              <h4 className="text-white font-bold text-base mb-2">{title}</h4>
              <p className="text-white/55 text-sm leading-relaxed font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValuesSection;
