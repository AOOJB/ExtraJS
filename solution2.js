const input = document.getElementById("input");

document.getElementById("btn").addEventListener('click',translatefras);

const vowels = "aouåeiyäö";
const consonants = "bcdfghjklmnpqrstvxz";

function Consontant(str, nummer){
    for(let i = 0; i < consonants.length; i++){
        if(str[nummer] == consonants[i]){
            return true;
        }
    }
    return false;
}

function Vowel(str, nummer){
    for(let i = 0; i < vowels.length; i++){
        if(str[nummer] == vowels[i]){
            return true;
        }
    }
    return false;
}

function translatefras(){
    frasen = input.value.toLowerCase();
    nyfras = "";
    for(let j = 0; j < frasen.length; j++){
        if(Consontant(frasen,j) == true){
            nyfras += frasen[j] + "o" + frasen[j];
        }
        else if(Vowel(frasen,j) == true){
            nyfras += frasen[j+1];
        }
    }
    document.getElementById("fras").innerHTML = nyfras;
}