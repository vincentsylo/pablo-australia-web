import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from '../../components';
import styles from './Social.css';

export default () => (
  <div className={styles.root}>
    <Helmet title="Social" />
    <Breadcrumb title="Social" />
  </div>
);
