var http = require('http');
var https = require('https');
var path = require('path');
var async = require('async');
var passport = require('passport');
var passportLocal = require('passport-local');
var fs = require('fs');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var shortid = require('shortid');
var json2csv = require('json2csv');
var dbAuth = require('./db-auth.js');
var email = require('./email.js');
var autoEmailOrder = require('./auto-email-order.js');
var express = require('express');
var stripeModeTest = false;
var stripeKey;
var stripeKeys = {
  test: 'sk_test_5xGwl5dqR8CvbMJZOaqjutIQ',
  live: 'sk_live_AhGykk1gWK5NiA1lJvO0a95Z'
}
if (stripeModeTest) {
  stripeKey = stripeKeys.test
} else {
  stripeKey = stripeKeys.live
}
var stripe = require("stripe")(stripeKey);

const queryString = require('query-string');
var app = express();

/*
* Heroku pipelines is da bomb
* */


app.use(flash());

app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  if(!req.secure) {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
});

app.set('trust proxy', true);

app.use(bodyParser.urlencoded({extended : false }));
app.use(cookieParser());
app.use(bodyParser.json({}));

app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: false  }));

 
app.use(express.static(__dirname + '/views')); 
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function( username, password, done) {
  dbAuth.checkUserPass(username, password, function(isAuthenticatedDB, DBid) {
      console.log('Just Queried the Database!');
      console.log('User Id: ' + DBid);
      if (isAuthenticatedDB) {
         done(null, {id: DBid, name: username});
      } else {
         // somehow send flash message
         console.log('Not Authenticated Server Side');
         done(null, null);
      }
  }); 
}));

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  // query db for id
  dbAuth.returnUserData(id, function(user){
    //console.log(user);
    done(null, user)
  });
});

// var https_redirect = function(req, res, next) {
//     if (process.env.NODE_ENV === 'production') {
//         if (req.headers['x-forwarded-proto'] != 'https') {
//             return res.redirect('https://' + req.headers.host + req.url);
//         } else {
//             return next();
//         }
//     } else {
//         return next();
//     }
// };

var server = http.createServer(app);


app.get('/get-my-tools', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnToolData(req.user._id, function(err, tools) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(tools));
    });
  }
});

app.get('/my-crib', function(req, res) {
  if (req.isAuthenticated()) {
    res.render('my-crib', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  }
});

app.get('/', function(req, res) {
  // if isAuthenticated 
  if (req.isAuthenticated()) {
    // return stripe customer 
    dbAuth.returnToolData(req.user._id, function(err, tools) {
      console.log('Success tools');
      console.log(tools);
      res.render('index', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        tools: tools 
      });
    }); 
  } else {
    res.redirect('/login');
  }
  // query tool collection for user id
  
  // send down tools
}); 

app.get('/login', function(req, res) {
    res.render('login',{
    isAuthenticated: req.isAuthenticated(),
    user: req.user,
    succesfullyCreateUser: false,
    badPassword: false,
    noMatch: null,
    userCreated: null
  });
  
}); 

app.get('/landing-form', function(req, res) {
    res.render('landing-form',{
    isAuthenticated: req.isAuthenticated(),
    user: req.user,
    succesfullyCreateUser: false,
    badPassword: false,
    noMatch: null,
    userCreated: null
  });
}); 

app.post('/landing-form', function(req, res) {
  var formHtml = '<h2>New Lead ToolingInventory.com</h2><br>' + 
                 '<ul>' +
                 '<li> First Name: ' + req.body.username[0] + '</li>' + 
                 '<li> Last Name: ' + req.body.username[1] + '</li>' + 
                 '<li> Job Title: ' + req.body.username[2] + '</li>' + 
                 '<li> Email: ' + req.body.username[3] + '</li>' + 
                 '<li> Phone: ' + req.body.username[4] + '</li>' + 
                 '<li> Company: ' + req.body.username[5] + '</li>' + 
                 '</ul>'
  email.mail(formHtml, 'New Lead On ToolingInventory.com', 'robert@toolinginventory.com');
  res.render('thanks');
});

app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect:'/login?bad-cred',failureFlash : true }));

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/tutorials', function(req, res) {
    res.render('tutorials');
});

app.get('/keeping-track-of-your-tooling', function(req, res){
  res.render('./blog/keeping-track-of-your-tooling');
});

app.get('/how-to-make-money-with-garage-shop', function(req, res) {
  res.render('./blog/how-to-make-money-with-garage-shop');
});

app.get('/what-is-tooling-inventory-cnc', function(req, res){
  res.render('./blog/what-is-tooling-inventory-cnc');
});
app.get('/blog', function(req, res) {
    res.render('blog');
});
app.post('/sign-up', function(req, res) {
    console.log('/sign-up route hit');
    console.log(req.body);
    dbAuth.addNewUser(req.body, function(err, userId) {
      if (err) {
        console.log(err);;
      } else {
        console.log('Sign up route hit user id: ' + userId);
        // save userId into session 
        res.redirect('/choose-a-plan');
      }
    });
    //res.status(200);
});

app.get('/remove', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      var toolId = checkoutToolIdQuery(fullUrl);
      var userId = req.user._id;
      req.body.qtyRemove = null;
      dbAuth.removeSingleTool(userId, toolId, function(err) {
        if(!err) {
          dbAuth.returnToolData(req.user._id, function(err, tools) {
            console.log('Success tools');
            console.log(tools);
            res.redirect('/');
          }); 
        } else {
          console.log(err);
        }
      });
    } else {
      res.redirect('/login');
    }
});

app.get('/add', function(req, res) {
    if ( req.isAuthenticated() ) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      var toolId = checkoutToolIdQuery(fullUrl);
      var userId = req.user._id;
      dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
        console.log('success');
        console.log(tool);
        // find tool and render tool 
        res.render('add-tool-qty', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          tool: tool,
          addSuccess: false
        });
      });
    } else {
      res.redirect('/login');
    }
});

