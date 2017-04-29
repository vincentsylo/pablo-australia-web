import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb, Container } from '../../components';
import styles from './Contact.css';

export default () => (
  <div className={styles.root}>
    <Helmet title="Contact" />
    <Breadcrumb title="Contact" />

    <Container>
      <h2>Get in touch</h2>
      <p>If you have any comments or questions about the products and services on this site and PABLO please feel free to contact us.</p>
    </Container>
  </div>
);
