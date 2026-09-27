/**
 * High-reliability Google Translate controller for desktop & mobile devices.
 */

export type SupportedLanguage = "en" | "hi";

/**
 * Returns currently active language from cookie or DOM
 */
export function getCurrentLanguage(): SupportedLanguage {
  if (typeof document === "undefined") return "en";

  try {
    const match = document.cookie.match(/googtrans=\/en\/(en|hi)/);
    if (match && (match[1] === "en" || match[1] === "hi")) {
      return match[1] as SupportedLanguage;
    }

    const combo = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo, #google_translate_element select"
    );
    if (combo && (combo.value === "en" || combo.value === "hi")) {
      return combo.value as SupportedLanguage;
    }
  } catch (err) {
    console.error("Error reading language state:", err);
  }

  return "en";
}

/**
 * Safely sets Google Translate cookies across all mobile and desktop browsers
 */
function setTranslationCookies(langCode: SupportedLanguage) {
  const cookieValue = `/en/${langCode}`;
  const host = window.location.hostname;

  // 1. Root path cookie (universal standard)
  document.cookie = `googtrans=${cookieValue}; path=/;`;

  // 2. Extra handling when resetting back to English
  if (langCode === "en") {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `googtrans=/en/en; path=/;`;
  }

  // 3. Domain cookies (only if not localhost or IP)
  const isLocalOrIp =
    host === "localhost" ||
    host === "127.0.0.1" ||
    /^\d+\.\d+\.\d+\.\d+$/.test(host);

  if (!isLocalOrIp) {
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${host};`;
    const parts = host.split(".");
    if (parts.length > 1) {
      const rootDomain = parts.slice(-2).join(".");
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${rootDomain};`;
    }
  }
}

/**
 * Changes language and triggers translation in DOM
 */
export function changeGoogleTranslateLanguage(
  langCode: SupportedLanguage,
  callback?: (lang: SupportedLanguage) => void
) {
  setTranslationCookies(langCode);

  // Notify all UI components in the app to sync their active language state
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("hms-language-change", { detail: { language: langCode } })
    );
  }

  if (callback) {
    callback(langCode);
  }

  const triggerChange = (): boolean => {
    const combo = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo, #google_translate_element select"
    );

    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      combo.dispatchEvent(new Event("input", { bubbles: true }));
      return true;
    }
    return false;
  };

  // Attempt instant trigger
  if (!triggerChange()) {
    // Mobile browsers may load or render the combo asynchronously; retry smoothly
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (triggerChange() || attempts >= 20) {
        clearInterval(interval);
        // Fallback reload if script didn't mount within 2 seconds
        if (attempts >= 20 && !document.querySelector(".goog-te-combo")) {
          window.location.reload();
        }
      }
    }, 100);
  }
}
