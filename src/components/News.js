import React from 'react';
import config from '../config';

const News = ({ items }) => {
  const sortedItems = items.sort((a, b) => b.datePublished - a.datePublished);
  const publications = sortedItems.filter((item) => item.itemPdf);
  const articles = sortedItems.filter((item) => item.itemPdfLink);
  return (
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
        <h1>Publications & Posters</h1>
        <div className="news-cards">
          {publications.map((item) => (
            <div
              key={item.itemId}
              className="news-card"
              onClick={() => {
                window.location.href = `${config.cloudfrontURL}/${item.itemPdf}`;
              }}
            >
              <h3>{item.itemName}</h3>
              {item.itemSubtitle && item.itemSubtitle.length > 0 && (
                <p>{item.itemSubtitle}</p>
              )}
              {item.itemSourceDate && item.itemSourceDate.length > 0 && (
                <p><i>{item.itemSourceDate}</i></p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="news-section-3">
        <h1>News & In the Media</h1>
        <div className="news-cards">
          {articles.map((item) => (
            <div
              key={item.itemId}
              className="news-card"
              onClick={() => {
                window.location.href = item.itemPdfLink;
              }}
            >
              <h3>{item.itemName}</h3>
              {item.itemSubtitle && item.itemSubtitle.length > 0 && (
                <p>{item.itemSubtitle}</p>
              )}
              {item.itemSourceDate && item.itemSourceDate.length > 0 && (
                <p><i>{item.itemSourceDate}</i></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
