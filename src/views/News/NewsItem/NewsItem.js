import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb, Container, fetch } from '../../../components';
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

    const links = [{ urlSlug: '/news', name: 'News List' }, { urlSlug: `/news/${news.urlSlug}`, name: news.title }];

    return (
      <div className={styles.root}>
        <Helmet title={news.title} />
        <Breadcrumb title="News" links={links} isTrail />

        <Container>
          <h2>{news.title}</h2>
          <hr />
          <div className={styles.imgContainer}>
            <img src={news.imgUrl} alt={news.title} />
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: news.description }} />
        </Container>

        <div className={styles.footer}>
          <Link to="/news" className={styles.btn}><i className="fa fa-book" /> News List</Link>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  news: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default fetch(fetchFn)(withRouter(Product));
