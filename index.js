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
    
    //bildIndex = 0; 

    //bildIndex = bilder.length -1;

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

// mehr infos 
let mehr = document.getElementById("mehr");
let infos = document.getElementById("infos");

infos.style.display = "none";

mehr.addEventListener("click", event => {
    if(mehr.textContent === "mehr"){
        infos.style.display = "block";
        mehr.textContent = "weniger";
    }
    else{
        infos.style.display = "none";
        mehr.textContent = "mehr";
    }
});

