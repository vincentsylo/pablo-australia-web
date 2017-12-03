import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './FeaturedTile.css';

const FeaturedTile = ({ to, imgUrl, large, name, description }) => (
  <Link
    to={to}
    className={
      cx(styles.featureTile, {
        [styles.large]: large,
        [styles.small]: !large,
      })}
  >
    <div
      className={styles.tileImage}
      style={{
        background: `url(${imgUrl}) center center / cover no-repeat`,
      }}
    >
      <div className={styles.shadow}>
        <div className={styles.description}>
          <div className={styles.title}>{`Menu - ${name}`}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  </Link>
);

FeaturedTile.propTypes = {
  to: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  large: PropTypes.bool,
  name: PropTypes.string,
};

FeaturedTile.defaultProps = {
  large: false,
  string: null,
  name: null,
};

export default FeaturedTile;
