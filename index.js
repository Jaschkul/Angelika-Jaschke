// diashow 

const bilder = document.querySelectorAll(".bilder img");
let bildIndex = 0; 
let intervalId = null;

// initialisierung
initiatlsierung(); 
function initiatlsierung(){
    if(bilder.length > 0){
    bilder[bildIndex].classList.add("bildAnzeige");
    intervalId = setInterval(bildDanach, 5000);}
}  

// aktuelle Seite  
function zeigeBild(index){
    
    if(index >=  bilder.length){
        bildIndex = 0;
    }
    else if(index <0 ){
        bildIndex = bilder.length -1;
    }

    bilder.forEach(bild => {
        bild.classList.remove("bildAnzeige");
    });
    bilder[bildIndex].classList.add("bildAnzeige");
}

// Steuerung
function bildDavor(){
    clearInterval(intervalId);
    bildIndex --;
    zeigeBild(bildIndex);
}
function bildDanach(){
    clearInterval(intervalId);
    bildIndex ++;
    zeigeBild(bildIndex);
}

//mehr Infos anzeigen
let vergangen = document.getElementById("vergangen");
let vergangeneAusstellungen = document.getElementById("vergangeneAusstellungen");

vergangeneAusstellungen.style.display = "none";

vergangen.addEventListener("click", event =>{
    if(vergangen.textContent === "mehr"){
    vergangeneAusstellungen.style.display ="block";
    vergangen.textContent = "weniger";
    }
    else if(vergangen.textContent === "weniger"){
    vergangeneAusstellungen.style.display ="none";
    vergangen.textContent = "mehr";
    }
})


