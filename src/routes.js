import React from 'react';
import { Login, Main } from './client/pages';
import WithAuthentication from 'components/with-authentication/WithAuthentication';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    name: 'main',
    path: '/',
    component: WithAuthentication(Main),
    exact: true,
  },
];

export default routes;
