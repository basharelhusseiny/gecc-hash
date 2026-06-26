"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceProcessSection = ({ service }) => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const total = service.process.length;

  useGSAP(
    () => {
      if (!sectionRef.current || !pathRef.current) return;

      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Line draws progressively as the section scrolls through view
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      const steps = sectionRef.current.querySelectorAll(".proc-step");
      steps.forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-14 md:py-22"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Our Process
            </span>
          </div>
          <h2 className="text-[1.9rem] md:text-[2.3rem] font-bold text-[#0a1628] leading-[1.18]">
            How We <span className="text-gecc-orange">Get It Done</span>
          </h2>
        </div>

        <div className="relative">
          {/* Drawn connecting line — desktop only */}
          <svg
            className="absolute top-[26px] left-0 w-full h-[2px] hidden md:block"
            viewBox={`0 0 ${total * 100} 2`}
            preserveAspectRatio="none"
          >
            <line
              ref={pathRef}
              x1="0"
              y1="1"
              x2={total * 100}
              y2="1"
              stroke="#e67e22"
              strokeWidth="2"
            />
          </svg>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {service.process.map((step, i) => (
              <div
                key={step.title}
                className="proc-step relative flex flex-col gap-3"
              >
                <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-[#0e2645] border-2 border-gecc-orange flex items-center justify-center font-mono font-bold text-gecc-orange text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-[#0a1628] font-bold md:text-lg">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
