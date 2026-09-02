// utils/googleTranslate.js
// Drives Google Translate's hidden <select> programmatically, and
// also sets the googtrans cookie so the choice survives a page reload.

export function changeGoogleTranslateLanguage(langCode) {
    // "en" means "show original" — Google's cookie format is /source/target
    const cookieValue =
        langCode === "en" ? "" : `/en/${langCode}`;

    document.cookie = `googtrans=${cookieValue};path=/`;
    // Some browsers need the domain-scoped cookie too
    document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`;

    const combo = document.querySelector(
        ".goog-te-combo"
    );

    if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
    } else {
        // Widget script hasn't finished loading yet — fall back to reload,
        // the cookie set above will make Google Translate pick it up.
        window.location.reload();
    } 
    
}
// utils/googleTranslate.js
// Drives Google Translate's hidden <select> programmatically.
// Retries for a couple of seconds instead of reloading immediately,
// since the widget script can take a moment to finish mounting.
