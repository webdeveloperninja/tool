
var http = require('http');
var https = require('https');
var path = require('path');
var passport = require('passport');
var passportLocal = require('passport-local');

var sslRedirect = require('heroku-ssl-redirect');

var fs = require('fs');


var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');


var shortid = require('shortid');

var json2csv = require('json2csv');

var dbAuth = require('./db-auth.js');
var express = require('express');

var stripe = require("stripe")("sk_live_AhGykk1gWK5NiA1lJvO0a95Z");

const queryString = require('query-string');
  
 
var app = express();

app.use(sslRedirect());

app.set('view engine', 'ejs');

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
  
  
var server = http.createServer(app);

// create a server


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
    res.render('index', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
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


app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect:'/login'}));



app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/tutorials', function(req, res) {
    res.render('tutorials');
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

/* Tool Checkout */
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
  
  
  
  console.log('Operator Id: ' + operatorId);
  console.log('Job Id: ' + jobId);
  
  
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
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
          console.log('OPERATOR FOUND');
          console.log(operatorObj);
          // check for job number 
          
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
              console.log('success');
              console.log(tool);
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
            dbAuth.checkoutTool(userId, toolId, removeQty, function(err) {
              if (err) {
                console.log('Error: ' + err);
              } else {
              var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
              var toolId = checkoutToolIdQuery(fullUrl);
              var userId = req.user._id;
              dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
                  var shortName = tool.diameter + ' diameter ' + tool.material + " " + tool.toolType; 
                  console.log('///////////////////////////////');
                  console.log();
                  console.log(operatorObj);
                  dbAuth.saveCheckout(userId, toolId, removeQty, shortName, job, operatorObj, function(err) {
                    if (err) {
                      console.log('There was an error saving checkout to db: ' + err);
                    } else {
                      console.log('Checkout Saved to the db: ');
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
  
  console.log('checkout');
});

/* Add Tool */
app.get('/add-tool', function(req, res) {
      res.render('add-tool', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
});

app.post('/add-tool', function(req, res) {
    var shortName = req.body.toolDiameter + ' ' + req.body.toolType + ' ' + req.body.toolTypeCustom;
    var toolObj = {
      userId: req.body.userId,
      toolType: req.body.toolType,
      shortName: shortName,
      toolTypeCustom: req.body.toolTypeCustom,
      brand: req.body.brand,
      toolBrandCustom: req.body.toolBrandCustom,
      diameter: req.body.toolDiameter, 
      toolLength: req.body.toolLength,
      material: req.body.material,
      toolMaterialCustom: req.body.toolMaterialCustom,
      modelNumber: req.body.toolModelNumber,
      toolTypeCustom: req.body.toolTypeCustom,
      qty: req.body.qty
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
      json2csv({ data: tools, fields: ['_id', 'userId', 'toolType', 'brand', 'diameter', 'toolLength', 'material', 'modelNumber', 'qty'] }, function(err, csv) {
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
      console.log('Success tools');
      json2csv({ data: checkouts, fields: ['_id', 'userId', 'toolId', 'checkoutQty', 'checkoutDate', 'shortName'] }, function(err, csv) {
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

/* Update Tool */
app.get('/edit', function(req, res) {
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
});
app.post('/edit', function(req, res) {
    var toolObj = {
      userId: req.body.userId,
      toolType: req.body.toolType,
      brand: req.body.brand,
      diameter: req.body.toolDiameter, 
      toolLength: req.body.toolLength,
      material: req.body.material,
      modelNumber: req.body.toolModelNumber,
      qty: req.body.qty
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


app.get('/choose-a-plan', function(req, res) {
    console.log('Pay for plan hit');
    res.render('choose-a-plan', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user
    });
});

app.post('/choose-a-plan', function(req, res) {
    console.log('Choose a plan hit');
    console.log('Token from stripe: ' + req.body.stripeToken);
    // (Assuming you're using express - expressjs.com)
    // Get the credit card details submitted by the form
    var stripeToken = req.body.stripeToken;
    
    stripe.customers.create({
      source: stripeToken,
      plan: "00001",
      email: req.body.email
      // grab email from sign up form
    }, function(err, customer) {
      if (err) {
        console.log(err);
      } else {
        
        // find user id and add customer id for payment
        console.log('Customer Id: ' + customer.id);  
        // save user to database and redirect to succesfully sign up
        var newUserObj = {
          name: req.body.name,
          email: req.body.email,
          companyName: req.body.companyName,
          username: req.body.username,
          password: req.body.password,
          stripeId: customer.id
        }
        
        dbAuth.addNewUser(newUserObj, function(err, userId) {
          if (err) {
            console.log(err);
          } else {
            
          // set session so I can flag user success created account
         /// res.redirect('/login');
          res.render('login', {
            userCreated: true,
            noMatch: null,
            badPassword: null,
            succesfullyCreateUser: null,
            isAuthenticated: req.isAuthenticated()
          });

          }
        });

      }
    });
    
});

/* My Account */
app.get('/my-account', function(req, res) {
      res.render('my-account', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        accountUpdated: null,
        addedJob: null,
        addOperator: null
      });
});
app.post('/my-account', function(req, res) {
  console.log('My Account');
  console.log(req.body);
  res.render('my-account', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user,
    accountUpdated: true
  });
  
  
});


app.post('/add-job', function(req, res) {
    console.log('Add Job');
    console.log(req.body);
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
    
    console.log(jobObj);
    dbAuth.addJob(jobObj, function(err) {
      if (err) {
        
      } else {
        console.log('Added Job');
        res.render('my-account', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          accountUpdated: null,
          addedJob: true,
          addOperator: null
        });
      }
    });
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
          addOperator: true
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

app.get('/view-job-tooling', function(req, res) {
    if (req.isAuthenticated()) {
      // need to send tool id
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      // rename this function checkoutToolIdQuery
      var jobId = jobIdQuery(fullUrl);
      
      var userId = req.user._id;
      dbAuth.viewSingleJobToolingUsage(userId, jobId, function(toolCheckouts) {
        console.log(toolCheckouts);
        res.render('view-checkouts-by-job', {
          isAuthenticated: req.isAuthenticated(),
          user: req.user,
          checkouts: toolCheckouts,
          jobNumber: jobId
        });
        
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


/* Production */ 
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
    res.render('login', {
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      succesfullyCreateUser : null,
      badPassword: null,
      noMatch: null
    });
  }
});

app.get('/checkout-production', function(req, res) {
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
});

app.post('/checkout-production', function(req, res) {
  var removeQty = req.body.removeQty;
  var toolId = req.body.id;
  var userId = req.body.userId;
  var operatorId = req.body.operatorId;
  var jobId = req.body.jobId;
  
  
  
  console.log('Operator Id: ' + operatorId);
  console.log('Job Id: ' + jobId);
  
  
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
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
          console.log('OPERATOR FOUND');
          console.log(operatorObj);
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
                  console.log();
                  var shortName = tool.diameter + ' diameter ' + tool.material + " " + tool.toolType + tool.toolTypeCustom; 
                  console.log('///////////////////////////////');
                  console.log();
                  console.log(operatorObj);
                  dbAuth.saveCheckout(userId, toolId, removeQty, shortName, job, operatorObj, function(err) {
                    if (err) {
                      console.log('There was an error saving checkout to db: ' + err);
                    } else {
                      console.log('Checkout Saved to the db: ');
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


/* Cancel Subscrption */

app.get('/de-activate-account', function(req, res) {
    // Find user id
    if ( req.isAuthenticated() ) {
      var userId = req.user._id;
      dbAuth.returnUserData(userId, function(userObj){
        var stripeId = userObj.stripeId;
        stripe.customers.retrieve(
          stripeId,
          function(err, customer) {
            // asynchronously called
            if (!customer.subscriptions.data[0].id) {
              console.log('Stirpe Customer not found');
            } else {
              var customerId = customer.id;
              var subscriptionId = customer.subscriptions.data[0].id;
              if ( !subscriptionId ) {
                console.log('No Subscription');
              } else {
                console.log(customer);
              }
            }
          }
        );
      });
      
      res.redirect('/come-back-soon');
    } else {
      res.redirect('/login');
    }   
})


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
}


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

