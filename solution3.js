canvas = document.getElementById("canvas").getContext("2d");
x = document.getElementById("x");
y = document.getElementById("y");
width = document.getElementById("width");
height = document.getElementById("height");
save = document.getElementById("box");

document.getElementById("btn").addEventListener('click', Rect);

function Rect(){
    if(save.checked == false){
        canvas.fillStyle = "#FFFFFF";
        canvas.fillRect(0,0,400,400);
    }
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    canvas.fillStyle = `rgb(${r},${g},${b})`;
    canvas.fillRect(x.value,y.value,width.value,height.value)
}