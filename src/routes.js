import React from 'react';
import Home from './views/Home/Home';
import Shop from './views/Shop/Shop';
import Menu from './views/Menu/Menu';
import Contact from './views/Contact/Contact';
import NoMatch from './views/NoMatch/NoMatch';

export default [
  {
    key: 'home',
    exact: true,
    path: '/',
    fetch: () => ({}),
    render: data => <Home {...data} />,
  },
  {
    key: 'shop',
    path: '/shop',
    fetch: () => ({}),
    render: data => <Shop {...data} />,
  },
  {
    key: 'menu',
    path: '/menu',
    component: Menu,
  },
  {
    key: 'contact',
    path: '/contact',
    component: Contact,
  },
  {
    key: 'nomatch',
    component: NoMatch,
  },
];
