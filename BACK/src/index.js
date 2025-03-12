//Importar express
const express = require('express');
const PersonaRouter = require('./routers/personaRouter');

class Server {
    //Método constructor
    constructor() {
        //Crear aplicación express
        this.app = express();
        this.config();
    }

    config() {
        //Configurar/indicar el puerto por el que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que los datos enviados o recibidos al servidor estarán en formato JSON
        this.app.use(express.json());
        //CREAR/CONFIGURAR RUTA RAÍZ DEL SERVIDOR
        let router = express.Router();    
        //Configurar método get en la raíz de nuestro servidor
        router.get('/', (req, res) => {
            res.status(200).json({ "message": "All OK" });
        });
        //CREAR OBJ RUTAS
        const objPersonaR = new PersonaRouter();
        /*********Añadir rutas a  express***************/
        this.app.use(router);
        this.app.use(objPersonaR.router);

        //Levantar el servidor / indicar que quedará a la escucha
        /*Recibe dos parámetros: 
        1-> El puerto por el que correrá el servidor
        2-> Una función que se dispara al correr servidor
         */
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto -> ", this.app.get('port'));
            console.log("Hola mundo en nodejs con express");
        });
    }
}

//Crear un objeto tipo servidor
const objServer = new Server();
