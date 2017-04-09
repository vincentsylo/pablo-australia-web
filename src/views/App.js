import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import _ from 'lodash';
import styles from './App.css';
import routes from '../routes';
import logo from './images/logo.jpg';

export default data => (
  <div className={styles.root}>
    <nav className={styles.nav}>
      <h1 className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Pablo Australia" />
        </Link>
      </h1>

      <Link to="/shop" className={styles.navLink}>Shop</Link>
      <Link to="/menu" className={styles.navLink}>Menu</Link>
      <Link to="/social" className={styles.navLink}>Social</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
    </nav>

    <div className={styles.mainContent}>
      <Switch>
        {
          _.map(routes, (route) => {
            const { render, ...rest } = route;

            return <Route key={route.key} render={render ? render.bind(this, data) : null} {...rest} />;
          })
        }
      </Switch>
    </div>
  </div>
);
