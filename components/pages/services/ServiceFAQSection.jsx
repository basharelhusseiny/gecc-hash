"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, HelpCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FaqItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(iconRef.current, {
      rotate: isOpen ? 45 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isOpen]);

  return (
    <div className="faq-item border border-slate-200 bg-slate-50 hover:border-gecc-orange/30 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-[#0a1628] font-semibold">
          {item.question}
        </span>
        <span
          ref={iconRef}
          className="shrink-0 w-7 h-7 border border-gecc-orange/40 flex items-center justify-center text-gecc-orange"
        >
          <Plus size={14} />
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0">
        <p className="px-5 pb-4 text-slate-500 text-md leading-relaxed font-light">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const ServiceFAQSection = ({ service }) => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      className="relative bg-white overflow-hidden py-8 md:py-18"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[220px] bg-gecc-orange/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2.5 mb-8">
          <HelpCircle size={18} className="text-gecc-orange" />
          <span className="font-mono text-[#0a1628] text-lg tracking-[0.25em] uppercase font-bold">
            Frequently Asked Questions
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {service.faq.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
