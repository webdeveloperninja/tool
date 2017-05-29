
app.get('/api/v1/jobs', function(req, res) {
  console.log(req.user);
    if (req.user) {
      dbAuth.returnJobsData(req.user._id, function(err, jobs) {
        res.json({success: true, jobs: jobs});
      });
    }
    else {
      res.json({success: false});
    }
});

app.post('/api/v1/job', function(req, res) {
    dbAuth.updateJob(req.body._id,req.body, function(err, doc) {
      if(err) {
        res.status(500);
      } else {
        res.status(200);
      }
    });
});