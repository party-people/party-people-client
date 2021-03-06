import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';
import App     from './containers/App';
import Top     from './containers/Top';
import SignUp  from './containers/SignUp';
import SignIn  from './containers/SignIn';
import Article from './containers/Article';
import Editor  from './containers/Editor';

const store = configureStore();
const history = createBrowserHistory();
const routes = (
  <Route component={ App }>
    <Route path="/" component={ Top } />
    <Route path="/sign_up" component={ SignUp } />
    <Route path="/sign_in" component={ SignIn } />
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
