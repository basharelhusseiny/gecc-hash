"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BenefitCard = ({ title, description }) => {
  const cardRef = useRef(null);
  const rotateX = useRef(null);
  const rotateY = useRef(null);

  useGSAP(() => {
    if (!cardRef.current) return;
    rotateX.current = gsap.quickTo(cardRef.current, "rotateX", {
      duration: 0.4,
      ease: "power3.out",
    });
    rotateY.current = gsap.quickTo(cardRef.current, "rotateY", {
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.current?.(px * 8);
    rotateX.current?.(-py * 8);
  };

  const handleMouseLeave = () => {
    rotateX.current?.(0);
    rotateY.current?.(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", perspective: "600px" }}
      className="benefit-card relative border border-slate-200 bg-slate-50 p-6 hover:border-gecc-orange/40 hover:shadow-lg hover:shadow-gecc-orange/[0.08] transition-[border-color,box-shadow] duration-300"
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gecc-orange" />
      <Sparkles size={18} className="text-gecc-orange mb-3" />
      <h4 className="text-[#0a1628] font-bold md:text-lg mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

const ServiceBenefitsSection = ({ service }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".benefit-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
        ".why-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".why-panel",
            start: "top 80%",
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
      <div className="absolute bottom-0 left-0 w-[400px] h-[220px] bg-gecc-orange/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {service.benefits.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>

        <div className="why-panel lg:col-span-5 border border-slate-200 bg-[#0e2645] p-7">
          <div className="text-white font-mono tracking-[0.25em] uppercase mb-6 pb-3 border-b border-white/10">
            Why Choose GECC For This
          </div>
          <div className="flex flex-col gap-4">
            {service.whyChooseUs.map((reason) => (
              <div key={reason} className="why-row flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="text-gecc-orange shrink-0 mt-0.5"
                />
                <span className="text-white/80 text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefitsSection;
