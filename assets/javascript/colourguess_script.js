$(document).ready(function(){

  let game_ended = 0;
  let win = 0; 
  let game_wave = 0;
  let selecting_place = 0; 
  let input;
  let goal = "";

  function create_wave(){

    var new_first = $("<div></div>").addClass("first color " + (game_wave.toString()));
    var new_second = $("<div></div>").addClass("second color " + (game_wave.toString()));
    var new_third = $("<div></div>").addClass("third color " + (game_wave.toString()));
    var new_fourth = $("<div></div>").addClass("fourth color " + (game_wave.toString()));
  
    var new_colors = $("<div></div>").addClass("colors "+ (game_wave.toString())).append(new_first, new_second, new_third, new_fourth);
    var new_present = $("<div></div>").addClass("ui present "+ (game_wave.toString())).text("?");
    var new_perfect = $("<div></div>").addClass("ui perfect " + (game_wave.toString())).text("?");
    var new_number = $("<div></div>").addClass("number " + (game_wave.toString())).text("#"+game_wave);
    var new_balance = $("<div></div>").addClass("invisible " + (game_wave.toString())).text("#1");

    var new_panel = $("<div></div>").addClass("panel game-panel " + (game_wave.toString())).append(new_number, new_present, new_colors, new_perfect, new_balance);

    $("#game").append(new_panel);

    selecting_place = 1;
    input = "";
    $("#game").animate({
      scrollTop: $(".game-panel." + (game_wave.toString())).offset().top
    }, 'slow');
  }

  function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }

  function create_goal(){
    goal = "";
    for (let i=0; i<4; i++){
      goal += (Math.floor(Math.random() * 8)+1).toString();
    };
    console.log("Goal : " + goal);
  }

  function no_chooser(){
    $("#chooser").hide();
    $("#game").css("height","100%");
  };

  function go_chooser(){
    $("#chooser").show();
    $("#game").css("height","93%");
  }

  no_chooser()
  $(".game-panel").hide();
  $(".end-panel").hide();
  $(".win").hide();
  $(".lose").hide();

  $("#start-btn").click(function(){
    go_chooser()
    $(".begin-panel").hide();
    $(".game-panel").show();

    create_goal();
    
    game_ended = 0;
    win = 0;

    game_wave = 1; 
    create_wave();
  });

  

  $("#restart-btn").click(function(){
    go_chooser()
    $(".end-panel").hide();

    for (let m = 0; m < 13; m++){
      removeElementsByClass(m);
    };

    game_ended = 0;
    win = 0;

    create_goal();

    game_wave = 1; 
    create_wave();

  });

  $("#menu-btn").click(function(){
    $(".begin-panel").show();
    $(".end-panel").hide();

    for (let m = 0; m < 13; m++){
      removeElementsByClass(m);
    };

  });

  $("#choose-btn-1").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("red");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("red");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("red");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("red");
      break;
    }
    if (selecting_place < 5){
      input += "1";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-2").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("orange");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("orange");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("orange");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("orange");
      break;
    }
    if (selecting_place < 5){
      input += "2";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-3").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("yellow");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("yellow");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("yellow");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("yellow");
      break;
    }
    if (selecting_place < 5){
      input += "3";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-4").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("pink");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("pink");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("pink");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("pink");
      break;
    }
    if (selecting_place < 5){
      input += "4";
      selecting_place ++;
    };
    console.log(input)
  });
  
  $("#choose-btn-5").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("blue");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("blue");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("blue");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("blue");
      break;
    }
    if (selecting_place < 5){
      input += "5";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-6").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("green");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("green");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("green");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("green");
      break;
    }
    if (selecting_place < 5){
      input += "6";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-7").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("gray");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("gray");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("gray");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("gray");
      break;
    }
    if (selecting_place < 5){
      input += "7";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-8").click(function(){
    switch (selecting_place){
      case 1 : 
      $(".first." +(game_wave.toString())).addClass("white");
      break;
      case 2 : 
      $(".second." +(game_wave.toString())).addClass("white");
      break;
      case 3 : 
      $(".third." +(game_wave.toString())).addClass("white");
      break;
      case 4 : 
      $(".fourth." +(game_wave.toString())).addClass("white");
      break;
    };
    if (selecting_place < 5){
      input += "8";
      selecting_place ++;
    };
    console.log(input)
  });

  $("#choose-btn-return").click(function(){
    if (selecting_place > 1) {
      selecting_place --;
      input = input.slice(0, -1);
      switch (selecting_place){
        case 1 : 
        $(".first." +(game_wave.toString())).removeClass(function(index, currentClass) {
          return currentClass.split(" ").pop();
        });
        break;
        case 2 : 
        $(".second." +(game_wave.toString())).removeClass(function(index, currentClass) {
          // Manipulate the currentClass to get the latest class name to remove
          return currentClass.split(" ").pop();
        });
        break;
        case 3 : 
        $(".third." +(game_wave.toString())).removeClass(function(index, currentClass) {
          // Manipulate the currentClass to get the latest class name to remove
          return currentClass.split(" ").pop();
        });
        break;
        case 4 : 
        $(".fourth." +(game_wave.toString())).removeClass(function(index, currentClass) {
          // Manipulate the currentClass to get the latest class name to remove
          return currentClass.split(" ").pop();
        });
        break;
      };
    };
    console.log(selecting_place);    
  });

  let right_color;
  let right_place;
  let checking_input = input;
  let checking_goal = goal;

  $("#choose-btn-enter").click(function(){

    if (input.length == 4){

      checking_input = input;
      checking_goal = goal;
  
      right_color = 0;
      right_place = 0;
  
      for (let j=0; j<4; j++){
        //console.log("InputChar : "+ checking_input.charAt(j) + " // GoalChar : " + checking_goal.charAt(j))
        if (checking_input.charAt(j) == checking_goal.charAt(j)){
          right_place ++;
            
          checking_input = checking_input.slice(0, j) + '0' +checking_input.slice(j + 1);
          checking_goal = checking_goal.slice(0, j) + '0' + checking_goal.slice(j + 1);
        } 
        //console.log(j + " ("+ right_place +"): " + checking_input + " - " + checking_goal);
      };
      $(".perfect." +(game_wave.toString())).text(right_place);
  
      for (let k=0; k<4; k++){
        for (let l=0; l<4; l++){
          //console.log("InputChar : "+ checking_input.charAt(l) + " // GoalChar : " + checking_goal.charAt(k))
          if ((checking_input.charAt(l) == checking_goal.charAt(k)) && (checking_goal.charAt(k) != '0') && (checking_input.charAt(l) != '0')){
            right_color ++;
              
            checking_input = checking_input.slice(0, l) + '0' +checking_input.slice(l + 1);
            checking_goal = checking_goal.slice(0, k) + '0' + checking_goal.slice(k + 1);
          } 
          //console.log(l + " ("+ right_color +"): " + checking_input + " - " + checking_goal);
        };
      };
      $(".present." +(game_wave.toString())).text(right_color);
  
      if ((game_wave + 1) == 13){
        game_ended = 1;
        win = 0;
      };

      if (right_place == 4){
        game_ended = 1; 
        win = 1;
      }

      if (game_ended == 1){
        no_chooser()
        $(".end-panel").show();

        $("#game").animate({
          scrollTop: $(".end-panel").offset().top
        }, 'slow');

        if (win == 1) {
          $(".lose").hide();
          $(".win").show();
          $(".score").text(game_wave);
        } else {
          $(".win").hide();
          $(".lose").show();
        };      
      } else {
        game_wave++; 
        create_wave();
      };

    };
  });

  let looping_epic = 0;

  setInterval(function () {
    if (looping_epic > 4) {looping_epic = 0};
    switch (looping_epic){
      case 0 :
      $(".epic").css("color", "red");
      break;
      case 1 : 
      $(".epic").css("color", "yellow");
      break;
      case 2 : 
      $(".epic").css("color", "lime");
      break;
      case 3 : 
      $(".epic").css("color", "cyan");
      break;
      case 4 : 
      $(".epic").css("color", "purple");
      break;
    }
    looping_epic++;
  }, 1000);

});