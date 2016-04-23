var mongoose = require('mongoose');
// db connection 
mongoose.connect('mongodb://rsmith5901:321eaglecourt@ds019470.mlab.com:19470/tools');

var usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    companyName: String,
    tools: Array
});


var toolsSchema = new mongoose.Schema({
    userId: String,
    toolType: String,
    brand: String,
    diameter: Number,
    toolLength: Number,
    material: String,
    modelNumber: Number,
    qty: Number
});

var checkoutsSchema = new mongoose.Schema({
    userId: String,
    toolId: String,
    checkoutQty: Number, 
    checkoutDate: Date
});


// tools model refer to tools collection
var users = mongoose.model('users', usersSchema);

var tools = mongoose.model('tools', toolsSchema);

var checkouts = mongoose.model('checkouts', checkoutsSchema);

var exports = module.exports = {
        checkUserPass: function(username, password, cb) {
            users.find(function(err, users) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(users);
                        // see if username matches user
                        for (var i = 0; i < users.length; i++) {
                            if (users[i].username === username & users[i].password === password) {
                                //console.log('match');
                                cb(true, users[i]._id);
                            } else {
                                //console.log('no match');
                            }
                        }
                    }
                });
            },
            returnUserData: function(id, cb) {
                var singleUser = users.findOne({ '_id': id}, function (err, singleUser) {   
                     if(err){
                       console.log(err);
                     } else {
                        cb(singleUser);
                     }
                });
            },
            returnToolData: function(userId, cb) {
                // query db find user tools,
                var allTools = tools.find( { userId: { $in: [ userId ] } }, function (err, tools) {   
                     if(err){
                       cb(err, null)
                     } else {
                        // query db to find tools with user id
                        cb(null , tools);
                     }
                });
            }, 
            returnSingleTool: function(userId, toolId, cb) {
                tools.findById(toolId, function (err, tool) {
                    cb(err, tool);
                });
            },
            updateToolQty: function(userId, toolId, qtyRemoved, cb) {
                console.log('update tool');
                
            },
            addNewTool: function(toolObj, cb) {
                console.log(toolObj);
                
                var newTool = new tools(toolObj);
                newTool.save(function(err, data) {
                    if (err) {
                        cb(err)
                    } else {
                        cb();
                    }
                });
            },
            removeSingleTool: function(userId, toolId, cb) {

                  tools.remove({ _id: toolId }, function(err, removed) {
                      cb(err);
                  });
                
            },
            addNewUser: function(userObj, cb) {
              var newUser = new users(userObj);
              newUser.save(function(err, data){
                if(err) {
                  cb(err);
                } else {
                  cb(err);
                }
              });
            },
            checkoutTool: function(userId, toolId, removeQty, cb) {
                
            tools.update(
                {_id: toolId},
                {
                  $inc: { qty: - removeQty} 
                }, 
                function(err, affected){
                  if(err) {
                    console.log(err);
                    cb();
                  } else {
                    // save checkout to db 
                    cb(err);
                  }
                }
              );
            },
            saveCheckout: function(userId, toolId, removeQty, cb) {
                var checkoutObj = {
                    userId: userId,
                    toolId: toolId,
                    checkoutQty: removeQty, 
                    checkoutDate: new Date()
                }
                var newCheckout = new checkouts(checkoutObj);
                newCheckout.save(function(err, data) {
                    cb(err);
                });
            },
            returnCheckoutData: function(userId, cb) {
                var allCheckouts = checkouts.find( { userId: { $in: [ userId ] } }, function (err, checkouts) {   
                     if(err){
                       cb(err, null)
                     } else {
                        // query db to find tools with user id
                        cb(null , checkouts);
                     }
                });
            },
            editSingleTool: function(userId, toolId, newTool, cb ) {
                
                var query = {_id:toolId};
                tools.findOneAndUpdate(query, newTool, {upsert:true}, function(err, doc){
                    cb(err);
                });
            },
            addToolQty: function(userId, toolId, addQty, cb) {
            tools.update(
                {_id: toolId},
                {
                  $inc: { qty: + addQty} 
                }, 
                function(err, affected){
                  if(err) {
                    cb(err);
                  } else {
                    cb(err);
                  }
                }
              );
            }
}
            
            
