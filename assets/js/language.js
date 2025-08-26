// Variables

let currentLanguage = localStorage.getItem("language");
let languagesSelect = document.getElementById("languages-select");

const languages = ['en', 'fr', 'de', 'it'];
let translations = {};

// ==========================

// Get the user's browser language

function getUserLanguage() {
    const lang = navigator.language || navigator.languages[0];
    return lang.split("-")[0];
}

// Function that loads the language options in the DOM

function loadLanguageOptions() {
    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang.toUpperCase();
        languagesSelect.appendChild(option);
    });
}

// Load the translations from the JSON file

async function loadTranslations(lang) {
    try {
        const response = await fetch(`../assets/translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load translations for ${lang}`);
        }
        translations = await response.json();
        translatePage();
    } catch (error) {
        console.error(error);
    }
};

// Translate the page content

function translatePage() {
    for (const translation in translations) {
        if (document.getElementById(translation) != null) {
            document.getElementById(translation).innerHTML = translations[translation];
        }
    }
}

// Initial setup on page load

document.addEventListener("DOMContentLoaded", () => {

    // Initial language setup

    loadLanguageOptions();

    // See of the browser language is supported, otherwise fallback to English

    if (currentLanguage === null) {
        if (languages.includes(getUserLanguage())){
            console.log("No user language set, using browser language.");
            currentLanguage = getUserLanguage();
        } else {
            console.log("No user language set, browser language not supported, using English.");
            currentLanguage = 'en';
        }
    }

    // Load the translations and set the dropdown value

    console.log("User language detected as: " + currentLanguage);
    loadTranslations(currentLanguage);
    languagesSelect.value = currentLanguage;

    // Dropdown interactions

    languagesSelect.addEventListener("change", (e) => {
        loadTranslations(e.target.value);
        localStorage.setItem("language", e.target.value);
        console.log("New user language set: " + e.target.value);
    });
});

