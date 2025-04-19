import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import config from '../config';
import PortableText from './PortableText';

const Strategy = ({ content }) => (content.allAbout ? (
  <div className="our-approach">
    <div className="our-approach-section-1">
      <img
        src={`${config.publicCloudfrontURL}/deuterx-molecule-highres.jpg`}
        alt={config.businessName}
        className="fixed-image"
      />
      <Fade><div className="image-overlay" /></Fade>
      <Fade>
        <div className="our-approach-section-1-content">
          <h1>Our Revolutionary Approach</h1>
          <h3>Creating Improved NCEs with New IP and Speed to Market</h3>
        </div>
      </Fade>
    </div>
    <div className="our-approach-section-2">
      <div className="our-approach-section-2-content">
        <PortableText text={content.allAbout[0].summaryRaw} />
        <img
          src={`${config.publicCloudfrontURL}/deuterx-buproprion.png`}
          alt="Pioglitazone"
        />
      </div>
    </div>
    <div className="our-approach-section-2b">
      <div className="our-approach-section-2b-content">
        <h2>Innovation</h2>
        <PortableText text={content.allAbout[0].innovationRaw} />
      </div>
    </div>
    <div className="our-approach-section-3">
      <div className="our-approach-section-3-content">
        <h2>Speed to Market</h2>
        <PortableText text={content.allAbout[0].speedToMarketRaw} />
      </div>
      <i className="fas fa-vial background-icon" />
    </div>
    <div className="our-approach-section-4">
      <div className="our-approach-section-4-content">
        <h2>Validation</h2>
        <PortableText text={content.allAbout[0].validationRaw} />
        <div className="partnerships-link">
          <NavLink to="/partnerships">
            View partnership opportunities
            <i className="fas fa-angle-right" />
          </NavLink>
        </div>
      </div>
    </div>
  </div>
) : <></>);

export default Strategy;
