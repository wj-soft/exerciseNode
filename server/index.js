// ENV
require('dotenv').config();

var express = require('express');

var board = require('./routes/board');

var app = express();
var port = process.env.PORT || 4500;

app.get('/', function(req,res){
  res.send('hello world')
});

//ROUTING
app.use('/board', board)

app.listen(port, function(req,res){
  console.log("express server on port", port)
})