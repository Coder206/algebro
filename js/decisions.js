//DOM
var a = document.getElementById("a").textContent;
var sys = document.getElementById("sys");
var serie = document.getElementById("serie");

//Valeurs
var oargent;
var argent;

function gagnant() {
    //Multiplier la valeur par 0.4

    //Ajouter ce résultat à la valeur d'argent précédente

    //Décision continuer
    if (confirm("Voulez-vous essayer vos chances encore?") == true) {
        sys = "Charger";
    } else {
        sys = "Fermer";
    }
}

function perdant() {
    //Multiplier la valeur par 0.45
    argent = argent * 0.45
    //Soustraire ce résultat à la valeur d'argent précédente

    //Pas d'argent?
    if (argent <= 0) {
        sys = "Fermer";
    }
    else {
        //Décision continuer
        if (confirm("Voulez-vous essayer vos chances encore?") == true) {
            sys = "Charger";
        } else {
            sys = "Fermer";
        }
    }
}
