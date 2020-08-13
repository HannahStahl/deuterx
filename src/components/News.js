import React from 'react';
import config from '../config';

const News = ({ items }) => (
  <div className="news">
    <img
      src={`${config.publicCloudfrontURL}/deuterx-vials.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <div className="image-overlay" />
    <div className="news-section-1">
      <div className="news-section-1-content">
        <h1>News and Events</h1>
        <h3>Insert subheader for news section here</h3>
      </div>
    </div>
    <div className="news-section-2">
      <div className="news-cards">
        {items.sort((a, b) => b.datePublished - a.datePublished).map((item) => (
          <div
            key={item.itemId}
            className="news-card"
            onClick={() => {
              window.location.href = item.itemPdfLink || `${config.cloudfrontURL}/${item.itemPdf}`;
            }}
          >
            <h3>{item.itemName}</h3>
            <p>{item.itemSubtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default News;
