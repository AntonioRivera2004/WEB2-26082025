//Programa que solicita 2 numeros y les realiza 
//suma, resta, multiplicacion, division, modulo.

let A=parseFloat(prompt("Ingresa el numero A: "));
let B=parseFloat(prompt("Ingresa el numero B: "));

let suma, resta, multiplicacion, division, modulo;

suma=A+B;
resta=A-B;
multiplicacion=A*B;
division=A/B
modulo=A%B;

console.log("Los resultados son: \n");
console.log("Suma= "+suma);
console.log("Resta= "+resta);
console.log("Multiplicación= "+multiplicacion);
console.log("Division= "+division);
console.log("Modulo= "+modulo);