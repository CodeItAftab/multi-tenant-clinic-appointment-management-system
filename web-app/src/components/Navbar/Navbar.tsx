"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Menu, X } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Timings & Location", href: "/location" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows past the
  // lg breakpoint (e.g. rotating a tablet, resizing a browser window),
  // so it never stays open behind the desktop nav.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 w-full bg-white transition-shadow duration-300 ${
        isScrolled
          ? "border-b border-gray-200 shadow-sm"
          : "border-b border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* 
          ===================================================================================================
          [NAVBAR HEIGHT MODIFICATION COMMENT / NAVBAR ऊंचाई में बदलाव]:
          Navbar height has been reduced here:
          - Phone / Mobile (< sm): h-[62px] (Previously h-[88px] — reduced by 26px for a compact, sleek header)
          - Tablet (sm): sm:h-[68px]
          - Laptop / Desktop (lg): lg:h-[74px] (Previously h-[88px] — slightly reduced by 14px as requested)
          ===================================================================================================
        */}
        <div className="flex h-[62px] sm:h-[68px] lg:h-[74px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-[#e0f7fa] ring-1 ring-[#b2ebf2] shadow-sm">
              <Plus
                size={22}
                strokeWidth={5}
                absoluteStrokeWidth
                className="h-5 w-5 text-[#4bb1c8] sm:h-6.5 sm:w-6.5"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-[18px] font-bold text-[#282828] sm:text-[22px] lg:text-[23px]">
                HMS
              </h1>
              <p className="text-[10px] font-medium tracking-wide text-[#282828] sm:text-[11.5px]">
                Your Health, Our Priority
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-5 text-[14px] font-medium text-[#282828] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#4bb1c8]"
              >
                {link.name}

                <span className="absolute left-1/2 bottom-3.5 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#4bb1c8] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side: desktop language selector + mobile menu toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector className="hidden lg:flex" />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
              aria-controls="mobile-nav-menu"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl text-[#282828] transition-colors hover:bg-[#e0f7fa] hover:text-[#4bb1c8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] lg:hidden"
            >
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — rendered below the header row, not inside it,
            so it appears as a full-width panel instead of being squeezed
            into the fixed-height header bar. */}
        {mobileMenu && (
          <div
            id="mobile-nav-menu"
            className="animate-in fade-in slide-in-from-top-2 border-t border-gray-100 py-4 duration-200 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#282828] transition-colors hover:bg-[#e0f7fa] hover:text-[#4bb1c8]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Language selector in mobile drawer */}
              <div className="mt-3 border-t border-gray-100 pt-3 px-4">
                <LanguageSelector isMobileDrawer={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;