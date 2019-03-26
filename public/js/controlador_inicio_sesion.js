'use strict';

const input_correo = document.querySelector('#txt_correo');
const input_clave = document.querySelector('#txt_clave');
const btn_inicia_sesion = document.querySelector('#btn_enviar');

function obtenerDatos() {
    let correo = input_correo.value;
    let clave = input_clave.value;
    
    validar(correo, clave);

    
};

btn_inicia_sesion.addEventListener('click', obtenerDatos);