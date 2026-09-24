
export function changeGoogleTranslateLanguage(langCode) {

    const cookieValue =
        langCode === "en" ? "" : `/en/${langCode}`;

    document.cookie = `googtrans=${cookieValue};path=/`;

    document.cookie = `googtrans=${cookieValue};path=/;domain=${window.location.hostname}`;

    const combo = document.querySelector(
        ".goog-te-combo"
    );

    if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
    } else {

        window.location.reload();
    }

}
