"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !svgRef.current) return;

      const mainLines = svgRef.current.querySelectorAll(".main-line");
      const dimLines = svgRef.current.querySelectorAll(".dim-line");
      const labels = svgRef.current.querySelectorAll(".label-text");

      gsap.set(mainLines, { opacity: 0, strokeDashoffset: 800 });
      gsap.set(dimLines, { opacity: 0 });
      gsap.set(labels, { opacity: 0, y: 15, scale: 0.9 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Dramatic blueprint drawing
      tl.to(mainLines, {
        opacity: 1,
        strokeDashoffset: 0,
        duration: 2.5,
        stagger: 0.015,
      });

      tl.to(
        dimLines,
        {
          opacity: 0.7,
          duration: 1.2,
          stagger: 0.02,
        },
        "-=1.8",
      );

      tl.to(
        labels,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "back.out(1.7)",
        },
        "-=1.2",
      );

      // Logo animation - scale up with bounce
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { scale: 0.5, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.5,
          },
        );

        // Subtle floating animation
        gsap.to(logoRef.current, {
          y: -8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      // Title word-by-word reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 40, rotateX: -45 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.8,
          },
        );

        // Subtle glow pulse on the title
        gsap.to(titleRef.current, {
          textShadow: "0 0 40px rgba(230,126,34,0.5)",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 3,
        });
      }

      // Content reveal
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8",
      );

      // Animated dimension pulsing
      gsap.to(dimLines, {
        opacity: 0.4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          from: "random",
        },
      });

      // Pulsing reference points
      const refPoints = svgRef.current.querySelectorAll(".ref-circle");
      gsap.to(refPoints, {
        scale: 1.2,
        opacity: 0.8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "start",
        },
      });
    },
    { scope: sectionRef },
  );

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1f3d 0%, #0f2847 50%, #1a3a5c 100%)",
      }}
    >
      {/* Light Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 80px)
          `,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,31,61,0.6) 100%)",
        }}
      />

      {/* Floor Plan SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          ref={svgRef}
          viewBox="0 0 900 600"
          className="w-full max-w-[1000px] h-auto opacity-50"
          style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.05))" }}
        >
          {/* MAIN BUILDING OUTLINE - Complex Floor Plan */}
          <path
            d="M100 150 L100 450 L300 450 L300 500 L600 500 L600 450 L800 450 L800 150 L600 150 L600 100 L300 100 L300 150 Z"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="2.5"
            className="main-line"
            fill="none"
            strokeLinecap="round"
          />

          <rect
            x="350"
            y="200"
            width="200"
            height="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            className="main-line"
            fill="none"
            rx="5"
          />

          {/* LEFT WING - Rooms */}
          <rect
            x="120"
            y="170"
            width="160"
            height="120"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="200"
            y="235"
            fill="rgba(255,255,255,0.8)"
            fontSize="14"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            A1
          </text>

          <rect
            x="120"
            y="310"
            width="160"
            height="120"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="200"
            y="375"
            fill="rgba(255,255,255,0.8)"
            fontSize="14"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            A2
          </text>

          <line
            x1="200"
            y1="170"
            x2="200"
            y2="290"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />
          <text
            x="160"
            y="235"
            fill="rgba(255,255,255,0.8)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            A3
          </text>

          {/* CENTER SECTION */}
          <rect
            x="320"
            y="120"
            width="260"
            height="60"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="450"
            y="155"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            CORRIDOR
          </text>

          <rect
            x="320"
            y="370"
            width="260"
            height="110"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />

          <rect
            x="120"
            y="120"
            width="180"
            height="40"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="210"
            y="145"
            fill="rgba(255,255,255,0.8)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            LOBBY
          </text>

          {/* RIGHT WING */}
          <rect
            x="620"
            y="170"
            width="160"
            height="260"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="700"
            y="305"
            fill="rgba(255,255,255,0.8)"
            fontSize="14"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            B1
          </text>
          <text
            x="700"
            y="325"
            fill="rgba(255,255,255,0.8)"
            fontSize="9"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            MAIN HALL
          </text>

          <rect
            x="620"
            y="120"
            width="160"
            height="40"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="700"
            y="145"
            fill="rgba(255,255,255,0.8)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            B2
          </text>

          {/* INTERNAL WALLS */}
          <line
            x1="300"
            y1="150"
            x2="300"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />
          <line
            x1="600"
            y1="150"
            x2="600"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />
          <line
            x1="120"
            y1="290"
            x2="280"
            y2="290"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />

          {/* CENTER COURTYARD */}
          <line
            x1="350"
            y1="275"
            x2="550"
            y2="275"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
            className="main-line"
            strokeDasharray="4 4"
          />
          <line
            x1="450"
            y1="200"
            x2="450"
            y2="350"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
            className="main-line"
            strokeDasharray="4 4"
          />

          {/* DOOR SWINGS */}
          <path
            d="M280 230 A 20 20 0 0 1 260 250"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
            fill="none"
          />
          <line
            x1="280"
            y1="230"
            x2="260"
            y2="250"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />

          <path
            d="M280 370 A 20 20 0 0 0 260 350"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
            fill="none"
          />
          <line
            x1="280"
            y1="370"
            x2="260"
            y2="350"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />

          <path
            d="M620 305 A 20 20 0 0 0 640 325"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
            fill="none"
          />
          <line
            x1="620"
            y1="305"
            x2="640"
            y2="325"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
          />

          <path
            d="M200 160 A 15 15 0 0 1 215 145"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
            fill="none"
          />

          {/* DIMENSION LINES */}
          <line
            x1="100"
            y1="530"
            x2="800"
            y2="530"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="100"
            y1="525"
            x2="100"
            y2="535"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="800"
            y1="525"
            x2="800"
            y2="535"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="450"
            y1="525"
            x2="450"
            y2="535"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <text
            x="450"
            y="550"
            fill="rgba(255,255,255,0.8)"
            fontSize="12"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            12.500
          </text>

          <line
            x1="100"
            y1="80"
            x2="300"
            y2="80"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="100"
            y1="75"
            x2="100"
            y2="85"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="300"
            y1="75"
            x2="300"
            y2="85"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <text
            x="200"
            y="70"
            fill="rgba(255,255,255,0.8)"
            fontSize="11"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            4.200
          </text>

          <line
            x1="600"
            y1="80"
            x2="800"
            y2="80"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="600"
            y1="75"
            x2="600"
            y2="85"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="800"
            y1="75"
            x2="800"
            y2="85"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <text
            x="700"
            y="70"
            fill="rgba(255,255,255,0.8)"
            fontSize="11"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            4.200
          </text>

          <line
            x1="50"
            y1="150"
            x2="50"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
            strokeDasharray="3 3"
          />
          <line
            x1="45"
            y1="150"
            x2="55"
            y2="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="45"
            y1="450"
            x2="55"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="45"
            y1="300"
            x2="55"
            y2="300"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <text
            x="35"
            y="230"
            fill="rgba(255,255,255,0.8)"
            fontSize="11"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
            transform="rotate(-90 35 230)"
          >
            3.500
          </text>

          <line
            x1="50"
            y1="100"
            x2="50"
            y2="500"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
            strokeDasharray="3 3"
          />
          <line
            x1="45"
            y1="100"
            x2="55"
            y2="100"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <line
            x1="45"
            y1="500"
            x2="55"
            y2="500"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="dim-line"
          />
          <text
            x="35"
            y="310"
            fill="rgba(255,255,255,0.8)"
            fontSize="11"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
            transform="rotate(-90 35 310)"
          >
            5.250
          </text>

          <line
            x1="300"
            y1="170"
            x2="320"
            y2="170"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <line
            x1="300"
            y1="290"
            x2="320"
            y2="290"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <line
            x1="315"
            y1="170"
            x2="315"
            y2="290"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <text
            x="335"
            y="235"
            fill="rgba(255,255,255,0.8)"
            fontSize="9"
            className="label-text"
            fontFamily="monospace"
          >
            2.800
          </text>

          <line
            x1="620"
            y1="450"
            x2="780"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <line
            x1="620"
            y1="445"
            x2="620"
            y2="455"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <line
            x1="780"
            y1="445"
            x2="780"
            y2="455"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.6"
            className="dim-line"
          />
          <text
            x="700"
            y="470"
            fill="rgba(255,255,255,0.8)"
            fontSize="9"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            4.000
          </text>

          {/* REFERENCE POINTS with pulsing circles */}
          <circle
            cx="100"
            cy="150"
            r="8"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1.5"
            className="main-line ref-circle"
            fill="none"
          />
          <line
            x1="92"
            y1="150"
            x2="108"
            y2="150"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <line
            x1="100"
            y1="142"
            x2="100"
            y2="158"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <text
            x="100"
            y="175"
            fill="rgba(230,126,34,1)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            P1
          </text>

          <circle
            cx="800"
            cy="150"
            r="8"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1.5"
            className="main-line ref-circle"
            fill="none"
          />
          <line
            x1="792"
            y1="150"
            x2="808"
            y2="150"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <line
            x1="800"
            y1="142"
            x2="800"
            y2="158"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <text
            x="800"
            y="175"
            fill="rgba(230,126,34,1)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            P2
          </text>

          <circle
            cx="450"
            cy="275"
            r="8"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1.5"
            className="main-line ref-circle"
            fill="none"
          />
          <line
            x1="442"
            y1="275"
            x2="458"
            y2="275"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <line
            x1="450"
            y1="267"
            x2="450"
            y2="283"
            stroke="rgba(230,126,34,0.9)"
            strokeWidth="1"
            className="main-line"
          />
          <text
            x="450"
            y="300"
            fill="rgba(230,126,34,1)"
            fontSize="10"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            P3
          </text>

          {/* GRID LINES */}
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="600"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.3"
            className="dim-line"
            strokeDasharray="8 8"
            opacity="0.3"
          />
          <line
            x1="600"
            y1="0"
            x2="600"
            y2="600"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.3"
            className="dim-line"
            strokeDasharray="8 8"
            opacity="0.3"
          />
          <line
            x1="0"
            y1="300"
            x2="900"
            y2="300"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.3"
            className="dim-line"
            strokeDasharray="8 8"
            opacity="0.3"
          />

          {/* SECTION MARKERS */}
          <text
            x="85"
            y="465"
            fill="rgba(255,255,255,0.8)"
            fontSize="10"
            className="label-text"
            fontFamily="monospace"
          >
            A-A
          </text>
          <line
            x1="100"
            y1="470"
            x2="100"
            y2="490"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="dim-line"
          />
          <circle
            cx="100"
            cy="495"
            r="4"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="dim-line"
            fill="none"
          />

          <text
            x="815"
            y="465"
            fill="rgba(255,255,255,0.8)"
            fontSize="10"
            className="label-text"
            fontFamily="monospace"
          >
            B-B
          </text>
          <line
            x1="800"
            y1="470"
            x2="800"
            y2="490"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="dim-line"
          />
          <circle
            cx="800"
            cy="495"
            r="4"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="dim-line"
            fill="none"
          />

          {/* WINDOW MARKS */}
          <line
            x1="140"
            y1="150"
            x2="160"
            y2="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            className="main-line"
          />
          <line
            x1="240"
            y1="150"
            x2="260"
            y2="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            className="main-line"
          />
          <line
            x1="640"
            y1="150"
            x2="660"
            y2="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            className="main-line"
          />
          <line
            x1="740"
            y1="150"
            x2="760"
            y2="150"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            className="main-line"
          />

          {/* STAIRS */}
          <rect
            x="350"
            y="400"
            width="60"
            height="80"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            className="main-line"
            fill="none"
          />
          <line
            x1="360"
            y1="410"
            x2="400"
            y2="410"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <line
            x1="358"
            y1="420"
            x2="402"
            y2="420"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <line
            x1="356"
            y1="430"
            x2="404"
            y2="430"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <line
            x1="354"
            y1="440"
            x2="406"
            y2="440"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <line
            x1="352"
            y1="450"
            x2="408"
            y2="450"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <line
            x1="350"
            y1="460"
            x2="410"
            y2="460"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.8"
            className="main-line"
          />
          <text
            x="380"
            y="445"
            fill="rgba(255,255,255,0.8)"
            fontSize="9"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            STAIR
          </text>

          {/* ELEVATOR */}
          <rect
            x="500"
            y="400"
            width="50"
            height="60"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            className="main-line"
            fill="none"
          />
          <text
            x="525"
            y="435"
            fill="rgba(255,255,255,0.8)"
            fontSize="8"
            className="label-text"
            textAnchor="middle"
            fontFamily="monospace"
          >
            ELEV
          </text>
        </svg>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[900px] mx-auto px-6 text-center pt-16"
      >
        {/* Logo - Bigger and above headline */}
        <div className="mb-6 flex justify-center">
          <img
            ref={logoRef}
            src="/gecc-logo.png"
            alt="GECC Logo"
            className="h-20 md:h-24 w-auto"
            style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
          />
        </div>

        <span className="inline-block font-mono text-white/70 text-xs tracking-[0.2em] uppercase mb-4">
          EST. 2010 — SOUTH SUDAN
        </span>

        {/* Orange Headline */}
        <h1
          ref={titleRef}
          className="font-bold text-[#e67e22] text-[clamp(40px,9vw,80px)] leading-[0.95] tracking-[-0.02em] mb-6 drop-shadow-2xl"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: "0 0 30px rgba(230,126,34,0.3)",
          }}
        >
          <span className="word inline-block">Building</span>{" "}
          <span className="word inline-block">Tomorrow&apos;s</span>
          <br />
          <span className="word inline-block">Infrastructure</span>
        </h1>

        <p
          className="text-white/75 text-lg md:text-xl max-w-[600px] mx-auto leading-[1.6] tracking-[0.02em] mb-10 font-light"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          From road construction and asphalting to manufacturing and energy
          solutions — we engineer progress across South Sudan and East Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToServices}
            className="bg-[#e67e22] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#d35400] transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-xl uppercase"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Explore Services
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4 transition-all tracking-wide"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            View Projects
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
