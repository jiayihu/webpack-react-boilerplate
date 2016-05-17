import path from 'path';
import webpack from 'webpack';
import combineLoaders from 'webpack-combine-loaders';
import autoprefixer from 'autoprefixer';

const root = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist'),
};

/**
 * Whether we are in development or production
 * @type {Boolean}
 */
const DEBUG = process.env.NODE_ENV !== 'production';

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

module.exports = {
  devServer: DEBUG ? {
    historyApiFallback: true,
    noInfo: false,
    port: 3000,
  } : {},
  devtool: DEBUG ? 'eval' : 'source-map',
  entry: root.src,
  output: {
    path: root.dest,
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'main.js',
  },
  resolve: {
    alias: {
      App: path.join(root.src, 'App'),
      shared: path.join(root.src, 'shared'),
      services: path.join(root.src, 'services'),
      uikit: path.join(root.src, 'uikit'),
      views: path.join(root.src, 'views'),
    },
    extensions: ['', '.js', '.jsx'],
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
              cacheDirectory: DEBUG,
            },
          },
        ]),
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: root.src,
      },
      {
        test: /^((?!\.module).)*\.scss$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss', 'sass'],
        include: root.src,
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
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss' },
          { loader: 'sass' },
        ]),
        include: root.src,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        query: {
          name: DEBUG ? '[path]__[name].[ext]?[hash:5]' : 'images/[name]_[hash:5].[ext]?[hash:5]',
        },
      },
      // When .svg is used as font (by Font-awesome) and not as image we emit it
      // into the 'fonts' folder
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)$/,
        loader: 'file-loader',
        query: {
          name: DEBUG ? '[path]__[name].[ext]?[hash:5]' : 'fonts/[name].[ext]?[hash:5]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        query: {
          name: DEBUG ? '[path]__[name].[ext]?[hash:5]' : 'fonts/[name].[ext]?[hash:5]',
        },
      },
    ],
  },
  plugins: DEBUG ? devPlugins : prodPlugins,
  postcss() {
    return [
      autoprefixer({
        browsers: ['last 2 versions', 'IE > 8'],
      }),
    ];
  },
};
