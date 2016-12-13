module.exports = function(app) {
    var usuarioController = require('../controllers/usuarioController');
    var lugarController = require('../controllers/lugarController');
    app.get('/', function(req, res, next) {
        return res.send("WELCOME TO REST API");
    });
    app.get('/otraRuta', function(req, res, next) {
        return res.send("another page hehe");
    });

    //app.post('/getUsuario', usuarioController.createUsuario); //Create Student API
    app.get('/lugar', lugarController.getLugares); //Gets ALL students details API
    app.post('/lugar', lugarController.createLugar); //Gets ALL students details API
    app.post('/lugar/:id/tags', lugarController.addtag); //Gets ALL students details API
    app.post('/login',usuarioController.login)
    //app.get('/lugar/:id',lugarController.getById);
    //app.get('/lugar/zone',lugarController.getById(id));
};