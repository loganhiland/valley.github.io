/*
  MOOSE Sensitivity Analysis Tool

  This file controls interactivity:
  - heat-capacity slider
  - image switching
  - Plotly graph updates

  Replace the placeholder cases below with your real parameter values,
  image paths, mean values, and error bars.
*/

// Each object represents one precomputed MOOSE case.
// Add more cases as needed.
const cases = [
  {
    label: "Low Cp",
    heatCapacity: 800,
    image: "figures/temp_placeholder_low.png",
    metricName: "Max Temperature",
    metricValue: 520,
    errorBar: 8
  },
  {
    label: "Nominal Cp",
    heatCapacity: 1000,
    image: "figures/temp_placeholder_nominal.png",
    metricName: "Max Temperature",
    metricValue: 500,
    errorBar: 6
  },
  {
    label: "High Cp",
    heatCapacity: 1200,
    image: "figures/temp_placeholder_high.png",
    metricName: "Max Temperature",
    metricValue: 485,
    errorBar: 7
  }
];

const slider = document.getElementById("cpSlider");
const cpValue = document.getElementById("cpValue");
const temperatureImage = document.getElementById("temperatureImage");

// Make slider automatically match number of cases.
slider.min = 0;
slider.max = cases.length - 1;
slider.step = 1;
slider.value = 0;

function updateViewer(index) {
  const selectedCase = cases[index];

  // Update label above slider.
  cpValue.textContent = `${selectedCase.label} (${selectedCase.heatCapacity} J/kg-K)`;

  // Update temperature image.
  temperatureImage.src = selectedCase.image;
  temperatureImage.alt = `Temperature distribution for ${selectedCase.label}`;

  // Update graph.
  drawPlot(index);
}

function drawPlot(selectedIndex) {
  const xValues = cases.map(c => c.heatCapacity);
  const yValues = cases.map(c => c.metricValue);
  const errorValues = cases.map(c => c.errorBar);

  const trace = {
    x: xValues,
    y: yValues,
    type: "scatter",
    mode: "lines+markers",
    error_y: {
      type: "data",
      array: errorValues,
      visible: true
    },
    name: "Sensitivity result"
  };

  // Highlight currently selected case.
  const selectedTrace = {
    x: [cases[selectedIndex].heatCapacity],
    y: [cases[selectedIndex].metricValue],
    type: "scatter",
    mode: "markers",
    marker: {
      size: 14
    },
    name: "Selected case"
  };

  const layout = {
    margin: { t: 30, r: 20, b: 60, l: 70 },
    xaxis: {
      title: "Heat Capacity [J/kg-K]"
    },
    yaxis: {
      title: "Temperature Metric [K]"
    }
  };

  Plotly.newPlot("sensitivityPlot", [trace, selectedTrace], layout, {
    responsive: true
  });
}

// Update when slider moves.
slider.addEventListener("input", event => {
  updateViewer(Number(event.target.value));
});

// Initial page load.
updateViewer(0);
