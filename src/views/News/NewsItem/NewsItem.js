import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Breadcrumb, fetch } from '../../../components';
import { api } from '../../../utils';
import styles from './NewsItem.css';

const fetchFn = async ({ slug }) => ({
  news: await api.get(`/news/${slug}`),
});

class Product extends PureComponent {
  componentWillMount() {
    const { news, history } = this.props;

    if (!news) {
      history.replace('/not-found');
    }
  }

  render() {
    const { news } = this.props;
    if (!news) return null;

    return (
      <div className={styles.root}>
        <Helmet title={news.title} />
        <Breadcrumb title="News" />
      </div>
    );
  }
}

Product.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default fetch(fetchFn)(withRouter(Product));
