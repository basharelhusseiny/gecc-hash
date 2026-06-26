"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceOverviewSection = ({ service }) => {
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
        ".ov-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      ).fromTo(
        ".ov-desc",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power2.inOut" },
        "-=0.2",
      );

      const items = sectionRef.current.querySelectorAll(".ov-feature");
      gsap.fromTo(
        items,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".ov-features",
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
      <div className="absolute top-0 right-0 w-[450px] h-[260px] bg-gecc-orange/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="ov-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-sm tracking-[0.3em] uppercase font-bold">
              Overview
            </span>
          </div>

          <p className="ov-desc text-slate-600 md:text-lg leading-[1.9] font-light">
            {service.description}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="ov-features grid sm:grid-cols-1 gap-3 border border-slate-200 bg-slate-50 p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gecc-orange" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gecc-orange" />
            <span className="font-mono text-[#0a1628] tracking-[0.2em] uppercase font-bold mb-2">
              Key Features
            </span>
            {service.features.map((feature) => (
              <div
                key={feature}
                className="ov-feature flex items-start gap-2.5"
              >
                <CheckCircle2
                  size={16}
                  className="text-gecc-orange shrink-0 mt-0.5"
                />
                <span className="text-slate-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
