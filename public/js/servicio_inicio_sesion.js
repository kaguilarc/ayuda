//'use strict';

let validar = (pcorreo, pcontrasenia) => {

    try {


        let respuesta = '';

        let peticion = $.ajax({
            url: "http://localhost:4000/api/validar_credenciales",
            method: "POST",
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false,
            data: {
                correo: pcorreo,
                contrasenia: pcontrasenia
            }
        });

        peticion.done(function (res) {

            respuesta = res.success;
            sessionStorage.setItem('conectado', res.success);
            sessionStorage.setItem('tipo_usuario', res.usuario.tipo);


        });
        
        peticion.fail(function (jqXHR, textStatus) {
            console.log(textStatus);
        });
        return respuesta;

    } catch (e) {
        console.log(e);
    }

};
