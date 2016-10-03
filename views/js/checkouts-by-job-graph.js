$(document).ready(function() {
        $('.loader').css({display: 'block'});
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
      // somehow get job id and userid set ajax headers 
      // api call
        $.ajax({
            /*
                Retrieve data 
            */
          url: '../tool-usage-overview',
          type: 'GET',
        //   data: { signature: authHeader },
          success: function(data) {
            if (data.length == 2) {
            $('.bar-graph #error').html('<h1 class="text-center">No Checkouts for this job</h1>');
             $('.loader').fadeOut();  
            } else {
            // if no data show text no checkouts for job 
            
              // else run this

        	data = jQuery.parseJSON(data);
        	var graphData = createGraphObject(data);
          var names =  graphData.names,
              hotdogs = graphData.qty,
              jobids = graphData.jobids,
              chart,
              width = 540,
              bar_height = 35,
              gap = 2,
              height = bar_height * names.length;
                var left_width = 100;
          var x = d3.scale.linear()
             .domain([0, d3.max(hotdogs)])
             .range([0, width]);
        
          var y = function(i) { return bar_height * i; }
          /* step 5 */
          var gap = 2, yRangeBand;
          // redefine y for adjusting the gap
          yRangeBand = bar_height + 2 * gap;
          y = function(i) { return yRangeBand * i; };
         
          chart = d3.select($("#step-5")[0])
            .append('svg')
            .attr('class', 'chart')
            .attr('width', left_width + width + 40)
            .attr('height', (bar_height + gap * 2) * names.length + 30)
            .append("g")
            .attr("transform", "translate(10, 20)");
         
          chart.selectAll("line")
            .data(x.ticks(d3.max(hotdogs)))
            .enter().append("line")
            .attr("x1", function(d) { return x(d) + left_width; })
            .attr("x2", function(d) { return x(d) + left_width; })
            .attr("y1", 0)
            .attr("y2", (bar_height + gap * 2) * names.length);
         
          chart.selectAll(".rule")
            .data(x.ticks(d3.max(hotdogs)))
            .attr("class", "rule")
            .attr("x", function(d) { return x(d) + left_width; })
            .attr("y", 0)
            .attr("dy", -6)
            .attr("text-anchor", "middle")
            .attr("font-size", 10)
            .text(String);
          chart.selectAll("rect")
            .data(hotdogs)
            .enter().append("rect")
            .attr("x", left_width)
            .attr("y", function(d, i) { return y(i) + gap; })
            .attr('class', 'bar-graph')
            .attr("width", x)
            .attr('data-toggle', 'tooltip')
            .attr("height", bar_height)
            .attr('data-job-id',function(d,i){ return jobids[i] })
            .on('click', function () {
              var jobId = $(this).data('job-id');
              var url = 'view-job-tooling/?jobId=' + jobId;
              window.location.href = url;
            });
         
          chart.selectAll("text.score")
            .data(hotdogs)
            .enter().append("text")
            .attr("x", function(d) { return x(d) + left_width; })
            .attr("y", function(d, i) { return y(i) + yRangeBand/2;})
            .attr("dx", -5)
            .attr("dy", ".36em")
            .attr("text-anchor", "end")
            .attr('class', 'score')
            .text(String);
         
          chart.selectAll("text.name")
            .data(names)
            .enter().append("text")
            .attr("x", 0)
            .attr("y", function(d, i){ return y(i) + yRangeBand/2; } )
            .attr("dy", ".36em")
            .attr("text-anchor", "start")
            .attr('class', 'name')
            .attr('data-job-id',function(d,i){ return jobids[i] })
            .text(String)
            .on('click', function () {
              var jobId = $(this).data('job-id');
              var url = 'view-job-tooling/?jobId=' + jobId;
              window.location.href = url;
            });
            $('.loader').fadeOut();  
            }
    
          },
          error: function(e) {
        	//called when there is an error
          }
        });

    /*
        Put this on server
    */

    function createGraphObject(data) {
        
        function uniq(a) {
            var seen = {};
            return a.filter(function(item) {
                return seen.hasOwnProperty(item) ? false : (seen[item] = true);
            });
        }
        
        var graphData = {
            names: [],
            jobids: [],
            qty: []
        };
        
        for (i=0; i<data.length; i++) {
            graphData.names.push(data[i].jobName);
            graphData.jobids.push(data[i].jobId);
        }
        
        graphData.names = uniq(graphData.names);
        graphData.jobids = uniq(graphData.jobids);
        
        for (var c=0; c<data.length; c++) {
            for (var d=0; d<graphData.names.length; d++) {
                if (graphData.names[d] == data[c].jobName) {
                    if(!graphData.qty[d]) {
                        graphData.qty[d] = 0;
                    }  
                    graphData.qty[d]+=data[c].checkoutQty;
                }
            }
        }
        return(graphData);
    }
    $('#myModal').on('hidden.bs.modal', function () {
        $('.bar-graph svg.chart').remove();
    });
});
