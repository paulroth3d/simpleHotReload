var express = require('express');
var http = require('http');
var path = require('path');
var reload = require('reload');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

var publicDir = path.join(__dirname, 'public');

app.set('port', process.env.PORT || 5000);

app.use(logger('dev'));
app.use(express.static('src/public'));
app.use(bodyParser.json());

app.get('/', function(req, resp){
    resp.sendFile(path.join(publicDir, 'index.html'));
});

var server = http.createServer(app);

reload(app);

server.listen(app.get('port'), function(){
    console.log('Web server listening on port ' + app.get('port'));
})