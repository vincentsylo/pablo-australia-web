import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './FeaturedTile.css';
import fb from '../images/fb.jpg';
import fb2 from '../images/fb2.jpg';
import ig from '../images/ig.jpg';

const SocialTile = ({ type }) => {
  let to;
  let imgUrl;
  switch (type) {
    case 'facebook1': {
      to = 'https://www.facebook.com/3pablo';
      imgUrl = fb;
      break;
    }
    case 'facebook2': {
      to = 'https://www.facebook.com/3pablo';
      imgUrl = fb2;
      break;
    }
    case 'instagram': {
      to = 'https://www.instagram.com/pablo_cheese_tart';
      imgUrl = ig;
      break;
    }
    default: break;
  }

  return (
    <a href={to} className={styles.socialRoot}>
      <div
        className={cx(styles.overlay, {
          [styles.facebook]: type !== 'instagram',
          [styles.instagram]: type === 'instagram',
        })}
      />
      <div
        className={cx(styles.socialTile, styles.small)}
        style={{
          background: `url(${imgUrl}) center center / cover no-repeat`,
        }}
      />
    </a>
  );
};

SocialTile.propTypes = {
  type: PropTypes.oneOf(['facebook1', 'facebook2', 'instagram']).isRequired,
};

export default SocialTile;
