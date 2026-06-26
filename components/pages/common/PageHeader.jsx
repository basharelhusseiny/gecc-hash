// components/common/PageHeader.jsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PageHeader = ({
  badge = "GECC",
  title,
  highlight, // word(s) inside title to color orange
  description,
  image,
  breadcrumb = "Home",
  meta, // optional: [{ value: "16+", label: "Years of Experience" }]
}) => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.12 },
          { scale: 1, duration: 1.8, ease: "power3.out" },
        );
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".ph-breadcrumb",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
        .fromTo(
          ".ph-badge",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.25",
        )
        .fromTo(
          ".ph-word",
          { opacity: 0, y: 28, rotateX: -35 },
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
          ".ph-desc",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.3",
        )
        .fromTo(
          ".ph-meta-item",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  const words = (title || "").split(" ");
  const hi = new Set(
    (highlight ? highlight.split(" ") : []).map((w) => w.toLowerCase()),
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20 flex items-center justify-center"
      style={
        !image
          ? {
              background:
                "linear-gradient(135deg, #0a1f3d 0%, #0f2847 50%, #1a3a5c 100%)",
            }
          : undefined
      }
    >
      {/* Background image (if provided) */}
      {image && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imgRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Light, calm overlay — not heavy/dark */}
          <div className="absolute inset-0 bg-gecc-navy-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-gecc-navy-dark/40 via-gecc-navy-dark/55 to-gecc-navy-dark/75" />
        </div>
      )}

      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      {!image && (
        <>
          <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-gecc-orange/[0.05] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[250px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      {/* Corner blueprint accents */}
      <div className="absolute top-24 left-6 w-5 h-5 border-t-2 border-l-2 border-gecc-orange/50 pointer-events-none hidden md:block" />
      <div className="absolute top-24 right-6 w-5 h-5 border-t-2 border-r-2 border-gecc-orange/50 pointer-events-none hidden md:block" />
      <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-gecc-orange/50 pointer-events-none hidden md:block" />
      <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-gecc-orange/50 pointer-events-none hidden md:block" />

      {/* Content — fully centered */}
      <div className="max-w-[760px] mx-auto px-6 relative z-10 flex flex-col items-center text-center gap-5">
        <div className="ph-breadcrumb flex items-center gap-2 font-mono text-sm text-white/45 uppercase tracking-widest">
          <Link href="/" className="hover:text-gecc-orange transition-colors">
            {breadcrumb}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gecc-orange">{title}</span>
        </div>

        <div className="ph-badge inline-flex items-center gap-2 border border-gecc-orange/35 bg-gecc-orange/[0.07] px-4 py-2">
          <span className="w-1.5 h-1.5 bg-gecc-orange animate-pulse" />
          <span className="font-mono text-gecc-orange text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            {badge}
          </span>
        </div>

        <h1
          className="text-[2.2rem] md:text-[3.1rem] lg:text-[3.5rem] font-bold text-white leading-[1.1]"
          style={{ perspective: "800px" }}
        >
          {words.map((w, i) => (
            <span
              key={i}
              className="ph-word inline-block mr-[0.25em]"
              style={{ display: "inline-block" }}
            >
              {hi.has(w.toLowerCase()) ? (
                <span className="text-gecc-orange">{w}</span>
              ) : (
                w
              )}
            </span>
          ))}
        </h1>

        <div
          ref={lineRef}
          className="w-16 h-[3px] bg-gecc-orange origin-center"
        />

        {description && (
          <p className="ph-desc text-white/70 text-[15px] md:text-base leading-relaxed max-w-xl font-light">
            {description}
          </p>
        )}

        {meta?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-2 pt-6 border-t border-white/10 w-full max-w-md">
            {meta.map(({ value, label }) => (
              <div
                key={label}
                className="ph-meta-item flex flex-col items-center"
              >
                <div className="font-mono text-2xl md:text-3xl font-bold text-gecc-orange leading-none">
                  {value}
                </div>
                <div className="text-white/50 text-[11px] font-mono uppercase tracking-widest mt-1.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
