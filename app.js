var mongoose = require('mongoose/');
var restify = require('restify');
var config = require('./config');
//var mongodbPort = 
var app = restify.createServer({
    name: 'espoltrek-api'
});

app.use(restify.fullResponse());
app.use(restify.bodyParser());
app.use(restify.queryParser());

app.listen(config.port, function() {
    console.log('server listening on port number', config.port);
    
});
var routes = require('./routes/rutasLugar')(app);
require('./seed');