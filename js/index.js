//Variables - argent
var a;
var argent;
var pointage;

//Variables - jeu
var tours;
var r;
var c;

//Variables - fureteur

//DOM
a = document.getElementById("a").textContent;
sys = document.getElementById("sys").textContent;

//Créer un bouton
function nButton(nombre) {
    var btn = document.createElement("BUTTON");
    btn.className = "bu";
    btn.id = "b" + nombre;
    document.getElementById("serie").appendChild(btn);
}

//Enlèver un bouton
function rButton(nombre) {
    var parent = document.getElementById("serie");
    var child = document.getElementById("b" + nombre);
    parent.removeChild(child);
}

function fermeA() {
    alert("Il ne vous reste plus d'argent. Passe une belle journée!")
    sys = "FERME";
}

function fermeB() {
    alert("Merci d'avoir joué à Algebro! À la prochaine! :)")
    sys = "FERME";
}

function continuer() {
    detect();
}

function verification(n) {
    //Numéro X est choisi
    if (n = true) {
        c = confirm("Voulez vous continuer?");
        if (c == true) {
            continuer();
        } else {
            //Fermer la fenêtre
            fermeB();
        }
    }
    else {
        if (argent <= 0) {
            //Terminer
            fermeA();
        }
        else {
            c = confirm("Voulez vous continuer?");
            if (c == true) {
                continuer();
            } else {
                fermeB();
            }
        }
    }
}
