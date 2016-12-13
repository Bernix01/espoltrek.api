/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Lugar = require('./models/lugarSchema');
var Usuario = require('./models/usuarioSchema');

Lugar.find({}).remove().then(() => {
    Lugar.create({
        nombre: 'Lugar1',
        descripcion: 'descripcion',
        etiquetas: ['a','b','c'],
        lat: -23.34234,
        lng: 2.35453
    }).then(()=>{
        console.log("datos de lugar preeliminares.");
    });
});
Usuario.find({}).remove().then(() => {
    Usuario.create({
        nombres: 'John',
        apellidos: 'Doe',
        nickname: "johndoe1",
        email : 'john@espol.edu.ec',
        contrasenia : '12345'
    }).then(()=>{
        console.log("datos de usuario preeliminares.");
    });
});
