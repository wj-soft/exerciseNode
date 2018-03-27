// ENV
require('dotenv').config();

var express = require('express');
var path = require('path');

// Database Model
var NoticeModel = require('./models/NoticeModel');

// Database Connection
var mongoose = require('mongoose');

mongoose.Promise = global.Promise
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection
  .on('error', console.error)
  .once('open', function(){
    console.log('mongodb connected');
  });

var connect = mongoose.connect('mongodb://127.0.0.1:27017/expressExercise', { useMongoClient: true });
autoIncrement.initialize(connect);

var board = require('./routes/board');

var app = express();
var port = process.env.PORT || 4500;

// Templet Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.send('hello world')
});



//ROUTING
app.use('/board', board);

app.listen(port, function(req,res){
  console.log("express server on port", port)
});