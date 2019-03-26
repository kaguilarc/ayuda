
// Se utiliza http dentro de la arquitectura
const http = require('http');

const port = 3000; //Se establece el puerto 3000 como punto de origen para acceder a la aplicaci�n, para acceder se usa localhost:3000 en el navegador

const serveStatic = require('serve-static'); //Es la dependencia que permite crear un servidor est�tico
// Se exporta la conexi�n de nodejs
const connect = require('connect');

const nodemon = require('nodemon');


connect().use(serveStatic(__dirname)).listen(port, () => {
    console.log(`La aplicaci�n esta levantada dentro del puerto ${port} ingrese usando localhost:3000/public`);
    nodemon({
        script: 'api/index.js',
        ext: 'js'
    });
});