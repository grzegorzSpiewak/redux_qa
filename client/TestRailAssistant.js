import React from 'react';

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

import css from './styles/main.css';

import App from './containers/App'
/*
 * pages
 */
import Heartbeat from './containers/Heartbeat'
import Home from './containers/Home'

import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
      <Route path="/heartbeat" component={App}>
        <IndexRoute component={Heartbeat}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
