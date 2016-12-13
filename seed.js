/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Lugar = require('./models/lugarSchema');
var Usuario = require('./models/usuarioSchema');

Lugar.find({}).remove().then(() => {
    Lugar.create({
        "nombre": "Rectorado",
        "lat": -2.147533,
        "lng": -79.964558,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "/imagenes/auditorio_fimcp.jpg",
        "tag":""
    },{
        "nombre": "Tesorería",
        "lat": -2.147817,
        "lng": -79.963775,
        "imagen": "/imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "Bloque 1B-Tesoreria",
        "tag":""
    },{
        "nombre": "Biblioteca",
        "lat": -2.147548,
        "lng": -79.966151,
        "imagen": "/imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "biblioteca",
        "tag":""
    },{
        "nombre": "7",
        "lat": -2.146331,
        "lng": -79.964692,
        "imagen": "/imagenes/fiec_nueva_1.jpg",
        "descripcion": "malicia",
        "tag":""
    },{
        "nombre": "FEPOL",
        "lat": -2.145983,
        "lng": -79.966307,
        "imagen": "/imagenes/auditorio_fimcp.jpg",
        "descripcion": "fepol",
        "tag":""
    },{
        "nombre": "15A - FIEC nueva",
        "lat": -2.144615,
        "lng": -79.967794,
        "imagen": "fiec nueva:nueva fiec",
        "descripcion": "/imagenes/fiec_nueva_1.jpg",
        "tag":""
    },{
        "nombre": " Bloque 16A",
        "lat": -2.145771,
        "lng": -79.96679,
        "imagen": "/imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "laboratorios de computacion:laboratorios de computacion de la fiec",
        "tag":""
    },{
        "nombre": "16C - Laboratorios de computación",
        "lat": -2.145101,
        "lng": -79.967257,
        "imagen": "/imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "Laboratorios de computacion de la fiec",
        "tag":""
    },{
        "nombre": "18B",
        "lat": -2.144752,
        "lng": -79.966353,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "laboratorio de ing mecanica:laboratorios de ing mecanic",
        "tag":""
    },{
        "nombre": "Bloque 19A",
        "lat": -2.145969,
        "lng": -79.965787,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "ict:edificio inteligente ict",
        "tag":""
    },{
        "nombre": "Bloque 20A",
        "lat": -2.145529,
        "lng": -79.965412,
        "imagen": " imagenes/auditorio_fimcp.jpg",
        "descripcion": "facultad de la tierra:facultad de ingenieria en ciencias de la tierra",
        "tag": ""
    },{
        "nombre": "Bloque 20D",
        "lat": -2.146204,
        "lng": -79.965045,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "banco pacifico:banco:bienestar estudiantil",
        "tag": ""
    },{
        "nombre": "FEN",
        "lat": -2.147737,
        "lng": -79.968827,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "facultad de ciencias sociales y humanisticas:fen",
        "tag": ""
    },{
        "nombre": "Bloque 24A",
        "lat": -2.145421,
        "lng": -79.965952,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "fiec vieja:aulas de la facultad electectrica:aulas ingenieria electrica:aulas fiec",
        "tag": ""
    },{
        "nombre": "Bloque 24C",
        "lat": -2.145016,
        "lng": -79.965839,
        "imagen": "imagenes/auditorio_fimcp.jpg",
        "descripcion": "aulas_mecanica",
        "tag": ""
    },{
        "nombre": "Bloque 24D",
        "lat": -2.145831,
        "lng": -79.965582,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "aulas de icm",
        "tag":""
    },{
        "nombre": " Bloque 24E",
        "lat": -2.144202,
        "lng": -79.966297,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "aulas y labs de ing mecanica",
        "tag":""
    },{
        "nombre": "Bloque 25",
        "lat": -2.146461,
        "lng": -79.967109,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "icm gobierno inst fisica y matematica:departamento de fisica:departamento de matematicas",
        "tag":""
    },{
        "nombre": "Bloque 26C",
        "lat": -2.146913,
        "lng": -79.967148,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "icqm gobierno inst quimica y humanidades:departamento de quimica",
        "tag":""
    },{
        "nombre": "Bloque 26A",
        "lat": -2.147529,
        "lng": -79.96789,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "auditorio_iche",
        "tag":""
    },{
        "nombre": "27A",
        "lat": -2.146718,
        "lng": -79.967689,
        "imagen": "laboratorio de fisica:laboratorio de quimica",
        "descripcion": "lab_fisca_y_quimica",
        "tag":
    },{
        "nombre": "CEMA",
        "lat": -2.14614,
        "lng": -79.964258,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "cema",
        "tag":""
    },{
        "nombre": "Arqueología",
        "lat": -2.145177,
        "lng": -79.965049,
        "latt": -2.145129,
        "lngg": " -79.965197",
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "arqueologia",
        "tag":""
    },{
        "nombre": "Bloque 31B",
        "lat": -2.148616,
        "lng": -79.967469,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "celex:basico nuevo",
        "tag":""
    },{
        "nombre": "Bloque 32A",
        "lat": -2.146928,
        "lng": -79.966768,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "basico_viejo",
        "tag": ""
    },{
        "nombre": "FIMCBOR",
        "lat": -2.146776,
        "lng": -79.962867,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "gobierno de maritima y c. del mar",
        "tag":""
    },{
        "nombre": "Aula de Marítima",
        "lat": -2.146684,
        "lng": -79.963286,
        "imagen": "imagenes/fiec_vieja_5.jpg",
        "descripcion": "aula_maritima",
        "tag":""
    },{
        "nombre": "62-Laboratorio de acuicultura",
        "lat": -2.146625,
        "lng": -79.962734,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "lab_acuicultura",
        "tag":""
    },{
        "nombre": "Coliseo",
        "lat": -2.145025,
        "lng": -79.96415,
        "imagen": "imagenes/auditorio_fimcp.jpg",
        "descripcion": "coliseo",
        "tag":""
    },{
        "nombre": "74 - CEPROEM ",
        "lat": -2.148773,
        "lng": -79.964967,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "ceproem",
        "tag":""
    },{
        "nombre": "caseta de fotocopias fcsh:cabana de copias",
        "lat": -2.147291,
        "lng": -79.966992,
        "imagen": "imagenes/fiec_nueva.jpg",
        "descripcion": "tesoreria_copia",
        "tag":""
    },{
        "nombre": "Bar de mecánica",
        "lat": -2.14506,
        "lng": -79.966384,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "bar_mecanica",
        "tag":
    },{
        "nombre": "FIEC",
        "lat": -2.145134,
        "lng": -79.967095,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "-79.966361:-2.145777",
        "tag": ""
    },{
        "nombre": "FIMCP",
        "lat": -2.144339,
        "lng": -79.966041,
        "imagen": "imagenes/auditorio_fimcp.jpg",
        "descripcion": "-79.965195 :-2.143577",
        "tag": ""
    },{
        "nombre": "FCNM",
        "lat": -2.14712,
        "lng": -79.967363,
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "-79.966488:-2.146260",
        "tag": ""
    },{
        "nombre": "FCSH",
        "lat": -2.147505,
        "lng": -79.968109,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "-79.968431:-2.147307",
        "tag": ""
    },{
        "nombre": "FICT",
        "lat": -2.145728,
        "lng": -79.965279,
        "imagen": "imagenes/fiec_parqueo_profesores.jpg",
        "descripcion": "-79.964490:-2.146010",
        "tag": ""
    },{
        "nombre": "FIMCBOR",
        "lat": -2.146539,
        "lngg": "-79.963547:-2.147107",
        "imagen": "imagenes/fiec_nueva_1.jpg",
        "descripcion": "-79.962293:-2.145981",
        "tag": ""
    },{
        "nombre": "EDCOM",
        "lat": -2.143777,
        "lng": -79.962331,
        "imagen": "imagenes/auditorio_fimcp.jpg",
        "descripcion": "-79.961043",
        "tag":""
    }).then(() => {
        console.log("datos de lugar preeliminares.");
    });
});
Usuario.find({}).remove().then(() => {
    console.log("fsdas");
    Usuario.create({
        nombres: 'John',
        apellidos: 'Doe',
        nickname: 'johndoe1',
        email: 'john@espol.edu.ec',
        contrasenia: '12345'
    }).then(() => {
        console.log("datos de usuario preeliminares.");
    });
});
