// bar chart example
// pie chart  example with reducer - population by region

const DOM = {
  input: document.querySelector("#searchInput"),
  button: document.querySelector("#searchButton"),
  content: document.querySelector("#content"),
  pieChart: document.querySelector("#populationChart"),
  barChart: document.querySelector("#barChartExample"),
  getCoinsValuesButton: document.querySelector("#getCoinsValues"),
};
let barChart = null;
const dataSet = [
  {
    coinName: "Bitcoin",
  },
  {
    coinName: "Eth",
  },
  {
    coinName: "win",
  },
  {
    coinName: "zoid",
  },
  {
    coinName: "abc",
  },
];
const myColors = ["red", "green", "blue", "orange", "yellow"];
const coinsData = {
  labels: [1],
  datasets: dataSet.map((c, i) => {
    return {
      label: c.coinName,
      data: [0],
      backgroundColor: [myColors[i]],
      borderColor: [myColors[i]],
      borderWidth: 1,
    };
  }),
};
const coinsConfig = {
  type: "line",
  data: coinsData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {},
    },
  },
};
const response = { time: "2022-04-16", eth: 1.2, btc: 28.7 };
function init() {
  DOM.button.addEventListener("click", handleSearch);
  //   DOM.getCoinsValuesButton.addEventListener("click", addValueLocal);
  //   drawBarChart(coinsConfig);
}

init();
let coinsTime = 1;
function addValueLocal() {
  coinsData.labels.push(coinsTime++);
  for (let index = 0; index < coinsData.datasets.length; index++) {
    coinsData.datasets[index].data.push(Math.ceil(Math.random() * 99));
  }
  drawBarChart(coinsConfig);
}
function drawBarChart(config) {
  if (barChart) {
    barChart.destroy();
  }
  barChart = new Chart(DOM.barChart, config);
}

async function handleSearch() {
  try {
    showLoader();
    const result = await searchCountry(DOM.input.value);
    if (!Array.isArray(result)) throw new Error("Api error");
    draw(result);
    drawPopulationChart(result);
  } catch (error) {
    console.log("I AM HERE AND I AM NOT HAPPY");
    swal({
      title: "Something went wrong!",
      text: "Contact admin",
      icon: "error",
    });
  } finally {
    removeLoader();
  }
}

function drawPopulationChart(result) {
  const colors = [
    "#800000",
    "#8B0000",
    "#A52A2A",
    "#B22222",
    "#DC143C",
    "#FF0000",
    "#FF6347",
    "#FF7F50",
    "#CD5C5C",
    "#F08080",
    "#E9967A",
    "#FA8072",
    "#FFA07A",
    "#FF4500",
    "#FF8C00",
    "#FFA500",
    "#FFD700",
    "#B8860B",
    "#DAA520",
    "#EEE8AA",
    "#BDB76B",
    "#F0E68C",
    "#808000",
    "#FFFF00",
    "#9ACD32",
    "#556B2F",
    "#6B8E23",
    "#7CFC00",
    "#7FFF00",
    "#ADFF2F",
    "#006400",
    "#008000",
    "#228B22",
    "#00FF00",
    "#32CD32",
    "#90EE90",
    "#98FB98",
    "#8FBC8F",
    "#00FA9A",
    "#00FF7F",
    "#2E8B57",
    "#66CDAA",
    "#3CB371",
    "#20B2AA",
    "#2F4F4F",
    "#008080",
    "#008B8B",
    "#00FFFF",
    "#00FFFF",
    "#E0FFFF",
    "#00CED1",
    "#40E0D0",
    "#48D1CC",
    "#AFEEEE",
    "#7FFFD4",
    "#B0E0E6",
    "#5F9EA0",
    "#4682B4",
    "#6495ED",
    "#00BFFF",
    "#1E90FF",
    "#ADD8E6",
    "#87CEEB",
    "#87CEFA",
    "#191970",
    "#000080",
    "#00008B",
    "#0000CD",
    "#0000FF",
    "#4169E1",
    "#8A2BE2",
    "#4B0082",
    "#483D8B",
    "#6A5ACD",
    "#7B68EE",
    "#9370DB",
    "#8B008B",
    "#9400D3",
    "#9932CC",
    "#BA55D3",
    "#800080",
    "#D8BFD8",
    "#DDA0DD",
    "#EE82EE",
    "#FF00FF",
    "#DA70D6",
    "#C71585",
    "#DB7093",
    "#FF1493",
    "#FF69B4",
    "#FFB6C1",
    "#FFC0CB",
    "#FAEBD7",
    "#F5F5DC",
    "#FFE4C4",
    "#FFEBCD",
    "#F5DEB3",
    "#FFF8DC",
    "#FFFACD",
    "#FAFAD2",
    "#FFFFE0",
    "#8B4513",
    "#A0522D",
    "#D2691E",
    "#CD853F",
    "#F4A460",
    "#DEB887",
    "#D2B48C",
    "#BC8F8F",
    "#FFE4B5",
    "#FFDEAD",
    "#FFDAB9",
    "#FFE4E1",
    "#FFF0F5",
    "#FAF0E6",
    "#FDF5E6",
    "#FFEFD5",
    "#FFF5EE",
    "#F5FFFA",
    "#708090",
    "#778899",
    "#B0C4DE",
    "#E6E6FA",
    "#FFFAF0",
    "#F0F8FF",
    "#F8F8FF",
    "#F0FFF0",
    "#FFFFF0",
    "#F0FFFF",
    "#FFFAFA",
    "#000000",
    "#696969",
    "#808080",
    "#A9A9A9",
    "#C0C0C0",
    "#D3D3D3",
    "#DCDCDC",
    "#F5F5F5",
    "#FFFFFF",
  ];

  // {} - we know
  // function constructor - we know
  // Object.create - we DONT know
  // class - we DONT know

  const regionCalculation = result.reduce((regionObj, currentCountry) => {
    const region = currentCountry.region;
    const population = currentCountry.population;
    if (regionObj[region]) {
      // if the current region exist in the object: example { Asia: 900000, Africa: 1200000 }
      regionObj[region] = regionObj[region] + population;
    } else {
      regionObj[region] = population;
    }
    return regionObj;
  }, {});
  console.log(regionCalculation);
  const labels = Object.keys(regionCalculation);
  const population = Object.values(regionCalculation);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Population",
        data: population,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
  };
  new Chart(DOM.pieChart, config);
}
function draw(result) {
  DOM.content.innerHTML = "";
  if (Array.isArray(result)) {
    for (let index = 0; index < result.length; index++) {
      drawCountry(result[index]);
    }
  } else {
    drawCountry(result);
  }
}
function drawCountry(countryToDraw) {
  const img = getImg(countryToDraw?.flags?.png);
  const h1 = document.createElement("h1");
  h1.innerText = countryToDraw?.name?.common;
  DOM.content.append(img, h1);
}

async function searchCountry(country) {
  const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const json = await result.json();
  return json;
}
{
  /* <div class="spinner-border" role="status"> */
}
function showLoader() {
  DOM.content.innerHTML = "";
  const loader = document.createElement("div");
  loader.id = "searchLoader";
  loader.classList.add("spinner-border");
  DOM.content.append(loader);
}

function removeLoader() {
  const loader = document.querySelector("#searchLoader");
  if (loader) {
    loader.remove();
  }
}

function initLineChart() {
  // const ctx = document.getElementById('myChart');
  // new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             y: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });
}

initLineChart();
