var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");

document.getElementById("btn").addEventListener('click',beräkna);

function beräkna(){
    document.getElementById("ben").innerHTML = `${A.value*4 + B.value*6 + C.value*8} Bordsben`;
    document.getElementById("kostnad").innerHTML = `${A.value*1000 + B.value*1500 + C.value*2900} kr`;
}