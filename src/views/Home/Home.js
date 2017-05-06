import React from 'react';
import PropTypes from 'prop-types';
import { fetch } from '../../components';
import { api } from '../../utils';
import styles from './Home.css';
import FeaturedTile from './FeaturedTile/FeaturedTile';
import FeaturedNews from './FeaturedNews/FeaturedNews';

const fetchFn = async () => ({
  featuredProducts: await api.get('/product/featured'),
  featuredNews: await api.get('/news/featured'),
});

const Home = ({ featuredProducts, featuredNews }) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeaturedTile large to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[1] ? <FeaturedTile large to={`/product/${featuredProducts[1].urlSlug}`} {...featuredProducts[1]} /> : null }
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        { featuredProducts[2] ? <FeaturedTile large to={`/product/${featuredProducts[2].urlSlug}`} {...featuredProducts[2]} /> : null }
      </div>
      <div className={styles.column}>
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
        { featuredProducts[0] ? <FeaturedTile to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} /> : null }
      </div>
    </div>

    <FeaturedNews news={featuredNews} />
  </div>
);

Home.propTypes = {
  featuredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      urlSlug: PropTypes.string,
    }),
  ).isRequired,
  featuredNews: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default fetch(fetchFn)(Home);
