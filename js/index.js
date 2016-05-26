$(document).ready(function() {
    //Variables - argent
    var a;
    var argent;
    var pointage;

    //Variables - jeu
    var tours = 3;
    var t;
    var numr = 0;

    //DOM
    a = document.getElementById("a").textContent;
    sys = document.getElementById("sys").textContent;
    serie = document.getElementById("serie");

    //Défini argent
    argent = a;

    function rnd() {
        t = tours - 1;
        numr = Math.floor((Math.random() * tours) + 0);
    }
    
    if (argent >= 3) {
        rnd();
        nButton();
    }

    $("body").on("click", "button", function() {
        if ($(this).is(".x")) {
            rnd();
            gagnant();
        } else {
            rnd();
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
        alert(a);
        alert(argent);
        alert(money);
        a = argent + money;
        alert(a);
        alert(argent);
        alert(money);
    }

    function pariP() {
        var money = document.getElementById("myText").value
        a = argent - money;
    }
});
