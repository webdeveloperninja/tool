(function() {
	// Checkouts By Job
	$.ajax({
		/*
		 Retrieve data
		 */
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
				var chart = c3.generate({
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
				var chart = c3.generate({
					bindto: '#chart-1',
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
				// tools.forEach(function (item, index) {
				// 	toolsGraphArr.push([item.toolName, item.qty]);
				// 	toolsName.push(item.toolName);
				// });
				//
				//
				// var chart = c3.generate({
				// 	bindto: '#donut-chart',
				// 	data: {
				// 		columns: toolsGraphArr,
				// 		type: 'donut'
				// 	},
				// 	legend: {
				// 		show: true
				// 	},
				// 	donut: {
				// 		title: "My Crib"
				// 	},
				// 	tooltip: {
				// 		show: false
				// 	}
				// });
		}
	});

	setTimeout(function() { $('.my-account .panel-body .alert').fadeOut() }, 5000);
})();