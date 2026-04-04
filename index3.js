let bestätigen = document.getElementById("bestätigen");
let meinText = document.getElementById("meinText");
let email = document.getElementById("email");
let handynummer = document.getElementById("handynummer");

bestätigen.onclick = function(){
    let name = document.getElementById("name");
    if(name === ""){
    meinText.textContent = "Bitte gib einen Namen ein.";
    }

}