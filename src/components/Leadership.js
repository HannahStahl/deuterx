import React from 'react';
import content from '../content.json';
import config from '../config';

const mobile = window.innerWidth <= 991;

const Leadership = () => (
  <div className="leadership">
    <img
      src={`${config.publicCloudfrontURL}/deuterx-deuterium.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <div className="image-overlay" />
    <div className="leadership-section-1">
      <div className="leadership-section-1-content">
        <h1>Proven Track Record</h1>
        <h3>of Creating Value for Shareholders and Therapeutics for Patients</h3>
      </div>
    </div>
    <div className="leadership-section-2">
      <h1>Management Team</h1>
      <div className="team-members">
        {content.team.map((member, index) => (
          <div key={member.name} className={`team-member${!mobile && index % 2 === 1 ? ' right-aligned' : ''}`}>
            {(mobile || index % 2 === 0) && (
              <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
            )}
            <div className="team-member-details">
              <h3>{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a href="#">Read more</a>
            </div>
            {!mobile && index % 2 === 1 && (
              <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="leadership-section-3">
      <div className="leader-cards">
        <div className="leader-card">
          <h2>Advisors</h2>
          <div className="advisors">
            <ul>
              {content.advisors.map((advisor) => (
                <li key={advisor.name}>
                  <p>
                    <a href={advisor.linkedIn}>{advisor.name}</a>
                    <br />
                    <i>{advisor.title}</i>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="leader-card">
          <h2>KOLs</h2>
          <div className="advisors">
            <ul>
              {content.KOLs.map((KOL) => (
                <li key={KOL.name}>
                  <p>
                    <a href={KOL.linkedIn}>{KOL.name}</a>
                    <br />
                    <i>{KOL.title}</i>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="leader-card">
          <h2>Key Consultants</h2>
          <div className="advisors">
            <ul>
              {content.consultants.map((consultant) => (
                <li key={consultant.name}>
                  <p>
                    <a href={consultant.linkedIn}>{consultant.name}</a>
                    <br />
                    <i>{consultant.title}</i>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Leadership;