app.post('/add', function(req, res) {
  var addQty = req.body.addQty;
  var toolId = req.body.id;
  var userId = req.body.userId;
  
  
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
      // find tool and render tool 
      var originalQty = tool.qty;
    
      dbAuth.addToolQty(userId, toolId, addQty, function(err) {
        if (err) {
          console.log('Error: ' + err);
        } else {
  
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        var toolId = checkoutToolIdQuery(fullUrl);
        var userId = req.user._id;
        dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
          console.log('Checkout Saved to the db: ');
          res.render('add-tool-qty', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            tool: tool,
            addSuccess: true
          });
        });
        }
      });


    
  });
  
  
  


});

app.get('/checkout', function(req, res) {
    // need to send tool id
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var toolId = checkoutToolIdQuery(fullUrl);
    var userId = req.user._id;
    req.body.qtyRemove = null;
    dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
      // find tool and render tool 
      res.render('checkout', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        tool: tool,
        qtyRemove: null,
        operatorFound: null,
        jobFound: null
      });
    });
});

app.post('/checkout', function(req, res) {
  var removeQty = req.body.removeQty;
  var toolId = req.body.id;
  var userId = req.body.userId;
  var operatorId = req.body.operatorId;
  var jobId = req.body.jobId;
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      // find tool and render tool 
      var originalQty = tool.qty;
      // see if userId exists in db
      dbAuth.returnSingleOperator(userId, operatorId, function(operatorObj){
        if (operatorObj.length == 0) {
          console.log('Operator Not Found');
            res.render('checkout', {
              isAuthenticated: req.isAuthenticated(),
                user: req.user,
                tool: tool,
                qtyRemove: null,
                operatorFound: false,
                jobFound: null
              });
        } else {
          dbAuth.returnSingleJob(userId, jobId, function(job){
            if (job.length == 0) {
              console.log('Jobs not found');
              res.render('checkout', {
                isAuthenticated: req.isAuthenticated(),
                  user: req.user,
                  tool: tool,
                  qtyRemove: null,
                  operatorFound: null,
                  jobFound: false
                });
            } else {
              // ad job id field
          if(removeQty > originalQty) {
            dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
              // find tool and render tool 
              res.render('checkout', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                tool: tool,
                qtyRemove: false,
                operatorFound: null,
                jobFound: null
              });
            });
          } else {
            // checkoutTool include operator name and job name
            dbAuth.checkoutTool(userId, toolId, removeQty, function(err) {
              if (err) {
                console.log('Error: ' + err);
              } else {
              var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
              var toolId = checkoutToolIdQuery(fullUrl);
              var userId = req.user._id;
              dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
                  dbAuth.saveCheckout(userId, toolId, removeQty, tool.toolName, job, operatorObj, function(err) {
                    if (err) {
                      console.log('There was an error saving checkout to db: ' + err);
                    } else {
                      console.log('///////////////////oijoijoijoij/////////////////////////////');
                      if ( tool.qty <= tool.autoOrderQty && (tool.autoOrderQty != null)) {
                        // send email to tooling representative
                        dbAuth.returnUserData(userId, function(userObj) {
                            emailRepresentative(tool, userObj);
                        });
                      }
                      res.render('checkout', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        tool: tool,
                        qtyRemove: true,
                        operatorFound: null,
                        jobFound: null
                      });
                    }
                  });
              });
              }
            });
          }

              
              
            }
          });
      
        }
      });
  });
});

app.get('/add-tool', function(req, res) {
    // return properties 
    if (req.isAuthenticated()) {
      res.render('add-tool', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
});

app.post('/add-tool', function(req, res) {
    var toolObj = {
      userId: req.body.userId,
      toolName: req.body.toolName,
      toolTypeCustom: req.body.toolTypeCustom,
      qty: req.body.qty,
      autoOrderQty: req.body.autoOrderQty,
      idealAmount: req.body.idealAmount
    }
    
    dbAuth.addNewTool(toolObj, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Tool Successfully Saved To ');
      }
    });
    res.redirect('/');
});

app.get('/toolsCSV', function(req, res) {
  

  
if (req.isAuthenticated()) {
    dbAuth.returnToolData(req.user._id, function(err, tools) {
      console.log('Success tools');
      json2csv({ data: tools, fields: ['toolName', 'qty'] }, function(err, csv) {
        if (err) console.log(err);
        console.log(csv);
        res.set({
          'Content-disposition':'attachment',
          'Content-Type': 'text/csv'
        });
        res.attachment('tooling-inventory.csv');
        res.write(csv);
        res.end();
      });
    }); 
  } else {
    res.render('index', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  }

});

app.get('/checkoutsCSV', function(req, res) {
  

  
if (req.isAuthenticated()) {
    dbAuth.returnCheckoutData(req.user._id, function(err, checkouts) {
      json2csv({ data: checkouts, fields: ['checkoutQty', 'checkoutDate', 'toolName', 'operatorName', 'jobName'] }, function(err, csv) {
        if (err) console.log(err);
        console.log(csv);
        res.set({
          'Content-disposition':'attachment',
          'Content-Type': 'text/csv'
        });
        res.attachment('checkouts.csv');
        res.write(csv);
        res.end();
      });
    }); 
  } else {
    res.render('index', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  }

});

app.get('/edit', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      var toolId = checkoutToolIdQuery(fullUrl);
      var userId = req.user._id;
      dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
        res.render('update-tool', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          tool: tool,
          updateSuccess: false
        });
      });
    } else {
      res.redirect('/login');
    }

});

