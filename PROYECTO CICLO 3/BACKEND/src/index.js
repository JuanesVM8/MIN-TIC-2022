//Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
//Dependencia para autorizar conexiones de origen cruzado
const cors = require('cors');
//Importar modulos
const key_database = require('./database/key_database');
const ProductoRouter = require('./routers/productoRouter');

class Server {

    constructor() {
        this.conectarBd();
        //Crear la aplicación express
        this.app = express();
        this.config();
    }

    config() {
        //Setear la variable que representará el puerto por el que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        //hacer uso de cors para conexiones de origen cruzado
        this.app.use(cors());
        //Crear ruta raíz del servidor
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ "message": "All ok" });
        });
        //Añadir la ruta raíz a express
        this.app.use(router);

        //CREAR RUTAS
        const objProductoR = new ProductoRouter();
        this.app.use(objProductoR.router);

        //Poner el servidor a la escucha
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        })
    }

    conectarBd() {
        mongoose.connect(key_database.db).then(() => {
            console.log("Conexión exitosa a la BD");
        }).catch(error => {
            console.error(error);
        });
    }
}

new Server();
