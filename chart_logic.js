var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(73, 93, 247, 255)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 10,
            fill : false
        }]
    },
    options: {
      elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        }
    }
});

console.log('here')
