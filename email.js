var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var exports = module.exports = {
    mail: function(messageAsHtml, subject, to) {
        var options = {
          auth: {
            api_user: 'rsmith5901',
            api_key: '321eaglecourt!'
          }
        }
        
        var client = nodemailer.createTransport(sgTransport(options));

        var email = {
          from: 'generalMailer@toolinginventory.com',
          to: to,
          subject:  subject,
          html: messageAsHtml
        };
        
        client.sendMail(email, function(err, info){
            if (err ){
              console.log(err);
            }
            else {
              console.log('Message sent: ' + info);
            }
        });
    }
}
