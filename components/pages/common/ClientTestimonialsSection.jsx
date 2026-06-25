"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "GECC delivered our municipal road project ahead of schedule with exceptional quality. Their team's professionalism sets the standard for construction in South Sudan.",
    name: "James Lokiri",
    role: "Director of Public Works",
    org: "Government",
    initials: "JL",
  },
  {
    quote:
      "The concrete products from GECC's manufacturing division consistently meet our structural specifications. A reliable partner for our real estate developments.",
    name: "Amina Okello",
    role: "CEO, Horizon Properties",
    org: "Real Estate",
    initials: "AO",
  },
  {
    quote:
      "From energy infrastructure to civil works, GECC brings technical expertise and local knowledge that makes complex projects achievable.",
    name: "Dr. Peter Garang",
    role: "Ministry of Energy",
    org: "Government",
    initials: "PG",
  },
];

const AUTOPLAY_MS = 5500;

const ClientTestimonialsSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const autoplayRef = useRef(null);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const TOTAL = testimonials.length;

  const goTo = useCallback(
    (nextIdx, dir = 1) => {
      if (isAnimatingRef.current) return;
      const current = indexRef.current;
      const normalized = ((nextIdx % TOTAL) + TOTAL) % TOTAL;
      if (normalized === current) return;

      isAnimatingRef.current = true;
      const cards = cardRefs.current;
      const incoming = cards[normalized];
      const outgoing = cards[current];

      gsap.set(incoming, {
        opacity: 0,
        xPercent: dir > 0 ? 8 : -8,
        scale: 0.98,
        zIndex: 20,
        display: "flex",
      });
      gsap.set(outgoing, { zIndex: 10 });

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          indexRef.current = normalized;
          setActiveIndex(normalized);
          gsap.set(outgoing, { display: "none" });
        },
      });

      tl.to(outgoing, {
        opacity: 0,
        xPercent: dir > 0 ? -8 : 8,
        scale: 0.98,
        duration: 0.45,
        ease: "power2.inOut",
      }).to(
        incoming,
        {
          opacity: 1,
          xPercent: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    [TOTAL],
  );

  const next = useCallback(() => goTo(indexRef.current + 1, 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1, -1), [goTo]);

  const restartAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, [restartAutoplay]);

  // Entrance animation
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".testi-badge, .testi-heading, .testi-sub",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        trackRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
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

  // Swipe / drag support
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    deltaXRef.current = 0;
    clearInterval(autoplayRef.current);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    deltaXRef.current = x - startXRef.current;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (deltaXRef.current > 60) {
      prev();
    } else if (deltaXRef.current < -60) {
      next();
    }
    restartAutoplay();
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-12 md:py-20"
    >
      {/* Blueprint dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft glows */}
      <div className="absolute top-0 left-0 w-[450px] h-[260px] bg-gecc-orange/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[220px] bg-slate-100 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner blueprint accents */}
      <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/50 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 lg:mb-16 max-w-2xl mx-auto">
          <div className="testi-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2">
            <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
            <span className="font-mono text-gecc-orange text-sm tracking-[0.3em] uppercase font-bold">
              Client Partners
            </span>
          </div>

          <h2 className="testi-heading text-[1.9rem] md:text-[2.4rem] lg:text-[2.6rem] font-bold text-[#0a1628] leading-[1.18]">
            Trusted by{" "}
            <span className="text-gecc-orange">
              Government & Industry Leaders
            </span>
          </h2>

          <p className="testi-sub text-slate-600 text-sm md:text-base leading-relaxed font-light">
            Hear from the partners and institutions who've trusted GECC to
            deliver on critical infrastructure, housing, and energy projects.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[820px] mx-auto">
          <div
            ref={trackRef}
            className="relative min-h-[340px] sm:min-h-[300px] md:min-h-[260px] select-none"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={() => isDraggingRef.current && handlePointerUp()}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                ref={(el) => (cardRefs.current[i] = el)}
                className="absolute inset-0 flex-col"
                style={{ display: i === 0 ? "flex" : "none" }}
              >
                <div className="relative border border-slate-200 bg-gray-100/80 p-6 sm:p-7 md:p-10 h-full flex flex-col cursor-grab active:cursor-grabbing">
                  {/* Corner marks */}
                  <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-gecc-orange/50" />
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-gecc-orange/50" />
                  <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-gecc-orange/50" />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-gecc-orange/50" />

                  {/* Quote icon */}
                  <Quote
                    size={34}
                    className="text-gecc-orange/20 mb-3"
                    fill="currentColor"
                  />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={13}
                        className="text-gecc-orange fill-gecc-orange"
                      />
                    ))}
                  </div>

                  <p className="text-[#0a1628] text-base md:text-lg leading-relaxed font-medium italic flex-1">
                    “{t.quote}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-6 pt-5 border-t border-slate-300">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 border border-gecc-orange/30 bg-gecc-orange/[0.08] flex items-center justify-center font-mono font-bold text-gecc-orange text-sm">
                      {t.initials}
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-[#0a1628] font-bold text-sm sm:text-base truncate">
                        {t.name}
                      </span>
                      <span className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-wide truncate">
                        {t.role}
                      </span>
                    </div>
                    <span className="ml-auto font-mono text-sm text-gecc-orange uppercase tracking-widest hidden sm:block shrink-0">
                      {t.org}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows — hidden on mobile, dots + swipe handle nav there */}
          <button
            onClick={() => {
              prev();
              restartAutoplay();
            }}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 border hover:border-slate-200 hover:bg-white border-gecc-orange bg-gecc-orange items-center justify-center hover:text-slate-500 text-white transition-all duration-300 shadow-md hover:scale-105 cursor-pointer z-30"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              next();
              restartAutoplay();
            }}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 border hover:border-slate-200 hover:bg-white border-gecc-orange bg-gecc-orange items-center justify-center hover:text-slate-500 text-white transition-all duration-300 shadow-md hover:scale-105 cursor-pointer z-30"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i, i > activeIndex ? 1 : -1);
                  restartAutoplay();
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1 transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-10 bg-gecc-orange"
                    : "w-4 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
