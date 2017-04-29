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

    return (
      <div className={styles.root}>
        <Helmet title={product.name} />
        <Breadcrumb title="Menu" />
        <img src={product.imgUrl} className={styles.hero} alt={product.name} />
        <div className={styles.descriptionBox}>
          <h2 className={styles.name}>{product.name}</h2>
          <div className={styles.content}>{product.description}</div>

          <Link to={`/menu#${product.Category.urlSlug}`} className={styles.btn}>{product.Category.name}</Link>
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
