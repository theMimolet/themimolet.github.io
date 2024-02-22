
/* == DECLARATION DES VARIABLES == */

let game_ended = 0;
let win = 0; 
let game_wave = 0;
let selecting_place = 0; 
let input;
let goal = "";

let right_color;
let right_place;
let checking_input = input;
let checking_goal = goal;

let looping_epic = 0;

/* == FONCTIONS == */

function createWave(){
  /* -- Crée une vague -- */

  let new_first = $("<div></div>").addClass("1th " + (game_wave.toString()));
  let new_second = $("<div></div>").addClass("2th " + (game_wave.toString()));
  let new_third = $("<div></div>").addClass("3th " + (game_wave.toString()));
  let new_fourth = $("<div></div>").addClass("4th " + (game_wave.toString()));

  let new_colors = $("<div></div>").addClass("colors "+ (game_wave.toString())).append(new_first, new_second, new_third, new_fourth);
  let new_present = $("<div></div>").addClass("ui present "+ (game_wave.toString())).text("?");
  let new_perfect = $("<div></div>").addClass("ui perfect " + (game_wave.toString())).text("?");
  let new_number = $("<div></div>").addClass("number " + (game_wave.toString())).text("#"+game_wave);
  let new_balance = $("<div></div>").addClass("invisible " + (game_wave.toString())).text("#1");

  let new_panel = $("<div></div>").addClass("panel game-panel " + (game_wave.toString())).append(new_number, new_present, new_colors, new_perfect, new_balance);

  $("#game").append(new_panel);

  selecting_place = 1;
  input = "";
  $("#game").animate({
    scrollTop: $(".game-panel." + (game_wave.toString())).offset().top
  }, 'slow');
}

function removeElementsByClass(className){
  /* -- Enlève un élément en fonction du nom de sa classe -- */

  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

function createGoal(){
  /* -- Crée le code à craquer -- */

  goal = "";
  for (let i=0; i<4; i++){
    goal += (Math.floor(Math.random() * 8)+1).toString();
  };
  console.log("Come on. Guess :)");
};

function hideChooser(){
  /* -- Cache le chooser -- */

  $("#chooser").hide();
  $("#game").css("height","100%");
};

function showChooser(){
  /* -- Montre le chooser -- */
  
  $("#chooser").show();
  $("#game").css("height","93%");
};

function removePanels(){
  /* -- Enlève tous les panels de la partie -- */

  for (let m = 0; m < 13; m++){
    removeElementsByClass(m);
  };
};

function start(fromBegin){
  /* -- Fait commencer la partie -- */

  showChooser();

  if (fromBegin == true){
    $(".begin-panel").hide();
    $(".game-panel").show();
  } else {
    $(".end-panel").hide();
    removePanels();
  };
  
  createGoal();
  
  game_ended = 0;
  win = 0;

  game_wave = 1; 
  createWave();
};

function menu(){
  $(".begin-panel").show();
  $(".end-panel").hide();

  removePanels();
};

function chooses(number){
  switch (number){
    case 1 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("red");
      break;
    case 2 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("orange");
      break;
    case 3 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("yellow");
      break;
    case 4 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("pink");
      break;
    case 5 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("blue");
      break;
    case 6 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("green");
      break;
    case 7 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("gray");
      break;
    case 8 : 
      $("." + (selecting_place.toString()) + "th." + (game_wave.toString())).addClass("white");
      break;
  };
  
  if (selecting_place < 5){
    input += number;
    selecting_place ++;
  };

  console.log(input)
};

function removePlace(){
  if (selecting_place > 1) {
    selecting_place --;
    input = input.slice(0, -1);
    $("."+ selecting_place +"th." +(game_wave.toString())).removeClass(function(index, currentClass) {
      return currentClass.split(" ").pop();
    });
  };   
};

function answerProcess(){
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
      hideChooser()
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
      createWave();
    };
  };
};

$(document).ready(function(){
  hideChooser();
  $(".game-panel").hide();
  $(".end-panel").hide();
  $(".win").hide();
  $(".lose").hide();

  setInterval(function (){
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