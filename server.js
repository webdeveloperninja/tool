
var http = require('http');
var path = require('path');
var passport = require('passport');
var passportLocal = require('passport-local');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var shortid = require('shortid');

var json2csv = require('json2csv');

var dbAuth = require('./node_modules/db-auth/db-auth.js');
var express = require('express');

const queryString = require('query-string');
  
 
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : false }));
app.use(cookieParser());
app.use(bodyParser.json({}));

app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: false  }));
 
app.use(express.static(__dirname + '/views')); 
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function(username, password, done) {
  
  dbAuth.checkUserPass(username, password, function(isAuthenticatedDB, DBid) {
      if (isAuthenticatedDB) {
         done(null, {id: DBid, name: username});
        
      } else {
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
})
  
var server = http.createServer(app);


app.get('/', function(req, res) {
  // if isAuthenticated 
  if (req.isAuthenticated()) {
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
    user: req.user
  });
}); 

app.post('/login', passport.authenticate('local') , function(req, res) {
  res.redirect('/');
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/sign-up', function(req, res) {
  res.render('sign-up', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.post('/sign-up', function(req, res) {
    console.log(req.body);
    dbAuth.addNewUser(req.body, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
    res.status(200);
});


app.get('/remove', function(req, res) {
    // need to send tool id
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var toolId = checkoutToolIdQuery(fullUrl);
    var userId = req.user._id;
    req.body.qtyRemove = null;
    if (req.isAuthenticated()) {
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
      res.render('index', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
    }
});


app.get('/add', function(req, res) {
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
        qtyRemove: null
      });
    });
});

app.get('/add-tool', function(req, res) {
      res.render('add-tool', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
      });
});

app.post('/add-tool', function(req, res) {
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
    
    dbAuth.addNewTool(toolObj, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Tool Successfully Saved To ');
      }
    });
    res.redirect('/');
});

app.post('/checkout', function(req, res) {
  var removeQty = req.body.removeQty;

  var toolId = req.body.id;
  var userId = req.body.userId;
  dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
      // find tool and render tool 
      var originalQty = tool.qty;
      
  if(removeQty > originalQty) {
    dbAuth.returnSingleTool(userId, toolId, function(err, tool) {
      console.log('success');
      console.log(tool);
      // find tool and render tool 
      res.render('checkout', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        tool: tool,
        qtyRemove: false
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
  
          dbAuth.saveCheckout(userId, toolId, removeQty, function(err) {
            if (err) {
              console.log('There was an error saving checkout to db: ' + err);
            } else {
              console.log('Checkout Saved to the db: ');
              res.render('checkout', {
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
                tool: tool,
                qtyRemove: true
              });
            }
          });
      });
      }
    });
  }

    
  });
  
  console.log('checkout');
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
      json2csv({ data: checkouts, fields: ['_id', 'userId', 'toolId', 'checkoutQty', 'checkoutDate'] }, function(err, csv) {
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




var checkoutToolIdQuery = function(uri) {
  var uri = uri;
  var queryString = {};
  uri.replace(
      new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      function($0, $1, $2, $3) { queryString[$1] = $3; }
  );
  return queryString['toolId']
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
 