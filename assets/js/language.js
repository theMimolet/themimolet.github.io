
// Variables

let currentLanguage = localStorage.getItem("language");
let languagesDropdown = document.getElementById("languages-dropdown");
let languagesButton = document.getElementById("languages-btn");

const languages = ["english", "french", "german", "italian"];

languagesDropdown.style.display = "none";
    
// Setup

if (currentLanguage === null) {
    currentLanguage = "english";
    showLanguage(currentLanguage);
} else {
    showLanguage(currentLanguage);
};

// Function that shows/hides the menu

function menuToggle(showMenu){
    if (showMenu){
        languagesDropdown.style.display = "block";
        languagesButton.style.display = "none";
    } else {
        languagesDropdown.style.display = "none";
        languagesButton.style.display = "block";
    }
}

// Function that goes through all the language classes and only shows the selected language

function showLanguage(language){
    for (const lang of languages) {
        if (lang != language){
            for (const el of document.getElementsByClassName(lang)) {
                el.style.display = "none";
            }
        } else {
            for (const el of document.getElementsByClassName(language)) {
                el.style.display = "block";
            }
        }
    }
}

// Function that switches languages

function changeLanguage(language){
    if (currentLanguage != language){
        showLanguage(language);

        currentLanguage = language;
        localStorage.setItem("language", language);

        console.log("Language is now set to " +  language);
    }
    menuToggle(false);
}