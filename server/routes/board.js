var express = require('express');
var router = express.Router();
// Database Model
var NoticeModel = require('../models/NoticeModel');

router.get('/', function (req, res) {
  res.send('board routing');
});

router.get('/write', function (req, res) {
  res.render('addContent', {contents:""});
});

router.post('/write', function (req, res) {
  var notice = new NoticeModel({
    title: req.body.title,
    contents: req.body.content
  });
  notice.save(function (err) {
    res.redirect('/');
  });
});

router.get('/delete/:pk', function (req, res) {
  NoticeModel.remove({ pk: req.params.id }, function (err) {
    res.redirect('/');
  });
});

router.get('/edit/:pk', function (req, res) {
  NoticeModel.findOne({ pk: req.params.pk }, function (err, contents) {
    res.render('addContent', { contents: contents });
  });
});

router.post('/edit/:pk', function (req, res) {
  var query = {
    title: req.body.title,
    contents: req.body.content
  };

  NoticeModel.update({ pk: req.params.pk }, { $set: query }, function (err) {
    res.redirect('/'); 
  });
});

module.exports = router;