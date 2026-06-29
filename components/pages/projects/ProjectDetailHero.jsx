"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { getIconComponent } from "@/constants";

const ProjectDetailHero = ({ project }) => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const Icon = getIconComponent(project.iconName);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        imgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.8, ease: "power3.out" },
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".pdh-breadcrumb",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          ".pdh-badge",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25",
        )
        // Title reveal: a single clip-path sweep instead of per-word stagger,
        // to keep this page visually distinct from PageHeader/ServiceHero.
        .fromTo(
          ".pdh-title",
          { clipPath: "inset(0 100% 0 0)", opacity: 1 },
          { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power3.inOut" },
          "-=0.15",
        )
        .fromTo(
          ".pdh-meta-row",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gecc-navy-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-gecc-navy-dark/15 via-gecc-navy-dark/65 to-gecc-navy-dark/15" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute top-24 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none hidden md:block" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none hidden md:block" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-5">
        <div className="pdh-breadcrumb flex items-center gap-2 font-mono text-sm text-white/65 uppercase tracking-widest">
          <Link href="/" className="hover:text-gecc-orange transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/projects"
            className="hover:text-gecc-orange transition-colors"
          >
            Projects
          </Link>
        </div>

        <div className="pdh-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.08] px-4 py-2">
          <Icon size={14} className="text-gecc-orange" />
          <span className="font-mono text-gecc-orange text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            Project {project.id} — {project.category}
          </span>
        </div>

        <h1 className="pdh-title text-[2rem] md:text-[2.9rem] lg:text-[3.3rem] font-bold text-white leading-[1.12]">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-gecc-orange font-mono text-sm md:text-base tracking-wide uppercase">
            {project.subtitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-6 mt-2 pt-6 border-t border-white/10 w-full max-w-lg">
          <div className="pdh-meta-row flex items-center gap-2 text-white/75 font-mono text-sm uppercase tracking-wide">
            <MapPin size={14} className="text-gecc-orange" />
            {project.location}
          </div>
          <div className="pdh-meta-row flex items-center gap-2 text-white/75 font-mono text-sm uppercase tracking-wide">
            <Calendar size={14} className="text-gecc-orange" />
            {project.year}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
