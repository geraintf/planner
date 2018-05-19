import Pages from './client/pages';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Pages.Login,
    exact: true,
  },
  {
    name: 'main',
    path: '/',
    component: Pages.Main,
    exact: true,
  },
];

export default routes;
