import React from 'react';
import PropTypes from 'prop-types';
import { fetch } from '../../components';
import { api } from '../../utils';
import styles from './Home.css';

const fetchFn = async () => ({
  products: await api.get('/product'),
});

const Home = ({ products }) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.column}>

      </div>
      <div className={styles.column}>

      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>

      </div>
      <div className={styles.column}>

      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>

      </div>
      <div className={styles.column}>

      </div>
    </div>
  </div>
);

Home.propTypes = {
  products: PropTypes.shape({}).isRequired,
};

export default fetch(fetchFn)(Home);
