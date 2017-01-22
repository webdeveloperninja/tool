$(document).ready(function() {

  $.ajax({
  	url: '../tool-usage-overview',
		type: 'GET',
		success: function(data) {
			var chart = c3.generate({
				bindto: '#chart',
				padding: {
					left: 60
				},
				data: {
					x: 'x',
					columns: [
						['x', 'Category1', 'Category2'],
						['value', 300, 400]
					],
					type: 'bar'
				},
				axis: {
					rotated: true,
					x: {
						type: 'category'
					}
				}
			});
		}
	});

		});
