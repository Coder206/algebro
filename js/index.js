//Variables - argent 
var a;
var argent;
var pointage = 1;

//Variables - jeu 
var tours = 3;
var numr = 0;

//DOM 
a = document.getElementById("a").textContent;
sys = document.getElementById("sys").textContent;
serie = document.getElementById("serie");

//Défini argent 
argent = a;
pointage = a * 100;

//http://stackoverflow.com/questions/20253246/adding-click-event-for-a-button-created-dynamically-using-jquery
var count = 0;
$(document).on("click", "#x", function() {
  /*var div = $('<button id="btn"></button>');
  div.html();
  div.appendTo('#serie');*/
  gagnant();
});
$(document).on("click", "#btn", function() {
  /*var div = $('<button id="btn"></button>');
  div.html();
  div.appendTo('#serie');*/
  gagnant();
});
//Créer un bouton 
/*function nButton(nombre) {
  /*for (var i = 0; i < tours; i++) {
    var btn = document.createElement("BUTTON");
    if (i === numr) {
      btn.className = "x";
      btn.id = "b";
      serie.appendChild(btn);
    } else {
      btn.className = "bu";
      btn.id = "b";
      serie.appendChild(btn);
    }
  }
}*/

//Enlèver un boutton 
/*function rButton() {
  var parent = serie.getElementById("serie");
  var child = document.getElementById("b");
  parent.removeChild(child);
}
*/

function initUI() {
  rnd();
  nButton(numr);
  trigger();
}
//Choisi un nombre entier au hazard entre 1 et tours 
function rnd() {
  numr = Math.floor((Math.random() * tours) + 0);
}
//Commence rnd 
function start() {
  rnd();
}
//Commence start si pointage et plus grand ou égal à 100 
function trigger() {
  if (pointage >= 100) {
    start();
  }
}

function gagnant() {
  //Multiplier la valeur par 0.4 
  argent = argent * 0.4;
  //Décision continuer 
  var r = confirm("Voulez-vous essayer vos chances encore?");
  if (r === true) {
    sys = "Charger";
    tours++;
    numr++;
    initUI();
  } else {
    sys = "Fermer";
  }
}

function perdant() {
  //Multiplier la valeur par 0.45 
  argent = argent * 0.45;
  //Pas d'argent? 
  if (argent <= 0) {
    sys = "Fermer";
  } else {
    //Décision continuer 
    var r = confirm("Voulez-vous essayer vos chances encore?");
    if (r === rue) {
      sys = "Charger";
      tours--;
      numr--;
      initUI();
    } else {
      sys = "Fermer";
    }
  }
}

//Verification 
function ver() {
  alert("HI!");
  if (this.className === "x") {
    gagnant();
    alert("g");
  } else {
    perdant();
    alert("p");
  }
}

//window.addEventListener("load", initUI);
//document.getElementsByClassName("bu").addEventListener("click", ver);
//document.getElementById("b").addEventListener("click", ver);
