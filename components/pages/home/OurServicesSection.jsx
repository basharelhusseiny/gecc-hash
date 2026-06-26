"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesData, getIconComponent } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Transform servicesData to match the component's expected structure
const transformedServicesData = servicesData.map((service) => ({
  id: `0${service.id}`,
  title: service.title,
  desc: service.shortDescription,
  image: service.listImage,
  link: `/services/${service.slug}`,
  iconName: service.iconName,
  specs: service.features.slice(0, 4),
  process: service.process.slice(0, 3).map((step, idx) => ({
    step: `PH-0${idx + 1}`,
    name: step.title,
    detail: step.description,
  })),
}));

const TOTAL = transformedServicesData.length;

const OurServicesSection = () => {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const rightColRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Animate card transition
  const animateToCard = useCallback((nextIdx) => {
    if (!rightColRef.current) return;
    const cards = rightColRef.current.querySelectorAll(".service-card");
    const currentIdx = activeIndexRef.current;

    if (nextIdx === currentIdx) return;
    isAnimatingRef.current = true;

    const incoming = cards[nextIdx];
    const current = cards[currentIdx];
    const goingForward = nextIdx > currentIdx;

    gsap.set(incoming, {
      yPercent: goingForward ? 100 : -100,
      scale: 1,
      opacity: 1,
      zIndex: 20,
    });
    gsap.set(current, { zIndex: 10 });

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        activeIndexRef.current = nextIdx;
        setActiveIndex(nextIdx);
      },
    });

    // Silky smooth 0.75s transition with power3.out
    tl.to(incoming, {
      yPercent: 0,
      ease: "power3.out",
      duration: 0.75,
    }).to(
      current,
      {
        scale: goingForward ? 0.93 : 1,
        opacity: goingForward ? 0.25 : 1,
        yPercent: goingForward ? -5 : 100,
        ease: "power3.out",
        duration: 0.75,
      },
      "<",
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize all cards off-screen below except first
    const cards = rightColRef.current?.querySelectorAll(".service-card");
    if (cards) {
      cards.forEach((card, i) => {
        gsap.set(card, { yPercent: i === 0 ? 0 : 100, zIndex: 10 - i });
      });
    }

    const handleWheel = (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const isStuck = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;

      if (!isStuck) return;

      if (isAnimatingRef.current) {
        e.preventDefault();
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;
      const next = activeIndexRef.current + dir;

      if (next >= TOTAL) return;
      if (next < 0) return;

      e.preventDefault();

      // Use Lenis scrollTo for smooth scroll advance — keeps entry/exit seamless
      const lenis = window.__lenis;
      const currentScroll = lenis ? lenis.scroll : window.scrollY;
      const targetY = currentScroll + dir * window.innerHeight;

      if (lenis) {
        lenis.scrollTo(targetY, {
          duration: 0.75,
          easing: (t) => 1 - Math.pow(1 - t, 3), // cubic-out matches card animation
          lock: true, // blocks conflicting wheel input while transitioning
          force: true,
        });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }

      animateToCard(next);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [animateToCard]);

  return (
    <>
      {/* ─── Slanted border top divider ─── */}
      <div className="relative w-full overflow-hidden leading-[0] z-20 pointer-events-none bg-gecc-orange h-[40px] md:h-[80px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-gecc-navy-dark fill-current"
        >
          <path d="M1200 120L0 0v120z"></path>
        </svg>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full text-gecc-orange fill-none stroke-current"
          style={{ strokeWidth: "3px" }}
        >
          <line x1="0" y1="0" x2="1200" y2="120" />
        </svg>
      </div>

      {/* ─── Services wrapper: 400vh height makes section sticky for 3 card transitions
           and naturally pushes the next section below without overlap ─── */}
      <div
        ref={wrapperRef}
        className="hidden lg:block"
        style={{ height: `${TOTAL * 100}vh` }}
      >
        <section
          id="services"
          ref={sectionRef}
          className="relative bg-gecc-navy-dark overflow-x-hidden lg:sticky lg:top-0 py-12 lg:py-0 lg:h-screen lg:max-h-screen lg:overflow-hidden flex items-center"
        >
          {/* Blueprint dot-grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.1]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Radial glows */}
          <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gecc-orange/[0.03] rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-blue-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

          {/* Blueprint Corner Accents */}
          <div className="pointer-events-none select-none">
            <div className="absolute top-8 left-6 w-5 h-5 border-t border-l border-gecc-orange/30" />
            <div className="absolute top-8 right-6 w-5 h-5 border-t border-r border-gecc-orange/30" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-gecc-orange/30" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-gecc-orange/30" />
          </div>

          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center py-6 lg:py-0">
            {/* ─── Header ─── */}
            <div className="flex flex-col gap-3 mb-6 lg:mb-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-gecc-orange/30 bg-gecc-orange/[0.08] px-3.5 py-1.5 self-start">
                <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
                <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
                  Our Services
                </span>
              </div>

              <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold text-white leading-tight pt-8">
                Engineering Solutions That{" "}
                <span className="text-gecc-orange">Transform Communities</span>
              </h2>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light">
                GECC delivers comprehensive construction, manufacturing, and
                energy infrastructure services. From asphalt roads that connect
                cities to concrete products that build homes — every project is
                engineered for durability and impact.
              </p>
            </div>

            {/* ─── Main Content Grid ─── */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Blueprint Visualizer */}
              <div className="hidden lg:block lg:col-span-5 self-center max-w-[390px] xl:max-w-[410px] mx-auto w-full">
                <div className="relative p-1.5">
                  <div className="absolute inset-0 bg-[#070f1d]/40 border border-gecc-orange/15 -rotate-2 pointer-events-none scale-[1.01] translate-x-1 translate-y-0.5" />
                  <div className="absolute inset-0 border border-white/[0.03] rotate-1 pointer-events-none scale-[1.02] -translate-x-0.5" />

                  <div className="relative border border-white/[0.08] bg-[#070f1d] p-4 shadow-2xl shadow-black/80 z-10">
                    <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-gecc-orange pointer-events-none" />
                    <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-gecc-orange pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-gecc-orange pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-gecc-orange pointer-events-none" />

                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2.5 text-[9px] font-mono tracking-widest text-white/40 uppercase">
                      <span>SYSTEM // VISUALIZER</span>
                      <span>
                        REF: SRV-{transformedServicesData[activeIndex].id}
                      </span>
                    </div>

                    {/* Viewport Frame */}
                    <div className="relative h-[160px] xl:h-[180px] w-full overflow-hidden border border-white/[0.05] bg-black">
                      <div
                        className="absolute inset-0 z-10 pointer-events-none opacity-[0.2]"
                        style={{
                          backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                        `,
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.05] z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.05] z-10 pointer-events-none" />

                      {transformedServicesData.map((service, index) => (
                        <img
                          key={service.id}
                          src={service.image}
                          alt={service.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                            index === activeIndex
                              ? "opacity-75"
                              : "opacity-0 pointer-events-none"
                          }`}
                        />
                      ))}

                      <div className="absolute bottom-2 left-2 z-15 bg-black/75 border border-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-gecc-orange tracking-widest uppercase">
                        LAT: 4.85°N // LON: 31.60°E
                      </div>
                      <div className="absolute bottom-2 right-2 z-15 bg-black/75 border border-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-white/50 tracking-wider">
                        SCALE 1:250
                      </div>
                    </div>

                    {/* Specs Panel */}
                    <div className="mt-4">
                      <div className="text-xs font-mono text-white/60 tracking-[0.2em] uppercase border-b border-white/[0.06] pb-1.5 mb-2">
                        Technical Specifications
                      </div>
                      <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {transformedServicesData[activeIndex].specs.map(
                          (spec, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-1.5 text-xs text-white/70 font-mono"
                            >
                              <span className="w-1.5 h-1.5 bg-gecc-orange shrink-0" />
                              <span className="truncate">{spec}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Process Phases */}
                    <div className="mt-4 border-t border-white/6 pt-3">
                      <div className="text-xs font-mono text-white/60 tracking-[0.2em] uppercase mb-2.5 flex items-center justify-between">
                        <span>PROCESS PHASES</span>
                        <span className="text-gecc-orange animate-pulse text-xs">
                          ACTIVE
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {transformedServicesData[activeIndex].process.map(
                          (step, idx) => (
                            <div
                              key={idx}
                              className="flex gap-2.5 font-mono items-center"
                            >
                              <span className="text-gecc-orange text-xs font-bold shrink-0">
                                {step.step}
                              </span>
                              <span className="text-[12px] text-white/85 font-bold truncate max-w-[130px]">
                                {step.name}
                              </span>
                              <span className="w-1.5 h-px bg-white/10 shrink-0" />
                              <span className="text-[10px] text-white/40 truncate max-w-[150px]">
                                {step.detail}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.06]">
                      {transformedServicesData.map((_, i) => (
                        <div
                          key={i}
                          className={`h-[2px] flex-1 transition-all duration-300 ${
                            i === activeIndex ? "bg-gecc-orange" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Stacking Cards */}
              <div
                ref={rightColRef}
                className="lg:col-span-7 relative h-auto lg:h-[360px] w-full flex flex-col gap-5 lg:gap-0 lg:overflow-hidden"
              >
                {transformedServicesData.map((service) => {
                  const Icon = getIconComponent(service.iconName);
                  return (
                    <div
                      key={service.id}
                      className="service-card relative lg:absolute lg:inset-0 w-full border border-white/[0.08] bg-[#070f1d] p-5 md:p-6 flex flex-col justify-between shadow-2xl"
                    >
                      {/* Corner marks */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gecc-orange/30 pointer-events-none" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gecc-orange/30 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gecc-orange/30 pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gecc-orange/30 pointer-events-none" />

                      <div className="flex flex-col gap-3">
                        {/* Title row */}
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-gecc-orange/30 bg-gecc-orange/[0.06] flex items-center justify-center">
                              <Icon className="text-gecc-orange" size={20} />
                            </div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white font-sans">
                              {service.title}
                            </h3>
                          </div>
                          <span className="font-mono text-sm font-bold text-gecc-orange">
                            {service.id}
                          </span>
                        </div>

                        {/* Mobile Image */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.08] mb-2 lg:hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-75"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                          {service.desc}
                        </p>

                        {/* Specs tags */}
                        <div className="flex flex-wrap gap-2 mt-1">
                          {service.specs.map((spec, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-xs md:text-sm bg-white/[0.03] border border-white/[0.06] text-white/50 px-2.5 py-1"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
                        <span className="font-mono text-xs text-white/40 tracking-[0.2em] hidden sm:inline">
                          GECC // SERVICE_STAKE
                        </span>
                        <Link
                          href={service.link}
                          className="group/btn inline-flex items-center gap-2.5 bg-gecc-orange hover:bg-gecc-orange-dark text-white text-sm font-mono font-bold uppercase tracking-wider px-5 py-2.5 transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                          <span>Explore Service</span>
                          <ArrowUpRight
                            size={14}
                            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile: normal section (no wrapper needed) */}
      <section
        id="services-mobile"
        className="lg:hidden relative bg-gecc-navy-dark overflow-x-hidden py-12 flex items-center"
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="inline-flex items-center gap-2 border border-gecc-orange/30 bg-gecc-orange/[0.08] px-3.5 py-1.5 self-start">
              <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
              <span className="font-mono text-gecc-orange text-xs tracking-[0.3em] uppercase font-bold">
                Our Services
              </span>
            </div>
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white leading-tight">
              Engineering Solutions That{" "}
              <span className="text-gecc-orange">Transform Communities</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              GECC delivers comprehensive construction, manufacturing, and
              energy infrastructure services. From asphalt roads that connect
              cities to concrete products that build homes — every project is
              engineered for durability and impact.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {transformedServicesData.map((service) => {
              const Icon = getIconComponent(service.iconName);
              return (
                <div
                  key={service.id}
                  className="border border-white/[0.08] bg-[#070f1d] p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3">
                    <div className="w-8 h-8 border border-gecc-orange/30 bg-gecc-orange/[0.06] flex items-center justify-center">
                      <Icon className="text-gecc-orange" size={14} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <span className="ml-auto font-mono text-sm font-bold text-gecc-orange">
                      {service.id}
                    </span>
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-video object-cover opacity-75"
                  />
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] bg-white/[0.03] border border-white/[0.06] text-white/50 px-2.5 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-gecc-orange text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 mt-1 w-fit"
                  >
                    Explore Service <ArrowUpRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
