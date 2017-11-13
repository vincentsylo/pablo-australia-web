import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import smoothScroll from 'smoothscroll';
import { Breadcrumb, Container, fetch } from '../../components';
import { api } from '../../utils';
import styles from './Menu.css';

const fetchFn = async () => ({
  categories: await api.get('/category'),
});

class Menu extends PureComponent {
  componentDidMount() {
    const { slug } = this.props.match.params;

    if (slug) {
      smoothScroll(document.querySelector(`#${slug}`));
    }
  }

  render() {
    const { categories } = this.props;

    const links = _.map(categories, category => ({
      ...category,
      urlSlug: `#${category.urlSlug}`,
    }));

    return (
      <div className={styles.root}>
        <Breadcrumb title="Menu" links={links} />
        <Helmet title="Menu" />

        {
          _.map(categories, category => (
            <Container key={category.id} id={category.urlSlug}>
              <h2>{category.name}</h2>

              <div className={styles.products}>
                {
                  _.map(category.Products, product => (
                    <Link to={`/product/${product.urlSlug}`} key={product.id} className={styles.product}>
                      <div
                        className={styles.imgContainer}
                        style={{
                          background: `url(${product.thumbnailUrl}) center center / cover no-repeat`,
                        }}
                      >
                        {product.comingSoon ? <span className={styles.comingSoon}>Coming soon</span> : null}
                      </div>
                      <h3>{product.name}</h3>
                      <span className={styles.shortDescription}>{product.shortDescription}</span>
                      <div className={styles.btn}><i className="fa fa-book" /> Details</div>
                    </Link>
                  ))
                }
              </div>
            </Container>
          ))
        }
      </div>
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      urlSlug: PropTypes.string,
    }),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default fetch(fetchFn)(Menu);
