"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getIconComponent } from "../../../constants/index.js";

const ServiceHero = ({ service }) => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const lineRef = useRef(null);
  const Icon = getIconComponent(service.iconName);

  const [statValues, setStatValues] = useState(
    service.stats?.map(() => "0") ?? [],
  );

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
        ".sh-breadcrumb",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          ".sh-ref",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5 },
          "<",
        )
        .fromTo(
          ".sh-badge",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25",
        )
        .fromTo(
          ".sh-word",
          { opacity: 0, y: 30, rotateX: -35 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.65, stagger: 0.05 },
          "-=0.2",
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
          "-=0.25",
        )
        .fromTo(
          ".sh-desc",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.3",
        );

      // Stats count-up, synced to numeric part of each stat value
      service.stats?.forEach((stat, i) => {
        const numeric = parseFloat(stat.value.replace(/[^\d.]/g, "")) || 0;
        const suffix = stat.value.replace(/[\d.]/g, "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numeric,
          duration: 1.6,
          delay: 0.6 + i * 0.1,
          ease: "power2.out",
          onUpdate: () => {
            setStatValues((prev) => {
              const next = [...prev];
              next[i] = `${Math.round(obj.val)}${suffix}`;
              return next;
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  const words = service.title.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gecc-navy-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-gecc-navy-dark/10 via-gecc-navy-dark/60 to-gecc-navy-dark/10" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-24 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none hidden md:block" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none hidden md:block" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-5">
        <div className="w-full flex items-center justify-between sh-breadcrumb">
          <div className="flex items-center gap-2 font-mono text-sm text-white/65 uppercase tracking-widest">
            <Link href="/" className="hover:text-gecc-orange transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/services"
              className="hover:text-gecc-orange transition-colors"
            >
              Services
            </Link>
          </div>
          <span className="sh-ref font-mono text-sm text-gecc-orange/80 tracking-[0.2em] uppercase hidden sm:inline">
            REF: GECC-SRV-{service.id}
          </span>
        </div>

        <div className="sh-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.08] px-4 py-2">
          <Icon size={14} className="text-gecc-orange" />
          <span className="font-mono text-gecc-orange text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            Service {service.id}
          </span>
        </div>

        <h1
          className="text-[2rem] md:text-[2.9rem] lg:text-[3.3rem] font-bold text-white leading-[1.12]"
          style={{ perspective: "800px" }}
        >
          {words.map((w, i) => (
            <span key={i} className="sh-word inline-block mr-[0.25em]">
              {w}
            </span>
          ))}
        </h1>

        <div
          ref={lineRef}
          className="w-16 h-[3px] bg-gecc-orange origin-center"
        />

        <p className="sh-desc text-white/70 text-[15px] md:text-base leading-relaxed max-w-xl font-light">
          {service.subtitle}
        </p>

        {service.stats?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-2 pt-6 border-t border-white/10 w-full max-w-md">
            {service.stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="font-mono text-2xl md:text-3xl font-bold text-gecc-orange leading-none tabular-nums">
                  {statValues[i]}
                </div>
                <div className="text-white/60 text-sm font-mono uppercase tracking-widest mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHero;
