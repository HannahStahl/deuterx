import React, { useState } from 'react';
import config from '../config';

const mobile = window.innerWidth <= 991;

export default ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`team-member${!mobile && index % 2 === 1 ? ' right-aligned' : ''}`}>
      {(mobile || index % 2 === 0) && (
        <a href={member.linkedIn}>
          <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
        </a>
      )}
      <div className="team-member-details">
        <a href={member.linkedIn} className="no-fuschia"><h3>{member.name}</h3></a>
        <p className="team-member-title">{member.title}</p>
        <div className={`team-member-bio${expanded ? '' : ' collapsed'}`}>
          {member.bio.map((paragraph) => <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
        </div>
        <p onClick={() => setExpanded(!expanded)} className="read-more link">
          {`Read ${expanded ? 'less' : 'more'}`}
          <i className={`fas fa-angle-${expanded ? 'up' : 'down'}`} />
        </p>
      </div>
      {!mobile && index % 2 === 1 && (
        <a href={member.linkedIn}>
          <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
        </a>
      )}
    </div>
  );
};
