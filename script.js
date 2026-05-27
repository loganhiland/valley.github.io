/*
  Slider-based image swapping.

  This is intentionally simple:
  - no MATLAB running in browser
  - no Plotly dependency
  - no CSV loading required for the first version

  Replace these placeholder cases with your real cases.
*/

const cases = [
  {
    label: "Low Cp",
    heatCapacity: "800 J/kg-K",
    notes: "Placeholder low heat-capacity case.",
    temperatureImage: "figures/temperature/temp_cp_low.png",
    matlabPlotImage: "figures/matlab_plots/plot_cp_low.png"
  },
  {
    label: "Nominal Cp",
    heatCapacity: "1000 J/kg-K",
    notes: "Placeholder nominal/reference heat-capacity case.",
    temperatureImage: "figures/temperature/temp_cp_nominal.png",
    matlabPlotImage: "figures/matlab_plots/plot_cp_nominal.png"
  },
  {
    label: "High Cp",
    heatCapacity: "1200 J/kg-K",
    notes: "Placeholder high heat-capacity case.",
    temperatureImage: "figures/temperature/temp_cp_high.png",
    matlabPlotImage: "figures/matlab_plots/plot_cp_high.png"
  }
];

const slider = document.getElementById("caseSlider");
const caseLabel = document.getElementById("caseLabel");
const heatCapacityValue = document.getElementById("heatCapacityValue");
const caseNotes = document.getElementById("caseNotes");
const temperatureImage = document.getElementById("temperatureImage");
const matlabPlotImage = document.getElementById("matlabPlotImage");

slider.min = 0;
slider.max = cases.length - 1;
slider.step = 1;
slider.value = 0;

function updateCase(index) {
  const selected = cases[index];

  caseLabel.textContent = selected.label;
  heatCapacityValue.textContent = selected.heatCapacity;
  caseNotes.textContent = selected.notes;

  temperatureImage.src = selected.temperatureImage;
  temperatureImage.alt = `Temperature distribution for ${selected.label}`;

  matlabPlotImage.src = selected.matlabPlotImage;
  matlabPlotImage.alt = `MATLAB sensitivity plot for ${selected.label}`;
}

// Optional: preload images so slider movement feels instant.
function preloadImages() {
  cases.forEach(caseItem => {
    const tempImg = new Image();
    tempImg.src = caseItem.temperatureImage;

    const plotImg = new Image();
    plotImg.src = caseItem.matlabPlotImage;
  });
}

slider.addEventListener("input", event => {
  updateCase(Number(event.target.value));
});

preloadImages();
updateCase(0);
