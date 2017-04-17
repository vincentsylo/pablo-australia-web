import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { fetch } from '../../../components';
import { api } from '../../../utils';
import styles from './Product.css';

const fetchFn = async ({ slug }) => ({
  product: await api.get(`/product/${slug}`),
});

class Product extends PureComponent {

  componentDidMount() {
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
        <div className={styles.hero} style={{ background: `#000 url('${product.imgUrl}') center center / cover no-repeat` }}>
          <div className={styles.descriptionBox}>
            <h1>{product.name}</h1>
            <div className={styles.content}>{product.description}</div>
          </div>
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
