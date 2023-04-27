$(document).ready(function(){
  let dark_mode = false;
  let language_display = false;
  let language = "english";

  console.log("The code is running perfectly");
  
  $(".languages-dropdown").hide();
  $(".french").hide();
  
  $(".dark-mode-btn").click(function(){
    if(dark_mode === false){
      $(".dark-mode-off").hide();
      $(".dark-mode-on").show();
      dark_mode = true;
      console.log("Dark mode on");
    } else {
      $(".dark-mode-on").hide();
      $(".dark-mode-off").show();
      dark_mode = false;
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

/*if(language === "english"){
      $(".english").hide();
      $(".french").show();
      language = "french";
      console.log("Language is now set to french");
    } else {
      $(".french").hide();
      $(".english").show();
      language = "english";
      
    }*/