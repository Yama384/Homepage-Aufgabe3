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
