
$(function(){
		$.get('http://127.0.0.1:8000/api/record/').done(function(response) {
			console.log(this);
			console.log(response);
		});


		return stream_layers(3,128,.1).map(function(data, i) {
			return { 
			  key: 'Stream' + i,
			  values: data
			};
		});





	nv.addGraph(function() {
	  var chart = nv.models.lineWithFocusChart();

	 // chart.transitionDuration(500);
	  chart.xAxis
	      .tickFormat(d3.format(',f'));
	  chart.x2Axis
	      .tickFormat(d3.format(',f'));

	  chart.yAxis
	      .tickFormat(d3.format(',.2f'));
	  chart.y2Axis
	      .tickFormat(d3.format(',.2f'));

	  d3.select('#chart svg')
	      .datum(fetchData())
	      .call(chart);

	  nv.utils.windowResize(chart.update);

	  return chart;
	});
});
