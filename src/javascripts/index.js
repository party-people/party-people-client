import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './containers/App';
import Top from './containers/Top';
import Article from './containers/Article';
import Editor from './containers/Editor';
import rootReducer from './reducers'

const store = createStore(rootReducer);
const history = createBrowserHistory();
const routes = (
  <Route component={ App }>
    <Route path="/" component={ Top } />
    <Route path="/articles/new" component={ Editor } />
    <Route path="/articles/:id/edit" component={ Editor } />
    <Route path="/articles/:id" component={ Article } />
  </Route>
);

render(
  <Provider store={ store }>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
