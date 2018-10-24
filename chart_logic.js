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

console.log('here')
