var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/', function (req, res, next) {
   console.log('I AM AT USERS ROUTER');
});


// (accessed at POST http://localhost:3000/api/signup)

module.exports = router;
