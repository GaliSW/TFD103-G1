"use strict";

var chartLen = document.querySelectorAll('.myChart').length;
var chartArr = [];

for (var i = 0; i < chartLen; i++) {
  var chart = document.querySelectorAll('.myChart')[i].getContext('2d');
  var data = {
    labels: ['加速', '抓地', '碰撞', '迴避', '道具'],
    datasets: [{
      label: '',
      data: [5, 9, 6, 5, 6],
      fill: true,
      fillStyle: 'red',
      backgroundColor: ' rgba(14, 52, 97, .5)',
      borderColor: 'rgba(16, 197, 177, 1)',
      pointRadius: 6,
      pointBackgroundColor: 'rgba(14, 52, 97, .1)',
      pointBorderColor: 'rgba(2, 79, 63, 1)',
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(16, 197, 177, .5)',
      pointHoverBorderColor: 'rgba(14, 52, 97, 1)'
    }]
  };
  var myChart = new Chart(chart, {
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
              size: 16
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
          borderWidth: 5
        }
      }
    }
  });
}