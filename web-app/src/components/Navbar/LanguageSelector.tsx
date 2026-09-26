import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // adjust import path if needed

export function LanguageSelector() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  // Read cookie on initial mount to keep dropdown in sync with current translation state
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(en|hi)/);
    if (match && (match[1] === "en" || match[1] === "hi")) {
      setLanguage(match[1]);
    }
  }, []);

  const handleLanguageChange = (langCode: "en" | "hi") => {
    setLanguage(langCode);

    // 1. Set Google Translate Cookie across paths and hostname for fast lookup
    const currentHost = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${currentHost}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;

    // 2. Trigger Google Translate hidden select dropdown
    const selectElement = document.querySelector<HTMLSelectElement>(
      "#google_translate_element select"
    );

    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Fallback reload if Google script hasn't mounted into DOM yet
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Language selector (desktop) */}
      <div className="relative hidden lg:block">
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as "en" | "hi")}
          className="font-medium appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white/90 py-2 sm:py-2.5 lg:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-[12px] text-[#282828] shadow-sm outline-none transition-all hover:border-[#4bb1c8] hover:shadow-md focus:border-[#4bb1c8] focus:ring-2 focus:ring-[#e0f7fa] sm:text-[14px]"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 sm:right-3"
        />
      </div>
    </div>
  );
}