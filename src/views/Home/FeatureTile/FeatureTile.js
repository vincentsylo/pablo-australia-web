import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './FeatureTile.css';

const FeatureTile = ({ to, imgUrl, large }) => (
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

FeatureTile.propTypes = {
  to: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

FeatureTile.defaultProps = {
  large: false,
};

export default FeatureTile;
