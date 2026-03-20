
//zitatShow 
const zitate = document.querySelectorAll(".zitate p");
let zitatIndex = 0;  
let intervalId = null;


//intalisierung 
initialisierungZitate();
function initialisierungZitate(){

    if(zitate.length > 0){
    zitate[zitatIndex].classList.add("zitatAnzeige");
    IntervalId = setInterval(zitatDanach, 7000);
}
}

//aktuelle Seite 
function zeigeZitate(index){

    if(index >= zitate.length){
        zitatIndex = 0;
    }
    else if(index < 0){
        zitatIndex = zitate.length -1;
    }



    zitate.forEach(zitat => {
        zitat.classList.remove("zitatAnzeige");
    });
    zitate[zitatIndex].classList.add("zitatAnzeige");
}

//Steuerung 
function zitatDavor(){
}
    
function zitatDanach(){
    zitatIndex++;
    zeigeZitate(zitatIndex);
    
}