$(document).ready(function() {
    //Variables - argent
    var a;
    var argent;
    var pointage;

    //Variables - jeu
    var tours = 3;
    var numr = 0;

    //DOM
    a = document.getElementById("a").textContent;
    sys = document.getElementById("sys").textContent;
    serie = document.getElementById("serie");

    //Défini argent
    argent = a;

    if (argent >= 3) {
        numr = Math.floor((Math.random() * tours) + 1);
        nButton();
    }

    $("body").on("click", "button", function() {
        if ($(this).is(".x")) {
            numr = Math.floor((Math.random() * tours) + 0);
            gagnant();
        } else {
            numr = Math.floor((Math.random() * tours) + 0);
            perdant();
        }
    });

    function gagnant() {
        pariG();
        tours++;
        nButton();
    }

    function perdant() {
        pariP();
        nButton();
    }

    function nButton() {
        $("button").remove();
        for (var i = 0; i < tours; i++) {
            if (i === numr) {
                var btn = document.createElement("BUTTON");
                btn.setAttribute("class", "x");
                btn.setAttribute("id", "btn");
                document.getElementById("jeux").appendChild(btn);
            } else {
                var btn = document.createElement("BUTTON");
                btn.setAttribute("class", "o");
                btn.setAttribute("id", "btn");
                document.getElementById("jeux").appendChild(btn);
            }

        }
    }

    function pariG() {
        var money = document.getElementById("myText").value
        a = argent + money;
    }

    function pariP() {
        var money = document.getElementById("myText").value
        a = argent - money;
