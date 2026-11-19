const supportedLanguages = ["fr"]
let currentLanguage = localStorage.getItem("language");

// Get the user's browser language
function getUserLanguage() {
    const preferredLanguage = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
    return preferredLanguage.toLowerCase().split("-")[0];
}

function toLocalPath(locale, pathname) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
        return pathname;
    }

    return pathname === "/" ? `/${locale}/` : `/${locale}${pathname}`;
}

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {

    localStorage.setItem("is_first_visit", false);

    // Get the user's language - if it's not English and supported, redirect to the corresponding localized path.
    const userLanguage = getUserLanguage();

    if (userLanguage === "en" || !supportedLanguages.includes(userLanguage)) {
        return;
    }

    if (currentLanguage === null) {
        currentLanguage = userLanguage;
        localStorage.setItem("language", currentLanguage);
    }

    const pathname = window.location.pathname;
    const targetPath = toLocalPath(userLanguage, pathname);

    if (targetPath !== pathname) {
        window.location.replace(`${targetPath}${window.location.search}${window.location.hash}`);
    }
});
