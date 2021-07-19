const mobilebtn = document.querySelector(".mobilebtn")
const mobiledropdown = document.querySelector(".mobiledropdown")

mobilebtn.addEventListener("click", ()=>{
    mobiledropdown.classList.toggle("displ")
})

const chart1 = document.getElementById("myChart1");

var myChart = new Chart(chart1, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels:{
          color:"rgba(255,255,255, 1)"
        },
        title: "false",
      },
    },
  },
});

const chart2 = document.getElementById("myChart2");
var myChart1 = new Chart(chart2, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels:{
          color:"rgba(255,255,255, 1)"
        },
        title: "false",
      },
    },
  },
});

const chart3 = document.getElementById("myChart3");

var myChart = new Chart(chart3, {
  type: "bar",
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
      "31"
    ],
    datasets: [
      {
        label: "Hourly Idle time (mins)",
        data: [
          370.6, 370.6, 350.8, 430.9, 430.9, 200, 380.3, 430.4, 430.8, 390.9, 410.1, 290,
          100, 200, 100, 300, 500, 400, 100, 100.7, 290.9, 370.2, 200.6, 100, 310, 600, 600, 600, 220, 170, 160,
        ],
        hoverBackgroundColor: "rgba(59,179,113,255)",
        borderColor: "rgba(59,179,113,255)",
        backgroundColor: "rgba(59,179,113,255)",
      },
      {
        label: "Hourly Production Time (mins)",
        data: [
          220, 220, 240, 160, 140, 30, 220, 170, 160, 200, 190, 310, 600, 600, 600, 600, 600,
          110, 200, 150, 210, 230, 140, 200, 430.9, 200, 380.3, 430.4, 370.6, 350.8, 430.9,
        ],
        hoverBackgroundColor: "rgba(175,34,34,255)",
        borderColor: "rgba(175,34,34,255)",
        backgroundColor: "rgba(175,34,34,255)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks:{
         color:"white",
         display:true,
        
        },
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 1200,
 ticks:{
         color:"white",
         display:true,
        
        },
        grid: {
          display: true,
          color:'white',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        color: "white",

        font: {
          size: 20,
        },
        text: "Historic Data",
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 8,
          },
        },
      },
    },
  },
});

const chart4 = document.getElementById("myChart4");
var myChart = new Chart(chart4, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [19, 3, 5],
        borderColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        title: "false",
      },
    },
  },
});

const chart5 = document.getElementById("myChart5");
var myChart = new Chart(chart5, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [19, 3, 5],
        borderColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        title: "false",
      },
    },
  },
});
