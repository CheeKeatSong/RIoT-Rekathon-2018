// var mqtt    = require('mqtt');
// var client  = mqtt.connect('mqtt://broker.mqttdashboard.com');

// var topicMachine = "rekathon/vegeboyz";//Topic at brker''

// client.on('connect', () => {
//   client.subscribe(topicMachine)
// })

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });


var chart;
var secondChart;
var thirdChart;

/**
 * Request data from the server, add it to the graph and set a timeout
 * to request again
 */



function requestTemp() {
    $.ajax({
        url: '/getTemp?temperature=10.20',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is
                                                 // longer than 20
            // add the point
            chart.series[0].addPoint(point, true, shift);
            // call it again after one second
            setTimeout(requestTemp, 1000);
        },
        cache: false
    });
}

function requestHumidity() {
    $.ajax({
        url: '/getHumidity?humidity=20.20',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            secondChart.series[0].addPoint(point, true, shift);
            // call it again after one second
            setTimeout(requestHumidity, 1000);
        },
        cache: false
    });
}

function requestSoil() {
    $.ajax({
        url: '/getSoil?soil=30.20',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is
                                                 // longer than 20

            // add the point
            thirdChart.series[0].addPoint(point, true, shift);
            // call it again after one second
            setTimeout(requestSoil, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {

//     var hostname = "broker.mqttdashboard.com";
//     var topicMachine = "rekathon/vegeboyz";
//     var port = "183";
//     var clientid = "admin"

// //Create a new Client object with your broker's hostname, port and your own clientId
// var client = new Messaging.Client(hostname, port, clientid);

// var options = {

//      //connection attempt timeout in seconds
//      timeout: 3,

//      //Gets Called if the connection has successfully been established
//      onSuccess: function () {
//          alert("Connected");
//      },

//      //Gets Called if the connection could not be established
//      onFailure: function (message) {
//          alert("Connection failed: " + message.errorMessage);
//      }

//  };

// //Attempt to connect
// client.connect(options);

// client.subscribe(topicMachine, {qos: 2});

chart = new Highcharts.Chart({
    chart: {
        renderTo: 'data-container',
        defaultSeriesType: 'spline',
        events: {
            load: requestTemp
        }
    },
    title: {
        text: 'Temperature Data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
        maxZoom: 20 * 1000
    },
    yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        title: {
            text: 'Value',
            margin: 80
        }
    },
    series: [{
        name: 'Temperature',
        data: []
    }]
});


Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

secondChart = Highcharts.chart('chartB', {
 chart: {
    renderTo: 'data-container',
    defaultSeriesType: 'spline',
    events: {
        load: requestHumidity
    }
},
title: {
    text: 'Humidity data'
},
xAxis: {
    type: 'datetime',
    tickPixelInterval: 150,
    maxZoom: 20 * 1000
},
yAxis: {
    minPadding: 0.2,
    maxPadding: 0.2,
    title: {
        text: 'Value',
        margin: 80
    }
},
series: [{
    name: 'Humidity',
    data: []
}]
});

thirdChart = Highcharts.chart('chartC', {
 chart: {
    renderTo: 'data-container',
    defaultSeriesType: 'spline',
    events: {
        load: requestSoil
    }
},
title: {
    text: 'Soil Moisture Data'
},
xAxis: {
    type: 'datetime',
    tickPixelInterval: 150,
    maxZoom: 20 * 1000
},
yAxis: {
    minPadding: 0.2,
    maxPadding: 0.2,
    title: {
        text: 'Value',
        margin: 80
    }
},
series: [{
    name: 'Soil Moisture',
    data: []
}]
});
});