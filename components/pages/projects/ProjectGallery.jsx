"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Returns a bento span pattern based on total image count.
 * Works for 1 image up to 10+ — small counts get bespoke layouts,
 * larger counts cycle through a 6-item mosaic pattern.
 */
const getTileClasses = (total, idx) => {
  if (total === 1) {
    return "col-span-4 row-span-3 sm:col-span-4";
  }
  if (total === 2) {
    return "col-span-2 row-span-3 sm:col-span-2";
  }
  if (total === 3) {
    return idx === 0
      ? "col-span-4 sm:col-span-2 row-span-3"
      : "col-span-2 row-span-2 sm:col-span-2";
  }

  const pattern = [
    "col-span-2 row-span-2", // big tile
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];
  return pattern[idx % pattern.length];
};

const ProjectGallery = ({ images = [], title = "" }) => {
  const gridRef = useRef(null);
  const lightboxRef = useRef(null);
  const lightboxImgRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const total = images.length;
  const isOpen = activeIndex !== null;

  useGSAP(
    () => {
      if (!gridRef.current) return;

      const tiles = gridRef.current.querySelectorAll(".gallery-tile");

      tiles.forEach((tile, i) => {
        gsap.set(tile, { clipPath: "circle(0% at 50% 50%)" });
        gsap.to(tile, {
          clipPath: "circle(75% at 50% 50%)",
          duration: 0.9,
          ease: "power2.out",
          delay: (i % 6) * 0.08,
          scrollTrigger: {
            trigger: tile,
            start: "top 88%",
            once: true,
          },
        });
      });
    },
    { scope: gridRef, dependencies: [total] },
  );

  // Corner-bracket hover draw effect (SVG stroke reveal)
  const handleTileEnter = (e) => {
    const svg = e.currentTarget.querySelector(".tile-frame");
    if (!svg) return;
    gsap.to(svg.querySelectorAll("path"), {
      strokeDashoffset: 0,
      duration: 0.45,
      ease: "power2.out",
      stagger: 0.04,
    });
  };

  const handleTileLeave = (e) => {
    const svg = e.currentTarget.querySelector(".tile-frame");
    if (!svg) return;
    gsap.to(svg.querySelectorAll("path"), {
      strokeDashoffset: 40,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const openLightbox = (idx) => setActiveIndex(idx);
  const closeLightbox = () => setActiveIndex(null);

  const goTo = useCallback(
    (dir) => {
      setActiveIndex((prev) => {
        if (prev === null) return prev;
        return (prev + dir + total) % total;
      });
    },
    [total],
  );

  // Lightbox open/close + slide transition animation
  useGSAP(
    () => {
      if (!isOpen || !lightboxRef.current) return;
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        lightboxImgRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" },
      );
    },
    { dependencies: [isOpen, activeIndex] },
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, goTo]);

  if (total === 0) return null;

  return (
    <>
      <div
        ref={gridRef}
        className="grid grid-cols-4 auto-rows-[110px] sm:auto-rows-[140px] md:auto-rows-[160px] gap-3"
      >
        {images.map((src, i) => (
          <button
            key={src + i}
            onMouseEnter={handleTileEnter}
            onMouseLeave={handleTileLeave}
            onClick={() => openLightbox(i)}
            className={`gallery-tile group relative overflow-hidden bg-slate-100 cursor-zoom-in ${getTileClasses(
              total,
              i,
            )}`}
          >
            <img
              src={src}
              alt={`${title} — photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover zoom hint */}
            <div className="absolute bottom-2 right-2 w-7 h-7 bg-gecc-orange/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={13} className="text-white" />
            </div>

            {/* Animated corner bracket frame */}
            <svg
              className="tile-frame absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {[
                "M2 14 L2 2 L14 2",
                "M86 2 L98 2 L98 14",
                "M98 86 L98 98 L86 98",
                "M14 98 L2 98 L2 86",
              ].map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  fill="none"
                  stroke="#e67e22"
                  strokeWidth="2.5"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          </button>
        ))}
      </div>

      {/* Counter badge */}
      <div className="flex items-center gap-2 mt-4 font-mono text-xs text-slate-500 uppercase tracking-widest">
        <Images size={13} className="text-gecc-orange" />
        {total} {total === 1 ? "Photo" : "Photos"}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-[#020617]/96 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 border border-white/20 hover:border-gecc-orange flex items-center justify-center text-white/70 hover:text-gecc-orange transition-colors duration-200 cursor-pointer z-10"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-6 font-mono text-white/50 text-xs tracking-widest uppercase">
            {activeIndex + 1} / {total}
          </span>

          {/* Prev */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/20 hover:border-gecc-orange bg-black/30 flex items-center justify-center text-white hover:text-gecc-orange transition-colors duration-200 cursor-pointer z-10"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <img
            ref={lightboxImgRef}
            src={images[activeIndex]}
            alt={`${title} — photo ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
          />

          {/* Next */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/20 hover:border-gecc-orange bg-black/30 flex items-center justify-center text-white hover:text-gecc-orange transition-colors duration-200 cursor-pointer z-10"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
