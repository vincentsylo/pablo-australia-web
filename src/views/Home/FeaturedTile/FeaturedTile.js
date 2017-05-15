import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import moment from 'moment';
import styles from './FeaturedTile.css';

const FeaturedTile = ({ to, imgUrl, large, name, description, updatedAt, news }) => (
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
          <div className={styles.title}>{news ? `News / ${moment(updatedAt).format('DD/MM/YYYY')}` : `Menu - ${name}`}</div>
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
  news: PropTypes.bool,
  updatedAt: PropTypes.string.isRequired,
  name: PropTypes.string,
};

FeaturedTile.defaultProps = {
  large: false,
  news: false,
  string: null,
  name: null,
};

export default FeaturedTile;
