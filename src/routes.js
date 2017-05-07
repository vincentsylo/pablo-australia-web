import Home from './views/Home/Home';
import Shops from './views/Shops/Shops';
import Menu from './views/Menu/Menu';
import Product from './views/Menu/Product/Product';
import Contact from './views/Contact/Contact';
import Story from './views/Story/Story';
import NoMatch from './views/NoMatch/NoMatch';
import News from './views/News/News';
import NewsItem from './views/News/NewsItem/NewsItem';

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
    path: '/product/:slug',
    component: Product,
  },
  {
    path: '/menu/:slug?',
    component: Menu,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/story',
    component: Story,
  },
  {
    path: '/news/:slug',
    component: NewsItem,
  },
  {
    path: '/news',
    component: News,
  },
  {
    component: NoMatch,
  },
];
