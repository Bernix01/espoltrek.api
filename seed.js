/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Lugar = require('./models/lugarSchema');

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