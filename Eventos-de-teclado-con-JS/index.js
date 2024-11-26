document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", dibujarMouse);
let canva = document.getElementById("area_de_dibujo");
let papel = canva.getContext("2d");
let x = 150, y = 150;
let teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
dibujarLinea( papel, "red", 149, 149, 151, 151);
function dibujarTeclado(evento)
{
    console.log(evento.keyCode);
    let colorcito = "blue", movimiento = 10;
    switch(evento.keyCode){
        case teclas.UP : 
            dibujarLinea(papel, colorcito, x, y, x, y - movimiento);
            y -= movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(papel, colorcito, x, y, x, y + movimiento);
            y += movimiento;
            break;
        break;
        case teclas.LEFT:
            dibujarLinea(papel, colorcito, x, y, x - movimiento, y);
            x -= movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(papel, colorcito, x, y, x + movimiento, y);
            x += movimiento;
            break;
        default: 
        console.log("Que estas haciendo maní?");
    }
}
function dibujarLinea(lienzo, color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarMouse(evento)
{
    console.log(evento);
}