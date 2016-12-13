//This Controller deals with all functionalities of Student


function usuarioController () {
	var Usuario = require('../models/usuarioSchema');

	// Creating New Student
	this.createUsuario = function (req, res, next) {
		var nombres = req.params.nombres;
		var apellidos = req.params.apellidos;
		var email = req.params.email;
		var contrasenia = req.params.contrasenia;
		var nickname = req.params.nickname;
		var matricula = req.params.matricula;
		var cedula = req.params.cedula;

		Usuario.create({nombres:nombres,apellidos:apellidos,email:email,contrasenia:contrasenia, cedula:cedula,matricula:matricula,nickname:nickname}, function(err, result) {
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



    this.login = function(req, res, next) {
        var user = req.params.us;
        var psw = req.params.psw;
        Usuario.findOne({
            nickname: user
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }


    return this;


};

module.exports = new usuarioController();
