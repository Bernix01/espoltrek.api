//This Controller deals with all functionalities of Student


function usuarioController() {
    var Usuario = require('../models/usuarioSchema');

    // Creating New Student
    this.createUsuario = function(req, res, next) {
        var nombres = req.params.nombres;
        var apellidos = req.params.apellidos;
        var email = req.params.email;
        var contrasenia = req.params.contrasenia;
        var nickname = req.params.nickname;
        var matricula = req.params.matricula;
        var cedula = req.params.cedula;

        Usuario.create({
            nombres: nombres,
            apellidos: apellidos,
            email: email,
            contrasenia: contrasenia,
            cedula: cedula,
            matricula: matricula,
            nickname: nickname
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

    // Fetching Details of Student
    this.getUsuarios = function(req, res, next) {

        Usuario.find({}, function(err, result) {
            if (err) {
                console.log(err);
                return res.send({
                    'error': err
                });
            } else {
                return res.send({
                    'Usuarios: ': result
                });
            }
        });
    };



    this.login = function(req, res, next) {
        var nickname = req.params.nickname;
        var psw = req.params.psw;
        Usuario.findOne({
            email: nickname
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return res.send({
                    mensaje: 'Nombre de usuario incorrecto',
                    valido: false
                });
            }
            if (!user.validPassword(psw)) {
                return res.send({
                    mensaje: 'Contraseña incorrecta',
                    valido: false
                });
            }
            return res.send({
                mensaje: "Ingreso exitoso",
                valido: true,
                usuario: user
            });
        });
    }


    return this;


};

module.exports = new usuarioController();