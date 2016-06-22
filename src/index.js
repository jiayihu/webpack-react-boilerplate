import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotEnabler } from 'react-hot-loader';
import Root from './App/Root';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <HotEnabler>
    <Root />
  </HotEnabler>,
  document.getElementById('app')
);

/**
 * React Hot Reloading
 */
if (module && module.hot) {
  module.hot.accept('./App/Root.jsx', () => {
    const NextRoot = require('./App/Root').default; // eslint-disable-line global-require
    ReactDOM.render(
      <HotEnabler>
        <NextRoot />
      </HotEnabler>,
      document.getElementById('app')
    );
  });
}