app.post('/edit', function(req, res) {
    if (req.isAuthenticated()) {
      var toolObj = {
        userId: req.body.userId,
        toolName: req.body.toolName,
        qty: req.body.qty,
        autoOrderQty: req.body.autoOrderQty,
        idealAmount: req.body.idealAmount
      }
      
      dbAuth.editSingleTool(toolObj.userId, req.body.toolId, toolObj, function(err){
        if (err) {
          console.log(err);  
        } else {
        console.log('Updated Successfully');
        
          dbAuth.returnSingleTool(toolObj.userId, req.body.toolId, function(err, tool) {
            res.render('update-tool', {
              isAuthenticated: req.isAuthenticated(),
              user: req.user,
              tool: tool,
              updateSuccess: true
            });
          });
        }
      });
    } else {
      res.redirect('/login');
    }
    

    
    
});

app.get('/view', function(req, res) {
    // need to send tool id
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var toolId = checkoutToolIdQuery(fullUrl);
    var userId = req.user._id;
    req.body.qtyRemove = null;
    dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
      // find tool and render tool 
      res.render('view-tool', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        tool: tool
      });
    });
});

app.get('/view-checkouts', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnCheckoutData(req.user._id, function(err, checkouts) {
      res.render('view-checkouts', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        checkouts: checkouts 
      });
    }); 
  } else {
    res.render('view-checkouts', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  }
});


app.get('/choose-a-plan-free-year', function(req, res) {
	console.log('Pay for plan hit');
	res.render('choose-a-plan-free-year', {
		isAuthenticated: req.isAuthenticated(),
		user: req.user,
		paymentErr: null,
		usernameExists: null
	});
});

