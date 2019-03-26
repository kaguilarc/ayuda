'use strict';
/**
 * Exportamos todas las dependencias necesarias para establecer la conexi�n
 */
const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

/**
 * Se definen las variables necesarias para la conexi�n con MongoDB
 */
let db = mongoose.connection,
    //dburl = 'mongodb://Admin:chocolateadmin@proyecto-shard-00-00-bcf9m.mongodb.net:27017,proyecto-shard-00-01-bcf9m.mongodb.net:27017,proyecto-shard-00-02-bcf9m.mongodb.net:27017/test?ssl=true&replicaSet=Proyecto-shard-0&authSource=admin&retryWrites=true',
    dburl = 'mongodb://kenaguilar7:perico@proyecto-shard-00-00-vm912.mongodb.net:27017,proyecto-shard-00-01-vm912.mongodb.net:27017,proyecto-shard-00-02-vm912.mongodb.net:27017/proyecto_individual?ssl=true&replicaSet=proyecto-shard-0&authSource=admin&retryWrites=true',
    //mongodb+srv://kenaguilar7:<PASSWORD>@proyecto-vm912.mongodb.net
    port = 4000;

/**
 * Se le indica que cree un servidor extra dentro del puerto 4000 y escuche los cambios que se le hagan a esos archivos
 */
let server = app.listen(port, _server());

/**
 * Se define la conexi�n con Mongoose, envi�ndole como par�metro la url de la base de datos
 */
mongoose.connect(dburl, { useNewUrlParser: true });

/**
 * Si la conexi�n falla, imprime en consola el error
 */
db.on('error', console.error.bind(console, 'Error de conexi�n con la base de datos: '));

/**
 * Si la conexi�n es exitosa nos imprime en la consola que se ha establecido conexi�n con Mongo
 */
db.once('open', function () {
    console.log('Base de datos conectada correctamente');
});

/**
 * Le indicamos a express que env�e las respuestas a la carpeta "public"
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Le indicamos a la aplicaci�n que el formato de los datos va a ser JSON
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});




const usurios = require('./componentes/usuarios/usuarios.route');
app.use('/api', usurios);


// Se guarda todo lo que se ha realizado
module.exports = app;

function _server(){
    console.log('Back-end corriendo en el puerto ' + port);
};