// 彈跳視窗
let vmm = new Vue({
  el: "#vmm",
  data: {
    pop: false,
    buy: true,
    success: false,
    one: true,
    two: false,
    three: false,
  },
  methods: {
    clickPop() {
      vmm.$data.pop = true;
      vmm.$data.buy = true;
      vmm.$data.success = false;
      vmm.$data.one = false;
      vmm.$data.two = false;
      vmm.$data.three = false;
    },
    clickClose() {
      vmm.$data.pop = false;
    },
    clickChange() {
      vmm.$data.pop = true;
      vmm.$data.buy = false;
      vmm.$data.success = false;
      vmm.$data.one = true;
      vmm.$data.two = false;
      vmm.$data.three = false;
    },
    toSuccess() {
      vmm.$data.success = true;
      vmm.$data.buy = false;
    },
    toTwo() {
      vmm.$data.two = true;
      vmm.$data.one = false;
      vmm.$data.three = false;
    },
    toThree() {
      vmm.$data.three = true;
      vmm.$data.one = false;
      vmm.$data.two = false;
    },
  },
});


// 能力圖迴圈
let chartLen = document.querySelectorAll(".myChart").length;
let chartArr = [];
for (let i = 0; i < chartLen; i++) {
  let chart = document.querySelectorAll(".myChart")[i].getContext("2d");

  const data = {
    labels: ["加速", "抓地", "碰撞", "迴避", "道具"],
    datasets: [
      {
        label: "",
        data: [5, 9, 6, 5, 6],
        fill: true,
        fillStyle: "red",
        backgroundColor: " rgba(16, 197, 177, .5)",
        borderColor: "rgba(16, 197, 177, 1)",
        pointRadius: 2,
        pointBackgroundColor: "rgba(14, 52, 97, .8)",
        pointBorderColor: "rgba(2, 79, 63, 1)",
        pointHoverRadius: 2,
        pointHoverBackgroundColor: "rgba(16, 197, 177, .5)",
        pointHoverBorderColor: "rgba(14, 52, 97, 1)",
      },
    ],
  };
  const myChart = new Chart(chart, {
    type: "radar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          pointLabels: {
            font: {
              size: 14,
            },
          },
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
      elements: {
        line: {
          borderWidth: 1,
        },
      },
    },
  });
}
