const Materia = require("./materia");

class Estudiante{

    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.materias = [];
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setApellido(apellido){
        this.apellido = apellido;
    }

    setEmail(email){
        this.email = email;
    }

    matricularMateria(codigo, nombre, nota){
        let objMateria = new Materia(codigo, nombre, nota);
        this.materias.push(objMateria);
    }

    mostrarMaterias(){
        this.materias.forEach(element => {
            console.log(element.codigo+" - "+element.nombre);
        });
    }

    getMateria(codigo){
        let objMateria = this.materias.filter(m => (m.codigo == codigo));
        return objMateria;
    }

    elevarCuadrado(){
        let tempo = this.materias.map( m => {
            m.nota *= 2;
            return m;
        } );
        return tempo;
    }

    //Métodos
    saludar(){
        console.log("Hola mundo");
    }

    sumar(num1, num2){
        return num1 + num2;
    }

}

module.exports = Estudiante;

/*********************
 * Cree una clase llamada Materia,
 * y desarrolle un método que le permita 
 * al estudiante matricular y consultar
 * materias.
 * atributos de Materia:
 *      codigo, nombre
 */