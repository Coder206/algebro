$(document).ready(function () {
    //Variables - jeu
    var tours = 3;
    var t;
    var numr = 0;
    var aa;

    //DOM
    var a = document.getElementById("a").textContent;
    var sys = document.getElementById("sys").textContent;
    var serie = document.getElementById("serie");
    var money = document.getElementById("myText").value;

    //Défini argent
    argent = a;
    
    chk();

    function rnd() {
        t = tours - 1;
        numr = Math.random() * (t - 0) + 0;
        numr = Math.round(numr);
    }

    function updateTb() {
        document.getElementById("myText").min = tours;
        document.getElementById("myText").value = tours;
        document.getElementById("myText").max = parseInt(document.getElementById("a").textContent);
    }

    function chk() {
    
    if (argent >= 3) {
        nButton();
        updateTb();
    }
    
    }

    $("input").change(function () {
        if (document.getElementById("myText").value > parseInt(document.getElementById("a").textContent)) {
            document.getElementById("myText").value = parseInt(document.getElementById("a").textContent);
        }
        if (document.getElementById("myText").value < 3) {
            document.getElementById("myText").value = 3;
        }
    });

    $("body").on("click", "button", function () {
        if ($(this).is(".x")) {
            gagnant();
            updateTb();
        } else if ($(this).is(".o")) {
            perdant();
            updateTb();
        }
    });

    function gagnant() {
        chk();
        rnd();
        tours++;
        nButton();
        pariG();
    }

    function perdant() {
        chk();
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
        document.getElementById("a").textContent = parseInt(document.getElementById("a").textContent) + parseInt(document.getElementById("myText").value);
    }

    function pariP() {
        document.getElementById("a").textContent = parseInt(document.getElementById("a").textContent) - parseInt(document.getElementById("myText").value);
    }
    
    function Va(){
         document.getElementById("Va").textContent = parseInt(document.getElementById("a").textContent);
    }
});
