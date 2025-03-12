//Importar express
const express = require('express');
const PersonaController = require('../controllers/personaController');

class PersonaRouter {
    constructor() {
        //Crear un atributo de la clase de tipo Router
        this.router = express.Router();
        this.config();
    }

    config() {
        //Crear objeto de tipo PersonaController
        const objPersonaC = new PersonaController();
        //END POINTS
        this.router.get('/personas', objPersonaC.getPersonas);
        this.router.post('/personas', objPersonaC.crearPersona);
        this.router.put('/personas', objPersonaC.actualizarPersona);
        this.router.delete('/personas/:email', objPersonaC.eliminarPersona);
    }
}

module.exports = PersonaRouter;
