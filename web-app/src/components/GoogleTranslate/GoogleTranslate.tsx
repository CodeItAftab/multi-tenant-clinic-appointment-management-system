"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

function GoogleTranslate() {
    useEffect(() => {
        // Avoid loading the script twice (e.g. on fast refresh / navigation)
        if (document.getElementById("google-translate-script")) return;

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,hi",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // This div is required by Google Translate, but we hide it —
    // we drive translation from our own Navbar dropdown instead.
    return <div id="google_translate_element" className="hidden" />;
}

export default GoogleTranslate;