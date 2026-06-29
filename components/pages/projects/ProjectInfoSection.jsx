"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, Tag, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectGallery } from "./index.js";

gsap.registerPlugin(ScrollTrigger);

const ProjectInfoSection = ({ project }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".pi-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".pi-desc",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".pi-meta-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".pi-sidebar",
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const metaItems = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Tag, label: "Category", value: project.category },
    { icon: Building, label: "Client", value: project.client },
  ];

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
        {/* Left: description + gallery */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="pi-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
              <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
              <span className="font-mono text-gecc-orange text-sm tracking-[0.3em] uppercase font-bold">
                Project Overview
              </span>
            </div>
            <p className="pi-desc text-slate-600 md:text-lg leading-[1.9] font-light">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[#0a1628] tracking-[0.2em] uppercase font-bold mb-4 text-sm">
              Project Gallery
            </h3>
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        </div>

        {/* Right: sticky meta sidebar */}
        <div className="lg:col-span-4">
          <div className="pi-sidebar lg:sticky lg:top-32 border border-slate-200 bg-slate-50 p-6 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gecc-orange" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gecc-orange" />

            <span className="font-mono text-[#0a1628] tracking-[0.2em] uppercase font-bold text-sm block mb-5 pb-4 border-b border-slate-200">
              Project Details
            </span>

            <div className="flex flex-col gap-4">
              {metaItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="pi-meta-row flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 border border-gecc-orange/30 bg-gecc-orange/[0.08] flex items-center justify-center">
                    <Icon size={15} className="text-gecc-orange" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">
                      {label}
                    </span>
                    <span className="text-[#0a1628] text-sm font-semibold truncate">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="pi-meta-row group mt-6 inline-flex items-center justify-center gap-2.5 w-full bg-gecc-orange hover:bg-[#c95a00] text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-6 py-3.5 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Start a Similar Project</span>
              <ArrowRight
                size={14}
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              />
              <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfoSection;
