/* eslint no-var: 0 */
/* global __dirname */
var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var autoprefixer = require('autoprefixer');

var dirJS = path.resolve(__dirname, 'js');
var dirHTML = path.resolve(__dirname, 'html');
var dirBuild = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dirJS, 'main.js'),
  output: {
    path: dirBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: dirBuild,
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        test: dirJS,
      },
      {
        loader: 'babel-loader',
        test: dirJS,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: function postCSS() {
    return [autoprefixer];
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dirHTML },
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
  ],
  stats: {
    // Nice colored output
    colors: true,
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
