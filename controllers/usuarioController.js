//This Controller deals with all functionalities of Student

function usuarioController() {
    var Usuario = require('../models/usuarioSchema');

    // Creating New Student
    this.createUsuario = function(req, res, next) {
        var nombre = req.params.nombre;
        var email = req.params.email;
        var id = req.params.id;
        var contrasenia = req.params.contrasenia;

        Usuario.create({
            nombre: nombre,
            email: email,
            id: id,
            contrasenia: contrasenia
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