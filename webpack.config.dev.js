var path = require('path');
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var autoprefixer = require('autoprefixer');

var root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist')
};

module.exports = {
  devServer: {
    historyApiFallback: true,
    noInfo: false,
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
        loader: combineLoaders([
          { loader: 'react-hot' },
          {
            loader: 'babel',
            query: {
              cacheDirectory: true
            }
          }
        ]),
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: root.src
      },
      {
        test: /^((?!\.module).)*\.scss$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss', 'sass'],
        include: root.src
      },
      {
        test: /\.module\.scss$/,
        loader: combineLoaders([
          { loader: 'style' },
          {
            loader: 'css',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          { loader: 'postcss' },
          { loader: 'sass' }
        ]),
        include: root.src
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.eot(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]?[hash]'
        }
      },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions', 'IE > 8']
      })
    ];
  }
};
