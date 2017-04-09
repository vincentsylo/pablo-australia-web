import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import _ from 'lodash';
import styles from './App.css';
import routes from '../routes';

export default (data) => (
  <div className={styles.root}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <Switch>
      {
        _.map(routes, (route) => {
          const { render, ...rest } = route;

          return <Route key={route.key} render={render ? render.bind(this, data) : null} {...rest} />;
        })
      }
    </Switch>
  </div>
);
