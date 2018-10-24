let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#263238';
            ctx.shadowBlur = 45;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 40;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});



var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',

            data: [12, 19, 3, 12, 5, 15, 7, 2, 10],
            backgroundColor: '#FFF',
            borderColor: '#FFF',
            borderWidth: 10,
            fill: false

        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
            duration: 0, // general animation time
        },
      elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display:false,
            ticks: {
                    beginAtZero:true
                }
          }]
        },
        hover: {
          mode: 'point',
          intersect: true
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
    }
});

var multipleCtx = document.getElementById("multipleChart").getContext('2d');
var multipleChart = new Chart(multipleCtx, {
    type: 'line',
    data: {
        datasets: [{
            data: [2, 5, 10, 7, 2, 0],
            label: 'Left dataset',
            backgroundColor: 'rgba(100,15,15,0.2)',
            borderColor: 'rgba(100,15,15,1)',
            // This binds the dataset to the left y axis

        },{
            data: [22,100,16,60,20,0],
            label: 'Right dataset',
            backgroundColor: 'rgba(10,150,13,0.2)',
            borderColor: 'rgba(10,150,13,1)',

            // This binds the dataset to the right y axis

        },{
            data: [25,78,20,73,19,0],
            label: 'Right dataset',
            backgroundColor: 'rgba(13,150,130,0.2)',
            borderColor: 'rgba(13,150,130,1)',

            // This binds the dataset to the right y axis

        },{
            data: [15,18,70,33,69,0],
            label: 'Right dataset',
            backgroundColor: 'rgba(130,15,130,0.2)',
            borderColor: 'rgba(130,15,130,1)',

            // This binds the dataset to the right y axis

        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    options: {
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                type: 'linear',
                position: 'left'
            }]
        },
        legend:{
            display: false,

        }
    }
});
