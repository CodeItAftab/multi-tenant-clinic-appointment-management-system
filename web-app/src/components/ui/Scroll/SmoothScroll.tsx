"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    // Respect user's accessibility motion settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Mobile phones & touch devices have native 120Hz kinetic inertia scrolling.
    // Intercepting touch events on phones causes scroll clamping and freezes the page.
    // Lenis smooth scroll should only smooth mouse wheel scrolling on desktop/laptop.
    const isTouchOrMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    if (isTouchOrMobile) {
      // Let mobile devices use 100% native, unhindered browser scrolling
      return;
    }

    // Initialize Lenis for desktop/laptop mouse wheel smooth scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    // Make lenis globally available for desktop programmatic navigation
    window.__lenis = lenis;

    // Automatically notify Lenis whenever dynamic content expands (e.g. clicking Show More)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
