const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String
    }
}, {
    collection: "categorias"
}); 

module.exports = mongoose.model("Categoria", categoriaSchema);