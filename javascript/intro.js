//Únicamente funcional sobre nodejs
const functions = require('./functions.js');


functions.saludar();

var result = functions.sumar(5, 5);
console.log("resultado: ", result);

let band = functions.validar("a");
console.error(band);

band = functions.validar("Hola mundo");
console.log(band);


let numeros = functions.mayorque(19);
console.log(numeros);


let numFiltro = functions.filtro(10);
console.log(numFiltro);