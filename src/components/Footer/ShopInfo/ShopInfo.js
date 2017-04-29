import React from 'react';
import styles from './ShopInfo.css';

export default () => (
  <div className={styles.root}>
    <div className={styles.shop}>
      <span className={styles.state}>New South Wales</span>
      <span className={styles.city}>605 George St</span>
      <span className={styles.city}>Sydney, NSW</span>
    </div>
    <div className={styles.copyright}>
      <span>&copy; {new Date().getFullYear()} Pablo Australia</span>
    </div>
  </div>
);
