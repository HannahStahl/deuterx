import React from 'react';

const News = ({ items }) => (
  <div className="news">
    <h1>News and Events</h1>
    <div className="news-cards">
      {items.sort((a, b) => b.datePublished - a.datePublished).map((item) => (
        <div className="news-card">
          <h3>{item.itemName}</h3>
          <p>{item.itemSubtitle}</p>
        </div>
      ))}
    </div>
  </div>
);

export default News;