app.post('/choose-a-plan-free-year', function(req, res) {
	dbAuth.doesUsernameExistDb(req.body.username, function(exist) {
		console.log('do I exist: ' + exist);
		if (!exist) {
			var newUserObj = {
				firstName: req.body.firstName,
        lastName: req.body.lastName,
        referenceCode: req.body.referenceCode,
				email: req.body.email,
				companyName: req.body.companyName,
        phoneNumber: req.body.phoneNumber,
				username: req.body.username,
				password: req.body.password,
				toolingRep: {
					name: null,
					email: null
				}
			};

			dbAuth.addNewUser(newUserObj, function(err, userId) {
				if (err) {
					console.log(err);
				} else {

				  // user ID to add 10 tools
          var tool = {
            userId: userId,
            toolName: req.body.toolName,
            toolTypeCustom: req.body.toolTypeCustom,
            qty: req.body.qty,
            autoOrderQty: req.body.autoOrderQty,
            idealAmount: req.body.idealAmount
          };


          getMockTools(userId, function(tools) {
            console.log('async bitch');
            console.log(tools);
						// 1st para in async.each() is the array of items
						async.each(tools,
							// 2nd param is the function that each item is passed to
							function(item, callback){
								// Call an asynchronous function, often a save() to DB
								dbAuth.addNewTool(item, function(err) {
									if (err) {
										console.log(err);
									} else {
										callback();
									}
								});
							},
							// 3rd param is the function to call when everything's done
							function(err){
								// All tasks are done now
								console.log('done');
							}
						);
          });


          getMockOperators(userId, function(operators) {
						async.each(operators,
							// 2nd param is the function that each item is passed to
							function(item, callback){
								dbAuth.addOperator(item, function(err) {
									if (err) {

									} else {
										callback();
									}
								});
							},
							// 3rd param is the function to call when everything's done
							function(err){
								// All tasks are done now
								console.log('done');
							}
						);
          });

          getMockJobs(userId, function(jobs) {
						async.each(jobs,
							// 2nd param is the function that each item is passed to
							function(item, callback){
								dbAuth.addJob(item, function(err) {
									if (err) {

									} else {
										callback();
									}
								});
							},
							// 3rd param is the function to call when everything's done
							function(err){
								// All tasks are done now
								console.log('done');
							}
						);
          });





          // Loop over objects and display to db;




          function getMockJobs(userId, cb) {
            var jobsJson = [
              {
                userId: userId,
                jobName: 'Drill Spline for Zimmer',
                contactName: 'Contact name',
                contractEmail: 'contra@asdf.com',
                companyName: 'Franklin Electric',
                qtyDue: 33,
                jobId: 3921
              },
							{
								userId: userId,
								jobName: 'Mill Slots for 80/20',
								contactName: 'Alison Granger',
								contractEmail: 'contra@asdf.com',
                companyName: 'Mill Supply',
								qtyDue: 393,
								jobId: 39395
							},
							{
								userId: userId,
								jobName: 'Drill and Tap Holes',
								contactName: 'Billy Bob',
                companyName: 'Ford Motor Company',
								contractEmail: 'contra@asdf.com',
								qtyDue: 3893,
								jobId: 39393
							},
							{
								userId: userId,
								jobName: 'Surface Grinding',
								contactName: 'Jon Smith',
                companyName: 'Salesforce.com',
								contractEmail: 'contra@asdf.com',
								qtyDue: 3893,
								jobId: 39398
							},
							{
								userId: userId,
								jobName: 'Cut Gears out of Titanium',
								contactName: 'James Lewis',
                companyName: 'Pena Mechanical Contractor',
								contractEmail: 'contra@asdf.com',
								qtyDue: 33,
								jobId: 39397
							},
							{
								userId: userId,
								jobName: 'Profile mill test plate',
								contactName: 'Bob Smith',
                companyName: '80/20 Inc',
								contractEmail: 'contra@asdf.com',
								qtyDue: 33,
								jobId: 3939
							}
            ];
            cb(jobsJson);
          }


          function getMockOperators(userId, cb) {
						var operatorsJson = [
              {
                userId: userId,
                operatorName: 'Brandon Lee',
                operatorId: 1234
              },
							{
								userId: userId,
								operatorName: 'Laura Harnes',
								operatorId: 4321
							},
							{
								userId: userId,
								operatorName: 'Chris Burns',
								operatorId: 6658
							},
							{
								userId: userId,
								operatorName: 'Robert Smith',
								operatorId: 3584
							},
							{
								userId: userId,
								operatorName: 'Rick James',
								operatorId: 6667
							},
							{
								userId: userId,
								operatorName: 'Billy Bob',
								operatorId: 74845
							},
							{
								userId: userId,
								operatorName: 'Heather Hanson',
								operatorId: 9857
							},
							{
								userId: userId,
								operatorName: 'James Landis',
								operatorId: 5785
							}
            ];
						cb(operatorsJson);
          }

					function getMockTools(userId, cb) {
					  var toolsJson = [
              {
                userId: userId,
                toolName: '.125" 4 Flute Carbide EndMil',
                toolTypeCustom: null,
                qty: 32,
                autoOrderQty: 2,
                idealAmount: 29
              },
							{
								userId: userId,
								toolName: '.250" 4 Flute Carbide EndMil',
								toolTypeCustom: null,
								qty: 32,
								autoOrderQty: 2,
								idealAmount: 29
							},
							{
								userId: userId,
								toolName: '.375" 4 Flute Carbide EndMil',
								toolTypeCustom: null,
								qty: 32,
								autoOrderQty: 2,
								idealAmount: 29
							},
							{
								userId: userId,
								toolName: '.425" 4 Flute Carbide EndMil',
								toolTypeCustom: null,
								qty: 32,
								autoOrderQty: 2,
								idealAmount: 29
							},
							{
								userId: userId,
								toolName: '.500" 4 Flute Carbide EndMil',
								toolTypeCustom: null,
								qty: 14,
								autoOrderQty: 2,
								idealAmount: 4
							},
							{
								userId: userId,
								toolName: '.625" 4 Flute Carbide EndMil',
								toolTypeCustom: null,
								qty: 15,
								autoOrderQty: 9,
								idealAmount: 112
							}
            ];

					  cb(toolsJson);
          }


					var toolObj = {
						userId: req.body.userId,
						toolName: req.body.toolName,
						toolTypeCustom: req.body.toolTypeCustom,
						qty: req.body.qty,
						autoOrderQty: req.body.autoOrderQty,
						idealAmount: req.body.idealAmount
					}


					// user Id to add 5 Jobs

          // User id to add 5


					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth()+1; //January is 0!
					var yyyy = today.getFullYear();

					if(dd<10) {
						dd='0'+dd
					}

					if(mm<10) {
						mm='0'+mm
					}

					today = mm+'/'+dd+'/'+yyyy;
          /*
           Creating HTML to email to myself when user signs up
           */
					var signupAlertEmailHtml = '<h3>New User: on ' + today + '</h3>' +
						'<p>Name: ' + newUserObj.name + '</p>' +
						'<p>Email: ' + newUserObj.email + '</p>' +
						'<p>User Name: ' + newUserObj.username + '</p>' +
						'<p>Company Name: ' + newUserObj.companyName + '</p>'+
            '<p><strong>Free Year Trial Created on ' + new Date() + '</strong></p>';

					var newUserEmailHtml = '<!DOCTYPE html PUBLIC \"-\/\/W3C\/\/DTD XHTML 1.0 Strict\/\/EN\" \"http:\/\/www.w3.org\/TR\/xhtml1\/DTD\/xhtml1-strict.dtd\">\r\n<html xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n<head style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n    <meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n    <meta name=\"viewport\" content=\"width=device-width\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n\r\n    <!-- For development, pass document through inliner -->\r\n    <style type=\"text\/css\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n    * {\r\n      margin: 0;\r\n      padding: 0;\r\n      font-size: 100%;\r\n      font-family: \'Avenir Next\', \"Helvetica Neue\", \"Helvetica\", Helvetica, Arial, sans-serif;\r\n      line-height: 1.65; }\r\n\r\n    img {\r\n      max-width: 100%;\r\n      margin: 0 auto;\r\n      display: block; }\r\n\r\n    body,\r\n    .body-wrap {\r\n      width: 100% !important;\r\n      height: 100%;\r\n      background: #efefef;\r\n      -webkit-font-smoothing: antialiased;\r\n      -webkit-text-size-adjust: none; }\r\n\r\n    a {\r\n      color: #71bc37;\r\n      text-decoration: none; }\r\n\r\n    .text-center {\r\n      text-align: center; }\r\n\r\n    .text-right {\r\n      text-align: right; }\r\n\r\n    .text-left {\r\n      text-align: left; }\r\n\r\n    .button {\r\n      display: inline-block;\r\n      color: white;\r\n      background: #71bc37;\r\n      border: solid #71bc37;\r\n      border-width: 10px 20px 8px;\r\n      font-weight: bold;\r\n      border-radius: 4px; }\r\n\r\n    h1, h2, h3, h4, h5, h6 {\r\n      margin-bottom: 20px;\r\n      line-height: 1.25; }\r\n\r\n    h1 {\r\n      font-size: 32px; }\r\n\r\n    h2 {\r\n      font-size: 28px; }\r\n\r\n    h3 {\r\n      font-size: 24px; }\r\n\r\n    h4 {\r\n      font-size: 20px; }\r\n\r\n    h5 {\r\n      font-size: 16px; }\r\n\r\n    p, ul, ol {\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      margin-bottom: 20px; }\r\n\r\n    .container {\r\n      display: block !important;\r\n      clear: both !important;\r\n      margin: 0 auto !important;\r\n      max-width: 580px !important; }\r\n      .container table {\r\n        width: 100% !important;\r\n        border-collapse: collapse; }\r\n      .container .masthead {\r\n        padding: 80px 0;\r\n        background: #71bc37;\r\n        color: white; }\r\n        .container .masthead h1 {\r\n          margin: 0 auto !important;\r\n          max-width: 90%;\r\n          text-transform: uppercase; }\r\n      .container .content {\r\n        background: white;\r\n        padding: 30px 35px; }\r\n        .container .content.footer {\r\n          background: none; }\r\n          .container .content.footer p {\r\n            margin-bottom: 0;\r\n            color: #888;\r\n            text-align: center;\r\n            font-size: 14px; }\r\n          .container .content.footer a {\r\n            color: #888;\r\n            text-decoration: none;\r\n            font-weight: bold; }\r\n    <\/style>\r\n\r\n    <style type=\"text\/css\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n\r\n    \/* Your custom styles go here *\/\r\n\r\n    <\/style>\r\n<\/head>\r\n<body style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;height: 100%;background: #efefef;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;width: 100% !important;\">\r\n<table class=\"body-wrap\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;height: 100%;background: #efefef;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;width: 100% !important;\">\r\n    <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n        <td class=\"container\" style=\"margin: 0 auto !important;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;display: block !important;clear: both !important;max-width: 580px !important;\">\r\n\r\n            <!-- Message start -->\r\n            <table style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;\">\r\n                <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n                    <td align=\"center\" class=\"masthead\" style=\"margin: 0;padding: 80px 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: #71bc37;color: white;\">\r\n\r\n                        <h1 style=\"margin: 0 auto !important;padding: 0;font-size: 32px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.25;margin-bottom: 20px;max-width: 90%;text-transform: uppercase;\">Welcome to the ToolingInventory.com family.<\/h1>\r\n\r\n                    <\/td>\r\n                <\/tr>\r\n                <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n                    <td class=\"content\" style=\"margin: 0;padding: 30px 35px;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: white;\">\r\n\r\n                        <h2 style=\"margin: 0;padding: 0;font-size: 28px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.25;margin-bottom: 20px;\">Welcome,<\/h2>\r\n\r\n                        <p style=\"margin: 0;padding: 0;font-size: 16px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;\">\r\nThank you for signing up to use ToolingInventory.com, we are a tooling inventory solution built for you. When using ToolingInventory.com you\u2019re getting more than just totals, through time we collect your data and give you useful insights. Being a beta user we look forward to hearing your feedback.\r\n                        <\/p>\r\n\r\n                        <table style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;\">\r\n                            <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n                                <td align=\"center\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n                                    <p style=\"margin: 0;padding: 0;font-size: 16px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;\">\r\n                                        <a href=\"https:\/\/toolinginventory.com\/tooling-inventory-features\/\" class=\"button\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: white;text-decoration: none;display: inline-block;background: #71bc37;border: solid #71bc37;border-width: 10px 20px 8px;font-weight: bold;border-radius: 4px;\">More Information and Training<\/a>\r\n                                    <\/p>\r\n                                <\/td>\r\n                            <\/tr>\r\n                        <\/table>\r\n                        <p style=\"margin: 0;padding: 0;font-size: 16px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;\"><em style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\u2013 Robert Smith<\/em><\/p>\r\n\r\n                    <\/td>\r\n                <\/tr>\r\n            <\/table>\r\n\r\n        <\/td>\r\n    <\/tr>\r\n    <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n        <td class=\"container\" style=\"margin: 0 auto !important;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;display: block !important;clear: both !important;max-width: 580px !important;\">\r\n\r\n            <!-- Message start -->\r\n            <table style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;\">\r\n                <tr style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;\">\r\n                    <td class=\"content footer\" align=\"center\" style=\"margin: 0;padding: 30px 35px;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: none;\">\r\n                        <p style=\"margin: 0;padding: 0;font-size: 14px;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 0;color: #888;text-align: center;\">Sent by <a href=\"https:\/\/toolinginventory.com\" style=\"margin: 0;padding: 0;font-size: 100%;font-family: \'Avenir Next\', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: #888;text-decoration: none;font-weight: bold;\">ToolingInventory.com<\/a><\/p>\r\n                    <\/td>\r\n                <\/tr>\r\n            <\/table>\r\n\r\n        <\/td>\r\n    <\/tr>\r\n<\/table>\r\n<\/body>\r\n<\/html>\r\n';


					email.mail(signupAlertEmailHtml, 'New User On ToolingInventory.com', 'Robert.Smith@ToolingInventory.com');
					email.mail(newUserEmailHtml, 'Welcome to the ToolingInventory.com Family!', newUserObj.email);



					res.render('login', {
						userCreated: true,
						noMatch: null,
						usernameExists: null,
						badPassword: null,
						succesfullyCreateUser: null,
						isAuthenticated: req.isAuthenticated()
					});

				}
			});


		} else {
			res.render('choose-a-plan-free-year', {
				isAuthenticated: req.isAuthenticated(),
				user: req.user,
				usernameExists: null,
				paymentErr: null,
				usernameExists: true
			});
		}
	});
});


