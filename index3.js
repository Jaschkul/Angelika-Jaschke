let bestätigen = document.getElementById("bestätigen");
let meinText = document.getElementById("meinText");
let email = document.getElementById("email");
let handynummer = document.getElementById("handynummer");
let buchung = document.getElementById("buchung");
let kauf = document.getElementById("kauf");


//eingabe bestätigung
bestätigen.onclick = function(){
    let name = document.getElementById("name");
    if(name.value === ""){
    meinText.textContent = "Bitte gib einen Namen ein.";
    }
    else if(email.value === ""){
    meinText.textContent = "Bitte gib eine Email ein.";
    }
    else if(name.value === "" && email.value === ""){
    meinText.textContent = "Bitte gib einen Namen und eine Email ein.";
    }
    else{
        meinText.textContent = `Hallo ${name.value} wir kontaktieren dich unter ${email.value}.`;
    }
 }
