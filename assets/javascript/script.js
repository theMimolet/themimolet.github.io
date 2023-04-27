$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = false;
  let language_display = false;
  let language = "english";
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
  };


  // Setup 


  dark_mode_off(); 
  $("#languages-dropdown").hide();
  $(".french").hide();
  $(".german").hide();
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

  // Dark Mode

  $("#dark-mode-btn").click(function(){
    if(dark_mode === false){
      dark_mode_on();
      dark_mode = true;
      console.log("Dark mode on");
    } else {
      dark_mode_off(); 
      dark_mode = false;
      console.log("Dark mode off");
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
    $(".french").hide();
    $(".german").hide();
    $(".english").show();
    console.log("Language is now set to english");
    language = "english"  
    };    
  });

  // Français

  $("#french-btn").click(function(){
    if (language != "french"){
    $(".french").show();
    $(".german").hide();
    $(".english").hide();
    console.log("Language is now set to french");  
    language = "french"
    };    
  });

  // Allemand

  $("#german-btn").click(function(){
    if (language != "german"){
    $(".french").hide();
    $(".german").show();
    $(".english").hide();
    console.log("Language is now set to german");  
    language = "german"
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