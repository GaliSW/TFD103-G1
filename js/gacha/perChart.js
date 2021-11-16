

let chart = document.getElementById('firstChart').getContext('2d');

const chartData = {
    labels: [
        '加速',
        '抓地',
        '碰撞',
        '迴避',
        '道具'
    ],
    datasets: [{
        label: '',
        data: [9, 9, 9, 9, 9],
        fill: true,
        fillStyle: 'red',
        backgroundColor: ' rgba(14, 52, 97, .5)',
        borderColor: 'rgba(16, 197, 177, 1)',
        pointRadius: 6,
        pointBackgroundColor: 'rgba(14, 52, 97, .1)',
        pointBorderColor: 'rgba(2, 79, 63, 1)',
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(16, 197, 177, .5)',
        pointHoverBorderColor: 'rgba(14, 52, 97, 1)',
    }]
};
const firstChart = new Chart(chart, {
    type: 'radar',
    data: chartData,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            r: {
                pointLabels: {
                    font: {
                        size: 16,
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
    },
});