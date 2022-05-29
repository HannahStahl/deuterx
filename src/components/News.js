import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';
import NewsItem from './NewsItem';

const News = ({ articles, publications }) => (
  <div className="news">
    <img
      src={`${config.publicCloudfrontURL}/deuterx-waves.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <Fade><div className="image-overlay" /></Fade>
    <Fade>
      <div className="news-section-1">
        <div className="news-section-1-content">
          <h1>News and Events</h1>
          <h3>Making Waves with Heavy Water</h3>
        </div>
      </div>
    </Fade>
    <div className="news-section-2">
      <h1>Publications & Posters</h1>
      <div className="news-cards">
        {publications.map((publication) => (
          <NewsItem key={publication._id} {...publication} />
        ))}
      </div>
    </div>
    <div className="news-section-3">
      <h1>News & In the Media</h1>
      <div className="news-cards">
        {articles.map((article) => (
          <NewsItem key={article._id} {...article} />
        ))}
      </div>
    </div>
  </div>
);

export default News;
