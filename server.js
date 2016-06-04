const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  hot: true,
  noInfo: false,
  publicPath: config.output.publicPath,
}).listen(3000, 'localhost', (err) => { // eslint-disable-line
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
