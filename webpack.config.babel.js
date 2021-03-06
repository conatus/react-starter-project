import path from 'path';

import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import autoprefixer from 'autoprefixer';

const dirJS = path.resolve(__dirname, 'src/js');
const dirHTML = path.resolve(__dirname, 'src/html');
const dirBuild = path.resolve(__dirname, 'build');

export default {
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
        exclude: /node_modules/,
      },
      {
        loader: 'babel-loader',
        test: dirJS,
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: () => [autoprefixer],
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
