import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './FeaturedTile.css';

const FeaturedTile = ({ to, imgUrl, large }) => (
  <Link to={to}>
    <div
      className={
        cx(styles.featureTile, {
          [styles.large]: large,
          [styles.small]: !large,
        })}
      style={{
        background: `url(${imgUrl}) center center / cover no-repeat`,
      }}
    />
  </Link>
);

FeaturedTile.propTypes = {
  to: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

FeaturedTile.defaultProps = {
  large: false,
};

export default FeaturedTile;
