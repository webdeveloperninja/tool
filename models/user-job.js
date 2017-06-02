var mongoose = require('mongoose');
mongoose.connect('mongodb://rsmith5901:321eaglecourt@ds139065-a0.mlab.com:39065,ds139065-a1.mlab.com:39065/tools?replicaSet=rs-ds139065');

const userJobSchema = new mongoose.Schema({
  userId: String,
  jobs: Array
});

var UserJob = mongoose.model('UserJob', userJobSchema)

module.exports = {
  UserJob: UserJob,
  createUserJob: (userId) => {

  },
  readUserJob: (userId) => {

  },
  updateUserJob: (userId) => {

  },
  deleteUserJob: (userId) => {

  },
  createJob: (userId, job) => {

  },
  readJob: (userId, jobId) => {

  },
  updateJob: (userId, jobId, jobObj) => {

  },
  deleteJob: (userId, jobId) => {

  },
  getJobs: (userId) => {

  }
}