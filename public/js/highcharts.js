// var chart;
// var secondChart;
// var thirdChart;

// /**
//  * Request data from the server, add it to the graph and set a timeout
//  * to request again
//  */

//  function requestTemp(Temperature) {
//    console.log(Temperature)
//     var d = new Date();
//     var n = d.getTime();



//     point = [(new Date()).getTime(), Temperature];


//     var series = chart.series[0],
//             shift = series.data.length > 20; // shift if the series is
//                                                  // longer than 20
//             // add the point
//             chart.series[0].addPoint(point, true, shift);
//             // call it again after one second
//             // setTimeout(requestTemp, 1000);

//     }

//         function requestHumidity(Humidity) {
//             var d = new Date();
//             var n = d.getTime();

//             point = [n * 1000, Humidity];

//             var series = chart.series[0],
//                 shift = series.data.length > 20; // shift if the series is
//                                                  // longer than 20
//             // add the point
//             secondChart.series[0].addPoint(point, true, shift);
//             // call it again after one second
//             // setTimeout(requestHumidity, 1000);
//         }

//         function requestSoil(Soil) {
//             var d = new Date();
//             var n = d.getTime();

//             point = [n * 1000, Soil];

//             var series = chart.series[0],
//                 shift = series.data.length > 20; // shift if the series is
//                                                  // longer than 20
//             // add the point
//             thirdChart.series[0].addPoint(point, true, shift);
//             // call it again after one second
//             // setTimeout(requestSoil, 1000);
//         }

//         $(document).ready(function() {

//             chart = new Highcharts.Chart({
//                 chart: {
//                     renderTo: 'data-container',
//                     defaultSeriesType: 'spline',
//                     events: {
//                     }
//                 },
//                 title: {
//                     text: 'Temperature Data'
//                 },
//                 xAxis: {
//                     type: 'datetime',
//                     tickPixelInterval: 150,
//                     maxZoom: 20 * 1000
//                 },
//                 yAxis: {
//                     minPadding: 0.2,
//                     maxPadding: 0.2,
//                     title: {
//                         text: 'Value',
//                         margin: 80
//                     }
//                 },
//                 series: [{
//                     name: 'Temperature',
//                     data: []
//                 }]
//             });


//             Highcharts.setOptions({
//                 global: {
//                     useUTC: false
//                 }
//             });

//             secondChart = Highcharts.chart('chartB', {
//                chart: {
//                 renderTo: 'data-container',
//                 defaultSeriesType: 'spline',
//                 events: {
//                 }
//             },
//             title: {
//                 text: 'Humidity data'
//             },
//             xAxis: {
//                 type: 'datetime',
//                 tickPixelInterval: 150,
//                 maxZoom: 20 * 1000
//             },
//             yAxis: {
//                 minPadding: 0.2,
//                 maxPadding: 0.2,
//                 title: {
//                     text: 'Value',
//                     margin: 80
//                 }
//             },
//             series: [{
//                 name: 'Humidity',
//                 data: []
//             }]
//         });

//             thirdChart = Highcharts.chart('chartC', {
//                chart: {
//                 renderTo: 'data-container',
//                 defaultSeriesType: 'spline',
//                 events: {
//                 }
//             },
//             title: {
//                 text: 'Soil Moisture Data'
//             },
//             xAxis: {
//                 type: 'datetime',
//                 tickPixelInterval: 150,
//                 maxZoom: 20 * 1000
//             },
//             yAxis: {
//                 minPadding: 0.2,
//                 maxPadding: 0.2,
//                 title: {
//                     text: 'Value',
//                     margin: 80
//                 }
//             },
//             series: [{
//                 name: 'Soil Moisture',
//                 data: []
//             }]
//         });
  //      });