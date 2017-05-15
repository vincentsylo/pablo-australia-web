import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Container.css';

const Container = ({ children, className, small, ...rest }) => (
  <div className={cx(styles.root, { [styles.small]: small }, className)} {...rest}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
  small: PropTypes.bool,
};

Container.defaultProps = {
  className: null,
  small: false,
};

export default Container;
