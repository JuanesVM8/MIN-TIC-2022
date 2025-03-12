//Importar mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Construir el esquema de coleción de la entidad (colección de documentos)
let productoSchema = new Schema({
    //Campos de los documentos que contendrá el esquema
    nombre: {
        type: String
    },
    precio: {
        type: Number
    },
    categoria: {
        type: String
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    }
}, {
    collection: "personas"
});

//Exportar el modelo a manejar dentro del esquema creado
module.exports = mongoose.model("Persona", productoSchema);