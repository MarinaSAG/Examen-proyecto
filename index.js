  //importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor del puerto
const port = process.env.PORT || 62544;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs'), 
hbs.registerPartials(__dirname + '/views/partials/');
app.use(express.static(__dirname + '/public'));
//Vamos a declarar a express la ruta a emplear
app.use('/', pintoresRouter);

//Mis rutas
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/home', (req, res)=>{
    res.render('./pages/home', {
        autor:'Marina Santa Anna Gaytán - 4°E',
        year: new Date().getFullYear(),
        title:'Grandes Printores'
    });
});

app.get('/felguerez', (req, res)=>{
    res.render('./pages/Manuel-Felguerez', {
        autor:'Marina Santa Anna Gaytán - 4°E',
        year: new Date().getFullYear(),
        title:'Manuel Felguerez'
    });
});

app.get('/afremov', (req, res)=>{
    res.render('./pages/Leonid-Afremov', {
        autor:'Marina Santa Anna Gaytán - 4°E',
        year: new Date().getFullYear(),
        title:'Leonid Afremov'
    });
});

app.get('/gerome', (req, res)=>{
    res.render('./pages/Jean-Leon-Gerome', {
        autor:'Marina Santa Anna Gaytán - 4°E',
        year: new Date().getFullYear(),
        title:'Jean Leon Gerome'
    });
});

app.get('/bazan', (req, res)=>{
    res.render('./pages/Carlos-Bazan', {
        autor:'Marina Santa Anna Gaytán - 4°E',
        year: new Date().getFullYear(),
        title:'Carlos Bazan'
    });
});

app.get('/sobremi', (req, res)=>{
    res.render('./pages/sobremi');
});

/*La conexión con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Marinovsky:pixiu5@santaannamarina-xicbf.azure.mongodb.net/pintores?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexión establecida con Mongo :D');
})
.catch(err=> console.log(err));

/*Arrancar el servidor web*/
app.listen(port, ()=>{
    console.log('Escuchando el puerto 62544');
});