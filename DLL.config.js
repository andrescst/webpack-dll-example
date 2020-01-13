// library.webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
   mode: "development",
   context: process.cwd(),
   resolve: {
      extensions: ['.js', '.jsx', '.json', '.less', '.css'],
      modules: [__dirname, 'node_modules']
   },

   entry: {
      library: [
         'jquery',
         'd3',
         'highcharts',
         'bootstrap',
         'angular'
      ]
   },
   output: {
      filename: '[name].dll.js',
      path: path.resolve(__dirname, '../build/library'),
      library: '[name]'
   },
   plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "build/library", "manifest.json"),
			name: "[name]_[fullhash]"
		})
	]
};