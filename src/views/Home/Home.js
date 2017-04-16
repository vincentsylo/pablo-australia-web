import React from 'react';
import PropTypes from 'prop-types';
import { fetch, News } from '../../components';
import { api } from '../../utils';
import styles from './Home.css';
import FeatureTile from './FeatureTile/FeatureTile';

const fetchFn = async () => ({
  featuredProducts: await api.get('/product/featured'),
});

const Home = ({ featuredProducts }) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile large to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[1] ? <FeatureTile large to={`/menu/${featuredProducts[1].id}`} {...featuredProducts[1]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[2] ? <FeatureTile large to={`/menu/${featuredProducts[2].id}`} {...featuredProducts[2]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].id}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>

    <News />
  </div>
);

Home.propTypes = {
  featuredProducts: PropTypes.array.isRequired,
};

export default fetch(fetchFn)(Home);
