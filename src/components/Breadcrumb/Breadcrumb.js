import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import smoothScroll from 'smoothscroll';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Breadcrumb.css';
import bubble from './bg_header.png';

export default class Breadcrumb extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape()),
    linkKey: PropTypes.string,
    urlKey: PropTypes.string,
    description: PropTypes.string,
    isTrail: PropTypes.bool,
  };

  static defaultProps = {
    links: [],
    linkKey: 'name',
    urlKey: 'urlSlug',
    description: null,
    isTrail: false,
  };

  scrollTo = (slug) => {
    smoothScroll(document.querySelector(slug));
  };

  render() {
    const { title, links, linkKey, urlKey, description, isTrail } = this.props;

    return (
      <div className={styles.breadcrumb}>
        <div className={styles.bubble}>
          <img src={bubble} alt={title} />
        </div>
        <h1 className={styles.title}>{title}</h1>
        { description && <span>{description}</span>}
        <div className={styles.links}>
          {
            _.map(links, (link) => {
              const inPage = _.indexOf(link[urlKey], '#') === 0;
              const onClick = inPage ? () => this.scrollTo(link[urlKey]) : null;

              return (
                <div key={link[urlKey]} className={cx(styles.link, { [styles.trail]: isTrail })}>
                  <Link onClick={onClick} to={link[urlKey]}>{link[linkKey]}</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
