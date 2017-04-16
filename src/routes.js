import Home from './views/Home/Home';
import Shops from './views/Shops/Shops';
import Menu from './views/Menu/Menu';
import Product from './views/Menu/Product/Product';
import Contact from './views/Contact/Contact';
import Social from './views/Social/Social';
import About from './views/About/About';
import NoMatch from './views/NoMatch/NoMatch';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/shop',
    component: Shops,
  },
  {
    path: '/menu/:id',
    component: Product,
  },
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/social',
    component: Social,
  },
  {
    path: '/about',
    component: About,
  },
  {
    component: NoMatch,
  },
];
