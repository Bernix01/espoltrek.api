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
        etiquetas: ['a', 'b', 'c'],
        lat: -23.34234,
        lng: 2.35453
    }, {
        "nombre": "1",
        "lat": -2.147533,
        "lng": -79.964558,
        "imagen": "rectorado",
        "descripcion": "rectorado",
        "tag": "",
    },{
        "nombre": "1B",
        "lat": -2.147817,
        "lng": -79.963775,
        "imagen": "tesoreria",
        "descripcion": "tesoreria",
        "tag": "",
    },{
        "nombre": "2",
        "lat": -2.147548,
        "lng": -79.966151,
        "imagen": "biblioteca",
        "descripcion": "biblioteca",
        "tag": "",
    },{
        "nombre": "7",
        "lat": -2.146331,
        "lng": -79.964692,
        "imagen": "malicia:comedor",
        "descripcion": "malicia",
        "tag": "",
    },{
        "nombre": "9",
        "lat": -2.145983,
        "lng": -79.966307,
        "imagen": "fepol",
        "descripcion": "fepol",
        "tag": "",
    },{
        "nombre": "15A",
        "lat": -2.144615,
        "lng": -79.967794,
        "imagen": "fiec nueva:nueva fiec",
        "descripcion": "fiec_nueva",
        "tag": "",
    },{
        "nombre": "16A",
        "lat": -2.145771,
        "lng": -79.96679,
        "imagen": "laboratorios de la fiec:laboratorios fiec",
        "descripcion": "lab_fiec",
        "tag": "",
    },{
        "nombre": "16C",
        "lat": -2.145101,
        "lng": -79.967257,
        "imagen": "laboratorios de computacion:laboratorios de computacion de la fiec",
        "descripcion": "lab_comp_fiec",
        "tag": "",
    },{
        "nombre": "18B",
        "lat": -2.144752,
        "lng": -79.966353,
        "imagen": "laboratorio de ing mecanica:laboratorios de ing mecanica",
        "descripcion": "lab_ing_mecanica",
        "tag": "",
    },{
        "nombre": "19A",
        "lat": -2.145969,
        "lng": -79.965787,
        "imagen": "ict:edificio inteligente ict",
        "descripcion": "ict",
        "tag": "",
    },{
        "nombre": "20A",
        "lat": -2.145529,
        "lng": -79.965412,
        "imagen": "facultad de la tierra:facultad de ingenieria en ciencias de la tierra",
        "descripcion": "fict",
        "tag": "",
    },{
        "nombre": "20D",
        "lat": -2.146204,
        "lng": -79.965045,
        "imagen": "banco del pacifico:banco pacifico:banco:bienestar estudiantil",
        "descripcion": "bienestar_estudiantil",
        "tag": "",
    },{
        "nombre": "21",
        "lat": -2.147737,
        "lng": -79.968827,
        "imagen": "facultad de ciencias sociales y humanisticas:fen",
        "descripcion": "",
        "tag": "",
    },{
        "nombre": "24A",
        "lat": -2.145421,
        "lng": -79.965952,
        "imagen": "fiec vieja:aulas de la facultad electectrica:aulas ingenieria electrica:aulas fiec",
        "descripcion": "fiec_vieja",
        "tag": "",
    },{
        "nombre": "24C",
        "lat": -2.145016,
        "lng": -79.965839,
        "imagen": "aulas de mecanica",
        "descripcion": "aulas_mecanica",
        "tag": "",
    },{
        "nombre": "24D",
        "lat": -2.145831,
        "lng": -79.965582,
        "imagen": "aulas de ict",
        "descripcion": "aulas_icm",
        "tag": "",
    },{
        "nombre": "24E",
        "lat": -2.144202,
        "lng": -79.966297,
        "imagen": "aulas y labs de ing mecanica",
        "descripcion": "",
        "tag": "",
    },{
        "nombre": "25",
        "lat": -2.146461,
        "lng": -79.967109,
        "imagen": "gobierno inst fisica y matematica:departamento de fisica:departamento de matematicas",
        "descripcion": "icm",
        "tag": "",
    },{
        "nombre": "26",
        "lat": -2.146913,
        "lng": -79.967148,
        "imagen": "gobierno inst quimica y humanidades:departamento de quimica",
        "descripcion": "icqm",
        "tag": "",
    },{
        "nombre": "26A",
        "lat": -2.147529,
        "lng": -79.96789,
        "imagen": "auditorio iche",
        "descripcion": "auditorio_iche",
        "tag": "",
    },{
        "nombre": "27A",
        "lat": -2.146718,
        "lng": -79.967689,
        "imagen": "laboratorio de fisica:laboratorio de quimica",
        "descripcion": "lab_fisca_y_quimica",
        "tag": "",
    },{
        "nombre": "28",
        "lat": -2.14614,
        "lng": -79.964258,
        "imagen": "cema",
        "descripcion": "cema",
        "tag": "",
    },{
        "nombre": "30",
        "lat": -2.145177,
        "lng": -79.965049,
        "latt": -2.145129,
        "lngg": " -79.965197",
        "imagen": "arqueologia",
        "descripcion": "arqueologia",
        "tag": "",
    },{
        "nombre": "31",
        "lat": -2.148616,
        "lng": -79.967469,
        "imagen": "celex:basico nuevo:basico celex",
        "descripcion": "celex",
        "tag": "",
    },{
        "nombre": "32A",
        "lat": -2.146928,
        "lng": -79.966768,
        "imagen": "basico viejo",
        "descripcion": "basico_viejo",
        "tag": "",
    },{
        "nombre": "60",
        "lat": -2.146776,
        "lng": -79.962867,
        "imagen": "gobierno de maritima y c. del mar",
        "descripcion": "fimcbor",
        "tag": "",
    },{
        "nombre": "61",
        "lat": -2.146684,
        "lng": -79.963286,
        "imagen": "aulas maritima:maritima:narnia",
        "descripcion": "aula_maritima",
        "tag": "",
    },{
        "nombre": "62",
        "lat": -2.146625,
        "lng": -79.962734,
        "imagen": "laboratorio de acuicultura:csa",
        "descripcion": "lab_acuicultura",
        "tag": "",
    },{
        "nombre": "70",
        "lat": -2.145025,
        "lng": -79.96415,
        "imagen": "gimnasio:coliseo",
        "descripcion": "coliseo",
        "tag": "",
    },{
        "nombre": "74",
        "lat": -2.148773,
        "lng": -79.964967,
        "imagen": "ceproem",
        "descripcion": "ceproem",
        "tag": "",
    },{
        "nombre": "75A",
        "lat": -2.147291,
        "lng": -79.966992,
        "imagen": "caseta de fotocopias fcsh:cabana de copias",
        "descripcion": "tesoreria_copia",
        "tag": "",
    },{
        "nombre": "76",
        "lat": -2.14506,
        "lng": -79.966384,
        "imagen": "patio de comidas:cocacola:bar de mecanica",
        "descripcion": "bar_mecanica",
        "tag": "",
    },{
        "nombre": "FIEC",
        "lat": -2.145134,
        "lng": -79.967095,
        "latt": -2.145632,
        "lngg": "-79.968279:-2.146045",
        "imagen": "-79.966579:-2.145603",
        "descripcion": "-79.966361:-2.145777",
        "tag": "-79.965740:-2.145247",
        "FIELD9": "-79.965612:-2.144779",
        "FIELD10": "-79.966782:-2.143922",
        "FIELD11": "-79.967806",
        "FIELD12": null
    },{
        "nombre": "FIMCP",
        "lat": -2.144339,
        "lng": -79.966041,
        "latt": -2.144695,
        "lngg": "-79.967007:-2.145305",
        "imagen": "-79.965416:-2.144056",
        "descripcion": "-79.965195 :-2.143577",
        "tag": "-79.966604",
    },{
        "nombre": "FCNM",
        "lat": -2.14712,
        "lng": -79.967363,
        "latt": -2.14876,
        "lngg": "-79.968220:-2.149033",
        "imagen": "-79.967126:-2.146615",
        "descripcion": "-79.966488:-2.146260",
        "tag": "-79.966954:-2.146105",
        "FIELD9": "-79.968338:-2.146866",
        "FIELD10": "-79.968349:-2.147048",
        "FIELD11": "-79.967083:-2.147922",
        "FIELD12": -79.967426
    },{
        "nombre": "FCSH",
        "lat": -2.147505,
        "lng": -79.968109,
        "latt": -2.147516,
        "lngg": "-79.969139:-2.148299",
        "imagen": "-79.968967:-2.148438",
        "descripcion": "-79.968431:-2.147307",
        "tag": "-79.967508:-2.147339"
    },{
        "nombre": "FICT",
        "lat": -2.145728,
        "lng": -79.965279,
        "latt": -2.145881,
        "lngg": "-79.965797:-2.145270",
        "imagen": "-79.965499:-2.145581",
        "descripcion": "-79.964490:-2.146010",
        "tag": "-79.964688",
    },{
        "nombre": "FIMCBOR",
        "lat": -2.146539,
        "lng": -79.962856,
        "latt": -2.146911,
        "lngg": "-79.963547:-2.147107",
        "imagen": "-79.962639:-2.146083",
        "descripcion": "-79.962293:-2.145981",
        "tag": "-79.962615:-2.146345"
    },{
        "nombre": "EDCOM",
        "lat": -2.143777,
        "lng": -79.962331,
        "latt": -2.144313,
        "lngg": "-79.962711:-2.143000",
        "imagen": "-79.962325:-2.143708",
        "descripcion": "-79.961043",
        "tag": "",
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