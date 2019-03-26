'use strict';

let mongoose = require('mongoose');

let usuario_registroSchema = new mongoose.Schema({
    cedula: { type: String, required: true },
    tipo: { type: String, required: true},
    nombre: { type: String, required: true },
    apellido_paterno: { type: String, required: true },
    apellido_materno: { type: String, required: false },
    nacionalidad: { type: String, required: false },
    correo: { type: String, required: true },
    contrasenia: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuario_registroSchema);