//Variables - argent
var a;
var argent;
var pointage;

//Variables - jeu
var tours;

//DOM
a = document.getElementById("a").textContent;

//Défini argent
argent = a * pointage;

//Créer un bouton
function nButton(nombre) {
    var btn = document.createElement("BUTTON");
    btn.className = "bu";
    btn.id = "b" + nombre;
    document.getElementById("serie").appendChild(btn);
}
//Enlèver un boutton
function rButton(nombre) {
    var parent = document.getElementById("serie");
    var child = document.getElementById("b" + nombre);
    parent.removeChild(child);
}
function start() {

}
function detect() {
  if (argent > 100) {
    start();
  }

  }

}
