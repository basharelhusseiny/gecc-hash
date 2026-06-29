"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Calendar, Images } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/constants/projectsData";
import { getIconComponent } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, featured = false }) => {
  const cardRef = useRef(null);
  const Icon = getIconComponent(project.iconName);

  const handleEnter = (e) => {
    const svg = e.currentTarget.querySelector(".card-frame");
    if (!svg) return;
    gsap.to(svg.querySelectorAll("path"), {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.05,
    });
  };

  const handleLeave = (e) => {
    const svg = e.currentTarget.querySelector(".card-frame");
    if (!svg) return;
    gsap.to(svg.querySelectorAll("path"), {
      strokeDashoffset: 60,
      duration: 0.35,
      ease: "power2.in",
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/projects/${project.slug}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`project-card group relative flex flex-col overflow-hidden bg-white border border-slate-200 hover:border-gecc-orange/40 hover:shadow-xl hover:shadow-gecc-orange/[0.1] transition-[border-color,box-shadow] duration-300 ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/10 to-transparent" />

        {/* Animated SVG corner frame */}
        <svg
          className="card-frame absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[
            "M2 18 L2 2 L18 2",
            "M82 2 L98 2 L98 18",
            "M98 82 L98 98 L82 98",
            "M18 98 L2 98 L2 82",
          ].map((d, idx) => (
            <path
              key={idx}
              d={d}
              fill="none"
              stroke="#e67e22"
              strokeWidth="2"
              strokeDasharray="60"
              strokeDashoffset="60"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="font-mono text-white text-[10px] tracking-widest bg-gecc-orange/90 px-2 py-0.5">
            {project.id}
          </span>
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 border border-white/20 bg-black/40 flex items-center justify-center z-10">
          <Icon size={15} className="text-white" />
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 z-10">
          <MapPin size={12} className="text-gecc-orange" />
          <span className="text-white/90 text-xs font-mono uppercase tracking-wide truncate max-w-[220px]">
            {project.location}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="font-mono text-gecc-orange text-xs tracking-[0.2em] uppercase font-bold">
          {project.category}
        </span>
        <h3
          className={`text-[#0a1628] font-bold leading-snug ${
            featured ? "text-xl md:text-2xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>
        {featured && (
          <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
            {project.shortDescription}
          </p>
        )}

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-100">
          <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400 uppercase tracking-wider">
            <Calendar size={12} />
            {project.year}
          </span>
          <span className="flex items-center gap-1.5 font-mono font-bold text-xs text-slate-500 group-hover:text-gecc-orange uppercase tracking-wider transition-colors duration-300">
            View Project
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

const ProjectsShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".projects-badge, .projects-heading, .projects-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      );

      const cards = sectionRef.current.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "back.out(1.15)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      <div className="absolute bottom-0 left-0 w-[400px] h-[220px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12 lg:mb-16 max-w-2xl">
          <div className="projects-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
              {projectsData.length} Completed Projects
            </span>
          </div>
          <h2 className="projects-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Every Project,{" "}
            <span className="text-gecc-orange">A Lasting Mark</span>
          </h2>
          <p className="projects-desc text-slate-600 md:text-lg leading-relaxed font-light">
            Real estate towers, road networks, cold-storage logistics, and
            renewable energy — explore the full record of what GECC has built
            across South Sudan and East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-[1fr]">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcaseSection;
