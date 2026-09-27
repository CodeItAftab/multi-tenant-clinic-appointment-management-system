"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade"
    | "zoom-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 950,
  threshold = 0.1,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-revealed");
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-revealed");
    } else {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const animationClass = `reveal-${animation}`;
  const inlineStyles: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll ${animationClass} ${className}`}
      style={inlineStyles}
    >
      {children}
    </div>
  );
}

/**
 * Global ScrollRevealProvider:
 * Progressively reveals sections, headers, and individual cards/elements
 * as the user scrolls down on EVERY page across the website.
 */
export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal-on-scroll, [data-reveal]")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const observeElement = (el: HTMLElement, delay = 0) => {
      if (el.classList.contains("is-revealed")) return;

      if (!el.classList.contains("reveal-on-scroll")) {
        el.classList.add("reveal-on-scroll", "reveal-fade-up");
      }

      if (delay > 0 && !el.style.transitionDelay) {
        el.style.transitionDelay = `${delay}ms`;
      }

      const rect = el.getBoundingClientRect();
      // If already visible in the initial viewport on load, show immediately
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-revealed");
      } else {
        observer.observe(el);
      }
    };

    const scanAndObserveAll = () => {
      // 1. Explicitly marked elements
      document
        .querySelectorAll<HTMLElement>(
          ".reveal-on-scroll:not(.is-revealed), [data-reveal]:not(.is-revealed)"
        )
        .forEach((el) => observeElement(el));

      // 2. Sections across all pages (excluding fixed modals, drawers, navbar)
      const sections = document.querySelectorAll<HTMLElement>(
        "main section:not(.no-reveal):not([role='dialog'] *):not(.fixed *), div > section:not(.no-reveal):not([role='dialog'] *):not(.fixed *)"
      );

      sections.forEach((sec) => {
        // Observe section header / intro text
        const sectionHeader = sec.querySelector<HTMLElement>(
          ".text-center, .mb-12, .mb-10, h2"
        );
        if (sectionHeader && !sectionHeader.closest("[role='dialog'], .fixed")) {
          observeElement(sectionHeader);
        }

        // Observe individual cards/items inside grids (doctors, services, reviews, features, stats)
        const gridItems = sec.querySelectorAll<HTMLElement>(
          ".grid > *:not(.no-reveal):not([role='dialog'] *):not(button):not(input), [class*='grid-cols'] > *:not(.no-reveal):not([role='dialog'] *):not(button):not(input)"
        );

        if (gridItems.length > 0) {
          gridItems.forEach((card, index) => {
            // Generous progressive stagger for items in the same row (0ms, 140ms, 280ms, 420ms)
            const staggerDelay = (index % 4) * 140;
            observeElement(card, staggerDelay);
          });
        } else {
          // If no inner grid, observe the section container itself
          observeElement(sec);
        }
      });
    };

    // Initial scan after paint
    const timer = setTimeout(scanAndObserveAll, 60);

    // Watch for dynamic DOM changes (e.g. filtering doctors or services)
    const mutationObserver = new MutationObserver(() => {
      scanAndObserveAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
