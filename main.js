const resultado = (cantidad,precio) =>{
    return parseInt(cantidad) * parseInt(precio);
}
alert ("¿Que deseas comprar?");

let prenda= "";

while(prenda != 5) {
    prenda = parseInt(prompt("1= remeras  2=buzos  3=pantalones  4=accesorios  ingrese 5 cuando termine su compra."))
    if (prenda === 1){
    let totalDePrendas = parseInt(prompt("El precio de las remeras es del $3500    ¿cuantas remeras deseas comprar?"));
    let PrecioFinal = resultado(totalDePrendas,3500);
 alert(`Gracias por su compra, el total seria de $${PrecioFinal} `);
}
else if (prenda === 2){
     totalDePrendas = parseInt(prompt("El precio de los buzos es del $7000    ¿cuantos buzos deseas comprar?"));
     PrecioFinal = resultado(totalDePrendas,7000);
 alert(`Gracias por su compra, el total seria de $${PrecioFinal} `);
}
else if (prenda === 3){
    totalDePrendas = parseInt(prompt("El precio de los pantalones es del $6000    ¿cuantos pantalones deseas comprar?"));
    PrecioFinal = resultado(totalDePrendas,6000);
alert(`Gracias por su compra, el total seria de $${PrecioFinal} `);
}
else if (prenda === 4){
    totalDePrendas = parseInt(prompt("El precio de los accesorios es del $2000      ¿cuantos accesorios deseas comprar?"));
    PrecioFinal = resultado(totalDePrendas,2000);
alert(`Gracias por su compra, el total seria de $${PrecioFinal} `);
}
else if(prenda==5) {
    alert("¡Gracias por visitarnos! Vuelva pronto :)")
}

else {
    alert("ingrese un numero correspondiente")
}
}