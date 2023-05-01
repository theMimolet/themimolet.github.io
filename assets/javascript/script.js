$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = JSON.parse(localStorage.getItem("dark_mode"));
  let language_display = false;
  let language = localStorage.getItem("language");
  let show_game = "none";
  
  // Light mode function

  function dark_mode_off(){
    
    $(".dark-mode-on").hide();
    $(".dark-mode-off").show();

    $("*").css({"color":"black"});
    $("body").css({"background-color":"rgb(235, 235, 235)"});

    $("main").css({"background-color":"rgb(255, 255, 255)","box-shadow": "0px 0px 7px 1px gray"});
    $(".daButtons").css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    $("#languages-dropdown div").css({"background-color":"rgba(243, 241, 239, 0.8)"});
    $("#english-btn").css({"border-bottom":"solid black 1px"});
    $("#french-btn").css({"border-bottom":"solid black 1px"});
    
    $(".profile_pic").css({"border": "solid rgb(255, 255, 255) 5px"});
    $(".socials div").css({"background-color":"rgba(255, 255, 255, 0.7)"});
    
    $("#game-gallery").css({"background-color":"rgba(212, 208, 204, 0.7)"});
    $("#game-description table td").css({"border": "solid black 2px"});
    $(".play").css({"background-color":"lime"});
    
    console.log("Dark mode off");
  };
  
  // Dark mode function

  function dark_mode_on(){
    
    $(".dark-mode-off").hide();
    $(".dark-mode-on").show();

    $("*").css({"color":"rgb(220, 220, 220)"}); 
    $("body").css({"background-color":"rgb(36, 36, 36)"});

    $("main").css({"background-color":"rgb(51, 51, 51)","box-shadow": "0px 0px 7px 1px gray"});
    $(".daButtons").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $("#languages-dropdown div").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $("#english-btn").css({"border-bottom":"solid rgba(220, 220, 220, 0.7) 1px"});
    $("#french-btn").css({"border-bottom":"solid rgba(220, 220, 220, 0.7) 1px"});

    $(".profile_pic").css({"border": "solid rgb(51, 51, 51) 5px"});
    $(".socials div").css({"background-color":"rgba(51, 51, 51, 0.7)"});

    $("#game-description table td").css({"border": "solid  2px rgb(200, 200, 200)"});
    $("#game-gallery").css({"background-color":"rgba(112, 108, 104, 0.7)"});
    $(".play").css({"background-color":"rgb(32, 99, 32)"});
    
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


  // Button hovering

  $(".daButtons").hover(function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(212, 208, 204, 0.7)"});
    } else {
      $(this).css({"background-color":"rgba(75, 75, 75, 0.7)"});
    }
  }, function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    } else {
      $(this).css({"background-color":"rgba(51, 51, 51, 0.7)"});
    }
  });

  $("#languages-dropdown div").hover(function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(212, 208, 204, 0.7)"});
    } else {
      $(this).css({"background-color":"rgba(75, 75, 75, 0.7)"});
    }
  }, function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    } else {
      $(this).css({"background-color":"rgba(51, 51, 51, 0.7)"});
    }
  });

  $(".socials div").hover(function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(212, 208, 204, 0.7)"});
    };
    if(dark_mode === true){
      $(this).css({"background-color":"rgba(75, 75, 75, 0.7)"});
    }
  }, function(){
    if(dark_mode === false){
      $(this).css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    } else {
      $(this).css({"background-color":"rgba(51, 51, 51, 0.7)"});
    }
  });

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
});