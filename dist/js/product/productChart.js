"use strict";

var ctx = document.getElementById('myChart').getContext('2d');
console.log(ctx);
var data = {
  labels: ['加速', '抓地', '碰撞', '迴避', '道具'],
  datasets: [{
    label: '',
    labelColors: 'blue',
    data: [5, 9, 6, 5, 6],
    fill: true,
    fillStyle: 'red',
    backgroundColor: ' rgba(16, 197, 177, .5)',
    borderColor: 'rgba(16, 197, 177, 1)',
    pointRadius: 10,
    pointBackgroundColor: 'rgba(14, 52, 97, .8)',
    pointBorderColor: 'rgba(2, 79, 63, 1)',
    pointHoverRadius: 10,
    pointHoverBackgroundColor: 'rgba(16, 197, 177, .5)',
    pointHoverBorderColor: 'rgba(14, 52, 97, 1)'
  }]
};
var myChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 32
          }
        },
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 10
      }
    },
    elements: {
      line: {
        borderWidth: 10
      }
    }
  }
});