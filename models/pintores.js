const mongoose = require('mongoose');

//Vamos a crear un Schema (nuestra base de datos)

let Schema = mongoose.Schema;

//Crear la colección
let pintoresSchema = new Schema({
    name:{
        type: String,
        required: [true, 'El nombre del artista']
    },
    lastn:{
        type: String,
        required: [true, 'Apellido']
    },
    corriente:{
        type: String,
        required: [true, 'Estilo del cuadro']
    },
    nacionalidad:{
        type: String
    },
    painting:{
        type: String
    }
});

module.exports = mongoose.model('pintores', pintoresSchema);