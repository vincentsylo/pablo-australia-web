import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { fetch, News } from '../../components';
import { api } from '../../utils';
import styles from './Home.css';
import FeatureTile from './FeatureTile/FeatureTile';

const fetchFn = async () => ({
  featuredProducts: await api.get('/product/featured'),
});

const Home = ({ featuredProducts }) => (
  <div className={styles.root}>
    <Helmet title="Home" />
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile large to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[1] ? <FeatureTile large to={`/menu/${featuredProducts[1].urlSlug}`} {...featuredProducts[1]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[2] ? <FeatureTile large to={`/menu/${featuredProducts[2].urlSlug}`} {...featuredProducts[2]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeatureTile to={`/menu/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>

    <News />
  </div>
);

Home.propTypes = {
  featuredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      urlSlug: PropTypes.string,
    }),
  ).isRequired,
};

export default fetch(fetchFn)(Home);
