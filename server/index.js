// ENV
require('dotenv').config();

// Dependencies
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


// Database Connection
var mongoose = require('mongoose');

mongoose.Promise = global.Promise
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection
db.on('error', console.error)
db.once('open', function(){
    console.log('mongodb connected');
  });

var connect = mongoose.connect('mongodb://127.0.0.1:27017/expressExercise', { useMongoClient: true });
autoIncrement.initialize(connect);

// database model load
var NoticeModel = require('./models/NoticeModel');

//Routing Module
var board = require('./routes/board');

//Server Running
var app = express();
var port = process.env.PORT || 4500;

// Templet Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
  // db.notices.find()
  NoticeModel.find({}, function(err, contents){
    res.render('main', {contents:contents});
  })
});


//ROUTING
app.use('/board', board);

app.listen(port, function(req,res){
  console.log("express server on port", port)
});