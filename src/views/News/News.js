import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from '../../components';
import styles from './News.css';

export default () => (
  <div className={styles.root}>
    <Helmet title="News" />
    <Breadcrumb title="News" />
  </div>
);
