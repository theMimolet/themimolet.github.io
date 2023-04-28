$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = JSON.parse(localStorage.getItem("dark_mode"));
  let language_display = false;
  let language = localStorage.getItem("language");
  let show_game = "none";
  

  // Light mode


  function dark_mode_off(){
    
    $(".dark-mode-on").hide();
    $(".dark-mode-off").show();

    $("*").css({"color":"black"});
    $(".play a span").css({"color":"white"});
    $("body").css({"background-color":"rgb(235, 235, 235)"});
    $("main").css({"background-color":"rgb(255, 255, 255)","box-shadow": "0px 0px 7px 1px gray"});
    $(".daButtons").css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    $(".socials div").css({"background-color":"rgba(255, 255, 255, 0.7)"});
    $(".play").css({"background-color":"lime"});
    $("#game-description table td").css({"border": "solid black 2px"})
    $("#game-gallery").css({"background-color":"rgba(212, 208, 204, 0.7)"})
    $("#languages-dropdown div").css({"background-color":"rgba(243, 241, 239, 0.8)"});
    $(".profile_pic").css({"border": "solid rgb(255, 255, 255) 5px"});

    console.log("Dark mode off");
  };
  
  // Dark mode

  function dark_mode_on(){
    
    $(".dark-mode-off").hide();
    $(".dark-mode-on").show();

    $("*").css({"color":"rgb(220, 220, 220)"}); 
    $("body").css({"background-color":"rgb(36, 36, 36)"});
    $("main").css({"background-color":"rgb(51, 51, 51)","box-shadow": "0px 0px 7px 1px gray"});
    $(".daButtons").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $(".socials div").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $(".play").css({"background-color":"rgb(32, 99, 32)"});
    $("#game-description table td").css({"border": "solid  2px rgb(200, 200, 200)"})
    $("#game-gallery").css({"background-color":"rgba(112, 108, 104, 0.7)"})
    $("#languages-dropdown div").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $(".profile_pic").css({"border": "solid rgb(51, 51, 51) 5px"});

    console.log("Dark mode on");
  };


  // Language 

  function set_english(){
    $(".english").show();
    $(".french").hide();
    $(".german").hide();
    console.log("Language is now set to english");
  };

  function set_french(){
    $(".french").show();
    $(".german").hide();
    $(".english").hide();
    console.log("Language is now set to french");
  };

  function set_german(){
    $(".german").show();
    $(".french").hide();
    $(".english").hide();
    console.log("Language is now set to german");
  };

  // Setup 

  if (dark_mode === null) {
    dark_mode = false;
  };

  console.log(dark_mode)
  if (dark_mode === true){
    dark_mode_on();
  };
  if (dark_mode === false){
    dark_mode_off();
  };

  if (language === null) {
    language = "english";
  };

  console.log(language)
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

  
  // Interactions avec les boutons


  // Hover des boutons

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
      console.log("dark_mode_off");
      $(this).css({"background-color":"rgba(212, 208, 204, 0.7)"});
    };
    if(dark_mode === true){
      console.log("dark_mode_on");
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

  // Langues

  $("#languages-btn").click(function(){
    if (language_display === false){
      $("#languages-dropdown").show();
      language_display = true;
    } else {
      $("#languages-dropdown").hide();
      language_display = false;
    }
  });

  // Anglais

  $("#english-btn").click(function(){
    if (language != "english"){
      set_english();
      language = "english";
      localStorage.setItem("language", "english");  
    };    
  });

  // Français

  $("#french-btn").click(function(){
    if (language != "french"){
      set_french();
      language = "french";
      localStorage.setItem("language", "french");  
    };    
  });

  // Allemand

  $("#german-btn").click(function(){
    if (language != "german"){
      set_german();
      language = "german";
      localStorage.setItem("language", "german");  
    };    
  });


  // Jeux   show_game

  function game_reset(){
    $(".totem-destiny").hide();
    $(".save-nautica").hide();
    $("#SN").css({"height":"90%", "box-shadow": "0px 0px 5px 0px black"});
    $("#TTOD").css({"height":"90%", "box-shadow": "0px 0px 5px 0px black"});
  };

  $("#SN").click(function(){
    if (show_game !== "SaveNautica"){
      game_reset();
      $(".save-nautica").show();
      $("#SN").css({"height":"93%", "box-shadow": "0px 0px 15px 0px black"});
      show_game = "SaveNautica";
    } else {
      game_reset();
      $(".save-nautica").hide();
      show_game = "none";
    }
  });

  $("#TTOD").click(function(){
    if (show_game !== "TotemDestiny"){
      game_reset();
      $(".totem-destiny").show();
      $("#TTOD").css({"height":"93%", "box-shadow": "0px 0px 15px 0px black"});
      show_game = "TotemDestiny";
    } else {
      game_reset();
      $(".totem-destiny").hide();
      show_game = "none";
    }
  });

});