"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, MapPin, Layers } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "01",
    title: "G+4 Commercial & Residential Building",
    subtitle: "GECC Apartments & Luxury Rooms",
    location: "Tongping, Juba — Airport Road",
    category: "Real Estate",
    image: "/projects/Project 1/11.png",
  },
  {
    id: "02",
    title: "G+5 Residential Building",
    subtitle: "Worldwide Apartments",
    location: "Tongping, Juba, South Sudan",
    category: "Real Estate",
    image: "/projects/Project 2/8.png",
  },
  {
    id: "06",
    title: "UNMISS Integrated Cold-Room Storage",
    subtitle: "Warehousing & Logistics Support for ES-KO",
    location: "Malakal, Bentiu & Wau",
    category: "Infrastructure",
    image: "/projects/Project 3/3.png",
  },
  {
    id: "04",
    title: "Road Infrastructure Development",
    subtitle: "Highway & Arterial Network Expansion",
    location: "South Sudan",
    category: "Road Construction",
    image: "/projects/Project 4/17.png",
  },
];

const TOTAL_PROJECTS = 7;

const FeaturedProjectsSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".proj-badge, .proj-heading, .proj-desc",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
      );

      const cards = gridRef.current?.querySelectorAll(".project-card");
      if (cards?.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.2)",
          },
          "-=0.3",
        );
      }

      tl.fromTo(
        ".proj-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 md:py-24"
    >
      {/* Blueprint dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft glows matching site palette */}
      <div className="absolute top-0 right-0 w-[450px] h-[260px] bg-gecc-orange/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[220px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner blueprint accents */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 lg:mb-16 max-w-2xl">
          <div className="proj-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2 self-start">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-sm tracking-[0.3em] uppercase font-bold">
              Featured Projects
            </span>
          </div>

          <h2 className="proj-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Projects That{" "}
            <span className="text-gecc-orange">Shape South Sudan</span>
          </h2>

          <p className="proj-desc text-slate-600 md:text-lg leading-relaxed font-light">
            From residential towers and road networks to cold-storage logistics
            hubs — explore a selection of the projects GECC has delivered across
            South Sudan and East Africa.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group relative flex flex-col border border-slate-200 bg-white hover:border-gecc-orange/40 hover:shadow-xl hover:shadow-gecc-orange/[0.08] transition-all duration-300 overflow-hidden"
            >
              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gecc-orange/0 group-hover:border-gecc-orange/60 transition-colors duration-300 z-20" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange/0 group-hover:border-gecc-orange/60 transition-colors duration-300 z-20" />

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/10 to-transparent" />

                {/* ID + category tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-white text-[10px] tracking-widest bg-gecc-orange/90 px-2 py-0.5">
                    {project.id}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 px-2 py-1">
                  <Layers size={10} className="text-white/80" />
                  <span className="font-mono text-white/80 text-xs tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <MapPin size={12} className="text-gecc-orange" />
                  <span className="text-white/90 text-xs font-mono uppercase tracking-wide">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <span className="font-mono text-gecc-orange text-xs tracking-[0.2em] uppercase font-bold">
                  {project.subtitle}
                </span>
                <h3 className="text-[#0a1628] font-bold text-base leading-snug">
                  {project.title}
                </h3>

                <Link
                  href="/projects"
                  className="mt-auto pt-3 inline-flex items-center gap-1.5 font-mono font-bold text-slate-500 group-hover:text-gecc-orange uppercase tracking-wider transition-colors duration-300"
                >
                  View Project
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="proj-cta flex flex-col items-center gap-4 mt-14">
          <p className="text-slate-500 text-sm font-mono uppercase tracking-wider">
            +{TOTAL_PROJECTS - projectsData.length} More Completed Projects
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 bg-gecc-orange hover:bg-[#c95a00] text-white text-sm font-mono font-bold uppercase tracking-[0.18em] px-8 py-3.5 transition-all duration-300 shadow-md shadow-gecc-orange/20 relative overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <ArrowRight
              size={15}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
            <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-white/15 skew-x-12 transition-transform duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
