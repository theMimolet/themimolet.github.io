$(document).ready(function(){ 
    $("#languages-dropdown").hide();
    
    let currentLanguage = localStorage.getItem("language");

    // Setup

    if (currentLanguage === null) {
        currentLanguage = "english";
    } else {
        showLanguage(currentLanguage);
    };

    // Languages

    $("#languages-btn").click(() => menuToggle(true));

    // Language Menu Function

    function menuToggle(showMenu){
        if (showMenu){
            $("#languages-dropdown").show();
            $("#languages-btn").hide();
        } else {
            $("#languages-dropdown").hide();
            $("#languages-btn").show();
        }
    }

    function showLanguage(language){
        $(".italian").hide();
        $(".german").hide();
        $(".french").hide();
        $(".english").hide();
        $("."+language).show();
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

    // Buttons click

    $("#english-btn").click(() => changeLanguage("english"));
    $("#french-btn").click(() => changeLanguage("french"));
    $("#german-btn").click(() => changeLanguage("german"));
    $("#italian-btn").click(() => changeLanguage("italian"));

});
