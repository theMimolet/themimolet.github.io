$(document).ready(function(){ 
  let language_display = false;
  let language = localStorage.getItem("language");

  // Setup

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
  if (language === "italian"){
    set_italian();
  };
  $("#languages-dropdown").hide();

 // Languages

 $("#languages-btn").click(function(){
  if (language_display === false){
    $("#languages-dropdown").show();
    $("#languages-btn").hide();
    language_display = true;
  };
});

// Language functions

function language_change_log(){
  console.log("Language is now set to " +  language);
};

function set_english(){
  $(".english").show();
  $(".italian").hide();
  $(".french").hide();
  $(".german").hide();
  language_change_log();
};

function set_french(){
  $(".french").show();
  $(".italian").hide();
  $(".german").hide();
  $(".english").hide();
  language_change_log();
};

function set_german(){
  $(".german").show();
  $(".italian").hide();
  $(".french").hide();
  $(".english").hide();
  language_change_log();
};

function set_italian(){
  $(".italian").show();
  $(".german").hide();
  $(".french").hide();
  $(".english").hide();
  language_change_log();
};

function language_back(){
  $("#languages-dropdown").hide();
  $("#languages-btn").show();
  language_display = false;
};

// English

$("#english-btn").click(function(){
  if (language != "english"){
    set_english();
    language = "english";
    localStorage.setItem("language", language); 
  };
  language_back()    
});

// French

$("#french-btn").click(function(){
  if (language != "french"){
    set_french();
    language = "french";
    localStorage.setItem("language", language);
  };
  language_back()      
});

// German

$("#german-btn").click(function(){
  if (language != "german"){
    set_german();
    language = "german";
    localStorage.setItem("language", language);
  };
  language_back()    
});

// Italian

$("#italian-btn").click(function(){
  if (language != "italian"){
    set_italian();
    language = "italian";
    localStorage.setItem("language", language);
  };
  language_back()    
});

});

