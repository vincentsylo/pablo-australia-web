import React from 'react';
import cx from 'classnames';
import styles from './ShopInfo.css';

export default () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.shop}>
        <span className={styles.state}>PABLO Sydney - Goulburn Street</span>
        <span className={styles.city}>605 George St</span>
        <span className={styles.city}>Sydney, NSW</span>
      </div>
      <div className={cx(styles.flex, styles.noMobile)}>
        <span>&copy; {new Date().getFullYear()} PABLO Australia, All Rights Reserved.</span>
      </div>
    </div>
    <div className={cx(styles.footer, styles.mobile)}>
      <span>&copy; {new Date().getFullYear()} PABLO Australia, All Rights Reserved.</span>
    </div>
  </div>
);
