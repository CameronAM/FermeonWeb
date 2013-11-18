
$(function(){
	$.get('http://127.0.0.1:8000/api/record/').done(function(response) {
		// console.log(this);
		console.log(response);

		var chartLines = _.reduce(response.objects, function(graphLines, measurementSet, index){ 
			// console.table(value);

			// {
			// 	key: "p1",
			// 	values: [
			// 		{  x: date, y: value  },
			// 		{  x: date, y: value  }
			// 	]
			// }

			var instant = moment(measurementSet.instant);
			_.each(measurementSet.measurements, function(temperature, probe){
				var graphLine = _.find(graphLines, { name: probe });

				if(graphLine == null) {
					graphLine = { name: probe, data: [] };
					graphLines.push(graphLine);
				}

				graphLine.data.push({ x: instant.unix(), y: temperature });
			});

			return graphLines;
		}, []);



		var graph = new Rickshaw.Graph({
		        element: document.querySelector("#chart"),
		        width: 580,
		        height: 250,
		        series: [_.last(chartLines)]
		});

		var axes = new Rickshaw.Graph.Axis.Time( { graph: graph } );

		graph.render();


		// var chart = nv.models.lineWithFocusChart();

		// // chart.transitionDuration(500);
		// chart.xAxis.tickFormat(function(d) { 
		// 	return d3.time.format('%Y-%m-%dT%H:%M:%S')(new Date(d)); 
		// });

		// chart.x2Axis.tickFormat(function(d) { 
		// 	return d3.time.format('%Y-%m-%dT%H:%M:%S')(new Date(d)); 
		// });

		// // chart.yAxis.tickFormat(d3.format(',.2f'));

		// d3.select('#chart svg').datum(chartLines).call(chart);

		// nv.utils.windowResize(chart.update);
	});
});
