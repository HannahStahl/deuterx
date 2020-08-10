import React from 'react';
import config from '../config';
import content from '../content.json';

const Home = () => (
  <>
    <img
      src={`${config.publicCloudfrontURL}/deuterx-water-splash.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <div className="image-overlay" />
    <div className="home-section-1">
      <div className="home-section-1-content">
        <h1>Improving Medicines for Patients</h1>
        <h3>with Deuterium-Enabled Chiral Switching</h3>
      </div>
    </div>
    <div className="home-section-2">
      <div className="home-section-2-content">
        <h3>{content.homeTagline}</h3>
        <p>{content.homeIntro}</p>
        <a href="/about">Learn more</a>
      </div>
    </div>
    <div className="home-section-3">
      <div className="news-cards">
        <div className="news-card">
          <h3>News Item Number One Title Goes Here</h3>
          <p>Subtitle for first news item goes here, offering a preview to the full publication.</p>
        </div>
        <div className="news-card">
          <h3>Longer News Item Number Two Title Goes Here</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="news-card">
          <h3>News Item Number Three</h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <a href="/items">View all publications</a>
    </div>
  </>
);

export default Home;
