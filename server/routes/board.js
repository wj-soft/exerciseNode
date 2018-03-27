var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('board routing');
});

router.get('/test', function (req, res) {
  res.render('board/test',
    { message: "hello" } 
  );
});

module.exports = router;