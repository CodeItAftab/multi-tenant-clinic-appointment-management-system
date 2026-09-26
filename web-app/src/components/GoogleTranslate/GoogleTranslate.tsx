"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // 1. Define callback before loading script
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            multilanguagePage: false,
          },
          "google_translate_element"
        );
      }
    };

    // 2. Prevent duplicate script insertion on fast refresh / route changes
    if (document.getElementById("google-translate-script")) {
      if (window.google?.translate?.TranslateElement) {
        window.googleTranslateElementInit();
      }
      return;
    }

    // 3. Inject Google Translate script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "none", visibility: "hidden" }}
    />
  );
}

/**
 * High-speed language switching utility function.
 * Call this from your custom Navbar or Language Switcher component.
 */
export function changeLanguage(langCode: "en" | "hi") {
  const currentHost = window.location.hostname;
  
  // Set translation cookies across current host & top-level domain for fast cookie lookup
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${currentHost}`;
  document.cookie = `googtrans=/en/${langCode}; path=/;`;

  const selectElement = document.querySelector<HTMLSelectElement>(
    "#google_translate_element select"
  );

  if (selectElement) {
    selectElement.value = langCode;
    // Dispatch events to trigger Google's internal observer
    selectElement.dispatchEvent(new Event("change", { bubbles: true }));
  } else {
    // Fallback: reload page if Google script hasn't mounted into DOM yet
    window.location.reload();
  }
}