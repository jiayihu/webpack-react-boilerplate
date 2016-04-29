var path = require('path');
var webpack = require('webpack');

var root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist')
};

module.exports = {
  devServer: {
    noInfo: false,
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'eval',
  entry: root.src,
  output: {
    path: root.dest,
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: root.src
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: root.src
      }
    ]
  },
  sassLoader: {
  }
};
