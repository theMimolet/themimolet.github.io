$(document).ready(function(){
  
  console.log("The code has begun to run");
  
  // Variables

  let dark_mode = JSON.parse(localStorage.getItem("dark_mode"));

  // Setup 

  if (dark_mode === null) {
    dark_mode = false;
  };

  if (dark_mode === true){
    dark_mode_on();
  } else {
    dark_mode_off();
  };
  
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

  console.log("The code has run successfully 👍");
});