app.get('/choose-a-plan', function(req, res) {
    console.log('Pay for plan hit');
    res.render('choose-a-plan', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      paymentErr: null,
      usernameExists: null
    });
});

app.post('/choose-a-plan', function(req, res) {
  /*
    1) Check for existing user
    2) If username does not exist 
    3) Create stripe account
    4) Create User object
    5) Save user object to db
  */
  dbAuth.doesUsernameExistDb(req.body.username, function(exist) {
    console.log('do I exist: ' + exist);
    if (!exist) {
      var stripeToken = req.body.stripeToken;
      if (req.body.referenceCode.toLowerCase() == 'machinist talk') {
        /* Base Price */
        stripe.customers.create({
          source: stripeToken,
          plan: "00003",
          email: req.body.email
          // grab email from sign up form
        }, function(err, customer) {
          if (err) {
            console.log(err);
            res.render('choose-a-plan', {
              isAuthenticated: req.isAuthenticated(),
              user: req.user,
              paymentErr: err,
              userCreated: false,
              noMatch: null,
              usernameExists: null,
              badPassword: null,
              succesfullyCreateUser: null,
            });
          } else {
            // find user id and add customer id for payment
            // save user to database and redirect to succesfully sign up
            var newUserObj = {
              name: req.body.name,
              email: req.body.email,
              companyName: req.body.companyName,
              username: req.body.username,
              password: req.body.password,
              stripeId: customer.id,
              toolingRep: {
                name: null,
                email: null
              }
            }
    
            dbAuth.addNewUser(newUserObj, function(err, userId) {
              if (err) {
                console.log(err);
              } else {
                /*
                  Getting Current Date in format 
                  mm/dd/yy
                */
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();
                
                if(dd<10) {
                    dd='0'+dd
                } 
                
                if(mm<10) {
                    mm='0'+mm
                } 
                
                today = mm+'/'+dd+'/'+yyyy;
                /*
                  Creating HTML to email to myself when user signs up
                */
              var signupAlertEmailHtml = '<h3>New User: on ' + today + '</h3>' + 
                  '<p>Name: ' + newUserObj.name + '</p>' +
                  '<p>Email: ' + newUserObj.email + '</p>' +
                  '<p>User Name: ' + newUserObj.username + '</p>' +
                  '<p>Company Name: ' + newUserObj.companyName + '</p>'+
                  '<p>Reference Code: ' + req.body.referenceCode;
              email.mail(signupAlertEmailHtml, 'New User On ToolingInventory.com', 'rsmith5901@gmail.com');
    
              res.render('login', {
                userCreated: true,
                noMatch: null,
                usernameExists: null,
                badPassword: null,
                succesfullyCreateUser: null,
                isAuthenticated: req.isAuthenticated()
              });
    
              }
            });
          }
        });  
        /* End Base Price */
        
      } else {
        /* Base Price */
        stripe.customers.create({
          source: stripeToken,
          plan: "00002",
          email: req.body.email
          // grab email from sign up form
        }, function(err, customer) {
          if (err) {
            console.log(err);
            res.render('choose-a-plan', {
              isAuthenticated: req.isAuthenticated(),
              user: req.user,
              usernameExists: null,
              paymentErr: err
            });
          } else {
            // find user id and add customer id for payment
            // save user to database and redirect to succesfully sign up
            var newUserObj = {
              name: req.body.name,
              email: req.body.email,
              companyName: req.body.companyName,
              username: req.body.username,
              password: req.body.password,
              stripeId: customer.id,
              toolingRep: {
                name: null,
                email: null
              }
            }
    
            dbAuth.addNewUser(newUserObj, function(err, userId) {
              if (err) {
                console.log(err);
              } else {
                /*
                  Getting Current Date in format 
                  mm/dd/yy
                */
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!
                var yyyy = today.getFullYear();
                
                if(dd<10) {
                    dd='0'+dd
                } 
                
                if(mm<10) {
                    mm='0'+mm
                } 
                
                today = mm+'/'+dd+'/'+yyyy;
                /*
                  Creating HTML to email to myself when user signs up
                */
              var signupAlertEmailHtml = '<h3>New User: on ' + today + '</h3>' + 
                  '<p>Name: ' + newUserObj.name + '</p>' +
                  '<p>Email: ' + newUserObj.email + '</p>' +
                  '<p>User Name: ' + newUserObj.username + '</p>' +
                  '<p>Company Name: ' + newUserObj.companyName + '</p>'+
                  '<p>Reference Code: ' + req.body.referenceCode;
              email.mail(signupAlertEmailHtml, 'New User On ToolingInventory.com', 'rsmith5901@gmail.com');
    
              res.render('login', {
                userCreated: true,
                usernameExists: null,
                noMatch: null,
                badPassword: null,
                succesfullyCreateUser: null,
                isAuthenticated: req.isAuthenticated()
              });
    
              }
            });
          }
        });  
        /* End Base Price */        
      }

      
    } else {
      res.render('choose-a-plan', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        usernameExists: null,
        paymentErr: null,
        usernameExists: true
      });
    }
  });
});

