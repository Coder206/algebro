var argent;
var pointage;

var button = document.getElementById("b");

argent = document.getElementById("a").textContent;

function nButton() {
    var btn = document.createElement("BUTTON");
    btn.className = "bu";
    document.body.appendChild(btn);
}

button.addEventListener("click", nButton);
