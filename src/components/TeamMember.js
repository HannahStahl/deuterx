import React, { useState } from 'react';
import PortableText from './PortableText';

const mobile = window.innerWidth <= 991;

export default ({ member, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`team-member${!mobile && index % 2 === 1 ? ' right-aligned' : ''}`}>
      {(mobile || index % 2 === 0) && (
        <a href={member.link}>
          <img src={member.photo.asset.url} alt={member.name} />
        </a>
      )}
      <div className="team-member-details">
        <a href={member.link} className="no-fuschia"><h3>{member.name}</h3></a>
        <p className="team-member-title">{member.title}</p>
        <div className={`team-member-bio${expanded ? '' : ' collapsed'}`}>
          <PortableText text={member.bioRaw} />
        </div>
        <p onClick={() => setExpanded(!expanded)} className="read-more link">
          {`Read ${expanded ? 'less' : 'more'}`}
          <i className={`fas fa-angle-${expanded ? 'up' : 'down'}`} />
        </p>
      </div>
      {!mobile && index % 2 === 1 && (
        <a href={member.link}>
          <img src={member.photo.asset.url} alt={member.name} />
        </a>
      )}
    </div>
  );
};
