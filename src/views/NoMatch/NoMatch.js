import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb, Container } from '../../components';
import styles from './NoMatch.css';
import logo from '../images/pablo-logo-1.png';

export default () => (
  <div className={styles.root}>
    <Helmet title="Page not found" />
    <Breadcrumb title="Page not found" />

    <Container>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt="PABLO Australia" />
      </div>
      <p>The page you have requested was not found.</p>
    </Container>
  </div>
);
