const nodemailer = require('nodemailer');

const sendEmail = (pack, callback) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xianli.interest@gmail.com', // generated ethereal user
            pass: 'josiexianli'  // generated ethereal password
        }
    });
    // setup email data with unicode symbols
    let date = new Date();
    let mailOptions = {
        from: 'xianli.interest@gmail.com',
        to: ['josiexianli@gmail.com', pack.email],
        subject: 'NEW REGISTRATION ' + pack.firstname + ' ' + pack.lastname,
        text: 'INCOMING EMAIL:' + pack.email + ' \nName: ' + pack.firstname + ' ' + pack.lastname + "\nFrom josiexianli.com" +
        "\nMessage:" + pack.msg+ "\n" + date
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            callback({
                status: false,
                message: "EMAIL CALENDAR SEND FAIL"
            });
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
            callback({
                status: true,
                message: "EMAIL CALENDAR SENT"
            });
        }
    });
}

module.exports.sendEmail = sendEmail;