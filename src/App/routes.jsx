import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import NotFound from './NotFound';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
