
// Variables

let isDarkMode = JSON.parse(localStorage.getItem("dark_mode"));
let bodyClasses = document.body.classList

// Setup 

if (isDarkMode === null) {
    isDarkMode = false;
};

darkModeToggle(isDarkMode);

// Toggle Function

function darkModeToggle(isDark){
    if (isDark){
        bodyClasses.replace("dark","light");
        console.log("Dark mode on");
    } else {
        bodyClasses.replace("light","dark");
        console.log("Dark mode off");
    }
}

// Button interactions

function darkModeButton(){
    if(isDarkMode === false){
        darkModeToggle(true);
        isDarkMode = true;
        localStorage.setItem("dark_mode", true.toString());
    } else {
        darkModeToggle(false); 
        isDarkMode = false;
        localStorage.setItem("dark_mode", false.toString());
    }
}
