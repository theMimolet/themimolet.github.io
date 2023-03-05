
// Evènement qui se produit lorsque la fenêtre / les différents éléments du site ont fini de charger

window.addEventListener('DOMContentLoaded', (event) => {

  // Définition des variables dropdown_on et timeout_time
  let dropdown_on = false;
  let timeout_time = 100;

  // Références 
  const dropdown_content = document.getElementsByClassName("dropdown-content")[0];
  const dropdown_button = document.getElementsByClassName("dropbtn")[0];
  const dropdown_group = [dropdown_button, dropdown_content];

  // Setup
  console.log("Javascript chargé");
  dropdown_content.style.display='none';


  // Evènement qui se produit lorsque l'élément "dropbtn" est cliqué

  dropdown_button.addEventListener("click", function() {

    if (dropdown_on == false) {

      dropdown_content.style.display='block';
      dropdown_button.style.backgroundColor= 'green'; 
      console.log("dropdown => on");

      setTimeout(() => {
        dropdown_on = true;
      }, timeout_time);

    } else if (dropdown_on == true) {

      dropdown_content.style.display='none';
      dropdown_button.style.backgroundColor= '#A2A2A2'; 
      console.log("dropdown => off");

      setTimeout(() => {
        dropdown_on = false;
      }, timeout_time);
    }

  });

  
  for (const element of dropdown_group) {

    element.addEventListener("mouseover", function() {

      dropdown_content.style.display = 'block';
      dropdown_button.style.backgroundColor= 'green'; 
      console.log("dropdown => on");

      setTimeout(() => {
        dropdown_on = true;
      }, timeout_time);
    });
  
    element.addEventListener("mouseout", function() {

      dropdown_content.style.display = 'none';
      dropdown_button.style.backgroundColor= '#A2A2A2'; 
      console.log("dropdown => off");

      setTimeout(() => {
        dropdown_on = false;
      }, timeout_time);
    });
  }
  
});

/* Problème connu : Parfois des évènements se déclenchent plusieurs fois d'un coups dû au timeout, cependant c'était pour corriger un autre problème 
qui était celui du dropdown qui pouvait repasser directement à son état antérieur alors que l'utilisateur n'avait cliqué qu'une fois */

