
var http = require('http');
var path = require('path');
var passport = require('passport');
var passportLocal = require('passport-local');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
 



var express = require('express');


var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : false }));
app.use(cookieParser());
app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: false  }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function(username, password, done) {
  
  if (username === password) {
    done(null, {id: username, name: username});
  } else {
    done(null, null)
  }

}));

passport.serializeUser(function(user, done) {
  done(null, user.id)
});

passport.deserializeUser(function(id, done) {
  // query db for id 
  done(null, { id: id, name: id});
})
 
var server = http.createServer(app);


app.get('/', function(req, res) {
  res.render('index', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
}); 

app.get('/login', function(req, res) {
    res.render('login');
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
