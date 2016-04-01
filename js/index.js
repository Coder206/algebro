//Variables - argen
var argent;
var pointage;

//DOM
argent = document.getElementById("a").textContent;

//Créer un bouton
function nButton(nombre) {
    var btn = document.createElement("BUTTON");
    btn.className = "bu";
    btn.id = "b" + nombre;
    document.getElementById("serie").appendChild(btn);
}

function rButton(nombre) {
    var parent = document.getElementById("serie");
    var child = document.getElementById("b" + nombre);
    parent.removeChild(child);
}
