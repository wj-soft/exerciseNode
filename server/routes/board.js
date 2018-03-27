var express = require('express');
var router = express.Router();
// Database Model
var NoticeModel = require('../models/NoticeModel');

router.get('/', function (req, res) {
  res.send('board routing');
});

router.get('/test', function (req, res) {
  res.render('board/test',
    { message: "hello" } 
  );
});

router.post('/test', function (req, res) {
  var notice = new NoticeModel({
    name: "test",
    content: "content test",
  });
  notice.save(function (err) {
    res.redirect('/');
  });
});

module.exports = router;