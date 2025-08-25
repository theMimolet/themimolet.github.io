
// Variables

let currentLanguage = localStorage.getItem("language");
let languagesDropdown = document.getElementById("languages-dropdown");
let languagesButton = document.getElementById("languages-btn");

// Translation system

let translations = {};

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
}

// Translate the page content

function translatePage() {
    for (const translation in translations) {
        if (document.getElementById(translation) != null){
            document.getElementById(translation).innerHTML = translations[translation];
        }
    }
}

// Get the user's browser language

function getUserLanguage() {
    const lang = navigator.language || navigator.languages[0];
    return lang.split("-")[0];
}

// Initial setup on page load

document.addEventListener("DOMContentLoaded", () => {

    // Retrocompatibility with old variables stored & initial language setup

    if (currentLanguage === null){
        currentLanguage = getUserLanguage();
    } else if (currentLanguage.length > 2) {
        switch (currentLanguage) {
            case "english":
                currentLanguage = "en";
                break;
            case "french":
                currentLanguage = "fr";
                break;
            case "german":
                currentLanguage = "de";
                break;
            case "italian":
                currentLanguage = "it";
                break;
            default:
                currentLanguage = getUserLanguage();
                break;
        }
        loadTranslations(currentLanguage);
    };

    // Load the translations and set the dropdown value

    console.log("User language detected as: " + currentLanguage);
    loadTranslations(currentLanguage);
    document.getElementById("languages-dropdown").value = currentLanguage;

    // Dropdown interactions

    document.getElementById("languages-dropdown").addEventListener("change", (e) => {
        loadTranslations(e.target.value);
        localStorage.setItem("language", e.target.value);
        console.log("New user language set: " + e.target.value);
    });
});

