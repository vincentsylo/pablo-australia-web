import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from '../../components';
import styles from './Menu.css';

export default () => (
  <div className={styles.root}>
    <Breadcrumb title="Menu" />
    <Helmet title="Menu" />
  </div>
);
