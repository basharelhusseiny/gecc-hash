"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesData, getIconComponent } from "../../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const scanRef = useRef(null);
  const tweenRef = useRef(null);
  const Icon = getIconComponent(service.iconName);

  const handleEnter = () => {
    tweenRef.current?.kill();
    gsap.set(scanRef.current, { yPercent: -100, opacity: 1 });
    tweenRef.current = gsap.to(scanRef.current, {
      yPercent: 200,
      duration: 1.1,
      repeat: -1,
      ease: "none",
    });
  };

  const handleLeave = () => {
    tweenRef.current?.kill();
    gsap.to(scanRef.current, { opacity: 0, duration: 0.2 });
  };

  return (
    <Link
      ref={cardRef}
      href={`/services/${service.slug}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="service-card group relative flex flex-col border border-slate-200 bg-white hover:border-gecc-orange/40 hover:shadow-xl hover:shadow-gecc-orange/[0.08] transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gecc-orange/0 group-hover:border-gecc-orange/60 transition-colors duration-300 z-20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange/0 group-hover:border-gecc-orange/60 transition-colors duration-300 z-20" />

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={service.listImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/15 to-transparent" />

        {/* scan-line, hidden until hover */}
        <div
          ref={scanRef}
          className="absolute left-0 right-0 h-10 opacity-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(230,126,34,0.35), transparent)",
          }}
        />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="font-mono text-white text-[10px] tracking-widest bg-gecc-orange/90 px-2 py-0.5">
            {service.id}
          </span>
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 border border-white/20 bg-black/40 flex items-center justify-center">
          <Icon size={15} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="text-[#0a1628] font-bold text-xl leading-snug">
          {service.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Stats */}
        {service.stats?.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {service.stats.slice(0, 2).map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="font-mono text-gecc-orange font-bold text-base">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features */}
        {service.features?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {service.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-mono font-bold text-sm text-slate-500 group-hover:text-gecc-orange uppercase tracking-wider transition-colors duration-300">
          Explore Service
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
};

const ServicesShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.2)",
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;
