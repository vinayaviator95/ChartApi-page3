const myChart1 = document.getElementById("myChart");

var myChart = new Chart(myChart1, {
  type: "line",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "Number",
        data: [
          370.6, 370.6, 350.8, 430.9, 430.9, 200, 380.3, 430.4, 430.8, 390.9,
          410.1, 290, 100, 200, 100, 300, 500, 400, 100, 100.7, 290.9, 370.2,
          200.6, 100, 310, 600, 600, 600, 220, 170, 160,
        ],

        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        min: 0,
        max: 1000,

        grid: {
          display: true,
          color: "lightgrey",
        },
      },
    },
  },
});
