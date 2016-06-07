var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var exports = module.exports = {
    emailOrder: function(tool, userObj) {
        var options = {
          auth: {
            api_user: /* global sendgrid user */,
            api_key: /* global sengrid key */
          }
        }
        
        var client = nodemailer.createTransport(sgTransport(options));

        var email = {
          from: 'ToolAlert@toolinginventory.com',
          to: userObj.toolingRep.email,
          subject:  'Your Tool is Running Low',
          html: '<p>Your tool: ' + tool.toolName + ' is running low.</p><br>'
        };
        
        client.sendMail(email, function(err, info){
            if (err ){
              console.log(err);
            }
            else {
              console.log('Message sent: ' + info);
            }
        });
    },
    deactivate: function(user, message, cb) {
      
      
        var options = {
          auth: {
            api_user: null /* username*/,
            api_key: null /*password*/
          }
        }
        
        var client = nodemailer.createTransport(sgTransport(options));

        var email = {
          from: 'Deactivate@toolinginventory.com',
          to: 'rsmith5901@gmail.com',
          subject:  'Deactivate Account',
          html: '<p>User Id: ' + user._id + ' is deactivating.</p><br><p>'+ message +'</p>'
        };
        
        client.sendMail(email, function(err, info){
            if (err ){
              cb(err);
            }
            else {
              cb();
            }
        });
      
    }
}
