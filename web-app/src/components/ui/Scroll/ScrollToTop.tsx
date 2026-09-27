"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling down 240px
      if (scrollY > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Circular progress calculations for SVG ring
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed z-40 transition-all duration-300 ease-out right-4 bottom-20 md:right-8 md:bottom-8 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#4bb1c8] to-[#1aa3bf] text-white shadow-[0_8px_25px_rgba(75,177,200,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(75,177,200,0.55)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
      >
        {/* SVG Circular Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          {/* Subtle Background Ring */}
          <circle
            cx="24"
            cy="24"
            r={circleRadius}
            className="stroke-white/25"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active Progress Ring */}
          <circle
            cx="24"
            cy="24"
            r={circleRadius}
            className="stroke-white transition-all duration-150 ease-out"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Arrow Icon with subtle bounce on hover */}
        <ArrowUp
          size={20}
          strokeWidth={2.6}
          className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}
