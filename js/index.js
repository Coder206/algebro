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
    for (var i = tours; i < nombre; i++) {
        var btn = document.createElement("BUTTON");
        btn.className = "bu";
        btn.id = "b" + i;
        btn.textContent = "X";
        serie.appendChild(btn);
        tours = i + 1;
    }
}
//Enlèver un boutton
function rButton(nombre) {
    var parent = serie.getElementById("serie");
    var child = document.getElementById("b");
    parent.removeChild(child);
}

function initUI() {
    nButton();
    numr = 50;
    nButton(numr);
}
//Choisi un nombre entier au hazard entre 1 et tours
function rnd() {
    alert("Please work");
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


addEventListener("click", nButton)

window.addEventListener("load", initUI);
