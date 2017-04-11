import React, { Component } from 'react';
import cx from 'classnames';
import smoothScroll from 'smoothscroll';
import styles from './Footer.css';
import Shop from '../Shop/Shop';

export default class Footer extends Component {
  constructor() {
    super();

    this.captureScroll = ::this.captureScroll;
  }

  state = {
    scrollTop: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.captureScroll);
    this.captureScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.captureScroll);
  }

  captureScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ scrollTop });
  }

  render() {
    const { scrollTop } = this.state;

    return (
      <footer className={styles.root}>
        <div className={styles.footerTop} />
        <div className={styles.footerContent}>
          Footer
        </div>
        <div className={styles.footerBottom} />
        <Shop />

        <div className={cx(styles.backToTop, scrollTop > 0 ? styles.show : styles.hide)} onClick={() => smoothScroll(0)}>
          <span className={cx(styles.icon, 'fa fa-chevron-up')} />
        </div>
      </footer>
    );
  }
}
