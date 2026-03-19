let mehr = document.getElementById("mehr");
let infos = document.getElementById("infos"); 

let aktiv = document.getElementById("aktiv");
let zurück = document.getElementById("zurück");
let weiter = document.getElementById("weiter");
let gallerien = ["gallerie1.html", "gallerie2.html", "gallerie3.html"];
let steuerungselement = document.getElementById("steuerungselement");


// Text anzeigen und ausblenden
infos.style.display = "none";
mehr.addEventListener("click", event =>{
    if(infos.style.display === "none"){ 
        infos.style.display = "block"; 
        mehr.textContent = "zurück";
    } 
    else{ 
        infos.style.display = "none"; 
        mehr.textContent = "mehr";
    }
});

//Steuerungselementent

let hi = document.getElementById("hi");

hi.textContent = "Hallo";