$(document).ready(function(){
  let dark_mode = false;
  let language_display = false;
  let language = "english";

  console.log("The code has begun to run");
  
  function dark_mode_off(){
    dark_mode = false;
    $(".dark-mode-on").hide();
    $(".dark-mode-off").show();

    $("*").css({"color":"black"});
    $("body").css({"background-color":"rgb(235, 235, 235)"});
    $("main").css({"background-color":"rgb(255, 255, 255)","box-shadow": "0px 0px 7px 1px gray"});
    $(".top-buttons button").css({"background-color":"rgba(255, 255, 255, 0.7)"}); 
    $(".languages-dropdown div").css({"background-color":"rgba(243, 241, 239, 0.8)"});
    $(".profile_pic").css({"border": "solid rgb(243, 241, 239) 5px"});

  };function dark_mode_on(){
    dark_mode = true;
    $(".dark-mode-off").hide();
    $(".dark-mode-on").show();

    $("*").css({"color":"rgb(220, 220, 220)"}); 
    $("body").css({"background-color":"rgb(36, 36, 36)"});
    $("main").css({"background-color":"rgb(51, 51, 51)","box-shadow": "0px 0px 7px 1px gray"});
    $(".top-buttons button").css({"background-color":"rgba(51, 51, 51, 0.7)"});
    $(".languages-dropdown div").css({"background-color":"rgba(51, 51, 51, 0.8)"});
    $(".profile_pic").css({"border": "solid rgb(51, 51, 51) 5px"});
  };

  $(".languages-dropdown").hide();
  $(".french").hide();
  
  $(".dark-mode-btn").click(function(){
    if(dark_mode === false){
      dark_mode_on();
      console.log("Dark mode on");
    } else {
      dark_mode_off();
      console.log("Dark mode off");
    }
  });

  $(".languages-btn").click(function(){
    if (language_display === false){
      $(".languages-dropdown").show();
      language_display = true;
    } else {
      $(".languages-dropdown").hide();
      language_display = false;
    }
  });

  $("#english-btn").click(function(){
    if (language != "english"){
    $(".french").hide();
    $(".german").hide();
    $(".english").show();
    console.log("Language is now set to english");
    language = "english"  
    };    
  });
  $("#french-btn").click(function(){
    if (language != "french"){
    $(".french").show();
    $(".german").hide();
    $(".english").hide();
    console.log("Language is now set to french");  
    language = "french"
    };    
  });
  $("#german-btn").click(function(){
    if (language != "german"){
    $(".french").hide();
    $(".german").show();
    $(".english").hide();
    console.log("Language is now set to german");  
    language = "german"
    };    
  });

});