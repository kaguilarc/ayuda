'use strict';
const usuarioModel = require('./usuarios.model');

module.exports.registrar = function (req, res) {

    let nuevo_usuario = new usuarioModel({
        cedula: req.body.cedula,
        tipo: req.body.tipo,
        nombre: req.body.nombre,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        nacionalidad: req.body.nacionalidad,
        correo: req.body.nacionalidad,
        contrasenia: req.body.contrasenia
    });

    nuevo_usuario.save(function (error) {

        if (error) {
            res.json({
                success: false,
                msj: 'Error al registrar usuario ' + error
            });
        } else {
            res.json({
                success: true,
                msj: 'Usuario registrado correctamente'
            });
        }

    });
};

module.exports.validar = function (req, res) {


    usuarioModel.findOne({ correo: req.body.correo }).then(

        function (usuario) {
            console.log(req.body.correo + " ***********+" + usuario.correo + "+*********************************************" + req.body.clave);

            if (usuario) {
                if (usuario.contrasenia == req.body.contrasenia) {
                    

                    res.json({
                        success: true,
                        usuario: usuario
                    });
                } else {
                    res.json({
                        success: false,
                    });
                }

            } else {
                res.json({
                    success: false,
                    msg: 'EL usuario no existe'
                });
            }
        }
    )
};
