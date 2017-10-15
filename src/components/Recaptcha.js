import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';

const ID = '_grecaptcha.element.id';
const CALLBACK_NAME = '_grecaptcha.data-callback';
const EXPIRED_CALLBACK_NAME = '_grecaptcha.data-expired-callback';

const removeChild = elem => elem.parentNode && elem.parentNode.removeChild(elem);

export default class Recaptcha extends Component {
  static propTypes = {
    // Required
    sitekey: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,

    // Options
    className: PropTypes.string,
    invisible: PropTypes.bool,
    locale: PropTypes.string,
  };

  static defaultProps = {
    locale: 'en',
    className: undefined,
    invisible: false,
  };

  componentDidMount() {
    const { locale, callback } = this.props;

    // 1. Async lazy load
    const head = document.head || document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.id = ID;
    script.src = `https://www.google.com/recaptcha/api.js?hl=${locale}`;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onerror = (oError) => {
      throw new URIError(`The script ${oError.target.src} is not accessible.`);
    };
    head.appendChild(script);

    // 2. Expose callback function to window object
    window[CALLBACK_NAME] = callback;
  }

  componentWillUnmount() {
    removeChild(document.getElementById(ID));
  }

  render() {
    const { className, sitekey, invisible, ...otherProps } = this.props;
    const props = {
      ..._.omit(otherProps, ['callback', 'locale']),
      className: cx('g-recaptcha', className),
      'data-sitekey': sitekey,
      'data-callback': CALLBACK_NAME,
      'data-expired-callback': EXPIRED_CALLBACK_NAME,
      ...(invisible && { 'data-size': 'invisible' }),
    };

    return (
      <div {...props} />
    );
  }
}
