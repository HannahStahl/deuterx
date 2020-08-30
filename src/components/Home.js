import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';
import content from '../content.json';

const Home = ({ items }) => (
  <>
    <img
      src={`${config.publicCloudfrontURL}/deuterx-water-splash.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <Fade><div className="image-overlay" /></Fade>
    <Fade>
      <div className="home-section-1">
        <div className="home-section-1-content">
          <h1>Improving Medicines for Patients</h1>
          <h3>with Deuterium-Enabled Chiral Switching</h3>
        </div>
      </div>
    </Fade>
    <div className="home-section-2">
      <div className="home-section-2-content">
        <h3>{content.homeTagline}</h3>
        <p>{content.homeIntro}</p>
        <a href="/about">
          Learn more
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </div>
    <div className="home-section-3">
      <div className="news-cards">
        {items.sort((a, b) => b.datePublished - a.datePublished).slice(0, 3).map((item) => (
          <div
            key={item.itemId}
            className="news-card"
            onClick={() => {
              window.location.href = item.itemPdfLink || `${config.cloudfrontURL}/${item.itemPdf}`;
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
      <a href="/news">
        View all news and events
        <i className="fas fa-angle-right" />
      </a>
    </div>
  </>
);

export default Home;