app.get('/complete-job', function(req, res) {
  if (req.isAuthenticated()) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var jobId = jobIdQuery(fullUrl);
  var userId = req.user._id;
  dbAuth.completeSingleJob(userId, jobId, function(err) {
    if(!err) {
      res.redirect('/view-jobs');
    }
  });
  } else {
    res.redirect('/login');
  }
});

app.get('/tool-usage-overview', function(req, res) {
   if (req.isAuthenticated()) {
     var userId = req.user._id;
     /* Query db for all checkouts */
    dbAuth.returnCheckoutData(req.user._id, function(err, checkouts) {
      if (!err) {
        res.send(JSON.stringify(checkouts));
      }
      // res.send();
    });
     /* Sort data */
   } else {
     res.redirect('login');
   } 
});

function doesUsernameExist(username) {
  var exist = dbAuth.doesUsernameExistDb(username, function(exist) {
    console.log('do I exist: ' + exist);
  });
  return true;
}

app.get('/my-account', function(req, res) {
  
    if (req.isAuthenticated()) {
        res.render('my-account', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          accountUpdated: null,
          addedJob: null,
          addOperator: null,
          successToolRep: null,
          jobIdExists: null
        });
    } else {
        res.redirect('/login');
    }

});

app.post('/my-account', function(req, res) {
  console.log('My Account');
  console.log(req.body);
  res.render('my-account', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user,
    accountUpdated: true,
    successToolRep: null,
    jobIdExists: null
  });
  
  
});

app.post('/add-tooling-rep', function(req, res) {
    var toolingRepObj = {
      name: req.body.toolingRepName,
      email: req.body.toolingRepEmail
    }
    
    dbAuth.returnUserData(req.user._id, function(user) {
        var newUserObj = user;
        newUserObj.toolingRep = toolingRepObj;
        console.log('Add Tooling Req');
        console.log(newUserObj.toolingRep);
        dbAuth.editUser(req.user._id, newUserObj, function(err){
          if (err) {
            console.log(err);
          } else {
            console.log('Saved');
              res.render('my-account', {
                isAuthenticated: req.isAuthenticated(),
                user: newUserObj,
                accountUpdated: null,
                addedJob: null,
                addOperator: null,
                successToolRep: true,
                jobIdExists: null
              });
          }
        });
    });
    
    
});

