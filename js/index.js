//Variables - argent
var a;
var argent;
var pointage = 1;

//Variables - jeu
var tours = 0;
var numr;

//DOM
a = document.getElementById("a").textContent;
sys = document.getElementById("sys");
serie = document.getElementById("serie");

//Défini argent
argent = a;
pointage = a * 100;

//Créer un bouton
function nButton(nombre) {
    for (var i = 0; i < tours; i++){
    if (i === numr){
        var btn = document.createElement("BUTTON");
        btn.className = "x";
        btn.id = "b" + i;
        serie.appendChild(btn);
      }
      else {
        var btn = document.createElement("BUTTON");
        btn.className = "bu";
        btn.id = "b" + i;
        serie.appendChild(btn);
      }
    }
}

//Enlèver un boutton
function rButton(nombre) {
    var parent = serie.getElementById("serie");
    var child = document.getElementById("b");
    parent.removeChild(child);
}

function initUI() {
    tours = 20;
    rnd();
    nButton(numr);
    trigger();
}
//Choisi un nombre entier au hazard entre 1 et tours
function rnd() {
    numr = Math.floor((Math.random() * tours) + 1);

}
//Commence rnd
function start() {
    rnd();
}
//Commence start si pointage et plus grand ou égal à 100
function trigger() {
    if (pointage >= 100){
        start();
    }
}


window.addEventListener("load", initUI);
