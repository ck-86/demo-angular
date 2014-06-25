/*----------------------------------------/
	Basic Web Server in NodeJS
/-----------------------------------------*/
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/client'));
app.listen(3000);