app.post('/add-job', function(req, res) {
    var jobObj = {
      companyName: req.body.companyName,
      userId: req.user._id,
      jobName: req.body.jobName,
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      dueDate: req.body.dueDate,
      qtyDue: req.body.qtyDue,
      jobId: req.body.jobId
    }
    /*
      Return all jobs 
    */
    dbAuth.returnJobsData(req.user._id, function(err, jobs) {
      /* Loop through all jobs compare jobId */
      var jobIdMatch = false;
      for (var i=0; i<jobs.length; i++) {
        if (jobs[i].jobId == jobObj.jobId) {
          jobIdMatch = true;
        }
      }
      if (jobIdMatch) {
          console.log('match of job ids send error');
          res.render('my-account', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            accountUpdated: null,
            addedJob: null,
            addOperator: null,
            successToolRep: null,
            jobIdExists: true
          });
      } else {
        dbAuth.addJob(jobObj, function(err) {
          if (err) {
            
          } else {
            res.render('my-account', {
              isAuthenticated: req.isAuthenticated(),
              user: req.user,
              accountUpdated: null,
              addedJob: true,
              addOperator: null,
              successToolRep: null,
              jobIdExists: null
            });
          }
        });
      }
    }); 
    
    /* This is the grand prize adding job to db */
    

});

app.get('/view-jobs', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnJobsData(req.user._id, function(err, jobs) {
      console.log(jobs);
      res.render('view-jobs', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        jobs: jobs 
      });
    }); 
  } else {
    res.render('view-checkouts', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
  }
    
});

app.get('/view-jobs-production', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnJobsData(req.user._id, function(err, jobs) {
      console.log(jobs);
      res.render('view-jobs-production', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        jobs: jobs 
      });
    }); 
  } else {
    res.redirect('/login');
  }
    
});

app.post('/add-operator', function(req, res) {
    console.log('Add Job');
    console.log(req.body);
    var operatorObj = {
      userId: req.user._id,
      operatorName: req.body.operatorName,
      operatorId: req.body.operatorId
    }
    
    dbAuth.addOperator(operatorObj, function(err) {
      if (err) {
        
      } else {
        console.log('Added Job');
        res.render('my-account', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          accountUpdated: null,
          addedJob: null,
          addOperator: true,
          successToolRep: null,
          jobIdExists: null
        });
      }
    });
});

app.get('/view-operators', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnOperatorsData(req.user._id, function(err, operators) {
      console.log(operators);
      res.render('view-operators', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        operators: operators 
      });
    }); 
  } else {
    res.redirect('/login');
  }
    
});

app.get('/remove-operator', function(req, res) {
    // need to send tool id
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // rename this function checkoutToolIdQuery
    var operatorId = operatorIdQuery(fullUrl);
    
    var userId = req.user._id;

    if (req.isAuthenticated()) {
      dbAuth.removeSingleOperator(userId, operatorId, function(err) {
        if(!err) {
          res.redirect('/view-operators');
        } else {
          console.log(err);
        }
      });
    } else {
      res.render('index', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
    }
});

app.get('/remove-job', function(req, res) {
  
    // need to send tool id
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // rename this function checkoutToolIdQuery
    var jobId = jobIdQuery(fullUrl);
    
    var userId = req.user._id;

    if (req.isAuthenticated()) {
      dbAuth.removeSingleJob(userId, jobId, function(err) {
        if(!err) {
          res.redirect('/view-jobs');
        } else {
          console.log(err);
        }
      });
    } else {
      res.render('index', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
    }
});

app.get('/view-job-tooling-data', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      // rename this function checkoutToolIdQuery
      var jobId = jobIdQuery(fullUrl);
      
      var userId = req.user._id;
      dbAuth.viewSingleJobToolingUsage(userId, jobId, function(toolCheckouts) {

        // lookup individual job
        dbAuth.viewSingleJob(userId, jobId, function(job) {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(toolCheckouts));
        });
      });
    } else {
      res.redirect('/login');
    }
});

app.get('/view-job-tooling', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      // rename this function checkoutToolIdQuery
      var jobId = jobIdQuery(fullUrl);
      
      var userId = req.user._id;
      dbAuth.viewSingleJobToolingUsage(userId, jobId, function(toolCheckouts) {

        // lookup individual job
        dbAuth.viewSingleJob(userId, jobId, function(job) {
          res.render('view-checkouts-by-job', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            checkouts: toolCheckouts,
            jobNumber: jobId,
            job: job
          });
        });
            // render page 
      
        
      });
    } else {
      res.redirect('/login');
    }
});

app.get('/view-operator-tooling', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      // rename this function checkoutToolIdQuery
      var operatorId = operatorIdQuery(fullUrl);
      
      var userId = req.user._id;
      dbAuth.viewSingleOperatorToolingUsage(userId, operatorId, function(toolCheckouts) {
        console.log(toolCheckouts);
        res.render('view-checkouts-by-operator', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          checkouts: toolCheckouts,
          operatorId: operatorId
        });
        
      });
    } else {
    res.redirect('/login');
    }
});

app.get('/production', function(req, res) {
  if (req.isAuthenticated()) {
    dbAuth.returnToolData(req.user._id, function(err, tools) {
      console.log('Success tools');
      console.log(tools);
      res.render('production', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        tools: tools 
      });
    }); 
  } else {
    res.redirect('login');
  }
});

