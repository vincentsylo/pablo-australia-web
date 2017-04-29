import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Container.css';

const Container = ({ children, className, ...rest }) => (
  <div className={cx(styles.root, className)} {...rest}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

export default Container;
