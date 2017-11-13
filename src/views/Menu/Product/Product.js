import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import cx from 'classnames';
import { Breadcrumb, fetch } from '../../../components';
import { api } from '../../../utils';
import styles from './Product.css';

const fetchFn = async ({ slug }) => ({
  product: await api.get(`/product/${slug}`),
});

class Product extends PureComponent {
  state = {
    expanded: false,
  };

  componentWillMount() {
    const { product, history } = this.props;

    if (!product) {
      history.replace('/not-found');
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return null;

    const { expanded } = this.state;

    const catCrumb = {
      ...product.Category,
      urlSlug: `/menu/${product.Category.urlSlug}`,
    };
    const prodCrumb = {
      ...product,
      urlSlug: `/product/${product.urlSlug}`,
    };
    const links = [catCrumb, prodCrumb];

    const content = product.description || product.shortDescription;
    const newlineContent = content && content.replace('. ', '.\n\n');

    return (
      <div className={styles.root}>
        <Helmet title={product.name} />
        <Breadcrumb title="Menu" links={links} isTrail />

        <div style={{ background: `url(${product.imgUrl}) center center / cover no-repeat` }} className={styles.hero} />
        <div className={styles.descriptionBox}>
          <div className={styles.header}>
            {
              expanded ? (
                <button className={styles.infoBtn} onClick={() => this.setState({ expanded: false })}><i className="fa fa-chevron-down" /> Less info</button>
              ) : (
                <button className={styles.infoBtn} onClick={() => this.setState({ expanded: true })}><i className="fa fa-chevron-up" /> More info</button>
              )
            }
          </div>
          <h2>{product.name}</h2>
          <div className={cx(styles.content, { [styles.expanded]: expanded, [styles.collapsed]: !expanded })}>{newlineContent}</div>

          <Link to={`/menu/${product.Category.urlSlug}`} className={styles.btn}><i className="fa fa-book" /> {product.Category.name}</Link>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
  }),
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

Product.defaultProps = {
  product: null,
};

export default fetch(fetchFn)(withRouter(Product));
