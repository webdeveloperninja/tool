var mongoose = require('mongoose');
// db connection 
mongoose.connect('mongodb://rsmith5901:321eaglecourt@ds139065-a0.mlab.com:39065,ds139065-a1.mlab.com:39065/tools?replicaSet=rs-ds139065')

var usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    companyName: String,
    stripeId: String,
    toolingRep: Object,
    superUser: Boolean,
    email: String,
    contactName: String
});


var toolsSchema = new mongoose.Schema({
    userId: String,
    toolName: String,
    qty: Number,
    autoOrderQty: Number,
    idealAmount: Number
});

var checkoutsSchema = new mongoose.Schema({
    userId: String,
    toolId: String,
    checkoutQty: Number, 
    toolName: String,
    checkoutDate: Date,
    jobId: Number,
    jobName: String,
    operatorId: Number,
    operatorName: String
});

var jobsSchema = new mongoose.Schema({
    companyName: String,
    userId: String,
    jobName: String,
    contactName: String,
    contactEmail: String,
    dueDate: Date,
    qtyDue: Number,
    jobId: Number
});

var operatorsSchema = new mongoose.Schema({
    userId: String,
    operatorName: String,
    operatorId: String
});


// tools model refer to tools collection
var users = mongoose.model('users', usersSchema);

var tools = mongoose.model('tools', toolsSchema);

var checkouts = mongoose.model('checkouts', checkoutsSchema);

var jobs = mongoose.model('jobs', jobsSchema);

var operators = mongoose.model('operators', operatorsSchema);

var exports = module.exports = {
        checkUserPass: function(username, password, cb) {
            users.find(function(err, users) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err) {
                        console.log(err); 
                    } else {
                        // see if username matches user
                        for (var i = 0; i < users.length; i++) {
                            if (users[i].username === username & users[i].password === password) {
                                //console.log('match');
                                return cb(true, users[i]._id);
                            }
                        }
                        return cb(false, false)
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
            editUser: function(userId, userObj, cb ) {
                var query = {_id:userId};
                users.findOneAndUpdate(query, userObj, {upsert:true}, function(err, doc){
                    cb(err);
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
                  cb(err, newUser._id);
                }
              });
            },
            // 
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
            saveCheckout: function(userId, toolId, removeQty, toolName, job, operator, cb) {
            
                var checkoutObj = {
                    userId: userId,
                    toolId: toolId,
                    checkoutQty: removeQty, 
                    toolName: toolName,
                    checkoutDate: new Date(),
                    jobId: job[0].jobId,
                    jobName: job[0].jobName,
                    operatorId: operator[0].operatorId,
                    operatorName: operator[0].operatorName
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
            },
            editSingleUser: function(userId, toolId, updatedUser, cb ) {
                var query = {_id:userId};
                users.findOneAndUpdate(query, updatedUser, {upsert:true}, function(err, doc){
                    cb(err);
                });
            },
            addJob: function(jobObj, cb) {
                var newJob = new jobs(jobObj);
                newJob.save(function(err, data) {
                    if (err) {
                        cb(err)
                    } else {
                        cb();
                    }
                });
            },
            returnJobsData: function(userId, cb) {
                var allJobs = jobs.find( { userId: { $in: [ userId ] } }, function (err, jobs) {   
                     if(err){
                       cb(err, null)
                     } else {
                        // query db to find tools with user id
                        cb(null , jobs);
                     }
                });
            },            
            addOperator: function(operatorObj, cb) {
                var newOperator = new operators(operatorObj);
                newOperator.save(function(err, data) {
                    if (err) {
                        cb(err)
                    } else {
                        cb();
                    }
                });
            },
            returnOperatorsData: function(userId, cb) {
                var allOperators = operators.find( { userId: { $in: [ userId ] } }, function (err, operators) {   
                     if(err){
                       cb(err, null)
                     } else {
                        // query db to find tools with user id
                        cb(null , operators);
                     }
                });
            },
            returnSingleOperator: function(userId, operatorId, cb) {
                operators.find({ 'operatorId': operatorId, 'userId':userId }, function (err, operator) {
                  cb(operator);
                })
            },
            returnSingleJob: function(userId, jobId, cb) {
                jobs.find({ 'userId': userId, 'jobId':jobId }, function (err, job) {
                  cb(job);
                })
            },
            removeSingleOperator: function(userId, operatorId, cb) {

                  operators.remove({ operatorId: operatorId }, function(err, removed) {
                      console.log('Successfully Removed Operator');
                      cb(err);
                  });
                
            },
            removeSingleJob: function(userId, jobId, cb) {
                  jobs.remove({ jobId: jobId }, function(err, removed) {
                      console.log('Successfully Removed Operator');
                      cb(err);
                  });
                
            },
            viewSingleJobToolingUsage: function(userId, jobId, cb) {
                checkouts.find({ 'jobId': jobId, 'userId':userId }, function (err, checkouts) {
                  if(err) {
                      console.log
                  }
                  cb(checkouts);
                })
            },
            viewSingleOperatorToolingUsage: function(userId, operatorId, cb) {
                checkouts.find({ 'operatorId': operatorId, 'userId':userId }, function (err, checkouts) {
                  if(err) {
                      console.log
                  }
                  cb(checkouts);
                })
            },
            clearCheckouts: function(userId, cb) {
                checkouts.find({ userId:userId }).remove( cb );
            },
            returnUsersData: function(cb) {
                users.find(function(err, users) {
                    cb(null, users);
                });
            }
}
            
            
