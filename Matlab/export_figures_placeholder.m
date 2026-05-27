% export_figures_placeholder.m
%
% Placeholder MATLAB workflow for exporting figures used by the GitHub Pages site.
% Replace variable names and data loading with your actual MOOSE-tools output.

% Example:
% data = readtable('processed_results.csv');

% Export a MATLAB sensitivity plot:
% figure;
% errorbar(data.heat_capacity, data.max_temperature, data.error_bar, 'o-');
% xlabel('Heat Capacity [J/kg-K]');
% ylabel('Temperature Metric [K]');
% grid on;
% exportgraphics(gcf, '../figures/matlab_plots/plot_cp_nominal.png', 'Resolution', 200);

% Export or copy matching temperature field images into:
% ../figures/temperature/
