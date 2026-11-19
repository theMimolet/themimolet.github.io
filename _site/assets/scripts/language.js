// Variables
const supportedLanguages = ["en", "fr"];
const currentLanguage = localStorage.getItem("language");
let languagesSelect = document.getElementById("languages-select");
let pathname = window.location.pathname;
const { lang } = document.body.dataset;

// ==========================

// Get the user's browser language
function getUserLanguage() {
    let preferredLanguage = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
    return preferredLanguage.toLowerCase().split("-")[0];
}

// Get the root path of the current URL, removing any language code if present
function getRootPath() {

    if (supportedLanguages.includes(lang)) {
        return pathname.replace(new RegExp(`^/${lang}`), "") || "/";
    }

    return pathname;
}

// Convert a pathname to a localized path based on the user's language - if it's English, it returns the root path, otherwise it adds the language code to the path
function toLocalPath(locale) {

    let rootPath = getRootPath();

    // If the locale is English, we want to remove any language code from the path
    if (locale === "en") {
        return rootPath;
    } else {
        // If the locale is not English, we want to add the language code to the path
        return `/${locale}${rootPath}`;
    }
}

// Load the language options in the DOM
function loadLanguageOptions() {
    supportedLanguages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang.toUpperCase();
        languagesSelect.appendChild(option);
    });
}

function moveToTarget(targetPath) {
    if (targetPath !== window.location.pathname) {
        window.location.replace(`${targetPath}${window.location.search}${window.location.hash}`);
    }
}

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {

    // Initial language setup
    loadLanguageOptions();
    let userLanguage = getUserLanguage();

    languagesSelect.value = lang;

    // Handle currentLanguage == null
    if (currentLanguage == null) {
        console.log("CurrentLanguage not found, checking his language.");
        if (!supportedLanguages.includes(userLanguage)) {
            console.log("Browser language not supported, using English.");
            userLanguage = "en";
        }
        localStorage.setItem("language", userLanguage);
        moveToTarget(toLocalPath(userLanguage));
        return
    }

    if (currentLanguage != lang) {
        moveToTarget(toLocalPath(currentLanguage));
        return
    }

    // Dropdown interactions
    languagesSelect.addEventListener("change", (e) => {
        console.log("New user language set: " + e.target.value);
        localStorage.setItem("language", e.target.value);
        moveToTarget(toLocalPath(e.target.value));
        return
    });
});
