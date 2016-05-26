$(document).ready(function() {
    //Variables - jeu
    var tours = 3;
    var t;
    var numr = 0;

    //DOM
    var a = document.getElementById("a").textContent;
    var sys = document.getElementById("sys").textContent;
    var serie = document.getElementById("serie");
    var money = document.getElementById("myText").value

    //Défini argent
    argent = a;

    function rnd() {
        t = tours - 1;
        numr = Math.random() * (t - 0) + 0;
        numr = Math.round(numr);
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
        tours++;
        nButton();
        pariG();
    }

    function perdant() {
        nButton();
        pariP();
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
        a = parseInt(argent) + parseInt(money);
    }

    function pariP() {
        a = parseInt(argent) - parseInt(money);
    }
});
