"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceCapabilitiesSection = ({ service }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tags = sectionRef.current.querySelectorAll(".cap-tag");
      gsap.fromTo(
        tags,
        { opacity: 0, scale: 0.85, y: 10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      className="relative bg-[#0e2645] overflow-hidden py-14 md:py-20"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2.5 mb-6">
          <Layers size={16} className="text-gecc-orange" />
          <span className="font-mono text-white tracking-[0.25em] uppercase font-bold">
            What We Deliver
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {service.services.map((offering) => (
            <span
              key={offering}
              className="cap-tag font-mono text-sm bg-white/[0.04] border border-white/[0.1] hover:border-gecc-orange/50 text-white/80 px-4 py-2.5 transition-colors duration-300"
            >
              {offering}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilitiesSection;
