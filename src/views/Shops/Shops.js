import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb, Container } from '../../components';
import styles from './Shops.css';

export default () => {
  const embedMap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.471477912147!2d151.20799880307655
    !3d-33.87750932137191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3cb0d09cd3%3A0xd23ac7561694422f
    !2s605+George+St%2C+Sydney+NSW+2000!5e0!3m2!1sen!2sau!4v1493446098120`;
  const branchName = 'PABLO Sydney - Goulburn Street';
  const address = '605 George St (store located on Goulburn St), Sydney NSW';
  const telephone = '(02) 9267 2945';
  const hours = '11:00 AM - 10:00 PM';

  return (
    <div className={styles.root}>
      <Helmet title="Shop" />
      <Breadcrumb title="Shop" description="Where you can find us" />

      <div className={styles.hero} />

      <Container className={styles.container}>
        <div className={styles.padding}>
          <h2>{branchName}</h2>
          <span>{address}</span>
        </div>
        <iframe
          src={embedMap}
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
          title="PABLO Australia"
        />
        <div className={styles.padding}>
          <h2>{branchName}</h2>
          <span>{address}</span>

          <div className={styles.details}>
            <span className={styles.row}><span className={styles.label}>Telephone: </span><span>{telephone}</span></span>
            <span className={styles.row}><span className={styles.label}>Business Hours: </span><span>{hours}</span></span>
          </div>
        </div>
      </Container>

    </div>
  );
};
