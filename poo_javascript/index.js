const Estudiante = require("./estudiante");


const objEstudiante = new Estudiante("Pedro", "Quintana", "pedro@gmail.com");

/*
objEstudiante.saludar();
objEstudiante.setNombre("Juan");
objEstudiante.setApellido("Quintero");
objEstudiante.setEmail("juan@gmail.com");
*/

console.log(objEstudiante.nombre);
console.log(objEstudiante.apellido);
console.log(objEstudiante.email);



for(let i = 0; i < 10; i++){
    let codigo = "m0"+i;
    let nombre = "Matemáticas "+i;
    objEstudiante.matricularMateria(codigo, nombre, i);
}

objEstudiante.mostrarMaterias();
console.log("-------------");
console.log( objEstudiante.getMateria("m05") );

console.log( objEstudiante.elevarCuadrado() );