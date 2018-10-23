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
