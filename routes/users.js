const express = require('express');
const router = express.Router();
const mailer = require('../module/cymail.func');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/', function (req, res, next) {
    // console.log('I AM AT USERS ROUTER');
    let service_code = req.body.service_code;
    console.log(req.body);
    if (service_code === 'send_email') {
        mailer.sendEmail(req.body, (res_data) => {
            res.redirect('/');
        });
    }
});


// (accessed at POST http://localhost:3000/api/signup)

module.exports = router;
