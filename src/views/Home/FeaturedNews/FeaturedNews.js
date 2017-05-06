import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import styles from './FeaturedNews.css';

const FeaturedNews = ({ news }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h2>News</h2>
      {
        _.map(news, newsItem => (
          <div key={newsItem.id}>
            <span className={styles.date}>{moment(newsItem.createdAt).format('DD/MM/YYYY')}</span>
            <a href={`/news/${newsItem.urlSlug}`} className={styles.title}>{newsItem.title}</a>
          </div>
        ))
      }
    </div>
  </div>
);

FeaturedNews.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      createdAt: PropTypes.string,
      urlSlug: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default FeaturedNews;
