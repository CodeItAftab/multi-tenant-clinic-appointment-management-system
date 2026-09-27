"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import {
  getCurrentLanguage,
  changeGoogleTranslateLanguage,
  SupportedLanguage,
} from "@/utils/googleTranslate";

interface LanguageSelectorProps {
  className?: string;
  isMobileDrawer?: boolean;
}

export function LanguageSelector({
  className = "",
  isMobileDrawer = false,
}: LanguageSelectorProps) {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  // Sync state on mount and listen to global language change events
  useEffect(() => {
    setLanguage(getCurrentLanguage());

    const handleLanguageUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ language: SupportedLanguage }>;
      if (customEvent.detail?.language) {
        setLanguage(customEvent.detail.language);
      }
    };

    window.addEventListener("hms-language-change", handleLanguageUpdate);
    return () => {
      window.removeEventListener("hms-language-change", handleLanguageUpdate);
    };
  }, []);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
    changeGoogleTranslateLanguage(newLang);
  };

  // Full-width version rendered inside the mobile hamburger menu drawer
  if (isMobileDrawer) {
    return (
      <div className={`relative w-full ${className}`}>
        <label className="mb-1.5 block text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Language / भाषा
        </label>
        <div className="relative">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as SupportedLanguage)}
            aria-label="Select Language"
            className="w-full appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-10 text-[14px] font-medium text-[#282828] shadow-sm outline-none transition-all hover:border-[#4bb1c8] focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa]"
          >
            <option value="en">English (English)</option>
            <option value="hi">हिंदी (Hindi)</option>
          </select>
          <Globe
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#4bb1c8]"
          />
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
    );
  }

  // Header navbar version (desktop only, hidden on mobile front navbar)
  return (
    <div className={`relative hidden lg:flex items-center ${className}`}>
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as SupportedLanguage)}
        aria-label="Select Language"
        className="appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white/95 py-2 pl-8 pr-8 text-[13px] lg:text-[14px] font-medium text-[#282828] shadow-sm outline-none transition-all hover:border-[#4bb1c8] hover:shadow-md focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa]"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>

      <Globe
        size={14}
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#4bb1c8]"
      />

      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}