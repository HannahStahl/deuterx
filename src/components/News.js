import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';

const News = ({ items }) => {
  const sortedItems = items.sort((a, b) => b.datePublished - a.datePublished);
  const publications = sortedItems.filter(
    (item) => item.cmsPageConfigId === config.publicationItemTypeId,
  );
  const articles = sortedItems.filter(
    (item) => item.cmsPageConfigId === config.articleItemTypeId,
  );
  return (
    <div className="news">
      <img
        src={`${config.publicCloudfrontURL}/deuterx-vials.jpg`}
        alt={config.businessName}
        className="fixed-image"
      />
      <Fade><div className="image-overlay" /></Fade>
      <Fade>
        <div className="news-section-1">
          <div className="news-section-1-content">
            <h1>News and Events</h1>
            <h3>Making waves with heavy water</h3>
          </div>
        </div>
      </Fade>
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
