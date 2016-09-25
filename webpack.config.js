const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');

const root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
};

/**
 * Whether the stage is in development or production
 * @type {Boolean}
 */
const IS_DEV = process.env.NODE_ENV !== 'production';

const devPlugins = [
  new webpack.NoErrorsPlugin(),
];
const prodPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

const devEntry = [
  'react-hot-loader/patch',
  root.src,
];

module.exports = {
  devServer: IS_DEV ? {
    historyApiFallback: true,
    noInfo: false,
    port: 3000,
  } : {},
  devtool: IS_DEV ? 'eval' : 'source-map',
  entry: IS_DEV ? devEntry : root.src,
  output: {
    path: root.dest,
    pathinfo: true,
    publicPath: '',
    filename: '/js/main.js',
  },
  resolve: {
    alias: {
      App: path.join(root.src, 'App'),
      hocs: path.join(root.src, 'hocs'),
      myRedux: path.join(root.src, 'redux'),
      routes: path.join(root.src, 'routes'),
      shared: path.join(root.src, 'shared'),
      services: path.join(root.src, 'services'),
      uikit: path.join(root.src, 'uikit'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: IS_DEV,
        },
        include: root.src,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: root.src,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: root.src,
      },
      {
        test: /.scss$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss', 'sass'],
        include: root.src,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        query: {
          name: IS_DEV ? '[path]__[name].[ext]?[hash:5]' : '/images/[name]_[hash:5].[ext]?[hash:5]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?v=(\d+\.)+)?$/,
        loader: 'file-loader',
        query: {
          name: IS_DEV ? '[path]__[name].[ext]?[hash:5]' : '/fonts/[name].[ext]?[hash:5]',
        },
      },
    ],
  },
  plugins: IS_DEV ? devPlugins : prodPlugins,
  postcss() {
    return [
      autoprefixer({
        browsers: ['last 2 versions', 'IE > 8'],
      }),
    ];
  },
};
