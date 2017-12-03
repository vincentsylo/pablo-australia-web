/* eslint-disable max-len */
import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from '../../components';
import styles from './News.css';

export default () => (
  <div className={styles.root}>
    <Helmet title="News" />
    <Breadcrumb title="News" description="Stay up to date with PABLO Australia" />

    <h2>PABLO Australia News</h2>
    <div className={styles.fbContainer}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPabloCheesetartAustralia%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=156641161614292"
        width="500"
        height="800"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        title="PABLO Cheesetart Australia"
      />
    </div>
  </div>
);
