# MOOSE Sensitivity Analysis Viewer

Barebones GitHub Pages site for displaying precomputed MOOSE sensitivity-analysis results.

This version is optimized for low latency by swapping precomputed images instead of generating plots in the browser.

## Recommended Repository Structure

```text
your-repo/
├── index.html
├── style.css
├── script.js
├── README.md
├── data/
│   └── case_summary.csv
├── figures/
│   ├── temperature/
│   │   ├── temp_cp_low.png
│   │   ├── temp_cp_nominal.png
│   │   └── temp_cp_high.png
│   └── matlab_plots/
│       ├── plot_cp_low.png
│       ├── plot_cp_nominal.png
│       └── plot_cp_high.png
└── matlab/
    └── export_figures_placeholder.m
```

## Workflow

1. Run MOOSE cases.
2. Process results in MATLAB.
3. Export MATLAB plots as PNG or WebP.
4. Export 2D temperature renderings.
5. Put images in `figures/temperature/` and `figures/matlab_plots/`.
6. Update the `cases` array in `script.js`.

## GitHub Pages Settings

Use:

```text
Settings → Pages → Deploy from branch
Branch: main
Folder: /root
```

## Notes

Do not upload proprietary, export-controlled, or sensitive internal data to a public repository.
