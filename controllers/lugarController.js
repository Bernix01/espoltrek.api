//This Controller deals with all functionalities of Student

function lugarController () {
	var Lugar = require('../models/lugarSchema');

	// Creating New Student
	this.createLugar = function (req, res, next) {
		var nombre = req.params.nombre;
		var descripcion = req.params.email;
		var etiquetas = req.params.id;
		var contrasenia = req.params.contrasenia;

		Student.create({nombre:nombre,email:email,id:id,contrasenia:contrasenia}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});
			}
			else {
        return res.send({'result':result,'status':'successfully saved'});
      }
		});
	};

  // Fetching Details of Places
  this.getLugares = function (req, res, next) {

    Lugar.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      }
      else {
        return res.send({'Lugares':result});
      }
    });
  };

return this;

};

module.exports = new lugarController();
