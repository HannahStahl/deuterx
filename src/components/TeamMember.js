import React, { useState } from 'react';
import config from '../config';

const mobile = window.innerWidth <= 991;

export default ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`team-member${!mobile && index % 2 === 1 ? ' right-aligned' : ''}`}>
      {(mobile || index % 2 === 0) && (
        <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
      )}
      <div className="team-member-details">
        <h3>{member.name}</h3>
        <p className="team-member-title">{member.title}</p>
        <p className={`team-member-bio${expanded ? '' : ' collapsed'}`}>{member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</p>
        <p onClick={() => setExpanded(!expanded)} className="link">{`Read ${expanded ? 'less' : 'more'}`}</p>
      </div>
      {!mobile && index % 2 === 1 && (
        <img src={`${config.publicCloudfrontURL}/${member.img}`} alt={member.name} />
      )}
    </div>
  );
};
