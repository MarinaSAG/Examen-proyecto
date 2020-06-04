let mongoose = require('mongoose');
//Vamos a unirlo al modelo
let pintores = require('../models/pintores.js');

let pintorController = {};

/*LISTAR -> FIND()*/
pintorController.list = (req, res)=>{
    pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('Error: ', err);
        }
        {
            res.render('../views/pages/index', {
                pintores: pintor,
                titulo: "Listado de pintores",
                year: new Date().getFullYear()
            })
        }
    })
};

module.exports = pintorController;
