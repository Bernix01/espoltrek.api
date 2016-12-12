//This Controller deals with all functionalities of Student

function lugarController() {
    var Lugar = require('../models/lugarSchema');

    // Creating New Lugar
    this.createLugar = function(req, res, next) {
        var nombre = req.params.nombre;
        var descripcion = req.params.descripcion;
        var etiquetas = req.params.etiquetas;
        var lat = req.params.lat;
        var lng = req.params.lng;
        var imagen = req.params.imagen;

        Lugar.create({
        	nombre:nombre,
        	descripcion:descripcion,
        	etiquetas:etiquetas,
        	lat:lat,
        	lng:lng,
        	imagen:imagen

        }, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({
                    'error': err
                });
            } else {
                return res.send({
                    'result': result,
                    'status': 'successfully saved'
                });
            }
        });
    };

    this.addtag = function(req,res,next){
    	var etiqueta = req.params.etiqueta;
    	Lugar.find({_id:req.params.id})
    };

    // Fetching Details of Places
    this.getLugares = function(req, res, next) {

        Lugar.find({}, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({
                    'error': err
                });
            } else {
                return res.send({
                    'Lugares': result
                });
            }
        });
        return next();
    };

    return this;

};

module.exports = new lugarController();