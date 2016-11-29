module.exports = function(app) {
	var studentController= require('../controllers/studentController');
	var lugarController=require('../controller/lugarController');
	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});
	app.get('/otraRuta',function(req,res,next){
		return res.send("another page hehe");
	});

	app.post('/createStudent',studentController.createStudent); //Create Student API
	app.get('/getStudent',studentController.getStudent); //Gets ALL students details API
};
