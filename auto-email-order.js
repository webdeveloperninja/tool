var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var exports = module.exports = {
    
    emailOrder: function(tool, userObj) {
        var options = {
          auth: {
            api_user: 'webdeveloperninja1',
            api_key: '321eaglecourt'
          }
        }
        
        var client = nodemailer.createTransport(sgTransport(options));
        console.log(tool);
        var amountNeeded = tool.idealAmount - tool.qty;
        var email = {
          from: 'AutoOrder@toolinginventory.com',
          to: userObj.toolingRep.email,
          subject:  userObj.companyName + ' Needs Tooling',
          html: '<b>' + userObj.companyName + ' needs ' + amountNeeded  + '</b>' + 
                    '<p>' + tool.diameter + '" ' + tool.brand + ' ' + tool.toolType +  '</p><br>' + 
                    '<b>For Customer Id: ' + userObj._id + '</b>'
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