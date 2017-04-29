import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.css';
import bubble from './bg_header.png';

const Breadcrumb = ({ title }) => (
  <div className={styles.breadcrumb}>
    <div className={styles.bubble}>
      <img src={bubble} role="presentation" />
    </div>
    <h1 className={styles.title}>{title}</h1>
  </div>
);

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Breadcrumb;
