module.exports = function(app) {
	var usuarioController= require('../controllers/usuarioController');
	var lugarController=require('../controllers/lugarController');
	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});
	app.get('/otraRuta',function(req,res,next){
		return res.send("another page hehe");
	});

	app.post('/getUsuario',usuarioController.createUsuario); //Create Student API
	app.get('/getLugar',lugarController.getLugares); //Gets ALL students details API
};
