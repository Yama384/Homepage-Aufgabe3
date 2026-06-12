let anmeldeButton = document.getElementById("anmelden");
let nachnameFeld = document.getElementById("nachname");
let emailFeld = document.getElementById("email");
anmeldeButton.addEventListener("click", function() {

       if (nachnameFeld.value == "" && emailFeld.value == "") {
        alert("Bitte Nachnamen und E-Mail eingeben!");
    }
    else if (nachnameFeld.value == "") {
        alert("Bitte Nachnamen eingeben!");
    }

    else if (emailFeld.value == "") {
        alert("Bitte E-Mail eingeben!");
    }
});

let lauftext = document.getElementById("lauftext");
let position = -500; // Startposition des Lauftexts (außerhalb des Bildschirms)
function BewegeLauftext() {
    position ++; 
    if (position > 1000) {
        position = -500; // zurücksetzen, damit der Text wieder von links kommt
    }
    lauftext.style.left = position + "px";
}
setInterval(BewegeLauftext, 10); // führe die Funktion alle 10ms aus 


let bild = document.getElementById("zeitbild");
let stunde = new Date().getHours();
if (stunde < 9) {
    bild.src = "Sonne.png"; // Morgens
} else {
    bild.src = "Mond.png"; // Abends
}


let uhr = document.getElementById("uhr");

function zeigeUhr() {
    let jetzt = new Date();
    uhr.textContent = jetzt.toLocaleTimeString();

    setTimeout(zeigeUhr, 1000);
}

zeigeUhr();