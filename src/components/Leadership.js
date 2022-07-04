import React from 'react';
import { Fade } from 'react-reveal';
import config from '../config';
import TeamMember from './TeamMember';

const Leadership = ({ content }) => (content.allLeadership ? (
  <div className="leadership">
    <img
      src={`${config.publicCloudfrontURL}/deuterx-deuterium-hands.jpg`}
      alt={config.businessName}
      className="fixed-image"
    />
    <Fade><div className="image-overlay" /></Fade>
    <Fade>
      <div className="leadership-section-1">
        <div className="leadership-section-1-content">
          <h1>Proven Track Record</h1>
          <h3>of Creating Value for Shareholders and Therapeutics for Patients</h3>
        </div>
      </div>
    </Fade>
    <div className="leadership-section-2">
      <h1>Management Team</h1>
      <div className="team-members">
        {content.allLeadership[0].managementTeam.map((member, index) => (
          <TeamMember key={member._key} member={member} index={index} />
        ))}
      </div>
    </div>
    <div className="leadership-section-3">
      <div className="leader-cards">
        <div className="leader-card">
          <h2>Advisors</h2>
          <div className="advisors">
            <ul>
              {content.allLeadership[0].advisors.map((advisor) => (
                <li key={advisor.name}>
                  <p>
                    <a href={advisor.link}>{advisor.name}</a>
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
              {content.allLeadership[0].KOLs.map((KOL) => (
                <li key={KOL.name}>
                  <p>
                    <a href={KOL.link}>{KOL.name}</a>
                    <br />
                    <i>{KOL.area}</i>
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
              {content.allLeadership[0].consultants.map((consultant) => (
                <li key={consultant.name}>
                  <p>
                    <a href={consultant.link}>{consultant.name}</a>
                    <br />
                    <i>{consultant.area}</i>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
) : <></>);

export default Leadership;
