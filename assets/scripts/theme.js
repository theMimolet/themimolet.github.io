// Variables

let isDarkTheme = JSON.parse(localStorage.getItem("darkTheme"));
let documentClasses = document.documentElement.classList;
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// ==========================

console.log("Dark theme is " + isDarkTheme);

// Check for system preference if no preference is saved

if (isDarkTheme === null) {
    if (colorSchemeQuery.matches) {
        setDarkTheme(true);

    } else {
        setDarkTheme(false);
    }
} else {
    setDarkTheme(isDarkTheme);
}

// Function that sets the theme

function setDarkTheme(isDark) {

    if (documentClasses.length > 0) {
        documentClasses.remove(...documentClasses);
    };

    isDarkTheme = isDark;
    let newTheme = isDark ? "dark" : "light";

    documentClasses.add(newTheme + "-theme");
    document.documentElement.classList.add(newTheme + '-theme');
    console.log("Switching to " + newTheme + " theme");
}

// Toggle the theme when the button is clicked

function darkThemeButton() {
    localStorage.setItem("darkTheme", (!isDarkTheme).toString());
    setDarkTheme(!isDarkTheme);
}

// Listen for changes in system preference

colorSchemeQuery.addEventListener('change', (event) => {
    if (event.matches) {
        setDarkTheme(true);
    } else {
        setDarkTheme(false);
    }
});
