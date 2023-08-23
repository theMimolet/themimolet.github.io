$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = JSON.parse(localStorage.getItem("dark_mode"));
  let language_display = false;
  let language = localStorage.getItem("language");
  let show_game = "none";
  let show_org = "none";
  
  // Light mode function

  function dark_mode_off(){
    
    $("body").addClass("light");
    $("body").removeClass("dark");
    
    console.log("Dark mode off");
  };
  
  // Dark mode function

  function dark_mode_on(){
    
    $("body").addClass("dark");
    $("body").removeClass("light");

    console.log("Dark mode on");
  };


  // Language functions

  function language_change_log(){
    console.log("Language is now set to " +  language);
  };

  function set_english(){
    $(".english").show();
    $(".french").hide();
    $(".german").hide();
    language_change_log();
  };

  function set_french(){
    $(".french").show();
    $(".german").hide();
    $(".english").hide();
    language_change_log();
  };

  function set_german(){
    $(".german").show();
    $(".french").hide();
    $(".english").hide();
    language_change_log();
  };

  // Setup 

  if (dark_mode === null) {
    dark_mode = false;
  };

  if (dark_mode === true){
    dark_mode_on();
  };
  if (dark_mode === false){
    dark_mode_off();
  };

  if (language === null) {
    language = "english";
  };

  if (language === "english"){
    set_english();
  };
  if (language === "french"){
    set_french();
  };
  if (language === "german"){
    set_german();
  };

  $("#languages-dropdown").hide();
  $(".save-nautica").hide();
  $(".totem-destiny").hide();

  
// Button interactions

  // Dark Mode

  $("#dark-mode-btn").click(function(){
    if(dark_mode === false){
      dark_mode_on();
      dark_mode = true;
      localStorage.setItem("dark_mode", true.toString());
    } else {
      dark_mode_off(); 
      dark_mode = false;
      localStorage.setItem("dark_mode", false.toString());
    }
  });

  // Languages

  $("#languages-btn").click(function(){
    if (language_display === false){
      $("#languages-dropdown").show();
      language_display = true;
    } else {
      $("#languages-dropdown").hide();
      language_display = false;
    }
  });

  // English

  $("#english-btn").click(function(){
    if (language != "english"){
      set_english();
      language = "english";
      localStorage.setItem("language", "english");  
    };    
  });

  // French

  $("#french-btn").click(function(){
    if (language != "french"){
      set_french();
      language = "french";
      localStorage.setItem("language", "french");  
    };    
  });

  // German

  $("#german-btn").click(function(){
    if (language != "german"){
      set_german();
      language = "german";
      localStorage.setItem("language", "german");  
    };    
  });


  // Game gallery


  function game_reset(){
    $(".totem-destiny").hide();
    $(".save-nautica").hide();
    $("#save-nautica-thumbnail").css({"height":"90%", "box-shadow": "0px 0px 5px 0px black"});
    $("#totem-destiny-thumbnail").css({"height":"90%", "box-shadow": "0px 0px 5px 0px black"});
  };

  $("#save-nautica-thumbnail").click(function(){
    if (show_game !== "SaveNautica"){
      game_reset();
      $(".save-nautica").show();
      $("#save-nautica-thumbnail").css({"height":"93%", "box-shadow": "0px 0px 15px 0px black"});
      show_game = "SaveNautica";
    } else {
      game_reset();
      $(".save-nautica").hide();
      show_game = "none";
    }
  });

  $("#totem-destiny-thumbnail").click(function(){
    if (show_game !== "TotemDestiny"){
      game_reset();
      $(".totem-destiny").show();
      $("#totem-destiny-thumbnail").css({"height":"93%", "box-shadow": "0px 0px 15px 0px black"});
      show_game = "TotemDestiny";
    } else {
      game_reset();
      $(".totem-destiny").hide();
      show_game = "none";
    }
  });

  $("#colourguess-thumbnail").click(function(){
    window.open("https://themimolet.github.io/colourguess", "_blank");
  });

  console.log("The code has run successfully");
});