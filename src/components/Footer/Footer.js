import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smoothScroll from 'smoothscroll';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import styles from './Footer.css';
import ShopInfo from './ShopInfo/ShopInfo';

export default class Footer extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
  };

  static defaultProps = {
    categories: [],
  };

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
    const { categories } = this.props;
    const { scrollTop } = this.state;

    return (
      <footer className={styles.root}>
        <div className={styles.footerTop} />
        <div className={styles.footerContent}>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className={styles.list}>
            <li>
              <Link to="/menu">Product List</Link>
              <ul className={styles.subList}>
                {
                  _.map(categories, category => (
                    <li key={category.id}><Link to={`/menu/${category.urlSlug}`}>{category.name}</Link></li>
                  ))
                }
              </ul>
            </li>
          </ul>
          <ul className={styles.list} />
        </div>
        <div className={styles.footerBottom} />
        <ShopInfo />

        <div className={cx(styles.backToTop, scrollTop > 0 ? styles.show : styles.hide)} onClick={() => smoothScroll(0)}>
          <span className={cx(styles.icon, 'fa fa-chevron-up')} />
        </div>
      </footer>
    );
  }
}
