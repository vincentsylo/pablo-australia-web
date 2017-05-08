import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import _ from 'lodash';
import Helmet from 'react-helmet';
import cx from 'classnames';
import { fetch, Footer } from '../components';
import { api } from '../utils';
import styles from './App.css';
import routes from '../routes';
import logo from './images/logo.jpg';
import headerLogo from './images/header-logo.png';

@fetch(async () => ({
  categories: await api.get('/category'),
}))
export default class App extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    categories: [],
  };

  state = {
    openMenu: false,
  };

  openMenu = () => {
    this.setState({ openMenu: true });
  };

  closeMenu = () => {
    this.setState({ openMenu: false });
  };

  render() {
    const { openMenu } = this.state;
    const { categories } = this.props;

    return (
      <div className={styles.root}>
        <Helmet titleTemplate="%s | Pablo Australia" defaultTitle="Pablo Australia" />
        <header className={styles.header}>
          <Link to="/" className={styles.headerLogo} onClick={this.closeMenu}>
            <img src={headerLogo} alt="Pablo Australia" />
          </Link>

          <i className={cx(styles.menu, 'fa fa-bars fa-2x')} onClick={this.openMenu} />
        </header>

        <nav className={cx(styles.nav, { [styles.open]: openMenu })}>
          <div className={styles.close} onClick={this.closeMenu}>
            <i className={cx(styles.closeBtn, 'fa fa-close fa-2x')} />
          </div>

          <div className={styles.mainNav}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="Pablo Australia" />
            </Link>

            <Link to="/shop" className={styles.navLink} onClick={this.closeMenu}>Shop</Link>
            <Link to="/menu" className={styles.navLink} onClick={this.closeMenu}>Menu</Link>
            <Link to="/news" className={styles.navLink} onClick={this.closeMenu}>News</Link>
            <Link to="/story" className={styles.navLink} onClick={this.closeMenu}>Story</Link>
            <Link to="/contact" className={styles.navLink} onClick={this.closeMenu}>Contact</Link>
          </div>
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
  }
}
