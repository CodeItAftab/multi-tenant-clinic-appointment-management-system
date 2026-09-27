"use client";

import { useEffect } from "react";
import {
  changeGoogleTranslateLanguage,
  SupportedLanguage,
} from "@/utils/googleTranslate";

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
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    />
  );
}

/**
 * High-speed language switching utility function.
 */
export function changeLanguage(langCode: SupportedLanguage) {
  changeGoogleTranslateLanguage(langCode);
}