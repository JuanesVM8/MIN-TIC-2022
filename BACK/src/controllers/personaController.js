const Connection = require('../database/connection_db');

let obj_1 = {
    "nombre": "Andrés",
    "apellido": "Quintero",
    "email": "andres@gmail.com"
}
let obj_2 = {
    "nombre": "Ana maria",
    "apellido": "Hernán",
    "email": "anamaria@gmail.com"
}
let obj_3 = {
    "nombre": "Diego",
    "apellido": "Ospina",
    "email": "diegoospina@gmail.com"
}
let obj_4 = {
    "nombre": "Juan",
    "apellido": "Veléz",
    "email": "juanvelez@gmail.com"
}
var personas = [obj_1, obj_2, obj_3, obj_4];

class PersonaController {
    constructor() {

    }

    //Acciones o método que procesarán solicitudes http

    getPersonas(req, res) {
        //retornar datos
        res.status(200).json(personas);
    }

    crearPersona(req, res) {
        //Obtener datos de la petición
        let { nombre, apellido, email } = req.body;
        const objConnection = new Connection();
        //Crear query
        let query = "INSERT INTO personas(nombre, apellido) VALUES('"+nombre+"', '"+apellido+"', '"+email+"')";
        objConnection.insert(query);
        res.status(200).send();
        /*
        if (nombre != null && apellido != null && email != null) {
            let obj = { nombre, apellido, email };
            personas.push(obj);
            //personas.push(req.body);
            //personas.push({nombre, apellido, email});
            res.status(201).json({ "message": "Usuario creado" });
        } else {
            res.status(400).send();
        }
        */
    }

    actualizarPersona(req, res) {
        //Capturar datos del cuerpo de la petición
        let { nombre, apellido, email } = req.body;
        //Buscar la persona en el array por el email y actualizarla
        personas.map(element => {
            if (element.email == email) {
                element.nombre = nombre;
                element.apellido = apellido;
            }
        });
        res.status(200).json({ "message": "Usuario actualizado" });
    }

    eliminarPersona(req, res) {
        let email = req.params.email;
        //Eliminar un usuario por email del arreglo personas
        let tempoPersonas = [];
        personas.forEach(objPersona => {
            if (objPersona.email != email) {
                tempoPersonas.push(objPersona);
            }
        });
        personas = tempoPersonas;
        res.status(200).send();
    }
}

module.exports = PersonaController;