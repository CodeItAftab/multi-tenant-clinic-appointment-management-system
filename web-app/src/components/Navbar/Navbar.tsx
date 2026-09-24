"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, ChevronDown, Menu, X } from "lucide-react";
import { changeGoogleTranslateLanguage } from "@/utils/googleTranslate";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Timings & Location", href: "/location" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    const langCode = value === "Hindi" ? "hi" : "en";
    changeGoogleTranslateLanguage(langCode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled
        ? "border-b border-gray-200 shadow-sm"
        : "border-b border-transparent shadow-none"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-22 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#e0f7fa] ring-1 ring-[#b2ebf2] shadow-sm">
              <Plus
                size={26}
                strokeWidth={5}
                absoluteStrokeWidth
                className="h-6.5 w-6.5 text-[#4bb1c8] sm:h-7.5 sm:w-7.5"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-[20px] font-bold text-[#282828] sm:text-[24px]">
                HMS
              </h1>
              <p className="text-[11px] font-medium tracking-wide text-[#282828] sm:text-[12px]">
                Your Health, Our Priority
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-6 text-[14px] font-medium text-[#282828] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#4bb1c8]"
              >
                {link.name}

                <span className="absolute left-1/2 bottom-4.5 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#4bb1c8] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side: Language + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language selector (desktop) */}
            <div className="relative hidden lg:block">
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="font-medium appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white/90 py-2 sm:py-2.5 lg:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-[12px] text-[#282828] shadow-sm outline-none transition-all hover:border-[#4bb1c8] hover:shadow-md focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa] sm:text-[14px]"
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 sm:right-3"
              />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-[#282828] hover:text-[#4bb1c8] focus:outline-none lg:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenu ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="animate-in fade-in slide-in-from-top-2 border-t border-gray-100 py-4 duration-200 lg:hidden">
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

              {/* Language selector (mobile) */}
              <div className="relative mt-2 px-4">
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="w-full font-medium appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white/90 py-2.5 pl-4 pr-10 text-[14px] text-[#282828] shadow-sm outline-none transition-all hover:border-[#4bb1c8] hover:shadow-md focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa]"
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिंदी</option>
                </select>

                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-7 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;