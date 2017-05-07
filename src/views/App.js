import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { fetch, Footer } from '../components';
import { api } from '../utils';
import styles from './App.css';
import routes from '../routes';
import logo from './images/logo.jpg';

const fetchFn = async () => ({
  categories: await api.get('/category'),
});

const App = ({ categories }) => (
  <div className={styles.root}>
    <Helmet titleTemplate="%s | Pablo Australia" defaultTitle="Pablo Australia" />
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Pablo Australia" />
      </Link>

      <Link to="/shop" className={styles.navLink}>Shop</Link>
      <Link to="/menu" className={styles.navLink}>Menu</Link>
      <Link to="/news" className={styles.navLink}>News</Link>
      <Link to="/story" className={styles.navLink}>Story</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
    </nav>

    <div className={styles.mainContent}>
      <div className={styles.routes}>
        <Switch>
          {
            _.map(routes, (route) => {
              const { path, ...rest } = route;

              return <Route key={path || 'nomatch'} path={path} {...rest} />;
            })
          }
        </Switch>
      </div>
      <Footer categories={categories} />
    </div>
  </div>
);

App.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

App.defaultProps = {
  categories: [],
};

export default fetch(fetchFn)(App);
