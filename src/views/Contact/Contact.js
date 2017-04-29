import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from '../../components';
import styles from './Contact.css';

export default () => (
  <div className={styles.root}>
    <Helmet title="Contact" />
    <Breadcrumb title="Contact" />
  </div>
);
