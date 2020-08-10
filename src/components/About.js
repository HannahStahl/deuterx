import React from 'react';
import config from '../config';
import content from '../content.json';

const About = () => (
  <>
    <div className="our-approach-section-1">
      <img
        src={`${config.publicCloudfrontURL}/deuterx-molecule.jpg`}
        alt={config.businessName}
        className="fixed-image"
      />
      <div className="image-overlay" />
      <div className="our-approach-section-1-content">
        <h1>Our Revolutionary Approach</h1>
        <h3>Creating Improved NCEs with New IP and Speed to Market</h3>
      </div>
    </div>
    <div className="our-approach-section-2">
      <div className="our-approach-section-2-content">
        {content.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <img
          src={`${config.publicCloudfrontURL}/deuterx-pioglitazone.png`}
          alt="Pioglitazone"
        />
      </div>
    </div>
    <div className="our-approach-section-3">
      <div className="our-approach-section-3-content">
        <h2>Speed to Market</h2>
        {content.speedToMarket.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
    <div className="our-approach-section-4">
      <div className="our-approach-section-4-content">
        <h2>Validation</h2>
        {content.validation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="partnerships-link">
          <a href="/partnerships">View our pipeline & partnerships</a>
        </div>
      </div>
    </div>
  </>
);

export default About;
