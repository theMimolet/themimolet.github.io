$(document).ready(function(){
    
    // Variables

    let isDarkMode = JSON.parse(localStorage.getItem("dark_mode"));

    // Setup 

    if (isDarkMode === null) {
        isDarkMode = false;
    };

    darkModeToggle(isDarkMode);
  
    // Toggle Function

    function darkModeToggle(isDark){
        if (isDark){
            $("body").addClass("dark");
            $("body").removeClass("light");
            console.log("Dark mode on");
        } else {
            $("body").addClass("light");
            $("body").removeClass("dark");
            console.log("Dark mode off");
        }
    }

  // Button interactions

    $("#dark-mode-btn").click(function(){
        if(isDarkMode === false){
            darkModeToggle(true);
            isDarkMode = true;
            localStorage.setItem("dark_mode", true.toString());
        } else {
            darkModeToggle(false); 
            isDarkMode = false;
            localStorage.setItem("dark_mode", false.toString());
        }
    });
});