app.get('/checkout-production', function(req, res) {
    if (req.isAuthenticated()) {
        // need to send tool id
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        var toolId = checkoutToolIdQuery(fullUrl);
        var userId = req.user._id;
        req.body.qtyRemove = null;
        dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
          console.log('success');
          console.log(tool);
          // find tool and render tool 
          res.render('checkout-production', {
            isAuthenticated: req.isAuthenticated(),
            user: req.user,
            tool: tool,
            qtyRemove: null,
            operatorFound: null,
            jobFound: null
          });
        }); 
    } else {
        res.redirect('login')
    }
});

app.post('/checkout-production', function(req, res) {
  var removeQty = req.body.removeQty;
  var toolId = req.body.id;
  var userId = req.body.userId;
  var operatorId = req.body.operatorId;
  var jobId = req.body.jobId;
  
  
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      // find tool and render tool 
      var originalQty = tool.qty;
      
      // see if userId exists in db
      dbAuth.returnSingleOperator(userId, operatorId, function(operatorObj){
        if (operatorObj.length == 0) {
          console.log('Operator Not Found');
            res.render('checkout-production', {
              isAuthenticated: req.isAuthenticated(),
                user: req.user,
                tool: tool,
                qtyRemove: null,
                operatorFound: false,
                jobFound: null
              });
        } else {
          // check for job number 
          
          dbAuth.returnSingleJob(userId, jobId, function(job){
            if (job.length == 0) {
              console.log('Jobs not found');
              res.render('checkout-production', {
                isAuthenticated: req.isAuthenticated(),
                  user: req.user,
                  tool: tool,
                  qtyRemove: null,
                  operatorFound: null,
                  jobFound: false
                });
            } else {
              // ad job id field
          if(removeQty > originalQty) {
              res.render('checkout-production', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                tool: tool,
                qtyRemove: false,
                operatorFound: null,
                jobFound: null
              });
          } else {
            dbAuth.checkoutTool(userId, toolId, removeQty, function(err) {
              if (err) {
                console.log('Error: ' + err);
              } else {
              dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
                  dbAuth.saveCheckout(userId, toolId, removeQty, tool.toolName, job, operatorObj, function(err) {
                    if (err) {
                      console.log('There was an error saving checkout to db: ' + err);
                    } else {
                      console.log('Checkout Saved to the db: ');
                      if ( tool.qty <= tool.autoOrderQty && (tool.autoOrderQty != null)) {
                        // send email to tooling representative
                        dbAuth.returnUserData(userId, function(userObj) {
                            emailRepresentative(tool, userObj);
                        });
                      }
                      res.render('checkout-production', {
                        isAuthenticated: req.isAuthenticated(),
                        user: req.user,
                        tool: tool,
                        qtyRemove: true,
                        operatorFound: null,
                        jobFound: null
                      });
                    }
                  });
              });
              }
            });
          }

              
              
            }
          });
      
        }
      });
      
      

    
  });
  
  console.log('checkout');
});

app.get('/checkouts-per-job', function(req, res) {
  
    if (req.isAuthenticated()) {
      var userId = req.user._id;
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      // rename this function checkoutToolIdQuery
      var jobId = jobIdQuery(fullUrl);
      dbAuth.viewSingleJobToolingUsage(userId, jobId, function(toolCheckouts) {
        console.log('TOOLS CHECKOUT ' + toolCheckouts);
        var obj = {
          names: ['.125" Endmil'],
          qty: [12]
        }
        res.send(JSON.stringify(toolCheckouts));
      });
    } else {
      res.redirect('login')
    }

});

app.get('/clear-checkouts', function(req, res) {
    console.log('Clear Checkouts');
    dbAuth.clearCheckouts(req.user._id, function(err) {
      if (err) {
        console.log('Error' + err);
      } else {
        console.log('Removed Checkouts');
        res.redirect('/view-checkouts');
      }
    });
});

app.post('/adminAuthenticate', function(req, res) {
    console.log('Admin Authenticate');
    
    console.log(req.body);
    var adminUsername = req.body.userName;
    var adminPassword = req.body.password;
    console.log(req.user._id);
    dbAuth.checkUserPass(adminUsername, adminPassword, function(isAuthenticated, userObj){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ isAuthenticated: isAuthenticated }));
    });

  
});


app.post('/deactivate', function(req, res) {
   console.log(req.body); 
   autoEmailOrder.deactivate(req.user, req.body.message, function(err) {
     if (err) {
       console.log(err);
     } else {
        req.logout();
        res.redirect('/');
     }
     
   });
});

app.get('/super-admin', function(req, res) {
    if (req.isAuthenticated() && req.user._id == '579cb480a614e31e0e24ccbe') {
    dbAuth.returnUsersData(function(err, users) {
      console.log(users);
        res.render('super-admin', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          accountUpdated: null,
          addedJob: null,
          addOperator: null,
          successToolRep: null,
          users: users
        });  
    }); 
    
    } else {
        res.redirect('/login');
    }
});

app.post('/super-admin-sign-up', function(req, res) {
    dbAuth.addNewUser(req.body, function(err, userId) {
      if (err) {
        console.log(err);;
      } else {
        console.log('Sign up route hit user id: ' + userId);
        // save userId into session 
        res.redirect('/super-admin');
      }
    });
    res.status(200);
});


var checkoutToolIdQuery = function(uri) {
  var uri = uri;
  var queryString = {};
  uri.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3; }
  );
  return queryString['toolId']
}

var operatorIdQuery = function(uri) {
  var uri = uri;
  var queryString = {};
  uri.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3; }
  );
  return queryString['operatorId']
}

var jobIdQuery = function(uri) {
  var uri = uri;
  var queryString = {};
  uri.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3; }
  );
  return queryString['jobId']
};

var emailRepresentative = function(tool, userId) {
  
  // find tooling rep email 
  
  // send pre formated email
  console.log('Email Representative YAY');
  console.log(tool);
  autoEmailOrder.emailOrder(tool, userId);
};

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

