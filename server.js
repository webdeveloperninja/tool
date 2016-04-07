
var http = require('http');
var path = require('path');
var passport = require('passport');
var passportLocal = require('passport-local');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var dbAuth = require('./node_modules/db-auth/db-auth.js');
var express = require('express');
 
 
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : false }));
app.use(cookieParser());
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
    console.log(user);
    done(null, user)
  });
})
  
var server = http.createServer(app);


app.get('/', function(req, res) {
  res.render('index', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
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


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
