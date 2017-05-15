import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb, fetch } from '../../../components';
import { api } from '../../../utils';
import styles from './Product.css';

const fetchFn = async ({ slug }) => ({
  product: await api.get(`/product/${slug}`),
});

class Product extends PureComponent {
  componentWillMount() {
    const { product, history } = this.props;

    if (!product) {
      history.replace('/not-found');
    }
  }

  render() {
    const { product } = this.props;
    if (!product) return null;

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

        <img src={product.imgUrl} className={styles.hero} alt={product.name} />
        <div className={styles.descriptionBox}>
          <h2>{product.name}</h2>
          <div className={styles.content}>{newlineContent}</div>

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
