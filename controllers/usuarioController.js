//This Controller deals with all functionalities of Student

function usuarioController () {
	var Usuario = require('../models/usuarioSchema');

	// Creating New Student
	this.createUsuario = function (req, res, next) {
		var nombre = req.params.nombre;
		var email = req.params.email;
		var id = req.params.id;
		var contrasenia = req.params.contrasenia;

		Usuario.create({nombre:nombre,email:email,id:id,contrasenia:contrasenia}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});
			}
			else {
        return res.send({'result':result,'status':'successfully saved'});
      }
		});
	};

  // Fetching Details of Student
  this.getUsuarios = function (req, res, next) {

    Usuario.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err});
      }
      else {
        return res.send({'Usuarios: ':result});
      }
    });
  };

return this;

};

module.exports = new usuarioController();
