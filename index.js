var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database');
var path =require('path');

mongoose.connect(config.uri);

app.use(express.static(__dirname + "/client/dist"));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(8080);