$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = JSON.parse(localStorage.getItem("dark_mode"));
  let news_version = 1;  
  let show_game = "none";

  // Setup 

  if (dark_mode === null) {
    dark_mode = false;
  };

  if (dark_mode === true){
    dark_mode_on();
  } else {
    dark_mode_off();
  };

  if (localStorage.getItem("newsVer") != news_version){
    $(".icon-update-false").hide();
    $(".icon-update-true").show();
  } else {
    $(".icon-update-true").hide();
    $(".icon-update-false").show();
  };

  $(".save-nautica").hide();
  $(".totem-destiny").hide();
  
// Button interactions

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


  // Notification

  $("#news-btn").click(function(){
    localStorage.setItem("newsVer", news_version);
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