import Home from './views/Home/Home';
import Shop from './views/Shop/Shop';
import Menu from './views/Menu/Menu';
import Contact from './views/Contact/Contact';
import Social from './views/Social/Social';
import NoMatch from './views/NoMatch/NoMatch';

export default [
  {
    key: 'home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    key: 'shop',
    path: '/shop',
    component: Shop,
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
    key: 'social',
    path: '/social',
    component: Social,
  },
  {
    key: 'nomatch',
    component: NoMatch,
  },
];
