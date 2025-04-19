import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';
import PortableText from './PortableText';

const Partnerships = ({ content }) => (
  (content.allPartnerships ? (
    <div className="partnerships">
      <div className="partnerships-section-1">
        <img
          src={`${config.publicCloudfrontURL}/deuterx-handshake-cropped.jpg`}
          alt={config.businessName}
          className="fixed-image partnerships-image"
        />
        <Fade><div className="image-overlay" /></Fade>
        <Fade>
          <div className="partnerships-section-1-content">
            <h1>Compelling Commercial Strategy</h1>
            <h3>and Large Portfolio of Product Opportunities</h3>
          </div>
        </Fade>
      </div>
      <div className="partnerships-section-2">
        <div className="partnerships-cards">
          {content.allPartnerships[0].sections.map((section) => (
            <div className="partnership-card">
              <h3>{section.title}</h3>
              <PortableText text={section.contentRaw} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <></>)
);

export default Partnerships;
