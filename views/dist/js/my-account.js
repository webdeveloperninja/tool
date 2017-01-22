var TiBase = TiBase || {};
TiBase.MyAccount = TiBase.MyAccount || {};

(function() {
  'use strict';
  TiBase.MyAccount.buildCharts = function() {
    $.ajax({
      url: '../tool-usage-overview',
      type: 'GET',
      success: function(data) {
        var checkouts = JSON.parse(data);
        var jobs = [];

        for (var i=0; i<checkouts.length; i++) {
          var match = false;
          for (var b=0; b<jobs.length; b++) {
            if (checkouts[i].jobName == jobs[b][0]) {
              match = true;
              jobs[b][1] += checkouts[i].checkoutQty;
            }
          }
          if (match === false) {
            jobs.push([checkouts[i].jobName, checkouts[i].checkoutQty]);
          }
        }
        var donutChart = c3.generate({
          bindto: '#donut-chart',
          data: {
            columns: jobs,
            type : 'donut'
          },
          legend: {
            show: true
          },
          donut: {
            title: "Jobs"
          }
        });
        var barChart = c3.generate({
          bindto: '#bar-chart',
          data: {
            columns: jobs,
            type : 'bar'
          },
          legend: {
            show: true
          },
          donut: {
            title: "My Crib"
          }
        });
      }
    });
  };


  TiBase.MyAccount.init = function() {
    /*
    * Looks for cases when loaded with success or failure ui flag for adding
    * email, operator or job
    * */
    setTimeout(function() { $('.my-account .panel-body .alert').fadeOut() }, 5000);

    /*
    * Ajax call to get data and build c3 charts mounts to
    * #donut-chart
    * #bar-chart
    * */
    TiBase.MyAccount.buildCharts();
  };

  $(document).ready(function() {
    TiBase.MyAccount.init();
  });

})();