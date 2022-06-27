import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import config from '../config';
import NewsItem from './NewsItem';
import PortableText from './PortableText';

const Home = ({ content }) => (content.allHome ? (
  <>
    <img
      src={`${config.publicCloudfrontURL}/deuterx-water-splash-v2.jpg`}
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
        <h3>{content.allHome[0].intro}</h3>
        <PortableText text={content.allHome[0].summaryRaw} />
        <NavLink to="/about">
          Learn more
          <i className="fas fa-angle-right" />
        </NavLink>
      </div>
    </div>
    <div className="home-section-3">
      <div className="news-cards">
        {[...(content.allArticle || []), ...(content.allPublication || [])]
          .slice(0, 3)
          .map((newsItem) => <NewsItem key={newsItem._id} {...newsItem} />)}
      </div>
      <NavLink to="/news">
        View all news and events
        <i className="fas fa-angle-right" />
      </NavLink>
    </div>
  </>
) : <></>);

export default Home;
