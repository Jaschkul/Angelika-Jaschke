const bilder = document.querySelectorAll(".bilder img");
let bilderIndex = 0; 
let intervalId = null;

//initalisierung 
initalisierungBilder();
function initalisierungBilder(){
    bilder[bilderIndex].classList.add("zeigeBild"); //man muss das in CSS sichtbar machen
    IntervalId = setInterval(bildDanach,7000); //erklären und if statement greater than 0

}

//zeigeBilder 
function zeigeBilder(index){
    
    if(index >= bilder.length){
        bilderIndex = 0; 
    }
    else if(index < 0){
        bilderIndex = bild.length-1; 
    }
    
    bilder.forEach(bild => {
        bild.classList.remove("zeigeBild");
    });
    bilder[bilderIndex].classList.add("zeigeBild");
    
}
//bildDavor 
function bildDavor(){
    clearInterval(intervalId);
    bilderIndex--;
    zeigeBilder(bilderIndex);

    
}

//bildDanach
function bildDanach(){
    bilderIndex++;
    zeigeBilder(bilderIndex);
    
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


