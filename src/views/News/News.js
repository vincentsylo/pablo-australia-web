import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, fetch } from '../../components';
import { api } from '../../utils';
import styles from './News.css';

const fetchFn = async ({ page = 0 }) => ({
  news: await api.get(`/news?offset=${page}`),
});

const News = ({ news }) => (
  <div className={styles.root}>
    <Helmet title="News" />
    <Breadcrumb title="News" />

    <h2>Pablo Australia News</h2>
    {
      _.map(news.records, newsItem => (
        <Container key={newsItem.id} className={styles.newsItem}>
          <Link to={`/news/${newsItem.urlSlug}`} className={styles.imgContainer}>
            <img src={newsItem.imgUrl} alt={newsItem.title} />
          </Link>

          <Link to={`/news/${newsItem.urlSlug}`} className={styles.content}>
            <div>
              <span className={styles.date}>{moment(newsItem.createdAt).format('DD/MM/YYYY')}</span>
              <span className={styles.title}>{newsItem.title}</span>
              <span className={styles.description}>{newsItem.description}</span>
            </div>
          </Link>
        </Container>
      ))
    }
  </div>
);

News.propTypes = {
  news: PropTypes.shape({
    records: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        imgUrl: PropTypes.string,
        createdAt: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    totalCount: PropTypes.number,
  }).isRequired,
};

export default fetch(fetchFn)(News);
