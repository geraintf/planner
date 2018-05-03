import React from 'react';
import { Switch, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/base.less';

import routes from './routes';

const App = () => (
  <Switch>
    { routes.map(({ ...name, ...routeProps }) => <Route key={name} {...routeProps} />) }
  </Switch>
);

export default App;
