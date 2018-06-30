import React from 'react';
import { Switch, Route } from 'react-router';

import 'src/assets/styles/base.scss';

import routes from './routes';

const App = () => (
  <Switch>
    { routes.map(({ ...name, ...routeProps }) => <Route key={name} {...routeProps} />) }
  </Switch>
);

export default App;
