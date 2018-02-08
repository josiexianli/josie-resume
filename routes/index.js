var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Xian Li Resume' });
});

// router.post('/users', function(req,res){
//     var newContacts= {
//         first_name : req.body.firstname,
//         last_name: req.body.lastname,
//         email: req.body.email,
//         subject: req.body.subject,
//         message: req.body.msg
//     }
//     console.log(newContacts);
// });

module.exports = router;

