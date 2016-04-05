//Variables - argent
var a;
var argent;
var pointage = 1;

//Variables - jeu
var tours;

//DOM
a = document.getElementById("a").textContent;
sys = document.getElementById("sys");
serie = document.getElementById("serie");

//Défini argent
argent = a;
pointage = a * 100;

//Créer un bouton
function nButton(nombre) {
    var btn = document.createElement("BUTTON");
    btn.className = "bu";
    btn.id = "b" + nombre;
    serie.appendChild(btn);
}
//Enlèver un boutton
function rButton(nombre) {
    var parent = serie.getElementById("serie");
    var child = document.getElementById("b" + nombre);
    parent.removeChild(child);
}
function start() {
    
}
function detect() {
  if (pointage > 100) {
    start();
  }
  else {
     
  }

}

window.addEventListener("load", detect);
