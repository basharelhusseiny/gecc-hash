"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, CalendarDays, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CompanyOverviewSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

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
        ".ov-badge, .ov-heading, .ov-p",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      )
        .fromTo(
          ".ov-milestone",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.2",
        )
        .fromTo(
          imgRef.current,
          { opacity: 0, x: 40, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9 },
          "-=0.7",
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

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: text + milestones */}
        <div className="flex flex-col gap-6">
          <div className="ov-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              Company Overview
            </span>
          </div>

          <h2 className="ov-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Building a{" "}
            <span className="text-gecc-orange">Sustainable Future</span>
          </h2>

          <p className="ov-p text-slate-600 text-[15px] md:text-base leading-[1.85] font-light">
            Giant Equatorial Construction Company Ltd (GECC) was established in
            2009 to meet the growing demand for high-quality construction and
            infrastructure services in South Sudan and across East Africa. Over
            the years, we have expanded our expertise in building construction,
            road construction, asphalting, manufacturing, and infrastructure
            development.
          </p>

          <p className="ov-p text-slate-600 text-[15px] md:text-base leading-[1.85] font-light">
            Our commitment to excellence, innovation, and sustainability enables
            us to deliver projects that meet international standards while
            creating lasting value for our clients and communities.
          </p>

          {/* Milestones — compact "history" strip */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="ov-milestone relative border border-slate-200 bg-slate-50 p-5 overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gecc-orange" />
              <CalendarDays size={18} className="text-gecc-orange mb-2" />
              <div className="font-mono text-2xl font-bold text-[#0a1628]">
                2009
              </div>
              <div className="text-slate-500 text-xs font-mono uppercase tracking-wider mt-1">
                Founded in Juba
              </div>
            </div>
            <div className="ov-milestone relative border border-slate-200 bg-slate-50 p-5 overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gecc-orange" />
              <Building2 size={18} className="text-gecc-orange mb-2" />
              <div className="font-mono text-2xl font-bold text-[#0a1628]">
                Today
              </div>
              <div className="text-slate-500 text-xs font-mono uppercase tracking-wider mt-1">
                Regional Industry Leader
              </div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div ref={imgRef} className="relative lg:mt-6">
          <div className="absolute -inset-3 bg-gecc-orange/[0.06] rounded-lg blur-xl pointer-events-none" />
          <div className="relative border-2 border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/60">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-gecc-orange z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-gecc-orange z-20 pointer-events-none" />
            <div className="absolute top-3 left-8 z-20 bg-gecc-orange/90 px-2.5 pb-1">
              <span className="font-mono text-white text-[10px] tracking-[0.2em] uppercase font-bold">
                GECC // Since 2009
              </span>
            </div>
            <img
              src="/gallery-1.jpg"
              alt="GECC construction site"
              className="w-full h-[380px] md:h-[460px] object-cover"
            />
            <div className="absolute bottom-3 right-3 z-20 bg-black/50 px-2 py-1 flex items-center gap-1.5">
              <MapPin size={11} className="text-gecc-orange" />
              <span className="font-mono text-white/80 text-[10px] tracking-widest uppercase">
                Juba, South Sudan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
