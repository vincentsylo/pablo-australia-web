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
      <h1 className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Pablo Australia" />
        </Link>
      </h1>

      <Link to="/shop" className={styles.navLink}>Shops</Link>
      <Link to="/menu" className={styles.navLink}>Menu</Link>
      <Link to="/about" className={styles.navLink}>About</Link>
      <Link to="/social" className={styles.navLink}>Social</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
    </nav>

    <div className={styles.mainContent}>
      <Switch>
        {
          _.map(routes, (route) => {
            const { path, ...rest } = route;

            return <Route key={path || 'nomatch'} path={path} {...rest} />;
          })
        }
      </Switch>
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
