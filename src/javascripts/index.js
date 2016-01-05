import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';
import App from './containers/App';
import Top from './containers/Top';
import rootReducer from './reducers'

const store = createStore(rootReducer);
const routes = (
  <Route component={ App }>
    <Route path="/" component={ Top } />
  </Route>
);
render(
  <Provider store={ store }>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
