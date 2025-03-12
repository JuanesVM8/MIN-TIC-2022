const producto = require('../models/producto');

class ProductoController {

    constructor() {

    }

    crearProducto(req, res) {
        //crear nuevo documento en mongoDB con la info del cuerpo de la petición
        /*
        Create, Recibe dos parámetros:
        1) los datos a insertar en formato json
        2) función flecha con dos parámetros; 1) error en caso de suceder algún error durante
        la inserción. 2) el documento recién insertado en la BD
        */

        producto.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(201).json(data);
            }
        });

    }

    consultarProductos(req, res) {
        //Obtener todos los productos de mongoDB
        producto.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    eliminarProducto(req, res) {
        let { id } = req.body;
        producto.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        });
    }

    actualizarProducto(req, res) {
        let { id, nombre, precio, categoria, descripcion, imagen } = req.body;
        let obj = {
            nombre, precio, categoria, descripcion, imagen
        }
        producto.findByIdAndUpdate(id, {$set: obj}, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}


module.exports = ProductoController;