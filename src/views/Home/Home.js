import React from 'react';
import PropTypes from 'prop-types';
import { fetch } from '../../components';
import { api } from '../../utils';
import styles from './Home.css';
import FeaturedTile from './FeaturedTile/FeaturedTile';
import FeaturedNews from './FeaturedNews/FeaturedNews';
import AnimatedTile from './FeaturedTile/AnimatedTile';
import SocialTile from './FeaturedTile/SocialTile';

const fetchFn = async () => ({
  featuredProducts: await api.get('/product/featured'),
  featuredNews: await api.get('/news/featured'),
});

const Home = ({ featuredProducts, featuredNews }) => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.column}>
        <FeaturedTile large to={`/product/${featuredProducts[0].urlSlug}`} {...featuredProducts[0]} />
        <AnimatedTile type="tarts" />
        <FeaturedTile to={`/product/${featuredProducts[1].urlSlug}`} {...featuredProducts[1]} />
        <FeaturedTile to={`/product/${featuredProducts[2].urlSlug}`} {...featuredProducts[2]} />
        <SocialTile type="facebook1" />
      </div>
      <div className={styles.column}>
        <SocialTile type="facebook2" />
        <AnimatedTile type="tarts" delay={3400} />
        <FeaturedTile news large to={`/news/${featuredNews[0].urlSlug}`} {...featuredNews[0]} />
        <AnimatedTile type="tarts" />
        <SocialTile type="instagram" />
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
