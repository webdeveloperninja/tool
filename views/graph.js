$(document).ready(function() {
    // var data = [4, 8, 15, 16, 23, 42, 4, 23, 42 ,8, 15, 16];
    
    // var width = 986,
    //     barHeight = 50;
    
    // var x = d3.scale.linear()
    //     .domain([0, d3.max(data)])
    //     .range([0, width]);
    
    // var chart = d3.select(".chart")
    //     .attr("width", width)
    //     .attr("height", barHeight * data.length);
    
    // var bar = chart.selectAll("g")
    //     .data(data)
    //   .enter().append("g")
    //     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
    
    // bar.append("rect")
    //     .attr("width", x)
    //     .attr("height", barHeight - 1);
    
    // bar.append("text")
    //     .attr("x", function(d) { return x(d) - 3; })
    //     .attr("y", barHeight / 2)
    //     .attr("dy", ".35em")
    //     .text(function(d) { return d; }); 
  /*
    Example data 
    checkouts = {
        names: [],
        checkouts: []
    }
  */
  
  $('#graph').click(function() {
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
      console.log(getParameterByName('jobId'));
        $.ajax({
          url: '../checkouts-per-job/?jobId=' + getParameterByName('jobId'),
          type: 'GET',
        //   data: { signature: authHeader },
          success: function(data) {
        	//called when successful
        	data = jQuery.parseJSON(data);
        	var graphData = createGraphObject(data);
        	console.log(graphData);
          var names =  graphData.names,
              hotdogs = graphData.qty,
              chart,
              width = 1000,
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
            .enter().append("text")
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
            .attr("width", x)
            .attr("height", bar_height);
         
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
            .text(String);
            $('.loader').fadeOut();
          },
          error: function(e) {
        	//called when there is an error
        	//console.log(e.message);
        	console.log('There was an error getting checkout data' + e.message);
          }
        });
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
            qty: []
        };
        
        
        for (i=0; i<data.length; i++) {
            graphData.names.push(data[i].toolName);
        }

        graphData.names = uniq(graphData.names);
        
        /*
        
            Loop through data match names and add qty at that index 
            
        */
        
        // console.log(graphData);
        console.log('//////////////////////////');
        for (var c=0; c<data.length; c++) {
            for (var d=0; d<graphData.names.length; d++) {
                if (graphData.names[d] == data[c].toolName) {
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
