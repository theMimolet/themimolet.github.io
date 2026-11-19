// Variables

let currentLanguage = localStorage.getItem("language");

const languages = ['en', 'fr', 'de', 'it'];
let translations = {};

// ==========================

// Get the user's browser language

function getUserLanguage() {
    const lang = navigator.language || navigator.languages[0];
    return lang.split("-")[0];
}

// Load the translations from the JSON file

function setLang(lang) {
    document.body.setAttribute('lang', lang);
};

// Initial setup on page load

document.addEventListener("DOMContentLoaded", () => {

    // See of the browser language is supported, otherwise fallback to English

    if (currentLanguage === null) {
        if (languages.includes(getUserLanguage())) {
            currentLanguage = getUserLanguage();
            console.log("Using " + currentLanguage + " as language");
        } else {
            console.log("No user language set, browser language not supported, using English.");
            currentLanguage = 'en';
        }
    }

    // Load the translations and set the dropdown value

    console.log("User language detected as: " + currentLanguage);
    setLang(currentLanguage);
});

